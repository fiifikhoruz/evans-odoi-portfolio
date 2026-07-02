import { useState } from 'react'
import { projects } from '../../data/projects'
import { useSpotlight } from '../../hooks/useSpotlight'
import { Section, SectionHeading } from '../ui/Section'
import Reveal from '../ui/Reveal'
import ProjectPanel from './ProjectPanel'

function Card({ p, onOpen }) {
  const spot = useSpotlight(4)
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-haspopup="dialog"
      ref={spot.ref}
      onMouseMove={spot.onMouseMove}
      onMouseLeave={spot.onMouseLeave}
      className="spot-card tilt-card theme-smooth group w-full rounded-xl border border-line/10 bg-surface p-4 text-left shadow-sm transition-all duration-150 hover:border-line/25 hover:shadow-lg hover:shadow-black/10"
    >
      <Thumb p={p} />
      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">{p.category}</p>
          <h3 className="mt-1 truncate text-base font-semibold text-ink">{p.name}</h3>
          <p className="mt-0.5 line-clamp-2 text-sm leading-snug text-muted">{p.tagline}</p>
        </div>
        <span
          aria-hidden="true"
          className="theme-smooth mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line/10 bg-raised text-muted transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-ink"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
        </span>
      </div>
      <span className="spot-layer" aria-hidden="true" />
    </button>
  )
}

function Thumb({ p }) {
  return (
    <div className="theme-smooth overflow-hidden rounded-lg border border-line/10 bg-raised">
      <div className="aspect-[16/10] w-full overflow-hidden">
        <img
          src={p.desktopShot}
          alt={`${p.name}, live screenshot`}
          loading="lazy"
          onError={(e) => {
            if (p.fallback && e.currentTarget.src !== p.fallback) e.currentTarget.src = p.fallback
          }}
          className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
    </div>
  )
}

export default function Projects() {
  const [open, setOpen] = useState(null)

  return (
    <Section id="work" className="py-20">
      <SectionHeading
        kicker="Selected work"
        title="Products shipped, not promised."
        lede="Six products, all live in production right now. The screenshots aren’t mockups; they render fresh from each site as you read this. Open a card for the full story."
      />

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <li key={p.id} className="sticky sm:static" style={{ top: `${84 + i * 10}px` }}>
            <Reveal delay={(i % 3) * 40}>
              <Card p={p} onOpen={() => setOpen(i)} />
            </Reveal>
          </li>
        ))}
      </ul>

      {open !== null && (
        <ProjectPanel
          projects={projects}
          index={open}
          onClose={() => setOpen(null)}
          onNav={(d) => setOpen((cur) => (cur + d + projects.length) % projects.length)}
        />
      )}
    </Section>
  )
}
