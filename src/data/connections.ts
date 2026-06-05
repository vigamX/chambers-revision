import type { LegalArea } from "../types";
import { CASES_BY_ID } from "./cases";

export type ConnectionsDifficulty = "yellow" | "green" | "blue" | "purple";

export interface ConnectionsGroup {
  difficulty: ConnectionsDifficulty;
  label: string;
  caseIds: string[];
}

export interface ConnectionsPuzzle {
  id: string;
  area: LegalArea;
  title: string;
  flavour: string;
  groups: ConnectionsGroup[];
}

export const CONNECTIONS_PUZZLES: ConnectionsPuzzle[] = [
  {
    id: "crim-causation-chain",
    area: "criminal",
    title: "Four foundations of criminal liability",
    flavour: "Actus reus, mens rea, factual causation, broken chain. Group sixteen leading cases by which foundation they decided.",
    groups: [
      {
        difficulty: "yellow",
        label: "Factual causation — but-for & substantial contribution",
        caseIds: ["r-v-white", "r-v-pagett", "r-v-smith", "r-v-cheshire"],
      },
      {
        difficulty: "green",
        label: "Breaks in the chain — medical & victim's response",
        caseIds: ["r-v-jordan", "r-v-blaue", "r-v-roberts", "r-v-kennedy-no-2"],
      },
      {
        difficulty: "blue",
        label: "Mens rea — intent & recklessness leading cases",
        caseIds: ["r-v-mohan", "r-v-cunningham", "r-v-woollin", "r-v-g"],
      },
      {
        difficulty: "purple",
        label: "Actus reus — duty to act by omission",
        caseIds: ["r-v-miller", "r-v-pittwood", "r-v-stone-dobinson", "r-v-evans"],
      },
    ],
  },
  {
    id: "crim-defences-buffet",
    area: "criminal",
    title: "The defences buffet",
    flavour: "Four classic categories. The watchword is 'which defence?', not 'what offence?'.",
    groups: [
      {
        difficulty: "yellow",
        label: "Insanity (M'Naghten — disease of the mind)",
        caseIds: ["mnaghten", "r-v-sullivan", "r-v-hennessy", "r-v-burgess"],
      },
      {
        difficulty: "green",
        label: "Automatism (external factor, total loss of control)",
        caseIds: ["r-v-quick", "r-v-hardie", "hill-v-baxter", "bratty-v-ag-ni"],
      },
      {
        difficulty: "blue",
        label: "Intoxication",
        caseIds: ["dpp-v-majewski", "r-v-kingston", "r-v-lipman", "r-v-hatton"],
      },
      {
        difficulty: "purple",
        label: "Self-defence",
        caseIds: ["r-v-martin", "r-v-bird", "r-v-williams-gladstone", "ag-ref-no-6-1980"],
      },
    ],
  },
  {
    id: "crim-homicide-anatomy",
    area: "criminal",
    title: "Anatomy of a homicide",
    flavour: "Murder, voluntary manslaughter, involuntary manslaughter — and one set that doesn't kill at all.",
    groups: [
      {
        difficulty: "yellow",
        label: "Murder — intent & oblique intent",
        caseIds: ["r-v-vickers", "r-v-woollin", "r-v-moloney", "r-v-matthews-alleyne"],
      },
      {
        difficulty: "green",
        label: "Voluntary manslaughter — partial defences",
        caseIds: ["r-v-byrne", "r-v-ahluwalia", "r-v-clinton", "r-v-golds"],
      },
      {
        difficulty: "blue",
        label: "Involuntary manslaughter (unlawful act & gross negligence)",
        caseIds: ["r-v-church", "r-v-adomako", "dpp-v-newbury-jones", "r-v-lamb"],
      },
      {
        difficulty: "purple",
        label: "Non-fatal offences — V survives",
        caseIds: ["r-v-ireland", "r-v-burstow", "collins-v-wilcock", "r-v-chan-fook"],
      },
    ],
  },
  {
    id: "crim-theft-and-property",
    area: "criminal",
    title: "Theft Act tour",
    flavour: "The five elements of theft — plus one set that's a different offence entirely.",
    groups: [
      {
        difficulty: "yellow",
        label: "Appropriation (s.3)",
        caseIds: ["r-v-gomez", "r-v-hinks", "r-v-morris", "lawrence-v-mpc"],
      },
      {
        difficulty: "green",
        label: "Property belonging to another (ss.4–5)",
        caseIds: ["oxford-v-moss", "r-v-turner-no-2", "ag-ref-no-1-1983", "r-v-hall"],
      },
      {
        difficulty: "blue",
        label: "Dishonesty + intention permanently to deprive (ss.2 & 6)",
        caseIds: ["ivey-v-genting", "r-v-ghosh", "r-v-lloyd", "r-v-velumyl"],
      },
      {
        difficulty: "purple",
        label: "Robbery & burglary (different offences)",
        caseIds: ["r-v-hale", "corcoran-v-anderton", "r-v-collins", "r-v-ryan"],
      },
    ],
  },
  {
    id: "tort-negligence-anatomy",
    area: "tort",
    title: "Anatomy of a negligence claim",
    flavour: "Duty, breach, causation, remoteness — line them up.",
    groups: [
      {
        difficulty: "yellow",
        label: "Duty of care milestones",
        caseIds: [
          "donoghue-v-stevenson",
          "caparo-v-dickman",
          "robinson-v-ccwy",
          "hill-v-cc-west-yorkshire",
        ],
      },
      {
        difficulty: "green",
        label: "Breach: the reasonable-person standard",
        caseIds: [
          "bolam-v-friern-barnet",
          "bolitho-v-city-and-hackney",
          "nettleship-v-weston",
          "bolton-v-stone",
        ],
      },
      {
        difficulty: "blue",
        label: "Causation & remoteness",
        caseIds: [
          "barnett-v-chelsea",
          "wagon-mound-no-1",
          "hughes-v-lord-advocate",
          "latimer-v-aec",
        ],
      },
      {
        difficulty: "purple",
        label: "Special duty: emergency services",
        caseIds: [
          "kent-v-griffiths",
          "ratcliff-v-mcconnell",
          "jolley-v-sutton",
          "tomlinson-v-congleton",
        ],
      },
    ],
  },
  {
    id: "tort-land-trio",
    area: "tort",
    title: "Three torts about land",
    flavour: "Occupiers' liability, nuisance, Rylands — plus a vicarious decoy.",
    groups: [
      {
        difficulty: "yellow",
        label: "Occupiers' Liability Act 1957 (lawful visitors)",
        caseIds: [
          "wheat-v-lacon",
          "roles-v-nathan",
          "glasgow-corp-v-taylor",
          "phipps-v-rochester",
        ],
      },
      {
        difficulty: "green",
        label: "Private nuisance",
        caseIds: [
          "sturges-v-bridgman",
          "miller-v-jackson",
          "christie-v-davey",
          "hunter-v-canary-wharf",
        ],
      },
      {
        difficulty: "blue",
        label: "Rylands v Fletcher (strict liability for escapes)",
        caseIds: [
          "rylands-v-fletcher",
          "cambridge-water-v-ecl",
          "transco-v-stockport",
          "network-rail-v-morris",
        ],
      },
      {
        difficulty: "purple",
        label: "Vicarious liability — close-connection era",
        caseIds: [
          "lister-v-hesley-hall",
          "mohamud-v-morrisons",
          "cox-v-moj",
          "century-insurance-v-ni-road-transport",
        ],
      },
    ],
  },
  {
    id: "tort-occupiers-quartet",
    area: "tort",
    title: "Visitors, children, specialists, trespassers",
    flavour: "Every occupier-duty category — and one set isn't an occupier case at all.",
    groups: [
      {
        difficulty: "yellow",
        label: "Adult lawful visitors",
        caseIds: ["wheat-v-lacon", "roles-v-nathan", "bolton-v-stone", "latimer-v-aec"],
      },
      {
        difficulty: "green",
        label: "Child visitors & allurements",
        caseIds: [
          "glasgow-corp-v-taylor",
          "phipps-v-rochester",
          "jolley-v-sutton",
          "hughes-v-lord-advocate",
        ],
      },
      {
        difficulty: "blue",
        label: "Trespassers under OLA 1984",
        caseIds: [
          "tomlinson-v-congleton",
          "ratcliff-v-mcconnell",
          "keown-v-coventry",
          "donoghue-v-stevenson",
        ],
      },
      {
        difficulty: "purple",
        label: "Defences in tort",
        caseIds: [
          "smith-v-baker",
          "haynes-v-harwood",
          "froom-v-butcher",
          "sayers-v-harlow",
        ],
      },
    ],
  },
  {
    id: "tort-vicarious-dimensions",
    area: "tort",
    title: "Three steps to vicarious liability",
    flavour: "Status, course of employment, close connection — plus a nuisance set to throw you off.",
    groups: [
      {
        difficulty: "yellow",
        label: "Status: who is an employee?",
        caseIds: [
          "carmichael-v-national-power",
          "ferguson-v-dawson",
          "cox-v-moj",
          "lister-v-hesley-hall",
        ],
      },
      {
        difficulty: "green",
        label: "Course of employment: authorised acts (& forbidden ones)",
        caseIds: [
          "century-insurance-v-ni-road-transport",
          "limpus-v-london-general",
          "rose-v-plenty",
          "twine-v-beans-express",
        ],
      },
      {
        difficulty: "blue",
        label: "Frolics & close connection",
        caseIds: [
          "hilton-v-thomas-burton",
          "mohamud-v-morrisons",
          "bolam-v-friern-barnet",
          "nettleship-v-weston",
        ],
      },
      {
        difficulty: "purple",
        label: "Private nuisance",
        caseIds: [
          "sturges-v-bridgman",
          "coventry-v-lawrence",
          "christie-v-davey",
          "robinson-v-kilvert",
        ],
      },
    ],
  },
];

