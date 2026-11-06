export const NAV = [
  ["about", "About"],
  ["clients", "Clients"],
  ["experience", "Experience"],
  ["case-studies", "Case Studies"],
  ["side-projects", "Side Projects"],
  ["leadership", "Leadership"],
  ["contact", "Contact"],
] as const;

export const EMAIL = "lakshmipriya.senthilvel@hec.edu";
export const EMAIL_ALT = "sglakshmipriya6@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/sglp/";

export const HERO_STATS = [
  { value: "€8M", label: "partnership closed with TCS" },
  { value: "92%", label: "net revenue retention" },
  { value: "500K+", label: "users reached in a launch" },
];

export const CLIENTS = [
  { name: "Amazon", logo: "/logos/amazon.svg" },
  { name: "Google", logo: "/logos/google.svg" },
  { name: "Meta", logo: "/logos/meta.svg" },
  { name: "Tata Motors", logo: "/logos/tata-motors.svg" },
  { name: "Mercedes-Benz", logo: "/logos/mercedes.svg" },
  { name: "Tata Consultancy Services", logo: "/logos/tcs.svg" },
  { name: "Mahindra", logo: "/logos/mahindra.svg" },
  { name: "Maruti Suzuki", logo: "/logos/maruti.svg" },
];

export const EXPERIENCE = [
  { org: "HEC Paris", domain: "hec.edu", title: "MBA", dates: "Jan 2025 to Jun 2026", place: "Paris, France", note: "Ranked #6 globally." },
  { org: "Unacademy", domain: "unacademy.com", title: "Senior Category Manager", dates: "Apr 2023 to Dec 2024", place: "Bengaluru, India", note: "India's largest B2B SaaS EdTech, valuation €3.1B." },
  { org: "Unacademy", domain: "unacademy.com", title: "Category Manager", dates: "Mar 2022 to Mar 2023", place: "Bengaluru, India" },
  { org: "Lido Learning", domain: "lidolearning.com", title: "Business Development Manager", dates: "May 2021 to Feb 2022", place: "Bengaluru, India", note: "Series B funded SaaS EdTech." },
  { org: "Lido Learning", domain: "lidolearning.com", title: "Senior Business Development Associate", dates: "Jan 2021 to Apr 2021", place: "Bengaluru, India" },
  { org: "Amazon", domain: "amazon.com", title: "Associate Product Marketing Manager", dates: "May 2019 to Dec 2020", place: "Singapore" },
];

export const TAGS = ["Positioning", "Launch", "Sales Enablement", "Partnerships", "Expansion", "Research"] as const;

export type CaseStudy = {
  title: string;
  org: string;
  context: string;
  role: string;
  did: string;
  result: string;
  metrics: { value: string; label: string }[];
  tags: string[];
};

