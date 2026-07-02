import { useState } from 'react'
import { capabilities } from '../../data/capabilities'
import { Section, SectionHeading } from '../ui/Section'
import Reveal from '../ui/Reveal'

const N = capabilities.length

function segPath(i) {
  const R = 92
  const r = 58
  const pad = 0.03
  const a0 = (i / N) * Math.PI * 2 - Math.PI / 2 + pad
  const a1 = ((i + 1) / N) * Math.PI * 2 - Math.PI / 2 - pad
  const pt = (a, rad) => `${100 + rad * Math.cos(a)} ${100 + rad * Math.sin(a)}`
  const large = a1 - a0 > Math.PI ? 1 : 0
  return `M${pt(a0, R)} A${R} ${R} 0 ${large} 1 ${pt(a1, R)} L${pt(a1, r)} A${r} ${r} 0 ${large} 0 ${pt(a0, r)} Z`
}

export default function Capabilities() {
  const [sel, setSel] = useState(0)
  const c = capabilities[sel]

  return (
    <Section id="capabilities" className="py-20">
      <SectionHeading
        kicker="AI capabilities"
        title="Nine capabilities, one system."
        lede="Tap a segment. Every capability comes with proof: a real project that shipped."
      />

      <Reveal>
        <div className="theme-smooth grid items-center gap-8 rounded-2xl border border-line/10 bg-surface p-6 sm:p-8 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-12">
          {/* Donut */}
          <svg viewBox="0 0 200 200" className="mx-auto w-full max-w-[260px] sm:max-w-[300px]" aria-hidden="true">
            {capabilities.map((cap, i) => (
              <path
                key={cap.title}
                d={segPath(i)}
                onClick={() => setSel(i)}
                fill="rgb(var(--c-accent))"
                opacity={sel === i ? 1 : 0.16 + 0.05 * (N - i)}
                className="cursor-pointer transition-opacity duration-150 hover:opacity-90"
              />
            ))}
            <text x="100" y="97" textAnchor="middle" style={{ fill: 'rgb(var(--c-ink))', fontSize: 24, fontWeight: 600, fontFamily: 'inherit' }}>
              {String(sel + 1).padStart(2, '0')}
            </text>
            <text x="100" y="116" textAnchor="middle" style={{ fill: 'rgb(var(--c-faint))', fontSize: 9, letterSpacing: 2 }}>
              OF {String(N).padStart(2, '0')}
            </text>
          </svg>

          {/* Detail */}
          <div>
            <div aria-live="polite">
              <h3 className="text-lg font-semibold tracking-tight text-ink">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.text}</p>
              <p className="theme-smooth mt-4 border-t border-line/10 pt-3 text-sm leading-relaxed text-faint">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">Proof · </span>
                {c.example}
              </p>
            </div>
            <ul className="mt-6 flex flex-wrap gap-1.5">
              {capabilities.map((cap, i) => (
                <li key={cap.title}>
                  <button
                    type="button"
                    onClick={() => setSel(i)}
                    aria-pressed={sel === i}
                    className={`theme-smooth rounded-md border px-2.5 py-1.5 text-xs transition-colors duration-150 ${
                      sel === i
                        ? 'border-accent/50 bg-accent/10 text-ink'
                        : 'border-line/10 bg-raised text-muted hover:text-ink'
                    }`}
                  >
                    {cap.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
