import { useState } from "react";
import type { Brief, BriefStep, Progress } from "../types";
import { CASES_BY_ID } from "../data/cases";
import { CaseCard } from "./CaseCard";
import { applyReview, markBriefComplete } from "../store";

interface Props {
  brief: Brief;
  progress: Progress;
  onProgressChange: (p: Progress) => void;
  onExit: () => void;
}

type StepResult = { correct: boolean; firstTry: boolean };

export function BriefPlayer({ brief, progress, onProgressChange, onExit }: Props) {
  const [stepIdx, setStepIdx] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [selectedAuthorities, setSelectedAuthorities] = useState<string[]>([]);
  const [revealed, setRevealed] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [stepResults, setStepResults] = useState<StepResult[]>([]);
  const [finished, setFinished] = useState(false);

  const step = brief.steps[stepIdx];
  const isLastStep = stepIdx === brief.steps.length - 1;

  function checkAnswer() {
    if (step.kind === "authorities") {
      const correctSet = new Set(step.correctAuthorities ?? []);
      const selSet = new Set(selectedAuthorities);
      const allCorrect =
        selSet.size === correctSet.size &&
        [...selSet].every((id) => correctSet.has(id));
      setRevealed(true);
      setAttempts((n) => n + 1);
      if (allCorrect) {
        setStepResults((r) => [...r, { correct: true, firstTry: attempts === 0 }]);
      }
    } else {
      const choice = step.choices?.find((c) => c.id === selectedChoice);
      if (!choice) return;
      setRevealed(true);
      setAttempts((n) => n + 1);
      if (choice.correct) {
        setStepResults((r) => [...r, { correct: true, firstTry: attempts === 0 }]);
      }
    }
  }

  function tryAgain() {
    setRevealed(false);
    setSelectedChoice(null);
    setSelectedAuthorities([]);
  }

  function nextStep() {
    if (isLastStep) {
      finishBrief();
      return;
    }
    setStepIdx((i) => i + 1);
    setSelectedChoice(null);
    setSelectedAuthorities([]);
    setRevealed(false);
    setAttempts(0);
  }

  function finishBrief() {
    let p = progress;
    const successByCase: Record<string, { correct: boolean; firstTry: boolean }> = {};
    for (const id of brief.caseIds) {
      successByCase[id] = { correct: true, firstTry: true };
    }
    for (let i = 0; i < stepResults.length; i++) {
      const r = stepResults[i];
      for (const id of brief.caseIds) {
        if (!r.correct) successByCase[id].correct = false;
        if (!r.firstTry) successByCase[id].firstTry = false;
      }
    }
    for (const id of brief.caseIds) {
      const r = successByCase[id];
      const grade = !r.correct ? "again" : r.firstTry ? "good" : "hard";
      p = applyReview(p, id, grade);
    }
    p = markBriefComplete(p, brief.id);
    onProgressChange(p);
    setFinished(true);
  }

  if (finished) {
    const allFirstTry = stepResults.every((r) => r.firstTry);
    return (
      <div className="brief-stage">
        <div className="brief-hero" style={{ background: brief.scene.palette }}>
          <div className="scene-emoji">{allFirstTry ? "⚖️" : "📖"}</div>
          <div>
            <h2>{allFirstTry ? "Verdict for the defence." : "Brief filed."}</h2>
            <p className="scenario">
              {allFirstTry
                ? "First-try perfect. Your pupil-master nods, almost imperceptibly."
                : "You got there in the end. The cases you stumbled on will be back to test you again soon."}
            </p>
          </div>
        </div>
        <div className="brief-body">
          <p className="pupil-quote">
            — Ms Hale KC: "Read it again tomorrow. The law is what you can recall under pressure, not what you can find in a book."
          </p>
          <div className="controls">
            <button onClick={onExit}>Return to chambers</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="brief-stage">
      <div className="brief-hero" style={{ background: brief.scene.palette }}>
        <div className="scene-emoji">{brief.scene.emoji}</div>
        <div>
          <h2>{brief.title}</h2>
          <p className="scenario">{brief.scenario}</p>
        </div>
      </div>
      <div className="brief-body">
        <div className="progress-pill">
          Step {stepIdx + 1} of {brief.steps.length} · {step.kind.toUpperCase()}
        </div>
        <StepView
          step={step}
          revealed={revealed}
          selectedChoice={selectedChoice}
          setSelectedChoice={setSelectedChoice}
          selectedAuthorities={selectedAuthorities}
          setSelectedAuthorities={setSelectedAuthorities}
        />
        <FeedbackView
          step={step}
          revealed={revealed}
          selectedChoice={selectedChoice}
          selectedAuthorities={selectedAuthorities}
        />
        <div className="controls">
          <button onClick={onExit}>Abandon brief</button>
          {!revealed && (
            <button
              className="btn-primary"
              disabled={
                step.kind === "authorities"
                  ? selectedAuthorities.length === 0
                  : !selectedChoice
              }
              onClick={checkAnswer}
            >
              Submit
            </button>
          )}
          {revealed && !isCorrect(step, selectedChoice, selectedAuthorities) && (
            <button className="btn-primary" onClick={tryAgain}>
              Try again
            </button>
          )}
          {revealed && isCorrect(step, selectedChoice, selectedAuthorities) && (
            <button className="btn-primary" onClick={nextStep}>
              {isLastStep ? "Deliver verdict" : "Next"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function isCorrect(
  step: BriefStep,
  selectedChoice: string | null,
  selectedAuthorities: string[],
): boolean {
  if (step.kind === "authorities") {
    const correctSet = new Set(step.correctAuthorities ?? []);
    const selSet = new Set(selectedAuthorities);
    return (
      selSet.size === correctSet.size &&
      [...selSet].every((id) => correctSet.has(id))
    );
  }
  const choice = step.choices?.find((c) => c.id === selectedChoice);
  return choice?.correct ?? false;
}

interface StepViewProps {
  step: BriefStep;
  revealed: boolean;
  selectedChoice: string | null;
  setSelectedChoice: (id: string) => void;
  selectedAuthorities: string[];
  setSelectedAuthorities: (ids: string[]) => void;
}

function StepView({
  step,
  revealed,
  selectedChoice,
  setSelectedChoice,
  selectedAuthorities,
  setSelectedAuthorities,
}: StepViewProps) {
  if (step.kind === "authorities") {
    const correctSet = new Set(step.correctAuthorities ?? []);
    return (
      <div className="brief-step">
        <h3>{step.prompt}</h3>
        <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
          Tap cards to add or remove them from your bundle.
        </p>
        <div className="authority-grid">
          {(step.authorityPool ?? []).map((id) => {
            const c = CASES_BY_ID[id];
            const isSelected = selectedAuthorities.includes(id);
            let visual: "default" | "selected" | "correct" | "wrong" = "default";
            if (revealed) {
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
                showPrinciple={revealed}
                onClick={() => {
                  if (revealed) return;
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
    );
  }

  return (
    <div className="brief-step">
      <h3>{step.prompt}</h3>
      <div className="choice-list">
        {step.choices?.map((c) => {
          let cls = "choice";
          if (revealed) {
            if (c.correct) cls += " correct";
            else if (c.id === selectedChoice) cls += " wrong";
          } else if (c.id === selectedChoice) {
            cls += " selected";
          }
          return (
            <button
              key={c.id}
              className={cls}
              onClick={() => !revealed && setSelectedChoice(c.id)}
            >
              {c.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

interface FeedbackProps {
  step: BriefStep;
  revealed: boolean;
  selectedChoice: string | null;
  selectedAuthorities: string[];
}

function FeedbackView({ step, revealed, selectedChoice, selectedAuthorities }: FeedbackProps) {
  if (!revealed) return null;
  const correct = isCorrect(step, selectedChoice, selectedAuthorities);
  if (step.kind === "authorities") {
    return (
      <div className={`feedback ${correct ? "good" : "bad"}`}>
        <strong>{correct ? "Right bundle." : "Not quite."}</strong>
        {step.explanation}
      </div>
    );
  }
  const choice = step.choices?.find((c) => c.id === selectedChoice);
  return (
    <div className={`feedback ${correct ? "good" : "bad"}`}>
      <strong>{correct ? "Right." : "Not quite."}</strong>
      {choice?.feedback}
      <div style={{ marginTop: "0.6em", opacity: 0.85 }}>{step.explanation}</div>
    </div>
  );
}
