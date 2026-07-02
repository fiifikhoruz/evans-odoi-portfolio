import { podcast } from '../../data/podcast'
import { presentations } from '../../data/presentations'
import { workflow, stack, github } from '../../data/capabilities'
import SlidePanel from '../ui/SlidePanel'

const langMix = [
  { lang: 'TypeScript', share: 34, cls: 'bg-accent' },
  { lang: 'JavaScript', share: 22, cls: 'bg-accent/70' },
  { lang: 'Vue', share: 16, cls: 'bg-accent/50' },
  { lang: 'Web', share: 16, cls: 'bg-accent/30' },
  { lang: 'Ruby', share: 12, cls: 'bg-accent/15' },
]

const tiers = [
  { label: 'Daily drivers', match: 'Daily driver', filled: 3 },
  { label: 'Production', match: 'Production', filled: 2 },
  { label: 'Working tools', match: 'Working tool', filled: 1 },
]

function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
    >
      {children}
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
    </a>
  )
}

export function PodcastPanel({ onClose }) {
  return (
    <SlidePanel label="Media production" title={podcast.title} onClose={onClose}>
      <div className="grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-line/10 bg-line/10">
        {[
          [podcast.stats.subscribers, 'Subscribers'],
          [podcast.stats.videos, 'Episodes & videos'],
          [podcast.stats.topEpisode, 'Views, top episode'],
        ].map(([v, l]) => (
          <div key={l} className="theme-smooth bg-surface px-4 py-3.5">
            <p className="text-lg font-semibold tracking-tight text-ink">{v}</p>
            <p className="mt-0.5 text-[11px] text-faint">{l}</p>
          </div>
        ))}
      </div>

      <p className="mt-5 text-sm leading-relaxed text-muted">{podcast.positioning}</p>

      <div className="mt-6 overflow-hidden rounded-xl border border-line/10">
        <div className="aspect-video w-full bg-raised">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${podcast.episodes[0].id}`}
            title={podcast.episodes[0].title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <ul className="mt-4 space-y-3">
        {podcast.episodes.map((ep) => (
          <li key={ep.id}>
            <a
              href={`https://www.youtube.com/watch?v=${ep.id}`}
              target="_blank"
              rel="noreferrer"
              className="theme-smooth flex items-center gap-4 rounded-xl border border-line/10 bg-surface p-3 transition-colors duration-150 hover:border-line/25"
            >
              <img
                src={`https://i.ytimg.com/vi/${ep.id}/mqdefault.jpg`}
                alt=""
                loading="lazy"
                className="h-14 w-24 shrink-0 rounded-lg object-cover"
              />
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold text-ink">{ep.title}</span>
                <span className="mt-0.5 block text-xs text-accent">{ep.views}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div className="theme-smooth mt-6 rounded-xl border border-line/10 bg-surface p-5">
        <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">How AI runs the production</h4>
        <div className="mt-4 space-y-4">
          {podcast.aiProduction.map((item) => (
            <div key={item.title}>
              <h5 className="text-sm font-semibold text-ink">{item.title}</h5>
              <p className="mt-1 text-sm leading-relaxed text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 pb-4">
        <ExternalLink href={podcast.url}>Visit the channel</ExternalLink>
      </div>
    </SlidePanel>
  )
}

export function DecksPanel({ onClose }) {
  return (
    <SlidePanel label="Presentations" title="Client & business decks" onClose={onClose}>
      <div className="space-y-6 pb-4">
        {presentations.map((deck) => (
          <article key={deck.url} className="theme-smooth rounded-xl border border-line/10 bg-surface p-4">
            <div className="theme-smooth relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-line/10 bg-raised">
              <iframe src={deck.embed} title={deck.title} loading="lazy" allowFullScreen className="absolute inset-0 h-full w-full border-0" />
            </div>
            <p className="mt-3 text-xs font-medium text-accent">{deck.tag}</p>
            <h4 className="mt-1 text-sm font-semibold text-ink">{deck.title}</h4>
            <p className="mt-1 text-sm leading-relaxed text-muted">{deck.context}</p>
            <div className="mt-2.5">
              <ExternalLink href={deck.url}>Open in Canva</ExternalLink>
            </div>
          </article>
        ))}
      </div>
    </SlidePanel>
  )
}

export function CodePanel({ onClose }) {
  return (
    <SlidePanel label="Code" title={`github.com/${github.username}`} onClose={onClose}>
      <div className="flex flex-wrap items-center gap-4">
        <img src={github.avatar} alt="Evans Odoi, GitHub avatar" loading="lazy" className="h-12 w-12 rounded-full border border-line/10" />
        <div className="min-w-0 flex-1">
          <h4 className="text-sm font-semibold text-ink">Evans Odoi</h4>
          <p className="truncate text-xs text-muted">@{github.username} · “{github.bio}” · {github.repoCount} public repos</p>
        </div>
      </div>

      <div className="theme-smooth mt-5 overflow-hidden rounded-lg border border-line/10 bg-raised p-3">
        <img src={github.chart} alt="GitHub contribution graph" loading="lazy" className="w-full opacity-90" />
      </div>

      <div className="mt-5">
        <div className="flex h-2 w-full gap-0.5 overflow-hidden rounded-full" role="img" aria-label="Language mix across repositories">
          {langMix.map((l) => (
            <span key={l.lang} className={`${l.cls} h-full rounded-sm`} style={{ width: `${l.share}%` }} />
          ))}
        </div>
        <ul className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1">
          {langMix.map((l) => (
            <li key={l.lang} className="flex items-center gap-1.5 text-[11px] text-faint">
              <span className={`h-1.5 w-1.5 rounded-full ${l.cls}`} aria-hidden="true" />
              {l.lang}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {github.repos.map((r) => (
          <a
            key={r.name}
            href={`${github.url}/${r.name}`}
            target="_blank"
            rel="noreferrer"
            className="theme-smooth rounded-lg border border-line/10 bg-surface p-4 transition-colors duration-150 hover:border-line/25"
          >
            <p className="text-sm font-semibold text-ink">{r.name}</p>
            <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">{r.desc}</p>
            <p className="mt-2.5 flex items-center gap-1.5 text-[11px] text-faint">
              <span className="h-1.5 w-1.5 rounded-full bg-accent/60" aria-hidden="true" />
              {r.lang}
            </p>
          </a>
        ))}
      </div>

      <div className="mt-6 pb-4">
        <ExternalLink href={github.url}>View full profile</ExternalLink>
      </div>
    </SlidePanel>
  )
}

export function SystemPanel({ onClose }) {
  return (
    <SlidePanel label="AI workflow & stack" title="One system, idea to market" onClose={onClose}>
      <ol className="space-y-2">
        {workflow.map((w, i) => (
          <li key={w.step} className="theme-smooth flex items-baseline gap-3 rounded-lg border border-line/10 bg-surface px-4 py-3">
            <span className="font-mono text-[11px] text-faint">{String(i + 1).padStart(2, '0')}</span>
            <span className="text-sm font-semibold text-ink">{w.step}</span>
            <span className="ml-auto hidden text-xs text-muted sm:block">{w.text}</span>
          </li>
        ))}
      </ol>

      <div className="mt-6 grid gap-3 pb-4 sm:grid-cols-3">
        {tiers.map((tier) => (
          <div key={tier.label} className="theme-smooth rounded-xl border border-line/10 bg-surface p-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">{tier.label}</h4>
              <span className="flex gap-0.5" aria-hidden="true">
                {[0, 1, 2].map((n) => (
                  <i key={n} className={`h-1 w-3 rounded-full ${n < tier.filled ? 'bg-accent' : 'bg-line/15'}`} />
                ))}
              </span>
            </div>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {stack.filter((t) => t.level === tier.match).map((t) => (
                <li key={t.name} title={t.role} className="theme-smooth rounded-md border border-line/10 bg-raised px-2.5 py-1.5 text-xs text-muted">
                  {t.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SlidePanel>
  )
}
