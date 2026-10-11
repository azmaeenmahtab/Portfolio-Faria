// =============================================================================
// SITE DATA — Edit all placeholder content here
// =============================================================================

export interface NavLink {
  label: string;
  href: string;
}

export interface StatChip {
  value: string;
  label: string;
}

export interface FloatingCard {
  label: string;
  value: string;
}

export interface Tool {
  name: string;
}

export interface QuickFact {
  label: string;
  value: string;
}

export interface ValueCard {
  icon: string; // lucide icon name
  title: string;
  description: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  projectType: "Client Project" | "Practice Project" | "Course Project";
  summary: string;
  coverImage: string;
  metrics: { label: string; value: string }[];
  // Detail page fields
  client: string;
  goal: string;
  strategy: string;
  execution: string;
  toolsUsed: string[];
  results: { label: string; value: string; description: string }[];
  galleryImages: string[];
}

export interface ImpactStat {
  value: number;
  suffix: string;
  label: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface Education {
  title: string;
  institution: string;
  year: string;
  type: "course" | "certificate";
  topics?: string[];
  issuer?: string;
  link?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  coverImage: string;
  excerpt: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

// =============================================================================
// PERSONAL INFO
// =============================================================================

export const siteConfig = {
  name: "Faria Haque",
  tagline: "Digital Marketer · Brand Strategist",
  // TODO: replace with real email
  email: "hello@fariahaque.com",
  // TODO: replace with real phone
  phone: "+880 1XXX-XXXXXX",
  // TODO: replace with real location
  location: "Dhaka, Bangladesh",
  // TODO: replace with real resume link
  resumeUrl: "/resume.pdf",
  // Logo image
  logoImage: "/faria-logo.png",
  // TODO: replace with real OG image
  ogImage: "/images/og-image.jpg",
  siteUrl: "https://fariahaque.com",
  description:
    "Digital marketer specializing in SEO, social media, paid ads, and content strategy. Helping brands grow with data-driven marketing.",
};

// =============================================================================
// NAVIGATION
// =============================================================================

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

// =============================================================================
// HERO
// =============================================================================

export const hero = {
  // TODO: replace with real badge text
  badge: "Digital Marketer · Open for opportunities",
  // TODO: replace with real headline
  headline: "Helping brands grow with strategy, creativity & data.",
  // TODO: replace with real subheadline
  subheadline:
    "I craft data-driven marketing strategies across SEO, social media, paid advertising, content creation, and email campaigns — turning insights into measurable growth for brands that want to stand out.",
  // TODO: replace with real portrait image
  portraitImage: "/images/portrait.jpg",
  stats: [
    { value: "10+", label: "Campaigns" },
    { value: "5+", label: "Brands" },
    { value: "Certified", label: "Marketer" },
  ] as StatChip[],
  floatingCards: [
    { label: "SEO Growth", value: "+120%" },
    { label: "Engagement", value: "↑ 3x" },
  ] as FloatingCard[],
};

// =============================================================================
// TOOLS STRIP
// =============================================================================

export const tools: Tool[] = [
  { name: "Google Analytics" },
  { name: "Google Ads" },
  { name: "Meta Ads Manager" },
  { name: "SEMrush" },
  { name: "Canva" },
  { name: "Mailchimp" },
  { name: "HubSpot" },
  { name: "Notion" },
  { name: "Buffer" },
  { name: "Ahrefs" },
];

// =============================================================================
// ABOUT
// =============================================================================

export const about = {
  // TODO: replace with real about image
  image: "/images/about.jpg",
  heading: "Passionate about helping brands tell their story",
  // TODO: replace with real bio paragraphs
  bio: [
    "I'm a digital marketer with a sharp eye for detail and a deep love for data-driven storytelling. After completing an intensive digital marketing program, I've immersed myself in every facet of online marketing — from crafting scroll-stopping social media content to building SEO strategies that drive real, sustainable traffic.",
    "I believe great marketing sits at the intersection of creativity and analytics. Every campaign I touch is grounded in research, shaped by strategy, and measured by results. Whether it's a social media launch, a Google Ads campaign, or a full-funnel email sequence, I approach every project with curiosity, precision, and a genuine desire to see brands thrive.",
    "I'm currently open to freelance projects and full-time roles where I can bring fresh energy, strategic thinking, and a results-first mindset to a team or brand that values growth.",
  ],
  quickFacts: [
    { label: "Location", value: "Dhaka, Bangladesh" }, // TODO: replace
    { label: "Experience", value: "1+ Year" }, // TODO: replace
    { label: "Languages", value: "English, Bengali" }, // TODO: replace
    { label: "Availability", value: "Open to work" }, // TODO: replace
  ] as QuickFact[],
  values: [
    {
      icon: "BarChart3",
      title: "Data-Driven",
      description:
        "Every decision backed by analytics, insights, and measurable outcomes.",
    },
    {
      icon: "Lightbulb",
      title: "Creative Thinking",
      description:
        "Fresh ideas that cut through the noise and resonate with audiences.",
    },
    {
      icon: "Target",
      title: "Results-Focused",
      description:
        "Strategies designed to deliver tangible growth and ROI for every project.",
    },
  ] as ValueCard[],
};

// =============================================================================
// SERVICES
// =============================================================================

export const services: Service[] = [
  {
    icon: "Share2",
    title: "Social Media Marketing",
    description:
      "Strategic content planning, community management, and growth tactics across Instagram, Facebook, LinkedIn, and more.",
  },
  {
    icon: "Search",
    title: "Search Engine Optimization",
    description:
      "On-page and off-page SEO strategies to improve rankings, increase organic traffic, and build long-term visibility.",
  },
  {
    icon: "MousePointerClick",
    title: "Paid Advertising",
    description:
      "High-performance Meta Ads and Google Ads campaigns with optimized targeting, budgets, and conversion tracking.",
  },
  {
    icon: "PenTool",
    title: "Content Marketing & Copywriting",
    description:
      "Compelling blog posts, ad copy, and brand storytelling that engages audiences and drives action.",
  },
  {
    icon: "Mail",
    title: "Email Marketing & Automation",
    description:
      "Automated email sequences, newsletter campaigns, and lead nurturing funnels that convert subscribers into customers.",
  },
  {
    icon: "BarChart2",
    title: "Analytics & Reporting",
    description:
      "Clear, actionable reports using Google Analytics, custom dashboards, and KPI tracking to measure what matters.",
  },
];

// =============================================================================
// SKILLS
// =============================================================================

export const skills: Skill[] = [
  { name: "Social Media Strategy", level: 90 }, // TODO: replace levels
  { name: "SEO & SEM", level: 85 },
  { name: "Google Ads", level: 80 },
  { name: "Meta Ads", level: 85 },
  { name: "Content Writing", level: 88 },
  { name: "Email Marketing", level: 78 },
  { name: "Google Analytics", level: 82 },
  { name: "Canva & Design", level: 75 },
];

// =============================================================================
// PROJECTS / CASE STUDIES
// =============================================================================

export const projectCategories = [
  "All",
  "Social Media",
  "SEO",
  "Paid Ads",
  "Email",
  "Branding",
];

export const projects: Project[] = [
  {
    slug: "brand-awareness-campaign",
    title: "Brand Awareness Campaign for Local Café", // TODO: replace
    category: "Social Media",
    projectType: "Course Project",
    summary:
      "Developed a 30-day social media strategy that boosted brand visibility and follower growth.",
    coverImage: "/images/projects/project-1.jpg",
    metrics: [
      { label: "Reach", value: "+85%" },
      { label: "Followers", value: "+1.2K" },
      { label: "Engagement", value: "+3.5x" },
    ],
    client: "Local Café Brand",
    goal: "Increase brand awareness and social media presence within 30 days.",
    strategy:
      "Created a content calendar mixing educational posts, behind-the-scenes stories, and user-generated content. Leveraged local hashtags and community engagement.",
    execution:
      "Designed and scheduled 60+ posts across Instagram and Facebook. Ran targeted engagement campaigns and collaborated with micro-influencers.",
    toolsUsed: ["Canva", "Buffer", "Meta Business Suite", "Google Analytics"],
    results: [
      {
        label: "Total Reach",
        value: "+85%",
        description: "Organic reach increased significantly through strategic hashtag use.",
      },
      {
        label: "New Followers",
        value: "+1,200",
        description: "Consistent growth through content quality and community engagement.",
      },
      {
        label: "Engagement Rate",
        value: "3.5x",
        description: "Tripled average engagement through interactive content formats.",
      },
    ],
    galleryImages: [
      "/images/projects/project-1-gallery-1.jpg",
      "/images/projects/project-1-gallery-2.jpg",
      "/images/projects/project-1-gallery-3.jpg",
    ],
  },
  {
    slug: "seo-traffic-growth",
    title: "SEO Strategy for E-commerce Store", // TODO: replace
    category: "SEO",
    projectType: "Practice Project",
    summary:
      "Implemented on-page and technical SEO improvements that doubled organic traffic in 3 months.",
    coverImage: "/images/projects/project-2.jpg",
    metrics: [
      { label: "Organic Traffic", value: "+110%" },
      { label: "Keywords Ranked", value: "45+" },
      { label: "Bounce Rate", value: "-22%" },
    ],
    client: "E-commerce Practice Store",
    goal: "Increase organic search visibility and drive qualified traffic.",
    strategy:
      "Conducted keyword research, optimized product pages, improved site speed, and built a content strategy around buyer-intent keywords.",
    execution:
      "Rewrote meta tags for 50+ pages, created 12 SEO-optimized blog posts, fixed technical issues, and improved Core Web Vitals.",
    toolsUsed: ["SEMrush", "Google Search Console", "Ahrefs", "Screaming Frog"],
    results: [
      {
        label: "Organic Traffic",
        value: "+110%",
        description: "Monthly organic sessions doubled through improved rankings.",
      },
      {
        label: "Keyword Rankings",
        value: "45+",
        description: "Over 45 keywords ranking on the first page of Google.",
      },
      {
        label: "Bounce Rate",
        value: "-22%",
        description: "Reduced bounce rate through better content relevance and UX.",
      },
    ],
    galleryImages: [
      "/images/projects/project-2-gallery-1.jpg",
      "/images/projects/project-2-gallery-2.jpg",
    ],
  },
  {
    slug: "google-ads-lead-gen",
    title: "Google Ads Lead Generation Campaign", // TODO: replace
    category: "Paid Ads",
    projectType: "Course Project",
    summary:
      "Managed a Google Ads campaign that generated quality leads at a competitive cost-per-lead.",
    coverImage: "/images/projects/project-3.jpg",
    metrics: [
      { label: "Leads Generated", value: "120+" },
      { label: "Cost per Lead", value: "-35%" },
      { label: "CTR", value: "4.8%" },
    ],
    client: "Digital Services Agency",
    goal: "Generate qualified leads through paid search at an efficient cost.",
    strategy:
      "Built tightly themed ad groups, wrote compelling ad copy, set up conversion tracking, and ran A/B tests on landing pages.",
    execution:
      "Created 8 ad groups with targeted keywords, designed responsive search ads, and continuously optimized bids and negative keywords.",
    toolsUsed: [
      "Google Ads",
      "Google Analytics",
      "Google Tag Manager",
      "Unbounce",
    ],
    results: [
      {
        label: "Total Leads",
        value: "120+",
        description: "Generated over 120 qualified leads in 60 days.",
      },
      {
        label: "Cost per Lead",
        value: "-35%",
        description: "Reduced CPL through continuous optimization and bid management.",
      },
      {
        label: "Click-Through Rate",
        value: "4.8%",
        description: "Above industry average CTR through refined ad copy.",
      },
    ],
    galleryImages: [
      "/images/projects/project-3-gallery-1.jpg",
      "/images/projects/project-3-gallery-2.jpg",
    ],
  },
  {
    slug: "email-nurture-sequence",
    title: "Email Nurture Sequence for SaaS Brand", // TODO: replace
    category: "Email",
    projectType: "Practice Project",
    summary:
      "Designed a 7-email welcome sequence that improved open rates and trial-to-paid conversions.",
    coverImage: "/images/projects/project-4.jpg",
    metrics: [
      { label: "Open Rate", value: "42%" },
      { label: "Click Rate", value: "12%" },
      { label: "Conversions", value: "+28%" },
    ],
    client: "SaaS Practice Brand",
    goal: "Nurture new signups and convert free trial users into paying customers.",
    strategy:
      "Mapped the customer journey, identified key decision points, and created personalized email touchpoints with clear CTAs.",
    execution:
      "Wrote and designed 7 emails with dynamic content blocks, set up automation workflows, and tested subject lines.",
    toolsUsed: ["Mailchimp", "Canva", "Google Analytics"],
    results: [
      {
        label: "Open Rate",
        value: "42%",
        description: "Well above the 21% industry average through optimized subject lines.",
      },
      {
        label: "Click Rate",
        value: "12%",
        description: "Strong engagement through personalized content and clear CTAs.",
      },
      {
        label: "Trial Conversions",
        value: "+28%",
        description: "Significant uplift in trial-to-paid conversion rate.",
      },
    ],
    galleryImages: [
      "/images/projects/project-4-gallery-1.jpg",
      "/images/projects/project-4-gallery-2.jpg",
    ],
  },
  {
    slug: "brand-identity-social",
    title: "Brand Identity & Social Media Launch", // TODO: replace
    category: "Branding",
    projectType: "Client Project",
    summary:
      "Created brand guidelines and launched social channels for a startup wellness brand.",
    coverImage: "/images/projects/project-5.jpg",
    metrics: [
      { label: "Brand Assets", value: "25+" },
      { label: "Followers (Month 1)", value: "800+" },
      { label: "Engagement", value: "5.2%" },
    ],
    client: "Wellness Startup",
    goal: "Establish a cohesive brand identity and build an engaged social media following from scratch.",
    strategy:
      "Developed brand voice, visual identity, content pillars, and a launch strategy targeting the ideal customer persona.",
    execution:
      "Designed brand assets, content templates, and a 30-day launch calendar. Built community through engagement and collaborations.",
    toolsUsed: ["Canva", "Notion", "Buffer", "Instagram", "Facebook"],
    results: [
      {
        label: "Brand Assets",
        value: "25+",
        description: "Complete brand kit including logos, templates, and guidelines.",
      },
      {
        label: "Month 1 Followers",
        value: "800+",
        description: "Strong initial growth through strategic launch campaign.",
      },
      {
        label: "Engagement Rate",
        value: "5.2%",
        description: "Above-average engagement through community-driven content.",
      },
    ],
    galleryImages: [
      "/images/projects/project-5-gallery-1.jpg",
      "/images/projects/project-5-gallery-2.jpg",
    ],
  },
  {
    slug: "meta-ads-ecommerce",
    title: "Meta Ads Campaign for Fashion Brand", // TODO: replace
    category: "Paid Ads",
    projectType: "Course Project",
    summary:
      "Ran a Meta Ads campaign targeting lookalike audiences that delivered strong ROAS.",
    coverImage: "/images/projects/project-6.jpg",
    metrics: [
      { label: "ROAS", value: "4.2x" },
      { label: "Conversions", value: "85+" },
      { label: "CPC", value: "$0.38" },
    ],
    client: "Fashion E-commerce Brand",
    goal: "Drive online sales through targeted Meta advertising campaigns.",
    strategy:
      "Built custom and lookalike audiences, created engaging ad creatives, and ran retargeting campaigns for warm traffic.",
    execution:
      "Set up Meta Pixel, created multiple ad sets with different creative approaches, and optimized based on performance data.",
    toolsUsed: ["Meta Ads Manager", "Canva", "Google Analytics", "Shopify"],
    results: [
      {
        label: "Return on Ad Spend",
        value: "4.2x",
        description: "Every dollar spent returned $4.20 in revenue.",
      },
      {
        label: "Total Conversions",
        value: "85+",
        description: "Generated 85+ direct purchase conversions.",
      },
      {
        label: "Cost per Click",
        value: "$0.38",
        description: "Efficient CPC through optimized targeting and creative.",
      },
    ],
    galleryImages: [
      "/images/projects/project-6-gallery-1.jpg",
      "/images/projects/project-6-gallery-2.jpg",
    ],
  },
];

// =============================================================================
// IMPACT STATS
// =============================================================================

export const impactStats: ImpactStat[] = [
  { value: 15, suffix: "+", label: "Campaigns Run" }, // TODO: replace
  { value: 50, suffix: "K+", label: "Audience Reached" }, // TODO: replace
  { value: 3.2, suffix: "x", label: "Avg. Engagement Lift" }, // TODO: replace
  { value: 8, suffix: "+", label: "Brands Supported" }, // TODO: replace
];

// =============================================================================
// PROCESS
// =============================================================================

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Discover",
    description:
      "Understanding your brand, audience, goals, and current marketing landscape through research and conversation.",
  },
  {
    number: 2,
    title: "Strategize",
    description:
      "Building a tailored marketing plan with clear KPIs, channel selection, and content direction.",
  },
  {
    number: 3,
    title: "Create",
    description:
      "Developing compelling content, ad creatives, copy, and campaign assets aligned with strategy.",
  },
  {
    number: 4,
    title: "Launch",
    description:
      "Executing campaigns across selected channels with proper tracking and monitoring in place.",
  },
  {
    number: 5,
    title: "Optimize & Report",
    description:
      "Analyzing performance data, refining tactics, and delivering transparent reports with actionable insights.",
  },
];

