export interface BossChoice {
  id: string;
  label: string;
  marks: number;
  feedback: string;
}

export interface BossStep {
  kind: "issue" | "authorities" | "application";
  prompt: string;
  marks: number;
  choices?: BossChoice[];
  authorityPool?: string[];
  correctAuthorities?: string[];
  partialCredit?: boolean;
  feedbackCorrect?: string;
  feedbackIncorrect?: string;
  explanation: string;
}

export interface BossFight {
  id: string;
  title: string;
  pupilQuote: string;
  scenario: string;
  scene: { emoji: string; palette: string };
  steps: BossStep[];
  caseIds: string[];
}

export const TERM_1_BOSS: BossFight = {
  id: "term-1-boss",
  title: "The Pupillage Examination",
  pupilQuote:
    "Ms Hale closes the door. 'One fact pattern. No notes. No retry. Show me you can do this under pressure — because in eight months, you will.'",
  scenario:
    "James, a Year-12 student, has spent exam-results night drinking heavily and taking unidentified pills. Outside The Hare & Hounds he picks a fight with Kemal, a stranger. James punches Kemal hard in the temple, saying 'I'll teach you a lesson.' Kemal drops unconscious. James panics and runs.\n\nPasser-by Lena calls an ambulance and films the aftermath on a livestream. Kemal, a Jehovah's Witness, regains consciousness at hospital and refuses the blood transfusion the surgeons say is essential. He dies six hours later.\n\nKemal's wife Mira watched Lena's livestream from home. Three months on she is being treated for a severe panic disorder formally diagnosed by a psychiatrist.\n\nThree nights after the fight, James — sleepless and convinced 'the pub regulars are coming for me' — breaks into a primary-school equipment shed at 2 a.m. He is discovered there with a hunting knife and a handwritten list of six names. No-one else is in the building.",
  scene: { emoji: "⚖️", palette: "linear-gradient(135deg,#1a1a3a,#3a2a5a)" },
  caseIds: [
    "r-v-vickers",
    "r-v-mohan",
    "r-v-blaue",
    "dpp-v-majewski",
    "r-v-ireland",
    "r-v-geddes",
    "r-v-martin",
  ],
  steps: [
    {
      kind: "issue",
      prompt:
        "On the killing of Kemal — what is the live mens rea question for a murder charge against James?",
      marks: 3,
      choices: [
        {
          id: "a",
          label:
            "Whether James intended to cause grievous bodily harm (he did not intend to kill)",
          marks: 3,
          feedback:
            "Right. James said 'teach him a lesson' and punched a single hard blow — no intent to kill, but the GBH-intent route is in play.",
        },
        {
          id: "b",
          label: "Whether James intended to kill",
          marks: 0,
          feedback:
            "On these facts there is no realistic argument for intent to kill. The contested question is GBH-intent.",
        },
        {
          id: "c",
          label: "Whether James was reckless as to causing death",
          marks: 0,
          feedback:
            "Recklessness is not the mens rea of murder — it is the threshold for unlawful act manslaughter or constructive offences.",
        },
      ],
      explanation:
        "Murder requires intention to kill OR intention to cause GBH (Vickers). Recklessness will not do.",
    },
    {
      kind: "authorities",
      prompt: "Pick the authorities on the murder mens rea question.",
      marks: 3,
      authorityPool: [
        "r-v-vickers",
        "r-v-mohan",
        "r-v-woollin",
        "r-v-cunningham",
        "r-v-adomako",
      ],
      correctAuthorities: ["r-v-vickers", "r-v-mohan"],
      partialCredit: true,
      feedbackCorrect:
        "Vickers gives the GBH-intent rule. Mohan defines direct intention. Woollin would be relevant if you ran an oblique-intent argument.",
      feedbackIncorrect:
        "Cunningham is recklessness — wrong test. Adomako is GNM — wrong offence.",
      explanation:
        "Vickers + Mohan are the must-cites. Woollin earns half a mark as a sensible inclusion.",
    },
    {
      kind: "application",
      prompt:
        "Kemal refused the blood transfusion that would have saved him. Defence counsel argues this breaks the chain of causation. Best response?",
      marks: 4,
      choices: [
        {
          id: "a",
          label:
            "It does not — the defendant takes his victim as he finds him, religious beliefs included (Blaue)",
          marks: 4,
          feedback: "Correct. Thin-skull rule applied to religious belief.",
        },
        {
          id: "b",
          label:
            "It does — refusing treatment is a free, voluntary act that breaks the chain",
          marks: 0,
          feedback:
            "Blaue squarely rejects this. The refusal does not break the chain even when the medical team disagrees with it.",
        },
        {
          id: "c",
          label:
            "It might — apply the 'palpably wrong' test from Jordan",
          marks: 1,
          feedback:
            "Jordan is about bad MEDICAL treatment, not a victim's own refusal. Wrong authority but you spotted a causation issue — partial credit.",
        },
      ],
      explanation:
        "Blaue is the textbook authority. The chain is not broken; James remains liable for the death.",
    },
    {
      kind: "issue",
      prompt:
        "James pleads that his intoxication meant he could not form the necessary mens rea. Is this a defence to murder?",
      marks: 3,
      choices: [
        {
          id: "a",
          label:
            "Voluntary intoxication can negate the specific intent for murder, reducing the verdict to manslaughter (Majewski)",
          marks: 3,
          feedback:
            "Correct. Murder is specific intent. If intoxication negates the mens rea, the fallback is constructive (unlawful act) manslaughter.",
        },
        {
          id: "b",
          label:
            "No — voluntary intoxication is never a defence to any crime",
          marks: 0,
          feedback:
            "Too broad. Majewski draws the basic/specific intent line precisely because intoxication can reduce a specific-intent offence.",
        },
        {
          id: "c",
          label:
            "Yes — full acquittal: he was too drunk to form any intent",
          marks: 0,
          feedback:
            "Even on the Majewski view, the fallback basic-intent offence (UAM here) remains, so full acquittal is not the outcome.",
        },
      ],
      explanation:
        "Murder is specific intent → Majewski allows the partial route to UAM. He does not walk free.",
    },
    {
      kind: "application",
      prompt:
        "Mira, watching the livestream from home, develops a clinical panic disorder. Can James be liable for an offence against her?",
      marks: 4,
      choices: [
        {
          id: "a",
          label:
            "Yes — s.47 ABH: psychiatric injury can constitute 'bodily harm' (Ireland); but causation/foreseeability of harm to a remote livestream viewer is the difficulty",
          marks: 4,
          feedback:
            "Correct and properly hedged. The principle is from Ireland; the live argument is whether the harm to Mira was reasonably foreseeable.",
        },
        {
          id: "b",
          label:
            "Yes — automatic liability because psychiatric injury counts as bodily harm (Ireland)",
          marks: 2,
          feedback:
            "You have the right authority but skipped the causation/foreseeability problem. Half marks.",
        },
        {
          id: "c",
          label:
            "No — bodily harm requires physical contact, which Mira did not have",
          marks: 0,
          feedback:
            "Ireland directly rejects that argument — recognised psychiatric illness is ABH.",
        },
      ],
      explanation:
        "A* answers will cite Ireland AND flag the harder causation question on these unusual facts (remote livestream viewer).",
    },
    {
      kind: "application",
      prompt:
        "On the school shed incident: is James guilty of attempted false imprisonment of a child?",
      marks: 4,
      choices: [
        {
          id: "a",
          label:
            "No — he had not yet engaged with any victim; this is mere preparation (Geddes)",
          marks: 4,
          feedback:
            "Correct. The school was empty at 2 a.m. Geddes is directly on point.",
        },
        {
          id: "b",
          label:
            "Yes — possession of the knife and the list shows he had crossed the more-than-merely-preparatory threshold",
          marks: 0,
          feedback:
            "Geddes rejected this exact argument on near-identical facts. Possession + intent is not enough.",
        },
        {
          id: "c",
          label:
            "Yes — once he broke in, the attempt was complete",
          marks: 1,
          feedback:
            "You correctly spotted that a substantive offence (burglary) is committed, but that is not the attempt charge in issue. Quarter marks.",
        },
      ],
      explanation:
        "Geddes is the school-lavatory case — the leading 'mere preparation' authority. James is liable for burglary/going-equipped but NOT attempted false imprisonment.",
    },
    {
      kind: "issue",
      prompt:
        "If James ran a self-defence plea (genuine belief the pub regulars were 'coming for him'), what is the legal difficulty?",
      marks: 3,
      choices: [
        {
          id: "a",
          label:
            "Force must be reasonable in the circumstances the defendant believed; psychiatric quirks do not enlarge what counts as reasonable (Martin)",
          marks: 3,
          feedback:
            "Correct. Martin is the authority — paranoia does not lower the objective reasonableness bar.",
        },
        {
          id: "b",
          label:
            "A genuine belief is enough — self-defence is a purely subjective test",
          marks: 0,
          feedback:
            "The belief is subjective, but the reasonableness of the force is judged objectively on the facts as he believed them. Martin pins this down.",
        },
        {
          id: "c",
          label:
            "Self-defence is not available against police, only against private persons",
          marks: 0,
          feedback:
            "Wrong — self-defence is available against any unlawful threat, public or private.",
        },
      ],
      explanation:
        "Martin (Anthony) is the seminal authority: subjective belief, but objective reasonableness — and psychiatric factors are excluded from the reasonableness assessment.",
    },
  ],
};
