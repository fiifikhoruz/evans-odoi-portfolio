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
            My work sits at the intersection of communication, design, engineering, and product
            thinking. Each discipline sharpens the others: communication decides what a product
            should say, design decides how it should feel, engineering decides how it holds up,
            and product thinking decides whether it should exist at all.
          </p>
          <p>
            AI changes the economics of that work, not its standards. It reduces friction between
            an idea and its first draft, compresses weeks of research into an afternoon, and takes
            the busywork out of building — so that judgement, taste, and editorial care get more
            attention, not less. The tools move fast; the bar stays where it was.
          </p>
          <p>
            That is the through-line in everything on this page. A festival platform, a hotel
            management system, a card game brand, a journaling app for lawyers — different
            industries, one method: use AI to increase speed and execution quality, and never let
            it substitute for clarity or craft.
          </p>
        </div>
      </Reveal>
    </Section>
  )
}
