# ⚖️ Chambers — OCR A-Level Law Revision Game

A visual, story-driven revision game for OCR A-Level Law. You play a junior barrister at Inns of Court Chambers, working briefs assigned by a pupil-master. Each brief drills you on real OCR cases using an Issue → Authorities → Application loop (the IRAC method).

Under the hood it runs a **spaced repetition** engine: cases you get wrong come back sooner, cases you nail get pushed further out.

## Running it

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## What's in the MVP

- **Term 1 — Criminal Law** with eight playable briefs:
  - *The Poisoned Glass* — causation (R v White)
  - *The Burning Mattress* — omissions (R v Miller)
  - *The Silent Caller* — non-fatal offences (R v Ireland)
  - *The Cellar Burglary* — murder mens rea (R v Vickers)
  - *The Anaesthetist* — gross negligence manslaughter (R v Adomako)
  - *The Binge* — voluntary intoxication (DPP v Majewski)
  - *The Slow Burn* — loss of control / diminished responsibility (R v Ahluwalia, R v Byrne)
  - *The Rope and Tape* — attempts (R v Geddes, R v Gullefer)
- **25 OCR Criminal Law cases** as illustrated visual cards (hand-crafted inline SVGs)
- **Revision Dock** sorted by weakest mastery first
- **localStorage persistence** — close the tab, come back tomorrow, pick up where you left off

## How a brief works

1. **Issue** — multiple choice: identify the legal question
2. **Authorities** — pick the right case cards from the pool
3. **Application** — apply the cases to reach a verdict

Wrong answers can be retried. The brief only counts a step as "first try" if you got it right immediately — that drives the SRS grade.

## Tech

- Vite + React 19 + TypeScript
- Pure client-side, no backend
- SM-2 style SRS in `src/srs.ts`
- All data in `src/data/` — easy to extend

## Adding more content

- **New case**: append to `src/data/cases.ts`
- **New brief**: append to `src/data/briefs.ts` referencing case ids
- **New term**: bump the `term` field and add it to the chambers screen

## Roadmap (not in MVP)

- More criminal briefs (defences, fatal offences, attempts)
- Term 2 (Tort) and Term 3 (Contract)
- "Case Clash" mode — distinguishing/applying drills
- Past-paper boss fights at end of each term
- Export Anki deck of mastered cases
