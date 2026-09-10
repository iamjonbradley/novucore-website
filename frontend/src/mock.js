// Mock data for NovuCore — replaced with API calls when backend is wired up.

export const company = {
  name: "NovuCore",
  tagline: "Build · Evolve · Empower",
  pitch: "Custom-coded websites & web apps for ambitious teams.",
  email: "hello@novucore.com",
  location: "Remote — working worldwide",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "GitHub", href: "https://github.com" },
    { label: "Dribbble", href: "https://dribbble.com" },
  ],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Athletes", href: "#athletes" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "40+", label: "Projects shipped" },
  { value: "7 yrs", label: "Building on the web" },
  { value: "98%", label: "Client retention" },
  { value: "100/100", label: "Avg. Lighthouse score" },
];

// Mirrors NovuCore brand pillars from the brand kit
export const pillars = [
  {
    key: "focus",
    title: "Focus",
    body:
      "Clarity at the center of everything we build. Every decision serves a single, measurable outcome — yours.",
  },
  {
    key: "balance",
    title: "Balance",
    body:
      "Strength through precision and control. Beautiful design and durable engineering, in equal measure.",
  },
  {
    key: "evolution",
    title: "Evolution",
    body:
      "Constant improvement. Continuous forward motion — your site grows with your business, not against it.",
  },
];

export const services = [
  {
    id: "marketing-sites",
    number: "01",
    title: "Marketing Websites",
    summary:
      "Hand-coded marketing sites that load instantly, rank well, and convert visitors into customers.",
    deliverables: [
      "Bespoke design & motion",
      "CMS of your choice",
      "SEO & analytics ready",
    ],
  },
  {
    id: "web-apps",
    number: "02",
    title: "Web Applications",
    summary:
      "Custom web apps on modern stacks — dashboards, portals, internal tools and SaaS MVPs.",
    deliverables: [
      "React / Next.js front-ends",
      "Type-safe APIs",
      "Auth, billing & roles",
    ],
  },
  {
    id: "ecommerce",
    number: "03",
    title: "E-commerce",
    summary:
      "Headless storefronts that pair editorial design with reliable checkout — no template lock-in.",
    deliverables: [
      "Shopify / Stripe integrations",
      "Product page craft",
      "Performance-first build",
    ],
  },
  {
    id: "care",
    number: "04",
    title: "Ongoing Care",
    summary:
      "Retainers for teams who want a dedicated developer on call for fixes, features and audits.",
    deliverables: [
      "Monthly improvements",
      "Performance & a11y audits",
      "Priority response window",
    ],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    body:
      "We start with a working session to understand your audience, business goals and constraints. You leave with a clear scope, not a pitch deck.",
  },
  {
    step: "02",
    title: "Design",
    body:
      "Wireframes, then high-fidelity design in Figma. Every screen is reviewed together before a single line of code is written.",
  },
  {
    step: "03",
    title: "Develop",
    body:
      "Hand-written, semantic code. No page builders, no bloated themes. You see progress weekly on a live preview URL.",
  },
  {
    step: "04",
    title: "Deploy",
    body:
      "We ship to production on infrastructure you own. Documentation, handover and training included as standard.",
  },
  {
    step: "05",
    title: "Iterate",
    body:
      "After launch we measure, learn and improve — together. Most clients stay on a light retainer for ongoing work.",
  },
];

export const projectTypes = [
  "Marketing site",
  "Web application",
  "E-commerce",
  "Redesign / rebuild",
  "Ongoing care",
  "Something else",
];

export const budgetRanges = [
  "< $5k",
  "$5k – $15k",
  "$15k – $40k",
  "$40k +",
  "Not sure yet",
];

export const techStack = [
  "Laravel", "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS",
  "Postgres", "GraphQL", "FastAPI", "MongoDB", "MySQL", "PostgreSQL"
];

// ---------------------------------------------------------------------------
// Recruiting / Athletes vertical
// ---------------------------------------------------------------------------
export const athletes = {
  eyebrow: "For young athletes",
  title: "Recruiting sites that get you seen.",
  lead:
    "Custom-coded recruiting portfolios for high-school baseball players — designed to land in a college coach's inbox and open doors. Every profile is built to be shared as a single link: stats, film, academics, character, all in under sixty seconds.",
  features: [
    {
      key: "reel",
      title: "Highlight reel first",
      body:
        "Your top plays front-and-center with fast, mobile-first video that coaches actually watch through.",
    },
    {
      key: "stats",
      title: "Season-by-season stats",
      body:
        "Batting, pitching and fielding numbers laid out cleanly — updated every season, exportable to PDF.",
    },
    {
      key: "academics",
      title: "Academic profile",
      body:
        "GPA, test scores, class rank and coursework. Coaches see a full student, not just a prospect.",
    },
    {
      key: "pdf",
      title: "Coach-ready one-pager",
      body:
        "A printable summary generated from your site — perfect to attach to camp registrations and cold emails.",
    },
    {
      key: "media",
      title: "Add your own photos & videos",
      body:
        "A simple built-in uploader lets players (and parents) add new photos and highlight clips any time — no code, no calls.",
    },
    {
      key: "social",
      title: "YouTube, Instagram & TikTok",
      body:
        "One-click links to your channels so coaches can dig deeper. Embed reels straight from your socials on your profile page.",
    },
    {
      key: "contact",
      title: "Contact form built-in",
      body:
        "Coaches, scouts and camp directors reach out through a simple form — every message lands in your inbox.",
    },
    {
      key: "privacy",
      title: "Yours at handover",
      body:
        "On completion we hand the site fully over and wipe every photo, clip and file from our devices. We retain zero access unless you keep us on a maintenance plan.",
    },
  ],
  outcomes: [
    { value: "36+", label: "Athletes placed" },
    { value: "12", label: "D1 commitments" },
    { value: "1 link", label: "One profile to share" },
  ],
  sample: {
    name: "Jordan M.",
    initials: "JM",
    grad: "Class of 2027",
    position: "RHP / OF",
    heightWeight: "6′1″ · 185 lb",
    stats: [
      { label: "ERA", value: "1.84" },
      { label: "AVG", value: ".412" },
      { label: "GPA", value: "3.92" },
      { label: "FB", value: "89 mph" },
    ],
    status: "Available · Uncommitted",
    socials: [
      { label: "YouTube", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "TikTok", href: "#" },
    ],
  },
  promise:
    "Every photo & clip removed from our devices at handover. Zero retained access unless you're on a maintenance plan.",
};

