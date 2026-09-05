import { useState } from 'react'
import { List, X } from '@phosphor-icons/react'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#capabilities', label: 'Capabilities' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="theme-smooth sticky top-0 z-50 border-b border-line/10 bg-bg/80 backdrop-blur-md">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-content items-center justify-between px-5 sm:px-8">
        <a href="#top" className="text-sm font-semibold tracking-tight text-ink">
          Evans Odoi
          <span className="ml-2 hidden font-normal text-faint sm:inline">AI Product Builder</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 rounded-lg bg-btn px-3.5 py-2 text-sm font-medium text-btntext transition-opacity hover:opacity-90"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="theme-smooth inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line/10 bg-surface text-muted"
          >
            {open ? <X size={17} weight="bold" aria-hidden="true" /> : <List size={17} weight="bold" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="theme-smooth border-t border-line/10 bg-bg px-5 pb-4 pt-2 lg:hidden">
          {[...links, { href: '#contact', label: 'Contact' }].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-2 py-2.5 text-sm text-muted hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
