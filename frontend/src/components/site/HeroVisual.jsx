import React from "react";
import { Gauge, Zap, CheckCircle2, Globe } from "lucide-react";

/**
 * Decorative hero visual — glassy code-editor mockup with floating
 * performance card, deploy badge, and brand-mark accent.
 */
const HeroVisual = () => {
  return (
    <div className="relative w-full max-w-[560px] mx-auto lg:ml-auto lg:mr-0 select-none">
      {/* Soft glow */}
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(168,181,207,0.55) 0%, rgba(168,181,207,0) 70%)",
        }}
      />

      {/* Faint giant brand mark behind everything */}
      <img
        src="/icon.png"
        alt=""
        aria-hidden="true"
        className="absolute -right-12 -top-8 w-[260px] h-[260px] object-contain opacity-[0.10] pointer-events-none select-none"
        draggable="false"
      />

      {/* Main code-editor card */}
      <div className="relative rounded-2xl border border-[#E4E8F0] bg-white shadow-[0_30px_80px_-30px_rgba(31,42,72,0.30),0_8px_20px_-12px_rgba(31,42,72,0.10)] overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#E4E8F0] bg-[#F4F6FA]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B6B]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFCB47]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#5CC983]/80" />
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-[#E4E8F0] text-[11px] text-[#5B6B8C] font-mono-mini tracking-[0.1em]">
            <Globe className="w-3 h-3 text-[#1F2A48]" /> novucore.com
          </div>
          <span className="font-mono-mini text-[#94A0B8] hidden sm:inline">
            site.tsx
          </span>
        </div>

        {/* Code body */}
        <div className="px-5 py-5 font-mono text-[12.5px] leading-[1.85] text-[#2C3A5E] bg-white">
          <CodeLine n={1}>
            <T c="#A8B5CF">{"// "}</T>
            <T c="#94A0B8">NovuCore — site.tsx</T>
          </CodeLine>
          <CodeLine n={2}>
            <T c="#5B6B8C">import</T>{" "}
            <span>{"{ "}</span>
            <T c="#1F2A48" b>build</T>, <T c="#1F2A48" b>evolve</T>,{" "}
            <T c="#1F2A48" b>empower</T>
            <span>{" }"}</span> <T c="#5B6B8C">from</T>{" "}
            <T c="#5B6B8C">&apos;@novucore/core&apos;</T>
          </CodeLine>
          <CodeLine n={3}> </CodeLine>
          <CodeLine n={4}>
            <T c="#5B6B8C">export const</T>{" "}
            <T c="#1F2A48" b>site</T> <T c="#5B6B8C">=</T>{" "}
            <T c="#5B6B8C">await</T> <T c="#1F2A48" b>build</T>
            <span>(</span>
            <span>{"{"}</span>
          </CodeLine>
          <CodeLine n={5} indent={2}>
            <T c="#5B6B8C">name</T>:{" "}
            <T c="#2C3A5E">&apos;Your next website&apos;</T>,
          </CodeLine>
          <CodeLine n={6} indent={2}>
            <T c="#5B6B8C">stack</T>:{" "}
            <span>{"["}</span>
            <T c="#2C3A5E">&apos;React&apos;</T>,{" "}
            <T c="#2C3A5E">&apos;Next.js&apos;</T>,{" "}
            <T c="#2C3A5E">&apos;Tailwind&apos;</T>
            <span>{"]"}</span>,
          </CodeLine>
          <CodeLine n={7} indent={2}>
            <T c="#5B6B8C">a11y</T>: <T c="#1F2A48" b>true</T>,{" "}
            <T c="#5B6B8C">performance</T>: <T c="#2C3A5E">100</T>,
          </CodeLine>
          <CodeLine n={8} indent={2}>
            <T c="#5B6B8C">launch</T>:{" "}
            <T c="#5B6B8C">async</T> <span>()</span>{" "}
            <T c="#5B6B8C">=&gt;</T> <T c="#1F2A48" b>ship</T>
            <span>(</span>
            <T c="#2C3A5E">&apos;on time&apos;</T>
            <span>),</span>
          </CodeLine>
          <CodeLine n={9}>
            <span>{"})"}</span>
          </CodeLine>
          <CodeLine n={10}> </CodeLine>
          <CodeLine n={11}>
            <T c="#94A0B8">{"› "}</T>
            <T c="#1F2A48" b>compiled</T>{" "}
            <T c="#5CC983" b>successfully</T>{" "}
            <T c="#94A0B8">in 412ms</T>
            <span className="ml-1 inline-block w-1.5 h-3 align-middle bg-[#1F2A48] animate-pulse" />
          </CodeLine>
        </div>
      </div>

      {/* Floating Lighthouse card */}
      <div className="absolute -left-4 sm:-left-10 lg:-left-14 top-32 hidden sm:block">
        <div className="rounded-xl bg-white border border-[#E4E8F0] shadow-[0_20px_50px_-20px_rgba(31,42,72,0.25)] p-4 w-[210px]">
          <div className="flex items-center gap-2 font-mono-mini text-[#94A0B8]">
            <Gauge className="w-3.5 h-3.5 text-[#1F2A48]" /> Lighthouse
          </div>
          <div className="mt-2 flex items-end gap-3">
            <div className="font-display text-4xl text-[#1F2A48] tracking-[-0.04em]">
              100
            </div>
            <div className="pb-1.5 text-[12px] text-[#5B6B8C]">
              <div>Performance</div>
              <div className="text-[#5CC983] font-medium">+18 vs. avg</div>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-4 gap-1">
            {["perf", "a11y", "best", "seo"].map((slug, i) => (
              <div
                key={slug}
                className="h-1.5 rounded-full bg-gradient-to-r from-[#A8B5CF] to-[#1F2A48]"
                style={{ opacity: 0.55 + i * 0.12 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating "shipped" badge */}
      <div className="absolute -right-2 sm:-right-6 -bottom-6 hidden sm:block">
        <div className="rounded-full bg-[#1F2A48] text-white px-4 py-2.5 inline-flex items-center gap-2 shadow-[0_20px_50px_-15px_rgba(31,42,72,0.55)]">
          <CheckCircle2 className="w-4 h-4 text-[#A8B5CF]" />
          <span className="text-[13px] font-medium">Deployed · 0 errors</span>
        </div>
      </div>

      {/* Floating spark chip */}
      <div className="absolute right-6 -top-5 hidden sm:block">
        <div className="rounded-full bg-white border border-[#E4E8F0] px-3 py-1.5 inline-flex items-center gap-1.5 shadow-[0_10px_30px_-12px_rgba(31,42,72,0.2)]">
          <Zap className="w-3.5 h-3.5 text-[#1F2A48]" />
          <span className="font-mono-mini text-[#5B6B8C]">412 ms build</span>
        </div>
      </div>
    </div>
  );
};

const CodeLine = ({ n, indent = 0, children }) => (
  <div className="flex items-start gap-3">
    <span className="w-5 shrink-0 text-right text-[#C5CDE0] select-none">
      {n}
    </span>
    <div style={{ paddingLeft: indent * 14 }} className="min-w-0 break-words">
      {children}
    </div>
  </div>
);

const T = ({ c, b, children }) => (
  <span style={{ color: c, fontWeight: b ? 600 : 400 }}>{children}</span>
);

export default HeroVisual;
