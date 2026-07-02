# Evans Odoi — AI Capability Portfolio

Production-ready portfolio site. React + Vite + Tailwind CSS, dark-mode-first with persistent theme switching.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

Deploy the `dist/` folder anywhere — or connect the repo to Vercel and it deploys automatically.

## Architecture

```
src/
  data/          # All content lives here — edit copy without touching components
  hooks/         # useTheme (persistent dark/light), useReveal (scroll animations)
  components/
    layout/      # Navbar, Footer
    sections/    # Hero, Projects, Podcast, Presentations, GitHub, Capabilities, Workflow, Stack, Philosophy
    ui/          # DeviceFrames (browser + phone mockups), Section, Reveal
```

## Notes

- **Project screenshots are rendered live** from each production URL via the WordPress mshots service, framed in browser/phone mockups. Each has a fallback to the site's own OG image. To swap in static screenshots later, replace `desktopShot`/`mobileShot` in `src/data/projects.js` with local image paths.
- **Theme**: dark is default; preference persists in `localStorage`. Tokens are CSS variables in `src/index.css`.
- **Accessibility**: semantic landmarks, skip link, focus-visible rings, reduced-motion support, WCAG-friendly contrast in both modes.
