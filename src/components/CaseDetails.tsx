import { useEffect } from "react";
import type { LawCase } from "../types";
import { CaseScene } from "./CaseScene";
import { topicLabel } from "../clash";
import { chapterForCase, CHAPTER_LABELS } from "../data/syllabus";

interface Props {
  c: LawCase | null;
  onClose: () => void;
}

export function CaseDetails({ c, onClose }: Props) {
  useEffect(() => {
    if (!c) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [c, onClose]);

  if (!c) return null;

  const chapter = chapterForCase(c.id);
  const chapterLabel = chapter !== null ? CHAPTER_LABELS[chapter] : null;

  return (
    <div
      className="case-details-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${c.name} details`}
    >
      <div
        className="case-details-drawer"
        onClick={(e) => e.stopPropagation()}
        style={{ background: c.visual.palette }}
      >
        <button
          className="case-details-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <div className="case-details-scene">
          <CaseScene caseId={c.id} />
        </div>

        <div className="case-details-body">
          <h2 className="case-details-title">
            {c.name}
            <span className="case-details-year"> ({c.year})</span>
          </h2>
          {chapterLabel && <div className="case-details-chapter">{chapterLabel}</div>}

          <h3 className="case-details-heading">Facts</h3>
          <p className="case-details-text">{c.facts}</p>

          <h3 className="case-details-heading">Point of law</h3>
          <p className="case-details-text">{c.principle}</p>

          <div className="case-details-topics">
            {c.topics.map((t) => (
              <span key={t} className="case-details-topic-chip">
                {topicLabel(t)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
