import type { LawCase } from "../types";
import { CaseScene } from "./CaseScene";

interface Props {
  c: LawCase;
  state?: "default" | "selected" | "correct" | "wrong";
  onClick?: () => void;
  onInfo?: () => void;
  showPrinciple?: boolean;
  hideCaption?: boolean;
}

export function CaseCard({ c, state = "default", onClick, onInfo, showPrinciple, hideCaption }: Props) {
  return (
    <div
      className={`case-card ${state}`}
      style={{ background: c.visual.palette }}
      onClick={onClick}
      role={onClick ? "button" : undefined}
    >
      {onInfo && (
        <button
          className="case-card-info"
          aria-label={`Details for ${c.name}`}
          onClick={(e) => {
            e.stopPropagation();
            onInfo();
          }}
        >
          ⓘ
        </button>
      )}
      <div className="case-scene-wrap">
        <CaseScene caseId={c.id} />
      </div>
      <div className="case-meta">
        <div className="case-name">
          {c.name}
          <span className="case-year"> ({c.year})</span>
        </div>
        {showPrinciple ? (
          <div className="principle">{c.principle}</div>
        ) : hideCaption ? null : (
          <div className="case-scene-caption">{c.visual.scene}</div>
        )}
      </div>
    </div>
  );
}
