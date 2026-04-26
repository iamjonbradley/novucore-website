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
  "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS",
  "Framer Motion", "Sanity", "Shopify", "Stripe", "Postgres",
  "Vercel", "Figma", "GraphQL", "FastAPI", "MongoDB",
];
