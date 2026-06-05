import { useEffect, useMemo, useRef, useState } from "react";
import type { Progress, Term } from "../types";
import { AREA_FOR_TERM } from "../types";
import type {
  ConnectionsDifficulty,
  ConnectionsGroup,
  ConnectionsPuzzle,
} from "../data/connections";
import {
  puzzlesForArea,
  puzzleShortName,
  puzzleSubtitle,
} from "../data/connections";
import { CASES_BY_ID } from "../data/cases";
import { recordConnectionsResult } from "../store";

interface Props {
  term: Term;
  progress: Progress;
  onProgressChange: (p: Progress) => void;
  onExit: () => void;
}

const MAX_LIVES = 4;
const DIFFICULTY_ORDER: ConnectionsDifficulty[] = ["yellow", "green", "blue", "purple"];
const DIFFICULTY_LABEL: Record<ConnectionsDifficulty, string> = {
  yellow: "Easiest",
  green: "Easy",
  blue: "Tricky",
  purple: "Hardest",
};

type Phase = "picking" | "playing" | "won" | "lost";
type Toast =
  | { kind: "wrong" }
  | { kind: "one-away" }
  | { kind: "solved"; group: ConnectionsGroup }
  | { kind: "duplicate" }
  | null;

function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

interface RoundState {
  puzzle: ConnectionsPuzzle;
  remaining: string[];
  solvedGroups: ConnectionsGroup[];
  selected: string[];
  lives: number;
  history: string[];
  toast: Toast;
}

function newRound(puzzle: ConnectionsPuzzle): RoundState {
  const all = puzzle.groups.flatMap((g) => g.caseIds);
  return {
    puzzle,
    remaining: shuffle(all),
    solvedGroups: [],
    selected: [],
    lives: MAX_LIVES,
    history: [],
    toast: null,
  };
}

