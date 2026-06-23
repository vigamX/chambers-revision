import type { LegalArea } from "../types";

export interface ConceptDrill {
  prompt: string;
  answer: string;
  markScheme?: string;
}

export interface ConceptCard {
  id: string;
  area: LegalArea;
  chapter: string;
  title: string;
  subtitle: string;
  statute?: string;
  keyPoints: string[];
  caseIds: string[];
  drills: ConceptDrill[];
}

export const CONCEPT_CARDS: ConceptCard[] = [
  {
    id: "cc-assault",
    area: "criminal",
    chapter: "Non-fatal offences",
    title: "Assault",
    subtitle: "Common assault — putting V in apprehension of force",
    statute: "s.39 Criminal Justice Act 1988 (common law definition)",
    keyPoints: [
      "AR: any act causing V to apprehend immediate, unlawful, personal violence",
      "Words alone can suffice (R v Ireland — silent phone calls; R v Constanza — letters)",
      "Words can also negate an apparent threat (Tuberville v Savage — 'were it not assize-time…')",
      "'Immediate' means imminent, not instantaneous (Smith v CS Woking — V at window)",
      "MR: intention OR Cunningham (subjective) recklessness as to causing apprehension of force",
    ],
    caseIds: [
      "r-v-ireland",
      "r-v-constanza",
      "tuberville-v-savage",
      "smith-v-cs-woking",
      "collins-v-wilcock",
    ],
    drills: [
      {
        prompt: "What are the two elements of the actus reus of assault?",
        answer: "An act (or words) that causes V to apprehend immediate and unlawful personal violence.",
        markScheme: "1 mark: act/words causing apprehension. 1 mark: immediate + unlawful violence.",
      },
      {
        prompt: "Can silence amount to an assault? Authority?",
        answer: "Yes — silent telephone calls were held to be an assault in R v Ireland (1997).",
      },
      {
        prompt: "What does 'immediate' mean in the context of assault?",
        answer: "Imminent rather than instantaneous — V must fear that violence could occur in the near future (Smith v CS Woking — V at her window).",
      },
      {
        prompt: "How can words negate what would otherwise be an assault?",
        answer: "Words can take the menace out of the threat — Tuberville v Savage: 'If it were not assize-time, I would not take such language from you' negated the hand-on-sword.",
      },
      {
        prompt: "State the mens rea of assault.",
        answer: "Intention to cause V to apprehend immediate unlawful force, OR Cunningham recklessness as to whether V will so apprehend.",
        markScheme: "1 mark: intent OR recklessness. 1 mark: as to V apprehending force.",
      },
      {
        prompt: "Maximum sentence and mode of trial for common assault?",
        answer: "Summary only; 6 months / level 5 fine (s.39 CJA 1988).",
      },
    ],
  },
  {
    id: "cc-battery",
    area: "criminal",
    chapter: "Non-fatal offences",
    title: "Battery",
    subtitle: "Common battery — application of unlawful force",
    statute: "s.39 Criminal Justice Act 1988 (common law definition)",
    keyPoints: [
      "AR: the application of unlawful force on another person",
      "Force can be the slightest touch (Collins v Wilcock — PC grabbing arm)",
      "Force can be indirect (DPP v K — acid placed in hand dryer; DPP v Santa-Bermudez — needle in pocket)",
      "There is implied consent to the everyday jostling of life (Collins v Wilcock)",
      "MR: intention OR Cunningham recklessness as to the application of unlawful force",
    ],
    caseIds: ["collins-v-wilcock", "dpp-v-k", "dpp-v-santa-bermudez", "fagan-v-mpc"],
    drills: [
      {
        prompt: "Define the actus reus of battery.",
        answer: "The application of unlawful force on another person — however slight (Collins v Wilcock).",
      },
      {
        prompt: "What is the leading authority that battery does NOT require violence?",
        answer: "Collins v Wilcock (1984) — a police officer grabbing a woman's arm was held to be a battery; any unlawful touching suffices.",
      },
      {
        prompt: "Can battery be committed indirectly? Give two authorities.",
        answer: "Yes — DPP v K (1990, acid placed in a school hand-dryer) and DPP v Santa-Bermudez (2003, needle concealed in pocket during a pat-down).",
      },
      {
        prompt: "How was the AR/MR coincidence rule applied in Fagan v MPC?",
        answer: "Fagan unintentionally drove onto a PC's foot (AR), then refused to move when told (MR formed). The court treated his act as continuing, so AR and MR coincided.",
      },
      {
        prompt: "Mens rea of battery?",
        answer: "Intention OR Cunningham recklessness as to the application of unlawful force on V.",
        markScheme: "1 mark: intent OR recklessness. 1 mark: as to applying unlawful force.",
      },
    ],
  },
  {
    id: "cc-abh",
    area: "criminal",
    chapter: "Non-fatal offences",
    title: "Actual Bodily Harm (ABH)",
    subtitle: "s.47 OAPA 1861 — assault occasioning actual bodily harm",
    statute: "Offences Against the Person Act 1861 s.47",
    keyPoints: [
      "AR: an assault or battery (the trigger offence) that occasions actual bodily harm",
      "ABH = any hurt or injury calculated to interfere with V's health or comfort — more than transient or trifling (R v Chan-Fook)",
      "Includes psychiatric injury — but not mere emotions (R v Chan-Fook)",
      "Cutting off a substantial amount of hair can be ABH (DPP v Smith 2006)",
      "MR: only the MR for the underlying assault/battery — no need to foresee the harm (R v Roberts; R v Savage)",
    ],
    caseIds: [
      "r-v-chan-fook",
      "r-v-roberts",
      "r-v-parmenter",
      "dpp-v-smith",
      "collins-v-wilcock",
    ],
    drills: [
      {
        prompt: "What are the three elements of s.47 ABH?",
        answer: "(1) An assault or battery, (2) occasioning, (3) actual bodily harm.",
      },
      {
        prompt: "Define 'actual bodily harm' per R v Chan-Fook.",
        answer: "Any hurt or injury calculated to interfere with V's health or comfort — more than merely transient or trifling.",
      },
      {
        prompt: "Does s.47 cover psychiatric injury?",
        answer: "Yes — recognised psychiatric injury qualifies (R v Chan-Fook), but mere emotions like fear, distress or panic do not.",
      },
      {
        prompt: "What mens rea must the prosecution prove for s.47 ABH?",
        answer: "Only the MR of the underlying assault or battery. There is no need to prove D foresaw the actual harm (R v Roberts confirmed; R v Parmenter).",
        markScheme: "1 mark: MR of underlying offence only. 1 mark: no foresight of harm needed.",
      },
      {
        prompt: "Maximum sentence for s.47?",
        answer: "5 years' imprisonment (triable either way).",
      },
    ],
  },
  {
    id: "cc-s20-gbh",
    area: "criminal",
    chapter: "Non-fatal offences",
    title: "s.20 GBH / Wounding",
    subtitle: "s.20 OAPA 1861 — malicious wounding or inflicting GBH",
    statute: "Offences Against the Person Act 1861 s.20",
    keyPoints: [
      "AR: unlawfully and maliciously (a) wound, or (b) inflict grievous bodily harm",
      "'Wound' = break in BOTH layers of skin (JCC v Eisenhower — bruising under eye not enough)",
      "'GBH' = really serious harm (DPP v Smith); judged on V's characteristics (R v Bollom)",
      "Includes psychiatric (R v Burstow) and biological (R v Dica — HIV) harm",
      "MR: intention OR Cunningham recklessness as to causing SOME harm — not full GBH (R v Mowatt; R v Parmenter)",
    ],
    caseIds: [
      "jcc-v-eisenhower",
      "dpp-v-smith",
      "r-v-bollom",
      "r-v-burstow",
      "r-v-dica",
      "r-v-mowatt",
      "r-v-parmenter",
    ],
    drills: [
      {
        prompt: "Define a 'wound' for s.20 purposes.",
        answer: "A break in the continuity of BOTH layers of skin (dermis and epidermis) — internal bleeding under the skin is not enough (JCC v Eisenhower).",
      },
      {
        prompt: "What is the test for grievous bodily harm?",
        answer: "Really serious harm (DPP v Smith). Judged on the particular victim's age, health and characteristics (R v Bollom — bruising on a baby qualified).",
      },
      {
        prompt: "Can transmitting a disease amount to GBH? Authority?",
        answer: "Yes — recklessly transmitting HIV through unprotected sex was GBH in R v Dica (2004).",
      },
      {
        prompt: "State the mens rea for s.20 GBH.",
        answer: "Intention or Cunningham recklessness as to causing SOME harm — D need only foresee some physical harm, not GBH itself (R v Mowatt; R v Parmenter).",
        markScheme: "1 mark: intent OR Cunningham reckless. 1 mark: as to SOME harm (not GBH).",
      },
      {
        prompt: "Maximum sentence for s.20?",
        answer: "5 years' imprisonment (triable either way) — same as s.47, despite being a more serious offence.",
      },
    ],
  },
  {
    id: "cc-s18-gbh",
    area: "criminal",
    chapter: "Non-fatal offences",
    title: "s.18 GBH with intent",
    subtitle: "s.18 OAPA 1861 — wounding or causing GBH with intent",
    statute: "Offences Against the Person Act 1861 s.18",
    keyPoints: [
      "AR: same as s.20 — wound OR cause GBH (note: 'cause' is wider than s.20's 'inflict')",
      "MR is the distinguishing element — requires SPECIFIC intent",
      "Either: (a) intent to do GBH, OR (b) intent to resist or prevent lawful apprehension + reckless as to GBH",
      "Recklessness alone is NOT enough (R v Belfon)",
      "Maximum sentence: life imprisonment — indictable only",
    ],
    caseIds: ["r-v-belfon", "dpp-v-smith", "r-v-burstow"],
    drills: [
      {
        prompt: "What is the actus reus of s.18 GBH?",
        answer: "Wounding OR causing GBH — same physical outcome as s.20 (note: 'cause' is wider than s.20's 'inflict').",
      },
      {
        prompt: "What makes s.18 more serious than s.20?",
        answer: "The mens rea — s.18 requires specific intent to cause GBH (or intent to resist arrest with recklessness as to GBH). Recklessness alone is insufficient for s.18 (R v Belfon).",
      },
      {
        prompt: "State both alternative mens rea limbs of s.18.",
        answer: "(1) Intent to cause GBH, OR (2) intent to resist/prevent lawful apprehension PLUS recklessness as to causing GBH.",
        markScheme: "1 mark for each limb correctly stated.",
      },
      {
        prompt: "What is the maximum sentence and mode of trial for s.18?",
        answer: "Life imprisonment; indictable only (Crown Court).",
      },
      {
        prompt: "Why does R v Belfon matter for s.18?",
        answer: "It confirmed that recklessness alone, without specific intent to cause GBH, will not satisfy s.18 — D must be charged under s.20 if only recklessness is proved.",
      },
    ],
  },
  {
    id: "cc-murder",
    area: "criminal",
    chapter: "Fatal offences",
    title: "Murder",
    subtitle: "The common-law offence",
    statute: "Common law (Coke's definition) + Homicide Act 1957",
    keyPoints: [
      "AR: unlawful killing of a reasonable person in being under the King's Peace",
      "Killing must be factually AND legally caused by D (Pagett, Smith, Cheshire)",
      "MR (malice aforethought): intent to kill OR intent to cause GBH (R v Vickers; R v Cunningham 1981 HL)",
      "Oblique intent: jury may find intent where death/GBH was a virtual certainty AND D appreciated this (R v Woollin)",
      "Mandatory life sentence (Murder (Abolition of Death Penalty) Act 1965)",
    ],
    caseIds: [
      "r-v-vickers",
      "r-v-woollin",
      "r-v-moloney",
      "r-v-matthews-alleyne",
      "r-v-pagett",
      "r-v-cheshire",
    ],
    drills: [
      {
        prompt: "State the four elements of the actus reus of murder.",
        answer: "(1) Unlawful killing, (2) of a reasonable person in being, (3) under the King's Peace, (4) caused by D's act or omission.",
        markScheme: "1 mark per element correctly stated (up to 4).",
      },
      {
        prompt: "What is 'malice aforethought'?",
        answer: "The mens rea of murder: intention to kill OR intention to cause GBH (R v Vickers).",
      },
      {
        prompt: "State the Woollin direction on oblique intent.",
        answer: "The jury is not entitled to find intent unless they feel sure that death or serious bodily harm was a virtual certainty (barring something unforeseen) as a result of D's actions, AND that D appreciated that this was the case.",
        markScheme: "1 mark: virtual certainty of death/GBH. 1 mark: D appreciated it. 1 mark: 'not entitled to find' (a finding rule, not a definition).",
      },
      {
        prompt: "What sentence must a court impose for murder?",
        answer: "Mandatory life imprisonment — the judge has no discretion as to the type of sentence.",
      },
      {
        prompt: "How was the Woollin test applied in R v Matthews and Alleyne?",
        answer: "Boys threw V off a bridge into a river knowing he couldn't swim. The Court of Appeal held that Woollin is a rule of evidence — once virtual certainty + appreciation is established, the jury is essentially compelled to find intent.",
      },
    ],
  },
  {
    id: "cc-loss-of-control",
    area: "criminal",
    chapter: "Fatal offences",
    title: "Loss of control",
    subtitle: "Voluntary manslaughter — partial defence to murder",
    statute: "Coroners and Justice Act 2009 ss.54–55",
    keyPoints: [
      "Three components (all required): (1) loss of self-control, (2) qualifying trigger, (3) normal-person test",
      "Loss need not be sudden (s.54(2)) — accommodates slow-burn anger (R v Ahluwalia)",
      "Triggers (s.55): (a) fear of serious violence from V; (b) things said/done of extremely grave character causing justifiable sense of being seriously wronged; (c) combination",
      "Sexual infidelity cannot be the qualifying trigger on its own (s.55(6)(c)) — but context allowed (R v Clinton)",
      "Considered desire for revenge excludes the defence (s.54(4); R v Jewell)",
    ],
    caseIds: ["r-v-ahluwalia", "r-v-clinton", "r-v-jewell"],
    drills: [
      {
        prompt: "Name the three statutory components of loss of control under the Coroners and Justice Act 2009.",
        answer: "(1) D lost self-control, (2) the loss had a qualifying trigger, (3) a person of D's sex and age with a normal degree of tolerance and self-restraint might have reacted in the same or similar way.",
        markScheme: "1 mark per component (3 marks total).",
      },
      {
        prompt: "Must the loss of self-control be sudden?",
        answer: "No — s.54(2) expressly states the loss need not be sudden. This accommodates slow-burn cases (R v Ahluwalia, battered wife).",
      },
      {
        prompt: "What are the two qualifying triggers under s.55?",
        answer: "(a) D's fear of serious violence from V against D or another, and (b) things done or said of an extremely grave character causing D a justifiable sense of being seriously wronged. A combination of (a) and (b) is also a trigger.",
      },
      {
        prompt: "Can sexual infidelity be a qualifying trigger?",
        answer: "Not on its own (s.55(6)(c)). However, R v Clinton (2012) allowed it to be considered as part of the context surrounding other qualifying triggers.",
      },
      {
        prompt: "What single statutory disqualification removes the defence even where all three components are met?",
        answer: "A considered desire for revenge — s.54(4); confirmed in R v Jewell.",
      },
      {
        prompt: "What is the effect of a successful loss of control defence?",
        answer: "Reduces liability from murder to voluntary manslaughter — discretionary sentence (judge can give anything up to life).",
      },
    ],
  },
  {
    id: "cc-diminished-responsibility",
    area: "criminal",
    chapter: "Fatal offences",
    title: "Diminished responsibility",
    subtitle: "Voluntary manslaughter — partial defence to murder",
    statute: "Homicide Act 1957 s.2 (as amended by Coroners and Justice Act 2009)",
    keyPoints: [
      "D bears the burden of proof on the balance of probabilities",
      "Four limbs (all required): (1) abnormality of mental functioning, (2) arising from a recognised medical condition, (3) substantially impaired D's ability, (4) provides an explanation for the killing",
      "Affected abilities: understand the nature of conduct, form a rational judgment, exercise self-control (s.2(1A))",
      "'Substantially' = more than trivial, less than total (R v Golds)",
      "Intoxication alone is not a recognised condition (R v Dietschmann), but alcohol dependence syndrome may be (R v Tandy)",
    ],
    caseIds: ["r-v-byrne", "r-v-golds", "r-v-dietschmann", "r-v-tandy"],
    drills: [
      {
        prompt: "Who bears the burden of proof for diminished responsibility, and to what standard?",
        answer: "D bears the legal burden, on the balance of probabilities (lower civil standard, not the criminal standard).",
      },
      {
        prompt: "State the four elements of diminished responsibility under s.2 Homicide Act 1957.",
        answer: "(1) Abnormality of mental functioning, (2) arising from a recognised medical condition, (3) substantially impairing D's ability to understand the nature of conduct, form a rational judgment, or exercise self-control, (4) which provides an explanation for the killing.",
        markScheme: "1 mark per element (4 marks total).",
      },
      {
        prompt: "How is 'substantially impaired' defined per R v Golds?",
        answer: "Substantially means more than merely trivial but less than total — the impairment must be of real importance.",
      },
      {
        prompt: "Can voluntary intoxication ground diminished responsibility?",
        answer: "Not on its own (R v Dietschmann). The defence may still succeed if there is an underlying recognised condition that, on its own, substantially impaired D. Alcohol dependence syndrome may itself qualify (R v Tandy).",
      },
      {
        prompt: "How does diminished responsibility differ from insanity?",
        answer: "Insanity is a complete defence (special verdict, hospital order); diminished responsibility is a partial defence reducing murder to manslaughter, available only on a murder charge.",
      },
    ],
  },
  {
    id: "cc-duty-of-care",
    area: "tort",
    chapter: "Negligence",
    title: "Duty of care",
    subtitle: "First ingredient of negligence — does the law impose a duty?",
    keyPoints: [
      "Donoghue v Stevenson (1932) — Lord Atkin's neighbour principle: take reasonable care to avoid acts/omissions likely to injure your 'neighbour'",
      "Caparo Industries v Dickman (1990) three-stage test: (1) foreseeability of damage, (2) proximity, (3) fair, just and reasonable to impose a duty",
      "Robinson v CC West Yorkshire (2018) — Caparo only for genuinely novel situations; otherwise apply established precedent (incremental approach)",
      "Public-policy bar on police duty to public at large (Hill v CC West Yorkshire), but specific assumed responsibility creates one (Kent v Griffiths — ambulance)",
      "No general duty to rescue strangers — but pre-existing relationship/voluntary assumption can create one",
    ],
    caseIds: [
      "donoghue-v-stevenson",
      "caparo-v-dickman",
      "robinson-v-ccwy",
      "hill-v-cc-west-yorkshire",
      "kent-v-griffiths",
    ],
    drills: [
      {
        prompt: "State the neighbour principle.",
        answer: "You must take reasonable care to avoid acts or omissions which you can reasonably foresee would be likely to injure your neighbour — i.e. persons so closely and directly affected by your act that you ought reasonably to have them in contemplation (Lord Atkin, Donoghue v Stevenson).",
      },
      {
        prompt: "What are the three stages of the Caparo test?",
        answer: "(1) Reasonable foreseeability of damage to the claimant; (2) sufficient proximity between the parties; (3) it is fair, just and reasonable to impose a duty.",
        markScheme: "1 mark per stage (3 marks total).",
      },
      {
        prompt: "After Robinson v CC West Yorkshire (2018), when is Caparo applied?",
        answer: "Only in genuinely novel situations. Where an established line of authority already recognises a duty (or refuses one), the court applies it incrementally; Caparo is not a universal test.",
      },
      {
        prompt: "Why did the police owe no duty in Hill v CC West Yorkshire?",
        answer: "The Yorkshire Ripper's last victim was one of the public at large — no special proximity, and public policy weighed against imposing a duty that would lead to defensive policing.",
      },
      {
        prompt: "How is Kent v Griffiths distinguished from Hill?",
        answer: "Once the ambulance service accepted the 999 call and gave a specific time of arrival, it had assumed responsibility to that particular caller — proximity was established and a duty arose.",
      },
    ],
  },
  {
    id: "cc-breach-of-duty",
    area: "tort",
    chapter: "Negligence",
    title: "Breach of duty",
    subtitle: "Second ingredient of negligence — has D fallen below the standard of care?",
    keyPoints: [
      "Standard: the reasonable person performing the task in question — objective (Blyth v Birmingham Waterworks)",
      "Professionals: judged by a responsible body of opinion in the profession (Bolam) — provided it is logically defensible (Bolitho)",
      "Learners: judged by the standard of the competent, qualified practitioner (Nettleship v Weston)",
      "Factors raising the standard: magnitude of risk + seriousness of harm (Bolton v Stone — small risk = no breach)",
      "Factors lowering it: cost / practicability of precautions (Latimer v AEC — closing factory disproportionate)",
    ],
    caseIds: [
      "bolam-v-friern-barnet",
      "bolitho-v-city-and-hackney",
      "nettleship-v-weston",
      "bolton-v-stone",
      "latimer-v-aec",
    ],
    drills: [
      {
        prompt: "What is the basic standard of care in negligence?",
        answer: "The standard of the reasonable person performing the same task — wholly objective; D's own inexperience or characteristics are irrelevant.",
      },
      {
        prompt: "State the Bolam test for professional negligence.",
        answer: "A professional is not negligent if they acted in accordance with a practice accepted as proper by a responsible body of medical/professional opinion (Bolam v Friern Barnet Hospital).",
      },
      {
        prompt: "How does Bolitho refine Bolam?",
        answer: "The body of opinion relied on must be capable of withstanding logical analysis — the court will reject opinions that are not logically defensible (Bolitho v City and Hackney HA).",
      },
      {
        prompt: "By what standard is a learner driver judged?",
        answer: "The standard of the reasonably competent, qualified driver — no allowance for inexperience (Nettleship v Weston).",
      },
      {
        prompt: "What two factors did Bolton v Stone weigh in finding no breach?",
        answer: "(1) Very small magnitude of risk (cricket ball over a 17-foot fence, rare event); (2) social utility of the activity (recreational cricket). Reasonable precautions had been taken.",
        markScheme: "1 mark per factor (2 marks total).",
      },
      {
        prompt: "What general factor was decisive in Latimer v AEC?",
        answer: "Cost and practicability of precautions — closing the factory entirely after a flood would have been disproportionate to the residual risk after sawdust was spread.",
      },
    ],
  },
  {
    id: "cc-causation-tort",
    area: "tort",
    chapter: "Negligence",
    title: "Causation & remoteness in tort",
    subtitle: "Third and fourth ingredients — factual link, legal link, and foreseeable type of harm",
    keyPoints: [
      "Factual causation: but-for test (Barnett v Chelsea — but for the negligent failure to examine, V would still have died from arsenic)",
      "Legal causation: D's breach must be the operative and substantial cause; intervening acts may break the chain",
      "Remoteness: type of harm must be reasonably foreseeable (Wagon Mound No 1 — oil-fire damage too remote)",
      "Precise sequence need not be foreseeable, only the TYPE (Hughes v Lord Advocate — paraffin lamp explosion)",
      "Eggshell-skull rule: take your victim as you find them — extent of harm need not be foreseeable",
    ],
    caseIds: [
      "barnett-v-chelsea",
      "wagon-mound-no-1",
      "hughes-v-lord-advocate",
      "bolton-v-stone",
    ],
    drills: [
      {
        prompt: "State the but-for test of factual causation.",
        answer: "But for D's breach of duty, would C have suffered the damage when and as they did? If 'no', the breach is the factual cause; if 'yes', it is not.",
      },
      {
        prompt: "Why did the claim fail on causation in Barnett v Chelsea Hospital?",
        answer: "The doctor's negligent failure to examine the arsenic-poisoned night-watchman was not the factual cause of death — V would have died from the poisoning anyway, so the but-for test was not satisfied.",
      },
      {
        prompt: "Which case replaced the directness test of remoteness with reasonable foreseeability?",
        answer: "The Wagon Mound (No 1) (1961) — Privy Council held that only damage of a reasonably foreseeable type is recoverable.",
      },
      {
        prompt: "What was the key principle in Hughes v Lord Advocate?",
        answer: "Provided the TYPE of harm is reasonably foreseeable, the precise way it occurred need not be — boys burned by a paraffin-lamp explosion at an unattended manhole could recover, even though the explosion itself was unforeseen.",
      },
      {
        prompt: "State the eggshell-skull rule.",
        answer: "D must take their victim as they find them — provided the type of harm is foreseeable, D is liable for the full extent of injury, even if it is greater than would be expected because of V's pre-existing condition.",
      },
    ],
  },
  {
    id: "cc-rylands",
    area: "tort",
    chapter: "Torts connected to land",
    title: "Rylands v Fletcher",
    subtitle: "Strict liability for escapes from land",
    keyPoints: [
      "Originating principle (Blackburn J, 1868): 'a person who, for his own purposes, brings on his lands and collects and keeps there anything likely to do mischief if it escapes…'",
      "Four ingredients (modern statement, Transco v Stockport): (1) accumulation/bringing onto land, (2) thing likely to do mischief if it escapes, (3) non-natural use of land, (4) escape causing foreseeable damage (Cambridge Water)",
      "Strict — fault need not be proved",
      "Foreseeability of damage of the relevant type is required (Cambridge Water v Eastern Counties Leather)",
      "Defences: act of God, act of a stranger, statutory authority, V's own fault, V's consent",
    ],
    caseIds: ["rylands-v-fletcher", "cambridge-water-v-ecl", "transco-v-stockport"],
    drills: [
      {
        prompt: "State Blackburn J's original formulation of the rule in Rylands v Fletcher.",
        answer: "A person who, for his own purposes, brings on his land and collects and keeps there anything likely to do mischief if it escapes, must keep it in at his peril, and is answerable for all damage which is the natural consequence of its escape.",
      },
      {
        prompt: "List the four modern ingredients of a Rylands claim.",
        answer: "(1) D brought onto or accumulated something on the land; (2) the thing was likely to do mischief if it escaped; (3) the use was non-natural (extraordinary and unusual, creating exceptional risk); (4) it did escape and caused damage of a reasonably foreseeable type.",
        markScheme: "1 mark per ingredient (4 marks total).",
      },
      {
        prompt: "What did Cambridge Water v Eastern Counties Leather add to the rule?",
        answer: "Foreseeability of the relevant TYPE of damage is an essential ingredient — aligning Rylands liability with the law of private nuisance.",
      },
      {
        prompt: "How did Transco v Stockport reframe 'non-natural use'?",
        answer: "It must be an extraordinary and unusual use of the land in the circumstances — one that creates an exceptional risk. Routine piped water supply to a tower block did NOT qualify.",
      },
      {
        prompt: "Name four recognised defences to a Rylands claim.",
        answer: "(1) Act of God, (2) act of a stranger, (3) statutory authority, (4) V's own fault or consent. Any of these will defeat liability.",
      },
      {
        prompt: "Is fault required to prove a Rylands claim?",
        answer: "No — it is a strict-liability tort; D's negligence need not be proved. Foreseeability of the type of damage on escape is required, but that is a different question from fault.",
      },
    ],
  },
];

export function conceptCardsForArea(area: LegalArea): ConceptCard[] {
  return CONCEPT_CARDS.filter((c) => c.area === area);
}

export const CONCEPT_CARDS_BY_ID: Record<string, ConceptCard> = Object.fromEntries(
  CONCEPT_CARDS.map((c) => [c.id, c]),
);
