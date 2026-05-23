import { useState } from "react";
import type { Progress } from "../types";
import { CASES } from "../data/cases";
import { CaseCard } from "./CaseCard";

interface Props {
  progress: Progress;
  onBack: () => void;
  onStartClash: () => void;
}

export function RevisionDock({ progress, onBack, onStartClash }: Props) {
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});
  const [allRevealed, setAllRevealed] = useState(false);

  const sorted = [...CASES].sort((a, b) => {
    const am = progress.cards[a.id]?.mastery ?? 0;
    const bm = progress.cards[b.id]?.mastery ?? 0;
    if (am !== bm) return am - bm;
    return (progress.cards[a.id]?.dueAt ?? 0) - (progress.cards[b.id]?.dueAt ?? 0);
  });

  function toggle(id: string) {
    setFlipped((f) => ({ ...f, [id]: !f[id] }));
  }

  return (
    <div>
      <div className="controls" style={{ marginBottom: "1rem" }}>
        <button onClick={onBack}>← Back to chambers</button>
        <button className="btn-primary" onClick={onStartClash}>⚔️ Clash the weakest</button>
        <button
          onClick={() => {
            setAllRevealed((v) => !v);
            setFlipped({});
          }}
        >
          {allRevealed ? "Hide points of law" : "Reveal points of law"}
        </button>
      </div>
      <h2>Revision Dock</h2>
      <p style={{ color: "var(--muted)" }}>
        Weakest cases first. Tap a card to flip it and reveal the point of law — try to recall before you peek.
      </p>
      <div className="dock-grid">
        {sorted.map((c) => {
          const state = progress.cards[c.id];
          const mastery = state?.mastery ?? 0;
          const show = allRevealed || !!flipped[c.id];
          return (
            <div key={c.id}>
              <CaseCard
                c={c}
                showPrinciple={show}
                onClick={() => toggle(c.id)}
              />
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
