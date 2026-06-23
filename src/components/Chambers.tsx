import type { Brief, Progress, Term } from "../types";
import type { BossFight } from "../data/boss";
import { CASES_BY_ID } from "../data/cases";
import { conceptCardsForArea } from "../data/conceptCards";

interface Props {
  term: Term;
  briefs: Brief[];
  progress: Progress;
  boss: BossFight | null;
  onPick: (briefId: string) => void;
  onOpenDock: () => void;
  onStartClash: () => void;
  onOpenChecklist: () => void;
  onStartBoss: () => void;
  onOpenGames: () => void;
  onOpenConceptCards: () => void;
}

const BOSS_UNLOCK_BRIEFS = 6;

interface TermCopy {
  title: string;
  pupilQuote: string;
  emptyBriefs: string;
}

const TERM_COPY: Record<Term, TermCopy> = {
  1: {
    title: "Term 1 — Criminal Law",
    pupilQuote:
      '— Ms Hale KC: "I\'ll give you three briefs to start. Read them carefully. The facts matter as much as the law."',
    emptyBriefs: "No briefs in this term yet.",
  },
  2: {
    title: "Term 2 — Law of Tort",
    pupilQuote:
      '— Mr Atkin KC: "Read Donoghue first. Then ask yourself: who is your neighbour? And what do you owe them?"',
    emptyBriefs:
      "Briefs for tort are still being drafted. For now, work the cases in the dock and clash — they're the foundation everything else builds on.",
  },
  3: {
    title: "Term 3 — Law of Contract",
    pupilQuote: "",
    emptyBriefs: "Contract content has not been written yet.",
  },
  4: {
    title: "Term 4 — Human Rights",
    pupilQuote: "",
    emptyBriefs: "Human rights content has not been written yet.",
  },
};

const AREA_FOR_TERM: Record<Term, "criminal" | "tort" | null> = {
  1: "criminal",
  2: "tort",
  3: null,
  4: null,
};

export function Chambers({
  term,
  briefs,
  progress,
  boss,
  onPick,
  onOpenDock,
  onStartClash,
  onOpenChecklist,
  onStartBoss,
  onOpenGames,
  onOpenConceptCards,
}: Props) {
  const copy = TERM_COPY[term];
  const completed = briefs.filter((b) => progress.completedBriefs.includes(b.id)).length;
  const total = briefs.length;

  const area = AREA_FOR_TERM[term];
  let scopedTotal = 0;
  let scopedMastered = 0;
  if (area) {
    for (const [id, card] of Object.entries(progress.cards)) {
      const c = CASES_BY_ID[id];
      if (!c || c.area !== area) continue;
      scopedTotal += 1;
      if (card.mastery >= 4) scopedMastered += 1;
    }
  }

  const conceptCardCount = area ? conceptCardsForArea(area).length : 0;

  return (
    <div>
      <section>
        <h2 style={{ marginBottom: 0 }}>{copy.title}</h2>
        {copy.pupilQuote && <p className="pupil-quote">{copy.pupilQuote}</p>}
        <div className="stats">
          <div className="stat">
            <div className="stat-num">{completed}/{total}</div>
            <div className="stat-label">briefs filed</div>
          </div>
          <div className="stat">
            <div className="stat-num">{scopedMastered}/{scopedTotal}</div>
            <div className="stat-label">cases mastered</div>
          </div>
          <div className="stat">
            <div className="stat-num">
              {progress.totalAnswered === 0
                ? "—"
                : Math.round((progress.totalCorrect / progress.totalAnswered) * 100) + "%"}
            </div>
            <div className="stat-label">accuracy (all terms)</div>
          </div>
        </div>
        <div className="controls" style={{ marginTop: "1.2rem", justifyContent: "flex-start" }}>
          <button className="btn-primary" onClick={onStartClash}>⚔️ Start Case Clash</button>
          {conceptCardCount > 0 && (
            <button onClick={onOpenConceptCards}>📘 Concept cards</button>
          )}
          <button onClick={onOpenChecklist}>📋 Syllabus checklist</button>
          <button onClick={onOpenDock}>📚 Open revision dock</button>
          <button onClick={onOpenGames}>🎲 Games room</button>
        </div>
      </section>

      {total > 0 ? (
        <section className="brief-list">
          {briefs.map((b) => {
            const done = progress.completedBriefs.includes(b.id);
            return (
              <div key={b.id} className="brief-row" onClick={() => onPick(b.id)}>
                <div
                  className="scene-emoji"
                  style={{ background: b.scene.palette }}
                >
                  {b.scene.emoji}
                </div>
                <div className="info">
                  <h4>{b.title}</h4>
                  <div className="scenario-preview">{b.scenario}</div>
                </div>
                {done && <div className="badge">Filed</div>}
              </div>
            );
          })}
        </section>
      ) : (
        <section className="empty-state">
          <h3>No briefs in this term yet</h3>
          <p>{copy.emptyBriefs}</p>
        </section>
      )}

      {boss ? (
        (() => {
          const bossUnlocked = completed >= BOSS_UNLOCK_BRIEFS;
          const bossBest = progress.bossResults[boss.id];
          return (
            <section
              className={`boss-tile ${bossUnlocked ? "" : "locked"}`}
              onClick={() => bossUnlocked && onStartBoss()}
            >
              <div className="boss-tile-label">End-of-Term Examination</div>
              <h3>{boss.title}</h3>
              <div className="boss-tile-desc">
                One fact pattern. No retry. {boss.steps.length} questions,{" "}
                {boss.steps.reduce((s, st) => s + st.marks, 0)} marks. Graded A* to U.
              </div>
              <div className="boss-tile-meta">
                {bossUnlocked ? (
                  <>
                    <span>{completed}/{total} briefs filed — unlocked</span>
                    {bossBest && (
                      <span className="boss-tile-best">
                        Best: {bossBest.marksScored}/{bossBest.marksAvailable} ({bossBest.band})
                      </span>
                    )}
                  </>
                ) : (
                  <span>
                    🔒 Locked — file {BOSS_UNLOCK_BRIEFS - completed} more brief
                    {BOSS_UNLOCK_BRIEFS - completed === 1 ? "" : "s"} to sit the exam
                  </span>
                )}
              </div>
            </section>
          );
        })()
      ) : (
        <section className="boss-tile locked" style={{ cursor: "default" }}>
          <div className="boss-tile-label">End-of-Term Examination</div>
          <h3>Coming soon</h3>
          <div className="boss-tile-desc">
            The end-of-term exam for this term will appear here once enough cases and
            briefs are in place.
          </div>
        </section>
      )}
    </div>
  );
}