// =============================================================================
// EDUCATION & CERTIFICATIONS
// =============================================================================

export const education: Education[] = [
  {
    title: "Professional Digital Marketing Course", // TODO: replace
    institution: "Digital Marketing Institute", // TODO: replace
    year: "2025", // TODO: replace
    type: "course",
    topics: [
      "SEO & SEM",
      "Social Media Marketing",
      "Email Marketing",
      "Google Analytics",
      "Content Strategy",
      "Paid Advertising",
      "Branding",
    ],
  },
  {
    title: "Google Analytics Certification", // TODO: replace
    institution: "Google",
    year: "2025", // TODO: replace
    type: "certificate",
    issuer: "Google Skillshop",
    link: "#", // TODO: replace with real link
  },
  {
    title: "Meta Certified Digital Marketing Associate", // TODO: replace
    institution: "Meta",
    year: "2025", // TODO: replace
    type: "certificate",
    issuer: "Meta Blueprint",
    link: "#", // TODO: replace with real link
  },
  {
    title: "HubSpot Inbound Marketing Certification", // TODO: replace
    institution: "HubSpot",
    year: "2025", // TODO: replace
    type: "certificate",
    issuer: "HubSpot Academy",
    link: "#", // TODO: replace with real link
  },
];

// =============================================================================
// TESTIMONIALS
// =============================================================================

