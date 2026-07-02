import { workflow, stack } from '../../data/capabilities'
import { Section, SectionHeading } from '../ui/Section'
import Reveal from '../ui/Reveal'

const tiers = [
  { label: 'Daily drivers', match: 'Daily driver', filled: 3 },
  { label: 'Production', match: 'Production', filled: 2 },
  { label: 'Working tools', match: 'Working tool', filled: 1 },
]

export default function System() {
  return (
    <Section id="process" className="py-20">
      <SectionHeading
        kicker="AI workflow & stack"
        title="One system, idea to market."
        lede="Every product moves through the same pipeline, built with the same tools. AI speeds up each stage; judgement decides what ships."
      />

      {/* Pipeline: swipeable cards on mobile, joined grid on desktop */}
      <Reveal>
        <ol className="flex snap-x snap-mandatory gap-2 overflow-x-auto pb-2 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-px sm:overflow-visible sm:rounded-xl sm:border sm:border-line/10 sm:bg-line/10 sm:pb-0 lg:grid-cols-5">
          {workflow.map((w, i) => (
            <li
              key={w.step}
              className="theme-smooth group relative min-w-[132px] shrink-0 snap-start rounded-lg border border-line/10 bg-surface p-4 transition-colors duration-150 hover:bg-raised sm:min-w-0 sm:shrink sm:rounded-none sm:border-0"
            >
              <span className="font-mono text-[11px] text-faint">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-ink">
                {w.step}
                {i < workflow.length - 1 && (
                  <svg
                    width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    className="text-faint transition-colors group-hover:text-accent" aria-hidden="true"
                  >
                    <path d="M5 12h14m-6-6 6 6-6 6" />
                  </svg>
                )}
              </h3>
              <p className="mt-1 hidden text-xs leading-relaxed text-muted sm:block">{w.text}</p>
            </li>
          ))}
        </ol>
      </Reveal>

      {/* Stack grouped by tier */}
      <Reveal delay={80}>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.label} className="theme-smooth rounded-xl border border-line/10 bg-surface p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">{tier.label}</h3>
                <span className="flex gap-0.5" aria-hidden="true">
                  {[0, 1, 2].map((n) => (
                    <i key={n} className={`h-1 w-3 rounded-full ${n < tier.filled ? 'bg-accent' : 'bg-line/15'}`} />
                  ))}
                </span>
              </div>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {stack
                  .filter((t) => t.level === tier.match)
                  .map((t) => (
                    <li
                      key={t.name}
                      title={t.role}
                      className="theme-smooth rounded-md border border-line/10 bg-raised px-2.5 py-1.5 text-xs text-muted"
                    >
                      {t.name}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
