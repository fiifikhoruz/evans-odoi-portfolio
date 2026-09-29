import Reveal from '../ui/Reveal'
import { projects } from '../../data/projects'

const proof = [
  { value: '7', label: 'Products live in production' },
  { value: '83', label: 'Podcast episodes shipped' },
  { value: '2,000+', label: 'Bank clients onboarded yearly' },
  { value: '2', label: 'Companies co-founded' },
]

export default function Hero() {
  return (
    <section id="top" className="theme-blue theme-smooth relative overflow-hidden bg-bg px-5 pb-20 pt-20 sm:px-8 sm:pt-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[440px] bg-[radial-gradient(640px_circle_at_28%_-12%,rgb(var(--c-accent)/0.09),transparent_62%)]"
      />
      <div className="mx-auto max-w-content">
        <Reveal>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line/10 bg-surface px-3.5 py-1.5 text-xs font-medium text-muted theme-smooth">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Accra, Ghana · Product strategy, design and delivery
          </p>
        </Reveal>
        <Reveal delay={40}>
          <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tighter text-ink sm:text-6xl md:text-7xl">
            Real products.
            <br />
            Built with AI for business.
          </h1>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            I&rsquo;m Evans Odoi, a product-focused builder and communication professional in Accra.
            I turn business problems into useful digital products, from the first decision to a
            live release. AI helps me move faster. Product judgement keeps the work useful.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="rounded-lg bg-btn px-5 py-2.5 text-sm font-medium text-btntext transition-opacity hover:opacity-90"
            >
              See the work
            </a>
            <a
              href="#contact"
              className="theme-smooth rounded-lg border border-line/15 bg-surface px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-line/30"
            >
              Work with me
            </a>
          </div>
        </Reveal>
        <Reveal delay={140}>
          <a href="#work" className="group mt-8 inline-flex items-center gap-3">
            <span className="flex -space-x-2">
              {projects.map((p) => (
                <img
                  key={p.id}
                  src={p.mobileShot}
                  alt=""
                  loading="lazy"
                  className="theme-smooth h-9 w-9 rounded-full border-2 border-bg bg-raised object-cover object-top"
                />
              ))}
            </span>
            <span className="text-sm text-muted transition-colors duration-150 group-hover:text-ink">
              7 live projects, see them all →
            </span>
          </a>
        </Reveal>
        <Reveal delay={160}>
          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line/10 bg-line/10 sm:grid-cols-4">
            {proof.map((p) => (
              <div key={p.label} className="theme-smooth bg-surface px-5 py-5">
                <dt className="order-2 mt-1 block text-xs text-faint">{p.label}</dt>
                <dd className="order-1 text-2xl font-semibold tracking-tight text-ink">{p.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
