# AGENTS.md

## Project Overview
Next.js portfolio site (static personal page). Built with React 19, TypeScript, Next.js 16 (App Router).

## Commands
```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint check
```

## Architecture
- **Entry point**: `src/app/layout.tsx` (root layout with Header/Footer)
- **Home page**: `src/app/page.tsx` (Presentation → Experience → Education → Technologies)
- **Dynamic routes**: `src/app/company/[id]/page.tsx`
- **Components**: `src/app/components/` (modular sections)
- **Constants/data**: `src/constants/` (texts, companies, details)
- **Path alias**: `@/*` → `./src/*`

## Key Conventions
- CSS Modules for component styling (`.module.css`)
- Strict TypeScript enabled
- ESLint uses `eslint-config-next` with TypeScript support
- No build artifacts committed (`.next/` ignored)

## Notes
- Site is static content only (no backend/API routes)
- Assets stored in `src/assets/` (images, icons)
