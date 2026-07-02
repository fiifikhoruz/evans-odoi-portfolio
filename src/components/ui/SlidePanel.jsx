import { useEffect, useRef, useState } from 'react'

const EASE = { transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)', transitionDuration: '280ms' }

export default function SlidePanel({ label, title, onClose, children }) {
  const [shown, setShown] = useState(false)
  const panelRef = useRef(null)

  const close = () => {
    setShown(false)
    setTimeout(onClose, 280)
  }

  useEffect(() => {
    const raf = requestAnimationFrame(() => setShown(true))
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    panelRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      cancelAnimationFrame(raf)
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
        aria-label={title}
        style={EASE}
        className={`theme-smooth absolute inset-y-0 right-0 flex w-full flex-col border-l border-line/10 bg-bg transition-transform sm:max-w-2xl lg:max-w-3xl ${
          shown ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <header className="theme-smooth flex items-center justify-between gap-3 border-b border-line/10 bg-bg px-5 py-3.5 sm:px-8">
          <div className="min-w-0">
            <p className="truncate text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">{label}</p>
            <h3 className="truncate text-base font-semibold text-ink">{title}</h3>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="theme-smooth inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line/10 bg-surface text-muted transition-colors duration-150 hover:text-ink"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
        </header>
        <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-6 sm:px-8">{children}</div>
      </div>
    </div>
  )
}
