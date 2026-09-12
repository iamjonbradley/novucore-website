import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { workProjects } from "../../mock";

const WorkHighlights = () => {
  return (
    <section id="work" className="relative py-24 lg:py-36 bg-white">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <span className="font-mono-mini text-[#94A0B8]">
              <span className="inline-block w-6 h-px bg-[#94A0B8] mr-3 align-middle" />
              Selected work
            </span>
            <h2 className="mt-4 font-display text-[40px] lg:text-[64px] leading-[1.02] tracking-[-0.03em] text-[#1F2A48]">
              Recent projects
              <span className="text-[#A56A0F]"> we&apos;re proud of.</span>
            </h2>
          </div>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-[#1F2A48] text-[15px] link-underline w-fit"
          >
            See all work <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {workProjects.map((p) => (
            <Link
              key={p.slug}
              to={p.href}
              className="group block rounded-2xl overflow-hidden border border-[#E4E8F0] bg-white hover:border-[#A8B5CF] hover:shadow-[0_30px_70px_-30px_rgba(31,42,72,0.25)] transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.client} preview`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, rgba(11,18,32,0) 45%, rgba(11,18,32,0.6) 100%)" }}
                />
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1.5 font-mono-mini text-[#1F2A48]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F2A48]" />
                  Case study · {p.year}
                </div>
                <div className="absolute left-5 bottom-5 right-5 flex items-end justify-between text-white">
                  <div>
                    <div className="font-display text-2xl lg:text-3xl leading-tight tracking-[-0.02em]">
                      {p.client}
                    </div>
                    <div className="mt-1 font-mono-mini text-white/85">{p.industry}</div>
                  </div>
                  <span className="w-10 h-10 rounded-full bg-white text-[#1F2A48] grid place-items-center group-hover:rotate-45 transition-transform">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
              <div className="p-6 lg:p-7 flex items-center justify-between gap-4">
                <p className="text-[#5B6B8C] leading-relaxed max-w-md text-[14px] lg:text-[15px]">
                  {p.tagline}
                </p>
                <div className="hidden sm:flex flex-wrap gap-1.5 justify-end shrink-0 max-w-[45%]">
                  {p.services.slice(0, 3).map((s) => (
                    <span
                      key={s}
                      className="inline-block rounded-full border border-[#E4E8F0] bg-[#F4F6FA] px-2.5 py-1 text-[10px] font-mono-mini text-[#5B6B8C]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkHighlights;
