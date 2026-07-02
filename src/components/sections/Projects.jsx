import { useState } from 'react'
import { projects } from '../../data/projects'
import { podcast } from '../../data/podcast'
import { presentations } from '../../data/presentations'
import { github, workflow } from '../../data/capabilities'
import { useSpotlight } from '../../hooks/useSpotlight'
import { Section, SectionHeading } from '../ui/Section'
import Reveal from '../ui/Reveal'
import ProjectPanel from './ProjectPanel'
import { PodcastPanel, DecksPanel, CodePanel, SystemPanel } from './FeaturePanels'

function Card({ thumb, category, name, tagline, onOpen }) {
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
      <div className="theme-smooth overflow-hidden rounded-lg border border-line/10 bg-raised">
        <div className="aspect-[16/10] w-full overflow-hidden">{thumb}</div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">{category}</p>
          <h3 className="mt-1 truncate text-base font-semibold text-ink">{name}</h3>
          <p className="mt-0.5 line-clamp-2 text-sm leading-snug text-muted">{tagline}</p>
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

function ShotThumb({ p }) {
  return (
    <img
      src={p.desktopShot}
      alt={`${p.name}, live screenshot`}
      loading="lazy"
      onError={(e) => {
        if (p.fallback && e.currentTarget.src !== p.fallback) e.currentTarget.src = p.fallback
      }}
      className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
    />
  )
}

const features = [
  {
    key: 'podcast',
    category: 'Media production',
    name: podcast.title,
    tagline: `${podcast.stats.subscribers} subscribers · ${podcast.stats.videos} episodes`,
    Panel: PodcastPanel,
    thumb: (
      <img
        src={`https://i.ytimg.com/vi/${podcast.episodes[0].id}/hqdefault.jpg`}
        alt="Podcast episode thumbnail"
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
      />
    ),
  },
  {
    key: 'decks',
    category: 'Presentations',
    name: 'Client & business decks',
    tagline: 'Four decks, from investor pitches to clinical case studies',
    Panel: DecksPanel,
    thumb: (
      <div className="grid h-full grid-cols-2 gap-1.5 p-3">
        {presentations.map((d) => (
          <span key={d.url} className="theme-smooth flex flex-col justify-between rounded-md border border-line/10 bg-bg p-2">
            <i className="block h-0.5 w-5 rounded-full bg-accent/70" aria-hidden="true" />
            <span className="line-clamp-1 text-[9px] font-medium text-faint">{d.tag}</span>
          </span>
        ))}
      </div>
    ),
  },
  {
    key: 'code',
    category: 'Code',
    name: 'GitHub',
    tagline: `@${github.username} · ${github.repoCount} public repos`,
    Panel: CodePanel,
    thumb: (
      <div className="flex h-full items-center p-4">
        <img src={github.chart} alt="GitHub contribution graph" loading="lazy" className="w-full opacity-90" />
      </div>
    ),
  },
  {
    key: 'system',
    category: 'AI workflow & stack',
    name: 'One system, idea to market',
    tagline: 'Ten stages, one toolset, every project',
    Panel: SystemPanel,
    thumb: (
      <div className="grid h-full grid-cols-5 content-center gap-1.5 p-4">
        {workflow.map((w, i) => (
          <span key={w.step} className="theme-smooth rounded-md border border-line/10 bg-bg py-1.5 text-center font-mono text-[9px] text-faint">
            {String(i + 1).padStart(2, '0')}
          </span>
        ))}
      </div>
    ),
  },
]

export default function Projects() {
  const [open, setOpen] = useState(null)

  return (
    <Section id="work" className="py-20">
      <SectionHeading
        kicker="The work"
        title="Products shipped, not promised."
        lede="Six live products, plus the podcast, the decks, the code, and the system behind them. Tap any card for the full story."
      />

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <li key={p.id} className="sticky sm:static" style={{ top: `${84 + i * 10}px` }}>
            <Reveal delay={(i % 3) * 40}>
              <Card
                thumb={<ShotThumb p={p} />}
                category={p.category}
                name={p.name}
                tagline={p.tagline}
                onOpen={() => setOpen(i)}
              />
            </Reveal>
          </li>
        ))}
        {features.map((f, i) => (
          <li key={f.key} className="sticky sm:static" style={{ top: `${84 + (projects.length + i) * 10}px` }}>
            <Reveal delay={(i % 3) * 40}>
              <Card
                thumb={f.thumb}
                category={f.category}
                name={f.name}
                tagline={f.tagline}
                onOpen={() => setOpen(f.key)}
              />
            </Reveal>
          </li>
        ))}
      </ul>

      {typeof open === 'number' && (
        <ProjectPanel
          projects={projects}
          index={open}
          onClose={() => setOpen(null)}
          onNav={(d) => setOpen((cur) => (cur + d + projects.length) % projects.length)}
        />
      )}
      {features.map(({ key, Panel }) =>
        open === key ? <Panel key={key} onClose={() => setOpen(null)} /> : null
      )}
    </Section>
  )
}
