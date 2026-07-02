import { workflow } from '../../data/capabilities'
import { Section, SectionHeading } from '../ui/Section'
import Reveal from '../ui/Reveal'

export default function Workflow() {
  return (
    <Section id="process" className="py-20">
      <SectionHeading
        kicker="AI workflow"
        title="One pipeline, idea to market."
        lede="Every product moves through the same system. AI accelerates each stage; judgement decides what ships."
      />
      <Reveal>
        <ol className="grid gap-px overflow-hidden rounded-xl border border-line/10 bg-line/10 sm:grid-cols-2 lg:grid-cols-5">
          {workflow.map((w, i) => (
            <li key={w.step} className="theme-smooth group relative bg-surface p-5 transition-colors duration-150 hover:bg-raised">
              <span className="font-mono text-[11px] text-faint">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-1.5 flex items-center gap-1.5 text-sm font-semibold text-ink">
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
              <p className="mt-1.5 text-xs leading-relaxed text-muted">{w.text}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  )
}
