import type { Brief, Progress } from "../types";

interface Props {
  briefs: Brief[];
  progress: Progress;
  onPick: (briefId: string) => void;
  onOpenDock: () => void;
  onStartClash: () => void;
  onOpenChecklist: () => void;
}

export function Chambers({ briefs, progress, onPick, onOpenDock, onStartClash, onOpenChecklist }: Props) {
  const completed = progress.completedBriefs.length;
  const total = briefs.length;
  const mastered = Object.values(progress.cards).filter((c) => c.mastery >= 4).length;
  const totalCases = Object.keys(progress.cards).length;

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
