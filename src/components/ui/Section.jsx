import Reveal from './Reveal'

export function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`scroll-mt-24 px-5 sm:px-8 ${className}`}>
      <div className="mx-auto max-w-content">{children}</div>
    </section>
  )
}

export function SectionHeading({ kicker, title, lede }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      {kicker && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">{kicker}</p>
      )}
      <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{title}</h2>
      {lede && <p className="mt-4 hidden text-base leading-relaxed text-muted sm:block">{lede}</p>}
    </Reveal>
  )
}
