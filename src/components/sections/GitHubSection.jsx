import { github } from '../../data/capabilities'
import { Section, SectionHeading } from '../ui/Section'
import Reveal from '../ui/Reveal'

const langDot = {
  Vue: 'bg-accent/70',
  JavaScript: 'bg-accent/70',
  TypeScript: 'bg-accent/70',
  Ruby: 'bg-accent/70',
  Web: 'bg-accent/70',
}

export default function GitHubSection() {
  return (
    <Section id="github" className="py-20">
      <SectionHeading
        kicker="Code"
        title="The engineering behind the products."
        lede={`github.com/${github.username}: ${github.repoCount} public repositories covering product builds, business tooling, and open-source tinkering.`}
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr]">
        {/* Profile + activity */}
        <Reveal className="theme-smooth flex flex-col rounded-xl border border-line/10 bg-surface p-6">
          <div className="flex items-center gap-4">
            <img
              src={github.avatar}
              alt="Evans Odoi, GitHub avatar"
              loading="lazy"
              className="h-14 w-14 rounded-full border border-line/10"
            />
            <div>
              <h3 className="text-sm font-semibold text-ink">Evans Odoi</h3>
              <p className="text-xs text-muted">@{github.username} · “{github.bio}”</p>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">
              Contribution activity
            </h4>
            <div className="theme-smooth mt-3 overflow-hidden rounded-lg border border-line/10 bg-raised p-3">
              <img
                src={github.chart}
                alt="GitHub contribution graph for fiifikhoruz"
                loading="lazy"
                className="w-full opacity-90"
              />
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">Code focus</h4>
            <ul className="mt-3 space-y-2">
              {github.focus.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted">
                  <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <a
            href={github.url}
            target="_blank"
            rel="noreferrer"
            className="mt-auto pt-6 text-sm font-medium text-accent hover:underline"
          >
            View full profile →
          </a>
        </Reveal>

        {/* Repo grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {github.repos.map((r, i) => (
            <Reveal
              key={r.name}
              delay={i * 30}
              as="article"
              className="theme-smooth rounded-xl border border-line/10 bg-surface p-5 transition-colors duration-150 hover:border-line/25"
            >
              <a
                href={`${github.url}/${r.name}`}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-ink hover:text-accent"
              >
                {r.name}
              </a>
              <p className="mt-1.5 min-h-10 text-sm leading-relaxed text-muted">{r.desc}</p>
              <p className="mt-3 flex items-center gap-1.5 text-xs text-faint">
                <span className={`h-2 w-2 rounded-full ${langDot[r.lang] || 'bg-line/30'}`} aria-hidden="true" />
                {r.lang}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
