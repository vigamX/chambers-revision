import { useMemo, useState } from "react";
import type { Progress, LawCase } from "../types";
import { CASES } from "../data/cases";
import {
  chapterForCase,
  CHAPTER_LABELS,
  CHAPTERS_ORDERED,
} from "../data/syllabus";
import { CaseCard } from "./CaseCard";

interface Props {
  progress: Progress;
  onBack: () => void;
  onStartClash: () => void;
}

type SortMode = "weakest" | "chapter" | "az";

export function RevisionDock({ progress, onBack, onStartClash }: Props) {
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});
  const [allRevealed, setAllRevealed] = useState(false);
  const [sortMode, setSortMode] = useState<SortMode>("weakest");

  function toggle(id: string) {
    setFlipped((f) => ({ ...f, [id]: !f[id] }));
  }

  const weakestSorted = useMemo(
    () =>
      [...CASES].sort((a, b) => {
        const am = progress.cards[a.id]?.mastery ?? 0;
        const bm = progress.cards[b.id]?.mastery ?? 0;
        if (am !== bm) return am - bm;
        return (
          (progress.cards[a.id]?.dueAt ?? 0) -
          (progress.cards[b.id]?.dueAt ?? 0)
        );
      }),
    [progress.cards],
  );

  const azSorted = useMemo(
    () => [...CASES].sort((a, b) => a.name.localeCompare(b.name)),
    [],
  );

  const byChapter = useMemo(() => {
    const groups: Record<number, LawCase[]> = {};
    const unmapped: LawCase[] = [];
    for (const c of CASES) {
      const ch = chapterForCase(c.id);
      if (ch === null) {
        unmapped.push(c);
      } else {
        (groups[ch] ??= []).push(c);
      }
    }
    for (const ch of Object.keys(groups)) {
      groups[Number(ch)].sort((a, b) => a.name.localeCompare(b.name));
    }
    unmapped.sort((a, b) => a.name.localeCompare(b.name));
    return { groups, unmapped };
  }, []);

  return (
    <div>
      <div className="controls" style={{ marginBottom: "1rem" }}>
        <button onClick={onBack}>← Back to chambers</button>
        <button className="btn-primary" onClick={onStartClash}>
          ⚔️ Clash the weakest
        </button>
        <button
          onClick={() => {
            setAllRevealed((v) => !v);
            setFlipped({});
          }}
        >
          {allRevealed ? "Hide points of law" : "Reveal points of law"}
        </button>
      </div>

      <h2>Revision Dock</h2>
      <p style={{ color: "var(--muted)" }}>
        Tap a card to flip it and reveal the point of law — try to recall before
        you peek.
      </p>

      <div className="dock-sortbar">
        <span className="dock-sortbar-label">Sort:</span>
        <button
          className={`dock-sort-btn ${sortMode === "weakest" ? "active" : ""}`}
          onClick={() => setSortMode("weakest")}
        >
          Weakest first
        </button>
        <button
          className={`dock-sort-btn ${sortMode === "chapter" ? "active" : ""}`}
          onClick={() => setSortMode("chapter")}
        >
          By textbook chapter
        </button>
        <button
          className={`dock-sort-btn ${sortMode === "az" ? "active" : ""}`}
          onClick={() => setSortMode("az")}
        >
          A–Z
        </button>
        <span className="dock-sortbar-count">{CASES.length} cases</span>
      </div>

      {sortMode === "chapter" ? (
        <>
          {CHAPTERS_ORDERED.filter((ch) => byChapter.groups[ch]?.length).map(
            (ch) => (
              <ChapterGroup
                key={ch}
                heading={CHAPTER_LABELS[ch]}
                cases={byChapter.groups[ch]}
                progress={progress}
                flipped={flipped}
                allRevealed={allRevealed}
                onToggle={toggle}
              />
            ),
          )}
          {byChapter.unmapped.length > 0 && (
            <ChapterGroup
              heading="Other"
              cases={byChapter.unmapped}
              progress={progress}
              flipped={flipped}
              allRevealed={allRevealed}
              onToggle={toggle}
            />
          )}
        </>
      ) : (
        <div className="dock-grid">
          {(sortMode === "weakest" ? weakestSorted : azSorted).map((c) =>
            renderCase(c, progress, flipped, allRevealed, toggle),
          )}
        </div>
      )}
    </div>
  );
}

function ChapterGroup({
  heading,
  cases,
  progress,
  flipped,
  allRevealed,
  onToggle,
}: {
  heading: string;
  cases: LawCase[];
  progress: Progress;
  flipped: Record<string, boolean>;
  allRevealed: boolean;
  onToggle: (id: string) => void;
}) {
  const mastered = cases.filter(
    (c) => (progress.cards[c.id]?.mastery ?? 0) >= 4,
  ).length;
  return (
    <section className="dock-chapter">
      <header className="dock-chapter-header">
        <h3>{heading}</h3>
        <span className="dock-chapter-count">
          {mastered}/{cases.length} mastered
        </span>
      </header>
      <div className="dock-grid">
        {cases.map((c) =>
          renderCase(c, progress, flipped, allRevealed, onToggle),
        )}
      </div>
    </section>
  );
}

function renderCase(
  c: LawCase,
  progress: Progress,
  flipped: Record<string, boolean>,
  allRevealed: boolean,
  onToggle: (id: string) => void,
) {
  const state = progress.cards[c.id];
  const mastery = state?.mastery ?? 0;
  const show = allRevealed || !!flipped[c.id];
  return (
    <div key={c.id}>
      <CaseCard c={c} showPrinciple={show} onClick={() => onToggle(c.id)} />
      <div className="mastery-bar">
        <div style={{ width: `${(mastery / 5) * 100}%` }} />
      </div>
      <div
        style={{
          fontSize: "0.8rem",
          color: "var(--muted)",
          marginTop: "0.3rem",
        }}
      >
        Mastery {mastery}/5 · {state?.reps ?? 0} reviews ·{" "}
        {state?.lapses ?? 0} lapses
      </div>
    </div>
  );
}
