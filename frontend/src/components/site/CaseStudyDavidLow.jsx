import React, { useEffect } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  Home as HomeIcon,
  Anchor,
  Plane,
  Scale,
  ShieldCheck,
  Compass,
  Eye,
  MousePointer2,
  Sparkles,
} from "lucide-react";

const IMG = {
  mansion:
    "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYW5zaW9ufGVufDB8fHx8MTc4OTA2NjEzNHww&ixlib=rb-4.1.0&q=85&w=1600",
  yacht:
    "https://images.unsplash.com/photo-1562281302-809108fd533c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHw0fHxzdXBlcnlhY2h0JTIwc3Vuc2V0fGVufDB8fHx8MTc4OTA2NjEzNHww&ixlib=rb-4.1.0&q=85&w=1600",
  jet:
    "https://images.unsplash.com/photo-1619659085985-f51a00f0160a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHwzfHxwcml2YXRlJTIwamV0fGVufDB8fHx8MTc4OTA2NjEzM3ww&ixlib=rb-4.1.0&q=85&w=1600",
  storm:
    "https://images.unsplash.com/photo-1630445460393-ef24942e36c9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHw0fHxodXJyaWNhbmUlMjBmbG9yaWRhfGVufDB8fHx8MTc4OTA2NjEzM3ww&ixlib=rb-4.1.0&q=85&w=1600",
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

// --- Hero mockup: an editorial "browser" showing the client site key elements
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
          davidlowpa.com
        </div>
        <span className="text-[11px] text-[#94A0B8] font-mono-mini hidden sm:inline">
          Live
        </span>
      </div>

      <div className="relative aspect-[16/10] bg-[#0B1220]">
        <img
          src={IMG.yacht}
          alt="Superyacht at sunset — representative of the firm's client base"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          loading="eager"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,18,32,0.35) 0%, rgba(11,18,32,0.1) 45%, rgba(11,18,32,0.75) 100%)",
          }}
        />
        {/* Client top bar */}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 py-4 text-white">
          <div className="font-serif tracking-[0.05em] text-[13px] sm:text-[15px]">
            DAVID LOW &amp; ASSOCIATES, P.A.
          </div>
          <div className="hidden sm:flex items-center gap-5 text-[11px] tracking-[0.18em] uppercase text-white/85">
            <span>Home</span>
            <span>Practice</span>
            <span>Results</span>
            <span>Contact</span>
          </div>
        </div>
        {/* Hero copy */}
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 text-white">
          <div className="font-serif italic text-[24px] sm:text-[38px] lg:text-[46px] leading-[1.05] max-w-[520px]">
            Protecting Florida&apos;s Most Valuable Assets
          </div>
          <div className="mt-3 text-[12px] sm:text-[13px] tracking-[0.14em] uppercase text-[#E7DDC4]">
            Insurance Litigation For Mansions, Yachts &amp; Private Jets
          </div>
        </div>
      </div>

      {/* Practice strip */}
      <div className="grid grid-cols-4 border-t border-[#E4E8F0] text-[11px] font-mono-mini text-[#1F2A48]">
        {["Home", "Boat", "Aviation", "Criminal"].map((p, i) => (
          <div
            key={p}
            className={`px-3 py-3 text-center ${i !== 0 ? "border-l border-[#E4E8F0]" : ""}`}
          >
            {p} Claims
          </div>
        ))}
      </div>
    </div>

    {/* Floating result card */}
    <div className="absolute -left-4 sm:-left-10 -bottom-8 hidden sm:block">
      <div className="rounded-xl bg-white border border-[#E4E8F0] shadow-[0_20px_50px_-20px_rgba(31,42,72,0.28)] p-4 w-[220px]">
        <div className="font-mono-mini text-[#94A0B8]">Representative result</div>
        <div className="mt-2 font-display text-3xl text-[#1F2A48] tracking-[-0.03em]">
          $80,000
        </div>
        <div className="mt-1 text-[12px] text-[#5B6B8C]">
          Hurricane Irma insurance claim
        </div>
        <div className="mt-2 text-[10px] text-[#94A0B8] leading-tight">
          Published by David Low &amp; Associates. Past results do not guarantee
          future outcomes.
        </div>
      </div>
    </div>
  </div>
);

