import type { Progress } from "../types";
import { SYLLABUS } from "../data/syllabus";
import { CASES_BY_ID } from "../data/cases";

interface Props {
  progress: Progress;
  onBack: () => void;
}

const MASTERY_THRESHOLD = 4;

export function TopicChecklist({ progress, onBack }: Props) {
  const sectionStats = SYLLABUS.map((section) => {
    const topicStats = section.topics.map((topic) => {
      const total = topic.caseIds.length;
      let mastered = 0;
      let totalMastery = 0;
      for (const id of topic.caseIds) {
        const m = progress.cards[id]?.mastery ?? 0;
        totalMastery += m;
        if (m >= MASTERY_THRESHOLD) mastered += 1;
      }
      const avg = total === 0 ? 0 : totalMastery / total;
      return { topic, total, mastered, avg };
    });
    const totalCases = topicStats.reduce((s, t) => s + t.total, 0);
    const totalMastered = topicStats.reduce((s, t) => s + t.mastered, 0);
    return { section, topicStats, totalCases, totalMastered };
  });

  const grandTotal = sectionStats.reduce((s, x) => s + x.totalCases, 0);
  const grandMastered = sectionStats.reduce((s, x) => s + x.totalMastered, 0);

  return (
    <div>
      <div className="controls" style={{ marginBottom: "1rem" }}>
        <button onClick={onBack}>← Back to chambers</button>
      </div>

      <h2>Syllabus checklist</h2>
      <p style={{ color: "var(--muted)" }}>
        OCR H418 Component 2 — Criminal Law. A case is "mastered" once its SRS level reaches {MASTERY_THRESHOLD}/5.
      </p>

      <div className="syllabus-overall">
        <div className="syllabus-overall-bar">
          <div
            style={{ width: `${grandTotal === 0 ? 0 : (grandMastered / grandTotal) * 100}%` }}
          />
        </div>
        <div className="syllabus-overall-label">
          {grandMastered} of {grandTotal} cases mastered
        </div>
      </div>

      {sectionStats.map(({ section, topicStats, totalCases, totalMastered }) => {
        const pct = totalCases === 0 ? 0 : (totalMastered / totalCases) * 100;
        return (
          <section key={section.id} className="syllabus-section">
            <header className="syllabus-section-header">
              <h3>{section.label}</h3>
              <span className="syllabus-section-count">
                {totalMastered}/{totalCases}
              </span>
            </header>
            <div className="syllabus-section-bar">
              <div style={{ width: `${pct}%` }} />
            </div>

            <div className="syllabus-topics">
              {topicStats.map(({ topic, total, mastered, avg }) => {
                const complete = total > 0 && mastered === total;
                const started = avg > 0;
                return (
                  <div key={topic.id} className={`syllabus-topic ${complete ? "done" : ""}`}>
                    <div className="syllabus-topic-row">
                      <span className="syllabus-topic-icon">
                        {complete ? "✓" : started ? "◐" : "○"}
                      </span>
                      <span className="syllabus-topic-label">{topic.label}</span>
                      <span className="syllabus-topic-count">
                        {mastered}/{total}
                      </span>
                    </div>
                    <div className="syllabus-topic-cases">
                      {topic.caseIds.map((id) => {
                        const c = CASES_BY_ID[id];
                        if (!c) return null;
                        const m = progress.cards[id]?.mastery ?? 0;
                        const caseDone = m >= MASTERY_THRESHOLD;
                        return (
                          <span
                            key={id}
                            className={`case-chip ${caseDone ? "done" : ""}`}
                            title={`${c.name} — mastery ${m}/5`}
                          >
                            {c.name}
                            <span className="case-chip-pip" data-mastery={m} />
                          </span>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
