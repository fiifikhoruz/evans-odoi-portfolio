import { capabilities } from '../../data/capabilities'
import { Section, SectionHeading } from '../ui/Section'
import Reveal from '../ui/Reveal'

export default function Capabilities() {
  return (
    <Section id="capabilities" className="py-20">
      <SectionHeading
        kicker="AI capabilities"
        title="A structured capability system."
        lede="Not a skills list — a set of working capabilities, each proven by something shipped."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((c, i) => (
          <Reveal
            key={c.title}
            delay={(i % 3) * 60}
            as="article"
            className="theme-smooth flex flex-col rounded-xl border border-line/10 bg-surface p-5 transition-colors duration-300 hover:border-line/25"
          >
            <h3 className="text-sm font-semibold text-ink">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{c.text}</p>
            <p className="theme-smooth mt-4 border-t border-line/10 pt-3 text-xs leading-relaxed text-faint">
              <span className="font-semibold uppercase tracking-wider text-accent">Proof · </span>
              {c.example}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
