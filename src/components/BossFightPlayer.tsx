import { useState } from "react";
import type { Progress, BossResult } from "../types";
import type { BossFight, BossStep } from "../data/boss";
import { CASES_BY_ID } from "../data/cases";
import { CaseCard } from "./CaseCard";

interface Props {
  boss: BossFight;
  progress: Progress;
  onProgressChange: (p: Progress) => void;
  onExit: () => void;
}

interface AnsweredStep {
  selectedChoice: string | null;
  selectedAuthorities: string[];
  marksEarned: number;
  marksAvailable: number;
}

function gradeBand(pct: number): BossResult["band"] {
  if (pct >= 80) return "A*";
  if (pct >= 70) return "A";
  if (pct >= 60) return "B";
  if (pct >= 50) return "C";
  return "U";
}

function gradeBandCopy(band: BossResult["band"]): { headline: string; flavour: string } {
  switch (band) {
    case "A*":
      return {
        headline: "Called to the bar.",
        flavour:
          "Ms Hale signs the chambers register without comment. From her, that is praise.",
      };
    case "A":
      return {
        headline: "Tenancy offered.",
        flavour:
          "A clean pass. Read your weakest authorities again tomorrow morning.",
      };
    case "B":
      return {
        headline: "Pupillage extended.",
        flavour:
          "You'll do — but cut the loose authorities. The bench will not be as patient as Ms Hale.",
      };
    case "C":
      return {
        headline: "Borderline.",
        flavour:
          "You are missing the point of law on too many issues. Drill the dock.",
      };
    case "U":
      return {
        headline: "Retake the term.",
        flavour:
          "Ms Hale closes the file. 'Read it all again. We start over Monday.'",
      };
  }
}

function scoreAuthorities(step: BossStep, selected: string[]): number {
  const correct = new Set(step.correctAuthorities ?? []);
  const sel = new Set(selected);
  if (!step.partialCredit) {
    const exact =
      sel.size === correct.size && [...sel].every((id) => correct.has(id));
    return exact ? step.marks : 0;
  }
  let right = 0;
  let wrong = 0;
  for (const id of sel) {
    if (correct.has(id)) right += 1;
    else wrong += 1;
  }
  const missed = [...correct].filter((id) => !sel.has(id)).length;
  const denom = correct.size + Math.max(0, wrong);
  if (denom === 0) return 0;
  const ratio = Math.max(0, right - 0.5 * wrong - 0.5 * missed) / correct.size;
  return Math.round(step.marks * Math.min(1, Math.max(0, ratio)) * 2) / 2;
}

