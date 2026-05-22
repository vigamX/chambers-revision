import type { CardState } from "./types";

const DAY_MS = 24 * 60 * 60 * 1000;

export function newCard(caseId: string): CardState {
  return {
    caseId,
    ease: 2.5,
    intervalDays: 0,
    reps: 0,
    dueAt: Date.now(),
    lapses: 0,
    mastery: 0,
  };
}

export type Grade = "again" | "hard" | "good" | "easy";

export function review(card: CardState, grade: Grade): CardState {
  const next: CardState = { ...card };

  if (grade === "again") {
    next.reps = 0;
    next.lapses += 1;
    next.intervalDays = 0;
    next.ease = Math.max(1.3, card.ease - 0.2);
    next.mastery = Math.max(0, card.mastery - 1) as CardState["mastery"];
    next.dueAt = Date.now() + 10 * 60 * 1000;
    return next;
  }

  let interval: number;
  if (card.reps === 0) interval = 1;
  else if (card.reps === 1) interval = 3;
  else interval = Math.round(card.intervalDays * card.ease);

  const easeDelta = grade === "hard" ? -0.15 : grade === "easy" ? 0.15 : 0;
  const intervalMultiplier =
    grade === "hard" ? 0.6 : grade === "easy" ? 1.3 : 1;

  next.ease = Math.max(1.3, Math.min(3.0, card.ease + easeDelta));
  next.intervalDays = Math.max(1, Math.round(interval * intervalMultiplier));
  next.reps = card.reps + 1;
  next.dueAt = Date.now() + next.intervalDays * DAY_MS;
  next.mastery = Math.min(5, card.mastery + 1) as CardState["mastery"];

  return next;
}

export function isDue(card: CardState): boolean {
  return card.dueAt <= Date.now();
}

export function gradeFromCorrectness(allCorrect: boolean, firstTry: boolean): Grade {
  if (!allCorrect) return "again";
  if (firstTry) return "good";
  return "hard";
}
