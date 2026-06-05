import type { Progress, Term } from "../types";
import { AREA_FOR_TERM } from "../types";
import { puzzlesForTerm } from "../data/hangman";
import { promptsForArea } from "../data/citations";
import { puzzlesForArea as connectionsPuzzlesForArea } from "../data/connections";

interface Props {
  term: Term;
  progress: Progress;
  onBack: () => void;
  onOpenHangman: () => void;
  onOpenCitation: () => void;
  onOpenConnections: () => void;
}

const TERM_LABEL: Record<Term, string> = {
  1: "Term 1 · Criminal",
  2: "Term 2 · Tort",
  3: "Term 3 · Contract",
  4: "Term 4 · Human Rights",
};

export function GamesRoom({
  term,
  progress,
  onBack,
  onOpenHangman,
  onOpenCitation,
  onOpenConnections,
}: Props) {
  const area = AREA_FOR_TERM[term];
  const hangmanPool =
    area === "criminal" || area === "tort" ? puzzlesForTerm(area).length : 0;
  const stats = progress.gameStats?.hangman;
  const hangmanReady = hangmanPool > 0;

  const citationPool =
    area === "criminal" || area === "tort" ? promptsForArea(area).length : 0;
  const citationStats = progress.gameStats?.citation;
  const citationReady = citationPool > 0;

  const connectionsPool =
    area === "criminal" || area === "tort"
      ? connectionsPuzzlesForArea(area).length
      : 0;
  const connectionsStats = progress.gameStats?.connections;
  const connectionsReady = connectionsPool > 0;

  return (
    <div>
      <div className="controls" style={{ marginBottom: "1rem" }}>
        <button onClick={onBack}>← Back to chambers</button>
        <div className="games-room-term">{TERM_LABEL[term]}</div>
      </div>

      <section>
        <h2 style={{ marginBottom: "0.25rem" }}>🎲 Games Room</h2>
        <p className="pupil-quote" style={{ marginTop: 0 }}>
          A short break between briefs. Same cases, different angle.
        </p>
      </section>

      <section className="games-grid">
        <button
          className={`game-card ${hangmanReady ? "" : "disabled"}`}
          onClick={hangmanReady ? onOpenHangman : undefined}
          disabled={!hangmanReady}
        >
          <div className="game-card-header">
            <span className="game-card-label">Word puzzle</span>
            <span className="game-card-tag">Hangman</span>
          </div>
          <h3 className="game-card-title">Counsel's Gambit</h3>
          <p className="game-card-flavour">
            Guess the case name, legal term or Latin maxim letter by letter. A
            hint is always shown. Six wrong guesses and the case is lost.
          </p>
          <div className="game-card-stats">
            {hangmanReady ? (
              <>
                <span>
                  <strong>{hangmanPool}</strong> puzzles
                </span>
                {stats && stats.played > 0 && (
                  <>
                    <span>
                      <strong>{stats.won}</strong>/{stats.played} solved
                    </span>
                    <span>
                      streak <strong>{stats.currentStreak}</strong> (best{" "}
                      {stats.longestStreak})
                    </span>
                  </>
                )}
              </>
            ) : (
              <span>No puzzles for this term yet</span>
            )}
          </div>
          {hangmanReady && (
            <div className="game-card-cta">Play →</div>
          )}
        </button>

        <button
          className={`game-card ${connectionsReady ? "" : "disabled"}`}
          onClick={connectionsReady ? onOpenConnections : undefined}
          disabled={!connectionsReady}
        >
          <div className="game-card-header">
            <span className="game-card-label">Grid puzzle</span>
            <span className="game-card-tag">Connections</span>
          </div>
          <h3 className="game-card-title">Chambers Connections</h3>
          <p className="game-card-flavour">
            Sixteen cases. Four hidden categories. Group them into the right
            lines of authority before you run out of lives.
          </p>
          <div className="game-card-stats">
            {connectionsReady ? (
              <>
                <span>
                  <strong>{connectionsPool}</strong> puzzle
                  {connectionsPool === 1 ? "" : "s"}
                </span>
                {connectionsStats && connectionsStats.played > 0 && (
                  <>
                    <span>
                      <strong>{connectionsStats.solved}</strong>/
                      {connectionsStats.played} solved
                    </span>
                    {connectionsStats.perfectSolves > 0 && (
                      <span>
                        <strong>{connectionsStats.perfectSolves}</strong> perfect
                      </span>
                    )}
                  </>
                )}
              </>
            ) : (
              <span>No puzzles for this term yet</span>
            )}
          </div>
          {connectionsReady && <div className="game-card-cta">Play →</div>}
        </button>

        <button
          className={`game-card ${citationReady ? "" : "disabled"}`}
          onClick={citationReady ? onOpenCitation : undefined}
          disabled={!citationReady}
        >
          <div className="game-card-header">
            <span className="game-card-label">Speed round</span>
            <span className="game-card-tag">Citation</span>
          </div>
          <h3 className="game-card-title">Citation Sprint</h3>
          <p className="game-card-flavour">
            Sixty seconds. The board shows <em>___ v Stevenson, 1932</em>. Type
            the missing party. How many can you nail before the bell?
          </p>
          <div className="game-card-stats">
            {citationReady ? (
              <>
                <span>
                  <strong>{citationPool}</strong> prompts
                </span>
                {citationStats && citationStats.rounds > 0 && (
                  <>
                    <span>
                      best <strong>{citationStats.bestScore}</strong>
                    </span>
                    <span>
                      <strong>{citationStats.rounds}</strong> round
                      {citationStats.rounds === 1 ? "" : "s"} played
                    </span>
                  </>
                )}
              </>
            ) : (
              <span>No prompts for this term yet</span>
            )}
          </div>
          {citationReady && <div className="game-card-cta">Play →</div>}
        </button>
      </section>
    </div>
  );
}
