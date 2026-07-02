// Live screenshot service (WordPress mshots). Renders a real screenshot of
// each production URL, with the site's own OG image as fallback.
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
      "AFROSON1C X connects West African artists with the global music business. It needed a site that could hold its own in front of Virgin Music and SXSW London, take applications from artists in Accra, and carry the story of a festival that sold out its first edition.",
    solution:
      "An editorial marketing platform built around the festival's story: past editions in pictures, a partner wall, and three separate application funnels for artists, partners, and attendees. Each one feeds a different pipeline.",
    role: 'I designed and built the digital experience: architecture, design system, build, and deployment.',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Supabase Storage', 'Vercel'],
    aiTools: ['Claude', 'ChatGPT'],
    outcome:
      'The site now carries a festival with a sold-out 2,000-person debut and partners including Virgin Music Group, EMPIRE, SXSW London, and Reeperbahn Festival. Applications for Edition 02 run through it today.',
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
      "Most independent hotels in Ghana still run the front desk on paper. Bookings collide, housekeeping is guesswork, and the owner finds out what the day earned long after it's over.",
    solution:
      'Aurum is a full property management system: a live room board, guest check-in and check-out, staff roles with separate permissions, and end-of-day revenue reports in cedis. The marketing site shows you the product working before you ever book a demo.',
    role: "My company. I designed the product, built it, and I'm the one selling it.",
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    aiTools: ['Claude', 'ChatGPT', 'Bolt.new'],
    outcome:
      'Live in production at app.aurumpms.com, with role-based access for hotel staff and a 20-minute walkthrough funnel doing the selling.',
    highlights: ['Live production app', 'Role-based staff access', 'Daily reports in GHS'],
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
      "Ghana had never produced its own card games. We made one in five editions, and it needed a storefront that could sell the decks, tell the company's story, and turn Instagram traffic into orders.",
    solution:
      'A product-led brand site: five editions with sample cards and prices from GHS 150 to 450, one-tap WhatsApp ordering, the press coverage, and a public roadmap that runs through 2027.',
    role: 'Co-founder. I built the brand system, the site, and the commerce flow.',
    stack: ['HTML/CSS/JS', 'WhatsApp Business API', 'TypeScript (inventory system)'],
    aiTools: ['Claude', 'ChatGPT', 'Canva AI'],
    outcome:
      "MyJoyOnline and GhanaWeb covered the launch as Ghana's first locally created card games. The company made the Création Africa Ghana Top 30. All five editions sell through the site.",
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
      "Lawyers carry confidential stress they can't post about and often can't even talk about. Generic journaling apps weren't built for that.",
    solution:
      'A private, anonymous journal for legal professionals. You write; GPT-4 responds with reflections tuned to the profession. Free to try, no email required.',
    role: 'Concept, UX, and the AI integration design. It extends the Diary of a Ghanaian Lawyer podcast into software.',
    stack: ['React', 'TypeScript', 'Supabase', 'Lovable'],
    aiTools: ['GPT-4 (in-product)', 'Claude', 'Lovable AI'],
    outcome:
      "A live AI product where the AI is the product, not a feature bolted on. Anonymous entries come back with profession-aware reflections.",
    highlights: ['GPT-4 powered reflections', 'Anonymous by design', 'Podcast brand, extended into software'],
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
      "I wanted a Content & Growth role at a media startup where a CV proves nothing. The job is research, writing, design, and shipping with AI in the loop. So the application had to be all four.",
    solution:
      "Instead of a resume, a product: the company's vision mapped as a nine-section editorial site, a five-agent content engine, a build-in-public timeline, and an eight-week plan for 200+ pieces of content. The build process is documented on the page itself.",
    role: 'All of it. Research, strategy, narrative structure, design, code, and copy.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    aiTools: ['Claude', 'ChatGPT'],
    outcome:
      'Weeks of desk research compressed into an afternoon, and a finished product shipped solo. The site makes its own argument: this is what AI-assisted execution looks like.',
    highlights: ['Researched, designed, shipped solo', 'The build is the case study', 'AI in the loop, end to end'],
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
      'Good projects die because the right collaborator never shows up. Finding a technical partner still runs mostly on luck.',
    solution:
      'Patna borrows the swipe. Profiles and project ideas are swipeable, and a connection only happens when both sides opt in. It installs as an app straight from the browser.',
    role: 'Concept, UX, the matching flow, build, and deployment.',
    stack: ['React', 'TypeScript', 'Supabase', 'PWA', 'Lovable'],
    aiTools: ['Claude', 'Lovable AI', 'ChatGPT'],
    outcome:
      'Live at patna.dev as an installable app, matching developers, designers, and founders on mutual interest.',
    highlights: ['Both sides must say yes', 'Installs from the browser', 'Live at patna.dev'],
  },
]
