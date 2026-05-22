import type { Brief } from "../types";

export const BRIEFS: Brief[] = [
  {
    id: "brief-1-the-poisoned-glass",
    title: "Brief 1 — The Poisoned Glass",
    term: 1,
    scenario:
      "Your client, Arthur, mixed cyanide into his elderly aunt's evening sherry intending to inherit her estate. Before she could drink, she suffered a fatal heart attack brought on by unrelated stress. The prosecution charges Arthur with murder.",
    scene: { emoji: "🥃", palette: "linear-gradient(135deg,#3a2a1a,#7a5a2a)" },
    caseIds: ["r-v-white", "r-v-mohan"],
    steps: [
      {
        kind: "issue",
        prompt: "What is the central legal issue?",
        choices: [
          {
            id: "a",
            label: "Factual causation of death",
            correct: true,
            feedback:
              "Correct. The aunt died of a heart attack, not poison — so the question is whether Arthur's act caused her death.",
          },
          {
            id: "b",
            label: "Whether Arthur had the mens rea for murder",
            correct: false,
            feedback:
              "Mens rea is clear (he intended to kill). The harder question is whether his act caused the death.",
          },
          {
            id: "c",
            label: "Whether sherry counts as a deadly weapon",
            correct: false,
            feedback:
              "Not the issue — the substance does not need to be a 'weapon' for murder.",
          },
        ],
        explanation:
          "When the victim dies of an unrelated cause before the defendant's act takes effect, causation — not intention — is the live issue.",
      },
      {
        kind: "authorities",
        prompt: "Select the authorities you would cite.",
        authorityPool: ["r-v-white", "r-v-mohan", "r-v-pagett", "r-v-blaue"],
        correctAuthorities: ["r-v-white", "r-v-mohan"],
        explanation:
          "R v White gives the 'but for' test (she would have died anyway). R v Mohan supplies the definition of direct intention (relevant for the attempted murder fallback).",
      },
      {
        kind: "application",
        prompt: "Applying R v White, what verdict on the murder charge?",
        choices: [
          {
            id: "a",
            label:
              "Not guilty of murder — 'but for' Arthur's act she would still have died at that moment",
            correct: true,
            feedback:
              "Correct. Factual causation fails. He is, however, liable for attempted murder (intent + more than merely preparatory act).",
          },
          {
            id: "b",
            label: "Guilty of murder — he intended to kill",
            correct: false,
            feedback:
              "Intention alone is not enough. The actus reus of murder requires causing death.",
          },
        ],
        explanation:
          "White is the classic 'but for' authority: intention without causation cannot complete the offence — but attempt may still be charged.",
      },
    ],
  },
  {
    id: "brief-2-the-burning-mattress",
    title: "Brief 2 — The Burning Mattress",
    term: 1,
    scenario:
      "Your client, Bea, was squatting in a derelict house. She lit a cigarette, dozed off, and woke to find the mattress smouldering. She walked into the next room, shut the door, and went back to sleep. The house burned down.",
    scene: { emoji: "🔥", palette: "linear-gradient(135deg,#3a2a1a,#7a4a1a)" },
    caseIds: ["r-v-miller", "r-v-cunningham"],
    steps: [
      {
        kind: "issue",
        prompt: "What is the actus reus problem here?",
        choices: [
          {
            id: "a",
            label:
              "She did not actively start the fire; her conduct was an omission",
            correct: true,
            feedback:
              "Correct. The fire grew because she failed to act after creating the danger.",
          },
          {
            id: "b",
            label: "There is no actus reus at all",
            correct: false,
            feedback:
              "There is — but it sits in omission/continuing-act territory, not active conduct.",
          },
        ],
        explanation:
          "When the defendant creates a danger and then fails to address it, the question is whether the omission can found liability.",
      },
      {
        kind: "authorities",
        prompt: "Pick the authorities that resolve the actus reus issue.",
        authorityPool: ["r-v-miller", "r-v-cunningham", "r-v-white", "r-v-blaue"],
        correctAuthorities: ["r-v-miller", "r-v-cunningham"],
        explanation:
          "Miller establishes the duty arising from creating a dangerous situation. Cunningham supplies the recklessness mens rea for criminal damage.",
      },
      {
        kind: "application",
        prompt:
          "Applying Miller, is Bea liable for arson (criminal damage by fire)?",
        choices: [
          {
            id: "a",
            label:
              "Yes — she created the danger and failed to take reasonable steps; with Cunningham recklessness, the offence is made out",
            correct: true,
            feedback:
              "Correct. Miller-duty + Cunningham-reckless mens rea = liability.",
          },
          {
            id: "b",
            label: "No — she did not start the fire deliberately",
            correct: false,
            feedback:
              "Arson does not need deliberate ignition: recklessness as to damage by fire suffices.",
          },
        ],
        explanation:
          "Miller is the textbook 'continuing act / duty from danger created' authority. Always pair it with the right mens rea case (here Cunningham).",
      },
    ],
  },
  {
    id: "brief-3-the-silent-caller",
    title: "Brief 3 — The Silent Caller",
    term: 1,
    scenario:
      "Your client, Clara, received dozens of silent phone calls over three months. She developed clinical depression and panic attacks. The police have charged the caller, Dan, with assault occasioning actual bodily harm under s.47 OAPA 1861.",
    scene: { emoji: "📞", palette: "linear-gradient(135deg,#1a1a3a,#2a2a5a)" },
    caseIds: ["r-v-ireland", "r-v-cunningham"],
    steps: [
      {
        kind: "issue",
        prompt: "What two issues must the prosecution overcome?",
        choices: [
          {
            id: "a",
            label:
              "Whether silence can be an assault, and whether psychiatric injury is 'bodily harm'",
            correct: true,
            feedback:
              "Correct — both points were resolved together in the leading case.",
          },
          {
            id: "b",
            label:
              "Whether telephones count as weapons, and whether Clara consented",
            correct: false,
            feedback:
              "Neither is the live issue under s.47.",
          },
        ],
        explanation:
          "s.47 requires (i) an assault and (ii) ABH. Both 'silence = assault' and 'psychiatric = ABH' are doctrinal hurdles.",
      },
      {
        kind: "authorities",
        prompt: "Which single authority answers both points?",
        authorityPool: ["r-v-ireland", "r-v-miller", "r-v-white", "r-v-pagett"],
        correctAuthorities: ["r-v-ireland"],
        explanation:
          "R v Ireland resolves both: silence can constitute assault, and recognised psychiatric illness is bodily harm.",
      },
      {
        kind: "application",
        prompt: "Applying Ireland, what is the likely outcome?",
        choices: [
          {
            id: "a",
            label:
              "Conviction under s.47 — silence apprehended as immediate unlawful violence + clinical depression as ABH",
            correct: true,
            feedback: "Correct application of Ireland.",
          },
          {
            id: "b",
            label: "Acquittal — no words means no assault",
            correct: false,
            feedback:
              "Ireland expressly rejected that argument: 'a thing said is a thing done', and so is a thing not said.",
          },
        ],
        explanation:
          "Ireland is the modern landmark for non-physical assault and psychiatric harm. Remember it alongside Burstow (s.20 equivalent).",
      },
    ],
  },
  {
    id: "brief-4-the-cellar-burglary",
    title: "Brief 4 — The Cellar Burglary",
    term: 1,
    scenario:
      "Your client, Edmund, broke into a shop at night. The elderly owner, who lived above, came down. To silence her, he hit her hard around the head several times — intending only to knock her out so he could escape. She died from her injuries.",
    scene: { emoji: "🕯️", palette: "linear-gradient(135deg,#2a1a2a,#5a2a4a)" },
    caseIds: ["r-v-vickers", "r-v-mohan"],
    steps: [
      {
        kind: "issue",
        prompt: "Edmund did not intend to kill. Can he be guilty of murder?",
        choices: [
          {
            id: "a",
            label:
              "Yes — intention to cause grievous bodily harm is sufficient mens rea for murder",
            correct: true,
            feedback:
              "Correct. Implied malice — the long-standing rule restated in Vickers.",
          },
          {
            id: "b",
            label: "No — murder requires an intent to kill and nothing less",
            correct: false,
            feedback:
              "Not so. English law has recognised intent to cause GBH as sufficient since the 19th century, confirmed in Vickers.",
          },
          {
            id: "c",
            label: "No — without intent to kill it is automatically manslaughter",
            correct: false,
            feedback:
              "Only true if mens rea for murder is absent altogether. Here, GBH intent is present.",
          },
        ],
        explanation:
          "Murder mens rea = intention to kill OR intention to cause GBH. This is the 'malice aforethought' doctrine, modernised.",
      },
      {
        kind: "authorities",
        prompt: "Cite the authorities establishing the mens rea of murder.",
        authorityPool: ["r-v-vickers", "r-v-mohan", "r-v-woollin", "r-v-cunningham"],
        correctAuthorities: ["r-v-vickers", "r-v-mohan"],
        explanation:
          "Vickers confirms GBH intent suffices. Mohan defines direct intention. (Woollin would also assist on oblique intent; Cunningham is the wrong test — it governs recklessness, which is not the mens rea of murder.)",
      },
      {
        kind: "application",
        prompt: "Edmund hit the victim hard enough to knock her unconscious. Outcome?",
        choices: [
          {
            id: "a",
            label:
              "Guilty of murder — he intended really serious harm; that satisfies Vickers; death followed",
            correct: true,
            feedback: "Right. GBH intent + caused death = murder.",
          },
          {
            id: "b",
            label:
              "Guilty only of unlawful act manslaughter — no intent to kill",
            correct: false,
            feedback:
              "UAM is the fallback where mens rea for murder is absent. Here the GBH intent is enough for murder.",
          },
        ],
        explanation:
          "The student error is assuming murder requires intent to kill. Vickers is the case to cite to defeat that argument.",
      },
    ],
  },
  {
    id: "brief-5-the-anaesthetist",
    title: "Brief 5 — The Anaesthetist",
    term: 1,
    scenario:
      "Your client, Dr Fenton, was the anaesthetist during routine eye surgery. The patient's endotracheal tube became disconnected. Dr Fenton failed to notice the alarm or check the tube for over four minutes; the patient suffered cardiac arrest and died. The prosecution alleges gross negligence manslaughter.",
    scene: { emoji: "🫁", palette: "linear-gradient(135deg,#1a3a3a,#2a5a5a)" },
    caseIds: ["r-v-adomako"],
    steps: [
      {
        kind: "issue",
        prompt: "What are the elements the prosecution must establish?",
        choices: [
          {
            id: "a",
            label:
              "Duty of care, breach, risk of death, and conduct so bad as to be criminal",
            correct: true,
            feedback: "Correct — the four-stage Adomako test.",
          },
          {
            id: "b",
            label:
              "Intention to kill or cause GBH, and causation of death",
            correct: false,
            feedback: "That is murder. Gross negligence manslaughter has no mens rea of intention.",
          },
          {
            id: "c",
            label: "An unlawful act, dangerousness, and causation",
            correct: false,
            feedback: "That is the Church test for unlawful act manslaughter — a different limb.",
          },
        ],
        explanation:
          "Adomako governs death by gross negligence: duty + breach + risk of death + grossness. The grossness element is for the jury.",
      },
      {
        kind: "authorities",
        prompt: "Pick the leading authority.",
        authorityPool: ["r-v-adomako", "r-v-church", "r-v-mitchell", "r-v-cunningham"],
        correctAuthorities: ["r-v-adomako"],
        explanation:
          "Adomako is the leading case — itself involving an anaesthetist on these exact facts. Church/Mitchell are UAM. Cunningham is recklessness.",
      },
      {
        kind: "application",
        prompt: "Apply Adomako. Outcome?",
        choices: [
          {
            id: "a",
            label:
              "Guilty — clear duty as anaesthetist, four-minute lapse is a breach with obvious risk of death, the jury may readily find grossness",
            correct: true,
            feedback: "Correct application — these are the very facts of Adomako.",
          },
          {
            id: "b",
            label: "Not guilty — medical errors are never criminal",
            correct: false,
            feedback:
              "Adomako itself shows medical error can be criminal where the conduct is gross enough.",
          },
        ],
        explanation:
          "Adomako is unusual because it puts the moral judgement (was it 'gross'?) squarely with the jury — exam essays often critique this.",
      },
    ],
  },
  {
    id: "brief-6-the-binge",
    title: "Brief 6 — The Binge",
    term: 1,
    scenario:
      "Your client, Gareth, drank heavily and took recreational drugs over two days. With no memory of doing so, he assaulted a stranger in a pub, causing actual bodily harm. He pleads that his intoxication meant he could not form the necessary mens rea.",
    scene: { emoji: "🍷", palette: "linear-gradient(135deg,#2a1a2a,#5a2a3a)" },
    caseIds: ["dpp-v-majewski", "r-v-cunningham"],
    steps: [
      {
        kind: "issue",
        prompt: "What is the live legal issue?",
        choices: [
          {
            id: "a",
            label:
              "Whether voluntary intoxication can negate the mens rea of s.47 ABH",
            correct: true,
            feedback:
              "Right. The question is whether s.47 is a 'specific' or 'basic' intent offence.",
          },
          {
            id: "b",
            label: "Whether Gareth caused the harm",
            correct: false,
            feedback: "Causation is straightforward. The contested issue is mens rea.",
          },
        ],
        explanation:
          "Specific intent crimes can be reduced by voluntary intoxication; basic intent crimes cannot. The classification of the offence decides the case.",
      },
      {
        kind: "authorities",
        prompt: "Select the authorities you need.",
        authorityPool: ["dpp-v-majewski", "r-v-cunningham", "r-v-mohan", "r-v-woollin"],
        correctAuthorities: ["dpp-v-majewski", "r-v-cunningham"],
        explanation:
          "Majewski sets the basic/specific intent rule. Cunningham defines recklessness — the basic-intent mens rea for s.47.",
      },
      {
        kind: "application",
        prompt: "Applying Majewski, what is the result?",
        choices: [
          {
            id: "a",
            label:
              "Conviction — s.47 is a basic intent offence (Cunningham recklessness); voluntary intoxication is itself the reckless course of conduct",
            correct: true,
            feedback: "Correct.",
          },
          {
            id: "b",
            label:
              "Acquittal — he was too drunk to form any intent at all",
            correct: false,
            feedback:
              "Majewski blocks that argument for basic intent offences as a matter of policy.",
          },
        ],
        explanation:
          "Remember the policy reasoning: society would not tolerate intoxication as an automatic escape route from basic-intent crimes.",
      },
    ],
  },
  {
    id: "brief-7-the-slow-burn",
    title: "Brief 7 — The Slow Burn",
    term: 1,
    scenario:
      "Your client, Hana, suffered ten years of physical and emotional abuse from her husband. One evening he threatened to kill her again, then went to bed. She lay awake for two hours, then poured petrol over the bedroom and set it alight. He died. She is charged with murder; you are advising on partial defences.",
    scene: { emoji: "🪔", palette: "linear-gradient(135deg,#2a1a1a,#5a2a2a)" },
    caseIds: ["r-v-ahluwalia", "r-v-byrne"],
    steps: [
      {
        kind: "issue",
        prompt:
          "Which partial defence is most clearly engaged on these facts?",
        choices: [
          {
            id: "a",
            label:
              "Loss of control — a qualifying trigger (fear of serious violence; gravely provoking words/conduct) is present, despite the delay",
            correct: true,
            feedback:
              "Correct — Ahluwalia confirms that delay does not automatically defeat the defence, though it is evidentially relevant.",
          },
          {
            id: "b",
            label:
              "Self-defence — she used force to defend herself",
            correct: false,
            feedback:
              "Self-defence requires the threat to be imminent. He was asleep — that fails.",
          },
        ],
        explanation:
          "Loss of control under the 2009 Act has a qualifying trigger gateway; Ahluwalia (decided under the old 'provocation' regime) is still the leading authority on the 'slow-burn' point.",
      },
      {
        kind: "authorities",
        prompt: "Which two cases should you cite?",
        authorityPool: ["r-v-ahluwalia", "r-v-byrne", "r-v-martin", "r-v-vickers"],
        correctAuthorities: ["r-v-ahluwalia", "r-v-byrne"],
        explanation:
          "Ahluwalia for the slow-burn loss-of-control reasoning. Byrne in the alternative for diminished responsibility (battered-woman psychiatric evidence). Martin (self-defence) and Vickers (murder mens rea) are off-point for the partial defence.",
      },
      {
        kind: "application",
        prompt:
          "If loss of control fails because the jury thinks the delay shows considered action, what is the safety-net plea?",
        choices: [
          {
            id: "a",
            label:
              "Diminished responsibility — Byrne abnormality of mental functioning, supported by psychiatric evidence of battered-person syndrome",
            correct: true,
            feedback:
              "Correct. The two partial defences run in parallel; Ahluwalia herself succeeded on DR at retrial.",
          },
          {
            id: "b",
            label:
              "Automatism — she had no voluntary control",
            correct: false,
            feedback:
              "Automatism requires a total destruction of voluntary control. Pouring petrol and lighting it is purposive conduct.",
          },
        ],
        explanation:
          "In abuse cases, always plead loss of control AND diminished responsibility in the alternative. Ahluwalia is the leading authority for both points.",
      },
    ],
  },
  {
    id: "brief-8-the-rope-and-tape",
    title: "Brief 8 — The Rope and Tape",
    term: 1,
    scenario:
      "Your client, Ian, was discovered hiding in a boys' lavatory at a secondary school. In his rucksack: rope, masking tape, a hunting knife and a list of children's names. No child had entered the lavatory. He is charged with attempted false imprisonment of a child.",
    scene: { emoji: "🎒", palette: "linear-gradient(135deg,#1a2a2a,#2a4a4a)" },
    caseIds: ["r-v-geddes", "r-v-gullefer"],
    steps: [
      {
        kind: "issue",
        prompt:
          "What is the test for the actus reus of attempt under s.1 Criminal Attempts Act 1981?",
        choices: [
          {
            id: "a",
            label: "An act that is 'more than merely preparatory' to the offence",
            correct: true,
            feedback: "Correct — the statutory wording.",
          },
          {
            id: "b",
            label: "Any act done with intent to commit the offence",
            correct: false,
            feedback:
              "Intent alone is not enough — there must be a sufficient act.",
          },
        ],
        explanation:
          "s.1(1) Criminal Attempts Act 1981: an act which is 'more than merely preparatory'. The test is doing/preparing-to-do.",
      },
      {
        kind: "authorities",
        prompt:
          "Which case is closest on its facts, and which sets out the underlying test?",
        authorityPool: ["r-v-geddes", "r-v-gullefer", "r-v-miller", "r-v-mohan"],
        correctAuthorities: ["r-v-geddes", "r-v-gullefer"],
        explanation:
          "Geddes is directly on point — the school lavatory case. Gullefer is the leading test case ('embarked on the crime proper'). Mohan supplies the intent definition if needed; Miller is omissions, not attempts.",
      },
      {
        kind: "application",
        prompt: "Applying Geddes, what is the likely outcome on the attempt charge?",
        choices: [
          {
            id: "a",
            label:
              "Acquittal of attempt — Ian had not yet engaged with any victim; he was still in the preparation phase",
            correct: true,
            feedback:
              "Correct application of Geddes. He may be liable for other offences (possession with intent, going equipped) but not the attempt itself.",
          },
          {
            id: "b",
            label:
              "Conviction of attempt — possession of the equipment plus intent is enough",
            correct: false,
            feedback:
              "That collapses the more-than-merely-preparatory line. Geddes specifically rejected it on near-identical facts.",
          },
        ],
        explanation:
          "Geddes is the classic illustration of how restrictive the attempt threshold is — even sinister preparation can fall short of the actus reus.",
      },
    ],
  },
];

export const BRIEFS_BY_ID: Record<string, Brief> = Object.fromEntries(
  BRIEFS.map((b) => [b.id, b]),
);
