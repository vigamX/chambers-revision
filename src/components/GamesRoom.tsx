import type { Progress, Term } from "../types";
import { AREA_FOR_TERM } from "../types";
import { puzzlesForTerm } from "../data/hangman";

interface Props {
  term: Term;
  progress: Progress;
  onBack: () => void;
  onOpenHangman: () => void;
}

const TERM_LABEL: Record<Term, string> = {
  1: "Term 1 · Criminal",
  2: "Term 2 · Tort",
  3: "Term 3 · Contract",
  4: "Term 4 · Human Rights",
};

export function GamesRoom({ term, progress, onBack, onOpenHangman }: Props) {
  const area = AREA_FOR_TERM[term];
  const hangmanPool =
    area === "criminal" || area === "tort" ? puzzlesForTerm(area).length : 0;
  const stats = progress.gameStats?.hangman;
  const hangmanReady = hangmanPool > 0;

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

        <div className="game-card disabled" aria-disabled>
          <div className="game-card-header">
            <span className="game-card-label">Coming soon</span>
            <span className="game-card-tag">Connections</span>
          </div>
          <h3 className="game-card-title">Chambers Connections</h3>
          <p className="game-card-flavour">
            Sixteen cases. Four hidden categories. Group them into the right
            lines of authority before you run out of lives.
          </p>
          <div className="game-card-stats">
            <span>Planned for a future update</span>
          </div>
        </div>

        <div className="game-card disabled" aria-disabled>
          <div className="game-card-header">
            <span className="game-card-label">Coming soon</span>
            <span className="game-card-tag">Speed round</span>
          </div>
          <h3 className="game-card-title">Citation Sprint</h3>
          <p className="game-card-flavour">
            Sixty seconds. The app shows ___ v Stevenson, 1932. Type the
            missing party. How many can you nail before the bell?
          </p>
          <div className="game-card-stats">
            <span>Planned for a future update</span>
          </div>
        </div>
      </section>
    </div>
  );
}
