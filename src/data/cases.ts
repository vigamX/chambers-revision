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
    year: 1987,
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
    year: 1995,
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
    year: 1985,
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
    year: 1985,
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
    year: 1970,
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
];

export const CASES_BY_ID: Record<string, LawCase> = Object.fromEntries(
  CASES.map((c) => [c.id, c]),
);
