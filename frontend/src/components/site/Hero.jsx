import React from "react";
import { ArrowUpRight, ArrowDown, Sparkles } from "lucide-react";
import { stats, company } from "../../mock";
import HeroVisual from "./HeroVisual";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative pt-[110px] pb-20 lg:pb-28 overflow-hidden hero-bg"
    >
      {/* Floating animated conic accent (very subtle) */}
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full conic-accent opacity-50 -z-10 pointer-events-none"
      />
      {/* Dot grid */}
      <div className="absolute inset-0 -z-10 dot-bg opacity-[0.45]" aria-hidden />
      {/* Hairline separator at the bottom */}
      <div
        className="absolute inset-x-0 bottom-0 h-px -z-0"
        aria-hidden
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #DCE3F0 20%, #DCE3F0 80%, transparent 100%)",
        }}
      />

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        {/* Top meta */}
        <div className="flex items-center justify-between mb-10 lg:mb-14">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#E4E8F0] bg-white/80 backdrop-blur px-3 py-1.5 shadow-[0_1px_0_rgba(31,42,72,0.04)]">
            <span className="block w-1.5 h-1.5 rounded-full bg-[#1F2A48] dot-pulse" />
            <span className="font-mono-mini text-[#5B6B8C]">
              Available — booking Q3 / Q4
            </span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-2 font-mono-mini text-[#94A0B8]">
            <Sparkles className="w-3.5 h-3.5 text-[#1F2A48]" />
            {company.tagline}
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left — copy */}
          <div className="lg:col-span-7 rise">
            <h1 className="font-display text-[42px] sm:text-[60px] lg:text-[88px] leading-[0.96] tracking-[-0.04em] text-[#1F2A48]">
              Custom-coded
              <br />
              websites that
              <span className="relative inline-block ml-2 align-baseline">
                <span className="relative z-10 px-3 text-white">actually</span>
                <span
                  aria-hidden
                  className="absolute inset-0 bg-[#1F2A48] -skew-x-6 rounded-md"
                />
              </span>{" "}
              <span className="text-[#5B6B8C]">ship.</span>
            </h1>

            <p className="mt-7 lg:mt-8 text-[16px] lg:text-[18px] leading-relaxed text-[#5B6B8C] max-w-xl">
              NovuCore is a small studio building hand-crafted websites and web
              apps for ambitious teams. No drag-and-drop builders, no bloated
              themes — just fast, accessible, hand-written code, launched on
              time.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 btn-navy rounded-full pl-6 pr-2 py-2"
              >
                <span className="text-[15px] font-medium">Start a project</span>
                <span className="w-9 h-9 rounded-full bg-white text-[#1F2A48] grid place-items-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-[#1F2A48] text-[15px] link-underline"
              >
                See what we build <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right — graphic */}
          <div className="lg:col-span-5">
            <HeroVisual />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 lg:mt-28 grid grid-cols-2 lg:grid-cols-4 border-t border-[#E4E8F0]">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-7 lg:py-9 px-1 ${
                i !== 0 ? "lg:border-l border-[#E4E8F0]" : ""
              } ${i % 2 === 1 ? "border-l border-[#E4E8F0] lg:border-l" : ""}`}
            >
              <div className="font-display text-4xl lg:text-6xl text-[#1F2A48] tracking-[-0.04em]">
                {s.value}
              </div>
              <div className="mt-3 font-mono-mini text-[#94A0B8]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
