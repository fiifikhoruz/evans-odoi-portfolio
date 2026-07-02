import { useState } from 'react'
import { github } from '../../data/capabilities'
import { Section, SectionHeading } from '../ui/Section'
import Reveal from '../ui/Reveal'

// Language mix across public repos, one accent in five strengths
const langMix = [
  { lang: 'TypeScript', share: 34, cls: 'bg-accent' },
  { lang: 'JavaScript', share: 22, cls: 'bg-accent/70' },
  { lang: 'Vue', share: 16, cls: 'bg-accent/50' },
  { lang: 'Web', share: 16, cls: 'bg-accent/30' },
  { lang: 'Ruby', share: 12, cls: 'bg-accent/15' },
]

export default function GitHubSection() {
  const [open, setOpen] = useState(false)

  return (
    <Section id="github" className="py-20">
      <SectionHeading
        kicker="Code"
        title="The engineering behind the projects."
        lede={`github.com/${github.username}: ${github.repoCount} public repositories covering product builds and business tooling.`}
      />

      <Reveal className="theme-smooth rounded-2xl border border-line/10 bg-surface p-5 sm:p-6">
        {/* Profile row */}
        <div className="flex flex-wrap items-center gap-4">
          <img
            src={github.avatar}
            alt="Evans Odoi, GitHub avatar"
            loading="lazy"
            className="h-12 w-12 rounded-full border border-line/10"
          />
          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-semibold text-ink">Evans Odoi</h3>
            <p className="truncate text-xs text-muted">@{github.username} · “{github.bio}”</p>
          </div>
          <a
            href={github.url}
            target="_blank"
            rel="noreferrer"
            className="theme-smooth rounded-lg border border-line/15 bg-raised px-3.5 py-2 text-xs font-medium text-ink transition-colors duration-150 hover:border-line/30"
          >
            View profile
          </a>
        </div>

        {/* Activity graph */}
        <div className="theme-smooth mt-5 overflow-hidden rounded-lg border border-line/10 bg-raised p-3">
          <img
            src={github.chart}
            alt="GitHub contribution graph for fiifikhoruz"
            loading="lazy"
            className="w-full opacity-90"
          />
        </div>

        {/* Language mix bar */}
        <div className="mt-5">
          <div className="flex h-2 w-full gap-0.5 overflow-hidden rounded-full" role="img" aria-label="Language mix across repositories">
            {langMix.map((l) => (
              <span key={l.lang} className={`${l.cls} h-full rounded-sm`} style={{ width: `${l.share}%` }} />
            ))}
          </div>
          <ul className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1">
            {langMix.map((l) => (
              <li key={l.lang} className="flex items-center gap-1.5 text-[11px] text-faint">
                <span className={`h-1.5 w-1.5 rounded-full ${l.cls}`} aria-hidden="true" />
                {l.lang}
              </li>
            ))}
          </ul>
        </div>

        {/* Expandable repo grid */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="theme-smooth mt-5 flex w-full items-center justify-between rounded-lg border border-line/10 bg-raised px-4 py-3 text-sm font-medium text-ink transition-colors duration-150 hover:border-line/25"
        >
          {open ? 'Hide repositories' : `Show ${github.repos.length} repositories`}
          <svg
            width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
            className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
        <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
          <div className="overflow-hidden">
            <div className="grid gap-3 pt-4 sm:grid-cols-2 lg:grid-cols-3">
              {github.repos.map((r) => (
                <a
                  key={r.name}
                  href={`${github.url}/${r.name}`}
                  target="_blank"
                  rel="noreferrer"
                  className="theme-smooth rounded-lg border border-line/10 bg-raised p-4 transition-colors duration-150 hover:border-line/25"
                >
                  <p className="text-sm font-semibold text-ink">{r.name}</p>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">{r.desc}</p>
                  <p className="mt-2.5 flex items-center gap-1.5 text-[11px] text-faint">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent/60" aria-hidden="true" />
                    {r.lang}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
