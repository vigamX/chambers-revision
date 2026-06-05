import { useEffect, useMemo, useRef, useState } from "react";
import type { Progress, Term } from "../types";
import { AREA_FOR_TERM } from "../types";
import type { CitationPrompt } from "../data/citations";
import { answerMatches, promptsForArea } from "../data/citations";
import { recordCitationResult } from "../store";

interface Props {
  term: Term;
  progress: Progress;
  onProgressChange: (p: Progress) => void;
  onExit: () => void;
}

const ROUND_SECONDS = 60;
const RECENT_WINDOW = 24;

type Phase = "idle" | "playing" | "ended";
type Feedback = { kind: "right" | "wrong" | "skip"; answer: string; prompt: string } | null;

function shufflePick(pool: CitationPrompt[], recent: Set<string>): CitationPrompt {
  const candidates = pool.filter((p) => !recent.has(citationKey(p)));
  const choosable = candidates.length > 0 ? candidates : pool;
  return choosable[Math.floor(Math.random() * choosable.length)];
}

function citationKey(p: CitationPrompt): string {
  return `${p.caseId}:${p.side}`;
}

export function CitationSprint({ term, progress, onProgressChange, onExit }: Props) {
  const area = AREA_FOR_TERM[term];
  const pool = useMemo(
    () => (area === "criminal" || area === "tort" ? promptsForArea(area) : []),
    [area],
  );

  const [phase, setPhase] = useState<Phase>("idle");
  const [secondsLeft, setSecondsLeft] = useState(ROUND_SECONDS);
  const [score, setScore] = useState(0);
  const [attempted, setAttempted] = useState(0);
  const [current, setCurrent] = useState<CitationPrompt | null>(null);
  const [recent, setRecent] = useState<Set<string>>(new Set());
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState<Feedback>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const resolvedRef = useRef(false);

  useEffect(() => {
    if (phase !== "playing") return;
    if (secondsLeft <= 0) {
      setPhase("ended");
      return;
    }
    const t = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [phase, secondsLeft]);

  useEffect(() => {
    if (phase === "ended" && !resolvedRef.current) {
      resolvedRef.current = true;
      onProgressChange(recordCitationResult(progress, score, attempted));
    }
    if (phase === "playing" && inputRef.current) {
      inputRef.current.focus();
    }
  }, [phase, score, attempted, progress, onProgressChange]);

  function start() {
    if (pool.length === 0) return;
    const first = shufflePick(pool, new Set());
    resolvedRef.current = false;
    setPhase("playing");
    setSecondsLeft(ROUND_SECONDS);
    setScore(0);
    setAttempted(0);
    setCurrent(first);
    setRecent(new Set([citationKey(first)]));
    setInput("");
    setFeedback(null);
  }

  function advance(nextRecent: Set<string>) {
    while (nextRecent.size > RECENT_WINDOW) {
      const first = nextRecent.values().next().value;
      if (first === undefined) break;
      nextRecent.delete(first);
    }
    const next = shufflePick(pool, nextRecent);
    nextRecent.add(citationKey(next));
    setCurrent(next);
    setRecent(nextRecent);
    setInput("");
  }

  function submit() {
    if (!current || phase !== "playing") return;
    const guess = input.trim();
    if (!guess) return;
    const correct = answerMatches(current, guess);
    setAttempted((a) => a + 1);
    if (correct) setScore((s) => s + 1);
    setFeedback({
      kind: correct ? "right" : "wrong",
      answer: current.answer,
      prompt: current.fullName,
    });
    advance(new Set(recent));
  }

  function skip() {
    if (!current || phase !== "playing") return;
    setAttempted((a) => a + 1);
    setFeedback({
      kind: "skip",
      answer: current.answer,
      prompt: current.fullName,
    });
    advance(new Set(recent));
  }

  function onKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      submit();
    } else if (e.key === "Tab" || (e.key === "ArrowRight" && e.shiftKey)) {
      e.preventDefault();
      skip();
    }
  }

  const stats = progress.gameStats?.citation;

  if (pool.length === 0) {
    return (
      <div>
        <div className="controls" style={{ marginBottom: "1rem" }}>
          <button onClick={onExit}>← Back to games</button>
        </div>
        <section className="empty-state">
          <h3>No citations for this term yet</h3>
          <p>Citation Sprint is available for Criminal Law and Tort.</p>
        </section>
      </div>
    );
  }

  return (
    <div>
      <div className="controls" style={{ marginBottom: "1rem" }}>
        <button onClick={onExit}>← Back to games</button>
        {stats && (
          <div className="hangman-stats">
            Best <strong>{stats.bestScore}</strong> · {stats.rounds} round
            {stats.rounds === 1 ? "" : "s"} · {stats.totalCorrect}/{stats.totalAttempted} all-time
          </div>
        )}
      </div>

      <section className="citation-board">
        <div className="citation-hud">
          <div className="citation-timer" data-low={secondsLeft <= 10 && phase === "playing"}>
            <span className="citation-timer-label">Time</span>
            <span className="citation-timer-value">{secondsLeft}s</span>
          </div>
          <div className="citation-score">
            <span className="citation-score-label">Score</span>
            <span className="citation-score-value">{score}</span>
          </div>
          <div className="citation-attempts">
            <span className="citation-score-label">Attempted</span>
            <span className="citation-score-value">{attempted}</span>
          </div>
        </div>

        {phase === "idle" && (
          <div className="citation-intro">
            <h3>📚 Citation Sprint</h3>
            <p>
              Sixty seconds. The board shows a case with one party blanked out.
              Type the missing name and hit <kbd>Enter</kbd>. <kbd>Tab</kbd> to
              skip. Surname or first word is usually enough.
            </p>
            <p className="citation-pool">
              {pool.length} prompts loaded for {area === "tort" ? "Tort" : "Criminal Law"}.
            </p>
            <button className="btn-primary" onClick={start}>
              Start the sprint →
            </button>
          </div>
        )}

        {phase === "playing" && current && (
          <div className="citation-play">
            <div className="citation-prompt">
              <span className="citation-prompt-text">{current.visible}</span>
              <span className="citation-prompt-year">({current.year})</span>
            </div>

            <p className="citation-clue">
              <span className="citation-clue-label">Clue:</span> {current.hint}
            </p>

            <div className="citation-input-row">
              <input
                ref={inputRef}
                className="citation-input"
                placeholder="Type the missing party…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKey}
                autoComplete="off"
                spellCheck={false}
                autoFocus
              />
              <button className="btn-primary" onClick={submit}>
                Enter
              </button>
              <button onClick={skip} title="Tab to skip">
                Skip
              </button>
            </div>

            {feedback && (
              <div className={`citation-feedback citation-feedback-${feedback.kind}`}>
                {feedback.kind === "right" && (
                  <>✅ <strong>{feedback.answer}</strong> — <em>{feedback.prompt}</em></>
                )}
                {feedback.kind === "wrong" && (
                  <>❌ Was <strong>{feedback.answer}</strong> — <em>{feedback.prompt}</em></>
                )}
                {feedback.kind === "skip" && (
                  <>⏭ Skipped — <strong>{feedback.answer}</strong> — <em>{feedback.prompt}</em></>
                )}
              </div>
            )}
          </div>
        )}

        {phase === "ended" && (
          <div className="citation-result">
            <h3>Sprint over</h3>
            <p className="citation-final-score">
              <strong>{score}</strong> correct / {attempted} attempted
            </p>
            {stats && score === stats.bestScore && stats.bestScore > 0 && stats.rounds > 1 && (
              <p className="citation-pb">🎉 Equalled your personal best.</p>
            )}
            {stats && score > 0 && stats.rounds === 1 && (
              <p className="citation-pb">🎉 First sprint logged.</p>
            )}
            <div className="controls" style={{ marginTop: "1rem" }}>
              <button className="btn-primary" onClick={start}>
                Run another sprint →
              </button>
              <button onClick={onExit}>Back to games</button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
