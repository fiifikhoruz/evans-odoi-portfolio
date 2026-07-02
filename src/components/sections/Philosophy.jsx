import { Section } from '../ui/Section'
import Reveal from '../ui/Reveal'

export default function Philosophy() {
  return (
    <Section id="philosophy" className="py-20">
      <Reveal className="theme-smooth mx-auto max-w-3xl rounded-2xl border border-line/10 bg-surface p-8 sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Philosophy</p>
        <blockquote className="mt-5 text-xl font-semibold leading-snug tracking-tight text-ink sm:text-2xl">
          AI does not replace expertise. It amplifies it.
        </blockquote>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
          <p>
            My work sits where communication, design, engineering, and product thinking meet.
            Each one keeps the others honest. Communication decides what a product should say;
            design decides how it should feel; engineering decides whether it holds up; product
            thinking decides whether it should exist at all.
          </p>
          <p>
            AI changes the economics of that work, not the standard. A first draft in minutes
            instead of days. Research in an afternoon instead of a month. The busywork disappears,
            so judgement and taste get more attention rather than less. The tools are fast; the
            bar stays where it was.
          </p>
          <p>
            Everything on this page came out of that method. A festival platform, a hotel system,
            a card game company, a journal for lawyers. Different industries, same approach: use
            AI for speed, and never let it stand in for clarity or craft.
          </p>
        </div>
      </Reveal>
    </Section>
  )
}
