export const capabilities = [
  {
    title: 'AI Product Development',
    text: 'Taking a product from idea to production with AI in the loop the whole way: scoping, building, testing, shipping.',
    example: 'Aurum PMS: a hotel management SaaS designed, built, and launched solo.',
  },
  {
    title: 'Prompt Engineering',
    text: 'Structured prompts and multi-step workflows that produce output you can actually ship.',
    example: 'Diary for Lawyers: GPT-4 reflection prompts tuned for legal journaling.',
  },
  {
    title: 'Website Building with AI',
    text: 'Complete, fast marketing sites and web apps in days rather than months.',
    example: 'AFROSON1C X: a festival platform with three live application funnels.',
  },
  {
    title: 'UX / UI Design',
    text: 'Interfaces that stay calm under heavy content. Hierarchy, spacing, restraint.',
    example: 'Small Giants: a nine-section editorial site built around one narrative.',
  },
  {
    title: 'Branding Systems',
    text: 'Identity, voice, and visuals that hold together from packaging to product to social.',
    example: 'AB Card Games: a brand in the national press within weeks of launch.',
  },
  {
    title: 'AI Content Creation',
    text: 'Research-backed content pipelines where AI drafts and a human makes the call.',
    example: "Titles, descriptions, and platform copy for 83 podcast videos.",
  },
  {
    title: 'AI Video Production',
    text: 'Long recordings cut into shorts, audiograms, and platform-native formats.',
    example: 'One podcast recording becomes YouTube, Shorts, and social, every week.',
  },
  {
    title: 'Marketing Systems',
    text: 'Funnels that connect content to money: bookings, WhatsApp orders, waitlists.',
    example: 'AB Card Games turns Instagram traffic into WhatsApp orders.',
  },
  {
    title: 'Communication Strategy',
    text: 'Positioning and story structure for products, brands, and rooms full of skeptics.',
    example: 'Four client decks, from investor proposals to clinical case studies.',
  },
]

export const workflow = [
  { step: 'Idea', text: 'Define the problem and who it serves' },
  { step: 'Research', text: 'AI-accelerated market and audience research' },
  { step: 'Prompting', text: 'Structured prompts and context engineering' },
  { step: 'Planning', text: 'Scope, architecture, and milestones' },
  { step: 'Design', text: 'Design system, hierarchy, and flows' },
  { step: 'Development', text: 'AI-paired build with human judgement' },
  { step: 'Testing', text: 'Cross-device, accessibility, performance' },
  { step: 'Deployment', text: 'Ship to production on Vercel' },
  { step: 'Optimization', text: 'Measure, refine, and iterate' },
  { step: 'Marketing', text: 'Content, funnels, and distribution' },
]

export const stack = [
  { name: 'Claude', role: 'AI pair for product, code & writing', level: 'Daily driver' },
  { name: 'ChatGPT', role: 'Research, ideation & content', level: 'Daily driver' },
  { name: 'React', role: 'Interface engineering', level: 'Production' },
  { name: 'Tailwind CSS', role: 'Design systems in code', level: 'Production' },
  { name: 'JavaScript', role: 'Core language', level: 'Production' },
  { name: 'Vercel', role: 'Deployment & hosting', level: 'Production' },
  { name: 'GitHub', role: 'Version control & collaboration', level: 'Production' },
  { name: 'Bolt.new', role: 'Rapid AI prototyping', level: 'Working tool' },
  { name: 'Canva AI', role: 'Decks & brand collateral', level: 'Working tool' },
  { name: 'WordPress', role: 'CMS builds & client sites', level: 'Working tool' },
]

export const github = {
  username: 'fiifikhoruz',
  url: 'https://github.com/fiifikhoruz',
  avatar: 'https://avatars.githubusercontent.com/u/110507688?v=4',
  bio: 'Created. Creating.',
  repoCount: 7,
  chart: 'https://ghchart.rshah.org/6a91d6/fiifikhoruz',
  repos: [
    { name: 'bluise', lang: 'Vue', desc: 'Product experiment built in Vue' },
    { name: 'lawyer-podcast-chronicles', lang: 'Web', desc: 'Digital home for the Diary of a Ghanaian Lawyer brand' },
    { name: 'aurum-marketing', lang: 'JavaScript', desc: 'Marketing site for Aurum PMS' },
    { name: 'heavens-diagnostic', lang: 'TypeScript', desc: 'Diagnostics product build' },
    { name: 'ab-card-games', lang: 'TypeScript', desc: 'Inventory system for AB Card Games' },
    { name: 'docuseal', lang: 'Ruby', desc: 'Fork of the open-source DocuSign alternative' },
  ],
  focus: ['TypeScript & React products', 'Vue experiments', 'Business tooling & inventory systems', 'Open-source tinkering'],
}
