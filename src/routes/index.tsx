import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { ArrowRight, ChevronDown, Download, Linkedin, Mail, MapPin, Play, Award, ExternalLink } from "lucide-react";
import hero from "@/assets/lakshmi-2.jpg.asset.json";
import working from "@/assets/lakshmi-1.jpg.asset.json";
import club from "@/assets/lakshmi-3.jpg.asset.json";
import grad from "@/assets/lakshmi-4.jpg.asset.json";
import vidShot from "@/assets/vidcruncher-screenshot.png.asset.json";
import {
  NAV, EMAIL, EMAIL_ALT, LINKEDIN, HERO_STATS, CLIENTS, EXPERIENCE, TAGS, CASES, PRINCIPLES, TOOLS, type CaseStudy,
} from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lakshmi Priya Senthilvel | B2B Product Marketing Manager, Paris" },
      { name: "description", content: "B2B Product Marketing Manager in Paris. Positioning, launches, sales enablement and expansion for SaaS and tech scale-ups. HEC Paris MBA." },
      { property: "og:title", content: "Lakshmi Priya Senthilvel | B2B Product Marketing" },
      { property: "og:description", content: "I take B2B products to the right audience at the right time. €8M partnership, 92% NRR, 500K+ users reached." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("is-visible"), io.unobserve(e.target))),
      { threshold: 0.1 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

function Logo({ domain, name, size = "h-8" }: { domain: string; name: string; size?: string }) {
  const [failed, setFailed] = useState(!domain);
  if (failed) return <span className="font-display text-sm font-bold text-muted-foreground">{name}</span>;
  return (
    <img
      src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
      alt={`${name} logo`}
      loading="lazy"
      className={`${size} w-auto object-contain`}
      onError={() => setFailed(true)}
    />
  );
}

function Section({ id, eyebrow, title, children, caption }: { id: string; eyebrow?: string; title: string; caption?: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <div className="reveal mb-12 max-w-2xl">
        {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>}
        <h2 className="text-3xl font-extrabold sm:text-4xl">{title}</h2>
        {caption && <p className="mt-4 text-lg text-muted-foreground">{caption}</p>}
      </div>
      {children}
    </section>
  );
}

const Placeholder = ({ children }: { children: ReactNode }) => (
  <span className="rounded bg-muted px-1.5 py-0.5 font-medium text-placeholder">{children}</span>
);

function Index() {
  useReveal();
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Clients />
      <Experience />
      <CaseStudies />
      <SideProjects />
      <Leadership />
      <HowIWork />
      <Tools />
      <Contact />
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Lakshmi Priya Senthilvel
      </footer>
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#about" className="shrink-0 font-display text-lg font-extrabold">LPS<span className="text-primary">.</span></a>
        <nav className="flex min-w-0 gap-5 overflow-x-auto text-sm font-medium text-muted-foreground">
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="shrink-0 whitespace-nowrap transition-colors hover:text-primary">{label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 pt-14 pb-10 sm:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="reveal">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-sm font-medium text-accent-foreground">
            <MapPin size={14} /> Lakshmi Priya Senthilvel · Paris, France
          </p>
          <h1 className="text-4xl leading-[1.1] font-extrabold sm:text-6xl">
            I take B2B products to the <span className="text-primary">right audience</span> at the right time.
          </h1>
          <p className="mt-5 text-lg font-medium text-muted-foreground">
            Product Marketing Manager | Positioning, launches, sales enablement | Paris, France
          </p>
          <div className="mt-6 max-w-xl space-y-3 text-[17px] leading-relaxed">
            <p>Product marketing has been the space that interests me since the start of my career. I like working with Product, Sales, Customer Success and Marketing, understanding how a product really creates value, and getting it in front of the right audience at the right moment.</p>
            <p>I have six years in tech across product marketing, B2B partnerships and category management, in Singapore, India and Paris, and an MBA from HEC Paris.</p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#case-studies" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lift transition hover:opacity-90">
              See my work <ArrowRight size={18} />
            </a>
            <a href="#" title="[CV link to be added]" className="inline-flex items-center gap-2 rounded-full border bg-card px-6 py-3 font-semibold transition hover:border-primary hover:text-primary">
              <Download size={18} /> Download CV
            </a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-12 w-12 place-items-center rounded-full border bg-card transition hover:text-primary"><Linkedin size={20} /></a>
            <a href={`mailto:${EMAIL}`} aria-label="Email" className="grid h-12 w-12 place-items-center rounded-full border bg-card transition hover:text-primary"><Mail size={20} /></a>
          </div>
        </div>
        <div className="reveal relative mx-auto w-full max-w-sm">
          <img src={hero.url} alt="Lakshmi Priya Senthilvel at HEC Paris" className="aspect-[4/5] w-full rounded-2xl object-cover shadow-card" />
          <img src={working.url} alt="Lakshmi at work" className="absolute -bottom-6 -left-6 hidden w-32 rounded-xl border-4 border-background object-cover shadow-card sm:block" />
        </div>
      </div>
      <div className="mt-16 grid gap-4 sm:grid-cols-3">
        {HERO_STATS.map((s) => (
          <div key={s.value} className="reveal rounded-2xl border bg-card p-6 shadow-card">
            <div className="font-display text-4xl font-extrabold text-primary sm:text-5xl">{s.value}</div>
            <div className="mt-2 text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Clients() {
  return (
    <Section id="clients" eyebrow="Clients" title="Enterprise clients I marketed to" caption="I took Unacademy's B2B technical upskilling courses to these companies, and my positioning, pitch and sales materials helped them sign up for their engineering teams.">
      <div className="reveal grid grid-cols-2 items-center gap-x-8 gap-y-14 py-6 sm:grid-cols-4">
        {CLIENTS.map((c) => (
          <div key={c.name} className="group flex h-12 items-center justify-center">
            <div className="relative">
              <img src={c.logo} alt={`${c.name} logo`} loading="lazy" className="h-9 w-auto max-w-[160px] object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:h-10" />
              <span
                aria-hidden
                className="absolute inset-0 bg-logo-ink transition-opacity duration-300 group-hover:opacity-0"
                style={{ maskImage: `url(${c.logo})`, WebkitMaskImage: `url(${c.logo})`, maskSize: "contain", WebkitMaskSize: "contain", maskRepeat: "no-repeat", WebkitMaskRepeat: "no-repeat", maskPosition: "center", WebkitMaskPosition: "center" }}
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Six years across three countries">
      <ol className="relative ml-5 border-l-2 border-border">
        {EXPERIENCE.map((e, i) => (
          <li key={i} className="reveal relative mb-10 pl-10 last:mb-0">
            <span className="absolute -left-[21px] top-0 grid h-10 w-10 place-items-center rounded-full border bg-card shadow-card">
              <Logo domain={e.domain} name={e.org.charAt(0)} size="h-5" />
            </span>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-xl font-bold">{e.title} <span className="text-primary">· {e.org}</span></h3>
              <span className="text-sm font-medium text-muted-foreground">{e.dates}</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{e.place}</p>
            {e.note && <p className="mt-2">{e.note}</p>}
          </li>
        ))}
      </ol>
    </Section>
  );
}

function CaseStudies() {
  const [filter, setFilter] = useState<string | null>(null);
  const list = filter ? CASES.filter((c) => c.tags.includes(filter)) : CASES;
  return (
    <Section id="case-studies" eyebrow="Case studies" title="What I did and what changed" caption="Click a card to see the context, my role and the full result.">
      <div className="mb-8 flex flex-wrap gap-2">
        {[null, ...TAGS].map((t) => (
          <button
            key={t ?? "all"}
            onClick={() => setFilter(t)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${filter === t ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:border-primary hover:text-primary"}`}
          >
            {t ?? "All"}
          </button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {list.map((c) => <CaseCard key={c.title} c={c} />)}
      </div>
    </Section>
  );
}

function CaseCard({ c }: { c: CaseStudy }) {
  const [open, setOpen] = useState(false);
  const row = (k: string, v: string) => (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wider text-primary">{k}</dt>
      <dd className="mt-1 leading-relaxed">{v.startsWith("[") ? <Placeholder>{v}</Placeholder> : v}</dd>
    </div>
  );
  return (
    <article className={`reveal flex flex-col rounded-2xl border bg-card p-6 transition ${open ? "shadow-lift" : "shadow-card hover:-translate-y-0.5"}`}>
      <button onClick={() => setOpen(!open)} className="text-left" aria-expanded={open}>
        <p className="text-sm font-medium text-muted-foreground">{c.org}</p>
        <h3 className="mt-1 text-xl leading-snug font-bold">{c.title}</h3>
        <div className="mt-5 grid grid-cols-2 gap-3">
          {c.metrics.map((m) => (
            <div key={m.label} className="rounded-xl bg-primary-soft p-4">
              <div className="font-display text-3xl font-extrabold text-primary">{m.value}</div>
              <div className="mt-1 text-sm text-accent-foreground">{m.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {c.tags.map((t) => <span key={t} className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">{t}</span>)}
          </div>
          <ChevronDown className={`shrink-0 text-primary transition ${open ? "rotate-180" : ""}`} />
        </div>
      </button>
      {open && (
        <dl className="mt-6 space-y-4 border-t pt-6 animate-in fade-in slide-in-from-top-2">
          {row("Context", c.context)}
          {row("My role", c.role)}
          {row("What I did", c.did)}
          {row("Result", c.result)}
          {row("Skills", c.tags.join(", "))}
        </dl>
      )}
    </article>
  );
}

function SideProjects() {
  return (
    <Section id="side-projects" eyebrow="Side projects" title="Things I build on my own time">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="reveal flex flex-col rounded-2xl border bg-card p-7 shadow-card">
          <img src={vidShot.url} alt="VidCruncher website" loading="lazy" className="aspect-video w-full rounded-xl border object-cover object-top" />
          <p className="mt-6 text-sm font-medium text-muted-foreground">Founder and product marketer</p>
          <h3 className="mt-1 text-2xl font-bold">VidCruncher</h3>
          <p className="mt-3 leading-relaxed">Free video tools (compress, convert, trim, crop, GIF, merge, watermark) that run entirely in the browser. Nothing is uploaded and no account is needed. Available in 10 languages.</p>
          <ul className="mt-4 space-y-2 text-[15px]">
            <li><b>Positioning:</b> private by design, free, no watermark.</li>
            <li><b>Audience:</b> people shrinking videos for email, job portals and upload forms.</li>
            <li><b>Acquisition:</b> SEO-led guides.</li>
          </ul>
          <a href="https://vidcruncher.com" target="_blank" rel="noreferrer" className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground">
            Visit VidCruncher <ExternalLink size={16} />
          </a>
        </div>
        <div className="reveal flex flex-col rounded-2xl border bg-card p-7 shadow-card">
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="grid aspect-video place-items-center rounded-lg bg-muted text-xs text-placeholder"><Play size={20} /></div>
            ))}
          </div>
          <p className="mt-2 text-xs"><Placeholder>[Add 2 to 3 video links to embed]</Placeholder></p>
          <p className="mt-6 text-sm font-medium text-muted-foreground">Built from scratch</p>
          <h3 className="mt-1 text-2xl font-bold">Unacademy Pro Engineering on YouTube</h3>
          <p className="mt-3 leading-relaxed">The content channel reaching engineering professionals for the B2B upskilling courses.</p>
          <p className="mt-3 text-[15px]"><Placeholder>[Add subscriber and view count]</Placeholder></p>
          <a href="https://www.youtube.com/@unacademyproengineering" target="_blank" rel="noreferrer" className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border px-5 py-2.5 font-semibold hover:border-primary hover:text-primary">
            Visit the channel <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </Section>
  );
}

function Leadership() {
  return (
    <Section id="leadership" eyebrow="Leadership" title="Beyond the day job">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-4">
          <div className="reveal rounded-2xl border bg-card p-6 shadow-card">
            <h3 className="text-lg font-bold">President, Marketing Club, HEC Paris</h3>
            <p className="text-sm text-muted-foreground">Jan 2025 to Jun 2026 · Paris, France</p>
            <p className="mt-3"><Placeholder>[Add events run, members, speakers or partners]</Placeholder></p>
          </div>
          <div className="reveal rounded-2xl border bg-card p-6 shadow-card">
            <h3 className="text-lg font-bold">Sponsorships Lead, MBA Tournament 2025</h3>
            <p className="text-sm text-muted-foreground">HEC Paris</p>
          </div>
          <div className="reveal rounded-2xl border bg-card p-6 shadow-card">
            <h3 className="flex items-center gap-2 text-lg font-bold"><Award size={20} className="text-primary" /> Awards at Unacademy</h3>
            <ul className="mt-2 space-y-1">
              <li>Best Manager Award 2024</li>
              <li>Top Performer three quarters in a row in 2024</li>
            </ul>
          </div>
        </div>
        <div className="reveal grid grid-cols-2 gap-4">
          <img src={grad.url} alt="Lakshmi at her HEC Paris graduation by the Eiffel Tower" loading="lazy" className="h-full w-full rounded-2xl object-cover" />
          <img src={club.url} alt="Lakshmi with HEC Paris classmates" loading="lazy" className="h-full w-full rounded-2xl object-cover" />
        </div>
      </div>
    </Section>
  );
}

function HowIWork() {
  return (
    <Section id="how-i-work" eyebrow="How I work" title="Three things I hold myself to">
      <div className="grid gap-5 md:grid-cols-3">
        {PRINCIPLES.map((p, i) => (
          <div key={p} className="reveal rounded-2xl bg-primary p-7 text-primary-foreground">
            <div className="font-display text-sm font-bold opacity-70">0{i + 1}</div>
            <p className="mt-6 font-display text-xl leading-snug font-bold">{p}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Tools() {
  return (
    <Section id="tools" eyebrow="Tools" title="What I work with">
      <div className="flex flex-wrap gap-3">
        {TOOLS.map((t) => (
          <div key={t.name} className="group reveal flex items-center gap-2.5 rounded-full border bg-card px-4 py-2.5">
            {t.domain && <span className="logo-mono"><Logo domain={t.domain} name="" size="h-5" /></span>}
            <span className="font-medium">{t.name}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 pb-24">
      <div className="reveal rounded-3xl bg-foreground p-10 text-center text-background sm:p-16">
        <h2 className="text-3xl font-extrabold sm:text-5xl">Let's talk.</h2>
        <p className="mt-4 text-lg opacity-80">Based in Paris, open to relocation.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground"><Mail size={18} /> Email me</a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-background/30 px-6 py-3 font-semibold"><Linkedin size={18} /> LinkedIn</a>
        </div>
        <p className="mt-6 text-sm opacity-80">{EMAIL} · <a href={`mailto:${EMAIL_ALT}`} className="underline">{EMAIL_ALT}</a></p>
      </div>
    </section>
  );
}
