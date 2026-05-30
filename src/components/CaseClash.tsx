import { useMemo, useState } from "react";
import type { Progress, Term, LegalArea } from "../types";
import { CASES_BY_ID } from "../data/cases";
import { buildSession, requeue, type ClashSession } from "../clash";
import { applyReview } from "../store";
import { CaseCard } from "./CaseCard";
import { CaseScene } from "./CaseScene";

interface Props {
  progress: Progress;
  term: Term;
  onProgressChange: (p: Progress) => void;
  onExit: () => void;
}

type Phase = "answering" | "wrong-nudge" | "revealed";

const AREA_FOR_TERM: Record<Term, LegalArea> = {
  1: "criminal",
  2: "tort",
  3: "contract",
  4: "human-rights",
};

export function CaseClash({ progress, term, onProgressChange, onExit }: Props) {
  const area = AREA_FOR_TERM[term];
  const [session, setSession] = useState<ClashSession>(() =>
    buildSession(progress.cards, area),
  );
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [phase, setPhase] = useState<Phase>("answering");
  const [attempts, setAttempts] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = session.questions[session.index];
  const targetCase = q ? CASES_BY_ID[q.caseId] : null;

  const totalPlanned = useMemo(() => session.questions.length, [session.questions.length]);

  if (finished || !q || !targetCase) {
    const correct = session.answers.filter((a) => a.correct).length;
    const firstTry = session.answers.filter((a) => a.firstTry && a.correct).length;
    const total = session.answers.length;
    return (
      <div className="brief-stage">
        <div className="brief-hero" style={{ background: "linear-gradient(135deg,#1a1a3a,#3a2a5a)" }}>
          <div className="scene-emoji">⚔️</div>
          <div>
            <h2>Clash complete.</h2>
            <p className="scenario">
              {firstTry}/{total} nailed first try · {correct}/{total} eventually correct
            </p>
          </div>
        </div>
        <div className="brief-body">
          <p className="pupil-quote">
            {term === 2
              ? '— Mr Atkin KC: "The neighbour principle is a habit of mind. Drill it."'
              : '— Ms Hale KC: "Memory is a muscle. Come back tomorrow."'}
          </p>
          <div className="controls">
            <button onClick={onExit}>Back to chambers</button>
            <button
              className="btn-primary"
              onClick={() => {
                setSession(buildSession(progress.cards, area));
                setSelectedIdx(null);
                setPhase("answering");
                setAttempts(0);
                setFinished(false);
              }}
            >
              Another round
            </button>
          </div>
        </div>
      </div>
    );
  }

  function submit() {
    if (selectedIdx === null) return;
    const isCorrect = selectedIdx === q.correctIndex;
    setAttempts((n) => n + 1);
    setPhase(isCorrect ? "revealed" : "wrong-nudge");
  }

  function tryAgain() {
    setSelectedIdx(null);
    setPhase("answering");
  }

  function giveUp() {
    setPhase("revealed");
  }

  function recordAndAdvance(grade: "again" | "hard" | "good" | "easy") {
    const wasFirstTry = attempts === 1 && grade !== "again";
    const wasCorrect = grade !== "again";
    let next: ClashSession = {
      ...session,
      answers: [
        ...session.answers,
        { caseId: q.caseId, correct: wasCorrect, firstTry: wasFirstTry },
      ],
    };
    if (grade === "again") next = requeue(next, next.index, area);
    next = { ...next, index: next.index + 1 };
    setSession(next);

    onProgressChange(applyReview(progress, q.caseId, grade));
    setSelectedIdx(null);
    setPhase("answering");
    setAttempts(0);

    if (next.index >= next.questions.length) setFinished(true);
  }

  return (
    <div className="brief-stage">
      <div className="brief-hero" style={{ background: targetCase.visual.palette }}>
        <div className="scene-emoji">
          {q.round === "name-the-case" ? "❓" : q.round === "recall-principle" ? "📜" : "🏷️"}
        </div>
        <div>
          <h2>
            {q.round === "name-the-case"
              ? "Name the case"
              : q.round === "recall-principle"
              ? "Recall the point of law"
              : "Spot the topic"}
          </h2>
          <p className="scenario">{q.prompt}</p>
        </div>
      </div>
      <div className="brief-body">
        <div className="progress-pill">
          Card {Math.min(session.index + 1, totalPlanned)} of {totalPlanned}
          {session.questions.length > totalPlanned && ` (+${session.questions.length - totalPlanned} requeued)`}
          {attempts > 0 && phase !== "answering" && ` · attempt ${attempts}`}
        </div>

        {q.round === "name-the-case" ? (
          <div className="authority-grid" style={{ marginTop: "1rem" }}>
            {q.choices.map((id, idx) => {
              const c = CASES_BY_ID[id];
              let state: "default" | "selected" | "correct" | "wrong" = "default";
              if (phase === "revealed") {
                if (idx === q.correctIndex) state = "correct";
                else if (idx === selectedIdx) state = "wrong";
              } else if (idx === selectedIdx) {
                state = "selected";
              }
              return (
                <CaseCard
                  key={id}
                  c={c}
                  state={state}
                  showPrinciple={phase === "revealed"}
                  hideCaption={phase !== "revealed"}
                  onClick={() => phase === "answering" && setSelectedIdx(idx)}
                />
              );
            })}
          </div>
        ) : (
          <>
            {q.round === "recall-principle" && (
              <div className="clash-scene-preview">
                <CaseScene caseId={q.caseId} />
              </div>
            )}
            <div className="choice-list">
              {q.choices.map((text, idx) => {
                let cls = "choice";
                if (phase === "revealed") {
                  if (idx === q.correctIndex) cls += " correct";
                  else if (idx === selectedIdx) cls += " wrong";
                } else if (idx === selectedIdx) {
                  cls += " selected";
                }
                return (
                  <button
                    key={idx}
                    className={cls}
                    onClick={() => phase === "answering" && setSelectedIdx(idx)}
                  >
                    {text}
                  </button>
                );
              })}
            </div>
          </>
        )}

        {phase === "wrong-nudge" && (
          <div className="feedback bad">
            <strong>Not quite.</strong>
            Have another look — you've had {attempts} {attempts === 1 ? "attempt" : "attempts"}.
          </div>
        )}

        {phase === "revealed" && (
          <div className={`feedback ${attempts === 1 ? "good" : "bad"}`}>
            <strong>
              {attempts === 1 ? "Right." : "Filed for revision."}
            </strong>
            <div>{targetCase.principle}</div>
            <div style={{ marginTop: "0.5em", fontStyle: "italic", opacity: 0.85 }}>
              {targetCase.facts}
            </div>
          </div>
        )}

        <div className="controls">
          <button onClick={onExit}>End session</button>

          {phase === "answering" && (
            <button
              className="btn-primary"
              disabled={selectedIdx === null}
              onClick={submit}
            >
              Submit
            </button>
          )}

          {phase === "wrong-nudge" && (
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button onClick={giveUp}>Reveal answer</button>
              <button className="btn-primary" onClick={tryAgain}>
                Try again
              </button>
            </div>
          )}

          {phase === "revealed" && attempts === 1 && (
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button onClick={() => recordAndAdvance("hard")}>Hard</button>
              <button
                className="btn-primary"
                onClick={() => recordAndAdvance("good")}
              >
                Good
              </button>
              <button onClick={() => recordAndAdvance("easy")}>Easy</button>
            </div>
          )}

          {phase === "revealed" && attempts > 1 && (
            <button
              className="btn-primary"
              onClick={() => recordAndAdvance("again")}
            >
              Next (requeue this one)
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
