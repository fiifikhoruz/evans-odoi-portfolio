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
            AI removes the busywork; judgement and taste stay human. Every project on this page,
            from a festival platform to hotel software, came out of that method.
          </p>
          <p>
            The words follow the same rule. I write in a tone borrowed from Monzo: plain language,
            warm and direct, simple without being dumbed down.
          </p>
        </div>
      </Reveal>
    </Section>
  )
}
