import React, { useEffect } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  Shield,
  Users,
  Baby,
  Zap,
  Compass,
  Eye,
  ShieldCheck,
  MousePointer2,
  Sparkles,
  Star,
  Youtube,
  Award,
  PlayCircle,
} from "lucide-react";

const IMG = {
  mitts:
    "https://images.pexels.com/photos/16552870/pexels-photo-16552870.jpeg?auto=compress&cs=tinysrgb&w=1600",
  bag:
    "https://images.unsplash.com/photo-1708723636238-e4c384d5d428?crop=entropy&cs=srgb&fm=jpg&w=1600&q=80",
  wraps:
    "https://images.unsplash.com/photo-1590174660039-5d5e2744f297?crop=entropy&cs=srgb&fm=jpg&w=1600&q=80",
  grapple:
    "https://images.unsplash.com/photo-1682545888368-587f56efd06e?crop=entropy&cs=srgb&fm=jpg&w=1600&q=80",
};

const Eyebrow = ({ children, dark = false }) => (
  <div className={`font-mono-mini ${dark ? "text-[#A8B5CF]" : "text-[#94A0B8]"}`}>
    <span className={`inline-block w-6 h-px mr-3 align-middle ${dark ? "bg-[#A8B5CF]" : "bg-[#94A0B8]"}`} />
    {children}
  </div>
);

const InfoCell = ({ label, value }) => (
  <div className="py-5 lg:py-6 px-5 lg:px-6">
    <div className="font-mono-mini text-[#94A0B8] mb-1.5">{label}</div>
    <div className="text-[15px] text-[#1F2A48]">{value}</div>
  </div>
);

const ClientMockup = () => (
  <div className="relative w-full max-w-[720px] mx-auto lg:ml-auto lg:mr-0 select-none">
    <div
      aria-hidden
      className="absolute -inset-10 -z-10 blur-3xl opacity-70"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, rgba(168,181,207,0.55) 0%, rgba(168,181,207,0) 70%)",
      }}
    />
    <div className="rounded-2xl border border-[#E4E8F0] bg-white shadow-[0_40px_100px_-30px_rgba(31,42,72,0.35),0_10px_30px_-12px_rgba(31,42,72,0.15)] overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#E4E8F0] bg-[#F4F6FA]">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B6B]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFCB47]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#5CC983]/80" />
        </div>
        <div className="text-[11px] font-mono-mini text-[#5B6B8C] tracking-[0.1em]">
          kravmagatraining.com
        </div>
        <span className="text-[11px] text-[#94A0B8] font-mono-mini hidden sm:inline">Live</span>
      </div>

      <div className="relative aspect-[16/10] bg-[#0B1220]">
        <img
          src={IMG.mitts}
          alt="Krav Maga mitt-work training"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          loading="eager"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,18,32,0.45) 0%, rgba(11,18,32,0.15) 40%, rgba(11,18,32,0.85) 100%)",
          }}
        />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 py-4 text-white">
          <div className="font-display tracking-[0.02em] text-[14px] sm:text-[16px]">
            KRAV MAGA WORLDWIDE™ — FORT LAUDERDALE
          </div>
          <div className="hidden sm:flex items-center gap-5 text-[11px] tracking-[0.18em] uppercase text-white/85">
            <span>Classes</span>
            <span>Curriculum</span>
            <span>Team</span>
            <span>Free Trial</span>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1.5 text-[11px] font-mono-mini tracking-[0.18em] uppercase text-white mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFCB47]" />
            Your first class is free
          </div>
          <div className="font-display italic text-[26px] sm:text-[40px] lg:text-[48px] leading-[1.02] max-w-[560px]">
            Practical self-defense, fighting &amp; fitness.
          </div>
          <div className="mt-3 text-[12px] sm:text-[13px] tracking-[0.14em] uppercase text-[#E7DDC4]">
            Fort Lauderdale · Certified Krav Maga Worldwide™ Training Center
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 border-t border-[#E4E8F0] text-[11px] font-mono-mini text-[#1F2A48]">
        {["Levels 1–5", "Kids Bully-Proof", "Women's Self-Defense", "Private / Corporate"].map((p, i) => (
          <div
            key={p}
            className={`px-3 py-3 text-center ${i !== 0 ? "border-l border-[#E4E8F0]" : ""}`}
          >
            {p}
          </div>
        ))}
      </div>
    </div>

    {/* Floating rating card */}
    <div className="absolute -left-4 sm:-left-10 -bottom-8 hidden sm:block">
      <div className="rounded-xl bg-white border border-[#E4E8F0] shadow-[0_20px_50px_-20px_rgba(31,42,72,0.28)] p-4 w-[220px]">
        <div className="flex items-center gap-1 text-[#FFCB47]">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="w-3.5 h-3.5" fill="#FFCB47" />
          ))}
        </div>
        <div className="mt-2 font-display text-3xl text-[#1F2A48] tracking-[-0.03em]">
          5.0 / 264
        </div>
        <div className="mt-1 text-[12px] text-[#5B6B8C]">
          Student reviews · Birdeye
        </div>
        <div className="mt-2 text-[10px] text-[#94A0B8] leading-tight">
          Live rating displayed on kravmagatraining.com. Verified by client.
        </div>
      </div>
    </div>
  </div>
);

