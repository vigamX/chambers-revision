import { useEffect, useState } from "react";
import type { Progress, Term } from "./types";
import { BRIEFS, BRIEFS_BY_ID } from "./data/briefs";
import { TERM_1_BOSS } from "./data/boss";
import { loadProgress, resetProgress, saveProgress, setTerm } from "./store";
import { TermPicker } from "./components/TermPicker";
import { Chambers } from "./components/Chambers";
import { BriefPlayer } from "./components/BriefPlayer";
import { RevisionDock } from "./components/RevisionDock";
import { CaseClash } from "./components/CaseClash";
import { TopicChecklist } from "./components/TopicChecklist";
import { BossFightPlayer } from "./components/BossFightPlayer";
import { GamesRoom } from "./components/GamesRoom";
import { Hangman } from "./components/Hangman";
import { CitationSprint } from "./components/CitationSprint";

type View =
  | { name: "picker" }
  | { name: "chambers" }
  | { name: "brief"; id: string }
  | { name: "dock" }
  | { name: "clash" }
  | { name: "checklist" }
  | { name: "boss" }
  | { name: "games" }
  | { name: "hangman" }
  | { name: "citation" };

const TERM_SHORT_LABEL: Record<Term, string> = {
  1: "Term 1 · Criminal",
  2: "Term 2 · Tort",
  3: "Term 3 · Contract",
  4: "Term 4 · Human Rights",
};

export default function App() {
  const [progress, setProgress] = useState<Progress>(() => loadProgress());
  const [view, setView] = useState<View>({ name: "picker" });

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  function reset() {
    if (confirm("Reset all progress?")) {
      setProgress(resetProgress());
      setView({ name: "picker" });
    }
  }

  function pickTerm(t: Term) {
    setProgress((p) => setTerm(p, t));
    setView({ name: "chambers" });
  }

  function returnToPicker() {
    setView({ name: "picker" });
  }

  const currentTerm = progress.currentTerm;
  const briefsForTerm = BRIEFS.filter((b) => b.term === currentTerm);
  const bossForTerm = currentTerm === 1 ? TERM_1_BOSS : null;

  return (
    <div className="app">
      <header className="app-header">
        <div>
          <h1>⚖️ Chambers</h1>
          <div className="subtitle">OCR A-Level Law · pupillage in progress</div>
        </div>
        <nav>
          {view.name !== "picker" && (
            <button
              className="term-pill"
              onClick={returnToPicker}
              title="Switch term"
            >
              {TERM_SHORT_LABEL[currentTerm]} ⇄
            </button>
          )}
          {view.name !== "chambers" && view.name !== "picker" && (
            <button onClick={() => setView({ name: "chambers" })}>Home</button>
          )}
          <button onClick={reset}>Reset</button>
        </nav>
      </header>

      {view.name === "picker" && (
        <TermPicker progress={progress} onPickTerm={pickTerm} />
      )}

      {view.name === "chambers" && (
        <Chambers
          term={currentTerm}
          briefs={briefsForTerm}
          progress={progress}
          boss={bossForTerm}
          onPick={(id) => setView({ name: "brief", id })}
          onOpenDock={() => setView({ name: "dock" })}
          onStartClash={() => setView({ name: "clash" })}
          onOpenChecklist={() => setView({ name: "checklist" })}
          onStartBoss={() => setView({ name: "boss" })}
          onOpenGames={() => setView({ name: "games" })}
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
          term={currentTerm}
          onBack={() => setView({ name: "chambers" })}
          onStartClash={() => setView({ name: "clash" })}
        />
      )}

      {view.name === "clash" && (
        <CaseClash
          progress={progress}
          term={currentTerm}
          onProgressChange={setProgress}
          onExit={() => setView({ name: "chambers" })}
        />
      )}

      {view.name === "checklist" && (
        <TopicChecklist
          progress={progress}
          term={currentTerm}
          onBack={() => setView({ name: "chambers" })}
        />
      )}

      {view.name === "boss" && bossForTerm && (
        <BossFightPlayer
          boss={bossForTerm}
          progress={progress}
          onProgressChange={setProgress}
          onExit={() => setView({ name: "chambers" })}
        />
      )}

      {view.name === "games" && (
        <GamesRoom
          term={currentTerm}
          progress={progress}
          onBack={() => setView({ name: "chambers" })}
          onOpenHangman={() => setView({ name: "hangman" })}
          onOpenCitation={() => setView({ name: "citation" })}
        />
      )}

      {view.name === "hangman" && (
        <Hangman
          term={currentTerm}
          progress={progress}
          onProgressChange={setProgress}
          onExit={() => setView({ name: "games" })}
        />
      )}

      {view.name === "citation" && (
        <CitationSprint
          term={currentTerm}
          progress={progress}
          onProgressChange={setProgress}
          onExit={() => setView({ name: "games" })}
        />
      )}
    </div>
  );
}
