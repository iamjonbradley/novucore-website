import React from "react";
import { processSteps } from "../../mock";

const Process = () => {
  return (
    <section id="process" className="relative py-24 lg:py-36 bg-white">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-14 lg:mb-20">
          <div className="lg:col-span-5">
            <span className="font-mono-mini text-[#94A0B8]">
              <span className="inline-block w-6 h-px bg-[#94A0B8] mr-3 align-middle" />
              Process
            </span>
            <h2 className="mt-4 font-display text-[40px] lg:text-[64px] leading-[1.02] tracking-[-0.03em] text-[#1F2A48]">
              Calm, considered,
              <br />
              <span className="text-[#5B6B8C]">on time.</span>
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 text-[17px] lg:text-[19px] leading-relaxed text-[#5B6B8C]">
            We’ve refined a five-step process that keeps engagements
            transparent from kickoff to launch. You’ll always know what we’re
            working on, why, and what’s next.
          </p>
        </div>

        <ol className="border-t border-[#E4E8F0]">
          {processSteps.map((step) => (
            <li
              key={step.step}
              className="group grid grid-cols-12 gap-6 lg:gap-10 py-8 lg:py-10 border-b border-[#E4E8F0] hover:bg-[#F4F6FA] transition-colors"
            >
              <div className="col-span-2 lg:col-span-1 font-mono-mini text-[#94A0B8] pt-2">
                {step.step}
              </div>
              <h3 className="col-span-10 lg:col-span-4 font-display text-3xl lg:text-5xl text-[#1F2A48] tracking-[-0.02em]">
                {step.title}
              </h3>
              <p className="col-span-12 lg:col-span-7 text-[#5B6B8C] text-[16px] lg:text-[17px] leading-relaxed lg:pt-3">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