export function Connections({ term, progress, onProgressChange, onExit }: Props) {
  const area = AREA_FOR_TERM[term];
  const pool = useMemo(
    () => (area === "criminal" || area === "tort" ? puzzlesForArea(area) : []),
    [area],
  );

  const [phase, setPhase] = useState<Phase>("picking");
  const [round, setRound] = useState<RoundState | null>(null);
  const resolvedRef = useRef(false);

  useEffect(() => {
    if (!round) return;
    if (round.solvedGroups.length === round.puzzle.groups.length && phase !== "won") {
      setPhase("won");
    }
    if (round.lives === 0 && phase !== "lost" && phase !== "won") {
      setPhase("lost");
    }
  }, [round, phase]);

  useEffect(() => {
    if ((phase === "won" || phase === "lost") && round && !resolvedRef.current) {
      resolvedRef.current = true;
      onProgressChange(
        recordConnectionsResult(progress, phase === "won", round.lives),
      );
    }
  }, [phase, round, progress, onProgressChange]);

  function startPuzzle(puzzle: ConnectionsPuzzle) {
    resolvedRef.current = false;
    setRound(newRound(puzzle));
    setPhase("playing");
  }

  function shuffleBoard() {
    if (!round) return;
    setRound({ ...round, remaining: shuffle(round.remaining), toast: null });
  }

  function deselect() {
    if (!round) return;
    setRound({ ...round, selected: [], toast: null });
  }

  function toggle(caseId: string) {
    if (!round || phase !== "playing") return;
    const isSelected = round.selected.includes(caseId);
    if (isSelected) {
      setRound({
        ...round,
        selected: round.selected.filter((id) => id !== caseId),
        toast: null,
      });
      return;
    }
    if (round.selected.length >= 4) return;
    setRound({ ...round, selected: [...round.selected, caseId], toast: null });
  }

  function submit() {
    if (!round || phase !== "playing" || round.selected.length !== 4) return;
    const guessKey = [...round.selected].sort().join("|");
    if (round.history.includes(guessKey)) {
      setRound({ ...round, toast: { kind: "duplicate" } });
      return;
    }

    const guess = round.selected;
    const sorted = [...guess].sort().join("|");
    const matched = round.puzzle.groups.find(
      (g) => [...g.caseIds].sort().join("|") === sorted,
    );

    if (matched) {
      const newRemaining = round.remaining.filter((id) => !guess.includes(id));
      setRound({
        ...round,
        remaining: newRemaining,
        solvedGroups: [...round.solvedGroups, matched],
        selected: [],
        history: [...round.history, sorted],
        toast: { kind: "solved", group: matched },
      });
      return;
    }

    let oneAway = false;
    for (const g of round.puzzle.groups) {
      if (round.solvedGroups.includes(g)) continue;
      const overlap = g.caseIds.filter((id) => guess.includes(id)).length;
      if (overlap === 3) {
        oneAway = true;
        break;
      }
    }

    setRound({
      ...round,
      lives: round.lives - 1,
      history: [...round.history, sorted],
      toast: oneAway ? { kind: "one-away" } : { kind: "wrong" },
    });
  }

  if (pool.length === 0) {
    return (
      <div>
        <div className="controls" style={{ marginBottom: "1rem" }}>
          <button onClick={onExit}>← Back to games</button>
        </div>
        <section className="empty-state">
          <h3>No Connections puzzles for this term yet</h3>
          <p>Chambers Connections is available for Criminal Law and Tort.</p>
        </section>
      </div>
    );
  }

  const stats = progress.gameStats?.connections;

  if (phase === "picking" || !round) {
    return (
      <div>
        <div className="controls" style={{ marginBottom: "1rem" }}>
          <button onClick={onExit}>← Back to games</button>
          {stats && (
            <div className="hangman-stats">
              Solved <strong>{stats.solved}</strong>/{stats.played} ·{" "}
              <strong>{stats.perfectSolves}</strong> perfect
            </div>
          )}
        </div>

        <section className="connections-picker">
          <h2 style={{ marginBottom: "0.25rem" }}>🧩 Chambers Connections</h2>
          <p className="pupil-quote" style={{ marginTop: 0 }}>
            Sixteen cases. Four hidden categories of four. Group them right
            before you run out of lives. Same surname can belong in different
            groups — don't be fooled.
          </p>

          <div className="connections-puzzle-list">
            {pool.map((p) => (
              <button
                key={p.id}
                className="connections-puzzle-card"
                onClick={() => startPuzzle(p)}
              >
                <h3>{p.title}</h3>
                <p>{p.flavour}</p>
                <span className="connections-puzzle-meta">
                  {p.groups.length} categories · {p.groups.reduce((n, g) => n + g.caseIds.length, 0)} cases
                </span>
              </button>
            ))}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <div className="controls" style={{ marginBottom: "1rem" }}>
        <button onClick={onExit}>← Back to games</button>
        <div className="connections-lives" aria-label={`${round.lives} lives left`}>
          {Array.from({ length: MAX_LIVES }).map((_, i) => (
            <span
              key={i}
              className={`life-pip ${i < round.lives ? "on" : "off"}`}
              aria-hidden
            />
          ))}
        </div>
      </div>

      <section className="connections-board">
        <div className="connections-header">
          <h2 style={{ marginBottom: "0.25rem" }}>{round.puzzle.title}</h2>
          <p className="pupil-quote" style={{ marginTop: 0 }}>
            {round.puzzle.flavour}
          </p>
        </div>

        <div className="connections-solved-stack">
          {round.solvedGroups.map((g) => (
            <SolvedRow key={g.label} group={g} />
          ))}
        </div>

        {round.remaining.length > 0 && (
          <div className="connections-grid">
            {round.remaining.map((caseId) => {
              const isSelected = round.selected.includes(caseId);
              return (
                <button
                  key={caseId}
                  className={`connections-tile ${isSelected ? "selected" : ""}`}
                  onClick={() => toggle(caseId)}
                  disabled={phase !== "playing"}
                  title={CASES_BY_ID[caseId]?.name ?? caseId}
                >
                  <span className="connections-tile-name">
                    {puzzleShortName(caseId)}
                  </span>
                  <span className="connections-tile-sub">
                    {puzzleSubtitle(caseId)}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {round.toast && (
          <ConnectionsToast toast={round.toast} />
        )}

        {phase === "playing" && (
          <div className="connections-actions">
            <button onClick={shuffleBoard}>Shuffle</button>
            <button onClick={deselect} disabled={round.selected.length === 0}>
              Deselect all
            </button>
            <button
              className="btn-primary"
              onClick={submit}
              disabled={round.selected.length !== 4}
            >
              Submit ({round.selected.length}/4)
            </button>
          </div>
        )}

        {phase === "won" && (
          <ConnectionsEnd
            won
            lives={round.lives}
            puzzle={round.puzzle}
            onReplay={() => startPuzzle(round.puzzle)}
            onPick={() => setPhase("picking")}
          />
        )}
        {phase === "lost" && (
          <ConnectionsEnd
            won={false}
            lives={round.lives}
            puzzle={round.puzzle}
            unsolved={round.puzzle.groups.filter(
              (g) => !round.solvedGroups.includes(g),
            )}
            onReplay={() => startPuzzle(round.puzzle)}
            onPick={() => setPhase("picking")}
          />
        )}
      </section>
    </div>
  );
}

function SolvedRow({ group }: { group: ConnectionsGroup }) {
  return (
    <div className={`connections-solved connections-${group.difficulty}`}>
      <div className="connections-solved-label">
        <span className="connections-difficulty">{DIFFICULTY_LABEL[group.difficulty]}</span>
        <span className="connections-group-label">{group.label}</span>
      </div>
      <div className="connections-solved-cases">
        {group.caseIds.map((id) => (
          <span key={id} className="connections-solved-case">
            {puzzleShortName(id)}
          </span>
        ))}
      </div>
    </div>
  );
}

function ConnectionsToast({ toast }: { toast: Exclude<Toast, null> }) {
  if (toast.kind === "wrong") {
    return <div className="connections-toast connections-toast-wrong">❌ Not a group. −1 life.</div>;
  }
  if (toast.kind === "one-away") {
    return <div className="connections-toast connections-toast-near">🥁 One away…</div>;
  }
  if (toast.kind === "duplicate") {
    return <div className="connections-toast connections-toast-dupe">↩ You already tried that group.</div>;
  }
  return (
    <div className="connections-toast connections-toast-right">
      ✅ Solved: <strong>{toast.group.label}</strong>
    </div>
  );
}

interface EndProps {
  won: boolean;
  lives: number;
  puzzle: ConnectionsPuzzle;
  unsolved?: ConnectionsGroup[];
  onReplay: () => void;
  onPick: () => void;
}

function ConnectionsEnd({ won, lives, puzzle, unsolved, onReplay, onPick }: EndProps) {
  const sortedGroups = [...puzzle.groups].sort(
    (a, b) =>
      DIFFICULTY_ORDER.indexOf(a.difficulty) - DIFFICULTY_ORDER.indexOf(b.difficulty),
  );
  return (
    <div className={`connections-end ${won ? "win" : "lose"}`}>
      <h3>{won ? "Solved." : "Out of lives."}</h3>
      {won && lives === MAX_LIVES && (
        <p className="connections-pb">🎉 Perfect — all four groups on the first try each.</p>
      )}
      {won && lives > 0 && lives < MAX_LIVES && (
        <p>
          {lives} {lives === 1 ? "life" : "lives"} left.
        </p>
      )}
      {!won && unsolved && unsolved.length > 0 && (
        <>
          <p>The groups you missed:</p>
          <div className="connections-end-stack">
            {sortedGroups.map((g) => (
              <SolvedRow key={g.label} group={g} />
            ))}
          </div>
        </>
      )}
      <div className="controls" style={{ marginTop: "1rem" }}>
        <button className="btn-primary" onClick={onReplay}>
          Play again →
        </button>
        <button onClick={onPick}>Pick another puzzle</button>
      </div>
    </div>
  );
}
