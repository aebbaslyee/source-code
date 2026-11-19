# Pangasinan Heritage Digital Showcase — Activity 1.1 Starter

A starter implementation for **The Pangasinan Heritage Digital Showcase** using **React + Next.js 14 App Router** and a static export architecture.

## Requirements covered

- Mobile-first responsive layout
- Lightweight static pages suitable for 3G/4G access
- WCAG-minded semantic structure and keyboard/focus support
- Atomic Design component organization
- Three featured Pangasinan heritage destinations
- Search/filter interaction
- Static detail routes generated at build time
- No external image or UI-library dependency

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production/static build

```bash
npm run typecheck
npm run build
```

The static export is written to `out/`.

## Atomic component map

```text
components/
├── atoms/
│   ├── Button.tsx
│   ├── ColorTokens.tsx
│   ├── Icon.tsx
│   ├── Image.tsx
│   └── Typography.tsx
├── molecules/
│   ├── HeritageCard.tsx
│   ├── NavigationItem.tsx
│   └── SearchForm.tsx
└── organisms/
    ├── HeaderNavigation.tsx
    └── HeritageGrid.tsx
```

## Notes for submission

This is an academic starter package. Replace or expand the placeholder illustrations with properly licensed official tourism imagery if the instructor requires photographic assets. Review all content and personalize the visual design before submitting as your own work.
