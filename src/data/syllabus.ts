export interface SyllabusTopic {
  id: string;
  label: string;
  caseIds: string[];
}

export interface SyllabusSection {
  id: string;
  label: string;
  chapter: number;
  topics: SyllabusTopic[];
}

export const SYLLABUS: SyllabusSection[] = [
  {
    id: "rules",
    label: "General elements of criminal liability",
    chapter: 6,
    topics: [
      {
        id: "actus-reus",
        label: "Actus reus & omissions",
        caseIds: [
          "r-v-miller",
          "r-v-pittwood",
          "r-v-stone-dobinson",
          "r-v-dytham",
          "r-v-gibbins-proctor",
          "r-v-evans",
          "fagan-v-mpc",
          "dpp-v-santa-bermudez",
        ],
      },
      {
        id: "causation",
        label: "Causation (factual & legal)",
        caseIds: [
          "r-v-white",
          "r-v-pagett",
          "r-v-smith",
          "r-v-jordan",
          "r-v-cheshire",
          "r-v-blaue",
          "r-v-roberts",
          "r-v-kennedy-no-2",
        ],
      },
      {
        id: "mens-rea",
        label: "Mens rea: intention",
        caseIds: ["r-v-mohan", "r-v-moloney", "r-v-woollin", "r-v-matthews-alleyne"],
      },
      {
        id: "recklessness",
        label: "Recklessness",
        caseIds: ["r-v-cunningham", "r-v-g"],
      },
      {
        id: "transferred-malice",
        label: "Transferred malice",
        caseIds: ["r-v-latimer"],
      },
      {
        id: "strict-liability",
        label: "Strict liability",
        caseIds: [
          "sweet-v-parsley",
          "gammon-v-ag-hk",
          "alphacell-v-woodward",
          "callow-v-tillstone",
          "cundy-v-le-cocq",
          "harrow-v-shah",
          "pharm-soc-v-storkwain",
        ],
      },
    ],
  },
  {
    id: "fatal",
    label: "Fatal offences against the person",
    chapter: 7,
    topics: [
      {
        id: "murder",
        label: "Murder (express & implied malice)",
        caseIds: ["r-v-vickers", "r-v-mohan", "r-v-woollin", "r-v-matthews-alleyne"],
      },
      {
        id: "vol-mans-loc",
        label: "Voluntary manslaughter: loss of control",
        caseIds: ["r-v-ahluwalia", "r-v-clinton", "r-v-jewell"],
      },
      {
        id: "vol-mans-dr",
        label: "Voluntary manslaughter: diminished responsibility",
        caseIds: ["r-v-byrne", "r-v-golds", "r-v-dietschmann"],
      },
      {
        id: "invol-mans-uam",
        label: "Unlawful act manslaughter",
        caseIds: [
          "r-v-church",
          "r-v-mitchell",
          "dpp-v-newbury-jones",
          "r-v-lamb",
          "r-v-dawson",
        ],
      },
      {
        id: "invol-mans-gnm",
        label: "Gross negligence manslaughter",
        caseIds: ["r-v-adomako"],
      },
    ],
  },
  {
    id: "non-fatal",
    label: "Non-fatal offences against the person",
    chapter: 8,
    topics: [
      {
        id: "assault",
        label: "Assault (s.39 CJA 1988)",
        caseIds: [
          "r-v-ireland",
          "r-v-constanza",
          "tuberville-v-savage",
          "smith-v-cs-woking",
        ],
      },
      {
        id: "battery",
        label: "Battery (s.39 CJA 1988)",
        caseIds: ["collins-v-wilcock", "fagan-v-mpc"],
      },
      {
        id: "abh",
        label: "ABH (s.47 OAPA)",
        caseIds: ["r-v-roberts", "r-v-chan-fook", "dpp-v-santa-bermudez"],
      },
      {
        id: "gbh-s20",
        label: "s.20 GBH / wounding",
        caseIds: [
          "jcc-v-eisenhower",
          "r-v-burstow",
          "dpp-v-smith",
          "r-v-parmenter",
          "r-v-mowatt",
        ],
      },
      {
        id: "gbh-s18",
        label: "s.18 GBH with intent",
        caseIds: ["r-v-belfon"],
      },
    ],
  },
  {
    id: "property",
    label: "Offences against property",
    chapter: 9,
    topics: [
      {
        id: "theft-appropriation",
        label: "Theft: appropriation (s.3)",
        caseIds: ["r-v-gomez", "r-v-hinks"],
      },
      {
        id: "theft-property",
        label: "Theft: property (s.4)",
        caseIds: ["oxford-v-moss"],
      },
      {
        id: "theft-belonging",
        label: "Theft: belonging to another (s.5)",
        caseIds: ["r-v-turner-no-2", "ag-ref-no-1-1983"],
      },
      {
        id: "theft-dishonesty",
        label: "Theft: dishonesty (s.2)",
        caseIds: ["r-v-ghosh", "ivey-v-genting"],
      },
      {
        id: "theft-intent-deprive",
        label: "Theft: intent permanently to deprive (s.6)",
        caseIds: ["r-v-lloyd", "r-v-velumyl"],
      },
      {
        id: "robbery",
        label: "Robbery (s.8)",
        caseIds: ["r-v-hale", "r-v-dawson-james", "corcoran-v-anderton"],
      },
      {
        id: "burglary",
        label: "Burglary (s.9)",
        caseIds: ["r-v-collins", "r-v-brown-1985", "r-v-ryan", "r-v-walkington"],
      },
      {
        id: "criminal-damage",
        label: "Criminal damage (CDA 1971)",
        caseIds: [
          "roe-v-kingerlee",
          "r-v-smith-1974",
          "r-v-g",
          "r-v-steer",
          "r-v-hill-hall",
        ],
      },
    ],
  },
  {
    id: "mental-capacity-defences",
    label: "Mental capacity defences",
    chapter: 10,
    topics: [
      {
        id: "insanity",
        label: "Insanity",
        caseIds: ["mnaghten", "r-v-sullivan", "r-v-hennessy"],
      },
      {
        id: "automatism",
        label: "Automatism",
        caseIds: ["hill-v-baxter", "r-v-quick", "bratty-v-ag-ni"],
      },
      {
        id: "intoxication",
        label: "Intoxication",
        caseIds: ["dpp-v-majewski", "r-v-kingston", "r-v-hardie", "r-v-lipman"],
      },
    ],
  },
  {
    id: "general-defences",
    label: "General defences",
    chapter: 11,
    topics: [
      {
        id: "self-defence",
        label: "Self-defence",
        caseIds: ["r-v-martin", "r-v-williams-gladstone", "r-v-bird"],
      },
      {
        id: "consent",
        label: "Consent",
        caseIds: ["r-v-brown", "r-v-wilson", "ag-ref-no-6-1980"],
      },
      {
        id: "duress",
        label: "Duress by threats",
        caseIds: [
          "r-v-hasan",
          "r-v-graham",
          "r-v-howe",
          "r-v-hudson-taylor",
          "r-v-bowen",
          "r-v-valderrama-vega",
        ],
      },
      {
        id: "duress-circumstances",
        label: "Duress of circumstances",
        caseIds: ["r-v-conway"],
      },
      {
        id: "necessity",
        label: "Necessity",
        caseIds: ["r-v-dudley-stephens", "re-a-conjoined-twins"],
      },
    ],
  },
  {
    id: "preliminary",
    label: "Preliminary offences: attempts",
    chapter: 12,
    topics: [
      {
        id: "attempts",
        label: "Attempts (s.1 Criminal Attempts Act 1981)",
        caseIds: ["r-v-gullefer", "r-v-geddes", "r-v-jones-1990", "r-v-tosti"],
      },
    ],
  },
];

const CHAPTER_BY_CASE: Record<string, number> = (() => {
  const m: Record<string, number> = {};
  for (const section of SYLLABUS) {
    for (const topic of section.topics) {
      for (const id of topic.caseIds) {
        if (!(id in m)) m[id] = section.chapter;
      }
    }
  }
  return m;
})();

export function chapterForCase(caseId: string): number | null {
  return CHAPTER_BY_CASE[caseId] ?? null;
}

export const CHAPTER_LABELS: Record<number, string> = {
  6: "Chapter 6 — General elements",
  7: "Chapter 7 — Fatal offences",
  8: "Chapter 8 — Non-fatal offences",
  9: "Chapter 9 — Offences against property",
  10: "Chapter 10 — Mental capacity defences",
  11: "Chapter 11 — General defences",
  12: "Chapter 12 — Attempts",
};

export const CHAPTERS_ORDERED: number[] = [6, 7, 8, 9, 10, 11, 12];
