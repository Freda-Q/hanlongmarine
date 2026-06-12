# Hanlong Petrochemical Equipment English Website

Astro + Tailwind CSS static website for Suzhou Hanlong Petrochemical Equipment. The first version is a deployable English B2B industrial equipment marketing site with Industrial Neo-Futurism styling: deep abyss blue background, laser cyan highlights, titanium silver typography and technical card layouts.

## Tech Stack

- Astro static output
- Tailwind CSS
- No backend
- No database
- Static RFQ form UI only

## Pages

- Home: `/`
- Products: `/products/`
- Marine Loading Arms: `/products/marine-loading-arms/`
- Truck & Railcar Loading Arms: `/products/truck-railcar-loading-arms/`
- Integrated Loading Skids: `/products/integrated-loading-skids/`
- Quick Release Mooring Hooks: `/products/quick-release-mooring-hooks/`
- Berthing Aid Systems: `/products/berthing-aid-systems/`
- Engineering & Strength: `/engineering-strength/`
- Case Studies: `/case-studies/`
- Downloads: `/downloads/`
- Contact / RFQ: `/contact/`

## Run Locally

```bash
npm install
npm run dev
```

Astro will print a local URL, usually `http://localhost:4321`.

## Build

```bash
npm run build
```

The static production files are generated in `dist/`.

## Edit Content

Most product content is centralized in:

```text
src/data/products.ts
```

Update product titles, summaries, overview copy, key components, parameters, applications and standards there. The product detail pages are generated from this data by:

```text
src/pages/products/[slug].astro
src/components/ProductDetail.astro
```

General page content lives in:

```text
src/pages/index.astro
src/pages/products/index.astro
src/pages/engineering-strength.astro
src/pages/case-studies.astro
src/pages/downloads.astro
src/pages/contact.astro
```

## Replace Images

All temporary image paths are in:

```text
public/images/
```

Current placeholders are valid `.webp` files and every page caption explains what image type should replace them. Keep the same filenames to replace images without changing code:

```text
placeholder-hero-ocean-terminal.webp
placeholder-products-grid.webp
placeholder-marine-loading-arm.webp
placeholder-truck-railcar-loading-arm.webp
placeholder-loading-skid.webp
placeholder-quick-release-hook.webp
placeholder-berthing-aid-system.webp
placeholder-engineering-fea.webp
placeholder-factory-machining.webp
placeholder-case-1.webp
placeholder-case-2.webp
placeholder-case-3.webp
```

Recommended image rules:

- Use WebP format.
- Use at least 1600px width for hero and product images.
- Show real equipment, terminals, factory, FEA screenshots, test beds and NDT proof where possible.
- Prefer dark marine or industrial backgrounds to match the visual system.

## GTM / GA4 / Google Ads

GTM placeholder comments are reserved in:

```text
src/layouts/BaseLayout.astro
```

Paste the GTM `<script>` in the `<head>` placeholder and the `<noscript>` iframe after the opening `<body>` placeholder when tracking is ready.

Suggested future events:

- `form_submit`
- `brochure_download`
- `whatsapp_click`
- `rfq_button_click`

## Static RFQ Form

The Contact / RFQ page currently contains static form UI only. It does not submit data yet. Later you can connect it to:

- Wufoo
- Formspree
- HubSpot / CRM endpoint
- Custom serverless function

## Deploy to Cloudflare Pages

1. Push this project to a Git repository.
2. Create a new Cloudflare Pages project.
3. Select the repository.
4. Use these build settings:

```text
Framework preset: Astro
Build command: npm run build
Build output directory: dist
Node.js version: 20 or newer
```

5. Deploy.
6. Add the production domain and SSL in Cloudflare.
7. Add GTM after the container is created.

## Project Structure

```text
src/components/        Reusable UI components
src/data/products.ts   Product page data
src/layouts/           Base HTML layout and GTM placeholders
src/pages/             Astro routes
src/styles/global.css  Tailwind and visual system CSS
public/images/         Replaceable WebP placeholders
```
