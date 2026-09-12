import React from "react";
import { processSteps } from "../../mock";

const stepColors = ["#A56A0F", "#0F6E4A", "#B4451F", "#4B69B8", "#1F2A48"];

const Process = () => {
  return (
    <section id="process" className="relative py-24 lg:py-36 bg-[#F4F8F1]">
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
              <span className="text-[#0F6E4A]">on time.</span>
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 text-[17px] lg:text-[19px] leading-relaxed text-[#5B6B8C]">
            We&rsquo;ve refined a five-step process that keeps engagements
            transparent from kickoff to launch. You&rsquo;ll always know what we&rsquo;re
            working on, why, and what&rsquo;s next.
          </p>
        </div>

        <ol className="border-t border-[#D9E4CE]">
          {processSteps.map((step, idx) => (
            <li
              key={step.step}
              className="group grid grid-cols-12 gap-6 lg:gap-10 py-8 lg:py-10 border-b border-[#D9E4CE] hover:bg-white transition-colors"
            >
              <div
                className="col-span-2 lg:col-span-1 font-mono-mini pt-2 font-medium"
                style={{ color: stepColors[idx % stepColors.length] }}
              >
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
