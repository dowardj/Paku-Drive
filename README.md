# 203 Paku Drive Marketing Website

Premium Next.js real estate marketing site for **203 Paku Drive, Tairua, New Zealand**.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- SEO metadata + OpenGraph + sitemap + robots
- Local image ingest script for `homes co nz/`

## Folder Structure

- `src/components` - modular UI/layout/placeholders
- `src/app` - route pages (`/`, `/gallery`, `/property`, `/contact`)
- `public/assets/images` - web-served images
- `styles` - compatibility folder (main styles are in `src/app/globals.css`)
- `components`, `pages`, `assets/images` - compatibility folders per requested structure

## Local Setup

1. Install Node.js 20+.
2. Install packages:
   - `npm install`
3. Start development server:
   - `npm run dev`

## Image Ingest Workflow

You already placed source images in `homes co nz/`.

To process and optimise images:

1. Put source images in `homes co nz/` (or nested folders).
2. Run:
   - `npm run ingest:images`
3. Script output:
   - Optimised files in `public/assets/images/`
   - Generated manifest in `src/data/images.generated.json`

By default, ingest only includes direct images from `homes co nz/` (recommended).

If you also want nested saved-page assets (e.g. `homes co nz/*_files/`), run:

- `INCLUDE_SAVED_PAGE_FILES=1 npm run ingest:images` (macOS/Linux)
- `$env:INCLUDE_SAVED_PAGE_FILES=1; npm run ingest:images` (PowerShell)

The app is already wired through `src/data/images.ts` to consume `images.generated.json`.

## Placeholder Replacement Guide

The gallery includes clear placeholders under `src/components/placeholders/`.

- `DroneVideoPlaceholder` -> replace with `<video>` or hosted drone embed.
- `Walkthrough3DPlaceholder` -> replace with Matterport/3D iframe.
- `InteriorGalleryPlaceholder` -> replace with curated interior photo grid.
- `FloorplanPlaceholder` -> replace with final floorplan image/PDF embed.
- `ArchitecturalRendersPlaceholder` -> replace with architectural render gallery.

## Updating Contact Details

Edit `src/config/site.ts`:

- `email`
- `phone`
- `whatsapp`
- `url` (production domain for SEO metadata)

## Updating Property Specs

Edit `src/config/property.ts`:

- `floorArea`
- `landSize`
- `architecturalNotes`
- `keyFeatures`

## SEO / Social

- Global metadata: `src/app/layout.tsx`
- Sitemap: `src/app/sitemap.ts`
- Robots: `src/app/robots.ts`
- JSON-LD schema: `src/components/seo/JsonLd.tsx`

## Rights Reminder

Ensure you have appropriate rights/licensing for all listing and photography assets before publishing publicly.
