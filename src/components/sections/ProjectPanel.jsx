import { useEffect, useRef, useState } from 'react'
import { BrowserFrame, PhoneFrame } from '../ui/DeviceFrames'

function Meta({ label, children }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">{label}</h4>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{children}</p>
    </div>
  )
}

function Chips({ label, items }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">{label}</h4>
      <ul className="mt-2 flex flex-wrap gap-1.5">
        {items.map((t) => (
          <li key={t} className="theme-smooth rounded-md border border-line/10 bg-raised px-2 py-1 text-xs text-muted">
            {t}
          </li>
        ))}
      </ul>
    </div>
  )
}

const EASE = { transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)', transitionDuration: '280ms' }

export default function ProjectPanel({ projects, index, onClose, onNav }) {
  const p = projects[index]
  const [shown, setShown] = useState(false)
  const panelRef = useRef(null)
  const scrollRef = useRef(null)

  const close = () => {
    setShown(false)
    setTimeout(onClose, 280)
  }

  useEffect(() => {
    const raf = requestAnimationFrame(() => setShown(true))
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    panelRef.current?.focus()
    return () => {
      cancelAnimationFrame(raf)
      document.body.style.overflow = prev
    }
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') onNav(1)
      if (e.key === 'ArrowLeft') onNav(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 })
  }, [index])

  return (
    <div className="fixed inset-0 z-[70]">
      <div
        onClick={close}
        aria-hidden="true"
        className={`absolute inset-0 bg-black/50 transition-opacity duration-200 ${shown ? 'opacity-100' : 'opacity-0'}`}
      />
      <div
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={`${p.name} case study`}
        style={EASE}
        className={`theme-smooth absolute inset-y-0 right-0 flex w-full flex-col border-l border-line/10 bg-bg transition-transform sm:max-w-2xl lg:max-w-3xl ${
          shown ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <header className="theme-smooth flex items-center justify-between gap-3 border-b border-line/10 bg-bg px-5 py-3.5 sm:px-8">
          <div className="min-w-0">
            <p className="truncate text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">{p.category}</p>
            <h3 className="truncate text-base font-semibold text-ink">{p.name}</h3>
          </div>
          <div className="flex shrink-0 items-center gap-1.5">
            <button
              type="button"
              onClick={() => onNav(-1)}
              aria-label="Previous project"
              className="theme-smooth inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line/10 bg-surface text-muted transition-colors duration-150 hover:text-ink"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button
              type="button"
              onClick={() => onNav(1)}
              aria-label="Next project"
              className="theme-smooth inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line/10 bg-surface text-muted transition-colors duration-150 hover:text-ink"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
            </button>
            <button
              type="button"
              onClick={close}
              aria-label="Close case study"
              className="theme-smooth ml-1 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line/10 bg-surface text-muted transition-colors duration-150 hover:text-ink"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>
          </div>
        </header>

        {/* Scrollable body */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto overscroll-contain px-5 py-6 sm:px-8">
          <div className="relative">
            <BrowserFrame src={p.desktopShot} fallback={p.fallback} alt={`${p.name}, desktop view`} url={p.url} />
            <div className="absolute -bottom-4 -right-2 hidden w-[26%] sm:block">
              <PhoneFrame src={p.mobileShot} fallback={p.fallback} alt={`${p.name}, mobile view`} />
            </div>
          </div>

          <p className="mt-8 text-sm text-muted">{p.tagline}</p>

          <div className="mt-6 space-y-5">
            <Meta label="Problem">{p.problem}</Meta>
            <Meta label="Solution">{p.solution}</Meta>
            <Meta label="My role">{p.role}</Meta>
            <div className="grid gap-5 sm:grid-cols-2">
              <Chips label="Tech stack" items={p.stack} />
              <Chips label="AI tools" items={p.aiTools} />
            </div>
            <Meta label="Outcome">{p.outcome}</Meta>
          </div>

          <div className="theme-smooth mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line/10 pt-5">
            {p.highlights.map((h) => (
              <span key={h} className="inline-flex items-center gap-1.5 text-xs text-muted">
                <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
                {h}
              </span>
            ))}
          </div>

          <div className="mt-6 flex gap-3 pb-4">
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity duration-150 hover:opacity-90"
            >
              Visit live site
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
            </a>
            <a
              href="https://github.com/fiifikhoruz"
              target="_blank"
              rel="noreferrer"
              className="theme-smooth inline-flex items-center rounded-lg border border-line/15 bg-raised px-4 py-2 text-sm text-muted transition-colors duration-150 hover:text-ink"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
