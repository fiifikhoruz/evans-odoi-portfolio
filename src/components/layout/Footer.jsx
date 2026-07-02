import { Section } from '../ui/Section'
import Reveal from '../ui/Reveal'

export default function Footer() {
  return (
    <>
      <Section id="contact" className="pb-24 pt-4">
        <Reveal className="theme-smooth rounded-2xl border border-line/10 bg-surface p-8 text-center sm:p-14">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Have a project worth building?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted">
            I work with founders, brands, and teams who want their ideas shipped, and shipped well.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:odoifiifi@gmail.com"
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-onaccent transition-opacity hover:opacity-90"
            >
              odoifiifi@gmail.com
            </a>
            <a
              href="https://github.com/fiifikhoruz"
              target="_blank"
              rel="noreferrer"
              className="theme-smooth rounded-lg border border-line/15 bg-raised px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-line/30"
            >
              GitHub
            </a>
          </div>
        </Reveal>
      </Section>

      <footer className="theme-smooth border-t border-line/10 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-3 text-xs text-faint sm:flex-row">
          <p>© {new Date().getFullYear()} Evans Odoi · Accra, Ghana</p>
          <p>Designed and built with AI in the loop. Judgement included.</p>
        </div>
      </footer>
    </>
  )
}
