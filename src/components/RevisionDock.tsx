import type { Progress } from "../types";
import { CASES } from "../data/cases";
import { CaseCard } from "./CaseCard";

interface Props {
  progress: Progress;
  onBack: () => void;
  onStartClash: () => void;
}

export function RevisionDock({ progress, onBack, onStartClash }: Props) {
  const sorted = [...CASES].sort((a, b) => {
    const am = progress.cards[a.id]?.mastery ?? 0;
    const bm = progress.cards[b.id]?.mastery ?? 0;
    if (am !== bm) return am - bm;
    return (progress.cards[a.id]?.dueAt ?? 0) - (progress.cards[b.id]?.dueAt ?? 0);
  });

  return (
    <div>
      <div className="controls" style={{ marginBottom: "1rem" }}>
        <button onClick={onBack}>← Back to chambers</button>
        <button className="btn-primary" onClick={onStartClash}>⚔️ Clash the weakest</button>
      </div>
      <h2>Revision Dock</h2>
      <p style={{ color: "var(--muted)" }}>
        Cases you've stumbled on appear first. Tap any card to reveal its principle.
      </p>
      <div className="dock-grid">
        {sorted.map((c) => {
          const state = progress.cards[c.id];
          const mastery = state?.mastery ?? 0;
          return (
            <div key={c.id}>
              <CaseCard c={c} showPrinciple />
              <div className="mastery-bar">
                <div style={{ width: `${(mastery / 5) * 100}%` }} />
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--muted)", marginTop: "0.3rem" }}>
                Mastery {mastery}/5 · {state?.reps ?? 0} reviews · {state?.lapses ?? 0} lapses
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
