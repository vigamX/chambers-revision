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
    year: 1975,
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
    year: 1998,
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
    year: 1965,
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
    year: 1994,
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
    year: 2002,
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
    year: 1987,
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
  {
    id: "r-v-pittwood",
    name: "R v Pittwood",
    year: 1902,
    area: "criminal",
    topics: ["actus-reus"],
    facts:
      "A railway-crossing gatekeeper went to lunch leaving the gate open; a hay-cart was struck and the driver killed.",
    principle:
      "A contractual duty to act can found criminal liability for omission.",
    visual: {
      emoji: "🚂",
      scene: "An open level-crossing gate, a distant steam train",
      palette: "linear-gradient(135deg,#1a2a2a,#3a4a3a)",
    },
    importance: 3,
  },
  {
    id: "r-v-stone-dobinson",
    name: "R v Stone & Dobinson",
    year: 1977,
    area: "criminal",
    topics: ["actus-reus"],
    facts:
      "Defendants took in Stone's anorexic sister, made half-hearted attempts to feed her, then let her die in filth in their cottage.",
    principle:
      "Voluntary assumption of care for another founds a duty to act; failure constitutes the actus reus.",
    visual: {
      emoji: "🛏️",
      scene: "A dim cottage bedroom, an untouched bowl of broth",
      palette: "linear-gradient(135deg,#2a1a1a,#4a3a2a)",
    },
    importance: 3,
  },
  {
    id: "r-v-dytham",
    name: "R v Dytham",
    year: 1979,
    area: "criminal",
    topics: ["actus-reus"],
    facts:
      "Uniformed police officer stood by and watched a man being kicked to death outside a nightclub, then walked away.",
    principle:
      "Public office imposes a duty to act; wilful neglect to perform that duty is a criminal offence.",
    visual: {
      emoji: "👮",
      scene: "A constable's silhouette under a streetlamp, looking away",
      palette: "linear-gradient(135deg,#1a1a2a,#2a2a4a)",
    },
    importance: 2,
  },
  {
    id: "collins-v-wilcock",
    name: "Collins v Wilcock",
    year: 1984,
    area: "criminal",
    topics: ["non-fatal-offences"],
    facts:
      "Police officer took hold of a woman's arm to detain her for questioning; not arresting her, simply restraining.",
    principle:
      "Battery is any unlawful application of force, however slight, to another person; everyday touchings consented to by convention are not battery.",
    visual: {
      emoji: "✋",
      scene: "A gloved hand gripping a forearm in a doorway",
      palette: "linear-gradient(135deg,#1a2a3a,#2a3a5a)",
    },
    importance: 3,
  },
  {
    id: "r-v-chan-fook",
    name: "R v Chan-Fook",
    year: 1994,
    area: "criminal",
    topics: ["non-fatal-offences"],
    facts:
      "Defendant locked the suspected thief of his fiancée's ring in an upstairs room; the man fell from the window trying to escape, sustaining injury and later mental distress.",
    principle:
      "Actual bodily harm includes recognised psychiatric injury — but not mere emotions such as fear, distress or panic.",
    visual: {
      emoji: "🪟",
      scene: "An upstairs window, curtains stirring, a turned key",
      palette: "linear-gradient(135deg,#2a1a3a,#4a2a5a)",
    },
    importance: 3,
  },
  {
    id: "jcc-v-eisenhower",
    name: "JCC v Eisenhower",
    year: 1984,
    area: "criminal",
    topics: ["non-fatal-offences"],
    facts:
      "Defendant fired an air-pistol pellet that struck the victim near the eye, causing severe bruising and bleeding under the skin but no external break.",
    principle:
      "A 'wound' under s.20 OAPA requires a break in the continuity of both layers of skin — internal bleeding alone is not a wound.",
    visual: {
      emoji: "🎯",
      scene: "A target with a pellet lodged near the bullseye",
      palette: "linear-gradient(135deg,#2a1a1a,#5a2a2a)",
    },
    importance: 3,
  },
  {
    id: "r-v-burstow",
    name: "R v Burstow",
    year: 1997,
    area: "criminal",
    topics: ["non-fatal-offences"],
    facts:
      "Defendant stalked a former partner for years with silent calls, hate mail, and surveillance; she developed a severe depressive illness.",
    principle:
      "Serious psychiatric injury is 'grievous bodily harm' under s.20 OAPA, and can be 'inflicted' without physical contact.",
    visual: {
      emoji: "📬",
      scene: "A doormat strewn with unmarked envelopes",
      palette: "linear-gradient(135deg,#1a1a2a,#2a2a4a)",
    },
    importance: 3,
  },
  {
    id: "r-v-belfon",
    name: "R v Belfon",
    year: 1976,
    area: "criminal",
    topics: ["non-fatal-offences", "mens-rea"],
    facts:
      "Defendant slashed the victim's face and chest with a razor during a robbery, causing severe wounds.",
    principle:
      "s.18 GBH with intent is a specific intent offence: nothing less than intent to cause grievous bodily harm (or to resist arrest) will do.",
    visual: {
      emoji: "🪒",
      scene: "A straight razor unfolded on a dark counter",
      palette: "linear-gradient(135deg,#1a1a1a,#3a2a2a)",
    },
    importance: 2,
  },
  {
    id: "r-v-clinton",
    name: "R v Clinton",
    year: 2012,
    area: "criminal",
    topics: ["fatal-offences", "defences"],
    facts:
      "Defendant killed his wife after she taunted him about her affair and told him she no longer wanted to live with him and the children.",
    principle:
      "Sexual infidelity, while excluded as a stand-alone qualifying trigger, may form part of the surrounding context if other qualifying triggers are present.",
    visual: {
      emoji: "💔",
      scene: "A framed wedding photo face-down on a mantelpiece",
      palette: "linear-gradient(135deg,#1a1a2a,#3a1a2a)",
    },
    importance: 2,
  },
  {
    id: "r-v-golds",
    name: "R v Golds",
    year: 2016,
    area: "criminal",
    topics: ["fatal-offences", "defences"],
    facts:
      "Defendant with a history of psychotic illness stabbed his partner to death during an episode.",
    principle:
      "For diminished responsibility under the 2009 Act, 'substantial' impairment means more than merely trivial — but the jury must find significant, not just measurable, impairment.",
    visual: {
      emoji: "⚖️",
      scene: "A pair of scales tipped unevenly on a courtroom desk",
      palette: "linear-gradient(135deg,#2a1a3a,#4a2a5a)",
    },
    importance: 3,
  },
  {
    id: "r-v-williams-gladstone",
    name: "R v Williams (Gladstone)",
    year: 1983,
    area: "criminal",
    topics: ["defences"],
    facts:
      "Defendant saw a man apparently assaulting a youth in the street; in fact the man was lawfully detaining a mugger. Defendant intervened with force.",
    principle:
      "Self-defence is judged on the facts as the defendant honestly believed them to be — even if his belief was mistaken and unreasonable.",
    visual: {
      emoji: "🚶",
      scene: "Two figures grappling on a pavement, a third approaching",
      palette: "linear-gradient(135deg,#1a2a2a,#2a4a3a)",
    },
    importance: 3,
  },
  {
    id: "r-v-wilson",
    name: "R v Wilson",
    year: 1996,
    area: "criminal",
    topics: ["defences", "non-fatal-offences"],
    facts:
      "Husband branded his initials onto his wife's buttocks at her request with a hot knife.",
    principle:
      "Consent to bodily harm in a private context analogous to tattooing (here, 'personal adornment between spouses') can be a defence.",
    visual: {
      emoji: "🔥",
      scene: "A red-hot blade resting on a fireplace tile",
      palette: "linear-gradient(135deg,#2a1a1a,#5a2a1a)",
    },
    importance: 3,
  },
  {
    id: "r-v-sullivan",
    name: "R v Sullivan",
    year: 1984,
    area: "criminal",
    topics: ["defences"],
    facts:
      "Defendant kicked an elderly friend during a psychomotor epileptic seizure, causing actual bodily harm; pleaded automatism.",
    principle:
      "Epilepsy is a 'disease of the mind' — an internal cause — so the proper plea is insanity, not automatism, however incongruous.",
    visual: {
      emoji: "🧠",
      scene: "A skull profile with jagged interior lines",
      palette: "linear-gradient(135deg,#1a1a3a,#3a2a4a)",
    },
    importance: 3,
  },
  {
    id: "r-v-kingston",
    name: "R v Kingston",
    year: 1994,
    area: "criminal",
    topics: ["defences"],
    facts:
      "Defendant's coffee was secretly spiked with sedative drugs by a blackmailer; in his disinhibited state he sexually assaulted a sleeping boy.",
    principle:
      "Involuntary intoxication is no defence if the defendant still formed the necessary mens rea: 'a drunken intent is still an intent'.",
    visual: {
      emoji: "☕",
      scene: "A coffee cup, a small unmarked vial alongside",
      palette: "linear-gradient(135deg,#2a1a1a,#4a2a2a)",
    },
    importance: 3,
  },
  {
    id: "r-v-g",
    name: "R v G and Another",
    year: 2003,
    area: "criminal",
    topics: ["mens-rea"],
    facts:
      "Two boys, aged 11 and 12, set fire to newspapers under a wheelie bin behind a Co-op; the fire spread and caused £1m of damage.",
    principle:
      "Recklessness in criminal damage is subjective: the defendant must himself have foreseen the risk. Caldwell's objective test is overruled.",
    visual: {
      emoji: "🗞️",
      scene: "Newspapers smouldering beneath a tipped wheelie bin",
      palette: "linear-gradient(135deg,#2a1a1a,#5a3a1a)",
    },
    importance: 3,
  },
  {
    id: "r-v-cheshire",
    name: "R v Cheshire",
    year: 1991,
    area: "criminal",
    topics: ["causation"],
    facts:
      "Defendant shot the victim, who developed rare breathing complications after a tracheotomy and died despite the wounds having largely healed.",
    principle:
      "Negligent medical treatment breaks the chain of causation only if it is so independent and so potent that the defendant's act is rendered insignificant.",
    visual: {
      emoji: "🔬",
      scene: "A surgical light over an empty operating table",
      palette: "linear-gradient(135deg,#1a2a3a,#2a4a5a)",
    },
    importance: 3,
  },
  {
    id: "r-v-kennedy-no-2",
    name: "R v Kennedy (No 2)",
    year: 2007,
    area: "criminal",
    topics: ["causation"],
    facts:
      "Defendant prepared a syringe of heroin and handed it to the victim, who self-injected and died.",
    principle:
      "A free, deliberate and informed act of an adult victim breaks the chain of causation between supply and death.",
    visual: {
      emoji: "💉",
      scene: "A syringe lying on a bedsit floor, a doorway half-shut",
      palette: "linear-gradient(135deg,#1a1a2a,#3a2a3a)",
    },
    importance: 3,
  },
  {
    id: "fagan-v-mpc",
    name: "Fagan v MPC",
    year: 1968,
    area: "criminal",
    topics: ["actus-reus", "mens-rea"],
    facts:
      "Defendant accidentally drove onto a police officer's foot and then refused to move when asked.",
    principle:
      "Where an act is a continuing one, mens rea formed at any point during it can coincide with the actus reus to found liability.",
    visual: {
      emoji: "🚓",
      scene: "A car tyre resting on a polished black boot",
      palette: "linear-gradient(135deg,#1a1a2a,#2a2a4a)",
    },
    importance: 3,
  },
  {
    id: "dpp-v-santa-bermudez",
    name: "DPP v Santa-Bermudez",
    year: 2003,
    area: "criminal",
    topics: ["actus-reus", "non-fatal-offences"],
    facts:
      "Defendant assured a police officer searching him that he had no needles in his pocket; she was pricked by a hypodermic during the search.",
    principle:
      "Creating a danger and failing to warn of it can constitute the actus reus of an offence against the person.",
    visual: {
      emoji: "🪡",
      scene: "A gloved hand recoiling from a pocket, needle exposed",
      palette: "linear-gradient(135deg,#2a1a2a,#4a2a3a)",
    },
    importance: 3,
  },
  {
    id: "r-v-gibbins-proctor",
    name: "R v Gibbins and Proctor",
    year: 1918,
    area: "criminal",
    topics: ["actus-reus", "fatal-offences"],
    facts:
      "Father and his partner deliberately starved his seven-year-old daughter to death while feeding her siblings.",
    principle:
      "A parent owes a duty of care to a child arising from the relationship; failure to feed founds liability for murder.",
    visual: {
      emoji: "🍽️",
      scene: "A child-sized empty plate beside a full one",
      palette: "linear-gradient(135deg,#2a1a1a,#4a2a2a)",
    },
    importance: 3,
  },
  {
    id: "r-v-matthews-alleyne",
    name: "R v Matthews and Alleyne",
    year: 2003,
    area: "criminal",
    topics: ["mens-rea", "fatal-offences"],
    facts:
      "Defendants threw the victim, who said he could not swim, off a bridge into a river. He drowned.",
    principle:
      "Foresight of virtual certainty is evidence from which the jury MAY find intention — it is not, of itself, intention.",
    visual: {
      emoji: "🌉",
      scene: "A bridge railing, two silhouettes leaning over",
      palette: "linear-gradient(135deg,#1a2a3a,#2a4a5a)",
    },
    importance: 3,
  },
  {
    id: "r-v-latimer",
    name: "R v Latimer",
    year: 1886,
    area: "criminal",
    topics: ["mens-rea"],
    facts:
      "Defendant struck at a man with his belt; the buckle glanced off and seriously wounded a woman standing nearby.",
    principle:
      "Transferred malice: mens rea aimed at one victim transfers to an unintended victim of the same kind of offence.",
    visual: {
      emoji: "➰",
      scene: "A swinging leather belt mid-arc, a glint of buckle",
      palette: "linear-gradient(135deg,#2a1a1a,#5a2a2a)",
    },
    importance: 3,
  },
  {
    id: "r-v-moloney",
    name: "R v Moloney",
    year: 1985,
    area: "criminal",
    topics: ["mens-rea", "fatal-offences"],
    facts:
      "Defendant and his stepfather, drunk, had a contest to see who could load and fire a shotgun fastest. Defendant pulled the trigger; his stepfather died.",
    principle:
      "Foresight of consequences is evidence of intention, not intention itself. The jury should be directed in straightforward cases simply on 'intent'.",
    visual: {
      emoji: "🔫",
      scene: "A broken shotgun on a kitchen table, two glasses",
      palette: "linear-gradient(135deg,#1a1a2a,#3a2a3a)",
    },
    importance: 3,
  },
  {
    id: "r-v-evans",
    name: "R v Evans",
    year: 2009,
    area: "criminal",
    topics: ["actus-reus", "fatal-offences"],
    facts:
      "Defendant supplied her half-sister with heroin; the sister overdosed in front of her, and the defendant put her to bed rather than calling for help.",
    principle:
      "Where the defendant contributes to creating a life-threatening situation, a duty arises to take reasonable steps to summon help.",
    visual: {
      emoji: "📞",
      scene: "A telephone untouched on a bedroom floor",
      palette: "linear-gradient(135deg,#1a1a2a,#3a2a4a)",
    },
    importance: 3,
  },
  {
    id: "r-v-jewell",
    name: "R v Jewell",
    year: 2014,
    area: "criminal",
    topics: ["fatal-offences", "defences"],
    facts:
      "Defendant shot a colleague after months of perceived bullying; arrived at the scene with a packed bag of weapons.",
    principle:
      "Loss of self-control under the 2009 Act requires a loss of the ability to maintain one's actions in accordance with considered judgement; pre-planning is fatal to the defence.",
    visual: {
      emoji: "🎒",
      scene: "A duffel bag unzipped, dark shapes within",
      palette: "linear-gradient(135deg,#1a1a1a,#3a2a2a)",
    },
    importance: 3,
  },
  {
    id: "dpp-v-newbury-jones",
    name: "DPP v Newbury and Jones",
    year: 1976,
    area: "criminal",
    topics: ["fatal-offences"],
    facts:
      "Two teenagers pushed a paving stone off a railway bridge onto a train below, killing the guard.",
    principle:
      "Unlawful act manslaughter requires only that the act be objectively dangerous; the defendant need not foresee any harm.",
    visual: {
      emoji: "🧱",
      scene: "A paving stone tumbling toward rails below",
      palette: "linear-gradient(135deg,#2a1a1a,#4a2a2a)",
    },
    importance: 3,
  },
  {
    id: "r-v-lamb",
    name: "R v Lamb",
    year: 1967,
    area: "criminal",
    topics: ["fatal-offences"],
    facts:
      "Defendant pointed a revolver at his friend in jest, neither understanding the rotation of the chambers; he pulled the trigger and shot his friend dead.",
    principle:
      "Unlawful act manslaughter requires an act that is criminally unlawful — not merely dangerous. With no assault (friend was not in fear), there was no unlawful act.",
    visual: {
      emoji: "🎯",
      scene: "A revolver cylinder, two figures in silhouette grinning",
      palette: "linear-gradient(135deg,#1a1a2a,#3a2a3a)",
    },
    importance: 3,
  },
  {
    id: "r-v-dawson",
    name: "R v Dawson",
    year: 1985,
    area: "criminal",
    topics: ["fatal-offences"],
    facts:
      "Defendants robbed a petrol station with a fake gun; the elderly attendant suffered a fatal heart attack from the shock.",
    principle:
      "An act is 'dangerous' for UAM if a sober and reasonable person would foresee the risk of SOME physical harm — knowledge of the victim's frailty is required only if the reasonable person would have it.",
    visual: {
      emoji: "⛽",
      scene: "A petrol-station counter, a fallen cash drawer",
      palette: "linear-gradient(135deg,#2a1a1a,#4a3a2a)",
    },
    importance: 2,
  },
  {
    id: "r-v-dietschmann",
    name: "R v Dietschmann",
    year: 2003,
    area: "criminal",
    topics: ["fatal-offences", "defences"],
    facts:
      "Defendant, suffering from an adjustment disorder following bereavement, killed a man while heavily intoxicated.",
    principle:
      "Diminished responsibility is available even where the defendant is intoxicated, provided the abnormality of mental functioning (ignoring the drink) substantially impaired responsibility.",
    visual: {
      emoji: "🥀",
      scene: "A wilted flower in a tumbler beside a half-empty bottle",
      palette: "linear-gradient(135deg,#1a1a2a,#3a2a3a)",
    },
    importance: 3,
  },
  {
    id: "tuberville-v-savage",
    name: "Tuberville v Savage",
    year: 1669,
    area: "criminal",
    topics: ["non-fatal-offences"],
    facts:
      "Defendant placed his hand on his sword and said: 'If it were not assize-time, I would not take such language from you.'",
    principle:
      "Words can negate what would otherwise be an assault. Conditional words showing no immediate intent to harm prevent the apprehension of immediate unlawful violence.",
    visual: {
      emoji: "⚔️",
      scene: "A hand resting on a sheathed sword hilt",
      palette: "linear-gradient(135deg,#2a1a2a,#4a2a3a)",
    },
    importance: 3,
  },
  {
    id: "r-v-constanza",
    name: "R v Constanza",
    year: 1997,
    area: "criminal",
    topics: ["non-fatal-offences"],
    facts:
      "Defendant stalked his victim and sent her around 800 threatening letters; the last two she interpreted as a clear threat from someone she knew lived nearby.",
    principle:
      "Words alone — including written words — can constitute an assault, provided they cause apprehension of immediate (in the sense of imminent) unlawful violence.",
    visual: {
      emoji: "✉️",
      scene: "A stack of opened letters beside a curtain edge",
      palette: "linear-gradient(135deg,#1a1a2a,#3a2a3a)",
    },
    importance: 3,
  },
  {
    id: "r-v-parmenter",
    name: "R v Parmenter",
    year: 1991,
    area: "criminal",
    topics: ["non-fatal-offences", "mens-rea"],
    facts:
      "Father caused serious injuries to his three-month-old son by handling him too roughly, not realising his strength.",
    principle:
      "For s.20 GBH, the defendant need only foresee SOME physical harm — not harm of the gravity actually caused. The Cunningham recklessness test applies.",
    visual: {
      emoji: "🧸",
      scene: "A toddler's teddy on an empty changing mat",
      palette: "linear-gradient(135deg,#1a1a2a,#3a2a4a)",
    },
    importance: 3,
  },
  {
    id: "r-v-mowatt",
    name: "R v Mowatt",
    year: 1968,
    area: "criminal",
    topics: ["non-fatal-offences", "mens-rea"],
    facts:
      "Defendant punched the victim repeatedly in a street fight, causing serious injury.",
    principle:
      "For s.20, the word 'maliciously' requires foresight that some physical harm — albeit minor — might result; foresight of the actual GBH is unnecessary.",
    visual: {
      emoji: "👊",
      scene: "A closed fist mid-swing under a streetlamp",
      palette: "linear-gradient(135deg,#1a1a2a,#3a2a3a)",
    },
    importance: 2,
  },
  {
    id: "smith-v-cs-woking",
    name: "Smith v CS Woking Police",
    year: 1983,
    area: "criminal",
    topics: ["non-fatal-offences"],
    facts:
      "Defendant trespassed in a garden and stared at the female occupant through her bedroom window at night.",
    principle:
      "Apprehension of immediate unlawful violence does not require physical proximity; 'immediate' means imminent, even where a window or door separates the parties.",
    visual: {
      emoji: "🪟",
      scene: "A face dimly visible through a curtain gap",
      palette: "linear-gradient(135deg,#1a1a2a,#2a2a4a)",
    },
    importance: 2,
  },
  {
    id: "r-v-quick",
    name: "R v Quick",
    year: 1973,
    area: "criminal",
    topics: ["defences"],
    facts:
      "Diabetic nurse took his insulin, drank alcohol and ate little; he then assaulted a patient while hypoglycaemic and remembered nothing.",
    principle:
      "Where the loss of control is caused by an EXTERNAL factor (here, insulin), the proper plea is automatism — not insanity.",
    visual: {
      emoji: "🧪",
      scene: "An insulin vial and syringe on a stainless tray",
      palette: "linear-gradient(135deg,#1a2a3a,#2a4a5a)",
    },
    importance: 3,
  },
  {
    id: "r-v-hennessy",
    name: "R v Hennessy",
    year: 1989,
    area: "criminal",
    topics: ["defences"],
    facts:
      "Defendant, a diabetic in a hyperglycaemic state because he had not taken insulin, drove off in a stolen car with no memory of doing so.",
    principle:
      "Where the loss of control is caused by an INTERNAL factor — here, the diabetes itself — the proper plea is insanity, not automatism.",
    visual: {
      emoji: "🍬",
      scene: "An untouched insulin pen on a bedside table",
      palette: "linear-gradient(135deg,#1a1a3a,#3a2a4a)",
    },
    importance: 3,
  },
  {
    id: "r-v-hardie",
    name: "R v Hardie",
    year: 1984,
    area: "criminal",
    topics: ["defences"],
    facts:
      "Defendant took several Valium tablets to calm down after a row, then set fire to a wardrobe in the flat where his ex-partner and her daughter were.",
    principle:
      "Voluntary intoxication by a non-dangerous (soporific or sedative) drug is treated like involuntary intoxication: it can negate the mens rea even of basic-intent offences.",
    visual: {
      emoji: "💊",
      scene: "A scattered blister pack of pills beside a glass of water",
      palette: "linear-gradient(135deg,#1a2a3a,#2a3a4a)",
    },
    importance: 3,
  },
  {
    id: "r-v-lipman",
    name: "R v Lipman",
    year: 1970,
    area: "criminal",
    topics: ["defences"],
    facts:
      "Defendant on an LSD trip believed he was being attacked by snakes; he killed his girlfriend by stuffing a sheet into her mouth.",
    principle:
      "Voluntary intoxication is no defence to crimes of basic intent (here, manslaughter); the recklessness in becoming intoxicated supplies the mens rea.",
    visual: {
      emoji: "🌀",
      scene: "A swirling fabric pattern, indistinct figures within",
      palette: "linear-gradient(135deg,#2a1a3a,#4a2a4a)",
    },
    importance: 2,
  },
  {
    id: "bratty-v-ag-ni",
    name: "Bratty v AG for Northern Ireland",
    year: 1963,
    area: "criminal",
    topics: ["defences"],
    facts:
      "Defendant strangled a girl and pleaded he had been in a state of automatism due to an underlying neurological condition.",
    principle:
      "Automatism is an act done by the muscles without any control by the mind, or done by a person unconscious of what he is doing. Mere impairment is not enough.",
    visual: {
      emoji: "🌫️",
      scene: "A silhouette dissolving at the edges in heavy mist",
      palette: "linear-gradient(135deg,#1a2a2a,#2a4a3a)",
    },
    importance: 2,
  },
  {
    id: "ag-ref-no-6-1980",
    name: "A-G's Reference (No 6 of 1980)",
    year: 1981,
    area: "criminal",
    topics: ["defences", "non-fatal-offences"],
    facts:
      "Two youths agreed to settle a dispute by fighting in a public street; one suffered a bloody nose and bruising.",
    principle:
      "It is not in the public interest that consent should be a defence to actual bodily harm inflicted in a fight; consent is not available outside recognised exceptions.",
    visual: {
      emoji: "👥",
      scene: "Two silhouettes squaring up on tarmac under a streetlamp",
      palette: "linear-gradient(135deg,#1a1a2a,#2a2a4a)",
    },
    importance: 3,
  },
  {
    id: "r-v-bird",
    name: "R v Bird",
    year: 1986,
    area: "criminal",
    topics: ["defences"],
    facts:
      "Defendant, attacked at her birthday party by an ex-boyfriend, struck out with a glass still in her hand, losing him an eye.",
    principle:
      "A defendant pleading self-defence is not required to retreat first; a willingness to fight on does not, in itself, defeat the plea.",
    visual: {
      emoji: "🥂",
      scene: "A shattered cocktail glass on a tiled floor",
      palette: "linear-gradient(135deg,#2a1a2a,#4a2a3a)",
    },
    importance: 3,
  },
  {
    id: "r-v-dudley-stephens",
    name: "R v Dudley and Stephens",
    year: 1884,
    area: "criminal",
    topics: ["defences", "fatal-offences"],
    facts:
      "Shipwrecked sailors, starving in a lifeboat, killed and ate the cabin boy. Rescued days later, the survivors were charged with murder.",
    principle:
      "Necessity is no defence to murder. The taking of an innocent life cannot be justified by the desire to preserve one's own.",
    visual: {
      emoji: "⛵",
      scene: "A small lifeboat adrift on a vast empty sea",
      palette: "linear-gradient(135deg,#1a2a3a,#2a4a5a)",
    },
    importance: 3,
  },
  {
    id: "r-v-jones-1990",
    name: "R v Jones",
    year: 1990,
    area: "criminal",
    topics: ["attempts"],
    facts:
      "Defendant climbed into the back of his estranged partner's new lover's car wearing a crash-helmet and carrying a loaded sawn-off shotgun; the victim grabbed the gun and escaped.",
    principle:
      "An act is 'more than merely preparatory' once the defendant has 'embarked on the crime proper'; getting into the car with a loaded weapon crossed that line.",
    visual: {
      emoji: "🪖",
      scene: "A crash helmet on a passenger seat, sawn-off barrel beside",
      palette: "linear-gradient(135deg,#1a1a2a,#3a2a3a)",
    },
    importance: 3,
  },
  {
    id: "r-v-tosti",
    name: "R v Tosti and White",
    year: 1997,
    area: "criminal",
    topics: ["attempts"],
    facts:
      "Defendants drove to a barn at night with oxyacetylene equipment hidden in a hedge; they were examining the barn's padlock when disturbed.",
    principle:
      "Examining the means of entry, equipment to hand, is more than merely preparatory — the defendants had 'tried to commit the offence'.",
    visual: {
      emoji: "🔒",
      scene: "A padlock examined under a torch beam at night",
      palette: "linear-gradient(135deg,#1a2a2a,#2a4a3a)",
    },
    importance: 3,
  },
  {
    id: "sweet-v-parsley",
    name: "Sweet v Parsley",
    year: 1969,
    area: "criminal",
    topics: ["mens-rea"],
    facts:
      "Schoolteacher sub-let a farmhouse to students who used it for cannabis; she had no knowledge of the drugs.",
    principle:
      "There is a presumption that mens rea is required for every offence; clear statutory words are needed to displace it.",
    visual: {
      emoji: "🏡",
      scene: "A farmhouse window glowing in fog, smoke from the chimney",
      palette: "linear-gradient(135deg,#1a2a3a,#2a4a4a)",
    },
    importance: 3,
  },
  {
    id: "gammon-v-ag-hk",
    name: "Gammon (HK) v A-G of Hong Kong",
    year: 1985,
    area: "criminal",
    topics: ["mens-rea"],
    facts:
      "Building contractors charged with deviating from approved plans in a manner likely to cause structural collapse, without knowing of the deviation.",
    principle:
      "The presumption of mens rea can be displaced only where the statute concerns an issue of social concern and strict liability would promote greater vigilance.",
    visual: {
      emoji: "🏗️",
      scene: "Scaffolding rising against a clouded city skyline",
      palette: "linear-gradient(135deg,#1a2a3a,#3a3a4a)",
    },
    importance: 3,
  },
  {
    id: "alphacell-v-woodward",
    name: "Alphacell v Woodward",
    year: 1972,
    area: "criminal",
    topics: ["mens-rea"],
    facts:
      "Paper-manufacturing company's filtration system failed and polluted a nearby river; the company had no knowledge of the failure.",
    principle:
      "Strict liability applies to public welfare offences such as pollution: there is no requirement to prove knowledge or fault.",
    visual: {
      emoji: "🏭",
      scene: "A factory outflow pipe staining a river dark below",
      palette: "linear-gradient(135deg,#1a2a2a,#2a4a3a)",
    },
    importance: 3,
  },
  {
    id: "callow-v-tillstone",
    name: "Callow v Tillstone",
    year: 1900,
    area: "criminal",
    topics: ["mens-rea"],
    facts:
      "Butcher had meat inspected and certified fit by a vet before sale; it was nevertheless unsound, and he was convicted.",
    principle:
      "Strict liability offences leave no room for a 'due diligence' defence — even reasonable precautions do not absolve the defendant.",
    visual: {
      emoji: "🥩",
      scene: "A butcher's hook and a single sealed certificate beneath",
      palette: "linear-gradient(135deg,#2a1a1a,#4a2a2a)",
    },
    importance: 2,
  },
  {
    id: "cundy-v-le-cocq",
    name: "Cundy v Le Cocq",
    year: 1884,
    area: "criminal",
    topics: ["mens-rea"],
    facts:
      "Licensee sold alcohol to a man who appeared sober but was in fact drunk; conviction upheld.",
    principle:
      "Where the statute is silent on mens rea, strict liability may be imposed if the purpose of the legislation requires it.",
    visual: {
      emoji: "🍺",
      scene: "A foaming tankard on a bar counter, a hand reaching for it",
      palette: "linear-gradient(135deg,#2a1a1a,#5a2a1a)",
    },
    importance: 2,
  },
  {
    id: "harrow-v-shah",
    name: "Harrow LBC v Shah and Shah",
    year: 1999,
    area: "criminal",
    topics: ["mens-rea"],
    facts:
      "Newsagents sold a National Lottery ticket to a 13-year-old; staff had been instructed to check ID, but the boy looked older.",
    principle:
      "Strict liability applies where the offence is regulatory in character and promotes the protection of a vulnerable class — even reasonable belief is no defence.",
    visual: {
      emoji: "🎟️",
      scene: "A lottery ticket on a shop counter beside an unopened ID",
      palette: "linear-gradient(135deg,#2a1a3a,#4a2a4a)",
    },
    importance: 3,
  },
  {
    id: "pharm-soc-v-storkwain",
    name: "Pharmaceutical Society v Storkwain",
    year: 1986,
    area: "criminal",
    topics: ["mens-rea"],
    facts:
      "Pharmacist dispensed medicines on the basis of forged prescriptions, without knowing they were fakes.",
    principle:
      "Strict liability may be imposed even in the absence of express statutory wording, where Parliament's intention to do so is clear from context.",
    visual: {
      emoji: "💊",
      scene: "A prescription pad and a counterfeit stamp on a pharmacy bench",
      palette: "linear-gradient(135deg,#1a2a3a,#2a3a4a)",
    },
    importance: 2,
  },
  {
    id: "r-v-hasan",
    name: "R v Hasan",
    year: 2005,
    area: "criminal",
    topics: ["defences"],
    facts:
      "Defendant, associated with a violent criminal, committed an aggravated burglary on his instruction, claiming duress.",
    principle:
      "Duress is not available where the defendant voluntarily associates with people he knew or ought to have known might subject him to compulsion to commit offences.",
    visual: {
      emoji: "🔪",
      scene: "A shadowed figure in a doorway, knife glinting at his side",
      palette: "linear-gradient(135deg,#1a1a1a,#3a1a2a)",
    },
    importance: 3,
  },
  {
    id: "r-v-graham",
    name: "R v Graham",
    year: 1982,
    area: "criminal",
    topics: ["defences"],
    facts:
      "Defendant assisted his violent lover in strangling his wife, claiming he acted under threat.",
    principle:
      "Two-stage test for duress: (i) was the defendant compelled by reasonable belief of imminent death/serious harm; (ii) would a sober person of reasonable firmness have responded the same way?",
    visual: {
      emoji: "🪢",
      scene: "A taut rope cast across a kitchen floor, two shadows behind",
      palette: "linear-gradient(135deg,#1a1a2a,#3a2a2a)",
    },
    importance: 3,
  },
  {
    id: "r-v-howe",
    name: "R v Howe",
    year: 1987,
    area: "criminal",
    topics: ["defences", "fatal-offences"],
    facts:
      "Defendants tortured and killed two victims on the orders of a violent gang leader; pleaded duress.",
    principle:
      "Duress is no defence to murder, whether the defendant is principal or accessory: the law expects ordinary courage in the face of threats, not the sacrifice of an innocent life.",
    visual: {
      emoji: "⛓️",
      scene: "Heavy chains coiled at the base of a doorway, a long shadow falling across",
      palette: "linear-gradient(135deg,#1a1a1a,#2a1a2a)",
    },
    importance: 3,
  },
  {
    id: "r-v-hudson-taylor",
    name: "R v Hudson and Taylor",
    year: 1971,
    area: "criminal",
    topics: ["defences"],
    facts:
      "Two teenage girls perjured themselves at a violent assailant's trial, having been threatened with reprisal afterwards.",
    principle:
      "Duress requires a threat 'effective' at the time of the offence; threats of future harm can suffice if the defendant could not reasonably seek police protection.",
    visual: {
      emoji: "🏛️",
      scene: "A witness stand in shadow, a folded oath card on the rail",
      palette: "linear-gradient(135deg,#1a2a2a,#2a3a3a)",
    },
    importance: 3,
  },
  {
    id: "r-v-bowen",
    name: "R v Bowen",
    year: 1996,
    area: "criminal",
    topics: ["defences"],
    facts:
      "Defendant of low IQ obtained electrical goods by deception, claiming two men had threatened to petrol-bomb his family.",
    principle:
      "When applying the Graham objective limb, the jury considers age, sex and recognised characteristics affecting gravity of the threat — but not low IQ, mere timidity, or self-induced incapacity.",
    visual: {
      emoji: "📺",
      scene: "A delivery cart of boxed appliances outside a darkened terraced house",
      palette: "linear-gradient(135deg,#1a1a2a,#2a2a3a)",
    },
    importance: 3,
  },
  {
    id: "r-v-valderrama-vega",
    name: "R v Valderrama-Vega",
    year: 1985,
    area: "criminal",
    topics: ["defences"],
    facts:
      "Defendant smuggled cocaine in fear of a Mafia death threat against his family, plus financial ruin and exposure of his homosexuality.",
    principle:
      "The jury may consider all threats cumulatively; provided a threat of death or serious harm forms part of the picture, lesser threats can add to its force.",
    visual: {
      emoji: "🛄",
      scene: "An open suitcase, white packets nestled among folded clothes",
      palette: "linear-gradient(135deg,#1a1a3a,#3a2a3a)",
    },
    importance: 2,
  },
  {
    id: "r-v-conway",
    name: "R v Conway",
    year: 1988,
    area: "criminal",
    topics: ["defences"],
    facts:
      "Defendant drove off recklessly with a passenger who, days earlier, had been shot at; he believed approaching men in plain clothes were renewed attackers (they were police).",
    principle:
      "Duress of circumstances is available where the defendant acts reasonably and proportionately to avoid threatened death or serious harm — even where the threat comes from external circumstances rather than a person.",
    visual: {
      emoji: "🚗",
      scene: "A car's tail-lights veering off across a rain-slick road",
      palette: "linear-gradient(135deg,#1a1a2a,#3a2a3a)",
    },
    importance: 3,
  },
  {
    id: "re-a-conjoined-twins",
    name: "Re A (Conjoined Twins)",
    year: 2000,
    area: "criminal",
    topics: ["defences", "fatal-offences"],
    facts:
      "Surgeons sought a declaration that separating conjoined twins — which would inevitably kill the weaker — would be lawful, in order to save the stronger.",
    principle:
      "Necessity may be a defence to murder in exceptional circumstances where (i) the act is needed to avoid inevitable and irreparable evil, (ii) no more is done than is reasonably necessary, (iii) the evil inflicted is proportionate.",
    visual: {
      emoji: "🕊️",
      scene: "Two intertwined ribbons divided by a single line of light",
      palette: "linear-gradient(135deg,#1a2a3a,#2a3a4a)",
    },
    importance: 3,
  },
  {
    id: "r-v-gomez",
    name: "R v Gomez",
    year: 1993,
    area: "criminal",
    topics: ["property-offences"],
    facts:
      "Shop assistant persuaded his manager to accept stolen cheques in payment for electrical goods; the manager consented to the transfer.",
    principle:
      "Appropriation under s.3 includes acts done with the owner's consent, where that consent was procured by deception.",
    visual: {
      emoji: "🧾",
      scene: "A bundle of cheques being passed across a shop counter",
      palette: "linear-gradient(135deg,#1a2a3a,#2a3a4a)",
    },
    importance: 3,
  },
  {
    id: "r-v-hinks",
    name: "R v Hinks",
    year: 2000,
    area: "criminal",
    topics: ["property-offences"],
    facts:
      "Defendant befriended a man of limited intelligence and persuaded him to give her almost his entire savings of £60,000 as 'gifts'.",
    principle:
      "Appropriation can occur even where the property is transferred as an indefeasible gift; what makes it theft is the dishonesty.",
    visual: {
      emoji: "💷",
      scene: "An open envelope of banknotes held in two hands across a kitchen table",
      palette: "linear-gradient(135deg,#1a2a2a,#2a4a3a)",
    },
    importance: 3,
  },
  {
    id: "oxford-v-moss",
    name: "Oxford v Moss",
    year: 1979,
    area: "criminal",
    topics: ["property-offences"],
    facts:
      "Engineering student obtained an unseen exam paper, read its contents, and returned the physical paper.",
    principle:
      "Confidential information is not 'property' within s.4 of the Theft Act 1968 — only the paper itself could have been stolen, and it was returned.",
    visual: {
      emoji: "📄",
      scene: "An exam paper being slipped back into a folder under a desk lamp",
      palette: "linear-gradient(135deg,#2a1a2a,#4a2a3a)",
    },
    importance: 3,
  },
  {
    id: "r-v-turner-no-2",
    name: "R v Turner (No 2)",
    year: 1971,
    area: "criminal",
    topics: ["property-offences"],
    facts:
      "Defendant took his own car back from a garage where it was being repaired, without paying the bill, using a spare key.",
    principle:
      "Property 'belongs to' anyone in possession or control of it; the legal owner can be guilty of stealing his own property from such a person.",
    visual: {
      emoji: "🔑",
      scene: "A spare key turning in a car door under a garage's striplight",
      palette: "linear-gradient(135deg,#1a1a2a,#3a2a3a)",
    },
    importance: 3,
  },
  {
    id: "ag-ref-no-1-1983",
    name: "A-G's Reference (No 1 of 1983)",
    year: 1985,
    area: "criminal",
    topics: ["property-offences"],
    facts:
      "Police officer overpaid in error by £74; she noticed but kept the money.",
    principle:
      "Where property is received by mistake, s.5(4) deems it still to belong to the original transferor — failure to restore it can be theft.",
    visual: {
      emoji: "💼",
      scene: "A small stack of banknotes on a desk beside an opened pay envelope",
      palette: "linear-gradient(135deg,#1a2a2a,#2a3a3a)",
    },
    importance: 2,
  },
  {
    id: "r-v-ghosh",
    name: "R v Ghosh",
    year: 1982,
    area: "criminal",
    topics: ["property-offences"],
    facts:
      "Surgeon claimed fees for operations he had not personally performed.",
    principle:
      "(Historic) two-stage test for dishonesty: (i) was the conduct objectively dishonest, and (ii) did the defendant realise reasonable people would so regard it? Replaced by Ivey.",
    visual: {
      emoji: "🩺",
      scene: "A stethoscope coiled atop an unsigned invoice on a desk",
      palette: "linear-gradient(135deg,#1a2a3a,#2a3a4a)",
    },
    importance: 3,
  },
  {
    id: "ivey-v-genting",
    name: "Ivey v Genting Casinos",
    year: 2017,
    area: "criminal",
    topics: ["property-offences"],
    facts:
      "Professional gambler used 'edge-sorting' at baccarat to win £7.7m; the casino refused to pay, alleging cheating.",
    principle:
      "Current test for dishonesty is purely objective: (i) what was the defendant's genuine belief as to the facts; (ii) was the conduct dishonest by the standards of ordinary decent people?",
    visual: {
      emoji: "🎴",
      scene: "Playing cards arranged on a baize table, one card slightly turned",
      palette: "linear-gradient(135deg,#1a2a2a,#2a4a3a)",
    },
    importance: 3,
  },
  {
    id: "r-v-lloyd",
    name: "R v Lloyd",
    year: 1985,
    area: "criminal",
    topics: ["property-offences"],
    facts:
      "Cinema projectionist took films home overnight to copy them, returning the originals in time for the next showing.",
    principle:
      "Borrowing amounts to intention permanently to deprive only if 'all the goodness, the virtue and the practical value' of the property has gone — here, the films retained their value.",
    visual: {
      emoji: "🎞️",
      scene: "A film reel half-unspooled across a projection-room bench",
      palette: "linear-gradient(135deg,#1a1a2a,#3a2a3a)",
    },
    importance: 3,
  },
  {
    id: "r-v-velumyl",
    name: "R v Velumyl",
    year: 1989,
    area: "criminal",
    topics: ["property-offences"],
    facts:
      "Company manager took £1,050 from the office safe intending to repay it after the weekend.",
    principle:
      "Intention to return an equivalent sum is not enough; the defendant intended to deprive his employer permanently of the specific banknotes he took.",
    visual: {
      emoji: "🔓",
      scene: "An open office safe, a small stack of notes pulled out",
      palette: "linear-gradient(135deg,#1a1a2a,#3a2a2a)",
    },
    importance: 2,
  },
  {
    id: "r-v-hale",
    name: "R v Hale",
    year: 1979,
    area: "criminal",
    topics: ["property-offences"],
    facts:
      "Two defendants forced their way into a house; one tied up the occupant upstairs while the other took her jewellery box.",
    principle:
      "Appropriation in robbery is a continuing act — force used at any time while the appropriation is still in progress turns the theft into robbery.",
    visual: {
      emoji: "💎",
      scene: "An open jewellery box on a dresser, a length of cord trailing",
      palette: "linear-gradient(135deg,#2a1a3a,#4a2a3a)",
    },
    importance: 3,
  },
  {
    id: "r-v-dawson-james",
    name: "R v Dawson and James",
    year: 1976,
    area: "criminal",
    topics: ["property-offences"],
    facts:
      "Defendants nudged the victim off-balance so an accomplice could remove his wallet.",
    principle:
      "Even very minor force on the person is sufficient for robbery; 'force' is a question of fact for the jury.",
    visual: {
      emoji: "👤",
      scene: "Two figures jostling a third on a pavement at night",
      palette: "linear-gradient(135deg,#1a1a2a,#2a2a3a)",
    },
    importance: 3,
  },
  {
    id: "corcoran-v-anderton",
    name: "Corcoran v Anderton",
    year: 1980,
    area: "criminal",
    topics: ["property-offences"],
    facts:
      "Defendant tugged a woman's handbag from her grasp; she let go in shock and the bag fell to the ground before he ran off.",
    principle:
      "Robbery is complete the moment appropriation occurs with force; the defendant need not have made off with the property.",
    visual: {
      emoji: "👜",
      scene: "A handbag mid-fall on a pavement, fingers releasing the strap",
      palette: "linear-gradient(135deg,#1a1a2a,#3a2a3a)",
    },
    importance: 3,
  },
  {
    id: "r-v-collins",
    name: "R v Collins",
    year: 1972,
    area: "criminal",
    topics: ["property-offences"],
    facts:
      "Defendant, naked but for his socks, climbed up to a young woman's window with intent to rape; she invited him in believing him to be her boyfriend.",
    principle:
      "Burglary requires entry (1) as a trespasser, (2) knowing or being reckless as to that trespass. Once invited in, he was no longer a trespasser at the moment of substantial entry.",
    visual: {
      emoji: "🪜",
      scene: "A ladder leaning to an open bedroom window",
      palette: "linear-gradient(135deg,#1a1a2a,#2a2a4a)",
    },
    importance: 3,
  },
  {
    id: "r-v-brown-1985",
    name: "R v Brown",
    year: 1985,
    area: "criminal",
    topics: ["property-offences"],
    facts:
      "Defendant leaned through a smashed shop window, with feet still on the pavement outside, to take goods from the display.",
    principle:
      "Entry need only be 'effective' — partial entry of the body, sufficient to commit the ulterior offence, will do.",
    visual: {
      emoji: "🪟",
      scene: "Broken shop-window shards around a hand reaching inside",
      palette: "linear-gradient(135deg,#1a2a2a,#3a3a3a)",
    },
    importance: 2,
  },
  {
    id: "r-v-ryan",
    name: "R v Ryan",
    year: 1996,
    area: "criminal",
    topics: ["property-offences"],
    facts:
      "Defendant, attempting to burgle an elderly man's house, became stuck halfway through a small window — only head and one arm inside.",
    principle:
      "Entry need not be 'effective' to commit the ulterior offence; even partial and ineffectual entry is enough for burglary.",
    visual: {
      emoji: "🚪",
      scene: "A narrow window with shoulders wedged in the frame",
      palette: "linear-gradient(135deg,#1a1a2a,#2a2a3a)",
    },
    importance: 2,
  },
  {
    id: "r-v-walkington",
    name: "R v Walkington",
    year: 1979,
    area: "criminal",
    topics: ["property-offences"],
    facts:
      "Defendant in a department store stepped behind a counter intending to steal from the till.",
    principle:
      "Burglary can be committed by entering any 'part of a building' as a trespasser; an area to which customers are not invited counts as such a part.",
    visual: {
      emoji: "🏬",
      scene: "A till counter with a low swing-gate ajar, an empty drawer",
      palette: "linear-gradient(135deg,#1a2a2a,#2a3a3a)",
    },
    importance: 3,
  },
  {
    id: "roe-v-kingerlee",
    name: "Roe v Kingerlee",
    year: 1986,
    area: "criminal",
    topics: ["property-offences"],
    facts:
      "Defendant smeared mud on a police-cell wall; it cost £7 to clean off.",
    principle:
      "'Damage' need not be permanent — temporary impairment of value or usefulness requiring expense to remedy will suffice.",
    visual: {
      emoji: "🧱",
      scene: "A bare cell wall with smeared darker patches and a bucket beside it",
      palette: "linear-gradient(135deg,#1a1a1a,#3a2a2a)",
    },
    importance: 2,
  },
  {
    id: "r-v-smith-1974",
    name: "R v Smith",
    year: 1974,
    area: "criminal",
    topics: ["property-offences"],
    facts:
      "Tenant ripped out wiring, soundproofing and floorboards he had installed in his rented flat to retrieve them at the end of the tenancy.",
    principle:
      "A genuine but mistaken belief that property belongs to the defendant negates the mens rea of criminal damage, even if that belief is unreasonable.",
    visual: {
      emoji: "🪚",
      scene: "A torn-up section of floorboard exposing cables beneath",
      palette: "linear-gradient(135deg,#2a1a1a,#4a2a2a)",
    },
    importance: 3,
  },
  {
    id: "r-v-steer",
    name: "R v Steer",
    year: 1988,
    area: "criminal",
    topics: ["property-offences"],
    facts:
      "Defendant fired a rifle through the windows of a bungalow; no-one was hit, but glass and a wall were damaged.",
    principle:
      "For aggravated criminal damage endangering life (s.1(2)), the danger must arise from the DAMAGE itself — not from the act causing the damage (here, the bullet).",
    visual: {
      emoji: "🔫",
      scene: "A starred bullet hole in a window pane against a dark interior",
      palette: "linear-gradient(135deg,#1a1a2a,#3a2a3a)",
    },
    importance: 2,
  },
  {
    id: "r-v-hill-hall",
    name: "R v Hill and Hall",
    year: 1989,
    area: "criminal",
    topics: ["property-offences"],
    facts:
      "Defendants, found with hacksaw blades near a US naval base, intended to cut the perimeter fence in protest against nuclear weapons.",
    principle:
      "Lawful excuse under s.5 Criminal Damage Act 1971 requires (i) honest belief that the property in need of protection was in immediate need of protection, and (ii) honest belief that the means were reasonable; political belief alone is not enough.",
    visual: {
      emoji: "🚧",
      scene: "Wire-cutter blades resting against a chain-link fence at dusk",
      palette: "linear-gradient(135deg,#1a2a2a,#2a3a3a)",
    },
    importance: 3,
  },
  {
    id: "r-v-larsonneur",
    name: "R v Larsonneur",
    year: 1933,
    area: "criminal",
    topics: ["actus-reus"],
    facts:
      "French woman ordered to leave the UK was deported from Ireland and brought back to England against her will by the Irish police, where she was immediately arrested as an illegal immigrant.",
    principle:
      "A 'state of affairs' offence can be committed even where the defendant's presence is involuntary; the actus reus need not be a positive voluntary act.",
    visual: {
      emoji: "🛂",
      scene: "A passport stamp and an empty quay at dawn",
      palette: "linear-gradient(135deg,#1a1a2a,#2a2a3a)",
    },
    importance: 3,
  },
  {
    id: "r-v-williams-1992",
    name: "R v Williams",
    year: 1992,
    area: "criminal",
    topics: ["causation"],
    facts:
      "Hitch-hiker jumped from the defendant's car travelling at 30 mph and died from head injuries; prosecution alleged he jumped because Williams was trying to steal his wallet.",
    principle:
      "A victim's escape only breaks the chain of causation if the act is not reasonably foreseeable, or is disproportionate to the threat — 'daft' acts break the chain.",
    visual: {
      emoji: "🛣️",
      scene: "An open car door swinging on a country road, a tumbling silhouette",
      palette: "linear-gradient(135deg,#2a2a1a,#4a3a1a)",
    },
    importance: 3,
  },
  {
    id: "r-v-pembliton",
    name: "R v Pembliton",
    year: 1874,
    area: "criminal",
    topics: ["mens-rea"],
    facts:
      "Defendant threw a stone at people he had been fighting; it missed and shattered a nearby window.",
    principle:
      "Transferred malice does not apply where the mens rea is for a completely different type of offence (intent to assault a person cannot transfer to criminal damage of property).",
    visual: {
      emoji: "🪟",
      scene: "A stone arcing past brawling silhouettes toward a glass pane",
      palette: "linear-gradient(135deg,#1a1a2a,#3a2a2a)",
    },
    importance: 3,
  },
  {
    id: "r-v-larkin",
    name: "R v Larkin",
    year: 1943,
    area: "criminal",
    topics: ["fatal-offences"],
    facts:
      "Defendant brandished an open cut-throat razor to frighten another man; the other man's drunk mistress lurched onto the blade and was killed.",
    principle:
      "Unlawful act manslaughter requires (i) an unlawful act (here, technical assault) and (ii) that act being objectively dangerous — likely to cause some harm.",
    visual: {
      emoji: "🪒",
      scene: "An unfolded cut-throat razor catching candlelight, a fallen tumbler nearby",
      palette: "linear-gradient(135deg,#1a1a1a,#3a1a1a)",
    },
    importance: 3,
  },
  {
    id: "r-v-lowe",
    name: "R v Lowe",
    year: 1973,
    area: "criminal",
    topics: ["fatal-offences", "actus-reus"],
    facts:
      "Defendant was convicted of wilfully neglecting his baby son, who died as a result.",
    principle:
      "Unlawful act manslaughter requires an unlawful ACT — an omission, even one amounting to wilful neglect, cannot support UAM.",
    visual: {
      emoji: "🍼",
      scene: "An untouched feeding bottle on a cold radiator shelf",
      palette: "linear-gradient(135deg,#1a1a2a,#2a2a3a)",
    },
    importance: 3,
  },
  {
    id: "r-v-goodfellow",
    name: "R v Goodfellow",
    year: 1986,
    area: "criminal",
    topics: ["fatal-offences"],
    facts:
      "Defendant set fire to his council house to be re-housed; his wife, son and son's girlfriend died in the blaze.",
    principle:
      "The unlawful act for UAM need not be aimed at the eventual victim — an act aimed at property suffices if it is objectively dangerous to others.",
    visual: {
      emoji: "🔥",
      scene: "A council-flat door silhouetted against orange flames",
      palette: "linear-gradient(135deg,#2a1a1a,#5a2a1a)",
    },
    importance: 3,
  },
  {
    id: "r-v-wacker",
    name: "R v Wacker",
    year: 2002,
    area: "criminal",
    topics: ["fatal-offences"],
    facts:
      "Defendant transported 60 illegal immigrants in the back of his lorry; he closed the only air vent for the cross-Channel crossing. 58 of them died.",
    principle:
      "A duty of care for gross negligence manslaughter can arise even where defendant and victims are parties to a joint illegal enterprise — the ex turpi causa bar does not apply.",
    visual: {
      emoji: "🚛",
      scene: "A lorry container in port shadow, a single vent shut tight",
      palette: "linear-gradient(135deg,#1a1a1a,#2a2a2a)",
    },
    importance: 3,
  },
  {
    id: "r-v-tandy",
    name: "R v Tandy",
    year: 1989,
    area: "criminal",
    topics: ["fatal-offences", "defences"],
    facts:
      "Long-term alcoholic drank nearly a bottle of vodka, then strangled her 11-year-old daughter after the child disclosed sexual abuse by Tandy's husband.",
    principle:
      "Alcohol Dependency Syndrome can found diminished responsibility only if the drinking was involuntary in the sense that the defendant could not resist the first drink of the day.",
    visual: {
      emoji: "🥃",
      scene: "An almost-empty vodka bottle on a draining board, a single chair toppled",
      palette: "linear-gradient(135deg,#2a1a1a,#4a2a2a)",
    },
    importance: 3,
  },
  {
    id: "dpp-v-k",
    name: "DPP v K",
    year: 1990,
    area: "criminal",
    topics: ["non-fatal-offences"],
    facts:
      "Schoolboy hid acid stolen from a science lab inside a school hand-dryer, intending to retrieve it; another pupil used the dryer and was scarred by the acid.",
    principle:
      "Common assault can be committed by an INDIRECT act — the actus reus need not involve direct application of force by the defendant's body.",
    visual: {
      emoji: "🚻",
      scene: "A school washroom hand-dryer, a hidden vial silhouetted within",
      palette: "linear-gradient(135deg,#1a2a2a,#2a4a3a)",
    },
    importance: 3,
  },
  {
    id: "r-v-bollom",
    name: "R v Bollom",
    year: 2004,
    area: "criminal",
    topics: ["non-fatal-offences"],
    facts:
      "Defendant inflicted bruising to the abdomen, both arms and a leg of a 17-month-old child.",
    principle:
      "The severity of an injury is to be assessed by reference to the particular victim's age, health and circumstances — bruising on an infant may be GBH where the same on an adult would not.",
    visual: {
      emoji: "🧸",
      scene: "A baby's cot with rumpled blanket and small abandoned toy",
      palette: "linear-gradient(135deg,#1a1a2a,#3a2a3a)",
    },
    importance: 3,
  },
  {
    id: "r-v-dica",
    name: "R v Dica",
    year: 2004,
    area: "criminal",
    topics: ["non-fatal-offences", "defences"],
    facts:
      "HIV-positive defendant had unprotected consensual sex with two women without disclosing his status; both contracted HIV.",
    principle:
      "Consent to sexual activity does not equal consent to the risk of a known but undisclosed infection; transmitting GBH (HIV) without informed consent is an offence under s.20 OAPA.",
    visual: {
      emoji: "🧬",
      scene: "A bedside lamp casting a long shadow across a single unopened envelope",
      palette: "linear-gradient(135deg,#1a1a2a,#3a2a3a)",
    },
    importance: 3,
  },
  {
    id: "pegram-v-dpp",
    name: "Pegram v DPP",
    year: 2019,
    area: "criminal",
    topics: ["non-fatal-offences"],
    facts:
      "Police officer took hold of Pegram's arm with light force to warn him he was about to commit a public order offence; he was charged with assaulting a constable.",
    principle:
      "Moderate, generally acceptable physical contact made to attract a person's attention is not a battery — even when made by a police officer not effecting arrest.",
    visual: {
      emoji: "👮",
      scene: "A police officer's hand resting lightly on a sleeve, side-on",
      palette: "linear-gradient(135deg,#1a1a2a,#2a2a4a)",
    },
    importance: 2,
  },
  {
    id: "lawrence-v-mpc",
    name: "Lawrence v MPC",
    year: 1972,
    area: "criminal",
    topics: ["property-offences"],
    facts:
      "Taxi driver took £7 from the open wallet of a foreign student who spoke little English, having said the fare for a journey was much more than it was; the student let him take it.",
    principle:
      "Appropriation can occur even where the owner CONSENTS to the taking — consent is not a bar to the actus reus of theft.",
    visual: {
      emoji: "🚕",
      scene: "An open wallet on a taxi back seat, hand reaching in",
      palette: "linear-gradient(135deg,#1a2a3a,#2a3a4a)",
    },
    importance: 3,
  },
  {
    id: "r-v-morris",
    name: "R v Morris",
    year: 1983,
    area: "criminal",
    topics: ["property-offences"],
    facts:
      "Defendant switched the price labels of supermarket items, putting the cheaper-labelled item in his basket; arrested before the checkout.",
    principle:
      "Appropriation requires the assumption of ANY of the rights of an owner — not necessarily all of them. Switching price labels assumes one such right.",
    visual: {
      emoji: "🏷️",
      scene: "Two price tags peeled and crossed on a supermarket shelf-edge",
      palette: "linear-gradient(135deg,#1a2a2a,#2a3a3a)",
    },
    importance: 3,
  },
  {
    id: "r-v-hall",
    name: "R v Hall",
    year: 1972,
    area: "criminal",
    topics: ["property-offences"],
    facts:
      "Travel agent took clients' deposits for flights to America, paid them into the firm's general account, organised nothing and could not refund.",
    principle:
      "Money is held under a duty 'to retain and deal with' it (s.5(3)) only where there is a clear obligation to use it in a particular way — absent which, paying it into a general account is not theft.",
    visual: {
      emoji: "🧳",
      scene: "A travel-agency desk, brochures fanned, an open empty ledger",
      palette: "linear-gradient(135deg,#1a2a3a,#2a3a4a)",
    },
    importance: 3,
  },
  {
    id: "r-v-easom",
    name: "R v Easom",
    year: 1971,
    area: "criminal",
    topics: ["property-offences", "attempts"],
    facts:
      "Defendant picked up a handbag in a cinema, rummaged through it, then put it back with nothing taken.",
    principle:
      "Conditional intent — intent to steal only if the property is worth taking — is not enough for theft; without intent permanently to deprive of specific property, the offence is not made out (but may found a conviction for attempted theft).",
    visual: {
      emoji: "👜",
      scene: "A handbag set down on a cinema seat in projector glow",
      palette: "linear-gradient(135deg,#2a1a2a,#4a2a3a)",
    },
    importance: 3,
  },
  {
    id: "r-v-pitham-hehl",
    name: "R v Pitham and Hehl",
    year: 1977,
    area: "criminal",
    topics: ["property-offences"],
    facts:
      "Defendants offered to sell furniture in a third party's house to a buyer, knowing it did not belong to them; the buyer agreed but had not yet removed it.",
    principle:
      "Offering to sell another person's goods is itself an assumption of the owner's rights — appropriation, complete at the moment of the offer.",
    visual: {
      emoji: "🛋️",
      scene: "A living-room sofa with a 'For sale' tag pinned to the arm",
      palette: "linear-gradient(135deg,#1a2a2a,#3a3a3a)",
    },
    importance: 3,
  },
  {
    id: "r-v-kemp",
    name: "R v Kemp",
    year: 1956,
    area: "criminal",
    topics: ["defences"],
    facts:
      "Defendant, suffering from arteriosclerosis (hardening of the arteries) causing brief losses of consciousness, attacked his wife with a hammer during one such episode.",
    principle:
      "'Disease of the mind' under M'Naghten is a legal concept, not a medical one: any internal physical illness that affects the mental faculties of reason, memory and understanding qualifies — including arteriosclerosis.",
    visual: {
      emoji: "🩻",
      scene: "A clinical X-ray viewed through frosted glass under fluorescent light",
      palette: "linear-gradient(135deg,#1a2a3a,#2a3a4a)",
    },
    importance: 3,
  },
  {
    id: "r-v-burgess",
    name: "R v Burgess",
    year: 1991,
    area: "criminal",
    topics: ["defences"],
    facts:
      "Defendant, asleep while watching videos with his girlfriend, attacked her in his sleep; expert evidence showed it was a sleep disorder with no external cause.",
    principle:
      "Sleepwalking caused by an internal sleep disorder is a 'disease of the mind' — insanity, not automatism.",
    visual: {
      emoji: "🌙",
      scene: "A flickering television illuminating a sleeping figure on a sofa",
      palette: "linear-gradient(135deg,#1a1a3a,#2a2a4a)",
    },
    importance: 3,
  },
  {
    id: "r-v-coley",
    name: "R v Coley",
    year: 2013,
    area: "criminal",
    topics: ["defences"],
    facts:
      "Regular cannabis user, after smoking and playing a violent video game, attacked his neighbours believing he was 'in the game'.",
    principle:
      "Voluntary intoxication causing a transient psychotic episode is governed by intoxication rules, not automatism — the defence of automatism requires a complete loss of voluntary control from an external cause.",
    visual: {
      emoji: "🎮",
      scene: "A games controller fallen on a rug, a TV's bright glow on the wall",
      palette: "linear-gradient(135deg,#1a1a3a,#3a2a4a)",
    },
    importance: 3,
  },
  {
    id: "r-v-hatton",
    name: "R v Hatton",
    year: 2005,
    area: "criminal",
    topics: ["defences"],
    facts:
      "Defendant, having drunk over 20 pints of beer, killed a man with a sledgehammer in his flat; claimed he believed the victim had attacked him with a stick.",
    principle:
      "A drunken mistake about the need for or amount of force in self-defence is no defence — even to a specific intent offence like murder.",
    visual: {
      emoji: "🍺",
      scene: "An empty pint glass beside a heavy hammer in dim morning light",
      palette: "linear-gradient(135deg,#1a1a1a,#3a2a2a)",
    },
    importance: 3,
  },
  {
    id: "r-v-donovan",
    name: "R v Donovan",
    year: 1934,
    area: "criminal",
    topics: ["defences", "non-fatal-offences"],
    facts:
      "Defendant caned a 17-year-old girl for sexual gratification, causing bruising, with her consent.",
    principle:
      "Consent is no defence to bodily harm inflicted for no good reason: the act must be unlawful even where the victim agreed to it.",
    visual: {
      emoji: "🚪",
      scene: "A panelled door ajar, a single cane leaning against the jamb",
      palette: "linear-gradient(135deg,#1a1a1a,#2a1a2a)",
    },
    importance: 3,
  },
  {
    id: "r-v-gotts",
    name: "R v Gotts",
    year: 1992,
    area: "criminal",
    topics: ["defences", "attempts"],
    facts:
      "16-year-old, threatened by his father to be shot if he did not, stabbed his mother causing serious injuries; she survived.",
    principle:
      "Duress is no defence to attempted murder, just as it is no defence to murder (extending the rule in Howe).",
    visual: {
      emoji: "🗡️",
      scene: "A kitchen knife lying on a tiled floor, a doorway shadow looming",
      palette: "linear-gradient(135deg,#1a1a1a,#3a1a2a)",
    },
    importance: 3,
  },
  {
    id: "r-v-whybrow",
    name: "R v Whybrow",
    year: 1951,
    area: "criminal",
    topics: ["attempts", "mens-rea"],
    facts:
      "Defendant wired up his wife's bath and gave her an electric shock; she survived. Charged with attempted murder.",
    principle:
      "Attempted murder requires intention to KILL only — intention to cause GBH is not enough, even though it would suffice for murder if the victim had died.",
    visual: {
      emoji: "⚡",
      scene: "A bathtub with frayed wiring trailing over the rim",
      palette: "linear-gradient(135deg,#1a1a2a,#2a2a3a)",
    },
    importance: 3,
  },
  {
    id: "r-v-shivpuri",
    name: "R v Shivpuri",
    year: 1986,
    area: "criminal",
    topics: ["attempts"],
    facts:
      "Defendant agreed to receive what he believed was a suitcase of illegal drugs; the case actually contained harmless vegetable matter.",
    principle:
      "A defendant can be guilty of attempt even where the offence is factually impossible — what matters is the intent and the act, judged on the facts as he believed them to be.",
    visual: {
      emoji: "🧳",
      scene: "An open suitcase on a station platform, dried leaves inside",
      palette: "linear-gradient(135deg,#1a2a2a,#2a3a3a)",
    },
    importance: 3,
  },

  // ─────────────────────────────────────────────────────────────────────
  // Term 2 — Law of Tort
  // Chapter 21 — Liability in negligence (foundation set)
  // All citations verified against Wortley/Price/Briggs OCR A Level Law
  // 2nd ed (Hodder, 2021), Table of Cases pp. xi–xiii.
  // ─────────────────────────────────────────────────────────────────────

  {
    id: "donoghue-v-stevenson",
    name: "Donoghue v Stevenson",
    year: 1932,
    area: "tort",
    topics: ["duty-of-care"],
    facts:
      "Mrs Donoghue drank ginger beer from an opaque bottle bought for her by a friend in a Paisley café; the dregs contained the decomposed remains of a snail. She suffered gastroenteritis and shock and sued the manufacturer directly, despite having no contract with him.",
    principle:
      "A manufacturer owes a duty of care to the ultimate consumer. The wider 'neighbour principle' (Lord Atkin): you must take reasonable care to avoid acts or omissions you can reasonably foresee would injure your neighbour — anyone so closely and directly affected by your conduct that you ought reasonably to have them in contemplation.",
    visual: {
      emoji: "🍺",
      scene: "An opaque ginger beer bottle on a café table, a snail silhouette beside it",
      palette: "linear-gradient(135deg,#1c2a1c,#3a5a3a)",
    },
    importance: 3,
  },
  {
    id: "caparo-v-dickman",
    name: "Caparo Industries v Dickman",
    year: 1990,
    area: "tort",
    topics: ["duty-of-care"],
    facts:
      "Caparo bought shares in Fidelity plc relying on audited accounts prepared by Dickman that overstated profits. They sued the auditors for negligent misstatement after the shares lost value.",
    principle:
      "The three-stage test for a novel duty of care: (1) damage must be reasonably foreseeable; (2) there must be a relationship of proximity between claimant and defendant; (3) it must be fair, just and reasonable to impose a duty. Auditors owed no duty to potential investors.",
    visual: {
      emoji: "📊",
      scene: "An auditor's ledger casting a long shadow across a boardroom table",
      palette: "linear-gradient(135deg,#1a1a2a,#33335a)",
    },
    importance: 3,
  },
  {
    id: "robinson-v-ccwy",
    name: "Robinson v Chief Constable of West Yorkshire",
    year: 2018,
    area: "tort",
    topics: ["duty-of-care"],
    facts:
      "Officers attempting to arrest a suspected drug dealer in a busy street knocked over Mrs Robinson, an elderly pedestrian, during the struggle. She sued the police for negligence.",
    principle:
      "The Caparo three-stage test is reserved for novel categories of duty. Where an established category applies — here, the duty not to cause direct physical injury through positive acts — precedent governs and the duty is simply applied. Police are not categorically immune.",
    visual: {
      emoji: "🚔",
      scene: "A silhouette of an elderly figure falling backwards as two officers grapple a third",
      palette: "linear-gradient(135deg,#1a2a3a,#3a5a7a)",
    },
    importance: 3,
  },
  {
    id: "hill-v-cc-west-yorkshire",
    name: "Hill v Chief Constable of West Yorkshire",
    year: 1989,
    area: "tort",
    topics: ["duty-of-care"],
    facts:
      "The mother of Jacqueline Hill, the final victim of the Yorkshire Ripper, sued the police, arguing that earlier mistakes in the investigation allowed Peter Sutcliffe to remain at large and kill her daughter.",
    principle:
      "The police owe no general duty of care to individual members of the public in the investigation and suppression of crime. Imposing such a duty would risk defensive policing and divert resources from operational work. (Distinguished where police assume responsibility for a specific individual.)",
    visual: {
      emoji: "🕯️",
      scene: "A solitary candle on a windowsill, a folded missing-person poster beside it",
      palette: "linear-gradient(135deg,#1a1a1a,#3a2a2a)",
    },
    importance: 2,
  },
  {
    id: "kent-v-griffiths",
    name: "Kent v Griffiths",
    year: 2001,
    area: "tort",
    topics: ["duty-of-care"],
    facts:
      "A GP called an ambulance for a patient suffering a severe asthma attack. The London Ambulance Service accepted the call and confirmed it was on its way, but took 40 minutes without explanation. The patient suffered respiratory arrest and brain damage.",
    principle:
      "Once an ambulance service accepts a 999 call for a named patient, it assumes a duty of care to that patient. This is closer to a hospital's duty than to the public-protection role of the police or fire service.",
    visual: {
      emoji: "🚑",
      scene: "An inhaler on a kitchen floor beside a telephone handset off its cradle",
      palette: "linear-gradient(135deg,#3a1c1c,#7a3a3a)",
    },
    importance: 2,
  },
  {
    id: "bolam-v-friern-barnet",
    name: "Bolam v Friern Barnet Hospital Management Committee",
    year: 1957,
    area: "tort",
    topics: ["breach-of-duty"],
    facts:
      "Mr Bolam consented to electro-convulsive therapy for depression. He was given neither muscle relaxants nor physical restraint and suffered fractures during the convulsion. Both approaches were practised by responsible bodies of medical opinion at the time.",
    principle:
      "A professional is not negligent if they have acted in accordance with a practice accepted as proper by a responsible body of skilled opinion in that field. The court does not choose between competing bodies of competent opinion.",
    visual: {
      emoji: "⚕️",
      scene: "A 1950s hospital gurney with leather straps unfastened, an ECT cap beside it",
      palette: "linear-gradient(135deg,#1a2a2a,#3a5a5a)",
    },
    importance: 3,
  },
  {
    id: "bolitho-v-city-and-hackney",
    name: "Bolitho v City and Hackney Health Authority",
    year: 1997,
    area: "tort",
    topics: ["breach-of-duty"],
    facts:
      "A two-year-old admitted with breathing difficulties suffered cardiac arrest and severe brain damage after a doctor failed to attend. The doctor said that, even if she had attended, she would not have intubated; expert evidence on both sides supported that view.",
    principle:
      "The Bolam test is qualified: a court may reject a body of professional opinion if it is not 'logically defensible' — that is, if the experts have not weighed the risks and benefits and reached a defensible conclusion. Pure deference to professional practice ends here.",
    visual: {
      emoji: "🩺",
      scene: "An empty paediatric ward bed, a stethoscope hung from the rail",
      palette: "linear-gradient(135deg,#1a2a3a,#3a5a7a)",
    },
    importance: 3,
  },
  {
    id: "nettleship-v-weston",
    name: "Nettleship v Weston",
    year: 1971,
    area: "tort",
    topics: ["breach-of-duty"],
    facts:
      "Mrs Weston, a learner driver, was being taught by Mr Nettleship, a family friend. On her third lesson she panicked, mounted the kerb and crashed into a lamp post, breaking his kneecap.",
    principle:
      "A learner driver is judged by the objective standard of the reasonably competent qualified driver. The defendant's inexperience or best efforts are no defence — the standard is impersonal and external.",
    visual: {
      emoji: "🚙",
      scene: "An 'L' plate detached on the pavement beside a buckled lamp post",
      palette: "linear-gradient(135deg,#2a1a1a,#5a3a3a)",
    },
    importance: 2,
  },
  {
    id: "bolton-v-stone",
    name: "Bolton v Stone",
    year: 1951,
    area: "tort",
    topics: ["breach-of-duty"],
    facts:
      "A cricket ball was hit out of a club ground, over a seven-foot fence seventeen feet above the pitch, and struck Miss Stone standing on a quiet residential road. In the club's 90-year history balls had been hit out only about six times; no-one had ever been injured.",
    principle:
      "In assessing breach, the magnitude of the risk (likelihood × seriousness) is weighed against the cost and practicability of precautions. Where the risk is small and the precautions would be substantial, a reasonable defendant need not guard against it.",
    visual: {
      emoji: "🏏",
      scene: "A cricket ball arcing over a tall fence toward a tree-lined road",
      palette: "linear-gradient(135deg,#1c2a1c,#3a5a3a)",
    },
    importance: 3,
  },
  {
    id: "latimer-v-aec",
    name: "Latimer v AEC",
    year: 1953,
    area: "tort",
    topics: ["breach-of-duty"],
    facts:
      "An unprecedented flood left the floor of a factory covered in a mixture of water and oil. Sawdust was spread over most — but not all — of the surface. The claimant slipped on an untreated strip and was injured. He argued the factory should have been closed.",
    principle:
      "Precautions must be proportionate to the risk. A reasonable employer takes reasonable practical steps; closing the entire factory was disproportionate to a slipping hazard largely mitigated by sawdust.",
    visual: {
      emoji: "🏭",
      scene: "A factory floor with patches of sawdust covering oil-slicked concrete",
      palette: "linear-gradient(135deg,#2a2a1a,#5a5a3a)",
    },
    importance: 2,
  },
  {
    id: "barnett-v-chelsea",
    name: "Barnett v Chelsea and Kensington Hospital Management Committee",
    year: 1969,
    area: "tort",
    topics: ["causation-tort"],
    facts:
      "Three night-watchmen presented at hospital A&E complaining of vomiting after drinking tea. The casualty doctor refused to examine them and told them to see their own GPs. One died hours later; the cause was arsenic poisoning.",
    principle:
      "Factual causation uses the 'but for' test: would the harm have occurred but for the defendant's breach? Here, even with prompt treatment the man would have died — the breach did not cause the death, and the claim failed.",
    visual: {
      emoji: "🏥",
      scene: "Three empty teacups on a hospital bench beneath a flickering A&E sign",
      palette: "linear-gradient(135deg,#1a2a2a,#3a5a5a)",
    },
    importance: 3,
  },
  {
    id: "wagon-mound-no-1",
    name: "Overseas Tankship (UK) v Morts Dock (Wagon Mound No. 1)",
    year: 1961,
    area: "tort",
    topics: ["remoteness"],
    facts:
      "Furnace oil leaked from a ship into Sydney Harbour, drifting under a wharf where welding was in progress. Sparks ignited cotton waste floating in the oil, setting the wharf alight. Engineering opinion at the time was that furnace oil on water would not ignite.",
    principle:
      "Damage is too remote unless it is of a kind that was reasonably foreseeable. The Re Polemis 'direct consequences' rule is rejected; foreseeability of the type of harm is the test.",
    visual: {
      emoji: "🛢️",
      scene: "An oil slick spreading under a harbour wharf, a welder's silhouette above",
      palette: "linear-gradient(135deg,#1a1a2a,#3a2a2a)",
    },
    importance: 3,
  },
  {
    id: "hughes-v-lord-advocate",
    name: "Hughes v Lord Advocate",
    year: 1963,
    area: "tort",
    topics: ["remoteness"],
    facts:
      "Post Office workers left an open manhole on an Edinburgh street guarded by paraffin warning lamps when they went off duty. Two boys climbed in; one knocked a lamp into the hole. The paraffin vaporised and exploded, badly burning the boy.",
    principle:
      "Provided the type of damage (burns) was reasonably foreseeable, it does not matter that the precise manner of its occurrence (vapour explosion rather than spilled paraffin) was unforeseeable. The 'manner' need not be foreseen.",
    visual: {
      emoji: "🕳️",
      scene: "An open manhole flanked by paraffin lamps under a Victorian street lamp",
      palette: "linear-gradient(135deg,#1a1a1a,#3a3a1a)",
    },
    importance: 3,
  },

  // ─────────────────────────────────────────────────────────────────────
  // Chapter 22 — Occupiers' liability (1957 & 1984 Acts)
  // All citations verified against Wortley/Price/Briggs OCR A Level Law
  // 2nd ed (Hodder, 2021), Table of Cases pp. xi–xiii and chapter text.
  // ─────────────────────────────────────────────────────────────────────

  {
    id: "wheat-v-lacon",
    name: "Wheat v E Lacon & Co",
    year: 1966,
    area: "tort",
    topics: ["occupiers-liability"],
    facts:
      "A paying guest at a pub fell down an unlit back staircase and was killed. The pub was owned by the brewery (Lacon) but managed by a publican who lived upstairs and took in guests. The widow sued the brewery as occupier.",
    principle:
      "Anyone with a sufficient degree of control over premises is an 'occupier' under the Occupiers' Liability Act 1957. There can be more than one occupier of the same premises; control, not ownership or exclusive possession, is the test.",
    visual: {
      emoji: "🍺",
      scene: "An unlit pub back staircase with a brewery sign above the door",
      palette: "linear-gradient(135deg,#2a1a10,#5a3a20)",
    },
    importance: 3,
  },
  {
    id: "roles-v-nathan",
    name: "Roles v Nathan",
    year: 1963,
    area: "tort",
    topics: ["occupiers-liability"],
    facts:
      "Two chimney sweeps were warned by a heating engineer not to work on a coke-fired boiler while it was alight because of carbon monoxide fumes. They ignored the warning, continued sealing the flue with the fire lit, and were killed.",
    principle:
      "Under s.2(3)(b) of the 1957 Act an occupier may expect a person exercising a calling to appreciate and guard against risks ordinarily incidental to that calling. Specialists take their trade risks with them.",
    visual: {
      emoji: "🧹",
      scene: "A chimney sweep silhouette beside a lit coke boiler with fumes",
      palette: "linear-gradient(135deg,#1a1a1a,#4a3020)",
    },
    importance: 3,
  },
  {
    id: "phipps-v-rochester",
    name: "Phipps v Rochester Corporation",
    year: 1955,
    area: "tort",
    topics: ["occupiers-liability"],
    facts:
      "A five-year-old boy walking with his seven-year-old sister across a building site fell into a deep trench dug by the Corporation and broke his leg. The children were unaccompanied by an adult.",
    principle:
      "An occupier is entitled to assume that prudent parents will not allow very young children to go unaccompanied into places of obvious danger. The duty to a child visitor is not absolute; the occupier may share responsibility with the parents.",
    visual: {
      emoji: "🚧",
      scene: "A deep building-site trench with two small child silhouettes on the edge",
      palette: "linear-gradient(135deg,#3a2a1a,#6a5030)",
    },
    importance: 2,
  },
  {
    id: "glasgow-corp-v-taylor",
    name: "Glasgow Corporation v Taylor",
    year: 1922,
    area: "tort",
    topics: ["occupiers-liability"],
    facts:
      "A seven-year-old boy ate poisonous berries from a shrub in a public park maintained by the Corporation. The berries looked like cherries; there was no warning and no fence around the shrub. The child died.",
    principle:
      "An occupier must be prepared for children to be less careful than adults (s.2(3)(a) 1957 Act). Items attractive to children which conceal a hidden danger ('allurements') give rise to a higher standard of care.",
    visual: {
      emoji: "🍒",
      scene: "A park shrub with bright berries and a small child silhouette reaching",
      palette: "linear-gradient(135deg,#1a2a1a,#4a1a2a)",
    },
    importance: 3,
  },
  {
    id: "jolley-v-sutton",
    name: "Jolley v London Borough of Sutton",
    year: 2000,
    area: "tort",
    topics: ["occupiers-liability"],
    facts:
      "An abandoned boat had lain on Council land for two years. Children regularly played on it. Two 14-year-olds jacked it up to repair it; the boat fell on one of them, causing paraplegia.",
    principle:
      "The occupier is liable where the type of harm to a child visitor is reasonably foreseeable, even if the precise manner is not. Foreseeability is judged broadly when children are known to play on the danger.",
    visual: {
      emoji: "⛵",
      scene: "An abandoned upturned boat on rough ground with a child silhouette beneath",
      palette: "linear-gradient(135deg,#1a2a3a,#3a4a2a)",
    },
    importance: 3,
  },
  {
    id: "tomlinson-v-congleton",
    name: "Tomlinson v Congleton Borough Council",
    year: 2003,
    area: "tort",
    topics: ["occupiers-liability"],
    facts:
      "Tomlinson, aged 18, ignored prominent 'No Swimming — Dangerous Water' signs at a lake in a Council country park, ran in and dived into shallow water, breaking his neck. As a swimmer he was a trespasser under the 1984 Act.",
    principle:
      "No duty is owed under the 1984 Act in respect of risks willingly accepted, especially obvious risks arising from a person's own activity rather than the state of the premises. Social utility and personal autonomy weigh against imposing liability.",
    visual: {
      emoji: "🏊",
      scene: "A lake with a 'no swimming' sign and a diver silhouette mid-air",
      palette: "linear-gradient(135deg,#1a3a4a,#3a5a6a)",
    },
    importance: 3,
  },
  {
    id: "ratcliff-v-mcconnell",
    name: "Ratcliff v McConnell",
    year: 1999,
    area: "tort",
    topics: ["occupiers-liability"],
    facts:
      "A 19-year-old student climbed over a locked gate at night and dived into the shallow end of his college swimming pool. He struck the bottom and was paralysed. He was a trespasser; warning signs were posted.",
    principle:
      "Under the 1984 Act an adult trespasser is taken to appreciate obvious risks (such as diving into a pool of unknown depth). No duty arises where the danger was self-evident and the trespasser chose to take the risk.",
    visual: {
      emoji: "🏊‍♂️",
      scene: "A locked pool gate at night with a swimmer silhouette mid-dive",
      palette: "linear-gradient(135deg,#0a1a3a,#2a3a5a)",
    },
    importance: 3,
  },
  {
    id: "keown-v-coventry",
    name: "Keown v Coventry Healthcare NHS Trust",
    year: 2006,
    area: "tort",
    topics: ["occupiers-liability"],
    facts:
      "An 11-year-old boy climbed the underside of an external metal fire escape on hospital grounds, fell from height and suffered brain injury. The fire escape itself was sound; the danger came from his climbing it.",
    principle:
      "Under the 1984 Act the duty is owed in respect of dangers due to the state of the premises, not dangers created by the trespasser's own activity. A safe structure misused does not generate a duty.",
    visual: {
      emoji: "🪜",
      scene: "An external metal hospital fire escape with a small climber silhouette",
      palette: "linear-gradient(135deg,#2a2a2a,#4a4a5a)",
    },
    importance: 2,
  },

  // ─────────────────────────────────────────────────────────────────────
  // Chapter 23 — Torts connected to land: private nuisance & Rylands v Fletcher
  // All citations verified against Wortley/Price/Briggs OCR A Level Law
  // 2nd ed (Hodder, 2021), Ch 23 pp. 258–272.
  // ─────────────────────────────────────────────────────────────────────

  {
    id: "sturges-v-bridgman",
    name: "Sturges v Bridgman",
    year: 1879,
    area: "tort",
    topics: ["nuisance-locality"],
    facts:
      "A confectioner had used noisy mortars and pestles in his Wigmore Street kitchen for over 20 years without complaint. A doctor then built a consulting room on the boundary of his own garden and only then began to hear the vibrations. He sued in nuisance.",
    principle:
      "Locality matters: 'what would be a nuisance in Belgrave Square would not necessarily be so in Bermondsey'. 'Coming to the nuisance' is no defence; the prescription period only starts running once the activity becomes an actionable nuisance to the claimant.",
    visual: {
      emoji: "⚕️",
      scene: "A Victorian doctor's consulting-room window beside a smoking confectioner's kitchen",
      palette: "linear-gradient(135deg,#2a1a3a,#5a3a4a)",
    },
    importance: 3,
  },
  {
    id: "miller-v-jackson",
    name: "Miller v Jackson",
    year: 1977,
    area: "tort",
    topics: ["nuisance-locality"],
    facts:
      "A village cricket club had played on the same ground since 1905. A new housing estate was built on adjoining land in 1972; cricket balls regularly landed in the Millers' garden. They sued in nuisance and negligence, seeking an injunction.",
    principle:
      "Cricket was held to be a nuisance, but the Court of Appeal refused an injunction and awarded damages only — the social utility of the activity and the fact that the claimants had 'come to the nuisance' weighed against injunctive relief.",
    visual: {
      emoji: "🏏",
      scene: "A village cricket pavilion beside a row of new-build houses with cricket ball mid-air",
      palette: "linear-gradient(135deg,#1a3a1a,#4a5a3a)",
    },
    importance: 3,
  },
  {
    id: "coventry-v-lawrence",
    name: "Coventry v Lawrence",
    year: 2014,
    area: "tort",
    topics: ["nuisance-locality"],
    facts:
      "The claimants bought a bungalow 850m from a speedway and motocross stadium that had operated since 1975 with planning permission. They complained of noise. The Supreme Court reviewed the law on locality, planning permission and remedies.",
    principle:
      "Planning permission does not authorise a nuisance, though it may be evidence of the character of the locality. 'Coming to the nuisance' is no defence. Courts retain discretion to award damages in lieu of an injunction; each remedy is fact-sensitive.",
    visual: {
      emoji: "🏁",
      scene: "A speedway oval with floodlights and a small bungalow silhouette in the distance",
      palette: "linear-gradient(135deg,#1a1a3a,#4a2a3a)",
    },
    importance: 3,
  },
  {
    id: "christie-v-davey",
    name: "Christie v Davey",
    year: 1893,
    area: "tort",
    topics: ["nuisance-malice"],
    facts:
      "Two semi-detached neighbours fell out. The Christies gave music lessons; the Daveys, in retaliation, deliberately banged on the party wall, blew whistles and beat trays during the lessons to disrupt them.",
    principle:
      "Malice is a powerful factor in establishing a nuisance. An act done deliberately to annoy a neighbour — that would not otherwise be unreasonable — becomes an actionable nuisance because of the malicious intent behind it.",
    visual: {
      emoji: "🥁",
      scene: "A party wall between two terraced houses, music notes one side, banging trays the other",
      palette: "linear-gradient(135deg,#3a1a1a,#5a3a2a)",
    },
    importance: 3,
  },
  {
    id: "robinson-v-kilvert",
    name: "Robinson v Kilvert",
    year: 1889,
    area: "tort",
    topics: ["nuisance-sensitivity"],
    facts:
      "The defendant heated the cellar of a building to manufacture paper boxes. The heat rose into the floor above where the claimant stored unusually heat-sensitive brown paper, which was damaged. Ordinary paper would have been unaffected.",
    principle:
      "There is no liability in nuisance if the damage is caused only because of the claimant's abnormally sensitive use of land. The interference must be such as would affect an ordinary user.",
    visual: {
      emoji: "📄",
      scene: "Warehouse floors stacked with paper; heat lines rising from cellar below",
      palette: "linear-gradient(135deg,#2a1a1a,#5a3a1a)",
    },
    importance: 2,
  },
  {
    id: "network-rail-v-morris",
    name: "Network Rail Infrastructure v Morris",
    year: 2004,
    area: "tort",
    topics: ["nuisance-sensitivity"],
    facts:
      "Morris ran a recording studio near the London-to-Brighton railway. Network Rail installed new signalling track circuits 80 metres away; the electromagnetic emissions interfered with amplification of electric guitars. Morris sued in nuisance.",
    principle:
      "The Robinson v Kilvert sensitivity principle survives as part of the modern foreseeability test: it was not reasonably foreseeable that signalling equipment would interfere with electric guitars 80m away — a use abnormally sensitive to electromagnetic fields.",
    visual: {
      emoji: "🎸",
      scene: "A trackside railway signal beside a recording studio window with a guitar silhouette",
      palette: "linear-gradient(135deg,#1a2a2a,#3a4a4a)",
    },
    importance: 2,
  },
  {
    id: "hunter-v-canary-wharf",
    name: "Hunter v Canary Wharf",
    year: 1997,
    area: "tort",
    topics: ["nuisance-standing"],
    facts:
      "Hundreds of residents in East London complained that the newly-built 250m Canary Wharf tower blocked their television reception. The action included family members and lodgers without any property right in the affected dwellings.",
    principle:
      "Only a person with a proprietary or possessory interest in the land affected (owner, tenant, exclusive licensee) can sue in private nuisance. Family members, lodgers and other occupiers without such an interest have no standing.",
    visual: {
      emoji: "📺",
      scene: "A row of tower-block windows with TV silhouettes and a giant skyscraper looming behind",
      palette: "linear-gradient(135deg,#1a1a2a,#3a3a5a)",
    },
    importance: 3,
  },
  {
    id: "rylands-v-fletcher",
    name: "Rylands v Fletcher",
    year: 1868,
    area: "tort",
    topics: ["rylands"],
    facts:
      "Rylands, a mill owner, hired contractors to build a reservoir on his land. They negligently failed to seal disused mine shafts beneath the site. When filled, the reservoir burst through the shafts and flooded Fletcher's adjoining colliery.",
    principle:
      "Strict liability arises where a person, for their own purposes, brings onto their land and keeps there anything likely to do mischief if it escapes, makes a 'non-natural' use of the land, and the thing escapes and causes foreseeable damage.",
    visual: {
      emoji: "💧",
      scene: "A Victorian mill reservoir bursting through the ground into mine shafts below",
      palette: "linear-gradient(135deg,#1a2a3a,#3a4a5a)",
    },
    importance: 3,
  },
  {
    id: "cambridge-water-v-ecl",
    name: "Cambridge Water Co v Eastern Counties Leather",
    year: 1994,
    area: "tort",
    topics: ["rylands"],
    facts:
      "Eastern Counties Leather had for decades used a chlorinated solvent at its Sawston tannery. Small spillages over the years percolated through the floor and contaminated the chalk aquifer 1.3 miles away, polluting Cambridge Water's borehole.",
    principle:
      "The damage suffered must be a reasonably foreseeable consequence of the escape; foreseeability of the type of damage is now an essential ingredient of liability under Rylands v Fletcher, aligning the rule with the law of nuisance.",
    visual: {
      emoji: "🧪",
      scene: "A tannery vat with droplets seeping down through layers of chalk to a borehole",
      palette: "linear-gradient(135deg,#1a3a2a,#3a5a3a)",
    },
    importance: 3,
  },
  {
    id: "transco-v-stockport",
    name: "Transco plc v Stockport MBC",
    year: 2003,
    area: "tort",
    topics: ["rylands"],
    facts:
      "A high-pressure water pipe serving a Council tower block leaked undetected. The water saturated an embankment which collapsed, exposing and threatening a high-pressure gas main owned by Transco. Transco recovered the cost of repair under Rylands.",
    principle:
      "Rylands v Fletcher is a sub-tort of private nuisance, confined to escapes causing damage to land or proprietary interests. 'Non-natural use' requires an extraordinary and unusual use creating exceptional risk; routine piped water does not qualify, but the test is restated in those terms.",
    visual: {
      emoji: "🚰",
      scene: "A cracked municipal water main beneath a tower block with a gas pipe exposed in eroded soil",
      palette: "linear-gradient(135deg,#2a2a3a,#4a4a5a)",
    },
    importance: 3,
  },

  // ─────────────────────────────────────────────────────────────────────
  // Chapter 24 — Vicarious liability
  // Wortley/Price/Briggs OCR A Level Law 2nd ed (Hodder, 2021) pp. 272–280.
  // ─────────────────────────────────────────────────────────────────────

  {
    id: "carmichael-v-national-power",
    name: "Carmichael v National Power",
    year: 1999,
    area: "tort",
    topics: ["vicarious-status"],
    facts:
      "Tour guides at a power station worked 'on a casual as required basis'. They were free to accept or refuse work; the employer was not bound to offer it. They claimed employee status to obtain written terms.",
    principle:
      "Mutuality of obligation is a necessary ingredient of a contract of employment. Without an obligation on the employer to provide work and on the worker to accept it, there is no employment relationship — and therefore no vicarious liability.",
    visual: {
      emoji: "🏭",
      scene: "Cooling-tower silhouette with a clipboard and a question mark over a roster of names",
      palette: "linear-gradient(135deg,#2a2a3a,#4a4a5a)",
    },
    importance: 2,
  },
  {
    id: "ferguson-v-dawson",
    name: "Ferguson v Dawson",
    year: 1976,
    area: "tort",
    topics: ["vicarious-status"],
    facts:
      "A builder labelled his workers 'self-employed labour only' subcontractors. Ferguson fell from a roof. The label was treated as decisive by the employer; in substance he worked exclusively for Dawson, used their tools and took their orders.",
    principle:
      "The multiple / economic-reality test looks past the label to the substance: control, integration, who provides equipment, who bears financial risk and chance of profit. The court will treat the worker as an employee where economic reality demands it.",
    visual: {
      emoji: "🏗️",
      scene: "Scaffold and a falling figure silhouette beside a torn 'self-employed' contract",
      palette: "linear-gradient(135deg,#2a1a1a,#5a3a2a)",
    },
    importance: 3,
  },
  {
    id: "cox-v-moj",
    name: "Cox v Ministry of Justice",
    year: 2016,
    area: "tort",
    topics: ["vicarious-status"],
    facts:
      "Mrs Cox, the catering manager at HMP Swansea, was injured when a prisoner working in the kitchen negligently dropped a sack of rice on her back. Prisoners are not employees and are not paid market wages.",
    principle:
      "Vicarious liability extends to relationships 'akin to employment' where the tortfeasor's activity is integral to the defendant's enterprise and creates the risk of the tort. The Ministry was vicariously liable for the prisoner's negligence.",
    visual: {
      emoji: "🍚",
      scene: "Prison kitchen silhouette with a sack falling and a uniformed figure behind bars",
      palette: "linear-gradient(135deg,#1a1a2a,#3a3a4a)",
    },
    importance: 3,
  },
  {
    id: "century-insurance-v-ni-road-transport",
    name: "Century Insurance v Northern Ireland Road Transport Board",
    year: 1942,
    area: "tort",
    topics: ["vicarious-course"],
    facts:
      "A petrol tanker driver, while delivering petrol to an underground tank at a garage, lit a cigarette and threw the match on the ground. The resulting explosion destroyed the garage and several vehicles.",
    principle:
      "A negligent or even prohibited mode of doing an authorised act can still be in the course of employment. Smoking while unloading petrol was a careless way of doing what he was paid to do; the employer was vicariously liable.",
    visual: {
      emoji: "🚒",
      scene: "Petrol tanker beside a forecourt with a lit match falling and explosion arcs",
      palette: "linear-gradient(135deg,#3a1a1a,#5a3a1a)",
    },
    importance: 3,
  },
  {
    id: "limpus-v-london-general",
    name: "Limpus v London General Omnibus",
    year: 1862,
    area: "tort",
    topics: ["vicarious-course"],
    facts:
      "An omnibus driver, expressly forbidden by his employer from racing or obstructing rival buses, did exactly that and caused a collision with Limpus's bus. The employer relied on the written prohibition as a defence.",
    principle:
      "An express prohibition does not automatically take an act outside the course of employment. The driver was still doing what he was paid to do — driving the bus — just in a forbidden way. The employer was vicariously liable.",
    visual: {
      emoji: "🚌",
      scene: "Two horse-drawn omnibuses racing wheel-to-wheel with a collision burst",
      palette: "linear-gradient(135deg,#2a1a2a,#4a3a3a)",
    },
    importance: 3,
  },
  {
    id: "rose-v-plenty",
    name: "Rose v Plenty",
    year: 1976,
    area: "tort",
    topics: ["vicarious-course"],
    facts:
      "A milkman, contrary to express instructions, paid a 13-year-old boy to help him on his rounds. The boy was injured by the milkman's negligent driving of the milk float.",
    principle:
      "Where the prohibited act is done to further the employer's business, it remains within the course of employment. The employer benefited from a faster round, so was vicariously liable despite the express prohibition on helpers.",
    visual: {
      emoji: "🥛",
      scene: "Electric milk float with a small figure clinging to the back and bottles toppling",
      palette: "linear-gradient(135deg,#1a2a2a,#3a4a4a)",
    },
    importance: 3,
  },
  {
    id: "twine-v-beans-express",
    name: "Twine v Bean's Express",
    year: 1946,
    area: "tort",
    topics: ["vicarious-course"],
    facts:
      "A van driver was expressly instructed not to give lifts. He gave a lift to Twine, who was killed when the driver crashed. The notice in the cab confirmed unauthorised passengers travelled at their own risk.",
    principle:
      "Where the prohibited act is done purely for the benefit of the third party (a forbidden hitch-hiker, not a helper), the employee is on a frolic of his own and the employer is not vicariously liable.",
    visual: {
      emoji: "🚐",
      scene: "Delivery van interior with two silhouettes and a 'no passengers' sign hanging in the cab",
      palette: "linear-gradient(135deg,#2a2a1a,#4a4a2a)",
    },
    importance: 3,
  },
  {
    id: "hilton-v-thomas-burton",
    name: "Hilton v Thomas Burton (Rhodes) Ltd",
    year: 1961,
    area: "tort",
    topics: ["vicarious-course"],
    facts:
      "Demolition workers took the firm's van on an unauthorised seven-mile detour for tea at a café. On the return journey one was killed by the negligent driving of another. His widow sued the employer.",
    principle:
      "Employees on an unauthorised detour purely for their own purposes — a classic 'frolic of their own' — fall outside the course of employment. The employer was not vicariously liable.",
    visual: {
      emoji: "☕",
      scene: "Works van parked outside a roadside café with steaming mugs and a long detour arrow",
      palette: "linear-gradient(135deg,#2a1a1a,#4a3a2a)",
    },
    importance: 2,
  },
  {
    id: "lister-v-hesley-hall",
    name: "Lister v Hesley Hall",
    year: 2001,
    area: "tort",
    topics: ["vicarious-connection"],
    facts:
      "The warden of a residential school for boys with behavioural difficulties systematically sexually abused pupils in his care. The boys sued the school as vicariously liable. Abuse is plainly never an 'authorised mode' of caring.",
    principle:
      "The House of Lords replaced the Salmond 'authorised mode' test with the close connection test: an employer is vicariously liable for an employee's intentional wrong where it is so closely connected with the employment that it is fair and just to impose liability.",
    visual: {
      emoji: "🏫",
      scene: "Dormitory door silhouette with a single warden key and an outline of a child's bunk",
      palette: "linear-gradient(135deg,#1a1a2a,#3a2a3a)",
    },
    importance: 3,
  },
  {
    id: "mohamud-v-morrisons",
    name: "Mohamud v Morrisons Supermarkets",
    year: 2016,
    area: "tort",
    topics: ["vicarious-connection"],
    facts:
      "A petrol-station kiosk attendant followed a customer onto the forecourt after a verbal exchange and subjected him to a brutal racist assault. The Supreme Court asked whether the assault was closely connected to his employment.",
    principle:
      "The close-connection test has two stages: (1) what 'field of activities' was entrusted to the employee, and (2) was there a sufficient connection between that field and the wrongful conduct. Serving customers was his job; the assault was an unbroken continuation, so Morrisons was liable.",
    visual: {
      emoji: "⛽",
      scene: "Petrol-station forecourt with a kiosk window silhouette and two figures in confrontation",
      palette: "linear-gradient(135deg,#1a2a1a,#3a4a2a)",
    },
    importance: 3,
  },

  // ─────────────────────────────────────────────────────────────────────
  // Chapter 25 — Defences in tort
  // Wortley/Price/Briggs OCR A Level Law 2nd ed (Hodder, 2021) pp. 281–284.
  // ─────────────────────────────────────────────────────────────────────

  {
    id: "oconnell-v-jackson",
    name: "O'Connell v Jackson",
    year: 1972,
    area: "tort",
    topics: ["contributory-negligence"],
    facts:
      "A motorcyclist who was not wearing a crash helmet was injured by Jackson's negligent driving. Liability was admitted; the question was whether the failure to wear a helmet reduced his damages.",
    principle:
      "Failure to take reasonable care for one's own safety (here, not wearing a helmet) is contributory negligence under the Law Reform (Contributory Negligence) Act 1945. Damages were reduced by 15%.",
    visual: {
      emoji: "🏍️",
      scene: "Motorcycle leaning beside a kerb with an unworn helmet on the ground and a car silhouette",
      palette: "linear-gradient(135deg,#2a1a2a,#4a2a3a)",
    },
    importance: 2,
  },
  {
    id: "froom-v-butcher",
    name: "Froom v Butcher",
    year: 1976,
    area: "tort",
    topics: ["contributory-negligence"],
    facts:
      "Froom was injured in a head-on collision caused by Butcher's negligent driving. Froom was not wearing a seatbelt, contrary to his usual habit. He argued seatbelts were a matter of personal choice.",
    principle:
      "Lord Denning set out a sliding scale of contributory-negligence reductions for seatbelt failure: 25% if the belt would have prevented the injury entirely, 15% if it would have reduced its severity, nil if it would have made no difference.",
    visual: {
      emoji: "🚗",
      scene: "Front of a car with a windscreen impact star, an empty driver seat with the seatbelt visibly unclipped",
      palette: "linear-gradient(135deg,#2a1a1a,#4a2a2a)",
    },
    importance: 3,
  },
  {
    id: "sayers-v-harlow",
    name: "Sayers v Harlow Urban District Council",
    year: 1958,
    area: "tort",
    topics: ["contributory-negligence"],
    facts:
      "Mrs Sayers became trapped in a public toilet cubicle with a faulty lock. While trying to climb out, she stood on the toilet-roll holder, which gave way; she fell and was injured.",
    principle:
      "Damages were reduced by 25% for contributory negligence — the Council was liable for the defective lock, but the manner of her escape attempt fell below the standard of care she owed to herself.",
    visual: {
      emoji: "🚪",
      scene: "Public toilet cubicle door with a faulty lock and a small figure mid-fall from a roll holder",
      palette: "linear-gradient(135deg,#1a2a2a,#3a4a4a)",
    },
    importance: 2,
  },
  {
    id: "jayes-v-imi-kynoch",
    name: "Jayes v IMI (Kynoch) Ltd",
    year: 1985,
    area: "tort",
    topics: ["contributory-negligence"],
    facts:
      "Jayes, an experienced factory worker, removed the safety guard from a machine to clear a blockage and lost a finger. He sued his employer for breach of statutory duty.",
    principle:
      "A claimant can be held 100% contributorily negligent where they are solely the cause of their own injury. Removing the guard on a machine he knew was dangerous left him entirely at fault.",
    visual: {
      emoji: "⚙️",
      scene: "Industrial machine with a detached safety guard tipped to one side and a glove on the floor",
      palette: "linear-gradient(135deg,#2a2a1a,#4a4a2a)",
    },
    importance: 2,
  },
  {
    id: "smith-v-baker",
    name: "Smith v Baker & Sons",
    year: 1891,
    area: "tort",
    topics: ["volenti"],
    facts:
      "Smith worked drilling rock; overhead a crane repeatedly swung heavy stones over his head. He knew of the danger and had complained. One day a stone fell and injured him. His employer pleaded volenti.",
    principle:
      "Mere knowledge of a risk is not consent. The claimant knew of the danger but did not freely accept the lack of care by the crane operators. Volenti requires full understanding of the risk AND a free and voluntary acceptance of it.",
    visual: {
      emoji: "🪨",
      scene: "Industrial yard with a crane jib overhead and a falling stone above a workman's silhouette",
      palette: "linear-gradient(135deg,#2a1a1a,#5a3a2a)",
    },
    importance: 3,
  },
  {
    id: "haynes-v-harwood",
    name: "Haynes v Harwood",
    year: 1935,
    area: "tort",
    topics: ["volenti"],
    facts:
      "Harwood's servant left a two-horse van unattended in a busy street. The horses bolted when a boy threw a stone. PC Haynes, on duty, ran out and stopped them but was seriously injured in doing so.",
    principle:
      "The rescuer principle: volenti does not apply to a person acting under a legal or moral duty to intervene. Because PC Haynes was a policeman bound to protect the public, his act was not truly voluntary.",
    visual: {
      emoji: "🐎",
      scene: "Two bolting horses with reins flailing and a uniformed figure stepping in to grasp the bridle",
      palette: "linear-gradient(135deg,#1a2a2a,#3a4a5a)",
    },
    importance: 3,
  },
];

export const CASES_BY_ID: Record<string, LawCase> = Object.fromEntries(
  CASES.map((c) => [c.id, c]),
);
