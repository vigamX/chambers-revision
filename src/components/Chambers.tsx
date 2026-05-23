import type { Brief, Progress } from "../types";
import type { BossFight } from "../data/boss";

interface Props {
  briefs: Brief[];
  progress: Progress;
  boss: BossFight;
  onPick: (briefId: string) => void;
  onOpenDock: () => void;
  onStartClash: () => void;
  onOpenChecklist: () => void;
  onStartBoss: () => void;
}

const BOSS_UNLOCK_BRIEFS = 6;

export function Chambers({
  briefs,
  progress,
  boss,
  onPick,
  onOpenDock,
  onStartClash,
  onOpenChecklist,
  onStartBoss,
}: Props) {
  const completed = progress.completedBriefs.length;
  const total = briefs.length;
  const mastered = Object.values(progress.cards).filter((c) => c.mastery >= 4).length;
  const totalCases = Object.keys(progress.cards).length;
  const bossUnlocked = completed >= BOSS_UNLOCK_BRIEFS;
  const bossBest = progress.bossResults[boss.id];

  return (
    <div>
      <section>
        <h2 style={{ marginBottom: 0 }}>Term 1 — Criminal Law</h2>
        <p className="pupil-quote">
          — Ms Hale KC: "I'll give you three briefs to start. Read them carefully. The facts matter as much as the law."
        </p>
        <div className="stats">
          <div className="stat">
            <div className="stat-num">{completed}/{total}</div>
            <div className="stat-label">briefs filed</div>
          </div>
          <div className="stat">
            <div className="stat-num">{mastered}/{totalCases}</div>
            <div className="stat-label">cases mastered</div>
          </div>
          <div className="stat">
            <div className="stat-num">
              {progress.totalAnswered === 0
                ? "—"
                : Math.round((progress.totalCorrect / progress.totalAnswered) * 100) + "%"}
            </div>
            <div className="stat-label">accuracy</div>
          </div>
        </div>
        <div className="controls" style={{ marginTop: "1.2rem", justifyContent: "flex-start" }}>
          <button className="btn-primary" onClick={onStartClash}>⚔️ Start Case Clash</button>
          <button onClick={onOpenChecklist}>📋 Syllabus checklist</button>
          <button onClick={onOpenDock}>📚 Open revision dock</button>
        </div>
      </section>

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

      <section
        className={`boss-tile ${bossUnlocked ? "" : "locked"}`}
        onClick={() => bossUnlocked && onStartBoss()}
      >
        <div className="boss-tile-label">End-of-Term Examination</div>
        <h3>{boss.title}</h3>
        <div className="boss-tile-desc">
          One fact pattern. No retry. {boss.steps.length} questions, {boss.steps.reduce((s, st) => s + st.marks, 0)} marks. Graded A* to U.
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
              🔒 Locked — file {BOSS_UNLOCK_BRIEFS - completed} more brief{BOSS_UNLOCK_BRIEFS - completed === 1 ? "" : "s"} to sit the exam
            </span>
          )}
        </div>
      </section>

      <section style={{ marginTop: "2rem", opacity: 0.5 }}>
        <h3>Coming next term</h3>
        <div className="chambers-grid">
          <div className="term-card locked">
            <div className="term-label">Term 2</div>
            <h3>Law of Tort</h3>
            <div className="pupil">with Mr Atkin KC</div>
            <div className="meta">Negligence · occupiers' liability · nuisance</div>
          </div>
          <div className="term-card locked">
            <div className="term-label">Term 3</div>
            <h3>Law of Contract</h3>
            <div className="pupil">with Ms Denning KC</div>
            <div className="meta">Formation · terms · discharge</div>
          </div>
        </div>
      </section>
    </div>
  );
}