export function BossFightPlayer({ boss, progress, onProgressChange, onExit }: Props) {
  const [stepIdx, setStepIdx] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [selectedAuthorities, setSelectedAuthorities] = useState<string[]>([]);
  const [answered, setAnswered] = useState<AnsweredStep[]>([]);
  const [finished, setFinished] = useState(false);
  const [locked, setLocked] = useState(false);

  const step = boss.steps[stepIdx];
  const isLastStep = stepIdx === boss.steps.length - 1;

  function lockIn() {
    if (locked) return;
    let marks = 0;
    if (step.kind === "authorities") {
      marks = scoreAuthorities(step, selectedAuthorities);
    } else {
      const choice = step.choices?.find((c) => c.id === selectedChoice);
      marks = choice?.marks ?? 0;
    }
    setAnswered((a) => [
      ...a,
      {
        selectedChoice,
        selectedAuthorities,
        marksEarned: marks,
        marksAvailable: step.marks,
      },
    ]);
    setLocked(true);
  }

  function nextStep() {
    if (isLastStep) {
      finish();
      return;
    }
    setStepIdx((i) => i + 1);
    setSelectedChoice(null);
    setSelectedAuthorities([]);
    setLocked(false);
  }

  function finish() {
    const totalEarned = answered.reduce((s, a) => s + a.marksEarned, 0);
    const totalAvailable = boss.steps.reduce((s, st) => s + st.marks, 0);
    const pct = totalAvailable === 0 ? 0 : (totalEarned / totalAvailable) * 100;
    const band = gradeBand(pct);
    const result: BossResult = {
      bossId: boss.id,
      marksScored: totalEarned,
      marksAvailable: totalAvailable,
      band,
      completedAt: Date.now(),
    };
    const existing = progress.bossResults[boss.id];
    const keepExisting = existing && existing.marksScored > totalEarned;
    onProgressChange({
      ...progress,
      bossResults: {
        ...progress.bossResults,
        [boss.id]: keepExisting ? existing : result,
      },
    });
    setFinished(true);
  }

  if (finished) {
    const totalEarned = answered.reduce((s, a) => s + a.marksEarned, 0);
    const totalAvailable = boss.steps.reduce((s, st) => s + st.marks, 0);
    const pct = totalAvailable === 0 ? 0 : (totalEarned / totalAvailable) * 100;
    const band = gradeBand(pct);
    const { headline, flavour } = gradeBandCopy(band);
    const best = progress.bossResults[boss.id];

    return (
      <div className="brief-stage">
        <div className="brief-hero" style={{ background: boss.scene.palette }}>
          <div className="scene-emoji">{boss.scene.emoji}</div>
          <div>
            <h2>{headline}</h2>
            <p className="scenario">{flavour}</p>
          </div>
        </div>
        <div className="brief-body">
          <div className="boss-score">
            <div className="boss-band" data-band={band}>{band}</div>
            <div className="boss-marks">
              <div className="boss-marks-big">
                {totalEarned} / {totalAvailable}
              </div>
              <div className="boss-marks-small">{pct.toFixed(0)}%</div>
            </div>
          </div>

          {best && best.marksScored !== totalEarned && (
            <p className="pupil-quote">
              Best result so far: {best.marksScored}/{best.marksAvailable} ({best.band})
            </p>
          )}

          <h3 style={{ marginTop: "1.5rem" }}>Step-by-step</h3>
          <div className="boss-breakdown">
            {boss.steps.map((s, i) => {
              const ans = answered[i];
              if (!ans) return null;
              return (
                <div key={i} className="boss-breakdown-row">
                  <div className="boss-breakdown-step">Step {i + 1}</div>
                  <div className="boss-breakdown-prompt">{s.prompt}</div>
                  <div className="boss-breakdown-marks">
                    {ans.marksEarned}/{ans.marksAvailable}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="controls" style={{ marginTop: "1.5rem" }}>
            <button onClick={onExit}>Return to chambers</button>
          </div>
        </div>
      </div>
    );
  }

  const canSubmit =
    step.kind === "authorities"
      ? selectedAuthorities.length > 0
      : selectedChoice !== null;

  return (
    <div className="brief-stage">
      <div className="brief-hero" style={{ background: boss.scene.palette }}>
        <div className="scene-emoji">{boss.scene.emoji}</div>
        <div>
          <h2>{boss.title}</h2>
          <p className="scenario" style={{ whiteSpace: "pre-line" }}>
            {boss.scenario}
          </p>
        </div>
      </div>
      <div className="brief-body">
        <div className="progress-pill">
          Step {stepIdx + 1} of {boss.steps.length} · {step.kind.toUpperCase()} · {step.marks} marks
        </div>

        {step.kind === "authorities" ? (
          <div className="brief-step">
            <h3>{step.prompt}</h3>
            <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
              Tap cards to add or remove them from your bundle. No retry — choose carefully.
            </p>
            <div className="authority-grid">
              {(step.authorityPool ?? []).map((id) => {
                const c = CASES_BY_ID[id];
                const isSelected = selectedAuthorities.includes(id);
                const correctSet = new Set(step.correctAuthorities ?? []);
                let visual: "default" | "selected" | "correct" | "wrong" = "default";
                if (locked) {
                  const isCorrectCase = correctSet.has(id);
                  if (isSelected && isCorrectCase) visual = "correct";
                  else if (isSelected && !isCorrectCase) visual = "wrong";
                  else if (!isSelected && isCorrectCase) visual = "correct";
                } else if (isSelected) {
                  visual = "selected";
                }
                return (
                  <CaseCard
                    key={id}
                    c={c}
                    state={visual}
                    showPrinciple={locked}
                    onClick={() => {
                      if (locked) return;
                      const next = isSelected
                        ? selectedAuthorities.filter((x) => x !== id)
                        : [...selectedAuthorities, id];
                      setSelectedAuthorities(next);
                    }}
                  />
                );
              })}
            </div>
          </div>
        ) : (
          <div className="brief-step">
            <h3>{step.prompt}</h3>
            <div className="choice-list">
              {step.choices?.map((c) => {
                const isSelected = c.id === selectedChoice;
                let cls = "choice";
                if (locked) {
                  if (c.marks === step.marks) cls += " correct";
                  else if (isSelected) cls += " wrong";
                } else if (isSelected) {
                  cls += " selected";
                }
                return (
                  <button
                    key={c.id}
                    className={cls}
                    onClick={() => !locked && setSelectedChoice(c.id)}
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {locked && (
          <div
            className={`feedback ${
              answered[answered.length - 1].marksEarned === step.marks
                ? "good"
                : answered[answered.length - 1].marksEarned > 0
                ? ""
                : "bad"
            }`}
          >
            <strong>
              {answered[answered.length - 1].marksEarned}/{step.marks} marks
            </strong>
            {step.kind === "authorities"
              ? answered[answered.length - 1].marksEarned === step.marks
                ? step.feedbackCorrect
                : step.feedbackIncorrect
              : step.choices?.find((c) => c.id === selectedChoice)?.feedback}
            <div style={{ marginTop: "0.6em", opacity: 0.85 }}>
              {step.explanation}
            </div>
          </div>
        )}

        <div className="controls">
          <button onClick={onExit}>Abandon</button>
          {!locked && (
            <button className="btn-primary" disabled={!canSubmit} onClick={lockIn}>
              Lock in
            </button>
          )}
          {locked && (
            <button className="btn-primary" onClick={nextStep}>
              {isLastStep ? "See result" : "Next step"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
