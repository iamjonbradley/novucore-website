import React from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { services } from "../../mock";

const Services = () => {
  return (
    <section id="services" className="relative py-24 lg:py-36 bg-[#F4F6FA]">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 lg:mb-20">
          <div className="max-w-2xl">
            <span className="font-mono-mini text-[#94A0B8]">
              <span className="inline-block w-6 h-px bg-[#94A0B8] mr-3 align-middle" />
              Services
            </span>
            <h2 className="mt-4 font-display text-[40px] lg:text-[64px] leading-[1.02] tracking-[-0.03em] text-[#1F2A48]">
              What we make
              <br />
              <span className="text-[#5B6B8C]">together.</span>
            </h2>
          </div>
          <p className="text-[#5B6B8C] text-[16px] leading-relaxed max-w-md">
            Four ways to work with NovuCore. Every engagement is scoped, priced
            and delivered as a fixed project — no hourly surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <article
              key={s.id}
              className="group relative bg-white border border-[#E4E8F0] rounded-2xl p-8 lg:p-10 hover:border-[#A8B5CF] hover:shadow-[0_24px_60px_-30px_rgba(31,42,72,0.25)] transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-mono-mini text-[#94A0B8]">{s.number}</span>
                <span className="w-10 h-10 rounded-full border border-[#E4E8F0] grid place-items-center text-[#1F2A48] group-hover:bg-[#1F2A48] group-hover:text-white group-hover:border-[#1F2A48] transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

              <h3 className="font-display text-3xl lg:text-4xl text-[#1F2A48] tracking-[-0.02em]">
                {s.title}
              </h3>
              <p className="mt-4 text-[#5B6B8C] leading-relaxed max-w-md">
                {s.summary}
              </p>

              <ul className="mt-8 space-y-3">
                {s.deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-3 text-[14px] text-[#2C3A5E]"
                  >
                    <Check className="w-4 h-4 mt-0.5 text-[#1F2A48] shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