export const testimonials: Testimonial[] = [
  {
    quote:
      "She brought a level of strategy and creativity to our social media that we hadn't seen before. Our engagement tripled in the first month.",
    name: "Sarah Mitchell", // TODO: replace
    role: "Founder, Bloom Wellness", // TODO: replace
    avatar: "/images/testimonials/avatar-1.jpg", // TODO: replace
    rating: 5,
  },
  {
    quote:
      "Working with her was a breath of fresh air. She's detail-oriented, communicative, and genuinely cares about delivering results.",
    name: "James Rodriguez", // TODO: replace
    role: "Marketing Director, TechFlow", // TODO: replace
    avatar: "/images/testimonials/avatar-2.jpg", // TODO: replace
    rating: 5,
  },
  {
    quote:
      "Our Google Ads campaigns were struggling before she stepped in. Within weeks, our cost-per-lead dropped by 35% and lead quality improved.",
    name: "Anika Rahman", // TODO: replace
    role: "CEO, Digital Solutions BD", // TODO: replace
    avatar: "/images/testimonials/avatar-3.jpg", // TODO: replace
    rating: 5,
  },
];

// =============================================================================
// BLOG POSTS
// =============================================================================

export const blogPosts: BlogPost[] = [
  {
    slug: "seo-basics-beginners-guide",
    title: "SEO Basics: A Beginner's Guide to Ranking Higher", // TODO: replace
    category: "SEO",
    date: "Oct 5, 2025", // TODO: replace
    readTime: "5 min read",
    coverImage: "/images/blog/blog-1.jpg", // TODO: replace
    excerpt:
      "Learn the foundational SEO strategies that every marketer should know to improve search visibility.",
  },
  {
    slug: "social-media-content-strategy",
    title: "How to Build a Social Media Content Strategy That Works", // TODO: replace
    category: "Social Media",
    date: "Sep 20, 2025", // TODO: replace
    readTime: "7 min read",
    coverImage: "/images/blog/blog-2.jpg", // TODO: replace
    excerpt:
      "A step-by-step framework for planning, creating, and scheduling social media content that drives engagement.",
  },
  {
    slug: "email-marketing-tips",
    title: "5 Email Marketing Tips to Boost Your Open Rates", // TODO: replace
    category: "Email Marketing",
    date: "Sep 8, 2025", // TODO: replace
    readTime: "4 min read",
    coverImage: "/images/blog/blog-3.jpg", // TODO: replace
    excerpt:
      "Practical tips to write better subject lines, segment your audience, and increase email engagement.",
  },
];

