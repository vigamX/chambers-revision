import type { LegalArea } from "../types";
import { CASES } from "./cases";

export type CitationSide = "left" | "right";

export interface CitationPrompt {
  caseId: string;
  area: LegalArea;
  year: number;
  fullName: string;
  side: CitationSide;
  visible: string;
  answer: string;
  acceptable: string[];
}

function normaliseAnswer(s: string): string {
  return s
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[.,]/g, "")
    .replace(/\s+/g, " ")
    .replace(/\bplc\b|\bltd\b|\binc\b|\bcorp(?:oration)?\b|\bcompany\b|\bcounty\bcouncil\b/g, "")
    .replace(/\band\b/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function buildAcceptable(raw: string): string[] {
  const trimmed = raw.trim();
  const base = normaliseAnswer(trimmed);
  const out = new Set<string>([base]);
  const firstWord = base.split(" ")[0];
  if (firstWord && firstWord.length >= 3) out.add(firstWord);
  const noBrackets = base.replace(/\([^)]*\)/g, "").trim();
  if (noBrackets) out.add(noBrackets);
  const noOf = base.replace(/\s*\([^)]*\)\s*/g, " ").replace(/\bof\b.*$/, "").trim();
  if (noOf) out.add(noOf);
  out.delete("");
  return [...out];
}

export const CITATION_PROMPTS: CitationPrompt[] = (() => {
  const prompts: CitationPrompt[] = [];
  for (const c of CASES) {
    const match = c.name.match(/^(.+?)\s+v\s+(.+)$/);
    if (!match) continue;
    const [, left, right] = match;
    prompts.push({
      caseId: c.id,
      area: c.area,
      year: c.year,
      fullName: c.name,
      side: "left",
      visible: `___ v ${right}`,
      answer: left.trim(),
      acceptable: buildAcceptable(left),
    });
    prompts.push({
      caseId: c.id,
      area: c.area,
      year: c.year,
      fullName: c.name,
      side: "right",
      visible: `${left} v ___`,
      answer: right.trim(),
      acceptable: buildAcceptable(right),
    });
  }
  return prompts;
})();

export function promptsForArea(area: LegalArea): CitationPrompt[] {
  return CITATION_PROMPTS.filter((p) => p.area === area);
}

export function answerMatches(prompt: CitationPrompt, guess: string): boolean {
  const norm = normaliseAnswer(guess);
  if (!norm) return false;
  for (const accept of prompt.acceptable) {
    if (norm === accept) return true;
  }
  const longest = prompt.acceptable.reduce((a, b) => (a.length >= b.length ? a : b), "");
  if (norm.length >= 6 && longest.startsWith(norm)) return true;
  for (const accept of prompt.acceptable) {
    if (accept.length >= 4 && norm.length >= accept.length - 2 && accept.startsWith(norm)) {
      return true;
    }
  }
  return false;
}
