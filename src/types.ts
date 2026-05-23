export type LegalArea = "criminal" | "tort" | "contract" | "human-rights";

export type CriminalTopic =
  | "actus-reus"
  | "mens-rea"
  | "causation"
  | "non-fatal-offences"
  | "fatal-offences"
  | "defences"
  | "attempts";

export interface LawCase {
  id: string;
  name: string;
  year: number;
  area: LegalArea;
  topics: CriminalTopic[];
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
  term: 1 | 2 | 3 | 4;
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
  currentTerm: 1 | 2 | 3 | 4;
  totalAnswered: number;
  totalCorrect: number;
  bossResults: Record<string, BossResult>;
}
