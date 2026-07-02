import { capabilities } from '../../data/capabilities'
import { useSpotlight } from '../../hooks/useSpotlight'
import { Section, SectionHeading } from '../ui/Section'
import Reveal from '../ui/Reveal'

function CapCard({ c, index }) {
  const spot = useSpotlight()
  return (
    <article
      ref={spot.ref}
      onMouseMove={spot.onMouseMove}
      onMouseLeave={spot.onMouseLeave}
      className="spot-card theme-smooth flex h-full flex-col rounded-xl border border-line/10 bg-surface p-4 transition-colors duration-150 hover:border-line/25 sm:p-5"
    >
      <span className="font-mono text-[11px] text-faint">{String(index + 1).padStart(2, '0')}</span>
      <h3 className="mt-1.5 text-sm font-semibold leading-snug text-ink">{c.title}</h3>
      <p className="mt-2 hidden text-sm leading-relaxed text-muted sm:block">{c.text}</p>
      <p className="theme-smooth mt-3 border-t border-line/10 pt-2.5 text-xs leading-relaxed text-faint sm:mt-4 sm:pt-3">
        <span className="font-semibold uppercase tracking-wider text-accent">Proof · </span>
        {c.example}
      </p>
      <span className="spot-layer" aria-hidden="true" />
    </article>
  )
}

export default function Capabilities() {
  return (
    <Section id="capabilities" className="py-20">
      <SectionHeading
        kicker="AI capabilities"
        title="A structured capability system."
        lede="Not a skills list. Every capability here comes with proof: a real project that shipped."
      />
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-4">
        {capabilities.map((c, i) => (
          <Reveal key={c.title} delay={(i % 3) * 40}>
            <CapCard c={c} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
