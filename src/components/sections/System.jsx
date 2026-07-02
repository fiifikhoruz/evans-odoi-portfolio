import { workflow, stack } from '../../data/capabilities'
import { Section, SectionHeading } from '../ui/Section'
import Reveal from '../ui/Reveal'

const levelDot = {
  'Daily driver': 'bg-accent',
  Production: 'bg-accent/50',
  'Working tool': 'bg-line/30',
}

export default function System() {
  return (
    <Section id="process" className="py-20">
      <SectionHeading
        kicker="AI workflow & stack"
        title="One system, idea to market."
        lede="Every product moves through the same pipeline, built with the same tools. AI speeds up each stage; judgement decides what ships."
      />

      <Reveal>
        <ol className="grid gap-px overflow-hidden rounded-xl border border-line/10 bg-line/10 sm:grid-cols-2 lg:grid-cols-5">
          {workflow.map((w, i) => (
            <li key={w.step} className="theme-smooth group relative bg-surface p-4 transition-colors duration-150 hover:bg-raised">
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
              <p className="mt-1 text-xs leading-relaxed text-muted">{w.text}</p>
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal delay={80}>
        <div className="theme-smooth mt-5 rounded-xl border border-line/10 bg-surface px-5 py-4">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-3">
            {stack.map((t) => (
              <li key={t.name} className="flex items-center gap-2 text-sm text-muted" title={`${t.role} · ${t.level}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${levelDot[t.level]}`} aria-hidden="true" />
                {t.name}
              </li>
            ))}
          </ul>
          <p className="theme-smooth mt-3 flex flex-wrap gap-x-4 gap-y-1 border-t border-line/10 pt-3 text-[11px] text-faint">
            <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />Daily driver</span>
            <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-accent/50" aria-hidden="true" />Production</span>
            <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-line/30" aria-hidden="true" />Working tool</span>
          </p>
        </div>
      </Reveal>
    </Section>
  )
}
