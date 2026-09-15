/**
 * Central content & configuration for the AINEXA marketing site.
 * Update contact details here — every page reads from this file.
 */

export const COMPANY = {
  name: "AINEXA Digital Solutions",
  shortName: "AINEXA",
  tagline: "We Build Future-Ready Digital Solutions",
  owner: "Aina Yasmeen",
  ownerTitle: "Founder & CEO",
  mission:
    "To provide 100% accurate, efficient, and scalable digital services that help ambitious companies ship software with confidence.",
  vision:
    "To become the most trusted digital partner for organizations that want AI-ready products, measurable growth, and engineering they can depend on.",
  email: "hello@ainexa.digital",
  phone: "+447762426623",
  whatsapp: "447762426623",
  website: "https://ainexia.com",
  address: "Global delivery studio — serving North America, Europe, and the GCC.",
  hours: "Monday – Saturday, 9:00 AM – 7:00 PM (PKT)",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/about/", label: "About" },
  { href: "/portfolio/", label: "Our Work" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/contact/", label: "Contact" },
] as const;

export const STATS = [
  { value: 120, suffix: "+", label: "Projects delivered" },
  { value: 48, suffix: "+", label: "Active clients" },
  { value: 18, suffix: "", label: "Industries served" },
  { value: 99, suffix: "%", label: "On-time delivery" },
] as const;

export const TRUSTED_BRANDS = [
  "Northpeak Capital",
  "Helio Health",
  "Orbit Logistics",
  "Lumen Retail",
  "Aether Cloud",
  "Summit Legal",
  "Vita Labs",
  "Harbor Bank",
] as const;

export const SERVICES = [
  {
    slug: "custom-software",
    title: "Custom Software Development",
    summary:
      "Purpose-built platforms, internal tools, and product MVPs engineered for accuracy, security, and scale.",
    description:
      "We design and ship custom software that matches how your business actually operates — not generic templates. From discovery workshops to production support, AINEXA owns architecture, quality, and delivery so your team can focus on outcomes.",
    outcomes: [
      "Domain-driven architecture that stays maintainable as you grow",
      "Automated testing and CI so releases stay predictable",
      "Clear documentation and knowledge transfer for your team",
    ],
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "web-development",
    title: "Professional Web Development",
    summary:
      "High-performance websites and web apps on MERN and Next.js — fast, SEO-ready, and conversion-focused.",
    description:
      "Whether you need a marketing site, a customer portal, or a full SaaS product, we build on the MERN stack and Next.js so you get speed, SEO, and a codebase that is easy to extend. Every build is responsive, accessible, and ready for static or hybrid hosting.",
    outcomes: [
      "Core Web Vitals and SEO structured from day one",
      "Reusable component systems your marketers can grow with",
      "Secure auth, dashboards, and API integrations when you need them",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "ai-bots",
    title: "AI Bots & Automation",
    summary:
      "Chatbots, WhatsApp bots, and workflow automation that answer customers accurately — 24/7.",
    description:
      "AINEXA designs AI assistants that are grounded in your policies, catalogs, and CRM data. We deploy website chat, WhatsApp Business flows, and back-office automation so inquiries are handled instantly and your team only steps in when judgment is required.",
    outcomes: [
      "WhatsApp and web chatbots trained on your approved knowledge",
      "Lead capture, appointment booking, and order-status flows",
      "Human handoff with transcripts so nothing is lost",
    ],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing & SEO",
    summary:
      "Search, content, and paid campaigns measured against pipeline — not vanity metrics.",
    description:
      "We pair technical SEO with content and paid acquisition so the websites we build actually get found. Keyword research, on-page structure, local SEO, and campaign reporting are handled as one growth system aligned to your sales cycle.",
    outcomes: [
      "Technical and on-page SEO that search engines can trust",
      "Content calendars mapped to high-intent keywords",
      "Transparent reporting on traffic, leads, and cost per inquiry",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "ui-ux",
    title: "UI/UX Design",
    summary:
      "Research-backed interfaces that feel premium, reduce friction, and convert visitors into clients.",
    description:
      "Our design practice starts with user journeys, not decoration. We prototype flows, validate with stakeholders, and hand off pixel-accurate systems in Figma so engineering and marketing stay aligned. The result is a brand that feels as precise as the software behind it.",
    outcomes: [
      "UX research, wireframes, and interactive prototypes",
      "Design systems with tokens for ink, champagne gold, and type",
      "Usability reviews before you invest in a full build",
    ],
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "mobile-apps",
    title: "Mobile App Development",
    summary:
      "iOS and Android apps with native-quality UX, offline resilience, and clean API integration.",
    description:
      "We build cross-platform and native mobile products that stay fast on real devices. From consumer apps to field-ops tools, AINEXA covers product discovery, UI, backend APIs, store submission, and post-launch iteration.",
    outcomes: [
      "React Native or native stacks chosen for your roadmap",
      "Push notifications, payments, and analytics wired in",
      "App Store and Play Console launch support",
    ],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "cloud",
    title: "Cloud Solutions",
    summary:
      "Secure cloud architecture, migrations, and DevOps so your product stays available as traffic grows.",
    description:
      "AINEXA plans and implements cloud foundations on AWS, Azure, and Google Cloud: environments, CI/CD, observability, backups, and cost control. We migrate legacy workloads without disrupting your customers, then leave you with runbooks your team can operate.",
    outcomes: [
      "Infrastructure as code and repeatable deployments",
      "Monitoring, alerts, and disaster-recovery baselines",
      "Right-sized spend so you are not paying for idle capacity",
    ],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
  },
] as const;

export const WHY_CHOOSE = [
  {
    title: "Accuracy first",
    body: "Requirements are written down, estimates are honest, and we do not ship features that were never agreed. Precision is a delivery habit, not a slogan.",
  },
  {
    title: "Efficient delivery",
    body: "Small senior pods, weekly demos, and a single point of contact. You always know what is in progress, what is blocked, and what ships next.",
  },
  {
    title: "Built to scale",
    body: "We choose stacks, data models, and cloud patterns that still make sense at 10x traffic — so you are not rewriting in year two.",
  },
  {
    title: "Founder-led quality",
    body: "Aina Yasmeen stays close to discovery and acceptance criteria. Clients get executive attention, not a handoff to an anonymous bench.",
  },
] as const;

export const PROCESS = [
  {
    step: "01",
    title: "Free consultation",
    body: "A 30-minute call to understand the problem, the deadline, and whether we are the right fit — no pitch deck theatre.",
  },
  {
    step: "02",
    title: "Written plan",
    body: "You receive a scoped statement of work: timeline, team, price, and acceptance criteria you can take to your board.",
  },
  {
    step: "03",
    title: "Build in the open",
    body: "Weekly demos, a named lead, and software you can click — not status slides. You see progress every week.",
  },
  {
    step: "04",
    title: "Launch & stand behind it",
    body: "Go-live support, knowledge transfer, and a hypercare window so you are not left alone the day after launch.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "AINEXA replaced a spreadsheet mess with a client portal our advisors actually use. Scope did not drift. The portal went live on the date they named.",
    name: "Maya Chen",
    role: "COO, Northpeak Capital",
  },
  {
    quote:
      "The WhatsApp assistant cut our front-desk callbacks in half in the first month. Clinical questions still escalate to a nurse — that was non-negotiable, and they honoured it.",
    name: "Dr. Priya Shah",
    role: "Operations Lead, Helio Health",
  },
  {
    quote:
      "We needed a partner who would tell us what not to build. Aina’s team shortened the roadmap and still delivered the fleet app our drivers rely on offline.",
    name: "Omar Khalid",
    role: "Head of Product, Orbit Logistics",
  },
] as const;

export const PORTFOLIO = [
  {
    id: "northpeak",
    title: "Northpeak Wealth Portal",
    category: "Software",
    client: "Northpeak Capital",
    year: "2025",
    summary:
      "Secure client portal for portfolio reporting, document vaults, and advisor messaging — replacing a patchwork of spreadsheets.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "lumen",
    title: "Lumen Commerce Rebuild",
    category: "Web",
    client: "Lumen Retail",
    year: "2025",
    summary:
      "Next.js storefront with sub-second category pages, localized checkout, and a merchandising CMS for a 12-market retailer.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "helio",
    title: "Helio Care Assistant",
    category: "AI",
    client: "Helio Health",
    year: "2024",
    summary:
      "WhatsApp and web chatbot that triages appointment requests, explains prep instructions, and escalates clinical questions to staff.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "orbit",
    title: "Orbit Fleet Ops App",
    category: "Mobile",
    client: "Orbit Logistics",
    year: "2024",
    summary:
      "Driver and dispatcher mobile app with live ETAs, proof of delivery, and offline queues for routes with poor connectivity.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "aether",
    title: "Aether Cloud Migration",
    category: "Cloud",
    client: "Aether Cloud",
    year: "2025",
    summary:
      "Lift-and-improve migration of a monolith onto containerized services with blue-green deploys and 40% lower monthly cloud spend.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "vita",
    title: "Vita Labs Brand System",
    category: "Design",
    client: "Vita Labs",
    year: "2024",
    summary:
      "End-to-end UI/UX for a diagnostics SaaS: research, design system, and a marketing site that lifted demo bookings by 62%.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=80",
  },
] as const;

export const PORTFOLIO_FILTERS = [
  "All",
  "Software",
  "Web",
  "AI",
  "Mobile",
  "Cloud",
  "Design",
] as const;

export const PLANS = [
  {
    name: "Starter",
    price: "$2,400",
    cadence: "starting engagement",
    description:
      "For founders and small teams who need a precise first product, brochure site, or automation slice — without enterprise overhead.",
    featured: false,
    features: [
      "Discovery workshop and written scope",
      "Up to 4 weeks of focused build time",
      "Marketing site or MVP feature set",
      "Responsive UI on the AINEXA design system",
      "SEO fundamentals and analytics setup",
      "Two revision rounds and launch support",
      "30 days of post-launch bug coverage",
    ],
  },
  {
    name: "Growth",
    price: "$6,800",
    cadence: "typical product sprint",
    description:
      "The plan most growing companies choose: a dedicated pod, product thinking, and room for integrations, bots, or a customer portal.",
    featured: true,
    features: [
      "Everything in Starter",
      "8–10 week delivery roadmap",
      "MERN / Next.js application or mobile slice",
      "AI chatbot or WhatsApp automation module",
      "CMS, payments, or CRM integration",
      "Weekly demos and a named project lead",
      "Performance, security, and QA checklist",
      "90 days of hypercare and iteration hours",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "annual partnership",
    description:
      "For regulated teams and multi-product roadmaps that need senior architecture, SLAs, and a partner who can sit in the steering committee.",
    featured: false,
    features: [
      "Everything in Growth",
      "Dedicated squad and Slack / Teams channel",
      "Cloud architecture, DevOps, and observability",
      "Security reviews and environment strategy",
      "Multi-brand or multi-region rollouts",
      "Quarterly roadmap and executive reporting",
      "Priority response windows",
      "Optional staff augmentation",
    ],
  },
] as const;

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80",
  about: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1400&q=80",
  team: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80",
  office: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
  cta: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1800&q=80",
} as const;