const CaseStudyDavidLow = () => {
  useEffect(() => {
    const prevTitle = document.title;
    const desc = document.querySelector('meta[name="description"]');
    const prevDesc = desc?.getAttribute("content");
    document.title = "David Low & Associates Case Study | NovuCore";
    if (desc) {
      desc.setAttribute(
        "content",
        "See how NovuCore transformed the digital presence of David Low & Associates into a sophisticated, conversion-focused experience designed for a premium Florida law firm.",
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
              "radial-gradient(45% 55% at 90% -8%, rgba(168,181,207,0.55) 0%, transparent 55%), radial-gradient(35% 40% at -5% 100%, rgba(247,228,206,0.60) 0%, transparent 60%), linear-gradient(180deg, #EEF2FA 0%, #FFFFFF 60%)",
          }}
        />
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-[11px] font-mono-mini text-[#94A0B8]">
              <li><a href="/" className="hover:text-[#1F2A48]">NovuCore</a></li>
              <li aria-hidden>/</li>
              <li>Work</li>
              <li aria-hidden>/</li>
              <li className="text-[#1F2A48]">David Low &amp; Associates</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
            <div className="lg:col-span-6 rise">
              <Eyebrow>NovuCore × David Low &amp; Associates</Eyebrow>
              <h1 className="mt-4 font-display text-[42px] sm:text-[60px] lg:text-[84px] leading-[0.98] tracking-[-0.04em] text-[#1F2A48]">
                Transforming a Florida law firm into a
                <span className="text-[#5B6B8C]"> premium digital brand.</span>
              </h1>
              <p className="mt-6 text-[16px] lg:text-[18px] leading-relaxed text-[#5B6B8C] max-w-xl">
                David Low &amp; Associates needed a digital presence that
                reflected the value of the clients and assets it protects.
                NovuCore created a sophisticated web experience designed to
                elevate perception, clarify positioning, and turn complex legal
                services into an intuitive digital journey.
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
                  href="https://davidlowpa.com/"
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

      {/* PROJECT INFO */}
      <section className="border-y border-[#E4E8F0] bg-[#F4F6FA]">
        <div className="max-w-[1320px] mx-auto px-2 lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-[#E4E8F0]">
            <InfoCell label="Client" value="David Low & Associates, P.A." />
            <InfoCell label="Industry" value="Legal · Insurance litigation" />
            <InfoCell label="Services" value="Strategy · UX/UI · Design · Dev · SEO" />
            <InfoCell label="Location" value="Florida" />
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
              An established firm needed a more
              <span className="text-[#5B6B8C]"> valuable digital presence.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <p className="text-[17px] lg:text-[19px] leading-relaxed text-[#2C3A5E]">
              David Low &amp; Associates operates in a highly competitive legal
              market where trust, credibility and perceived expertise are
              critical. Its website needed to communicate more than legal
              services — it needed to communicate the value of the assets,
              properties and interests the firm protects.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-[15px] text-[#2C3A5E]">
              {[
                "Establish immediate credibility",
                "Better communicate the firm's positioning",
                "Make complex practice areas easier to understand",
                "Showcase representative results",
                "Appeal to owners of high-value property",
                "Create a stronger conversion path",
                "Work exceptionally on mobile and desktop",
                "Read as established, sophisticated, trustworthy",
              ].map((g) => (
                <div key={g} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#1F2A48] shrink-0" />
                  <span>{g}</span>
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
              From law-firm website
              <br />
              <span className="text-[#5B6B8C]">to digital brand.</span>
            </h2>
            <p className="mt-6 text-[17px] lg:text-[19px] leading-relaxed text-[#2C3A5E] max-w-2xl">
              We approached the project as a brand and experience problem — not
              simply a website redesign. Rather than lean on conventional legal
              visual language, we developed a more editorial, premium aesthetic
              designed to communicate confidence and authority without becoming
              overly corporate or aggressive.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { n: "01", t: "Position", b: "Clarify what makes the firm different in a crowded market." },
              { n: "02", t: "Perception", b: "Create a visual experience consistent with high-value clients and assets." },
              { n: "03", t: "Conversion", b: "Guide qualified visitors toward contacting the firm with confidence." },
            ].map((c) => (
              <div key={c.n} className="rounded-2xl border border-[#E4E8F0] bg-white p-8">
                <div className="font-mono-mini text-[#94A0B8]">{c.n}</div>
                <h3 className="mt-6 font-display text-3xl text-[#1F2A48] tracking-[-0.02em]">{c.t}</h3>
                <p className="mt-3 text-[#5B6B8C] leading-relaxed">{c.b}</p>
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
              <span className="text-[#5B6B8C]"> more valuable.</span>
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-12 gap-4 lg:gap-6">
            <ImageTile src={IMG.mansion} alt="Luxury Florida waterfront estate" className="col-span-12 lg:col-span-8 aspect-[16/9]" caption="Home Claims — high-value residential property" />
            <ImageTile src={IMG.jet} alt="Private jet at dusk" className="col-span-12 lg:col-span-4 aspect-[4/5]" caption="Aviation Claims — private aircraft" />
            <ImageTile src={IMG.yacht} alt="Superyacht at sunset" className="col-span-12 lg:col-span-5 aspect-[4/5]" caption="Boat Claims — marine insurance litigation" />
            <ImageTile src={IMG.storm} alt="Dramatic Florida storm sky" className="col-span-12 lg:col-span-7 aspect-[16/9]" caption="Hurricane &amp; catastrophic loss — the context of the firm's work" />
          </div>
        </div>
      </section>

      {/* BRAND POSITIONING */}
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
              Protecting valuable assets required a
              <span className="text-[#A8B5CF]"> different visual language.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-4">
            <p className="text-[17px] lg:text-[18px] leading-relaxed text-[#C5CDE0]">
              The client&apos;s public positioning — <em>&ldquo;Protecting
              Florida&apos;s Most Valuable Assets&rdquo;</em> — is built around
              high-value property and specialized claims involving homes, boats,
              private aircraft and criminal defense. NovuCore translated that
              positioning into a visual system built on premium photography,
              restrained typography, dramatic scale, generous whitespace and
              clear information hierarchy.
            </p>
            <div className="mt-8 flex flex-wrap gap-2 text-[11px]">
              {["Editorial serif display", "Warm gold accents", "Dark cinematic imagery", "Generous whitespace", "Confident hierarchy"].map((t) => (
                <span key={t} className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 font-mono-mini tracking-[0.15em] text-white/90">{t}</span>
              ))}
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
              { n: "01", t: "Editorial typography", b: "Large, confident headlines establish authority without relying on legal clichés." },
              { n: "02", t: "Architectural imagery", b: "Premium property, aviation, marine and Florida imagery reinforce positioning." },
              { n: "03", t: "Restraint", b: "Minimal visual noise so content and results carry the experience." },
              { n: "04", t: "Contrast", b: "Dark and light sections create rhythm and hierarchy across the page." },
              { n: "05", t: "Precision", b: "Spacing, typography, imagery and interaction details are intentionally controlled." },
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

      {/* PRACTICE AREAS */}
      <section className="py-24 lg:py-36 bg-[#F4F6FA]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-14">
            <Eyebrow>Practice-area experience</Eyebrow>
            <h2 className="mt-4 font-display text-[40px] lg:text-[60px] leading-[1.02] tracking-[-0.03em] text-[#1F2A48]">
              Complex services,
              <span className="text-[#5B6B8C]"> understood in seconds.</span>
            </h2>
            <p className="mt-6 text-[#2C3A5E] leading-relaxed max-w-2xl">
              Complex legal services become easier to understand when
              information architecture reflects the way prospective clients
              think about their problems.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: HomeIcon, t: "Home Claims", b: "High-value residential property claims and denials.", img: IMG.mansion },
              { Icon: Anchor, t: "Boat Claims", b: "Marine insurance litigation for yachts and private vessels.", img: IMG.yacht },
              { Icon: Plane, t: "Aviation Claims", b: "Private aircraft insurance claims and disputes.", img: IMG.jet },
              { Icon: Scale, t: "Criminal Defense", b: "Aggressive defense representation.", img: IMG.storm },
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
                  <p className="mt-2 text-[13px] text-[#5B6B8C] leading-relaxed">{b}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-[12px] text-[#94A0B8]">
            Practice-area names belong to David Low &amp; Associates. Imagery is
            representative and not from the client&apos;s website.
          </p>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-14">
            <Eyebrow>Results, above the fold</Eyebrow>
            <h2 className="mt-4 font-display text-[40px] lg:text-[60px] leading-[1.02] tracking-[-0.03em] text-[#1F2A48]">
              Credibility,
              <span className="text-[#5B6B8C]"> designed in.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <StatCard value="$3M" label="Hurricane damage settlement" />
            <StatCard value="$500K" label="Luxury home water damage" />
            <StatCard value="$100M+" label="Total recovered for clients" quoted />
          </div>
          <p className="mt-6 text-[12px] text-[#94A0B8] max-w-3xl">
            Figures published by David Low &amp; Associates on their website.
            NovuCore did not independently verify these results. Past results do
            not guarantee future outcomes.
          </p>
        </div>
      </section>

      {/* HURRICANE IRMA FEATURE */}
      <section className="relative py-24 lg:py-36 overflow-hidden bg-[#0B1220] text-white">
        <img
          src={IMG.storm}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          loading="lazy"
        />
        <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(11,18,32,0.75) 0%, rgba(11,18,32,0.9) 100%)" }} />
        <div className="relative max-w-[1320px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Eyebrow dark>Turning results into stories</Eyebrow>
            <h2 className="mt-4 font-display text-[42px] lg:text-[72px] leading-[1.02] tracking-[-0.04em]">
              An <span className="italic text-[#E7DDC4]">$80,000</span> Hurricane Irma claim,
              <br /> presented as a story.
            </h2>
            <p className="mt-6 text-[16px] lg:text-[18px] leading-relaxed text-[#C5CDE0] max-w-2xl">
              We used representative client outcomes as part of the site&apos;s
              credibility architecture. An $80,000 Hurricane Irma claim gives
              prospective clients a tangible sense of the kind of matter the
              firm handles — grounded, specific and real.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur p-8">
              <div className="font-mono-mini text-[#A8B5CF]">Representative result</div>
              <div className="mt-4 font-display text-[64px] leading-[1] tracking-[-0.04em]">
                $80,000
              </div>
              <div className="mt-3 text-[15px] text-[#C5CDE0]">
                Hurricane Irma insurance claim
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 text-[12px] text-[#A8B5CF] leading-relaxed">
                Representative result published by David Low &amp; Associates.
                NovuCore did not provide legal services. Past results do not
                guarantee future outcomes.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USER EXPERIENCE / JOURNEY */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-14">
            <Eyebrow>User experience</Eyebrow>
            <h2 className="mt-4 font-display text-[40px] lg:text-[60px] leading-[1.02] tracking-[-0.03em] text-[#1F2A48]">
              Designed around
              <span className="text-[#5B6B8C]"> the client journey.</span>
            </h2>
          </div>
          <ol className="grid md:grid-cols-4 gap-px bg-[#E4E8F0] border border-[#E4E8F0] rounded-2xl overflow-hidden">
            {[
              { n: "01", Icon: Compass, t: "Discover", b: "A visitor immediately understands what the firm does." },
              { n: "02", Icon: Eye, t: "Understand", b: "Practice areas are presented clearly and specifically." },
              { n: "03", Icon: ShieldCheck, t: "Trust", b: "Results, positioning and visual credibility reinforce confidence." },
              { n: "04", Icon: MousePointer2, t: "Act", b: "Clear contact paths encourage qualified visitors to reach out." },
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

      {/* MOBILE + DEVELOPMENT + SEO */}
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
              Premium design cannot stop at desktop. Every major interaction was
              considered for smaller screens so the experience remains clear,
              fast and conversion-focused.
            </p>
            <ul className="mt-8 space-y-3 text-[15px] text-[#2C3A5E]">
              {["Responsive architecture", "Touch-first CTA sizing", "Above-the-fold clarity", "Mobile navigation refined"].map((i) => (
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

      {/* DEV + SEO grid */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-[#E4E8F0] bg-white p-8 lg:p-10">
            <Eyebrow>Development</Eyebrow>
            <h3 className="mt-4 font-display text-3xl lg:text-4xl text-[#1F2A48]">Designed with performance in mind.</h3>
            <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-[15px] text-[#2C3A5E]">
              {["Responsive architecture", "Semantic HTML", "Optimized imagery", "Performance-conscious assets", "Accessible interactions", "SEO-conscious structure", "Maintainable components", "Reduced-motion support"].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#1F2A48]" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[#E4E8F0] bg-[#1F2A48] text-white p-8 lg:p-10">
            <Eyebrow dark>SEO &amp; content architecture</Eyebrow>
            <h3 className="mt-4 font-display text-3xl lg:text-4xl">Built to be found.</h3>
            <p className="mt-4 text-[#C5CDE0]">
              The site structure was designed to make the firm&apos;s services
              easier for both users and search engines to understand. These are
              strategic goals for the project — not measured outcomes.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-[14px] text-[#C5CDE0]">
              {["Clear page hierarchy", "Practice-area landing pages", "Location relevance", "Search-friendly headings", "Structured content", "Strong internal linking", "Conversion-focused pages", "Considered metadata"].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#A8B5CF]" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* NOVUCORE DIFFERENCE */}
      <section className="py-24 lg:py-36 bg-[#F4F6FA]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-14">
            <Eyebrow>The NovuCore difference</Eyebrow>
            <h2 className="mt-4 font-display text-[42px] lg:text-[72px] leading-[1.0] tracking-[-0.04em] text-[#1F2A48]">
              We don&apos;t just build websites.
              <br />
              <span className="text-[#5B6B8C]">We build digital experiences that change how businesses are perceived.</span>
            </h2>
            <p className="mt-6 text-[#2C3A5E] leading-relaxed max-w-2xl">
              NovuCore combines strategy, design, technology and conversion
              thinking to create digital experiences that make sophisticated
              businesses look as sophisticated online as they are in the real
              world.
            </p>
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

      {/* BUILT AROUND POSITIONING (in lieu of quote) */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 text-center">
          <Eyebrow>Built around the client&apos;s positioning</Eyebrow>
          <p className="mt-6 font-display text-[30px] lg:text-[46px] leading-[1.15] tracking-[-0.02em] text-[#1F2A48]">
            &ldquo;Protecting Florida&apos;s Most Valuable Assets — insurance
            litigation for mansions, yachts and private jets.&rdquo;
          </p>
          <div className="mt-6 font-mono-mini text-[#94A0B8]">
            Client positioning · davidlowpa.com
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
            Your website should look as
            <span className="text-[#A8B5CF]"> valuable as your business.</span>
          </h2>
          <p className="mt-6 text-[#C5CDE0] max-w-2xl mx-auto text-[16px] lg:text-[18px] leading-relaxed">
            Let&apos;s build a digital experience that turns your expertise,
            reputation and positioning into an experience your clients can feel.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="/#contact" className="group inline-flex items-center gap-3 rounded-full bg-white hover:bg-[#F4F6FA] text-[#1F2A48] pl-6 pr-2 py-2 transition-colors">
              <span className="text-[15px] font-medium">Start a project</span>
              <span className="w-9 h-9 rounded-full bg-[#1F2A48] text-white grid place-items-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>
            <a href="/#services" className="inline-flex items-center gap-2 text-white text-[15px] link-underline">
              View our services <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "David Low & Associates — Case Study",
            about: "Premium website design & development for a Florida law firm.",
            creator: {
              "@type": "Organization",
              name: "NovuCore",
              url: "https://novucore.com",
            },
            client: {
              "@type": "LegalService",
              name: "David Low & Associates, P.A.",
              url: "https://davidlowpa.com",
              areaServed: "Florida",
            },
            url: "https://novucore.com/work/david-low-associates",
          }),
        }}
      />
    </>
  );
};

// --- Small sub-components ---
const ImageTile = ({ src, alt, className = "", caption }) => (
  <figure className={`relative overflow-hidden rounded-2xl border border-[#E4E8F0] bg-[#F4F6FA] group ${className}`}>
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
    />
    <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(11,18,32,0) 55%, rgba(11,18,32,0.6) 100%)" }} />
    {caption && (
      <figcaption className="absolute left-5 bottom-5 font-mono-mini tracking-[0.16em] text-white/90 uppercase text-[11px]">
        {caption}
      </figcaption>
    )}
  </figure>
);

const StatCard = ({ value, label, quoted }) => (
  <div className="rounded-2xl border border-[#E4E8F0] bg-white p-8 lg:p-10">
    <div className="font-display text-[56px] lg:text-[72px] leading-[0.95] tracking-[-0.04em] text-[#1F2A48]">
      {value}
    </div>
    <div className="mt-3 text-[13px] font-mono-mini tracking-[0.14em] uppercase text-[#5B6B8C]">
      {label}
    </div>
    {quoted && (
      <div className="mt-3 text-[11px] text-[#94A0B8]">
        As published on davidlowpa.com
      </div>
    )}
  </div>
);

const PhoneMockup = () => (
  <div className="relative w-full flex justify-center">
    <div className="relative w-[300px] rounded-[42px] border border-[#E4E8F0] bg-[#0B1220] shadow-[0_40px_100px_-30px_rgba(31,42,72,0.45)] overflow-hidden">
      <div className="relative aspect-[9/19]">
        <img src={IMG.yacht} alt="Client mobile hero" className="absolute inset-0 w-full h-full object-cover opacity-90" loading="lazy" />
        <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(11,18,32,0.5) 0%, rgba(11,18,32,0.2) 40%, rgba(11,18,32,0.9) 100%)" }} />
        <div className="absolute inset-x-0 top-0 pt-8 pb-3 text-center text-white font-serif text-[13px] tracking-[0.05em]">
          DAVID LOW &amp; ASSOCIATES, P.A.
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          <div className="font-serif italic text-[22px] leading-[1.05]">
            Protecting Florida&apos;s Most Valuable Assets
          </div>
          <div className="mt-2 text-[10px] tracking-[0.14em] uppercase text-[#E7DDC4]">
            Insurance Litigation For Mansions, Yachts &amp; Private Jets
          </div>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white text-[#1F2A48] px-4 py-2 text-[12px] font-medium">
            Contact the firm <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CaseStudyDavidLow;