export function puzzleShortName(caseId: string): string {
  const c = CASES_BY_ID[caseId];
  if (!c) return caseId;
  const stripped = c.name
    .replace(/^R v /i, "")
    .replace(/^DPP v /i, "")
    .replace(/^A-G(?:'s)? Ref(?:erence)?[^v]* v /i, "")
    .replace(/^A-G(?:'s)? Reference \(No[^)]+\)/i, "AG Ref")
    .replace(/^Re A \(Conjoined Twins\)/i, "Re A")
    .replace(/ ?\([^)]*\)/g, "")
    .replace(/ Hospital Management Committee.*$/i, "")
    .replace(/ Borough Council$/i, "")
    .replace(/ Urban District Council$/i, " UDC")
    .replace(/ NHS Trust$/i, "")
    .replace(/ Healthcare$/i, "")
    .replace(/ Corporation$/i, " Corp")
    .replace(/ Infrastructure$/i, "")
    .replace(/ plc$/i, "")
    .replace(/ & Sons$/i, "")
    .replace(/ Supermarkets$/i, "")
    .replace(/ & Co$/i, "")
    .trim();
  const left = stripped.split(/\s+v\s+/i)[0];
  return left.length > 28 ? left.slice(0, 26) + "…" : left;
}

export function puzzleSubtitle(caseId: string): string {
  const c = CASES_BY_ID[caseId];
  if (!c) return "";
  const m = c.name.match(/^.+?\s+v\s+(.+)$/);
  if (!m) return `${c.year}`;
  let right = m[1]
    .replace(/ Hospital Management Committee.*$/i, " Hospital")
    .replace(/ Borough Council$/i, " BC")
    .replace(/ Urban District Council$/i, " UDC")
    .replace(/ NHS Trust$/i, "")
    .replace(/ Healthcare$/i, "")
    .replace(/ Corporation$/i, " Corp")
    .replace(/ Supermarkets$/i, "")
    .replace(/ & Sons$/i, "")
    .replace(/ & Co$/i, "")
    .replace(/ ?\([^)]*\)/g, "")
    .trim();
  if (right.length > 24) right = right.slice(0, 22) + "…";
  return `v ${right} · ${c.year}`;
}

export function puzzlesForArea(area: LegalArea): ConnectionsPuzzle[] {
  return CONNECTIONS_PUZZLES.filter((p) => p.area === area);
}
