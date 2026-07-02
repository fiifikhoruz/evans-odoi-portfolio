import { stack } from '../../data/capabilities'
import { Section, SectionHeading } from '../ui/Section'
import Reveal from '../ui/Reveal'

const levelStyle = {
  'Daily driver': 'text-accent',
  Production: 'text-muted',
  'Working tool': 'text-faint',
}

export default function Stack() {
  return (
    <Section id="stack" className="py-20">
      <SectionHeading
        kicker="AI stack"
        title="Tools used professionally."
        lede="The working stack behind every project — AI assistants, frameworks, and platforms."
      />
      <Reveal>
        <ul className="grid gap-px overflow-hidden rounded-xl border border-line/10 bg-line/10 sm:grid-cols-2 lg:grid-cols-5">
          {stack.map((t) => (
            <li key={t.name} className="theme-smooth bg-surface p-5 transition-colors duration-300 hover:bg-raised">
              <h3 className="text-sm font-semibold text-ink">{t.name}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted">{t.role}</p>
              <p className={`mt-3 text-[11px] font-medium uppercase tracking-wider ${levelStyle[t.level]}`}>
                {t.level}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
