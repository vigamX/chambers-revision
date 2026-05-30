import type { Progress, Term } from "../types";
import { CASES } from "../data/cases";
import { BRIEFS } from "../data/briefs";

interface Props {
  progress: Progress;
  onPickTerm: (term: Term) => void;
}

interface TermDescriptor {
  term: Term;
  label: string;
  subject: string;
  component: string;
  pupilMaster: string;
  topics: string;
  flavour: string;
  status: "ready" | "preview" | "locked";
}

const TERMS: TermDescriptor[] = [
  {
    term: 1,
    label: "Term 1",
    subject: "Criminal Law",
    component: "OCR H418 · Component 2",
    pupilMaster: "with Ms Hale KC",
    topics: "Actus reus · mens rea · fatal & non-fatal offences · property · defences · attempts",
    flavour:
      "Mens rea, missing pages of memory, and the question of who really intended what. Start here.",
    status: "ready",
  },
  {
    term: 2,
    label: "Term 2",
    subject: "Law of Tort",
    component: "OCR H418 · Component 3",
    pupilMaster: "with Mr Atkin KC",
    topics: "Negligence · occupiers' liability · nuisance · vicarious liability · defences · remedies",
    flavour:
      "Reasonable foreseeability, the neighbour you have never met, and the duty you owe them. Foundation set live; more cases each week.",
    status: "preview",
  },
];

export function TermPicker({ progress, onPickTerm }: Props) {
  const tortCaseCount = CASES.filter((c) => c.area === "tort").length;
  const tortBriefCount = BRIEFS.filter((b) => b.term === 2).length;
  const criminalCaseCount = CASES.filter((c) => c.area === "criminal").length;
  const criminalBriefCount = BRIEFS.filter((b) => b.term === 1).length;

  const counts: Record<Term, { cases: number; briefs: number }> = {
    1: { cases: criminalCaseCount, briefs: criminalBriefCount },
    2: { cases: tortCaseCount, briefs: tortBriefCount },
    3: { cases: 0, briefs: 0 },
    4: { cases: 0, briefs: 0 },
  };

  const mastered: Record<Term, number> = { 1: 0, 2: 0, 3: 0, 4: 0 };
  for (const c of CASES) {
    if (c.area === "criminal" || c.area === "tort") {
      const t: Term = c.area === "criminal" ? 1 : 2;
      const card = progress.cards[c.id];
      if (card && card.mastery >= 4) mastered[t] += 1;
    }
  }

  return (
    <div>
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ marginBottom: "0.25rem" }}>Pupillage chambers</h2>
        <p style={{ color: "var(--muted)", marginTop: 0 }}>
          Choose your term. Each pupil-master runs their own diary; switch between them
          whenever you like — your progress in each is kept separately.
        </p>
      </section>

      <div className="term-picker-grid">
        {TERMS.map((t) => {
          const { cases, briefs } = counts[t.term];
          const tMastered = mastered[t.term];
          const isLive = t.status !== "locked" && cases > 0;
          return (
            <button
              key={t.term}
              type="button"
              className={`term-pick-card ${t.status} ${isLive ? "" : "disabled"}`}
              onClick={() => isLive && onPickTerm(t.term)}
              disabled={!isLive}
            >
              <div className="term-pick-header">
                <span className="term-pick-label">{t.label}</span>
                {t.status === "preview" && (
                  <span className="term-pick-tag">New · foundation set</span>
                )}
              </div>
              <h3 className="term-pick-subject">{t.subject}</h3>
              <div className="term-pick-component">{t.component}</div>
              <div className="term-pick-pupil">{t.pupilMaster}</div>
              <p className="term-pick-flavour">{t.flavour}</p>
              <div className="term-pick-topics">{t.topics}</div>
              <div className="term-pick-stats">
                <span>
                  <strong>{cases}</strong> cases
                </span>
                <span>
                  <strong>{briefs}</strong> brief{briefs === 1 ? "" : "s"}
                </span>
                <span>
                  <strong>{tMastered}</strong> mastered
                </span>
              </div>
              <div className="term-pick-cta">
                {isLive ? "Enter chambers →" : "Coming later"}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
