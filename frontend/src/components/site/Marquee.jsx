import React from "react";
import { Sparkles } from "lucide-react";
import { techStack, company } from "../../mock";

const Marquee = () => {
  const items = [...techStack, ...techStack];
  return (
    <section className="relative overflow-hidden">
      {/* Thin navy accent strip above the band */}
      <div
        aria-hidden
        className="h-[10px] w-full"
        style={{
          background:
            "linear-gradient(90deg, #1F2A48 0%, #3B4D7A 35%, #5B6B8C 65%, #1F2A48 100%)",
        }}
      />

      {/* Tagline strip */}
      <div className="bg-[#1F2A48] text-white">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 font-mono-mini tracking-[0.22em] text-[#A8B5CF]">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            {company.tagline}
          </div>
          <div className="hidden sm:flex items-center gap-3 font-mono-mini text-[#A8B5CF]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A8B5CF]" />
            Studio of one · est. 2018
          </div>
        </div>
      </div>

      {/* Warm peach band with marquee */}
      <div className="peach-band border-y border-[#E4D7C2] relative overflow-hidden">
        <div className="flex items-center py-5">
          <div className="flex marquee-track whitespace-nowrap">
            {items.map((t, i) => (
              <span
                key={`${t}-${i}`}
                className="inline-flex items-center gap-3 px-7 font-mono-mini text-[#7C5A3A]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#1F2A48]" />
                {t}
              </span>
            ))}
          </div>
        </div>
        {/* edge fades */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-24"
          style={{ background: "linear-gradient(90deg, #FBEAD3 0%, transparent 100%)" }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-24"
          style={{ background: "linear-gradient(270deg, #ECE2F0 0%, transparent 100%)" }}
        />
      </div>
    </section>
  );
};

export default Marquee;
