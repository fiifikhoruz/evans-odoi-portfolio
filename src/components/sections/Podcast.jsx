import { podcast } from '../../data/podcast'
import { Section, SectionHeading } from '../ui/Section'
import Reveal from '../ui/Reveal'

function Episode({ ep, featured }) {
  return (
    <Reveal
      as="article"
      className="theme-smooth overflow-hidden rounded-xl border border-line/10 bg-surface transition-shadow duration-300 hover:shadow-lg hover:shadow-black/5"
    >
      <div className="aspect-video w-full bg-raised">
        {featured ? (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${ep.id}`}
            title={ep.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <a
            href={`https://www.youtube.com/watch?v=${ep.id}`}
            target="_blank"
            rel="noreferrer"
            aria-label={`Watch ${ep.title} on YouTube`}
            className="group relative block h-full w-full"
          >
            <img
              src={`https://i.ytimg.com/vi/${ep.id}/hqdefault.jpg`}
              alt={`Thumbnail — ${ep.title}`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors group-hover:bg-black/10">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/95 shadow-md transition-transform group-hover:scale-105">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 text-black" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </a>
        )}
      </div>
      <div className="p-5">
        <p className="text-xs font-medium text-accent">{ep.views}</p>
        <h3 className="mt-1.5 text-sm font-semibold leading-snug text-ink">{ep.title}</h3>
        <p className="mt-1.5 text-xs leading-relaxed text-muted">{ep.note}</p>
      </div>
    </Reveal>
  )
}

export default function Podcast() {
  return (
    <Section id="podcast" className="py-20">
      <SectionHeading
        kicker="Media production"
        title={podcast.title}
        lede={podcast.positioning}
      />

      <Reveal className="mb-10 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-line/10 bg-line/10">
        {[
          [podcast.stats.subscribers, 'Subscribers'],
          [podcast.stats.videos, 'Episodes & videos'],
          [podcast.stats.topEpisode, 'Views, top episode'],
        ].map(([v, l]) => (
          <div key={l} className="theme-smooth bg-surface px-5 py-4">
            <p className="text-xl font-semibold tracking-tight text-ink">{v}</p>
            <p className="mt-0.5 text-xs text-faint">{l}</p>
          </div>
        ))}
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        {podcast.episodes.map((ep, i) => (
          <Episode key={ep.id} ep={ep} featured={i === 0} />
        ))}
      </div>

      <Reveal className="mt-10 rounded-xl border border-line/10 bg-surface p-6 sm:p-8 theme-smooth">
        <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-faint">
          AI-assisted production
        </h3>
        <div className="mt-5 grid gap-6 sm:grid-cols-3">
          {podcast.aiProduction.map((item) => (
            <div key={item.title}>
              <h4 className="text-sm font-semibold text-ink">{item.title}</h4>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.text}</p>
            </div>
          ))}
        </div>
        <a
          href={podcast.url}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
        >
          Visit the channel
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 17 17 7M8 7h9v9" />
          </svg>
        </a>
      </Reveal>
    </Section>
  )
}
