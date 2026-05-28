# ⚖️ Chambers — OCR A-Level Law Revision Game

A visual, story-driven revision game for OCR A-Level Law. You play a junior barrister at Inns of Court Chambers, working briefs assigned by a pupil-master. Each brief drills you on real OCR cases using an Issue → Authorities → Application loop (the IRAC method).

Under the hood it runs a **spaced repetition** engine: cases you get wrong come back sooner, cases you nail get pushed further out.

## Running locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## What's in it

- **Term 1 — Criminal Law**: **129 cases**, all illustrated with hand-crafted inline SVG vignettes, across all 7 examined chapters of OCR H418 Component 2 (Wortley/Price/Briggs textbook)
- **16 playable briefs** covering causation, mens rea, fatal offences, non-fatal offences, property offences, defences (insanity / automatism / intoxication / self-defence / consent / duress / necessity), and attempts
- **Term 1 boss fight** — *The Pupillage Examination*, an end-of-term multi-issue exam graded A*/A/B/C/U
- **Case Clash** — 10-card SRS-driven flashcard drill in three rotating round formats
- **Revision Dock** — flippable flashcards, sortable by weakest / textbook chapter / A–Z
- **Syllabus Checklist** — per-topic mastery progress mapped to OCR chapter structure
- **localStorage persistence** — close the tab, come back tomorrow, pick up where you left off

## How a brief works

1. **Issue** — multiple choice: identify the legal question
2. **Authorities** — pick the right case cards from a pool (with deliberate distractors)
3. **Application** — apply the cases to reach a verdict

Wrong answers can be retried; the answer is hidden until you either succeed or explicitly ask to reveal. First-try success drives SRS grades.

## Tech

- Vite + React 19 + TypeScript, no backend
- SM-2 spaced-repetition engine
- All data in `src/data/` (cases, briefs, boss-fight, syllabus)
- 129 inline SVG case scenes in `src/components/CaseScene.tsx`

## Adding more content

- **New case**: append to `src/data/cases.ts` and place it in the right topic in `src/data/syllabus.ts`
- **New brief**: append to `src/data/briefs.ts` referencing case ids
- **New SVG**: add a case to `src/components/CaseScene.tsx`'s switch

## Deploying to Azure

Hosted on **Azure Static Web Apps Free tier** (£0/month forever). Infrastructure is Bicep.

### Provision the SWA (one-time, any architecture including ARM64)

```bash
az login
az deployment sub create \
  --name chambers-init \
  --location westeurope \
  --template-file infra/main.bicep \
  --parameters environmentName=chambers location=westeurope
```

This creates the resource group and Static Web App. No app content yet.

### Get the deployment token

```bash
RG=$(az deployment sub show --name chambers-init --query "properties.outputs.AZURE_RESOURCE_GROUP.value" -o tsv)
APP=$(az staticwebapp list --resource-group "$RG" --query "[0].name" -o tsv)
az staticwebapp secrets list --name "$APP" --resource-group "$RG" --query "properties.apiKey" -o tsv
```

Copy the token.

### Deploy via GitHub Actions (recommended)

The `StaticSitesClient` binary that `azd deploy` and `swa deploy` download is **x86_64-only** — there is no Linux ARM64 or Apple Silicon binary. From an ARM64 machine, deploy via GitHub Actions instead (Microsoft's runners are x86_64).

1. Push this repo to a GitHub repository.
2. In the repo Settings → Secrets and variables → Actions, add a secret:
   - Name: `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - Value: the deployment token from above
3. The workflow at `.github/workflows/azure-static-web-apps.yml` will run on every push to `main` and deploy automatically.

The Static Web App's URL is in the Azure portal, or run:
```bash
az staticwebapp show --name "$APP" --resource-group "$RG" --query "defaultHostname" -o tsv
```

### Deploy via `azd` (if on x86_64)

```bash
azd auth login
azd up
```

Skip the provisioning step above — `azd up` does provision + deploy in one. This path uses the same Bicep but is **only viable on x86_64 Linux, x86_64 macOS, or Windows** because of the SWA CLI binary.

## Roadmap

- Term 2 (Tort) and Term 3 (Contract)
- Extended boss fights using property + defences content
- Export Anki deck of mastered cases
