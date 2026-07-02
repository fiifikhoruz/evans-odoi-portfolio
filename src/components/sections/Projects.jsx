import { projects } from '../../data/projects'
import { Section, SectionHeading } from '../ui/Section'
import { BrowserFrame, PhoneFrame } from '../ui/DeviceFrames'
import Reveal from '../ui/Reveal'

function Meta({ label, children }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">{label}</h4>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{children}</p>
    </div>
  )
}

function Chips({ label, items }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">{label}</h4>
      <ul className="mt-2 flex flex-wrap gap-1.5">
        {items.map((t) => (
          <li
            key={t}
            className="theme-smooth rounded-md border border-line/10 bg-raised px-2 py-1 text-xs text-muted"
          >
            {t}
          </li>
        ))}
      </ul>
    </div>
  )
}

function ProjectCard({ p, index }) {
  const flip = index % 2 === 1
  return (
    <Reveal
      as="article"
      className="theme-smooth overflow-hidden rounded-2xl border border-line/10 bg-surface transition-shadow duration-150 hover:shadow-lg hover:shadow-black/5"
    >
      <div className={`grid gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:gap-12 ${flip ? 'lg:[&>div:first-child]:order-2' : ''}`}>
        {/* Mockups */}
        <div className="relative">
          <BrowserFrame src={p.desktopShot} fallback={p.fallback} alt={`${p.name} — desktop view`} url={p.url} />
          <div className="absolute -bottom-4 -right-2 hidden w-[30%] sm:block">
            <PhoneFrame src={p.mobileShot} fallback={p.fallback} alt={`${p.name} — mobile view`} />
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{p.category}</p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink sm:text-2xl">{p.name}</h3>
          <p className="mt-1 text-sm text-muted">{p.tagline}</p>

          <div className="mt-6 space-y-5">
            <Meta label="Problem">{p.problem}</Meta>
            <Meta label="Solution">{p.solution}</Meta>
            <Meta label="My role">{p.role}</Meta>
            <div className="grid gap-5 sm:grid-cols-2">
              <Chips label="Tech stack" items={p.stack} />
              <Chips label="AI tools" items={p.aiTools} />
            </div>
            <Meta label="Outcome">{p.outcome}</Meta>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line/10 pt-5">
            {p.highlights.map((h) => (
              <span key={h} className="inline-flex items-center gap-1.5 text-xs text-muted">
                <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
                {h}
              </span>
            ))}
          </div>

          <div className="mt-6 flex gap-3">
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Visit live site
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 17 17 7M8 7h9v9" />
              </svg>
            </a>
            <a
              href="https://github.com/fiifikhoruz"
              target="_blank"
              rel="noreferrer"
              className="theme-smooth inline-flex items-center rounded-lg border border-line/15 bg-raised px-4 py-2 text-sm text-muted transition-colors hover:text-ink"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <Section id="work" className="py-20">
      <SectionHeading
        kicker="Selected work"
        title="Products shipped, not promised."
        lede="Six live products — festivals, SaaS, e-commerce, AI apps, and platforms — each solving a real problem for real users. Screenshots are rendered live from production."
      />
      <div className="space-y-10">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} p={p} index={i} />
        ))}
      </div>
    </Section>
  )
}
