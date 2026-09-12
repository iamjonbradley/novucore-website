import React, { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowUpRight, ArrowDown, Check, ArrowRight } from "lucide-react";
import { servicePagesMap, servicePages } from "../../mock";

const ServicePage = () => {
  const { slug } = useParams();
  const s = servicePagesMap[slug];

  useEffect(() => {
    if (!s) return;
    const prev = document.title;
    const desc = document.querySelector('meta[name="description"]');
    const prevDesc = desc?.getAttribute("content");
    document.title = `${s.title} | NovuCore`;
    if (desc) desc.setAttribute("content", `${s.title} — ${s.tagline} ${s.lead}`);
    return () => {
      document.title = prev;
      if (desc && prevDesc != null) desc.setAttribute("content", prevDesc);
    };
  }, [s]);

  if (!s) return <Navigate to="/#services" replace />;

  const others = servicePages.filter((p) => p.slug !== s.slug);

  return (
    <>
      {/* HERO */}
      <section className="relative pt-[120px] pb-24 lg:pb-28 overflow-hidden bg-white">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background: `radial-gradient(45% 55% at 92% -6%, ${s.tint} 0%, transparent 55%), radial-gradient(35% 40% at -6% 100%, ${s.tint} 0%, transparent 60%), linear-gradient(180deg, #FBFCFE 0%, #FFFFFF 60%)`,
          }}
        />
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-[11px] font-mono-mini text-[#94A0B8]">
              <li><Link to="/" className="hover:text-[#1F2A48]">NovuCore</Link></li>
              <li aria-hidden>/</li>
              <li><Link to="/#services" className="hover:text-[#1F2A48]">Services</Link></li>
              <li aria-hidden>/</li>
              <li className="text-[#1F2A48]">{s.title}</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 rise">
              <span
                className="inline-flex items-center gap-3 font-mono-mini"
                style={{ color: s.accent }}
              >
                <span
                  className="inline-block w-6 h-px"
                  style={{ background: s.accent }}
                />
                {s.eyebrow}
              </span>
              <h1 className="mt-4 font-display text-[46px] sm:text-[70px] lg:text-[104px] leading-[0.96] tracking-[-0.04em] text-[#1F2A48]">
                {s.title.split(" ")[0]}{" "}
                <span style={{ color: s.accent }}>
                  {s.title.split(" ").slice(1).join(" ")}
                </span>
              </h1>
              <p className="mt-6 text-[18px] lg:text-[22px] leading-[1.4] text-[#1F2A48] font-display-light max-w-2xl">
                {s.tagline}
              </p>
              <p className="mt-4 text-[16px] lg:text-[18px] leading-relaxed text-[#5B6B8C] max-w-2xl">
                {s.lead}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="/#contact"
                  className="group inline-flex items-center gap-3 btn-navy rounded-full pl-6 pr-2 py-2"
                >
                  <span className="text-[15px] font-medium">Start a project</span>
                  <span className="w-9 h-9 rounded-full bg-white text-[#1F2A48] grid place-items-center group-hover:rotate-45 transition-transform">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
                <a
                  href="#included"
                  className="inline-flex items-center gap-2 text-[#1F2A48] text-[15px] link-underline"
                >
                  What&apos;s included <ArrowDown className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="grid grid-cols-3 border-t border-b border-[#E4E8F0]">
                {s.outcomes.map((o, i) => (
                  <div key={o.l} className={`py-5 ${i !== 0 ? "border-l border-[#E4E8F0]" : ""}`}>
                    <div
                      className="font-display text-[22px] lg:text-[28px] leading-[0.95] tracking-[-0.03em]"
                      style={{ color: s.accent }}
                    >
                      {o.v}
                    </div>
                    <div className="mt-2 font-mono-mini text-[#94A0B8]">{o.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section id="included" className="py-24 lg:py-36" style={{ background: s.tint + "55" }}>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-14">
            <span className="font-mono-mini text-[#94A0B8]">
              <span
                className="inline-block w-6 h-px mr-3 align-middle"
                style={{ background: s.accent }}
              />
              What&apos;s included
            </span>
            <h2 className="mt-4 font-display text-[40px] lg:text-[60px] leading-[1.02] tracking-[-0.03em] text-[#1F2A48]">
              Every engagement ships with
              <span style={{ color: s.accent }}> the essentials, plus craft.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {s.included.map((f) => (
              <div
                key={f.t}
                className="rounded-2xl bg-white border border-[#E4E8F0] p-7 hover:shadow-[0_20px_50px_-20px_rgba(31,42,72,0.15)] transition-shadow"
              >
                <span
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full"
                  style={{ background: s.tint, color: s.accent }}
                >
                  <Check className="w-4 h-4" />
                </span>
                <h3 className="mt-5 font-display text-2xl text-[#1F2A48] tracking-[-0.02em]">
                  {f.t}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#5B6B8C]">{f.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-14">
            <span className="font-mono-mini text-[#94A0B8]">
              <span
                className="inline-block w-6 h-px mr-3 align-middle"
                style={{ background: s.accent }}
              />
              Process
            </span>
            <h2 className="mt-4 font-display text-[40px] lg:text-[60px] leading-[1.02] tracking-[-0.03em] text-[#1F2A48]">
              A calm cadence,
              <span style={{ color: s.accent }}> from kickoff to launch.</span>
            </h2>
          </div>
          <ol className="grid md:grid-cols-4 gap-px bg-[#E4E8F0] border border-[#E4E8F0] rounded-2xl overflow-hidden">
            {s.process.map((step) => (
              <li key={step.n} className="bg-white p-7">
                <div
                  className="font-mono-mini font-medium"
                  style={{ color: s.accent }}
                >
                  {step.n}
                </div>
                <h3 className="mt-5 font-display text-2xl text-[#1F2A48]">{step.t}</h3>
                <p className="mt-2 text-[14px] text-[#5B6B8C] leading-relaxed">{step.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 lg:py-36" style={{ background: "#F4F6FA" }}>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="font-mono-mini text-[#94A0B8]">
              <span
                className="inline-block w-6 h-px mr-3 align-middle"
                style={{ background: s.accent }}
              />
              Common questions
            </span>
            <h2 className="mt-4 font-display text-[36px] lg:text-[52px] leading-[1.05] tracking-[-0.03em] text-[#1F2A48]">
              A few things
              <br />
              <span style={{ color: s.accent }}>worth knowing.</span>
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-6">
            {s.faqs.map((f) => (
              <div key={f.q} className="rounded-2xl border border-[#E4E8F0] bg-white p-7">
                <h3 className="font-display text-xl lg:text-2xl text-[#1F2A48]">{f.q}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#5B6B8C]">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CROSS-SELL */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
            <h2 className="font-display text-[32px] lg:text-[48px] tracking-[-0.03em] text-[#1F2A48]">
              Other ways to work together
            </h2>
            <Link to="/#services" className="text-[#1F2A48] link-underline text-[15px]">
              All services
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {others.map((o) => (
              <Link
                key={o.slug}
                to={`/services/${o.slug}`}
                className="group rounded-2xl border border-[#E4E8F0] bg-white p-7 hover:border-[#A8B5CF] hover:shadow-[0_20px_50px_-20px_rgba(31,42,72,0.15)] transition-all"
              >
                <div
                  className="font-mono-mini"
                  style={{ color: o.accent }}
                >
                  {o.eyebrow}
                </div>
                <h3 className="mt-5 font-display text-2xl text-[#1F2A48] tracking-[-0.02em]">
                  {o.title}
                </h3>
                <p className="mt-2 text-[14px] text-[#5B6B8C] leading-relaxed">{o.tagline}</p>
                <span
                  className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium"
                  style={{ color: o.accent }}
                >
                  Read more <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-36 bg-[#1F2A48] text-white relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-60"
          style={{
            background: `radial-gradient(60% 50% at 90% 0%, ${s.tint}66 0%, transparent 60%), radial-gradient(45% 40% at 0% 100%, rgba(220,227,240,0.10) 0%, transparent 60%)`,
          }}
        />
        <div className="relative max-w-[1100px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-[44px] lg:text-[76px] leading-[1.02] tracking-[-0.04em]">
            Ready to build
            <span style={{ color: s.tint }}> something worth shipping?</span>
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="/#contact" className="group inline-flex items-center gap-3 rounded-full bg-white text-[#1F2A48] pl-6 pr-2 py-2">
              <span className="text-[15px] font-medium">Start a project</span>
              <span className="w-9 h-9 rounded-full bg-[#1F2A48] text-white grid place-items-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>
            <Link to="/work" className="inline-flex items-center gap-2 text-white text-[15px] link-underline">
              See recent work <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicePage;