const CaseStudyKravMaga = () => {
  useEffect(() => {
    const prevTitle = document.title;
    const desc = document.querySelector('meta[name="description"]');
    const prevDesc = desc?.getAttribute("content");
    document.title =
      "Krav Maga Worldwide Fort Lauderdale — Case Study | NovuCore";
    if (desc) {
      desc.setAttribute(
        "content",
        "See how NovuCore built a conversion-focused, credibility-first digital experience for Krav Maga Worldwide — Fort Lauderdale, turning a busy training schedule into a clear, book-your-free-trial journey.",
      );
    }
    return () => {
      document.title = prevTitle;
      if (desc && prevDesc != null) desc.setAttribute("content", prevDesc);
    };
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative pt-[120px] pb-24 lg:pb-28 overflow-hidden bg-white">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(45% 55% at 90% -8%, rgba(168,181,207,0.55) 0%, transparent 55%), radial-gradient(35% 40% at -5% 100%, rgba(247,228,206,0.55) 0%, transparent 60%), linear-gradient(180deg, #EEF2FA 0%, #FFFFFF 60%)",
          }}
        />
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-[11px] font-mono-mini text-[#94A0B8]">
              <li><a href="/" className="hover:text-[#1F2A48]">NovuCore</a></li>
              <li aria-hidden>/</li>
              <li>Work</li>
              <li aria-hidden>/</li>
              <li className="text-[#1F2A48]">Krav Maga Worldwide — Fort Lauderdale</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
            <div className="lg:col-span-6 rise">
              <Eyebrow>NovuCore × Krav Maga Worldwide™ — Fort Lauderdale</Eyebrow>
              <h1 className="mt-4 font-display text-[42px] sm:text-[60px] lg:text-[84px] leading-[0.98] tracking-[-0.04em] text-[#1F2A48]">
                Turning a training gym into a
                <span className="text-[#5B6B8C]"> book-my-free-trial engine.</span>
              </h1>
              <p className="mt-6 text-[16px] lg:text-[18px] leading-relaxed text-[#5B6B8C] max-w-xl">
                Krav Maga Worldwide — Fort Lauderdale is a certified training
                center led by Black Belt Randall Koch with more than twenty
                thousand hours of teaching experience. NovuCore built a digital
                experience that matches the seriousness of the instruction and
                makes it effortless to walk in for a first class.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#story"
                  className="group inline-flex items-center gap-3 btn-navy rounded-full pl-6 pr-2 py-2"
                >
                  <span className="text-[15px] font-medium">Read the case study</span>
                  <span className="w-9 h-9 rounded-full bg-white text-[#1F2A48] grid place-items-center group-hover:translate-y-0.5 transition-transform">
                    <ArrowDown className="w-4 h-4" />
                  </span>
                </a>
                <a
                  href="https://www.kravmagatraining.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[#1F2A48] text-[15px] link-underline"
                >
                  Visit the live site <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="lg:col-span-6">
              <ClientMockup />
            </div>
          </div>
        </div>
      </section>

      {/* INFO */}
      <section className="border-y border-[#E4E8F0] bg-[#F4F6FA]">
        <div className="max-w-[1320px] mx-auto px-2 lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-[#E4E8F0]">
            <InfoCell label="Client" value="Krav Maga Worldwide™ — Fort Lauderdale" />
            <InfoCell label="Industry" value="Self-defense · Fitness · Training" />
            <InfoCell label="Services" value="Strategy · UX/UI · Design · Dev · SEO" />
            <InfoCell label="Location" value="Fort Lauderdale, FL" />
            <InfoCell label="Status" value="Live" />
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section id="story" className="py-24 lg:py-36 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Eyebrow>The challenge</Eyebrow>
            <h2 className="mt-4 font-display text-[36px] lg:text-[56px] leading-[1.05] tracking-[-0.03em] text-[#1F2A48]">
              A world-class school hidden behind
              <span className="text-[#5B6B8C]"> a busy schedule.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <p className="text-[17px] lg:text-[19px] leading-relaxed text-[#2C3A5E]">
              Krav Maga Worldwide — Fort Lauderdale runs group classes seven
              days a week plus private lessons, kids programs, women&apos;s
              self-defense, TASER training and corporate seminars. The people
              inside the building were doing serious work; the digital
              experience needed to match — and to make the very first step,
              &ldquo;show up for your free class,&rdquo; feel obvious.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-[15px] text-[#2C3A5E]">
              {[
                "Establish credibility immediately",
                "Communicate Krav Maga Worldwide™ lineage",
                "Make schedules & levels easy to navigate",
                "Reduce friction on the free-trial CTA",
                "Serve beginners and advanced students equally",
                "Feature kids &amp; women's programs prominently",
                "Load fast on phones (people search mid-day)",
                "Rank well for Fort Lauderdale search",
              ].map((g) => (
                <div key={g} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#1F2A48] shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: g }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGY */}
      <section className="py-24 lg:py-36 bg-[#F4F6FA]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <Eyebrow>The strategic idea</Eyebrow>
            <h2 className="mt-4 font-display text-[40px] lg:text-[64px] leading-[1.02] tracking-[-0.03em] text-[#1F2A48]">
              From training website
              <br />
              <span className="text-[#5B6B8C]">to trusted training partner.</span>
            </h2>
            <p className="mt-6 text-[17px] lg:text-[19px] leading-relaxed text-[#2C3A5E] max-w-2xl">
              We approached the project as a trust and clarity problem. The
              gym&apos;s reputation, curriculum and lineage were already
              exceptional — the website needed to make that obvious in seconds,
              then get out of the way of the booking.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { n: "01", t: "Authority", b: "Foreground the Krav Maga Worldwide™ lineage and Randall Koch's 20,000+ teaching hours." },
              { n: "02", t: "Clarity", b: "Turn a complex program menu into a beginner-friendly journey through levels and programs." },
              { n: "03", t: "Conversion", b: "One CTA repeated with care — &lsquo;Schedule your free trial.&rsquo;" },
            ].map((c) => (
              <div key={c.n} className="rounded-2xl border border-[#E4E8F0] bg-white p-8">
                <div className="font-mono-mini text-[#94A0B8]">{c.n}</div>
                <h3 className="mt-6 font-display text-3xl text-[#1F2A48] tracking-[-0.02em]">{c.t}</h3>
                <p className="mt-3 text-[#5B6B8C] leading-relaxed" dangerouslySetInnerHTML={{ __html: c.b }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISUAL TRANSFORMATION */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <Eyebrow>Visual transformation</Eyebrow>
            <h2 className="mt-4 font-display text-[40px] lg:text-[64px] leading-[1.02] tracking-[-0.03em] text-[#1F2A48]">
              Designed to feel
              <span className="text-[#5B6B8C]"> as serious as the training.</span>
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-12 gap-4 lg:gap-6">
            <ImageTile src={IMG.mitts} alt="Krav Maga mitt work" className="col-span-12 lg:col-span-8 aspect-[16/9]" caption="Practical self-defense · reality-based" />
            <ImageTile src={IMG.wraps} alt="Boxing hand wraps close-up" className="col-span-12 lg:col-span-4 aspect-[4/5]" caption="Craft · discipline · detail" />
            <ImageTile src={IMG.grapple} alt="Grappling defensive training" className="col-span-12 lg:col-span-5 aspect-[4/5]" caption="Pressure-tested in a safe environment" />
            <ImageTile src={IMG.bag} alt="Bag work in the gym" className="col-span-12 lg:col-span-7 aspect-[16/9]" caption="Fitness · sparring · levels 1–5" />
          </div>
        </div>
      </section>

      {/* AUTHORITY / LINEAGE */}
      <section className="py-24 lg:py-36 bg-[#1F2A48] text-white relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(50% 40% at 90% 0%, rgba(168,181,207,0.20) 0%, transparent 60%), radial-gradient(45% 40% at 0% 100%, rgba(220,227,240,0.12) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-[1320px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <Eyebrow dark>Brand positioning</Eyebrow>
            <h2 className="mt-4 font-display text-[38px] lg:text-[58px] leading-[1.03] tracking-[-0.03em]">
              A serious school needed a
              <span className="text-[#A8B5CF]"> serious digital voice.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-4">
            <p className="text-[17px] lg:text-[18px] leading-relaxed text-[#C5CDE0]">
              Krav Maga was created by Imi Lichtenfeld for the Israel Defense
              Forces and is taught worldwide through Darren Levine&apos;s Krav
              Maga Worldwide™. Randall Koch, the owner and lead instructor, is
              a Black Belt with more than 20,000 hours of teaching experience.
              NovuCore translated that lineage and rigor into a visual system
              built on strong typography, high-contrast imagery, generous
              whitespace and calm — never hype.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <LineageStat value="1948" label="Krav Maga created" />
              <LineageStat value="16 yrs" label="At this location" />
              <LineageStat value="20K+" label="Hours instructing" />
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN SYSTEM */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-14">
            <Eyebrow>The design system</Eyebrow>
            <h2 className="mt-4 font-display text-[40px] lg:text-[60px] leading-[1.02] tracking-[-0.03em] text-[#1F2A48]">
              Five principles.
              <span className="text-[#5B6B8C]"> One coherent voice.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-[#E4E8F0] border border-[#E4E8F0] rounded-2xl overflow-hidden">
            {[
              { n: "01", t: "Bold typography", b: "Confident display type carries authority without shouting." },
              { n: "02", t: "Cinematic imagery", b: "Low-key training photography reinforces credibility and intensity." },
              { n: "03", t: "Restraint", b: "No hype. No macho clichés. The training speaks for itself." },
              { n: "04", t: "Contrast", b: "Dark, dramatic sections give rhythm to information-dense pages." },
              { n: "05", t: "Focus", b: "Every screen leads to one CTA — schedule a free trial." },
            ].map((p) => (
              <div key={p.n} className="bg-white p-6 lg:p-7">
                <div className="font-mono-mini text-[#94A0B8]">{p.n}</div>
                <h3 className="mt-4 font-display text-xl text-[#1F2A48]">{p.t}</h3>
                <p className="mt-2 text-[13px] text-[#5B6B8C] leading-relaxed">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-24 lg:py-36 bg-[#F4F6FA]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-14">
            <Eyebrow>Program architecture</Eyebrow>
            <h2 className="mt-4 font-display text-[40px] lg:text-[60px] leading-[1.02] tracking-[-0.03em] text-[#1F2A48]">
              A crowded menu,
              <span className="text-[#5B6B8C]"> made simple.</span>
            </h2>
            <p className="mt-6 text-[#2C3A5E] leading-relaxed max-w-2xl">
              Group classes, private lessons, kids, women&apos;s self-defense,
              TASER training, corporate workshops — organized around what
              prospective students actually search for.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: Shield, t: "Levels 1 – 5", b: "The Krav Maga Worldwide™ curriculum, from Yellow Belt through Blue &amp; Brown.", img: IMG.mitts },
              { Icon: Users, t: "Women's Self-Defense", b: "Practical, reality-based techniques designed for real-world scenarios.", img: IMG.grapple },
              { Icon: Baby, t: "Kids Bully-Proof", b: "Physical skills, verbal confidence and character development.", img: IMG.bag },
              { Icon: Zap, t: "Corporate & TASER", b: "Seminars, in-house training, TASER certification for organizations.", img: IMG.wraps },
            ].map(({ Icon, t, b, img }) => (
              <article key={t} className="rounded-2xl overflow-hidden border border-[#E4E8F0] bg-white group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={img} alt={t} className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" loading="lazy" />
                  <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(11,18,32,0) 40%, rgba(11,18,32,0.55) 100%)" }} />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[#1F2A48]">
                    <Icon className="w-4 h-4" />
                    <h3 className="font-display text-xl tracking-[-0.02em]">{t}</h3>
                  </div>
                  <p className="mt-2 text-[13px] text-[#5B6B8C] leading-relaxed" dangerouslySetInnerHTML={{ __html: b }} />
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-[12px] text-[#94A0B8]">
            Program names, curriculum and certifications belong to Krav Maga
            Worldwide™ and the training center.
          </p>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-14">
            <Eyebrow>Social proof, designed in</Eyebrow>
            <h2 className="mt-4 font-display text-[40px] lg:text-[60px] leading-[1.02] tracking-[-0.03em] text-[#1F2A48]">
              Credibility,
              <span className="text-[#5B6B8C]"> above the fold.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <StatCard icon={Star} value="5.0 / 264" label="Student reviews · Birdeye" />
            <StatCard icon={Youtube} value="24.1K" label="YouTube subscribers" />
            <StatCard icon={Award} value="Best Self-Defense School 2024" label="Local recognition, published on the site" />
          </div>
          <p className="mt-6 text-[12px] text-[#94A0B8] max-w-3xl">
            Figures and awards are published by Krav Maga Worldwide — Fort
            Lauderdale on their website. NovuCore designed the presentation of
            this social proof but did not independently verify the underlying
            counts.
          </p>
        </div>
      </section>

      {/* FIRST CLASS FREE — FEATURED */}
      <section className="relative py-24 lg:py-36 overflow-hidden bg-[#0B1220] text-white">
        <img
          src={IMG.grapple}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          loading="lazy"
        />
        <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(11,18,32,0.75) 0%, rgba(11,18,32,0.92) 100%)" }} />
        <div className="relative max-w-[1320px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Eyebrow dark>The single most important CTA</Eyebrow>
            <h2 className="mt-4 font-display text-[42px] lg:text-[72px] leading-[1.02] tracking-[-0.04em]">
              Your first class
              <br />
              is <span className="italic text-[#E7DDC4]">free.</span>
            </h2>
            <p className="mt-6 text-[16px] lg:text-[18px] leading-relaxed text-[#C5CDE0] max-w-2xl">
              We built the entire journey around one moment — the decision to
              walk through the door. Every practice-area page, every navigation
              path, every scroll lands the visitor next to a &ldquo;Schedule
              your free trial&rdquo; button. No commitment, no obstacles.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur p-8">
              <div className="font-mono-mini text-[#A8B5CF]">Featured CTA</div>
              <div className="mt-4 font-display text-[52px] leading-[1] tracking-[-0.04em]">
                Free Trial
              </div>
              <div className="mt-3 text-[15px] text-[#C5CDE0]">
                Beginner-friendly · Group classes 7 days a week
              </div>
              <a
                href="https://www.kravmagatraining.com/contacts/"
                target="_blank"
                rel="noreferrer"
                className="mt-6 group inline-flex items-center gap-3 rounded-full bg-white text-[#0B1220] pl-5 pr-2 py-2"
              >
                <span className="text-[14px] font-medium">Schedule your free trial</span>
                <span className="w-8 h-8 rounded-full bg-[#0B1220] text-white grid place-items-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>
              <div className="mt-6 pt-6 border-t border-white/10 text-[12px] text-[#A8B5CF] leading-relaxed">
                First class free as advertised on kravmagatraining.com.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-14">
            <Eyebrow>User experience</Eyebrow>
            <h2 className="mt-4 font-display text-[40px] lg:text-[60px] leading-[1.02] tracking-[-0.03em] text-[#1F2A48]">
              Designed around
              <span className="text-[#5B6B8C]"> the student journey.</span>
            </h2>
          </div>
          <ol className="grid md:grid-cols-4 gap-px bg-[#E4E8F0] border border-[#E4E8F0] rounded-2xl overflow-hidden">
            {[
              { n: "01", Icon: Compass, t: "Discover", b: "A visitor sees exactly what the school does — and where." },
              { n: "02", Icon: Eye, t: "Understand", b: "Programs and levels are laid out for beginners and veterans." },
              { n: "03", Icon: ShieldCheck, t: "Trust", b: "Instructor lineage, reviews and press build confidence." },
              { n: "04", Icon: MousePointer2, t: "Act", b: "A single, low-friction free-trial CTA closes the loop." },
            ].map(({ n, Icon, t, b }) => (
              <li key={n} className="bg-white p-7">
                <div className="flex items-center justify-between">
                  <span className="font-mono-mini text-[#94A0B8]">{n}</span>
                  <Icon className="w-4 h-4 text-[#1F2A48]" />
                </div>
                <h3 className="mt-5 font-display text-2xl text-[#1F2A48]">{t}</h3>
                <p className="mt-2 text-[14px] text-[#5B6B8C] leading-relaxed">{b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* MOBILE */}
      <section className="py-24 lg:py-36 bg-[#F4F6FA]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Eyebrow>Mobile experience</Eyebrow>
            <h2 className="mt-4 font-display text-[36px] lg:text-[52px] leading-[1.05] tracking-[-0.03em] text-[#1F2A48]">
              Designed for the screen
              <br />
              <span className="text-[#5B6B8C]"> in your hand.</span>
            </h2>
            <p className="mt-6 text-[#2C3A5E] leading-relaxed max-w-md">
              Most first-time visitors search &ldquo;Krav Maga near me&rdquo; on
              a phone. Every layout was designed mobile-first so schedules,
              reviews and the free-trial CTA sit exactly where a thumb expects
              them.
            </p>
            <ul className="mt-8 space-y-3 text-[15px] text-[#2C3A5E]">
              {["Sticky free-trial CTA", "Tap-to-call for questions", "Program cards stack cleanly", "Schedules readable one-handed"].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#1F2A48]" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* DEV + SEO */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-[#E4E8F0] bg-white p-8 lg:p-10">
            <Eyebrow>Development</Eyebrow>
            <h3 className="mt-4 font-display text-3xl lg:text-4xl text-[#1F2A48]">Fast, responsive, maintainable.</h3>
            <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-[15px] text-[#2C3A5E]">
              {["Responsive architecture", "Semantic HTML", "Optimized media (video &amp; photos)", "Accessible interactions", "Content maintainable by staff", "Fast on 4G / patchy signal", "SEO-conscious structure", "Reduced-motion support"].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#1F2A48]" />
                  <span dangerouslySetInnerHTML={{ __html: i }} />
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[#E4E8F0] bg-[#1F2A48] text-white p-8 lg:p-10">
            <Eyebrow dark>Local SEO focus</Eyebrow>
            <h3 className="mt-4 font-display text-3xl lg:text-4xl">Built to be found in Fort Lauderdale.</h3>
            <p className="mt-4 text-[#C5CDE0]">
              The site is structured for local search intent across Fort
              Lauderdale, Oakland Park, Wilton Manors, Pompano Beach,
              Lauderdale-By-The-Sea and Sea Ranch Lakes. These are strategic
              goals for the project — not measured outcomes.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-[14px] text-[#C5CDE0]">
              {["Location-aware page titles", "Structured curriculum pages", "Instructor bio pages", "Program landing pages", "Rich review widget", "Video embeds & transcripts", "Schema for LocalBusiness", "Meaningful metadata"].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#A8B5CF]" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROOF POSITIONING (no fake quote) */}
      <section className="py-24 lg:py-36 bg-[#F4F6FA]">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 text-center">
          <Eyebrow>Built around the client&apos;s positioning</Eyebrow>
          <p className="mt-6 font-display text-[30px] lg:text-[46px] leading-[1.15] tracking-[-0.02em] text-[#1F2A48]">
            &ldquo;Practical self-defense, fighting and fitness — taught by a
            certified Krav Maga Worldwide™ Black Belt with more than 20,000
            hours of instruction.&rdquo;
          </p>
          <div className="mt-6 font-mono-mini text-[#94A0B8]">
            Client positioning · kravmagatraining.com
          </div>
        </div>
      </section>

      {/* NOVUCORE DIFFERENCE */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-14">
            <Eyebrow>The NovuCore difference</Eyebrow>
            <h2 className="mt-4 font-display text-[42px] lg:text-[72px] leading-[1.0] tracking-[-0.04em] text-[#1F2A48]">
              We don&apos;t just build websites.
              <br />
              <span className="text-[#5B6B8C]">We build experiences that convert.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { Icon: Compass, t: "Strategy", b: "Understand the business before designing the interface." },
              { Icon: Sparkles, t: "Design", b: "Translate positioning into a distinctive visual experience." },
              { Icon: ShieldCheck, t: "Technology", b: "Build a fast, responsive, maintainable digital product." },
            ].map(({ Icon, t, b }) => (
              <div key={t} className="rounded-2xl border border-[#E4E8F0] bg-white p-8">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F4F6FA] border border-[#E4E8F0] text-[#1F2A48]">
                  <Icon className="w-4 h-4" />
                </span>
                <h3 className="mt-6 font-display text-3xl text-[#1F2A48] tracking-[-0.02em]">{t}</h3>
                <p className="mt-3 text-[#5B6B8C] leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 lg:py-36 bg-[#1F2A48] text-white overflow-hidden relative">
        <div
          aria-hidden
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(60% 50% at 90% 0%, rgba(168,181,207,0.20) 0%, transparent 60%), radial-gradient(45% 40% at 0% 100%, rgba(220,227,240,0.12) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-[1100px] mx-auto px-6 lg:px-10 text-center">
          <Eyebrow dark>Ready when you are</Eyebrow>
          <h2 className="mt-4 font-display text-[44px] lg:text-[80px] leading-[1.0] tracking-[-0.04em]">
            Your business deserves
            <span className="text-[#A8B5CF]"> a website that trains.</span>
          </h2>
          <p className="mt-6 text-[#C5CDE0] max-w-2xl mx-auto text-[16px] lg:text-[18px] leading-relaxed">
            Let&apos;s build a digital experience that turns your expertise,
            reputation and program depth into a first visit — and a lifetime
            member.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="/#contact" className="group inline-flex items-center gap-3 rounded-full bg-white hover:bg-[#F4F6FA] text-[#1F2A48] pl-6 pr-2 py-2 transition-colors">
              <span className="text-[15px] font-medium">Start a project</span>
              <span className="w-9 h-9 rounded-full bg-[#1F2A48] text-white grid place-items-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>
            <a href="/work/david-low-associates" className="inline-flex items-center gap-2 text-white text-[15px] link-underline">
              View another case study <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Krav Maga Worldwide — Fort Lauderdale — Case Study",
            about:
              "Website design & development for a certified Krav Maga Worldwide™ training center in Fort Lauderdale.",
            creator: {
              "@type": "Organization",
              name: "NovuCore",
              url: "https://novucore.com",
            },
            client: {
              "@type": "SportsActivityLocation",
              name: "Krav Maga Worldwide — Fort Lauderdale",
              url: "https://www.kravmagatraining.com",
              areaServed: "Fort Lauderdale, FL",
            },
            url: "https://novucore.com/work/krav-maga-fort-lauderdale",
          }),
        }}
      />
    </>
  );
};

const LineageStat = ({ value, label }) => (
  <div>
    <div className="font-display text-[26px] lg:text-[32px] tracking-[-0.04em]">{value}</div>
    <div className="mt-1 font-mono-mini text-[#A8B5CF]">{label}</div>
  </div>
);

const ImageTile = ({ src, alt, className = "", caption }) => (
  <figure className={`relative overflow-hidden rounded-2xl border border-[#E4E8F0] bg-[#F4F6FA] group ${className}`}>
    <img src={src} alt={alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
    <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(11,18,32,0) 55%, rgba(11,18,32,0.6) 100%)" }} />
    {caption && (
      <figcaption className="absolute left-5 bottom-5 font-mono-mini tracking-[0.16em] text-white/90 uppercase text-[11px]">
        {caption}
      </figcaption>
    )}
  </figure>
);

const StatCard = ({ icon: Icon, value, label }) => (
  <div className="rounded-2xl border border-[#E4E8F0] bg-white p-8 lg:p-10">
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F4F6FA] border border-[#E4E8F0] text-[#1F2A48]">
      <Icon className="w-4 h-4" />
    </span>
    <div className="mt-6 font-display text-[42px] lg:text-[56px] leading-[0.95] tracking-[-0.03em] text-[#1F2A48]">
      {value}
    </div>
    <div className="mt-3 text-[13px] font-mono-mini tracking-[0.14em] uppercase text-[#5B6B8C]">
      {label}
    </div>
  </div>
);

const PhoneMockup = () => (
  <div className="relative w-full flex justify-center">
    <div className="relative w-[300px] rounded-[42px] border border-[#E4E8F0] bg-[#0B1220] shadow-[0_40px_100px_-30px_rgba(31,42,72,0.45)] overflow-hidden">
      <div className="relative aspect-[9/19]">
        <img src={IMG.mitts} alt="Client mobile hero" className="absolute inset-0 w-full h-full object-cover opacity-90" loading="lazy" />
        <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(11,18,32,0.5) 0%, rgba(11,18,32,0.2) 40%, rgba(11,18,32,0.9) 100%)" }} />
        <div className="absolute inset-x-0 top-0 pt-8 pb-3 text-center text-white font-display text-[12px] tracking-[0.05em]">
          KRAV MAGA WORLDWIDE — FORT LAUDERDALE
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-2.5 py-1 text-[10px] font-mono-mini tracking-[0.18em] uppercase mb-3">
            <PlayCircle className="w-3 h-3" /> First class free
          </div>
          <div className="font-display italic text-[20px] leading-[1.05]">
            Practical self-defense &amp; fitness.
          </div>
          <div className="mt-2 text-[10px] tracking-[0.14em] uppercase text-[#E7DDC4]">
            Fort Lauderdale · 7 days a week
          </div>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white text-[#1F2A48] px-4 py-2 text-[12px] font-medium">
            Schedule free trial <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CaseStudyKravMaga;
