import { useEffect, useMemo, useState } from "react";
import type { Progress, Term } from "../types";
import { AREA_FOR_TERM } from "../types";
import type { ConceptCard, ConceptDrill } from "../data/conceptCards";
import { conceptCardsForArea } from "../data/conceptCards";
import { CASES_BY_ID } from "../data/cases";
import { recordConceptCardRun } from "../store";

interface Props {
  term: Term;
  progress: Progress;
  onProgressChange: (p: Progress) => void;
  onExit: () => void;
}

type Phase = "list" | "drilling" | "review";

interface DrillRound {
  card: ConceptCard;
  queue: number[];
  index: number;
  revealed: boolean;
  gotIt: number[];
  needsPractice: number[];
}

export function ConceptCards({ term, progress, onProgressChange, onExit }: Props) {
  const area = AREA_FOR_TERM[term];
  const cards = useMemo(
    () => (area === "criminal" || area === "tort" ? conceptCardsForArea(area) : []),
    [area],
  );

  const [phase, setPhase] = useState<Phase>("list");
  const [round, setRound] = useState<DrillRound | null>(null);
  const [recordedRunId, setRecordedRunId] = useState<string | null>(null);

  useEffect(() => {
    if (
      phase === "review" &&
      round &&
      recordedRunId !== `${round.card.id}:${round.gotIt.length}:${round.needsPractice.length}`
    ) {
      const runId = `${round.card.id}:${round.gotIt.length}:${round.needsPractice.length}`;
      setRecordedRunId(runId);
      onProgressChange(
        recordConceptCardRun(
          progress,
          round.card.id,
          round.gotIt.length,
          round.needsPractice.length,
        ),
      );
    }
  }, [phase, round, recordedRunId, progress, onProgressChange]);

  if (cards.length === 0) {
    return (
      <div>
        <div className="controls" style={{ marginBottom: "1rem" }}>
          <button onClick={onExit}>← Back to chambers</button>
        </div>
        <section className="empty-state">
          <h3>No concept cards for this term yet</h3>
          <p>Concept Cards are available for Criminal Law and Tort.</p>
        </section>
      </div>
    );
  }

  function startCard(card: ConceptCard) {
    setRecordedRunId(null);
    setRound({
      card,
      queue: card.drills.map((_, i) => i),
      index: 0,
      revealed: false,
      gotIt: [],
      needsPractice: [],
    });
    setPhase("drilling");
  }

  function reveal() {
    if (!round) return;
    setRound({ ...round, revealed: true });
  }

  function markGotIt() {
    if (!round) return;
    advance(true);
  }

  function markNeedsPractice() {
    if (!round) return;
    advance(false);
  }

  function advance(gotIt: boolean) {
    if (!round) return;
    const drillIdx = round.queue[round.index];
    const nextGotIt = gotIt ? [...round.gotIt, drillIdx] : round.gotIt;
    const nextNeedsPractice = gotIt
      ? round.needsPractice
      : [...round.needsPractice, drillIdx];
    const nextIndex = round.index + 1;
    if (nextIndex >= round.queue.length) {
      setRound({
        ...round,
        gotIt: nextGotIt,
        needsPractice: nextNeedsPractice,
        revealed: false,
      });
      setPhase("review");
      return;
    }
    setRound({
      ...round,
      gotIt: nextGotIt,
      needsPractice: nextNeedsPractice,
      index: nextIndex,
      revealed: false,
    });
  }

  function redoWeakOnes() {
    if (!round) return;
    if (round.needsPractice.length === 0) return;
    setRecordedRunId(null);
    setRound({
      card: round.card,
      queue: round.needsPractice,
      index: 0,
      revealed: false,
      gotIt: [],
      needsPractice: [],
    });
    setPhase("drilling");
  }

  function backToList() {
    setRound(null);
    setRecordedRunId(null);
    setPhase("list");
  }

  if (phase === "list" || !round) {
    return (
      <ConceptList
        cards={cards}
        progress={progress}
        onPick={startCard}
        onExit={onExit}
      />
    );
  }

  if (phase === "drilling") {
    const drillIdx = round.queue[round.index];
    const drill = round.card.drills[drillIdx];
    return (
      <DrillPlayer
        card={round.card}
        drill={drill}
        position={round.index + 1}
        total={round.queue.length}
        revealed={round.revealed}
        onReveal={reveal}
        onGotIt={markGotIt}
        onNeedsPractice={markNeedsPractice}
        onExit={backToList}
      />
    );
  }

  return (
    <ReviewScreen
      card={round.card}
      gotItCount={round.gotIt.length}
      needsPracticeCount={round.needsPractice.length}
      onRedoWeak={round.needsPractice.length > 0 ? redoWeakOnes : undefined}
      onRedoAll={() => startCard(round.card)}
      onBackToList={backToList}
    />
  );
}

interface ListProps {
  cards: ConceptCard[];
  progress: Progress;
  onPick: (c: ConceptCard) => void;
  onExit: () => void;
}

