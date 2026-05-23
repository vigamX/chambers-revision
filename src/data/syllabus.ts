export interface SyllabusTopic {
  id: string;
  label: string;
  caseIds: string[];
}

export interface SyllabusSection {
  id: string;
  label: string;
  topics: SyllabusTopic[];
}

export const SYLLABUS: SyllabusSection[] = [
  {
    id: "rules",
    label: "Rules of criminal liability",
    topics: [
      {
        id: "actus-reus",
        label: "Actus reus & omissions",
        caseIds: ["r-v-miller", "r-v-pittwood", "r-v-stone-dobinson", "r-v-dytham"],
      },
      {
        id: "causation",
        label: "Causation (factual & legal)",
        caseIds: [
          "r-v-white",
          "r-v-pagett",
          "r-v-smith",
          "r-v-jordan",
          "r-v-blaue",
          "r-v-roberts",
        ],
      },
      {
        id: "mens-rea",
        label: "Mens rea: intention & recklessness",
        caseIds: ["r-v-mohan", "r-v-woollin", "r-v-cunningham"],
      },
    ],
  },
  {
    id: "fatal",
    label: "Fatal offences against the person",
    topics: [
      {
        id: "murder",
        label: "Murder (express & implied malice)",
        caseIds: ["r-v-vickers", "r-v-mohan", "r-v-woollin"],
      },
      {
        id: "vol-mans",
        label: "Voluntary manslaughter (LOC & DR)",
        caseIds: ["r-v-ahluwalia", "r-v-byrne", "r-v-clinton", "r-v-golds"],
      },
      {
        id: "invol-mans-uam",
        label: "Unlawful act manslaughter",
        caseIds: ["r-v-church", "r-v-mitchell"],
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
    topics: [
      {
        id: "battery",
        label: "Battery (s.39 CJA 1988)",
        caseIds: ["collins-v-wilcock"],
      },
      {
        id: "assault-abh",
        label: "Assault & ABH (s.47 OAPA)",
        caseIds: ["r-v-ireland", "r-v-roberts", "r-v-chan-fook"],
      },
      {
        id: "gbh-s20",
        label: "s.20 GBH / wounding",
        caseIds: ["jcc-v-eisenhower", "r-v-burstow", "dpp-v-smith"],
      },
      {
        id: "gbh-s18",
        label: "s.18 GBH with intent",
        caseIds: ["r-v-belfon"],
      },
    ],
  },
  {
    id: "defences",
    label: "General defences",
    topics: [
      {
        id: "insanity",
        label: "Insanity",
        caseIds: ["mnaghten", "r-v-sullivan"],
      },
      {
        id: "automatism",
        label: "Automatism",
        caseIds: ["hill-v-baxter"],
      },
      {
        id: "intoxication",
        label: "Intoxication",
        caseIds: ["dpp-v-majewski", "r-v-kingston"],
      },
      {
        id: "self-defence",
        label: "Self-defence",
        caseIds: ["r-v-martin", "r-v-williams-gladstone"],
      },
      {
        id: "consent",
        label: "Consent",
        caseIds: ["r-v-brown", "r-v-wilson"],
      },
    ],
  },
  {
    id: "preliminary",
    label: "Preliminary offences",
    topics: [
      {
        id: "attempts",
        label: "Attempts (s.1 Criminal Attempts Act 1981)",
        caseIds: ["r-v-gullefer", "r-v-geddes"],
      },
    ],
  },
];
