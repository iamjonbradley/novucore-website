import React from "react";
import {
  ArrowUpRight,
  Play,
  BarChart3,
  GraduationCap,
  FileText,
  ImagePlus,
  Share2,
  Mail,
  ShieldCheck,
  Youtube,
  Instagram,
  Music2,
} from "lucide-react";
import { athletes } from "../../mock";

const iconFor = {
  reel: Play,
  stats: BarChart3,
  academics: GraduationCap,
  pdf: FileText,
  media: ImagePlus,
  social: Share2,
  contact: Mail,
  privacy: ShieldCheck,
};

const socialIconFor = {
  YouTube: Youtube,
  Instagram: Instagram,
  TikTok: Music2,
};

const AthleteCard = ({ sample }) => (
  <div className="relative w-full max-w-[440px] mx-auto lg:mx-0">
    {/* Soft glow */}
    <div
      aria-hidden
      className="absolute -inset-8 -z-10 blur-3xl opacity-70"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, rgba(168,181,207,0.55) 0%, rgba(168,181,207,0) 70%)",
      }}
    />

    <div className="rounded-2xl border border-[#E4E8F0] bg-white shadow-[0_30px_80px_-30px_rgba(31,42,72,0.30),0_8px_20px_-12px_rgba(31,42,72,0.10)] overflow-hidden">
      {/* Header strip */}
      <div className="flex items-center justify-between px-5 py-3 bg-[#1F2A48] text-white">
        <div className="font-mono-mini tracking-[0.2em] text-[#A8B5CF]">
          Recruit · Profile
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-2.5 py-1 text-[11px]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8FE0A0]" />
          {sample.status}
        </span>
      </div>

      {/* Player row */}
      <div className="p-6 flex items-center gap-4 border-b border-[#E4E8F0]">
        <div className="w-14 h-14 rounded-full bg-[#1F2A48] text-white grid place-items-center font-display text-xl tracking-tight">
          {sample.initials}
        </div>
        <div className="min-w-0">
          <div className="font-display text-[22px] text-[#1F2A48] leading-tight">
            {sample.name}
          </div>
          <div className="text-[13px] text-[#5B6B8C] mt-0.5">
            {sample.grad} · {sample.position} · {sample.heightWeight}
          </div>
        </div>
      </div>

      {/* Stat grid */}
      <div className="grid grid-cols-4">
        {sample.stats.map((s, i) => (
          <div
            key={s.label}
            className={`px-4 py-4 text-center ${
              i !== 0 ? "border-l border-[#E4E8F0]" : ""
            }`}
          >
            <div className="font-display text-[22px] text-[#1F2A48] tracking-[-0.02em]">
              {s.value}
            </div>
            <div className="mt-1 font-mono-mini text-[#94A0B8]">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Highlight reel bar */}
      <div className="p-5 border-t border-[#E4E8F0] bg-[#F4F6FA]">
        <div className="rounded-xl border border-[#E4E8F0] bg-white overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-[#1F2A48] text-white grid place-items-center">
                <Play className="w-4 h-4 ml-0.5" />
              </span>
              <div>
                <div className="text-[14px] font-medium text-[#1F2A48]">
                  Summer showcase — 2026
                </div>
                <div className="text-[12px] text-[#94A0B8]">
                  4:12 · 1080p · updated last week
                </div>
              </div>
            </div>
            <span className="font-mono-mini text-[#1F2A48]">Watch</span>
          </div>
        </div>

        {/* Socials */}
        <div className="mt-4 flex flex-wrap gap-2">
          {sample.socials.map((s) => {
            const Icon = socialIconFor[s.label] || Share2;
            return (
              <span
                key={s.label}
                className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#E4E8F0] px-3 py-1.5 text-[12px] text-[#1F2A48]"
              >
                <Icon className="w-3.5 h-3.5" />
                {s.label}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  </div>
);

const Athletes = () => {
  const { eyebrow, title, lead, features, outcomes, sample, promise } = athletes;

  return (
    <section id="athletes" className="relative py-24 lg:py-36 bg-white overflow-hidden">
      {/* Very soft warm accent behind the card */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(45% 45% at 88% 20%, rgba(247,228,206,0.45) 0%, transparent 60%), radial-gradient(35% 40% at 10% 90%, rgba(168,181,207,0.35) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — copy */}
          <div className="lg:col-span-6">
            <span className="font-mono-mini text-[#94A0B8]">
              <span className="inline-block w-6 h-px bg-[#94A0B8] mr-3 align-middle" />
              {eyebrow}
            </span>
            <h2 className="mt-4 font-display text-[40px] lg:text-[64px] leading-[1.02] tracking-[-0.03em] text-[#1F2A48]">
              {title.split("get you seen.")[0]}
              <span className="text-[#5B6B8C]">get you seen.</span>
            </h2>
            <p className="mt-6 text-[17px] lg:text-[18px] leading-relaxed text-[#5B6B8C] max-w-xl">
              {lead}
            </p>

            {/* Outcomes strip */}
            <div className="mt-10 grid grid-cols-3 border-t border-b border-[#E4E8F0]">
              {outcomes.map((o, i) => (
                <div
                  key={o.label}
                  className={`py-5 px-1 ${
                    i !== 0 ? "border-l border-[#E4E8F0]" : ""
                  }`}
                >
                  <div className="font-display text-2xl lg:text-3xl text-[#1F2A48] tracking-[-0.03em]">
                    {o.value}
                  </div>
                  <div className="mt-1.5 font-mono-mini text-[#94A0B8]">
                    {o.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 btn-navy rounded-full pl-6 pr-2 py-2"
              >
                <span className="text-[15px] font-medium">
                  Get your recruiting site
                </span>
                <span className="w-9 h-9 rounded-full bg-white text-[#1F2A48] grid place-items-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>
              <a
                href="#athletes-features"
                className="inline-flex items-center gap-2 text-[#1F2A48] text-[15px] link-underline"
              >
                What&apos;s inside
              </a>
            </div>
          </div>

          {/* Right — mockup card */}
          <div className="lg:col-span-6">
            <AthleteCard sample={sample} />
          </div>
        </div>

        {/* Features grid */}
        <div id="athletes-features" className="mt-20 lg:mt-28">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E4E8F0] border border-[#E4E8F0] rounded-2xl overflow-hidden">
            {features.map((f) => {
              const Icon = iconFor[f.key] || Play;
              const isPrivacy = f.key === "privacy";
              return (
                <div
                  key={f.key}
                  className={`p-7 hover:bg-[#F4F6FA] transition-colors ${
                    isPrivacy ? "bg-[#1F2A48] text-white hover:bg-[#16213A]" : "bg-white"
                  }`}
                >
                  <span
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-full border ${
                      isPrivacy
                        ? "bg-white/10 border-white/20 text-white"
                        : "bg-[#F4F6FA] border-[#E4E8F0] text-[#1F2A48]"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </span>
                  <h3
                    className={`mt-5 font-display text-2xl ${
                      isPrivacy ? "text-white" : "text-[#1F2A48]"
                    }`}
                  >
                    {f.title}
                  </h3>
                  <p
                    className={`mt-2 text-[14px] leading-relaxed ${
                      isPrivacy ? "text-[#C5CDE0]" : "text-[#5B6B8C]"
                    }`}
                  >
                    {f.body}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Privacy pledge banner */}
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl border border-[#E4E8F0] bg-[#F4F6FA] px-6 py-5">
            <span className="inline-flex w-10 h-10 rounded-full bg-white border border-[#E4E8F0] items-center justify-center text-[#1F2A48] shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </span>
            <p className="text-[14px] lg:text-[15px] leading-relaxed text-[#2C3A5E]">
              <span className="font-medium text-[#1F2A48]">Our privacy promise: </span>
              {promise}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Athletes;
