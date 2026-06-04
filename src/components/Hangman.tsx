import { useEffect, useMemo, useState } from "react";
import type { Progress, Term } from "../types";
import { AREA_FOR_TERM } from "../types";
import type { HangmanPuzzle } from "../data/hangman";
import {
  pickRandomPuzzle,
  puzzlesForTerm,
  uniqueLetters,
} from "../data/hangman";
import { recordHangmanResult } from "../store";

interface Props {
  term: Term;
  progress: Progress;
  onProgressChange: (p: Progress) => void;
  onExit: () => void;
}

const MAX_WRONG = 6;
const RECENTLY_SEEN_WINDOW = 12;
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const CATEGORY_LABEL: Record<HangmanPuzzle["category"], string> = {
  case: "Case",
  term: "Legal term",
  latin: "Latin",
};

export function Hangman({ term, progress, onProgressChange, onExit }: Props) {
  const area = AREA_FOR_TERM[term];
  const pool = useMemo(
    () => (area === "criminal" || area === "tort" ? puzzlesForTerm(area) : []),
    [area],
  );

  const [recentlySeen, setRecentlySeen] = useState<Set<string>>(new Set());
  const [puzzle, setPuzzle] = useState<HangmanPuzzle | null>(() =>
    pool.length > 0 ? pickRandomPuzzle(pool, new Set()) : null,
  );
  const [guessed, setGuessed] = useState<Set<string>>(new Set());
  const [resolved, setResolved] = useState(false);

  const needed = puzzle ? uniqueLetters(puzzle.answer) : new Set<string>();
  const wrongGuesses = [...guessed].filter((g) => !needed.has(g));
  const wrongCount = wrongGuesses.length;
  const won = puzzle ? [...needed].every((l) => guessed.has(l)) : false;
  const lost = wrongCount >= MAX_WRONG;
  const finished = won || lost;

  useEffect(() => {
    if (!puzzle || !finished || resolved) return;
    setResolved(true);
    onProgressChange(recordHangmanResult(progress, won));
  }, [finished, resolved, puzzle, won, progress, onProgressChange]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (finished) return;
      const key = e.key.toUpperCase();
      if (key.length === 1 && /[A-Z]/.test(key)) {
        guess(key);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  function guess(letter: string) {
    if (!puzzle || finished) return;
    if (guessed.has(letter)) return;
    setGuessed(new Set(guessed).add(letter));
  }

  function nextPuzzle() {
    if (!puzzle) return;
    const nextExclude = new Set(recentlySeen).add(puzzle.id);
    while (nextExclude.size > RECENTLY_SEEN_WINDOW) {
      const first = nextExclude.values().next().value;
      if (first === undefined) break;
      nextExclude.delete(first);
    }
    setRecentlySeen(nextExclude);
    setPuzzle(pickRandomPuzzle(pool, nextExclude));
    setGuessed(new Set());
    setResolved(false);
  }

  if (!puzzle) {
    return (
      <div>
        <div className="controls" style={{ marginBottom: "1rem" }}>
          <button onClick={onExit}>← Back to games</button>
        </div>
        <section className="empty-state">
          <h3>No puzzles for this term yet</h3>
          <p>Hangman pool is currently available for Criminal Law and Tort.</p>
        </section>
      </div>
    );
  }

  const stats = progress.gameStats?.hangman ?? {
    played: 0,
    won: 0,
    currentStreak: 0,
    longestStreak: 0,
  };

  return (
    <div>
      <div className="controls" style={{ marginBottom: "1rem" }}>
        <button onClick={onExit}>← Back to games</button>
        <div className="hangman-stats">
          Solved <strong>{stats.won}</strong>/{stats.played} · streak{" "}
          <strong>{stats.currentStreak}</strong> · best{" "}
          <strong>{stats.longestStreak}</strong>
        </div>
      </div>

      <section className="hangman-board">
        <div className="hangman-scene">
          <Scaffold wrong={wrongCount} won={won} />
        </div>

        <div className="hangman-play">
          <div className="hangman-category">
            <span className={`hangman-tag hangman-tag-${puzzle.category}`}>
              {CATEGORY_LABEL[puzzle.category]}
            </span>
            <span className="hangman-lives">
              {Array.from({ length: MAX_WRONG }).map((_, i) => (
                <span
                  key={i}
                  className={`life-pip ${i < MAX_WRONG - wrongCount ? "on" : "off"}`}
                  aria-hidden
                />
              ))}
            </span>
          </div>

          <div className="hangman-word" aria-label="Word to guess">
            {renderWord(puzzle.answer, guessed, finished)}
          </div>

          <p className="hangman-hint">
            <span className="hangman-hint-label">Hint:</span> {puzzle.hint}
          </p>

          {finished && (
            <div className={`hangman-result ${won ? "win" : "lose"}`}>
              {won ? (
                <>🎓 <strong>Solved.</strong> The answer was <em>{prettify(puzzle.answer)}</em>.</>
              ) : (
                <>⚖️ <strong>Out of guesses.</strong> The answer was <em>{prettify(puzzle.answer)}</em>.</>
              )}
            </div>
          )}

          <div className="hangman-keyboard">
            {ALPHABET.map((letter) => {
              const isGuessed = guessed.has(letter);
              const isRight = isGuessed && needed.has(letter);
              const isWrong = isGuessed && !needed.has(letter);
              return (
                <button
                  key={letter}
                  className={`key ${isRight ? "key-right" : ""} ${isWrong ? "key-wrong" : ""}`}
                  disabled={isGuessed || finished}
                  onClick={() => guess(letter)}
                >
                  {letter}
                </button>
              );
            })}
          </div>

          {finished && (
            <div className="controls" style={{ marginTop: "1rem" }}>
              <button className="btn-primary" onClick={nextPuzzle}>
                Next puzzle →
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function renderWord(answer: string, guessed: Set<string>, reveal: boolean) {
  const tokens = answer.split(" ");
  return tokens.map((token, ti) => (
    <span key={ti} className="hangman-word-token">
      {token.split("").map((ch, ci) => {
        const isLetter = /[A-Z]/.test(ch);
        const shown = !isLetter || guessed.has(ch) || reveal;
        const wasGuessed = guessed.has(ch);
        return (
          <span
            key={ci}
            className={`hangman-letter ${shown ? "shown" : "hidden"} ${reveal && !wasGuessed && isLetter ? "revealed" : ""}`}
          >
            {shown ? ch : "\u00A0"}
          </span>
        );
      })}
    </span>
  ));
}

function prettify(answer: string): string {
  return answer
    .split(" ")
    .map((w) => w.charAt(0) + w.slice(1).toLowerCase())
    .join(" ");
}

interface ScaffoldProps {
  wrong: number;
  won: boolean;
}

function Scaffold({ wrong, won }: ScaffoldProps) {
  const stroke = won ? "#7ed957" : "#e8b34a";
  return (
    <svg viewBox="0 0 160 200" width="160" height="200" aria-hidden>
      <defs>
        <linearGradient id="hgFloor" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(0,0,0,0.35)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </linearGradient>
      </defs>

      <rect x="0" y="180" width="160" height="20" fill="url(#hgFloor)" />

      <rect x="20" y="180" width="80" height="6" fill="#e8b34a" opacity="0.85" />
      <rect x="55" y="20" width="6" height="160" fill="#e8b34a" opacity="0.85" />
      <rect x="55" y="20" width="60" height="6" fill="#e8b34a" opacity="0.85" />
      <rect x="109" y="26" width="6" height="22" fill="#e8b34a" opacity="0.85" />

      {wrong >= 1 && (
        <g>
          <ellipse cx="112" cy="62" rx="11" ry="13" fill="rgba(0,0,0,0.55)" stroke={stroke} strokeWidth="1.2" />
          <path d="M 99 58 Q 112 46 125 58 L 124 64 Q 112 56 100 64 Z" fill={stroke} opacity="0.9" />
          <path d="M 99 58 Q 95 70 99 82 L 102 80 Q 99 70 102 60 Z" fill={stroke} opacity="0.85" />
          <path d="M 125 58 Q 129 70 125 82 L 122 80 Q 125 70 122 60 Z" fill={stroke} opacity="0.85" />
        </g>
      )}
      {wrong >= 2 && (
        <rect x="106" y="74" width="12" height="42" fill="rgba(0,0,0,0.45)" stroke={stroke} strokeWidth="1" />
      )}
      {wrong >= 3 && (
        <line x1="106" y1="80" x2="92" y2="108" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
      )}
      {wrong >= 4 && (
        <line x1="118" y1="80" x2="132" y2="108" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
      )}
      {wrong >= 5 && (
        <line x1="110" y1="116" x2="100" y2="148" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
      )}
      {wrong >= 6 && (
        <line x1="114" y1="116" x2="124" y2="148" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
      )}

      {won && (
        <g>
          <path
            d="M 35 110 L 50 95 L 45 90 L 30 105 Z"
            fill="#e8b34a"
            stroke="rgba(0,0,0,0.4)"
            strokeWidth="0.8"
          />
          <rect x="22" y="108" width="20" height="6" fill="#e8b34a" stroke="rgba(0,0,0,0.4)" strokeWidth="0.8" />
        </g>
      )}
    </svg>
  );
}
