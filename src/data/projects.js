// Live screenshot service (WordPress mshots) — renders a real screenshot of
// each production URL. Falls back to the site's own OG image if unavailable.
const shot = (url) => `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=1200`
const shotMobile = (url) => `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?vpw=420&vph=880&w=480`

export const projects = [
  {
    id: 'afroson1cx',
    name: 'AFROSON1C X',
    tagline: 'Where West Africa meets the global music industry',
    category: 'Festival & Industry Platform',
    url: 'https://afroson1cx.com',
    desktopShot: shot('https://www.afroson1cx.com'),
    mobileShot: shotMobile('https://www.afroson1cx.com'),
    fallback: 'https://www.afroson1cx.com/opengraph-image',
    problem:
      'An international music festival and industry conference in Accra needed a digital presence credible enough for global partners — labels, platforms, and brands — while handling artist applications, partner enquiries, and edition-to-edition storytelling.',
    solution:
      'A fast, editorial marketing platform built around the festival’s narrative: editions, highlights, partner showcase, and three separate application funnels for artists, partners, and attendees.',
    role: 'Product builder & digital experience designer — architecture, design system, build, and deployment.',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Supabase Storage', 'Vercel'],
    aiTools: ['Claude', 'ChatGPT'],
    outcome:
      'Supports a festival with a sold-out 2,000-capacity debut and partners including Virgin Music Group, EMPIRE, SXSW London, and Reeperbahn Festival. Edition 02 applications now run through the site.',
    highlights: ['Sold-out Edition 01', '14+ global partners', '3 application funnels'],
  },
  {
    id: 'aurumpms',
    name: 'Aurum PMS',
    tagline: 'Hotel management software built for Ghana',
    category: 'SaaS Product',
    url: 'https://aurumpms.com',
    desktopShot: shot('https://www.aurumpms.com'),
    mobileShot: shotMobile('https://www.aurumpms.com'),
    fallback: null,
    problem:
      'Independent hotels in Ghana still run front desks on paper and spreadsheets — bookings collide, housekeeping status is guesswork, and owners have no clean view of daily revenue.',
    solution:
      'A full property management system: room board, guest bookings with check-in/check-out, staff permission levels, and end-of-day revenue reports in Ghana cedis — plus a marketing site with an interactive product demo and walkthrough booking.',
    role: 'Founder & product builder — product design, engineering, and go-to-market.',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    aiTools: ['Claude', 'ChatGPT', 'Bolt.new'],
    outcome:
      'A live SaaS product with a dedicated app (app.aurumpms.com), role-based access for hotel staff, and a 20-minute walkthrough sales funnel.',
    highlights: ['Live production app', 'Role-based staff access', 'GHS daily reporting'],
  },
  {
    id: 'abcardgames',
    name: 'AB Card Games',
    tagline: 'Made in Ghana, played everywhere',
    category: 'E-commerce & Brand',
    url: 'https://abcardgames.com',
    desktopShot: shot('https://www.abcardgames.com'),
    mobileShot: shotMobile('https://www.abcardgames.com'),
    fallback: 'https://www.abcardgames.com/logo.jpg',
    problem:
      'Ghana’s first locally developed card game company needed a storefront and brand home that could sell five product editions, tell the company story, and convert social traffic into WhatsApp orders.',
    solution:
      'A product-led brand site: edition catalogue with sample cards and pricing, WhatsApp commerce integration, press coverage, an SDG impact section, and a public roadmap.',
    role: 'Co-founder & product builder — brand system, site design, build, and commerce flow.',
    stack: ['HTML/CSS/JS', 'WhatsApp Business API', 'TypeScript (inventory system)'],
    aiTools: ['Claude', 'ChatGPT', 'Canva AI'],
    outcome:
      'Covered by MyJoyOnline and GhanaWeb as Ghana’s first locally created card games; selected into the Création Africa Ghana Top 30 incubation programme. Five editions selling via the site.',
    highlights: ['National press coverage', 'Création Africa Top 30', '5 editions live'],
  },
  {
    id: 'diaryforlawyers',
    name: 'Diary for Lawyers',
    tagline: 'A safe space for lawyers to think out loud',
    category: 'AI Web App',
    url: 'https://diaryforlawyers.com',
    desktopShot: shot('https://diaryforlawyers.com'),
    mobileShot: shotMobile('https://diaryforlawyers.com'),
    fallback: 'https://diaryforlawyers.lovable.app/lovable-uploads/7e73e732-98f9-48fe-9452-db5564d19d05.png',
    problem:
      'Legal professionals carry heavy confidential stress with nowhere safe to process it — journaling apps aren’t built for their privacy needs or their profession.',
    solution:
      'A private, anonymous journaling platform designed for lawyers, with AI-generated reflections tailored to the legal profession. Free to try, no email required.',
    role: 'Product builder — concept, UX, AI integration design, and launch. Built as a digital companion to the Diary of a Ghanaian Lawyer podcast.',
    stack: ['React', 'TypeScript', 'Supabase', 'Lovable'],
    aiTools: ['GPT-4 (in-product)', 'Claude', 'Lovable AI'],
    outcome:
      'A live AI product where the AI is the core feature, not a garnish — anonymous entries receive profession-aware reflections. Extends a podcast brand into software.',
    highlights: ['GPT-4 powered reflections', 'Anonymous by design', 'Podcast-to-product extension'],
  },
  {
    id: 'smallgiants',
    name: 'Small Giants',
    tagline: 'A job application, shipped as a product',
    category: 'Interactive Pitch Site',
    url: 'https://small-giants-mu.vercel.app/',
    desktopShot: shot('https://small-giants-mu.vercel.app'),
    mobileShot: shotMobile('https://small-giants-mu.vercel.app'),
    fallback: 'https://small-giants-mu.vercel.app/opengraph-image.png',
    problem:
      'Applying for a Content & Growth role at a media-education startup where a CV proves nothing — the role demands research, writing, design, and AI-assisted shipping.',
    solution:
      'Instead of a resume, a full product: an editorial site mapping the company’s vision, a founder operating system, a five-agent AI content engine, a build-in-public timeline, and an eight-week execution plan — with the build process itself documented as the case study.',
    role: 'Everything — research, strategy, narrative architecture, design system, development, and copy.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    aiTools: ['Claude', 'ChatGPT'],
    outcome:
      'Weeks of desk research compressed into an afternoon; a complete, polished product shipped solo. The site argues its own case: this is what AI-assisted execution looks like.',
    highlights: ['Research → shipped, solo', 'Self-documenting build', 'AI-in-the-loop end to end'],
  },
  {
    id: 'patna',
    name: 'Patna',
    tagline: 'Find your next tech partner',
    category: 'Matching Platform (PWA)',
    url: 'https://patna.dev',
    desktopShot: shot('https://patna.dev'),
    mobileShot: shotMobile('https://patna.dev'),
    fallback: 'https://patna.dev/lovable-uploads/a381fd1c-a9a7-4faa-9339-09934ad04f6c.png',
    problem:
      'Developers, designers, and founders struggle to find collaborators — good ideas stall because the right partner never shows up.',
    solution:
      'A swipe-to-match platform for tech collaboration: profiles and project ideas are swipeable, and connections only happen when both sides opt in. Installable as a progressive web app.',
    role: 'Product builder — concept, UX, matching flow design, build, and deployment.',
    stack: ['React', 'TypeScript', 'Supabase', 'PWA', 'Lovable'],
    aiTools: ['Claude', 'Lovable AI', 'ChatGPT'],
    outcome:
      'A live installable app with mutual-interest matching, project browsing, and network building for the tech community.',
    highlights: ['Mutual-match mechanic', 'Installable PWA', 'Live at patna.dev'],
  },
]
