import { Section, SectionHeading } from '../ui/Section'
import Reveal from '../ui/Reveal'

const experience = [
  {
    period: '2024 to present',
    role: 'Founder & Creative Lead',
    company: 'Supreme Studios',
    summary:
      'I lead product, web and communication work for growing businesses, taking projects from an unclear brief to a live, usable system.',
    proof: 'Web products, brand systems, presentations and production workflows shipped for clients.',
  },
  {
    period: '2025 to present',
    role: 'Co-founder & Product Lead',
    company: 'AB Card Games',
    summary:
      'I shape the product range, brand system, commerce experience and go-to-market work for a Ghana-born games company.',
    proof: 'Five editions launched, national press coverage and Création Africa Ghana Top 30 selection.',
  },
  {
    period: '2019 to 2022',
    role: 'Digital Sales Officer',
    company: 'Standard Chartered Bank Ghana',
    summary:
      'I helped customers adopt digital banking products, solved onboarding problems and trained teammates in a regulated environment.',
    proof: 'About 2,000 new-to-bank clients onboarded yearly and 18 team members trained or mentored.',
  },
]

export default function Experience() {
  return (
    <Section id="experience" theme="gray" className="py-20">
      <SectionHeading
        kicker="Experience"
        title="I understand the product and the business around it."
        lede="The work sits across product decisions, communication, customer experience and hands-on delivery."
      />

      <ol className="grid gap-px overflow-hidden rounded-2xl border border-line/10 bg-line/10 lg:grid-cols-3">
        {experience.map((item, index) => (
          <li key={item.company} className="theme-smooth bg-surface p-6 sm:p-8">
            <Reveal delay={index * 40}>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                {item.period}
              </p>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">{item.role}</h3>
              <p className="mt-1 text-sm font-medium text-muted">{item.company}</p>
              <p className="mt-5 text-base leading-relaxed text-muted">{item.summary}</p>
              <p className="theme-smooth mt-5 border-t border-line/10 pt-4 text-sm leading-relaxed text-faint">
                {item.proof}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
