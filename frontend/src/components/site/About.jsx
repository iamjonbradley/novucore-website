import React from "react";
import { Target, Scale, Repeat } from "lucide-react";
import { pillars, company } from "../../mock";

const icons = { focus: Target, balance: Scale, evolution: Repeat };

const About = () => {
  return (
    <section id="about" className="relative py-24 lg:py-36 bg-white">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="font-mono-mini text-[#94A0B8] mb-6">
              <span className="inline-block w-6 h-px bg-[#94A0B8] mr-3 align-middle" />
              About the studio
            </div>
            <h2 className="font-display text-[40px] lg:text-[64px] leading-[1.02] tracking-[-0.03em] text-[#1F2A48]">
              Soft. Modern.
              <br />
              <span className="text-[#5B6B8C]">Timeless.</span>
            </h2>
            <p className="mt-6 text-[16px] lg:text-[17px] leading-relaxed text-[#5B6B8C] max-w-md">
              {company.name} is a studio for founders and product teams who care
              about details — the shape of a button, the rhythm of a paragraph,
              the second a page takes to load. We build websites that feel
              considered today and still feel right five years from now.
            </p>
          </div>

          <div className="lg:col-span-7 lg:pt-4">
            <p className="text-[17px] lg:text-[19px] leading-relaxed text-[#1F2A48]">
              The symbol at the heart of NovuCore represents a core in constant
              evolution — balanced, adaptable, and built for what’s next. Every
              engagement is led directly by a senior developer. No hand-offs,
              no junior teams, no surprises. Just one person accountable for
              shipping work you’re proud to share.
            </p>

            <div className="mt-12 grid sm:grid-cols-3 gap-px bg-[#E4E8F0] border border-[#E4E8F0] rounded-2xl overflow-hidden">
              {pillars.map((p) => {
                const Icon = icons[p.key];
                return (
                  <div
                    key={p.key}
                    className="bg-white p-7 hover:bg-[#F4F6FA] transition-colors"
                  >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F4F6FA] border border-[#E4E8F0] text-[#1F2A48]">
                      <Icon className="w-4 h-4" />
                    </span>
                    <h3 className="mt-5 font-display text-2xl text-[#1F2A48]">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-[#5B6B8C]">
                      {p.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
