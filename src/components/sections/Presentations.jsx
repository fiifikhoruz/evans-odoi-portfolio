import { presentations } from '../../data/presentations'
import { Section, SectionHeading } from '../ui/Section'
import Reveal from '../ui/Reveal'

function DeckEmbed({ embed, title }) {
  // Live Canva embed: the real deck, flippable in place.
  return (
    <div className="theme-smooth relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-line/10 bg-raised">
      <iframe
        src={embed}
        title={title}
        loading="lazy"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  )
}

export default function Presentations() {
  return (
    <Section id="presentations" className="py-20">
      <SectionHeading
        kicker="Presentations"
        title="Complex ideas, presented cleanly."
        lede="Client and business decks built with Canva AI, from investor proposals to clinical case studies. The job is always the same: take dense material and make a room understand it."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {presentations.map((deck, i) => (
          <Reveal
            key={deck.url}
            delay={i * 40}
            as="article"
            className="theme-smooth group rounded-xl border border-line/10 bg-surface p-5 transition-shadow duration-150 hover:shadow-lg hover:shadow-black/5"
          >
            <DeckEmbed embed={deck.embed} title={deck.title} />
            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-accent">{deck.tag}</p>
                <h3 className="mt-1 text-sm font-semibold text-ink">{deck.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{deck.context}</p>
              </div>
            </div>
            <a
              href={deck.url}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
            >
              Open deck
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 17 17 7M8 7h9v9" />
              </svg>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
