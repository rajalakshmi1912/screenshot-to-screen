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
    did: "Started by mapping how L&D heads and engineering leaders at large enterprises actually evaluate upskilling vendors, then repositioned the courses around their language: measurable skill outcomes, not generic training. Built a pitch deck, ROI calculator and course-level collateral by engineering discipline, ran discovery calls to understand each account's pain points, and adapted the pitch per account instead of using one deck for all eight. Took the product to Amazon, Google, Meta, Tata Motors, Mercedes-Benz, TCS, Mahindra and Maruti Suzuki, handled procurement and technical objections along the way, and coached the sales team on how to position against competing vendors.",
    result: "All eight signed on as clients.",
    metrics: [{ value: "8/8", label: "enterprise clients signed" }],
    tags: ["Positioning", "Sales Enablement"],
  },
  {
    title: "Closing the €8M Tata Consultancy Services partnership",
    org: "Unacademy",
    context: "A large enterprise partner with complex needs across many stakeholders.",
    role: "Lead on the business case and offer design.",
    did: "Mapped every stakeholder on the TCS side, from L&D and procurement to business unit heads, since each had a different reason to say yes or no. Built data-backed business cases for each stakeholder group, benchmarked the offer against what competing providers were pitching, and reshaped the proposal around TCS's own workforce upskilling goals rather than a standard package. Ran multiple rounds of negotiation on scope and pricing, coordinated with legal and finance on contract terms for a multi-year commitment, and kept the deal moving by addressing each stakeholder's objections as they came up.",
    result: "Unacademy's largest B2B partnership.",
    metrics: [{ value: "€8M", label: "partnership value" }],
    tags: ["Partnerships", "Positioning"],
  },
  {
    title: "Sales enablement and partner marketing across US, UK and Europe",
    org: "Unacademy",
    context: "Sales teams and partners selling into international markets.",
    role: "Owner of enablement content and workflows.",
    did: "Audited the existing sales materials across the US, UK and Europe and interviewed reps to find out where deals were stalling. Rebuilt the pitch decks, one-pagers and partner marketing resources by persona and by region, so a rep in the UK and a partner in the US weren't using the same generic deck. Set up sales enablement workflows in HubSpot to get the right content to the right rep at the right stage of the funnel, tracked which assets actually got used and which deals they influenced, and kept iterating the content based on win and loss feedback from the sales team.",
    result: "These programmes contributed a large share of category revenue.",
    metrics: [{ value: "27%", label: "of category revenue" }],
    tags: ["Sales Enablement"],
  },
  {
    title: "Co-branded launches with 15 institutional partners",
    org: "Unacademy",
    context: "Institutional partners wanting co-branded learning offers.",
    role: "End-to-end launch owner.",
    did: "Built a repeatable onboarding process for institutional partners, covering co-branding guidelines, legal sign-off and a shared marketing calendar, so each new partner didn't start from zero. Ran all 15 launches end to end: coordinated creative and messaging approval with each partner's brand team, built launch campaigns across webinars, email and social, and equipped each partner's own outreach team with talking points and collateral. Tracked lead and employee sign-ups by partner so underperforming launches could be fixed mid-flight rather than at the end.",
    result: "New leads and corporate learners added through partner channels.",
    metrics: [{ value: "15", label: "partners launched" }, { value: "3,000+", label: "leads and employees" }],
    tags: ["Launch", "Partnerships"],
  },
  {
    title: "B2B demand generation for enterprise buyers in the UK and EMEA",
    org: "Unacademy",
    context: "Enterprise buyers in new markets with long sales cycles.",
    role: "Owner of acquisition and a $200K annual budget.",
    did: "Owned the full acquisition funnel for enterprise buyers in the UK and EMEA, from first touch to booked demo, on a $200K annual budget. Tested channel mix across LinkedIn Ads, Google Ads, SEO, webinars and partner affiliates to see which actually produced sales-qualified demos rather than just clicks, then reallocated spend toward what worked. Built an SEO content roadmap targeting the terms enterprise buyers were actually searching, ran a webinar series with industry experts to build trust with longer sales-cycle accounts, and set up a partner affiliate programme to reach buyers through channels Unacademy didn't own directly.",
    result: "Lower cost to book each demo.",
    metrics: [{ value: "-25%", label: "cost per demo" }, { value: "$200K", label: "annual budget managed" }],
    tags: ["Launch", "Research"],
  },
  {
    title: "Expansion and retention playbooks for enterprise accounts",
    org: "Unacademy",
    context: "Existing enterprise accounts with room to grow.",
    role: "Partner to Customer Success on adoption and retention.",
    did: "Segmented the existing enterprise book of business by usage and churn risk, then worked with Customer Success to define a health score for each account instead of treating them all the same. Built adoption playbooks with onboarding milestones for new accounts and expansion playbooks flagging accounts ready for upsell, plus QBR templates CS could run consistently. Set up early-warning signals for at-risk accounts so CS could step in before renewal time, and reviewed account health jointly with CS on a regular cadence over the two years.",
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
    did: "Recruited beta cohorts across different engineering disciplines and company sizes for each new B2B course before it went to general availability, so feedback wasn't coming from one narrow group. Ran structured feedback loops with surveys and follow-up interviews to separate real adoption blockers from one-off complaints, briefed industry analysts on positioning and gathered their read on where the category was heading. Fed what came out of both into product priorities and into how the courses were messaged, and owned customer support as part of the loop so issues surfaced early rather than after launch.",
    result: "Happier customers across the category.",
    metrics: [{ value: "6 → 8", label: "category NPS" }],
    tags: ["Research", "Launch"],
  },
  {
    title: "AI agents for KPI reporting",
    org: "Unacademy",
    context: "Category and sales teams spending time on manual reports.",
    role: "Builder.",
    did: "Noticed category and sales teams were losing hours each week pulling the same KPI numbers manually from different systems, so defined a clear KPI taxonomy covering what each team actually needed to see. Built AI agents that pulled data from CRM and BI sources, assembled it into the reports category and sales teams used for decisions, and ran on a schedule instead of waiting for someone to compile them. Rolled the agents out to the teams, trained them on how to read and query the output, and iterated the reports based on what stakeholders said was missing or noisy.",
    result: "Faster, consistent reporting the sales team could act on.",
    metrics: [{ value: "AI", label: "automated KPI reports" }],
    tags: ["AI", "Sales Enablement"],
  },
  {
    title: "Cross-functional launch orchestration",
    org: "Unacademy",
    context: "Launches spanning many internal teams.",
    role: "Senior Category Manager leading 8 project managers.",
    did: "Pulled product, engineering, sales, support and marketing onto one execution roadmap instead of each team running its own version of the launch plan. Set up a weekly cross-functional sync, a clear owner for every workstream and a shared view of dependencies so one team's delay didn't surprise everyone downstream. Led 8 project managers across these launches, flagged risks early instead of at the deadline, and ran a short retro after each launch to fix the same bottleneck from repeating on the next one.",
    result: "Fewer delays and smoother launches.",
    metrics: [{ value: "-25%", label: "execution delays" }, { value: "8", label: "PMs led" }],
    tags: ["Launch"],
  },
  {
    title: "B2B go-to-market for schools and institutions",
    org: "Lido Learning, Bengaluru",
    context: "A B2B SaaS product for schools, boards and engineering institutions.",
    role: "Business Development Manager owning GTM.",
    did: "Built the go-to-market from the ground up: a customer-centric pitch deck that spoke to school principals and board administrators rather than generic ed-tech language, and a data-driven lead funnel framework to find and qualify the right institutions. Negotiated revenue-share deals with education boards and multi-year partnerships with school groups and engineering institutions, which meant navigating procurement cycles that could run for months and getting budget sign-off from multiple layers of decision-makers. Once the India model was working, led the expansion into the Middle East, adapting the pitch and deal structure for a different regulatory and buying environment.",
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
    did: "Worked directly with SMB sellers across the region to understand how they were trying, and often struggling, to promote their products to local audiences. Led user research across 4 Southeast Asian markets, which surfaced 5 distinct seller segments with different needs and translated into 3 concrete GTM recommendations instead of a one-size-fits-all approach. Supported the resulting feature launch end to end, coordinating with Product, Sales, Legal and Analytics to get the feature compliant and live across 3 channels, then tracked adoption to confirm the segmentation held up in practice.",
    result: "More relevant campaigns and a wide-reaching launch.",
    metrics: [{ value: "500K+", label: "users reached" }, { value: "+18%", label: "campaign relevance" }],
    tags: ["Research", "Launch"],
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
