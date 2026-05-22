import type { LawCase } from "../types";

export const CASES: LawCase[] = [
  {
    id: "r-v-cunningham",
    name: "R v Cunningham",
    year: 1957,
    area: "criminal",
    topics: ["mens-rea"],
    facts:
      "Defendant ripped a gas meter from a wall to steal money; gas leaked into the adjoining house and poisoned a woman.",
    principle:
      "Recklessness means subjective foresight of risk: the defendant must actually foresee the risk and go on to take it.",
    visual: {
      emoji: "🔧",
      scene: "Gas meter torn from a basement wall",
      palette: "linear-gradient(135deg,#3a1c1c,#7a2e2e)",
    },
    importance: 3,
  },
  {
    id: "r-v-mohan",
    name: "R v Mohan",
    year: 1976,
    area: "criminal",
    topics: ["mens-rea", "attempts"],
    facts:
      "Defendant drove at a police officer who signalled him to stop; charged with attempting to cause bodily harm.",
    principle:
      "Direct intention means a decision to bring about the prohibited consequence — aim or purpose.",
    visual: {
      emoji: "🚗",
      scene: "Headlights bearing down on a constable",
      palette: "linear-gradient(135deg,#1a1a3a,#3a3a7a)",
    },
    importance: 3,
  },
  {
    id: "r-v-woollin",
    name: "R v Woollin",
    year: 1999,
    area: "criminal",
    topics: ["mens-rea", "fatal-offences"],
    facts:
      "Defendant threw his three-month-old son across the room in frustration; the child died from head injuries.",
    principle:
      "Oblique intention: jury may find intention where death/GBH was a virtual certainty and the defendant appreciated it.",
    visual: {
      emoji: "👶",
      scene: "A nursery, a thrown bundle, a still cot",
      palette: "linear-gradient(135deg,#2a1a3a,#5a2a6a)",
    },
    importance: 3,
  },
  {
    id: "r-v-white",
    name: "R v White",
    year: 1910,
    area: "criminal",
    topics: ["causation"],
    facts:
      "Defendant poisoned his mother's drink intending to kill her; she died of a heart attack before drinking it.",
    principle:
      "Factual causation — the 'but for' test: but for the defendant's act, would the result have occurred?",
    visual: {
      emoji: "🥃",
      scene: "An untouched glass beside an empty armchair",
      palette: "linear-gradient(135deg,#3a2a1a,#7a5a2a)",
    },
    importance: 3,
  },
  {
    id: "r-v-pagett",
    name: "R v Pagett",
    year: 1983,
    area: "criminal",
    topics: ["causation"],
    facts:
      "Defendant used his pregnant girlfriend as a human shield while shooting at police; police returned fire and killed her.",
    principle:
      "Legal causation: the defendant's act must be a 'significant and operating' cause; reasonable acts of self-defence do not break the chain.",
    visual: {
      emoji: "🛡️",
      scene: "A muzzle flash in a stairwell, two shadows",
      palette: "linear-gradient(135deg,#1a2a3a,#2a4a6a)",
    },
    importance: 3,
  },
  {
    id: "r-v-smith",
    name: "R v Smith",
    year: 1959,
    area: "criminal",
    topics: ["causation"],
    facts:
      "Soldier stabbed in a barracks brawl; dropped twice on the way to the medic and given poor treatment, then died.",
    principle:
      "Poor medical treatment does not break the chain of causation if the original wound is still an operating and substantial cause of death.",
    visual: {
      emoji: "🩸",
      scene: "Khaki tunic darkening in a field hospital",
      palette: "linear-gradient(135deg,#2a3a1a,#5a6a2a)",
    },
    importance: 2,
  },
  {
    id: "r-v-jordan",
    name: "R v Jordan",
    year: 1956,
    area: "criminal",
    topics: ["causation"],
    facts:
      "Stab wound was mostly healed; victim died after being given an antibiotic he was known to be allergic to.",
    principle:
      "'Palpably wrong' medical treatment can break the chain of causation where the original wound is no longer operating.",
    visual: {
      emoji: "💉",
      scene: "A syringe on a hospital tray, chart marked allergy",
      palette: "linear-gradient(135deg,#1a3a3a,#2a6a6a)",
    },
    importance: 2,
  },
  {
    id: "r-v-blaue",
    name: "R v Blaue",
    year: 1975,
    area: "criminal",
    topics: ["causation"],
    facts:
      "Defendant stabbed a Jehovah's Witness who refused a life-saving blood transfusion on religious grounds and died.",
    principle:
      "Thin skull rule: the defendant must take their victim as they find them, including religious beliefs.",
    visual: {
      emoji: "🕊️",
      scene: "A refused transfusion form on a hospital bed",
      palette: "linear-gradient(135deg,#2a1a3a,#4a2a6a)",
    },
    importance: 3,
  },
  {
    id: "r-v-roberts",
    name: "R v Roberts",
    year: 1971,
    area: "criminal",
    topics: ["causation", "non-fatal-offences"],
    facts:
      "Victim jumped from a moving car to escape sexual advances by the defendant and was injured.",
    principle:
      "Victim's escape only breaks the chain if it is 'daft' — i.e. not reasonably foreseeable.",
    visual: {
      emoji: "🚙",
      scene: "An open passenger door, a figure rolling on tarmac",
      palette: "linear-gradient(135deg,#3a2a2a,#7a4a4a)",
    },
    importance: 2,
  },
  {
    id: "dpp-v-smith",
    name: "DPP v Smith",
    year: 1961,
    area: "criminal",
    topics: ["non-fatal-offences"],
    facts:
      "Defendant tried to drive off with stolen goods; an officer clung to the car and was thrown into oncoming traffic and killed.",
    principle:
      "Grievous bodily harm means 'really serious harm'.",
    visual: {
      emoji: "🚨",
      scene: "An officer's cap rolling across a motorway",
      palette: "linear-gradient(135deg,#3a1a1a,#7a2a2a)",
    },
    importance: 2,
  },
  {
    id: "r-v-ireland",
    name: "R v Ireland",
    year: 1997,
    area: "criminal",
    topics: ["non-fatal-offences"],
    facts:
      "Defendant made repeated silent telephone calls to three women, causing them psychiatric injury.",
    principle:
      "Assault can be committed by words alone — even silence — and 'bodily harm' includes recognised psychiatric illness.",
    visual: {
      emoji: "📞",
      scene: "A receiver off the hook in a dim hallway",
      palette: "linear-gradient(135deg,#1a1a3a,#2a2a5a)",
    },
    importance: 3,
  },
  {
    id: "r-v-miller",
    name: "R v Miller",
    year: 1983,
    area: "criminal",
    topics: ["actus-reus"],
    facts:
      "Squatter fell asleep with a lit cigarette; woke to see the mattress smouldering, moved to another room and did nothing.",
    principle:
      "A defendant who creates a dangerous situation has a duty to take reasonable steps to counter it — failure is the actus reus.",
    visual: {
      emoji: "🔥",
      scene: "A smouldering mattress, a closing door",
      palette: "linear-gradient(135deg,#3a2a1a,#7a4a1a)",
    },
    importance: 3,
  },
  {
    id: "r-v-vickers",
    name: "R v Vickers",
    year: 1957,
    area: "criminal",
    topics: ["fatal-offences", "mens-rea"],
    facts:
      "Defendant burgled a cellar and struck the elderly shopkeeper above, intending only to silence her; she died.",
    principle:
      "Mens rea for murder is intention to kill OR intention to cause grievous bodily harm (implied malice).",
    visual: {
      emoji: "🕯️",
      scene: "A shop counter at night, a fallen lamp",
      palette: "linear-gradient(135deg,#2a1a2a,#5a2a4a)",
    },
    importance: 3,
  },
  {
    id: "r-v-byrne",
    name: "R v Byrne",
    year: 1960,
    area: "criminal",
    topics: ["fatal-offences", "defences"],
    facts:
      "Defendant, a 'sexual psychopath' with violent perverted urges he could not control, strangled and mutilated a young woman.",
    principle:
      "Abnormality of mental functioning: a state of mind so different from ordinary people that the reasonable person would call it abnormal — substantially impairs responsibility.",
    visual: {
      emoji: "🧠",
      scene: "A cracked silhouette of a head, two minds within",
      palette: "linear-gradient(135deg,#1a1a3a,#3a2a5a)",
    },
    importance: 3,
  },
  {
    id: "r-v-ahluwalia",
    name: "R v Ahluwalia",
    year: 1992,
    area: "criminal",
    topics: ["fatal-offences", "defences"],
    facts:
      "Wife endured years of violence from her husband; one night, after he threatened her again, she waited for him to sleep, then set him alight.",
    principle:
      "A 'slow-burn' reaction to long-term abuse can found loss of control; the loss need not be immediate, though delay weakens the defence.",
    visual: {
      emoji: "🪔",
      scene: "A bedroom door ajar, a single match struck",
      palette: "linear-gradient(135deg,#2a1a1a,#5a2a2a)",
    },
    importance: 3,
  },
  {
    id: "r-v-church",
    name: "R v Church",
    year: 1966,
    area: "criminal",
    topics: ["fatal-offences"],
    facts:
      "Defendant knocked a woman unconscious during a fight, mistakenly believed her dead, and threw her in a river where she drowned.",
    principle:
      "Unlawful act manslaughter requires an unlawful act that all sober and reasonable people would recognise as creating a risk of some harm.",
    visual: {
      emoji: "🌊",
      scene: "A still river surface, a rippling splash",
      palette: "linear-gradient(135deg,#1a2a3a,#2a4a5a)",
    },
    importance: 3,
  },
  {
    id: "r-v-mitchell",
    name: "R v Mitchell",
    year: 1983,
    area: "criminal",
    topics: ["fatal-offences", "causation"],
    facts:
      "Defendant pushed a man in a post-office queue; the man fell onto an elderly woman who died from her injuries.",
    principle:
      "Transferred malice in unlawful act manslaughter: the unlawful act need not be aimed at the eventual victim.",
    visual: {
      emoji: "🏤",
      scene: "Post-office queue toppling like dominoes",
      palette: "linear-gradient(135deg,#2a2a1a,#5a5a2a)",
    },
    importance: 2,
  },
  {
    id: "r-v-adomako",
    name: "R v Adomako",
    year: 1995,
    area: "criminal",
    topics: ["fatal-offences"],
    facts:
      "Anaesthetist failed for over four minutes to notice a disconnected endotracheal tube; the patient died.",
    principle:
      "Gross negligence manslaughter: duty + breach + risk of death + conduct so bad as to be criminal.",
    visual: {
      emoji: "🫁",
      scene: "An operating theatre, a flatlining monitor",
      palette: "linear-gradient(135deg,#1a3a3a,#2a5a5a)",
    },
    importance: 3,
  },
  {
    id: "r-v-martin",
    name: "R v Martin (Anthony)",
    year: 2001,
    area: "criminal",
    topics: ["defences", "fatal-offences"],
    facts:
      "Farmer shot two burglars in his isolated home at night, killing one as he fled. Defendant suffered paranoid personality disorder.",
    principle:
      "Self-defence: force must be reasonable in the circumstances the defendant believed them to be — but psychiatric quirks do not enlarge what is 'reasonable'.",
    visual: {
      emoji: "🌑",
      scene: "A farmhouse window at night, a shotgun outline",
      palette: "linear-gradient(135deg,#1a1a1a,#3a2a2a)",
    },
    importance: 3,
  },
  {
    id: "dpp-v-majewski",
    name: "DPP v Majewski",
    year: 1977,
    area: "criminal",
    topics: ["defences"],
    facts:
      "Defendant on a 48-hour drink and drug bender attacked the landlord and police officers; pleaded he had no memory.",
    principle:
      "Voluntary intoxication is no defence to crimes of basic intent; it may negate mens rea only for crimes of specific intent.",
    visual: {
      emoji: "🍷",
      scene: "A tipped wineglass, scattered pills on a bar",
      palette: "linear-gradient(135deg,#2a1a2a,#5a2a3a)",
    },
    importance: 3,
  },
  {
    id: "mnaghten",
    name: "M'Naghten's Case",
    year: 1843,
    area: "criminal",
    topics: ["defences"],
    facts:
      "Defendant, suffering delusions, shot dead the Prime Minister's secretary believing him to be Sir Robert Peel.",
    principle:
      "Insanity: at the time of the act, a defect of reason from disease of the mind meant the defendant did not know the nature/quality of his act, or did not know it was wrong.",
    visual: {
      emoji: "⚖️",
      scene: "A judge's bench, an empty witness stand",
      palette: "linear-gradient(135deg,#1a1a2a,#2a2a4a)",
    },
    importance: 3,
  },
  {
    id: "hill-v-baxter",
    name: "Hill v Baxter",
    year: 1958,
    area: "criminal",
    topics: ["defences"],
    facts:
      "Driver claimed he had no memory of an accident, having allegedly been overcome by an unknown illness while at the wheel.",
    principle:
      "Automatism requires a total loss of voluntary control caused by an external factor; mere impaired or reduced control is not enough.",
    visual: {
      emoji: "🐝",
      scene: "An empty driver's seat, a swarm at the windscreen",
      palette: "linear-gradient(135deg,#2a2a1a,#5a4a1a)",
    },
    importance: 2,
  },
  {
    id: "r-v-brown",
    name: "R v Brown",
    year: 1994,
    area: "criminal",
    topics: ["defences", "non-fatal-offences"],
    facts:
      "Group of consenting adults engaged in private sado-masochistic acts causing actual bodily harm; charged under s.47 and s.20 OAPA.",
    principle:
      "Consent is not a defence to actual bodily harm or worse, unless the activity falls within a recognised exception (surgery, sport, tattooing, etc.).",
    visual: {
      emoji: "🔗",
      scene: "A locked door, a length of chain coiled",
      palette: "linear-gradient(135deg,#1a1a1a,#3a1a3a)",
    },
    importance: 3,
  },
  {
    id: "r-v-gullefer",
    name: "R v Gullefer",
    year: 1990,
    area: "criminal",
    topics: ["attempts"],
    facts:
      "Defendant, losing a bet on a greyhound race, jumped onto the track to have the race declared void and his stake returned.",
    principle:
      "Attempt requires an act more than merely preparatory: the defendant must have 'embarked on the crime proper'.",
    visual: {
      emoji: "🏁",
      scene: "A racetrack, a figure mid-leap over the rail",
      palette: "linear-gradient(135deg,#1a2a1a,#2a5a2a)",
    },
    importance: 3,
  },
  {
    id: "r-v-geddes",
    name: "R v Geddes",
    year: 1996,
    area: "criminal",
    topics: ["attempts"],
    facts:
      "Defendant found in a school boys' lavatory with rope, tape and a knife; charged with attempted false imprisonment of a child.",
    principle:
      "Mere preparation is not attempt: had the defendant moved from contemplation to execution? Here, no — he had not yet confronted any pupil.",
    visual: {
      emoji: "🎒",
      scene: "A school corridor, a rucksack beside a cubicle door",
      palette: "linear-gradient(135deg,#1a2a2a,#2a4a4a)",
    },
    importance: 3,
  },
];

export const CASES_BY_ID: Record<string, LawCase> = Object.fromEntries(
  CASES.map((c) => [c.id, c]),
);
