import type { LegalArea } from "../types";

export type HangmanCategory = "case" | "term" | "latin";

export interface HangmanPuzzle {
  id: string;
  answer: string;
  hint: string;
  category: HangmanCategory;
  area: LegalArea | "shared";
}

export const HANGMAN_PUZZLES: HangmanPuzzle[] = [
  // Term 1 — Criminal · case surnames
  { id: "h-woollin", answer: "WOOLLIN", hint: "1998 — virtual certainty test for oblique intent (HL, baby thrown at pram).", category: "case", area: "criminal" },
  { id: "h-cunningham", answer: "CUNNINGHAM", hint: "1957 — subjective recklessness (gas meter, escaping gas).", category: "case", area: "criminal" },
  { id: "h-caldwell", answer: "CALDWELL", hint: "1982 — objective recklessness (later overruled by R v G).", category: "case", area: "criminal" },
  { id: "h-adomako", answer: "ADOMAKO", hint: "1994 — gross negligence manslaughter test (anaesthetist).", category: "case", area: "criminal" },
  { id: "h-ivey", answer: "IVEY", hint: "2017 — current two-stage test for dishonesty (casino card-counting).", category: "case", area: "criminal" },
  { id: "h-ghosh", answer: "GHOSH", hint: "1982 — old two-limb dishonesty test, since overruled.", category: "case", area: "criminal" },
  { id: "h-nedrick", answer: "NEDRICK", hint: "1986 — original virtual certainty direction for oblique intent (refined in Woollin).", category: "case", area: "criminal" },
  { id: "h-blaue", answer: "BLAUE", hint: "1975 — eggshell skull rule (Jehovah's Witness refusing transfusion).", category: "case", area: "criminal" },
  { id: "h-pagett", answer: "PAGETT", hint: "1983 — legal causation, human shield case.", category: "case", area: "criminal" },
  { id: "h-pittwood", answer: "PITTWOOD", hint: "1902 — omission from contractual duty (railway gatekeeper).", category: "case", area: "criminal" },
  { id: "h-hasan", answer: "HASAN", hint: "2005 — modern duress test (HL).", category: "case", area: "criminal" },
  { id: "h-howe", answer: "HOWE", hint: "1987 — no duress defence available for murder.", category: "case", area: "criminal" },
  { id: "h-quick", answer: "QUICK", hint: "1973 — insulin-induced hypoglycaemia = automatism, not insanity.", category: "case", area: "criminal" },
  { id: "h-sullivan", answer: "SULLIVAN", hint: "1984 — epileptic seizure = legal insanity (disease of the mind).", category: "case", area: "criminal" },
  { id: "h-mnaghten", answer: "MNAGHTEN", hint: "1843 — the rules establishing the modern insanity defence.", category: "case", area: "criminal" },
  { id: "h-majewski", answer: "MAJEWSKI", hint: "1977 — voluntary intoxication is no defence to basic intent crimes.", category: "case", area: "criminal" },
  { id: "h-kingston", answer: "KINGSTON", hint: "1995 — involuntary intoxication, drunken intent is still intent (HL).", category: "case", area: "criminal" },
  { id: "h-martin", answer: "MARTIN", hint: "2002 — householder shoots burglar; reasonableness of self-defence force.", category: "case", area: "criminal" },
  { id: "h-brown", answer: "BROWN", hint: "1993 — consent not a defence to sadomasochistic ABH/GBH (Spanner case).", category: "case", area: "criminal" },
  { id: "h-collins", answer: "COLLINS", hint: "1973 — burglary entry case (man on the windowsill).", category: "case", area: "criminal" },
  { id: "h-hinks", answer: "HINKS", hint: "2000 — appropriation can include valid gifts (HL).", category: "case", area: "criminal" },
  { id: "h-gomez", answer: "GOMEZ", hint: "1993 — appropriation widened; consent irrelevant to actus reus of theft.", category: "case", area: "criminal" },
  { id: "h-burgess", answer: "BURGESS", hint: "1991 — sleepwalking GBH classified as insane automatism.", category: "case", area: "criminal" },
  { id: "h-mitchell", answer: "MITCHELL", hint: "1983 — transferred malice (post office queue punch).", category: "case", area: "criminal" },

  // Term 1 — Criminal · legal terms
  { id: "h-mens-rea", answer: "MENS REA", hint: "Latin: the guilty mind. The mental element of a crime.", category: "latin", area: "criminal" },
  { id: "h-actus-reus", answer: "ACTUS REUS", hint: "Latin: the guilty act. The physical element of a crime.", category: "latin", area: "criminal" },
  { id: "h-murder", answer: "MURDER", hint: "Unlawful killing with malice aforethought; mandatory life sentence.", category: "term", area: "criminal" },
  { id: "h-manslaughter", answer: "MANSLAUGHTER", hint: "Unlawful killing without the full mens rea of murder.", category: "term", area: "criminal" },
  { id: "h-burglary", answer: "BURGLARY", hint: "Theft Act 1968 s.9 — entry as a trespasser with intent.", category: "term", area: "criminal" },
  { id: "h-robbery", answer: "ROBBERY", hint: "Theft Act 1968 s.8 — theft using or threatening force.", category: "term", area: "criminal" },
  { id: "h-battery", answer: "BATTERY", hint: "Unlawful application of force, however slight.", category: "term", area: "criminal" },
  { id: "h-insanity", answer: "INSANITY", hint: "Defence based on a defect of reason from disease of the mind.", category: "term", area: "criminal" },
  { id: "h-automatism", answer: "AUTOMATISM", hint: "Involuntary act caused by an external factor — total destruction of voluntary control.", category: "term", area: "criminal" },
  { id: "h-duress", answer: "DURESS", hint: "Defence: I had no real choice — coerced by threats of death or serious injury.", category: "term", area: "criminal" },

  // Term 2 — Tort · case surnames
  { id: "h-donoghue", answer: "DONOGHUE", hint: "1932 — snail in a ginger beer bottle; established the neighbour principle.", category: "case", area: "tort" },
  { id: "h-stevenson", answer: "STEVENSON", hint: "1932 — the ginger beer manufacturer; defendant in the neighbour principle case.", category: "case", area: "tort" },
  { id: "h-caparo", answer: "CAPARO", hint: "1990 — the three-stage test for novel duty of care (foresee, proximity, fair just reasonable).", category: "case", area: "tort" },
  { id: "h-robinson", answer: "ROBINSON", hint: "2018 — modern approach to duty of care; Caparo only for novel cases (Supreme Court).", category: "case", area: "tort" },
  { id: "h-hill", answer: "HILL", hint: "1989 — Yorkshire Ripper; police immunity from negligence claims by the public at large.", category: "case", area: "tort" },
  { id: "h-kent", answer: "KENT", hint: "2000 — ambulance service owed duty of care once it accepted the 999 call.", category: "case", area: "tort" },
  { id: "h-bolam", answer: "BOLAM", hint: "1957 — professional breach test: body of responsible medical opinion.", category: "case", area: "tort" },
  { id: "h-bolitho", answer: "BOLITHO", hint: "1998 — Bolam refined: the body of opinion must be logically defensible.", category: "case", area: "tort" },
  { id: "h-nettleship", answer: "NETTLESHIP", hint: "1971 — learner driver judged by standard of competent qualified driver.", category: "case", area: "tort" },
  { id: "h-bolton", answer: "BOLTON", hint: "1951 — cricket ball over fence; small risk of serious harm not breach.", category: "case", area: "tort" },
  { id: "h-latimer", answer: "LATIMER", hint: "1953 — oily factory floor after flood; sawdust spread, reasonable precautions.", category: "case", area: "tort" },
  { id: "h-barnett", answer: "BARNETT", hint: "1969 — arsenic poisoning, hospital sent man home; no factual causation (but-for test).", category: "case", area: "tort" },
  { id: "h-hughes", answer: "HUGHES", hint: "1963 — paraffin lamp explosion; type of harm foreseeable even if precise sequence not.", category: "case", area: "tort" },
  { id: "h-wagon-mound", answer: "WAGON MOUND", hint: "1961 — Sydney harbour oil spill; remoteness test became reasonable foreseeability.", category: "case", area: "tort" },
  { id: "h-wheat", answer: "WHEAT", hint: "1966 — pub guest fell down back stairs; 'control' test for who is an occupier.", category: "case", area: "tort" },
  { id: "h-roles", answer: "ROLES", hint: "1963 — chimney sweeps killed by fumes; specialists guard their own trade risks.", category: "case", area: "tort" },
  { id: "h-phipps", answer: "PHIPPS", hint: "1955 — 5-year-old in trench on building site; parents assumed to supervise very young children.", category: "case", area: "tort" },
  { id: "h-glasgow-corp", answer: "GLASGOW CORPORATION", hint: "1922 — poisonous berries in a public park; allurements to children.", category: "case", area: "tort" },
  { id: "h-jolley", answer: "JOLLEY", hint: "2000 — abandoned boat fell on teenager; child-visitor foreseeability under 1957 Act.", category: "case", area: "tort" },
  { id: "h-tomlinson", answer: "TOMLINSON", hint: "2003 — diver in shallow lake; no duty under 1984 Act for obvious self-inflicted risks.", category: "case", area: "tort" },
  { id: "h-ratcliff", answer: "RATCLIFF", hint: "1999 — student dived into shallow college pool at night; trespasser, obvious risk.", category: "case", area: "tort" },
  { id: "h-keown", answer: "KEOWN", hint: "2006 — boy climbed hospital fire escape; injury from trespasser's own activity, not premises.", category: "case", area: "tort" },
  { id: "h-sturges", answer: "STURGES", hint: "1879 — doctor's consulting room beside a sweet factory; locality + coming-to-nuisance rule.", category: "case", area: "tort" },
  { id: "h-miller-jackson", answer: "MILLER", hint: "1977 — village cricket club vs new housing estate; nuisance but no injunction.", category: "case", area: "tort" },
  { id: "h-coventry-lawrence", answer: "COVENTRY", hint: "2014 — speedway noise; modern Supreme Court restatement of nuisance, planning permission & remedies.", category: "case", area: "tort" },
  { id: "h-christie", answer: "CHRISTIE", hint: "1893 — neighbour banged trays through party wall to spite music teacher; malice in nuisance.", category: "case", area: "tort" },
  { id: "h-robinson-kilvert", answer: "ROBINSON", hint: "1889 — heat damaged unusually sensitive brown paper; abnormal sensitivity defence.", category: "case", area: "tort" },
  { id: "h-network-rail", answer: "NETWORK RAIL", hint: "2004 — track signals interfered with recording studio guitars; modern sensitivity case.", category: "case", area: "tort" },
  { id: "h-hunter-canary", answer: "HUNTER", hint: "1997 — Canary Wharf blocked TV reception; nuisance standing requires proprietary interest.", category: "case", area: "tort" },
  { id: "h-rylands", answer: "RYLANDS", hint: "1868 — reservoir flooded neighbour's mine; founding case of strict liability for escapes.", category: "case", area: "tort" },
  { id: "h-cambridge-water", answer: "CAMBRIDGE WATER", hint: "1994 — tannery solvent polluted aquifer 1.3 miles away; foreseeability ingredient added to Rylands.", category: "case", area: "tort" },
  { id: "h-transco", answer: "TRANSCO", hint: "2003 — burst council water main exposed gas pipe; modern restatement of Rylands non-natural use.", category: "case", area: "tort" },
  { id: "h-carmichael", answer: "CARMICHAEL", hint: "1999 — power station tour guides 'as required'; mutuality of obligation needed for employment.", category: "case", area: "tort" },
  { id: "h-ferguson-dawson", answer: "FERGUSON", hint: "1976 — labourer fell from roof labelled 'self-employed'; economic-reality test pierces the label.", category: "case", area: "tort" },
  { id: "h-cox-moj", answer: "COX", hint: "2016 — prison kitchen sack injury; vicarious liability extends to 'akin to employment' relationships.", category: "case", area: "tort" },
  { id: "h-century-insurance", answer: "CENTURY INSURANCE", hint: "1942 — petrol tanker driver lit a cigarette; careless mode of an authorised act.", category: "case", area: "tort" },
  { id: "h-limpus", answer: "LIMPUS", hint: "1862 — racing omnibus drivers ignored prohibition; still in the course of employment.", category: "case", area: "tort" },
  { id: "h-rose-plenty", answer: "ROSE", hint: "1976 — milkman's 13-year-old helper injured; prohibited act done to benefit employer.", category: "case", area: "tort" },
  { id: "h-twine", answer: "TWINE", hint: "1946 — forbidden lift in delivery van; frolic of his own, employer not liable.", category: "case", area: "tort" },
  { id: "h-hilton-burton", answer: "HILTON", hint: "1961 — demolition workers' tea-break detour; classic frolic outside course of employment.", category: "case", area: "tort" },
  { id: "h-lister", answer: "LISTER", hint: "2001 — school warden abuse; House of Lords introduced the close-connection test.", category: "case", area: "tort" },
  { id: "h-mohamud", answer: "MOHAMUD", hint: "2016 — petrol-station attendant attacked customer; close-connection test reaffirmed.", category: "case", area: "tort" },
  { id: "h-oconnell", answer: "OCONNELL", hint: "1972 — motorcyclist not wearing a helmet; 15% reduction for contributory negligence.", category: "case", area: "tort" },
  { id: "h-froom", answer: "FROOM", hint: "1976 — seatbelt case; Lord Denning's 25/15/0 sliding scale of contributory reduction.", category: "case", area: "tort" },
  { id: "h-sayers", answer: "SAYERS", hint: "1958 — trapped in council toilet; 25% reduction for risky escape attempt.", category: "case", area: "tort" },
  { id: "h-jayes", answer: "JAYES", hint: "1985 — factory worker removed machine guard, lost finger; 100% contributorily negligent.", category: "case", area: "tort" },
  { id: "h-smith-baker", answer: "SMITH BAKER", hint: "1891 — workman injured by stone falling from overhead crane; knowledge is not consent for volenti.", category: "case", area: "tort" },
  { id: "h-haynes", answer: "HAYNES", hint: "1935 — policeman injured stopping bolting horses; rescuer principle defeats volenti.", category: "case", area: "tort" },

  // Term 2 — Tort · legal terms
  { id: "h-duty-of-care", answer: "DUTY OF CARE", hint: "The first ingredient of negligence; established by neighbour principle or Caparo.", category: "term", area: "tort" },
  { id: "h-breach", answer: "BREACH", hint: "The second ingredient of negligence: falling below the standard of the reasonable person.", category: "term", area: "tort" },
  { id: "h-causation", answer: "CAUSATION", hint: "The third ingredient of negligence: factual (but-for) and legal links to the damage.", category: "term", area: "tort" },
  { id: "h-remoteness", answer: "REMOTENESS", hint: "Limit on negligence damages; was the type of harm reasonably foreseeable?", category: "term", area: "tort" },
  { id: "h-negligence", answer: "NEGLIGENCE", hint: "The flagship tort; failure to take reasonable care causing foreseeable harm.", category: "term", area: "tort" },
  { id: "h-nuisance", answer: "NUISANCE", hint: "Unreasonable interference with another's enjoyment of their land.", category: "term", area: "tort" },
  { id: "h-trespass", answer: "TRESPASS", hint: "Direct and intentional interference with person, land or goods.", category: "term", area: "tort" },
  { id: "h-damages", answer: "DAMAGES", hint: "Monetary remedy in tort; compensatory, aggravated, exemplary or nominal.", category: "term", area: "tort" },
  { id: "h-volenti", answer: "VOLENTI", hint: "Latin defence: to one who consents, no injury is done (full form volenti non fit injuria).", category: "latin", area: "tort" },
  { id: "h-res-ipsa", answer: "RES IPSA LOQUITUR", hint: "Latin: the thing speaks for itself. Breach inferred from the facts.", category: "latin", area: "tort" },
  { id: "h-occupier", answer: "OCCUPIER", hint: "Person with sufficient control of premises under Wheat v Lacon; key term in 1957 & 1984 Acts.", category: "term", area: "tort" },
  { id: "h-trespasser", answer: "TRESPASSER", hint: "Person on premises without permission; lesser duty under Occupiers' Liability Act 1984.", category: "term", area: "tort" },
  { id: "h-allurement", answer: "ALLUREMENT", hint: "Object attractive to children concealing a hidden danger; raises the standard of care.", category: "term", area: "tort" },
  { id: "h-private-nuisance", answer: "PRIVATE NUISANCE", hint: "Unlawful interference with a person's use or enjoyment of their land.", category: "term", area: "tort" },
  { id: "h-injunction", answer: "INJUNCTION", hint: "Equitable remedy ordering someone to stop (or do) something; central remedy in nuisance.", category: "term", area: "tort" },
  { id: "h-non-natural-use", answer: "NON NATURAL USE", hint: "Rylands v Fletcher ingredient: extraordinary and unusual use creating exceptional risk.", category: "term", area: "tort" },
  { id: "h-strict-liability", answer: "STRICT LIABILITY", hint: "Liability without proof of fault — applies to Rylands v Fletcher escapes.", category: "term", area: "tort" },
  { id: "h-vicarious", answer: "VICARIOUS", hint: "Liability of one person for the tort of another, usually employer for employee.", category: "term", area: "tort" },
  { id: "h-mutuality", answer: "MUTUALITY", hint: "Mutuality of ___: essential ingredient of an employment contract per Carmichael.", category: "term", area: "tort" },
  { id: "h-frolic", answer: "FROLIC", hint: "Going off on a ___ of one's own — outside the course of employment.", category: "term", area: "tort" },
  { id: "h-close-connection", answer: "CLOSE CONNECTION", hint: "Lister/Mohamud test for whether an intentional wrong is within employment.", category: "term", area: "tort" },
  { id: "h-volenti", answer: "VOLENTI", hint: "___ non fit injuria — no injury is done to one who consents to the risk.", category: "term", area: "tort" },
  { id: "h-contributory", answer: "CONTRIBUTORY", hint: "___ negligence — part defence that reduces damages by the claimant's share of fault.", category: "term", area: "tort" },
  { id: "h-rescuer", answer: "RESCUER", hint: "The ___ principle: someone acting under a duty to help is not voluntarily accepting risk.", category: "term", area: "tort" },

  // Shared — across all terms
  { id: "h-precedent", answer: "PRECEDENT", hint: "Doctrine that decisions of higher courts bind lower courts on the same point.", category: "term", area: "shared" },
  { id: "h-ratio", answer: "RATIO DECIDENDI", hint: "Latin: the reason for deciding. The binding part of a judgment.", category: "latin", area: "shared" },
  { id: "h-obiter", answer: "OBITER DICTA", hint: "Latin: things said by the way. Persuasive but not binding.", category: "latin", area: "shared" },
  { id: "h-stare-decisis", answer: "STARE DECISIS", hint: "Latin: to stand by things decided. The principle underpinning binding precedent.", category: "latin", area: "shared" },
  { id: "h-barrister", answer: "BARRISTER", hint: "Court advocate, member of an Inn of Court, traditionally wears wig and gown.", category: "term", area: "shared" },
  { id: "h-solicitor", answer: "SOLICITOR", hint: "Legal practitioner, traditionally non-court work, member of the Law Society.", category: "term", area: "shared" },
  { id: "h-claimant", answer: "CLAIMANT", hint: "Person bringing a civil action (was 'plaintiff' before 1999 CPR).", category: "term", area: "shared" },
  { id: "h-defendant", answer: "DEFENDANT", hint: "Person against whom a civil or criminal action is brought.", category: "term", area: "shared" },
  { id: "h-acquittal", answer: "ACQUITTAL", hint: "A jury verdict of not guilty; defendant walks free.", category: "term", area: "shared" },
  { id: "h-verdict", answer: "VERDICT", hint: "The jury's decision at the end of a criminal trial.", category: "term", area: "shared" },
  { id: "h-liability", answer: "LIABILITY", hint: "Legal responsibility for one's acts or omissions.", category: "term", area: "shared" },
  { id: "h-judge", answer: "JUDGE", hint: "The official presiding over a court, deciding questions of law.", category: "term", area: "shared" },
  { id: "h-jury", answer: "JURY", hint: "Body of (usually 12) laypeople deciding questions of fact in a Crown Court trial.", category: "term", area: "shared" },
];

export function puzzlesForTerm(area: LegalArea): HangmanPuzzle[] {
  return HANGMAN_PUZZLES.filter((p) => p.area === area || p.area === "shared");
}

export function pickRandomPuzzle(
  pool: HangmanPuzzle[],
  exclude: Set<string>,
): HangmanPuzzle {
  const candidates = pool.filter((p) => !exclude.has(p.id));
  const choosable = candidates.length > 0 ? candidates : pool;
  return choosable[Math.floor(Math.random() * choosable.length)];
}

export function uniqueLetters(answer: string): Set<string> {
  const out = new Set<string>();
  for (const ch of answer) {
    if (/[A-Z]/.test(ch)) out.add(ch);
  }
  return out;
}