export const CASES: CaseStudy[] = [
  {
    title: "Taking technical upskilling courses to enterprise engineering teams",
    org: "Unacademy, Bengaluru",
    context: "B2B courses for employees across Mechanical, Computer, Electrical and Electronics Engineering.",
    role: "Senior Category Manager, owning positioning and enterprise go-to-market.",
    did: "Positioned the courses for L&D heads and engineering leaders, built the pitch and collateral, and took the product to Amazon, Google, Meta, Tata Motors, Mercedes-Benz, TCS, Mahindra and Maruti Suzuki.",
    result: "All eight signed on as clients.",
    metrics: [{ value: "8/8", label: "enterprise clients signed" }],
    tags: ["Positioning", "Sales Enablement"],
  },
  {
    title: "Closing the €8M Tata Consultancy Services partnership",
    org: "Unacademy",
    context: "A large enterprise partner with complex needs across many stakeholders.",
    role: "Lead on the business case and offer design.",
    did: "Built data-backed business cases, mapped stakeholders and shaped the offer around the partner's needs.",
    result: "Unacademy's largest B2B partnership.",
    metrics: [{ value: "€8M", label: "partnership value" }],
    tags: ["Partnerships", "Positioning"],
  },
  {
    title: "Sales enablement and partner marketing across US, UK and Europe",
    org: "Unacademy",
    context: "Sales teams and partners selling into international markets.",
    role: "Owner of enablement content and workflows.",
    did: "Built pitch decks, one-pagers and partner marketing resources for sales teams and partners. Set up sales enablement workflows in HubSpot.",
    result: "These programmes contributed a large share of category revenue.",
    metrics: [{ value: "27%", label: "of category revenue" }],
    tags: ["Sales Enablement"],
  },
  {
    title: "Co-branded launches with 15 institutional partners",
    org: "Unacademy",
    context: "Institutional partners wanting co-branded learning offers.",
    role: "End-to-end launch owner.",
    did: "Onboarded partners and launched co-branded offerings end to end.",
    result: "New leads and corporate learners added through partner channels.",
    metrics: [{ value: "15", label: "partners launched" }, { value: "3,000+", label: "leads and employees" }],
    tags: ["Launch", "Partnerships"],
  },
  {
    title: "B2B demand generation for enterprise buyers in the UK and EMEA",
    org: "Unacademy",
    context: "Enterprise buyers in new markets with long sales cycles.",
    role: "Owner of acquisition and a $200K annual budget.",
    did: "Ran acquisition through LinkedIn Ads, Google Ads, SEO, webinars and partner affiliates.",
    result: "Lower cost to book each demo.",
    metrics: [{ value: "-25%", label: "cost per demo" }, { value: "$200K", label: "annual budget managed" }],
    tags: ["Launch", "Research"],
  },
  {
    title: "Expansion and retention playbooks for enterprise accounts",
    org: "Unacademy",
    context: "Existing enterprise accounts with room to grow.",
    role: "Partner to Customer Success on adoption and retention.",
    did: "Built adoption and retention playbooks with Customer Success for existing accounts.",
    result: "Stronger retention and steady account growth over two years.",
    metrics: [
      { value: "92%", label: "net revenue retention" },
      { value: "+16%", label: "annual account revenue" },
      { value: "-8%", label: "early churn" },
      { value: "+40%", label: "active enterprise accounts" },
    ],
    tags: ["Expansion"],
  },
  {
    title: "Beta programmes, analyst relations and customer feedback",
    org: "Unacademy",
    context: "New B2B courses that needed real-world validation.",
    role: "Owner of beta cohorts and analyst relations. Customer support was part of my KPIs.",
    did: "Ran beta cohorts and analyst relations, then turned feedback into product and messaging changes.",
    result: "Happier customers across the category.",
    metrics: [{ value: "6 → 8", label: "category NPS" }],
    tags: ["Research", "Launch"],
  },
  {
    title: "AI agents for KPI reporting",
    org: "Unacademy",
    context: "Category and sales teams spending time on manual reports.",
    role: "Builder.",
    did: "Built AI agents that produced KPI reports for category and sales teams.",
    result: "Faster, consistent reporting the sales team could act on.",
    metrics: [{ value: "AI", label: "automated KPI reports" }],
    tags: ["AI", "Sales Enablement"],
  },
  {
    title: "Cross-functional launch orchestration",
    org: "Unacademy",
    context: "Launches spanning many internal teams.",
    role: "Senior Category Manager leading 8 project managers.",
    did: "Aligned 5+ internal teams on one execution roadmap.",
    result: "Fewer delays and smoother launches.",
    metrics: [{ value: "-25%", label: "execution delays" }, { value: "8", label: "PMs led" }],
    tags: ["Launch"],
  },
  {
    title: "B2B go-to-market for schools and institutions",
    org: "Lido Learning, Bengaluru",
    context: "A B2B SaaS product for schools, boards and engineering institutions.",
    role: "Business Development Manager owning GTM.",
    did: "Built the GTM, a customer-centric pitch deck and a data-driven lead funnel framework. Negotiated revenue-share deals with education boards and multi-year partnerships with school groups and engineering institutions. Led expansion into the Middle East.",
    result: "Higher conversion, bigger deals and strong first-year revenue.",
    metrics: [
      { value: "2% → 6%", label: "conversion" },
      { value: "$25M", label: "first-year revenue" },
      { value: "10,000+", label: "customers reached" },
      { value: "+20%", label: "higher-value sales" },
    ],
    tags: ["Positioning", "Partnerships"],
  },
  {
    title: "Market research and feature launch across four Southeast Asian markets",
    org: "Amazon, Singapore",
    context: "SMB sellers looking to grow their audience across the region.",
    role: "Associate Product Marketing Manager.",
    did: "Worked with SMB sellers to promote their products. Led user research across 4 markets that produced 5 segments and 3 GTM recommendations. Supported a feature launch with Product, Sales, Legal and Analytics on 3 channels.",
    result: "More relevant campaigns and a wide-reaching launch.",
    metrics: [{ value: "500K+", label: "users reached" }, { value: "+18%", label: "campaign relevance" }],
    tags: ["Research", "Launch"],
  },
  {
    title: "Product marketing for CareerKart",
    org: "Consulting, India",
    context: "CareerKart connects job seekers with industry professionals.",
    role: "Product marketing consultant.",
    did: "Positioning, messaging and go-to-market to help it scale.",
    result: "[Add 1 to 2 deliverables and a result]",
    metrics: [{ value: "[ ]", label: "[add result]" }],
    tags: ["Positioning"],
  },
];

export const PRINCIPLES = [
  "I make complex products simple to buy.",
  "I sit between Product, Sales and Customer Success.",
  "I test messaging with real customers before I scale it.",
];

export const TOOLS = [
  { name: "HubSpot", domain: "hubspot.com" },
  { name: "Salesforce", domain: "salesforce.com" },
  { name: "LeanData", domain: "leandata.com" },
  { name: "SQL", domain: "" },
  { name: "Tableau", domain: "tableau.com" },
  { name: "Python", domain: "python.org" },
  { name: "Google Ads", domain: "ads.google.com" },
  { name: "LinkedIn Ads", domain: "linkedin.com" },
  { name: "Claude", domain: "claude.ai" },
  { name: "AI tools", domain: "" },
];
