export type LegalArea = "criminal" | "tort" | "contract" | "human-rights";

export type Term = 1 | 2 | 3 | 4;

export const AREA_FOR_TERM: Record<Term, LegalArea> = {
  1: "criminal",
  2: "tort",
  3: "contract",
  4: "human-rights",
};

export const TERM_FOR_AREA: Record<LegalArea, Term> = {
  criminal: 1,
  tort: 2,
  contract: 3,
  "human-rights": 4,
};

export type CriminalTopic =
  | "actus-reus"
  | "mens-rea"
  | "causation"
  | "non-fatal-offences"
  | "fatal-offences"
  | "property-offences"
  | "defences"
  | "attempts";

export type TortTopic =
  | "duty-of-care"
  | "breach-of-duty"
  | "causation-tort"
  | "remoteness"
  | "occupiers-liability"
  | "nuisance-locality"
  | "nuisance-malice"
  | "nuisance-sensitivity"
  | "nuisance-standing"
  | "rylands"
  | "nuisance"
  | "rylands-fletcher"
  | "vicarious-liability"
  | "vicarious-status"
  | "vicarious-course"
  | "vicarious-connection"
  | "tort-defences"
  | "tort-remedies";

export type CaseTopic = CriminalTopic | TortTopic;

export interface LawCase {
  id: string;
  name: string;
  year: number;
  area: LegalArea;
  topics: CaseTopic[];
  facts: string;
  principle: string;
  visual: {
    emoji: string;
    scene: string;
    palette: string;
  };
  importance: 1 | 2 | 3;
}

export interface BriefChoice {
  id: string;
  label: string;
  correct: boolean;
  feedback: string;
}

export interface BriefStep {
  kind: "issue" | "authorities" | "application";
  prompt: string;
  choices?: BriefChoice[];
  authorityPool?: string[];
  correctAuthorities?: string[];
  explanation: string;
}

export interface Brief {
  id: string;
  title: string;
  term: Term;
  scenario: string;
  scene: { emoji: string; palette: string };
  steps: BriefStep[];
  caseIds: string[];
}

export interface CardState {
  caseId: string;
  ease: number;
  intervalDays: number;
  reps: number;
  dueAt: number;
  lapses: number;
  mastery: 0 | 1 | 2 | 3 | 4 | 5;
}

export interface BossResult {
  bossId: string;
  marksScored: number;
  marksAvailable: number;
  band: "A*" | "A" | "B" | "C" | "U";
  completedAt: number;
}

export interface Progress {
  cards: Record<string, CardState>;
  completedBriefs: string[];
  currentTerm: Term;
  totalAnswered: number;
  totalCorrect: number;
  bossResults: Record<string, BossResult>;
  gameStats?: GameStats;
}

export interface GameStats {
  hangman?: HangmanStats;
}

export interface HangmanStats {
  played: number;
  won: number;
  currentStreak: number;
  longestStreak: number;
}
