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
        caseIds: ["r-v-miller"],
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
        caseIds: ["r-v-ahluwalia", "r-v-byrne"],
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
        id: "assault-abh",
        label: "Assault, battery & ABH",
        caseIds: ["r-v-ireland", "r-v-roberts"],
      },
      {
        id: "gbh",
        label: "GBH (s.20 & s.18)",
        caseIds: ["dpp-v-smith"],
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
        caseIds: ["mnaghten"],
      },
      {
        id: "automatism",
        label: "Automatism",
        caseIds: ["hill-v-baxter"],
      },
      {
        id: "intoxication",
        label: "Intoxication",
        caseIds: ["dpp-v-majewski"],
      },
      {
        id: "self-defence",
        label: "Self-defence",
        caseIds: ["r-v-martin"],
      },
      {
        id: "consent",
        label: "Consent",
        caseIds: ["r-v-brown"],
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
