# Deployment Plan — Chambers (OCR Law Revision)

**Status**: Validated

## 1 — Mode

MODIFY — existing Vite + React + TypeScript SPA at the workspace root. Adding Azure deployment infrastructure (no application logic change).

## 2 — Requirements

- **App profile**: pure client-side single-page application; no server code, no backend, no API calls, no auth, no database. State persisted to browser `localStorage` only.
- **Audience**: single user (revision tool); occasional shareable link for friends/family review.
- **Scale**: extremely low — single-digit concurrent users at most; total bandwidth < 1 GB/month expected.
- **Budget**: minimise cost. Free tier strongly preferred.
- **Custom domain**: not required for v1; flexible for later.
- **CI/CD**: deploy from local workstation; CI integration optional later.

## 3 — Codebase scan

- Build tool: Vite 8 (`npm run build` → `dist/`)
- Framework: React 19 + TypeScript
- Output: static assets only (HTML/CSS/JS in `dist/`)
- No environment variables, no Azure SDK usage, no secrets.
- Bundle size: ~518 KB raw / ~132 KB gzipped (well within any free tier).
- No `package.json` scripts assume a Node runtime at serve-time.

## 4 — Recipe

**AZD (Azure Developer CLI)** with Bicep infrastructure-as-code.

Rationale: user selected; gives reproducible IaC + single-command deploy without a git remote.

## 5 — Architecture

| Component | Azure service | SKU | Reason |
|---|---|---|---|
| Static SPA hosting | **Azure Static Web Apps** | **Free** | Built for static SPAs; free SSL, free `*.azurestaticapps.net` URL, free custom domain support, built-in CDN. Free tier is permanent. |
| Resource group | Azure Resource Group | — | Logical container |

**Not used** (would be over-engineering for this profile): App Service, Storage static website, Container Apps, Functions, Key Vault, App Configuration, Managed Identity (app makes no Azure API calls).

## 6 — Files to be generated

- `azure.yaml` — azd config pointing to the SWA + frontend service definition
- `infra/main.bicep` — subscription-scope deployment creating RG + module call
- `infra/main.parameters.json` — bicepparam bindings for envName / location
- `infra/modules/swa.bicep` — the Static Web App resource itself

Existing files left untouched: `src/**`, `package.json`, `vite.config.ts`, `index.html`, `tsconfig*.json`.

## 7 — Azure context (to confirm)

- **Subscription**: TBD — will confirm with user before Phase 2
- **Location**: TBD — SWA Free is available in a limited set of regions (West Europe, East US 2, Central US, East Asia, West US 2); will recommend **West Europe** given UK locale.

## 8 — Deployment workflow

1. `azd auth login`
2. `azd init` (already-existing project; just register env)
3. `azd up` → provisions infra + builds + uploads `dist/`
4. SWA URL returned in output

## 9 — Status checklist

- [x] Plan approved by user
- [x] Bicep generated (`infra/main.bicep`, `infra/modules/swa.bicep`, `infra/main.parameters.json`)
- [x] azure.yaml generated
- [x] `staticwebapp.config.json` added under `public/` for SPA routing fallback
- [x] Local `npm run build` clean
- [x] `az bicep build` clean — main.bicep compiles with no errors
- [x] Status updated to "Validated"
- [ ] User to confirm subscription + run `azd up` from a logged-in shell

## 10 — Validation proof

Commands run from this sandbox (CI-equivalent — no live Azure auth):

```
$ npm run build
  vite v8.0.14 building client environment for production
  ✓ built in 264ms
  dist/index.html        0.45 kB │ gzip: 0.29 kB
  dist/assets/index.css  11.95 kB │ gzip: 2.90 kB
  dist/assets/index.js   518.53 kB │ gzip: 132.23 kB

$ ls dist/
  assets  favicon.svg  index.html  staticwebapp.config.json   ← copied from public/

$ az bicep build --file infra/main.bicep --stdout
  (compiles cleanly, exit 0)
```

Not run (requires live Azure auth):
- `azd provision --preview` — would catch parameter resolution and RBAC issues. Run once authenticated.

No RBAC role assignments in this plan (the SPA makes no Azure API calls) so the static-role-verification step is vacuously satisfied.

## 11 — How the user runs the deploy

The `StaticSitesClient` binary used by both `azd deploy` and `swa deploy` is **x86_64-only** (no Linux ARM64 or Apple Silicon build). Two paths depending on the deploy machine architecture:

### Path A — GitHub Actions (works from any architecture, including ARM64)

1. **Provision** (one-time, runs on any arch via `az`):

   ```bash
   az login
   az deployment sub create \
     --name chambers-init \
     --location westeurope \
     --template-file infra/main.bicep \
     --parameters environmentName=chambers location=westeurope
   ```

2. **Fetch the deployment token**:

   ```bash
   RG=$(az deployment sub show --name chambers-init --query "properties.outputs.AZURE_RESOURCE_GROUP.value" -o tsv)
   APP=$(az staticwebapp list --resource-group "$RG" --query "[0].name" -o tsv)
   az staticwebapp secrets list --name "$APP" --resource-group "$RG" --query "properties.apiKey" -o tsv
   ```

3. **Push the repo to GitHub**; add the token as repo secret `AZURE_STATIC_WEB_APPS_API_TOKEN`. The workflow at `.github/workflows/azure-static-web-apps.yml` does the rest on every push to `main`.

### Path B — `azd up` (only on x86_64 Linux / Intel macOS / Windows)

```bash
azd auth login
azd up
```

`azd up` provisions and deploys in one go. Will fail with "Exec format error" on ARM64.
