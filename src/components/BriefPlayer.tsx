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
type Phase = "answering" | "wrong-nudge" | "revealed";

export function BriefPlayer({ brief, progress, onProgressChange, onExit }: Props) {
  const [stepIdx, setStepIdx] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [selectedAuthorities, setSelectedAuthorities] = useState<string[]>([]);
  const [phase, setPhase] = useState<Phase>("answering");
  const [attempts, setAttempts] = useState(0);
  const [stepResults, setStepResults] = useState<StepResult[]>([]);
  const [finished, setFinished] = useState(false);

  const step = brief.steps[stepIdx];
  const isLastStep = stepIdx === brief.steps.length - 1;

  function submit() {
    const correct = isCorrect(step, selectedChoice, selectedAuthorities);
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);
    if (correct) {
      setStepResults((r) => [...r, { correct: true, firstTry: newAttempts === 1 }]);
      setPhase("revealed");
    } else {
      setPhase("wrong-nudge");
    }
  }

  function tryAgain() {
    setPhase("answering");
    setSelectedChoice(null);
    setSelectedAuthorities([]);
  }

  function giveUp() {
    setStepResults((r) => [...r, { correct: false, firstTry: false }]);
    setPhase("revealed");
  }

  function nextStep() {
    if (isLastStep) {
      finishBrief();
      return;
    }
    setStepIdx((i) => i + 1);
    setSelectedChoice(null);
    setSelectedAuthorities([]);
    setPhase("answering");
    setAttempts(0);
  }

  function finishBrief() {
    let p = progress;
    const successByCase: Record<string, { correct: boolean; firstTry: boolean }> = {};
    for (const id of brief.caseIds) {
      successByCase[id] = { correct: true, firstTry: true };
    }
    for (const r of stepResults) {
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
    const allFirstTry = stepResults.every((r) => r.firstTry && r.correct);
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

  const canSubmit =
    step.kind === "authorities"
      ? selectedAuthorities.length > 0
      : selectedChoice !== null;

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
          {attempts > 0 && phase !== "answering" && ` · attempt ${attempts}`}
        </div>
        <StepView
          step={step}
          phase={phase}
          selectedChoice={selectedChoice}
          setSelectedChoice={setSelectedChoice}
          selectedAuthorities={selectedAuthorities}
          setSelectedAuthorities={setSelectedAuthorities}
        />
        <FeedbackView
          step={step}
          phase={phase}
          attempts={attempts}
          selectedChoice={selectedChoice}
          selectedAuthorities={selectedAuthorities}
        />
        <div className="controls">
          <button onClick={onExit}>Abandon brief</button>

          {phase === "answering" && (
            <button className="btn-primary" disabled={!canSubmit} onClick={submit}>
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

          {phase === "revealed" && (
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
  phase: Phase;
  selectedChoice: string | null;
  setSelectedChoice: (id: string) => void;
  selectedAuthorities: string[];
  setSelectedAuthorities: (ids: string[]) => void;
}

function StepView({
  step,
  phase,
  selectedChoice,
  setSelectedChoice,
  selectedAuthorities,
  setSelectedAuthorities,
}: StepViewProps) {
  const interactive = phase === "answering";

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
            if (phase === "revealed") {
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
                showPrinciple={phase === "revealed"}
                onClick={() => {
                  if (!interactive) return;
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
          if (phase === "revealed") {
            if (c.correct) cls += " correct";
            else if (c.id === selectedChoice) cls += " wrong";
          } else if (c.id === selectedChoice) {
            cls += " selected";
          }
          return (
            <button
              key={c.id}
              className={cls}
              onClick={() => interactive && setSelectedChoice(c.id)}
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
  phase: Phase;
  attempts: number;
  selectedChoice: string | null;
  selectedAuthorities: string[];
}

function FeedbackView({ step, phase, attempts, selectedChoice }: FeedbackProps) {
  if (phase === "answering") return null;

  if (phase === "wrong-nudge") {
    if (step.kind === "authorities") {
      return (
        <div className="feedback bad">
          <strong>Not quite.</strong>
          Your bundle isn't right — some cases don't belong, or some are missing. Have another look.
        </div>
      );
    }
    const choice = step.choices?.find((c) => c.id === selectedChoice);
    return (
      <div className="feedback bad">
        <strong>Not quite.</strong>
        {choice?.feedback}
      </div>
    );
  }

  const wasFirstTry = attempts === 1;
  if (step.kind === "authorities") {
    return (
      <div className={`feedback ${wasFirstTry ? "good" : "bad"}`}>
        <strong>{wasFirstTry ? "Right bundle." : "Here's the right bundle."}</strong>
        {step.explanation}
      </div>
    );
  }
  const choice = step.choices?.find((c) => c.id === selectedChoice);
  const choiceWasCorrect = choice?.correct ?? false;
  return (
    <div className={`feedback ${wasFirstTry && choiceWasCorrect ? "good" : "bad"}`}>
      <strong>
        {wasFirstTry && choiceWasCorrect ? "Right." : "Here's the answer."}
      </strong>
      {choiceWasCorrect ? choice?.feedback : step.choices?.find((c) => c.correct)?.feedback}
      <div style={{ marginTop: "0.6em", opacity: 0.85 }}>{step.explanation}</div>
    </div>
  );
}
