import { presentations } from '../../data/presentations'
import { Section, SectionHeading } from '../ui/Section'
import Reveal from '../ui/Reveal'

function SlidePreview({ title }) {
  // Clean typographic slide preview — no external assets required.
  return (
    <div className="theme-smooth relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-line/10 bg-raised">
      <div className="absolute inset-0 p-5">
        <span className="block h-1 w-8 rounded-full bg-accent/70" aria-hidden="true" />
        <p className="mt-3 line-clamp-2 max-w-[85%] text-sm font-semibold leading-snug text-ink">{title}</p>
        <div className="mt-3 space-y-1.5" aria-hidden="true">
          <span className="block h-1.5 w-3/4 rounded-full bg-line/10" />
          <span className="block h-1.5 w-1/2 rounded-full bg-line/10" />
          <span className="block h-1.5 w-2/3 rounded-full bg-line/10" />
        </div>
      </div>
      <span
        aria-hidden="true"
        className="absolute bottom-3 right-4 text-[10px] font-medium uppercase tracking-widest text-faint"
      >
        Canva deck
      </span>
    </div>
  )
}

export default function Presentations() {
  return (
    <Section id="presentations" className="py-20">
      <SectionHeading
        kicker="Presentations"
        title="Complex ideas, presented cleanly."
        lede="Client and business decks designed with Canva AI — from investor proposals to clinical case studies. Structure and story first, decoration last."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {presentations.map((deck, i) => (
          <Reveal
            key={deck.url}
            delay={i * 60}
            as="article"
            className="theme-smooth group rounded-xl border border-line/10 bg-surface p-5 transition-shadow duration-300 hover:shadow-lg hover:shadow-black/5"
          >
            <SlidePreview title={deck.title} />
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
