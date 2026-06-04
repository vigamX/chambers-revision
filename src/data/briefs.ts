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
  {
    id: "brief-9-the-vintage-watch",
    title: "Brief 9 — The Vintage Watch",
    term: 1,
    scenario:
      "Your client, Jonah, befriended his elderly neighbour Mrs Pell and convinced her to 'give' him her late husband's Patek Philippe watch (worth £40,000). Mrs Pell has early-stage dementia. Two days later Jonah sold the watch and pocketed the money. He insists 'she gave it to me — there's no theft'.",
    scene: { emoji: "⌚", palette: "linear-gradient(135deg,#1a2a2a,#2a4a3a)" },
    caseIds: ["r-v-hinks", "r-v-gomez", "ivey-v-genting"],
    steps: [
      {
        kind: "issue",
        prompt: "Does Mrs Pell's 'gift' prevent the conduct from being appropriation?",
        choices: [
          {
            id: "a",
            label:
              "No — appropriation can occur even where the owner makes a valid, indefeasible gift",
            correct: true,
            feedback:
              "Correct. Hinks confirms it: the actus reus is satisfied; what makes it theft is the dishonesty.",
          },
          {
            id: "b",
            label:
              "Yes — once title has passed, there is nothing left to steal",
            correct: false,
            feedback:
              "Hinks rejected exactly that argument: even a perfectly valid gift can be appropriation.",
          },
          {
            id: "c",
            label:
              "Yes — but only if Jonah used deception to procure the gift",
            correct: false,
            feedback:
              "Gomez established that consent procured by deception is appropriation. Hinks went further: consent even without deception is appropriation.",
          },
        ],
        explanation:
          "Appropriation under s.3 is purely objective — any assumption of any right of an owner. The vehicle of theft is then the mental element: dishonesty.",
      },
      {
        kind: "authorities",
        prompt: "Cite the authorities for (i) appropriation and (ii) dishonesty.",
        authorityPool: ["r-v-hinks", "r-v-gomez", "ivey-v-genting", "r-v-ghosh", "oxford-v-moss"],
        correctAuthorities: ["r-v-hinks", "ivey-v-genting"],
        explanation:
          "Hinks is the leading authority on gift-appropriation. Ivey is the current dishonesty test. Gomez is also relevant on appropriation but Hinks is the more pointed authority. Ghosh has been overruled. Oxford v Moss is about property, not in issue here.",
      },
      {
        kind: "application",
        prompt: "Applying Ivey, is Jonah dishonest?",
        choices: [
          {
            id: "a",
            label:
              "Likely yes — by the standards of ordinary decent people, exploiting a dementia-affected neighbour to acquire a £40,000 watch is dishonest, even if she 'agreed'",
            correct: true,
            feedback:
              "Correct application of Ivey: the test is purely objective on dishonesty, having ascertained the defendant's genuine beliefs as to the facts.",
          },
          {
            id: "b",
            label:
              "No — he genuinely believes she gave it freely, so the Ghosh subjective limb fails",
            correct: false,
            feedback:
              "Ghosh's subjective second limb was abolished by Ivey. Personal belief that one's conduct is honest is irrelevant.",
          },
        ],
        explanation:
          "Ivey v Genting Casinos is the modern test: (i) what did D genuinely believe as to the facts; (ii) was that conduct dishonest by ordinary standards? Subjective dishonesty does not need to be shown.",
      },
    ],
  },
  {
    id: "brief-10-the-bedroom-window",
    title: "Brief 10 — The Bedroom Window",
    term: 1,
    scenario:
      "Your client, Kit, set up a ladder against an upstairs window of a house, intending to steal jewellery he'd seen through the window. He climbed up and put his upper body — head, shoulders, one arm — through the open sash. As he reached for a jewellery box, the homeowner heard a noise and Kit fled before taking anything. He is charged with burglary under s.9(1)(a).",
    scene: { emoji: "🪟", palette: "linear-gradient(135deg,#1a1a2a,#2a2a3a)" },
    caseIds: ["r-v-collins", "r-v-brown-1985", "r-v-ryan"],
    steps: [
      {
        kind: "issue",
        prompt: "What is the contested element on these facts?",
        choices: [
          {
            id: "a",
            label:
              "Whether Kit's partial entry counts as 'entry' for the purposes of s.9",
            correct: true,
            feedback:
              "Correct. He never fully crossed the threshold — but he entered enough to commit the burglary under the modern authorities.",
          },
          {
            id: "b",
            label:
              "Whether Kit was a trespasser, given that the window was open",
            correct: false,
            feedback:
              "An open window does not amount to permission. Trespass is clear; entry is the live issue.",
          },
          {
            id: "c",
            label:
              "Whether intention to steal nothing in particular suffices",
            correct: false,
            feedback:
              "Conditional intent (to steal whatever's worth taking) is fine for s.9(1)(a). The live issue is entry.",
          },
        ],
        explanation:
          "s.9(1)(a) requires (i) entry (ii) into a building or part of (iii) as a trespasser (iv) with intent to commit one of the ulterior offences (here, theft).",
      },
      {
        kind: "authorities",
        prompt: "Which authorities establish that Kit's partial entry suffices?",
        authorityPool: ["r-v-collins", "r-v-brown-1985", "r-v-ryan", "r-v-walkington"],
        correctAuthorities: ["r-v-brown-1985", "r-v-ryan"],
        explanation:
          "Brown (1985): 'effective' entry is enough. Ryan: even ineffective partial entry suffices. Collins is about trespass and consent at the window, not on point here. Walkington is about 'part of a building' (counter areas) — not the entry issue.",
      },
      {
        kind: "application",
        prompt: "Applying these authorities, what is the verdict?",
        choices: [
          {
            id: "a",
            label:
              "Conviction under s.9(1)(a) — substantial partial entry as a trespasser, with intent to steal, before any escape",
            correct: true,
            feedback:
              "Correct. The actus reus is complete on entry with the requisite intent; s.9(1)(a) does not require the theft itself to occur.",
          },
          {
            id: "b",
            label:
              "Acquittal — he never took the jewellery, so the burglary is incomplete",
            correct: false,
            feedback:
              "s.9(1)(a) is committed at the moment of entry with intent; the ulterior offence does not have to be carried out.",
          },
        ],
        explanation:
          "Distinguish s.9(1)(a) (entry with intent — complete on entry) from s.9(1)(b) (entry then commission of theft/GBH — requires the ulterior offence). On these facts s.9(1)(a) is made out.",
      },
    ],
  },
  {
    id: "brief-11-the-snatched-phone",
    title: "Brief 11 — The Snatched Phone",
    term: 1,
    scenario:
      "Your client, Leo, ran past a tourist on the pavement and yanked her smartphone from her hand. She felt a sharp tug on her fingers as the phone came loose; he ran off. She suffered no injury. Leo is charged with robbery under s.8 Theft Act 1968.",
    scene: { emoji: "📱", palette: "linear-gradient(135deg,#1a1a2a,#2a2a3a)" },
    caseIds: ["r-v-dawson-james", "corcoran-v-anderton", "r-v-hale"],
    steps: [
      {
        kind: "issue",
        prompt: "Defence argues the tug was 'too slight' to be 'force'. What is the legal position?",
        choices: [
          {
            id: "a",
            label:
              "Even very minor force on the person can be sufficient; the jury decides as a question of fact",
            correct: true,
            feedback:
              "Correct. Dawson & James settled this — there is no minimum threshold of force.",
          },
          {
            id: "b",
            label:
              "Force must be substantial — sufficient to cause at least some pain",
            correct: false,
            feedback:
              "No — Dawson & James squarely rejected any 'substantial' threshold.",
          },
          {
            id: "c",
            label:
              "Force on the property, rather than the person, cannot found robbery",
            correct: false,
            feedback:
              "True as far as it goes, but on these facts the tug acted on her hand, not just the phone. Corcoran v Anderton is in point.",
          },
        ],
        explanation:
          "Robbery requires force ON THE PERSON or putting them in fear. Force on the property alone (e.g. snatching from a counter) would not suffice — but force transmitted through the property to the victim's hand does.",
      },
      {
        kind: "authorities",
        prompt: "Pick the authorities you would cite.",
        authorityPool: ["r-v-dawson-james", "corcoran-v-anderton", "r-v-hale", "r-v-gomez"],
        correctAuthorities: ["r-v-dawson-james", "corcoran-v-anderton"],
        explanation:
          "Dawson & James for the minimal-force rule. Corcoran v Anderton for the proposition that the robbery is complete the moment force-with-appropriation occurs — even if the property is not carried away. Hale (continuing appropriation) is not on point here. Gomez is general theft, not robbery-specific.",
      },
      {
        kind: "application",
        prompt: "Outcome?",
        choices: [
          {
            id: "a",
            label:
              "Conviction for robbery — minor force used on the person at the moment of appropriation",
            correct: true,
            feedback: "Correct.",
          },
          {
            id: "b",
            label:
              "Conviction only for theft — the force was de minimis",
            correct: false,
            feedback:
              "Dawson & James prevents the de minimis argument here.",
          },
        ],
        explanation:
          "Robbery is theft + force used immediately before or at the time of stealing, in order to steal. All elements present.",
      },
    ],
  },
  {
    id: "brief-12-the-pavement-stunt",
    title: "Brief 12 — The Pavement Stunt",
    term: 1,
    scenario:
      "Your client, Maya, threw a milkshake at her friend Nadia outside a pub for a TikTok prank — Nadia stumbled backward, fell into the road, and was struck by a car and killed. Maya is charged with unlawful act manslaughter.",
    scene: { emoji: "🥤", palette: "linear-gradient(135deg,#1a2a2a,#2a3a3a)" },
    caseIds: ["r-v-church", "r-v-larkin", "r-v-mitchell"],
    steps: [
      {
        kind: "issue",
        prompt: "What is the test for 'dangerousness' in UAM?",
        choices: [
          {
            id: "a",
            label:
              "Whether all sober and reasonable people would inevitably recognise that the act creates a risk of SOME harm — not necessarily serious harm",
            correct: true,
            feedback:
              "Correct. Church gives the standard, applied objectively.",
          },
          {
            id: "b",
            label:
              "Whether Maya herself foresaw a risk of harm",
            correct: false,
            feedback:
              "UAM is objective; D's own foresight is irrelevant.",
          },
          {
            id: "c",
            label:
              "Whether the act was likely to cause death",
            correct: false,
            feedback:
              "Too narrow — Church only requires risk of 'some harm'.",
          },
        ],
        explanation:
          "Church (1965) is the objective dangerousness test. The bar is low — risk of 'some harm', not serious harm.",
      },
      {
        kind: "authorities",
        prompt: "Which authorities are most directly in point?",
        authorityPool: ["r-v-church", "r-v-larkin", "r-v-mitchell", "r-v-lowe", "r-v-adomako"],
        correctAuthorities: ["r-v-church", "r-v-larkin", "r-v-mitchell"],
        explanation:
          "Church for dangerousness. Larkin confirms that the act needed only be technically unlawful (here a battery). Mitchell shows the act need not be aimed at the eventual victim (the milkshake hit Nadia but the death involved the car). Lowe is wrong limb (omission cannot found UAM). Adomako is GNM not UAM.",
      },
      {
        kind: "application",
        prompt: "Verdict on UAM?",
        choices: [
          {
            id: "a",
            label:
              "Guilty — unlawful act (battery), objectively dangerous, caused death via foreseeable falling-into-road",
            correct: true,
            feedback:
              "Correct. All four limbs (act / unlawful / dangerous / caused death) made out.",
          },
          {
            id: "b",
            label:
              "Not guilty — death by collision was a novus actus interveniens",
            correct: false,
            feedback:
              "Mitchell-style transmitted causation: a foreseeable consequence of being pushed backward on a pavement is to fall into the road. The driver's act was not 'free, deliberate and informed' enough to break the chain.",
          },
        ],
        explanation:
          "Church + Larkin + Mitchell together establish that even a prank battery can amount to UAM where death results through a foreseeable chain.",
      },
    ],
  },
  {
    id: "brief-13-the-sleepwalker",
    title: "Brief 13 — The Sleepwalker",
    term: 1,
    scenario:
      "Your client, Owen, is a Type 1 diabetic who took his insulin one evening but forgot to eat. While walking home he became disoriented and assaulted a passerby, causing ABH. He has no memory of the event. In a separate incident a week later, Owen — who has also been diagnosed with a sleep disorder — attacked his partner while asleep in bed. The CPS asks for advice on the available defences for each incident.",
    scene: { emoji: "🌙", palette: "linear-gradient(135deg,#1a1a3a,#2a2a4a)" },
    caseIds: ["r-v-quick", "r-v-hennessy", "r-v-burgess", "r-v-sullivan"],
    steps: [
      {
        kind: "issue",
        prompt: "Insanity or automatism — what's the dividing line?",
        choices: [
          {
            id: "a",
            label:
              "Whether the cause of the loss of control is INTERNAL (insanity) or EXTERNAL (automatism)",
            correct: true,
            feedback:
              "Correct. This is the internal/external distinction that Sullivan, Quick, Hennessy and Burgess together establish.",
          },
          {
            id: "b",
            label:
              "Whether the defendant knew right from wrong",
            correct: false,
            feedback:
              "That is one branch of the M'Naghten test for insanity — but not the internal/external division.",
          },
        ],
        explanation:
          "Disease of the mind = internal cause = insanity (verdict: not guilty by reason of insanity, often a hospital order). External cause = automatism (verdict: complete acquittal).",
      },
      {
        kind: "application",
        prompt:
          "For the FIRST incident (low blood sugar after insulin + missed meal), which defence applies?",
        choices: [
          {
            id: "a",
            label:
              "Automatism — Quick: insulin is an external factor; hypoglycaemia is not a disease of the mind",
            correct: true,
            feedback:
              "Correct. The insulin is the trigger; without it the diabetes would have caused HYPERglycaemia (Hennessy = insanity), not hypoglycaemia.",
          },
          {
            id: "b",
            label:
              "Insanity — diabetes is the underlying condition, so it is an internal cause",
            correct: false,
            feedback:
              "That would be Hennessy (untreated diabetes). Quick is different: the insulin causes the hypoglycaemic episode, making it external.",
          },
        ],
        explanation:
          "Quick (insulin → hypoglycaemia → external) vs Hennessy (no insulin → hyperglycaemia → internal). The smallest factual differences flip the defence entirely.",
      },
      {
        kind: "application",
        prompt:
          "For the SECOND incident (sleepwalking due to a sleep disorder), which defence applies?",
        choices: [
          {
            id: "a",
            label:
              "Insanity — Burgess: sleepwalking caused by an internal sleep disorder is a disease of the mind",
            correct: true,
            feedback:
              "Correct. Sleepwalking from an internal cause = insanity, however counterintuitive.",
          },
          {
            id: "b",
            label:
              "Automatism — Owen was unconscious so had no control",
            correct: false,
            feedback:
              "Loss of control without external cause is insanity, not automatism. Burgess is directly on point.",
          },
        ],
        explanation:
          "Burgess (1991) is the textbook authority for the counterintuitive proposition that sleepwalking-from-internal-cause is legally 'insanity'.",
      },
    ],
  },
  {
    id: "brief-14-the-late-licence",
    title: "Brief 14 — The Late Licence",
    term: 1,
    scenario:
      "Your client, Mr Hassan, runs a small off-licence. His staff sold a bottle of wine to a 16-year-old who used a convincing fake driving licence. Mr Hassan had a documented age-verification policy, posted signs, and trained his staff. He is charged under the relevant Licensing Act offence, which Parliament has worded without any mens rea requirement.",
    scene: { emoji: "🍷", palette: "linear-gradient(135deg,#2a1a2a,#4a2a3a)" },
    caseIds: ["harrow-v-shah", "gammon-v-ag-hk", "sweet-v-parsley"],
    steps: [
      {
        kind: "issue",
        prompt: "What is the live issue?",
        choices: [
          {
            id: "a",
            label:
              "Whether the offence is one of strict liability — and if so, whether due diligence is a defence",
            correct: true,
            feedback:
              "Correct. The statutory silence on mens rea raises both questions.",
          },
          {
            id: "b",
            label:
              "Whether Mr Hassan was personally aware the sale was unlawful",
            correct: false,
            feedback:
              "If it's strict liability, his awareness is irrelevant. The first question is whether mens rea is required at all.",
          },
        ],
        explanation:
          "Sweet v Parsley sets the presumption that mens rea is required; Gammon then sets out when that presumption is rebutted.",
      },
      {
        kind: "authorities",
        prompt: "Select the leading authorities.",
        authorityPool: [
          "sweet-v-parsley",
          "gammon-v-ag-hk",
          "harrow-v-shah",
          "callow-v-tillstone",
          "r-v-cunningham",
        ],
        correctAuthorities: ["sweet-v-parsley", "gammon-v-ag-hk", "harrow-v-shah"],
        explanation:
          "Sweet v Parsley (presumption of mens rea). Gammon (when the presumption is rebutted). Harrow v Shah (directly on point: shopkeeper selling lottery tickets to under-age customers — strict liability applies even where reasonable steps taken). Callow v Tillstone could be added (no due diligence defence). Cunningham is the wrong test.",
      },
      {
        kind: "application",
        prompt: "Outcome?",
        choices: [
          {
            id: "a",
            label:
              "Conviction — Gammon four-stage test indicates strict liability is appropriate; Harrow v Shah confirms reasonable steps are no defence",
            correct: true,
            feedback:
              "Correct. Selling alcohol to under-18s is precisely the regulatory area where strict liability promotes vigilance.",
          },
          {
            id: "b",
            label:
              "Acquittal — Mr Hassan exercised all reasonable diligence and is not at fault",
            correct: false,
            feedback:
              "Callow v Tillstone and Harrow v Shah both reject 'reasonable diligence' as a defence to strict liability offences.",
          },
        ],
        explanation:
          "Strict liability offences in the regulatory sphere routinely accept no due diligence defence. The policy is harsh but consistent.",
      },
    ],
  },
  {
    id: "brief-15-the-gunmans-errand",
    title: "Brief 15 — The Gunman's Errand",
    term: 1,
    scenario:
      "Your client, Petra, is a courier. Three weeks ago she lost a high-value parcel and the man who sent it — a known violent criminal — held her at gunpoint and threatened to kill her unless she made deliveries 'no questions asked'. She has since handed over several packages she suspected contained drugs. Now the same man has ordered her to murder a rival dealer. She refuses but is in police custody having been arrested for the drug deliveries, and is being charged with conspiracy to murder.",
    scene: { emoji: "🔫", palette: "linear-gradient(135deg,#1a1a1a,#3a1a2a)" },
    caseIds: ["r-v-hasan", "r-v-howe", "r-v-gotts", "r-v-graham"],
    steps: [
      {
        kind: "issue",
        prompt:
          "On the drug deliveries (basic intent offences), can Petra plead duress?",
        choices: [
          {
            id: "a",
            label:
              "Possibly not — under Hasan, voluntarily associating with violent criminals can bar the defence",
            correct: true,
            feedback:
              "Correct — but the bar applies only where she knew or ought to have known she might be subjected to compulsion. The strict bar in Hasan is the harder hurdle here than the Graham test.",
          },
          {
            id: "b",
            label:
              "Yes — automatically, because she was threatened with death",
            correct: false,
            feedback:
              "Threats of death are necessary but not sufficient. Hasan adds the voluntary-association exclusion.",
          },
        ],
        explanation:
          "Hasan (2005) introduced a strict voluntary-association rule. Petra's courier role for a known violent criminal makes this contested.",
      },
      {
        kind: "issue",
        prompt: "On the order to kill — can duress be a defence to murder?",
        choices: [
          {
            id: "a",
            label:
              "No — Howe confirms duress is no defence to murder, whether principal or accessory",
            correct: true,
            feedback:
              "Correct. Howe (1987) is the leading authority.",
          },
          {
            id: "b",
            label:
              "Yes — the threat to her own life is proportionate to taking the rival's life",
            correct: false,
            feedback:
              "English law expressly rejects this proportionality argument for murder.",
          },
        ],
        explanation:
          "Howe + Gotts together: duress is no defence to murder OR attempted murder.",
      },
      {
        kind: "authorities",
        prompt: "Pick the authorities you'd cite.",
        authorityPool: ["r-v-hasan", "r-v-howe", "r-v-gotts", "r-v-graham", "r-v-bowen"],
        correctAuthorities: ["r-v-hasan", "r-v-howe", "r-v-graham"],
        explanation:
          "Hasan for the modern law and the voluntary-association exclusion. Howe (no defence to murder). Graham gives the two-stage test if duress IS available. Gotts is for attempted murder specifically (less central here). Bowen on relevant characteristics is a sub-point.",
      },
    ],
  },
  {
    id: "brief-16-the-mistaken-attacker",
    title: "Brief 16 — The Mistaken Attacker",
    term: 1,
    scenario:
      "Your client, Quentin, drank ten pints of lager. Walking home, he saw a man (in fact a community-support officer) running toward him. Quentin, genuinely but mistakenly believing he was about to be mugged, struck the officer in the face with a glass bottle, causing serious injury. He is charged under s.20 OAPA 1861.",
    scene: { emoji: "🍻", palette: "linear-gradient(135deg,#1a1a2a,#3a2a2a)" },
    caseIds: ["r-v-williams-gladstone", "r-v-hatton", "dpp-v-majewski"],
    steps: [
      {
        kind: "issue",
        prompt:
          "Does Quentin's honest but mistaken belief that he was about to be mugged give him a self-defence plea?",
        choices: [
          {
            id: "a",
            label:
              "Ordinarily yes (Williams Gladstone), but a drunken mistake is excluded (Hatton/Majewski)",
            correct: true,
            feedback:
              "Correct. Williams Gladstone says honest belief is enough — but Hatton/Majewski carve out drunken mistakes specifically.",
          },
          {
            id: "b",
            label:
              "Yes — honest belief is always enough, no matter the source",
            correct: false,
            feedback:
              "Williams Gladstone is the starting point but Hatton confined it: a drunken mistake gets no benefit.",
          },
          {
            id: "c",
            label:
              "No — the belief must be both honest and reasonable",
            correct: false,
            feedback:
              "Williams Gladstone explicitly rejects the reasonableness requirement.",
          },
        ],
        explanation:
          "Williams Gladstone (1983) = honest mistake suffices. But Hatton (2005) said this does not apply to mistakes that flow from voluntary intoxication, even for specific intent offences.",
      },
      {
        kind: "authorities",
        prompt: "Pick the authorities.",
        authorityPool: [
          "r-v-williams-gladstone",
          "r-v-hatton",
          "dpp-v-majewski",
          "r-v-martin",
          "r-v-bird",
        ],
        correctAuthorities: ["r-v-williams-gladstone", "r-v-hatton", "dpp-v-majewski"],
        explanation:
          "Williams Gladstone for the general rule. Hatton for the drunken-mistake exception. Majewski because s.20 is a basic intent offence (intoxication is no defence at all). Martin (Anthony) is on the reasonableness of force, not the mistake. Bird is the no-duty-to-retreat point.",
      },
      {
        kind: "application",
        prompt: "Verdict?",
        choices: [
          {
            id: "a",
            label:
              "Conviction under s.20 — self-defence fails because the mistake flowed from voluntary intoxication; Majewski further blocks intoxication as a defence to a basic-intent offence",
            correct: true,
            feedback:
              "Correct on both grounds — either route gets to conviction.",
          },
          {
            id: "b",
            label:
              "Acquittal — honest belief in attack is enough under Williams Gladstone",
            correct: false,
            feedback:
              "Hatton confines Williams Gladstone where the mistake is drunken.",
          },
        ],
        explanation:
          "Two doctrinal hurdles for Quentin: (i) the self-defence plea fails because the mistake was drunken (Hatton), and (ii) intoxication is no defence to s.20 anyway (Majewski).",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // Term 2 — Tort briefs (cases from Ch 21 negligence + Ch 22 occupiers')
  // ─────────────────────────────────────────────────────────────────────

  {
    id: "brief-tort-1-the-unseen-patient",
    title: "Brief 1 — The Unseen Patient",
    term: 2,
    scenario:
      "Mrs Hadley arrives at A&E at 3am vomiting violently. The triage nurse bleeps Dr Mehta, the on-call casualty officer, who tells her over the phone to send Mrs Hadley home and 'see her GP in the morning'. He never examines her. Mrs Hadley dies five hours later. Post-mortem confirms arsenic poisoning at a dose that was lethal from the moment she ingested it; no antidote, fluid resuscitation, or transfer to ITU would have saved her. Her widower sues the hospital trust in negligence.",
    scene: { emoji: "🏥", palette: "linear-gradient(135deg,#1a2a3a,#3a4a5a)" },
    caseIds: ["kent-v-griffiths", "bolam-v-friern-barnet", "barnett-v-chelsea"],
    steps: [
      {
        kind: "issue",
        prompt: "Duty and breach both look established. What is the live legal issue?",
        choices: [
          {
            id: "a",
            label: "Factual causation — would Mrs Hadley have died anyway?",
            correct: true,
            feedback:
              "Correct. Once the post-mortem says no treatment would have saved her, the negligence claim stands or falls on causation, not on whether the doctor was careless.",
          },
          {
            id: "b",
            label: "Whether an A&E doctor owes a duty of care",
            correct: false,
            feedback:
              "Settled by Kent v Griffiths — once the NHS accepts the patient, a duty arises. Not the live issue here.",
          },
          {
            id: "c",
            label: "Whether the doctor fell below the Bolam standard",
            correct: false,
            feedback:
              "Refusing to examine a vomiting patient is clearly outside any responsible body of opinion. Breach is not really in dispute.",
          },
        ],
        explanation:
          "Duty (Kent) and breach (Bolam) are both straightforward. The case turns on whether the doctor's failure caused the death — the 'but for' test from Barnett.",
      },
      {
        kind: "authorities",
        prompt: "Select the authorities you would cite in your skeleton argument.",
        authorityPool: [
          "kent-v-griffiths",
          "bolam-v-friern-barnet",
          "barnett-v-chelsea",
          "hill-v-cc-west-yorkshire",
          "bolton-v-stone",
          "wagon-mound-no-1",
        ],
        correctAuthorities: [
          "kent-v-griffiths",
          "bolam-v-friern-barnet",
          "barnett-v-chelsea",
        ],
        explanation:
          "Kent v Griffiths supplies the duty (NHS owes a duty once it accepts the call). Bolam fixes the standard of care for the doctor. Barnett delivers the killer point — factual causation fails on identical facts.",
      },
      {
        kind: "application",
        prompt: "Applying Barnett v Chelsea, what is the likely outcome?",
        choices: [
          {
            id: "a",
            label:
              "Claim fails — duty and breach are made out, but 'but for' Dr Mehta's negligence the death would still have occurred",
            correct: true,
            feedback:
              "Correct. The widower wins on duty and breach but the chain breaks at causation, exactly as in Barnett.",
          },
          {
            id: "b",
            label: "Claim succeeds — the doctor's negligence was a contributory factor",
            correct: false,
            feedback:
              "There is no contribution if the death would have happened anyway. The 'but for' test is binary on these facts.",
          },
          {
            id: "c",
            label: "Claim succeeds — res ipsa loquitur",
            correct: false,
            feedback:
              "Res ipsa might help prove breach, but it cannot bridge the causation gap when the cause of death is known and unavoidable.",
          },
        ],
        explanation:
          "A perfect storm of negligent practice still cannot found liability without causation. Barnett is the doctrinal trap: don't be dazzled by obvious carelessness.",
      },
    ],
  },
  {
    id: "brief-tort-2-the-cricket-boundary",
    title: "Brief 2 — The Cricket Boundary",
    term: 2,
    scenario:
      "Your client, the Wenlock Cricket Club, has played on the same ground since 1948. The boundary is enclosed by a 17-foot fence, raised twice over the decades after complaints. In 76 years, balls have cleared the fence on eight occasions; nobody has ever been hit. Last Saturday, a six was struck from the middle stump and the ball cleared the fence, striking Mrs Patel on the head as she walked her dog along Beech Road. She has serious head injuries and is suing the club in negligence.",
    scene: { emoji: "🏏", palette: "linear-gradient(135deg,#1a3a1a,#4a6a3a)" },
    caseIds: ["bolton-v-stone", "latimer-v-aec"],
    steps: [
      {
        kind: "issue",
        prompt: "Duty is conceded. What is the central question?",
        choices: [
          {
            id: "a",
            label: "Whether the club breached the standard of the reasonable occupier given the magnitude of the risk",
            correct: true,
            feedback:
              "Correct. The fight is over breach: did a small probability of serious harm require more than a 17-foot fence?",
          },
          {
            id: "b",
            label: "Whether the type of harm was too remote",
            correct: false,
            feedback:
              "Head injury from a cricket ball is the obvious type of harm — remoteness is not a live point here.",
          },
          {
            id: "c",
            label: "Whether Mrs Patel is a lawful visitor to the club",
            correct: false,
            feedback:
              "She is on the public highway, not on the cricket ground. Occupiers' Liability is not engaged.",
          },
        ],
        explanation:
          "Breach in negligence weighs the probability of harm against the cost and practicality of further precautions — the classic Bolton v Stone calculus.",
      },
      {
        kind: "authorities",
        prompt: "Select the authorities you would put before the judge.",
        authorityPool: [
          "bolton-v-stone",
          "latimer-v-aec",
          "nettleship-v-weston",
          "bolam-v-friern-barnet",
          "wagon-mound-no-1",
          "wheat-v-lacon",
        ],
        correctAuthorities: ["bolton-v-stone", "latimer-v-aec"],
        explanation:
          "Bolton v Stone is on near-identical facts: small probability of serious harm did not require closure of the ground. Latimer v AEC confirms that reasonable precautions — not perfection — satisfy the standard. Bolam is for professionals; Nettleship is driving; Wagon Mound is remoteness; Wheat is occupiers' control.",
      },
      {
        kind: "application",
        prompt: "Applying Bolton v Stone and Latimer v AEC, what should you advise?",
        choices: [
          {
            id: "a",
            label:
              "Defend — the risk was small, serious injury foreseeable but improbable, and the 17-foot fence was a reasonable precaution",
            correct: true,
            feedback:
              "Correct. Reasonable care is not the elimination of all risk. The club is not an insurer of every passer-by.",
          },
          {
            id: "b",
            label: "Settle — strict liability applies to dangerous activities",
            correct: false,
            feedback:
              "Strict liability for escapes is Rylands v Fletcher (Ch 23) and does not catch ordinary cricket. Negligence requires breach.",
          },
          {
            id: "c",
            label: "Settle — the club is the occupier and Mrs Patel is a visitor",
            correct: false,
            feedback:
              "She is not on the club's premises. Occupiers' Liability does not apply to people on the public highway.",
          },
        ],
        explanation:
          "Bolton v Stone is the textbook 'small risk' case: when the chance of injury is low and reasonable precautions have been taken, there is no breach even though injury was foreseeable.",
      },
    ],
  },
  {
    id: "brief-tort-3-the-midnight-diver",
    title: "Brief 3 — The Midnight Diver",
    term: 2,
    scenario:
      "Your client, the Greenfields College Trust, runs a small open-air swimming pool inside its campus. The pool closes at dusk; the gate is padlocked and four illuminated signs warn 'POOL CLOSED — NO DIVING — SHALLOW END 0.9m'. At 2am Mr Croft (19), a student, climbed the perimeter fence after a party, ran across the deck and dived headfirst into the shallow end. He is now tetraplegic and is suing the Trust under the Occupiers' Liability Act 1984.",
    scene: { emoji: "🌙", palette: "linear-gradient(135deg,#0a1a3a,#2a3a5a)" },
    caseIds: ["ratcliff-v-mcconnell", "tomlinson-v-congleton", "keown-v-coventry"],
    steps: [
      {
        kind: "issue",
        prompt: "Mr Croft was undoubtedly a trespasser. What is the legal question?",
        choices: [
          {
            id: "a",
            label: "Whether the Trust owed Mr Croft any duty under the 1984 Act in respect of an obvious self-inflicted risk",
            correct: true,
            feedback:
              "Correct. The 1984 Act duty arises only on stringent conditions, and turns on whether the risk was the kind against which the occupier was bound to offer protection.",
          },
          {
            id: "b",
            label: "Whether Mr Croft was a 'visitor' under the 1957 Act",
            correct: false,
            feedback:
              "He climbed a fence after closing. He is a trespasser; the 1957 Act does not apply.",
          },
          {
            id: "c",
            label: "Whether the Trust is the occupier",
            correct: false,
            feedback:
              "Trust runs the pool under Wheat v Lacon control — undisputed. The real fight is about the trespasser duty.",
          },
        ],
        explanation:
          "Under s.1(3) of the 1984 Act the occupier must know of the danger, know the trespasser may come into its vicinity, and consider it reasonable to offer protection. Even if those are met, obvious risks willingly accepted typically defeat the duty.",
      },
      {
        kind: "authorities",
        prompt: "Select the authorities you would cite for the defence.",
        authorityPool: [
          "ratcliff-v-mcconnell",
          "tomlinson-v-congleton",
          "keown-v-coventry",
          "glasgow-corp-v-taylor",
          "phipps-v-rochester",
          "donoghue-v-stevenson",
        ],
        correctAuthorities: [
          "ratcliff-v-mcconnell",
          "tomlinson-v-congleton",
          "keown-v-coventry",
        ],
        explanation:
          "Ratcliff v McConnell is on near-identical facts. Tomlinson v Congleton supplies the principle: no duty for obvious risks willingly accepted, especially where harm flows from the claimant's own activity. Keown reinforces that injury from a trespasser's own activity (not the state of premises) defeats the claim. The child-visitor cases and Donoghue are not in point.",
      },
      {
        kind: "application",
        prompt: "Applying these authorities, what is the likely result?",
        choices: [
          {
            id: "a",
            label: "Claim fails — obvious risk, voluntarily accepted by an adult trespasser; no 1984 Act duty",
            correct: true,
            feedback:
              "Correct. Ratcliff defeats this claim. The Trust took reasonable steps (lock, signs); the danger was patent; the harm came from Mr Croft's own activity.",
          },
          {
            id: "b",
            label: "Claim succeeds — pool depth was a hidden danger",
            correct: false,
            feedback:
              "Four illuminated signs and the visible markings make the depth obvious, not hidden.",
          },
          {
            id: "c",
            label: "Claim succeeds — pool is an allurement to students",
            correct: false,
            feedback:
              "Allurement (Glasgow v Taylor) is about children. Mr Croft is 19 and judged as an adult under the 1984 Act.",
          },
        ],
        explanation:
          "The 1984 Act is deliberately narrow. Adult trespassers carry their own risks where dangers are obvious — autonomy and the social cost of fencing off every hazard weigh decisively against liability.",
      },
    ],
  },
];

export const BRIEFS_BY_ID: Record<string, Brief> = Object.fromEntries(
  BRIEFS.map((b) => [b.id, b]),
);