// =============================================================================
// FAQ
// =============================================================================

export const faqs: FAQ[] = [
  {
    question: "What services do you offer?",
    answer:
      "I offer a range of digital marketing services including social media marketing, SEO, paid advertising (Google Ads & Meta Ads), content marketing, email marketing, and analytics & reporting. Each service is tailored to your specific goals and budget.",
  },
  {
    question: "How do you measure success?",
    answer:
      "I believe in transparent, data-driven results. I set clear KPIs at the start of every project — whether that's traffic growth, lead generation, engagement rates, or ROAS — and provide regular reports with actionable insights.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Absolutely! I love working with small businesses and startups. I offer flexible packages designed to fit different budgets while still delivering meaningful results and strategic guidance.",
  },
  {
    question: "What's your typical turnaround time?",
    answer:
      "It depends on the scope of the project. A social media strategy can be ready in 1-2 weeks, while a full SEO audit and implementation plan might take 3-4 weeks. I always set realistic timelines upfront and communicate progress regularly.",
  },
  {
    question: "Can you work with my existing team?",
    answer:
      "Yes! I'm experienced in collaborating with in-house teams, designers, developers, and other stakeholders. I can integrate seamlessly into your workflow and tools of choice.",
  },
  {
    question: "Do you offer ongoing support or one-time projects?",
    answer:
      "Both! I'm happy to take on one-time projects like a campaign launch or SEO audit, as well as ongoing retainers for continuous marketing support and optimization.",
  },
];

// =============================================================================
// SOCIAL LINKS
// =============================================================================

export const socialLinks: SocialLink[] = [
  { platform: "LinkedIn", url: "https://linkedin.com/in/fariahaque", icon: "Linkedin" },
  { platform: "Instagram", url: "https://instagram.com/fariahaque", icon: "Instagram" },
  { platform: "Facebook", url: "https://facebook.com/fariahaque", icon: "Facebook" },
  { platform: "Behance", url: "https://behance.net/fariahaque", icon: "Globe" },
];
