import type { Progress, CardState, Term } from "./types";
import { CASES } from "./data/cases";
import { newCard, review, type Grade } from "./srs";

const STORAGE_KEY = "chambers.progress.v1";

function defaultProgress(): Progress {
  const cards: Record<string, CardState> = {};
  for (const c of CASES) cards[c.id] = newCard(c.id);
  return {
    cards,
    completedBriefs: [],
    currentTerm: 1,
    totalAnswered: 0,
    totalCorrect: 0,
    bossResults: {},
  };
}

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress();
    const parsed = JSON.parse(raw) as Progress;
    for (const c of CASES) {
      if (!parsed.cards[c.id]) parsed.cards[c.id] = newCard(c.id);
    }
    if (!parsed.bossResults) parsed.bossResults = {};
    if (!parsed.currentTerm) parsed.currentTerm = 1;
    return parsed;
  } catch {
    return defaultProgress();
  }
}

export function saveProgress(p: Progress): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

export function resetProgress(): Progress {
  const fresh = defaultProgress();
  saveProgress(fresh);
  return fresh;
}

export function setTerm(progress: Progress, term: Term): Progress {
  return { ...progress, currentTerm: term };
}

export function applyReview(
  progress: Progress,
  caseId: string,
  grade: Grade,
): Progress {
  const card = progress.cards[caseId] ?? newCard(caseId);
  const updated = review(card, grade);
  const correct = grade !== "again";
  return {
    ...progress,
    cards: { ...progress.cards, [caseId]: updated },
    totalAnswered: progress.totalAnswered + 1,
    totalCorrect: progress.totalCorrect + (correct ? 1 : 0),
  };
}

export function markBriefComplete(progress: Progress, briefId: string): Progress {
  if (progress.completedBriefs.includes(briefId)) return progress;
  return {
    ...progress,
    completedBriefs: [...progress.completedBriefs, briefId],
  };
}

export function recordHangmanResult(progress: Progress, won: boolean): Progress {
  const prev = progress.gameStats?.hangman ?? {
    played: 0,
    won: 0,
    currentStreak: 0,
    longestStreak: 0,
  };
  const currentStreak = won ? prev.currentStreak + 1 : 0;
  const next = {
    played: prev.played + 1,
    won: prev.won + (won ? 1 : 0),
    currentStreak,
    longestStreak: Math.max(prev.longestStreak, currentStreak),
  };
  return {
    ...progress,
    gameStats: { ...(progress.gameStats ?? {}), hangman: next },
  };
}
