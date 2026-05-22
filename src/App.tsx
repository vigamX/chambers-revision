import { useEffect, useState } from "react";
import type { Progress } from "./types";
import { BRIEFS, BRIEFS_BY_ID } from "./data/briefs";
import { loadProgress, resetProgress, saveProgress } from "./store";
import { Chambers } from "./components/Chambers";
import { BriefPlayer } from "./components/BriefPlayer";
import { RevisionDock } from "./components/RevisionDock";
import { CaseClash } from "./components/CaseClash";

type View =
  | { name: "chambers" }
  | { name: "brief"; id: string }
  | { name: "dock" }
  | { name: "clash" };

export default function App() {
  const [progress, setProgress] = useState<Progress>(() => loadProgress());
  const [view, setView] = useState<View>({ name: "chambers" });

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  function reset() {
    if (confirm("Reset all progress?")) {
      setProgress(resetProgress());
      setView({ name: "chambers" });
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <div>
          <h1>⚖️ Chambers</h1>
          <div className="subtitle">OCR A-Level Law · pupillage in progress</div>
        </div>
        <nav>
          {view.name !== "chambers" && (
            <button onClick={() => setView({ name: "chambers" })}>Home</button>
          )}
          <button onClick={reset}>Reset</button>
        </nav>
      </header>

      {view.name === "chambers" && (
        <Chambers
          briefs={BRIEFS}
          progress={progress}
          onPick={(id) => setView({ name: "brief", id })}
          onOpenDock={() => setView({ name: "dock" })}
          onStartClash={() => setView({ name: "clash" })}
        />
      )}

      {view.name === "brief" && BRIEFS_BY_ID[view.id] && (
        <BriefPlayer
          brief={BRIEFS_BY_ID[view.id]}
          progress={progress}
          onProgressChange={setProgress}
          onExit={() => setView({ name: "chambers" })}
        />
      )}

      {view.name === "dock" && (
        <RevisionDock
          progress={progress}
          onBack={() => setView({ name: "chambers" })}
          onStartClash={() => setView({ name: "clash" })}
        />
      )}

      {view.name === "clash" && (
        <CaseClash
          progress={progress}
          onProgressChange={setProgress}
          onExit={() => setView({ name: "chambers" })}
        />
      )}
    </div>
  );
}