function ConceptList({ cards, progress, onPick, onExit }: ListProps) {
  return (
    <div>
      <div className="controls" style={{ marginBottom: "1rem" }}>
        <button onClick={onExit}>← Back to chambers</button>
      </div>

      <section>
        <h2 style={{ marginBottom: "0.25rem" }}>📘 Concept Cards</h2>
        <p className="pupil-quote" style={{ marginTop: 0 }}>
          Bullet-point summaries plus self-check drills. Read the key points,
          then drill yourself one question at a time — reveal, judge, move on.
        </p>
      </section>

      <section className="concept-list">
        {cards.map((c) => {
          const stats = progress.conceptStats?.[c.id];
          const lastRun = stats?.lastRun;
          const lastTotal = lastRun ? lastRun.gotIt + lastRun.needsPractice : 0;
          return (
            <button
              key={c.id}
              className="concept-card-tile"
              onClick={() => onPick(c)}
            >
              <div className="concept-card-meta">
                <span className="concept-card-tag">{c.chapter}</span>
                {c.statute && (
                  <span className="concept-card-statute">{c.statute}</span>
                )}
              </div>
              <h3 className="concept-card-title">{c.title}</h3>
              <p className="concept-card-subtitle">{c.subtitle}</p>
              <div className="concept-card-foot">
                <span>
                  <strong>{c.drills.length}</strong> drill
                  {c.drills.length === 1 ? "" : "s"}
                </span>
                <span>
                  <strong>{c.keyPoints.length}</strong> key points
                </span>
                {lastRun && (
                  <span>
                    Last run: <strong>{lastRun.gotIt}</strong>/{lastTotal}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </section>
    </div>
  );
}

interface DrillProps {
  card: ConceptCard;
  drill: ConceptDrill;
  position: number;
  total: number;
  revealed: boolean;
  onReveal: () => void;
  onGotIt: () => void;
  onNeedsPractice: () => void;
  onExit: () => void;
}

function DrillPlayer({
  card,
  drill,
  position,
  total,
  revealed,
  onReveal,
  onGotIt,
  onNeedsPractice,
  onExit,
}: DrillProps) {
  return (
    <div>
      <div className="controls" style={{ marginBottom: "1rem" }}>
        <button onClick={onExit}>← Back to concept cards</button>
        <div className="hangman-stats">
          Drill <strong>{position}</strong> of {total}
        </div>
      </div>

      <section className="concept-drill-board">
        <header className="concept-drill-header">
          <div className="concept-card-meta">
            <span className="concept-card-tag">{card.chapter}</span>
            {card.statute && (
              <span className="concept-card-statute">{card.statute}</span>
            )}
          </div>
          <h2>{card.title}</h2>
          <p className="concept-card-subtitle">{card.subtitle}</p>
        </header>

        <details className="concept-keypoints" open>
          <summary>Key points ({card.keyPoints.length})</summary>
          <ul>
            {card.keyPoints.map((pt, i) => (
              <li key={i}>{pt}</li>
            ))}
          </ul>
          {card.caseIds.length > 0 && (
            <div className="concept-key-authorities">
              <span className="concept-key-authorities-label">Key authorities:</span>{" "}
              {card.caseIds.map((id, i) => (
                <span key={id} className="concept-authority">
                  {CASES_BY_ID[id]?.name ?? id}
                  {i < card.caseIds.length - 1 && " · "}
                </span>
              ))}
            </div>
          )}
        </details>

        <div className="concept-drill-question">
          <div className="concept-drill-question-label">Question {position}</div>
          <div className="concept-drill-prompt">{drill.prompt}</div>
        </div>

        {!revealed && (
          <div className="concept-drill-actions">
            <button className="btn-primary" onClick={onReveal}>
              Reveal answer ▼
            </button>
          </div>
        )}

        {revealed && (
          <>
            <div className="concept-drill-answer">
              <div className="concept-drill-answer-label">Model answer</div>
              <div className="concept-drill-answer-body">{drill.answer}</div>
              {drill.markScheme && (
                <div className="concept-drill-markscheme">
                  <span className="concept-drill-markscheme-label">
                    Mark scheme:
                  </span>{" "}
                  {drill.markScheme}
                </div>
              )}
            </div>

            <div className="concept-drill-actions">
              <button
                className="concept-judge concept-judge-needs"
                onClick={onNeedsPractice}
              >
                ↻ Need more practice
              </button>
              <button
                className="concept-judge concept-judge-got btn-primary"
                onClick={onGotIt}
              >
                ✓ Got it
              </button>
            </div>
          </>
        )}
      </section>
    </div>
  );
}

interface ReviewProps {
  card: ConceptCard;
  gotItCount: number;
  needsPracticeCount: number;
  onRedoWeak?: () => void;
  onRedoAll: () => void;
  onBackToList: () => void;
}

function ReviewScreen({
  card,
  gotItCount,
  needsPracticeCount,
  onRedoWeak,
  onRedoAll,
  onBackToList,
}: ReviewProps) {
  const total = gotItCount + needsPracticeCount;
  const pct = total > 0 ? Math.round((gotItCount / total) * 100) : 0;
  return (
    <div>
      <div className="controls" style={{ marginBottom: "1rem" }}>
        <button onClick={onBackToList}>← Back to concept cards</button>
      </div>

      <section className="concept-review">
        <h2 style={{ marginBottom: "0.25rem" }}>{card.title} — drill complete</h2>
        <p className="pupil-quote" style={{ marginTop: 0 }}>
          Honest self-assessment. Cards you flagged for practice will be ready to
          run again.
        </p>

        <div className="concept-review-score">
          <div className="concept-review-pct">
            <strong>{pct}%</strong>
            <span>first-try recall</span>
          </div>
          <div className="concept-review-tally">
            <div className="concept-review-bucket concept-bucket-got">
              <strong>{gotItCount}</strong>
              <span>Got it</span>
            </div>
            <div className="concept-review-bucket concept-bucket-needs">
              <strong>{needsPracticeCount}</strong>
              <span>Need practice</span>
            </div>
          </div>
        </div>

        <div className="controls" style={{ marginTop: "1rem" }}>
          {onRedoWeak && (
            <button className="btn-primary" onClick={onRedoWeak}>
              Redo weak ones ({needsPracticeCount}) →
            </button>
          )}
          <button onClick={onRedoAll}>Redo all drills</button>
          <button onClick={onBackToList}>Pick another card</button>
        </div>
      </section>
    </div>
  );
}
