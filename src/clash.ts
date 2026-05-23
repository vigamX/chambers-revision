import type { LawCase, CardState, CriminalTopic } from "./types";
import { CASES } from "./data/cases";

export type RoundType = "name-the-case" | "recall-principle" | "spot-the-topic";

export interface ClashQuestion {
  caseId: string;
  round: RoundType;
  choices: string[];
  correctIndex: number;
  prompt: string;
}

export interface ClashSession {
  questions: ClashQuestion[];
  index: number;
  answers: { caseId: string; correct: boolean; firstTry: boolean }[];
}

const ROUNDS: RoundType[] = ["name-the-case", "recall-principle", "spot-the-topic"];

function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function pickDistractors<T>(pool: T[], correct: T, n: number, key: (t: T) => string): T[] {
  const filtered = pool.filter((p) => key(p) !== key(correct));
  return shuffle(filtered).slice(0, n);
}

const TOPIC_LABEL: Record<CriminalTopic, string> = {
  "actus-reus": "Actus reus",
  "mens-rea": "Mens rea",
  "causation": "Causation",
  "non-fatal-offences": "Non-fatal offences",
  "fatal-offences": "Fatal offences",
  "property-offences": "Property offences",
  "defences": "Defences",
  "attempts": "Attempts",
};

export function topicLabel(t: CriminalTopic): string {
  return TOPIC_LABEL[t];
}

function buildQuestion(target: LawCase, round: RoundType): ClashQuestion {
  if (round === "name-the-case") {
    const distractors = pickDistractors(CASES, target, 3, (c) => c.id);
    const options = shuffle([target, ...distractors]);
    return {
      caseId: target.id,
      round,
      prompt: target.facts,
      choices: options.map((o) => o.id),
      correctIndex: options.findIndex((o) => o.id === target.id),
    };
  }

  if (round === "recall-principle") {
    const distractors = pickDistractors(CASES, target, 3, (c) => c.id);
    const options = shuffle([target, ...distractors]);
    return {
      caseId: target.id,
      round,
      prompt: `${target.name} (${target.year})`,
      choices: options.map((o) => o.principle),
      correctIndex: options.findIndex((o) => o.id === target.id),
    };
  }

  const targetTopic = target.topics[0];
  const otherTopics = (Object.keys(TOPIC_LABEL) as CriminalTopic[]).filter(
    (t) => t !== targetTopic,
  );
  const distractorTopics = shuffle(otherTopics).slice(0, 3);
  const options = shuffle([targetTopic, ...distractorTopics]);
  return {
    caseId: target.id,
    round,
    prompt: `${target.name} (${target.year})`,
    choices: options.map((t) => TOPIC_LABEL[t]),
    correctIndex: options.findIndex((t) => t === targetTopic),
  };
}

export function buildSession(
  cards: Record<string, CardState>,
  size = 10,
): ClashSession {
  const now = Date.now();
  const candidates = CASES.slice().sort((a, b) => {
    const ca = cards[a.id];
    const cb = cards[b.id];
    const aMaster = ca?.mastery ?? 0;
    const bMaster = cb?.mastery ?? 0;
    if (aMaster !== bMaster) return aMaster - bMaster;
    const aDue = ca?.dueAt ?? 0;
    const bDue = cb?.dueAt ?? 0;
    return aDue - bDue;
  });

  const dueFirst = candidates.filter(
    (c) => (cards[c.id]?.dueAt ?? 0) <= now || (cards[c.id]?.mastery ?? 0) < 3,
  );
  const pool = dueFirst.length >= size ? dueFirst : candidates;
  const chosen = pool.slice(0, size);

  const questions: ClashQuestion[] = chosen.map((c, i) => {
    const round = ROUNDS[i % ROUNDS.length];
    return buildQuestion(c, round);
  });

  return { questions: shuffle(questions), index: 0, answers: [] };
}

export function requeue(session: ClashSession, fromIndex: number): ClashSession {
  const failed = session.questions[fromIndex];
  if (!failed) return session;
  const next = [...session.questions];
  const requeued = buildQuestion(
    CASES.find((c) => c.id === failed.caseId)!,
    failed.round,
  );
  next.push(requeued);
  return { ...session, questions: next };
}
