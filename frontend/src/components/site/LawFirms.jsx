import React from "react";
import {
  ArrowUpRight,
  Scale,
  Users,
  Trophy,
  Calendar,
  Lock,
  BadgeCheck,
  BookOpen,
  ShieldCheck,
  Play,
  ChevronRight,
} from "lucide-react";
import { lawFirms } from "../../mock";

const iconFor = {
  practice: Scale,
  attorneys: Users,
  results: Trophy,
  consult: Calendar,
  intake: Lock,
  trust: BadgeCheck,
  content: BookOpen,
  privacy: ShieldCheck,
};

const ConsultCard = ({ sample }) => (
  <div className="relative w-full max-w-[440px] mx-auto lg:mx-0">
    <div
      aria-hidden
      className="absolute -inset-8 -z-10 blur-3xl opacity-70"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, rgba(168,181,207,0.55) 0%, rgba(168,181,207,0) 70%)",
      }}
    />

    <div className="rounded-2xl border border-[#E4E8F0] bg-white shadow-[0_30px_80px_-30px_rgba(31,42,72,0.30),0_8px_20px_-12px_rgba(31,42,72,0.10)] overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 bg-[#1F2A48] text-white">
        <div className="font-mono-mini tracking-[0.2em] text-[#A8B5CF]">
          Consultation · Encrypted
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-2.5 py-1 text-[11px]">
          <Lock className="w-3 h-3" /> TLS 1.3
        </span>
      </div>

      {/* Firm block */}
      <div className="px-6 py-5 border-b border-[#E4E8F0]">
        <div className="font-display text-[22px] text-[#1F2A48] leading-tight tracking-[-0.01em]">
          {sample.firm}
        </div>
        <div className="text-[12px] font-mono-mini text-[#94A0B8] mt-1.5">
          {sample.tag}
        </div>
      </div>

      {/* Attorney */}
      <div className="px-6 py-4 flex items-center gap-4 border-b border-[#E4E8F0]">
        <div className="w-12 h-12 rounded-full bg-[#1F2A48] text-white grid place-items-center font-display text-lg">
          {sample.attorney.initials}
        </div>
        <div className="min-w-0">
          <div className="text-[15px] font-medium text-[#1F2A48] leading-tight">
            {sample.attorney.name}
          </div>
          <div className="text-[12px] text-[#5B6B8C] mt-0.5">
            {sample.attorney.role}
          </div>
          <div className="text-[11px] text-[#94A0B8] mt-0.5">
            {sample.attorney.bar}
          </div>
        </div>
      </div>

      {/* Intake preview */}
      <div className="px-6 py-5 space-y-3">
        <IntakeRow label="Matter" value={sample.intake.matter} />
        <IntakeRow label="Timing" value={sample.intake.timing} />
        <IntakeRow label="Preferred time" value={sample.intake.when} highlight />
      </div>

      {/* Trust badges */}
      <div className="px-6 pb-5 flex flex-wrap gap-2">
        {sample.trust.map((t) => (
          <span
            key={t}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#F4F6FA] border border-[#E4E8F0] px-3 py-1.5 text-[11px] text-[#1F2A48]"
          >
            <BadgeCheck className="w-3 h-3" />
            {t}
          </span>
        ))}
      </div>

      <div className="px-6 pb-6 flex items-center justify-between">
        <button
          type="button"
          className="group inline-flex items-center gap-3 btn-navy rounded-full pl-5 pr-2 py-2"
        >
          <span className="text-[14px] font-medium">Book consultation</span>
          <span className="w-8 h-8 rounded-full bg-white text-[#1F2A48] grid place-items-center group-hover:rotate-45 transition-transform">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </button>
      </div>

      <div className="px-6 py-3 bg-[#F4F6FA] text-[11px] text-[#94A0B8] flex items-center gap-2 border-t border-[#E4E8F0]">
        <Lock className="w-3 h-3" /> {sample.footer}
      </div>
    </div>
  </div>
);

const IntakeRow = ({ label, value, highlight }) => (
  <div className="flex items-center justify-between text-[13px]">
    <span className="font-mono-mini text-[#94A0B8]">{label}</span>
    <span
      className={`inline-flex items-center gap-1.5 ${
        highlight
          ? "px-3 py-1 rounded-full bg-[#F4F6FA] border border-[#E4E8F0] text-[#1F2A48] font-medium"
          : "text-[#1F2A48]"
      }`}
    >
      {value}
      {highlight && <ChevronRight className="w-3.5 h-3.5 text-[#94A0B8]" />}
    </span>
  </div>
);

const LawFirms = () => {
  const { eyebrow, title, lead, features, outcomes, sample, promise } = lawFirms;

  return (
    <section id="law-firms" className="relative py-24 lg:py-36 bg-white overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(40% 40% at 85% 15%, rgba(168,181,207,0.45) 0%, transparent 60%), radial-gradient(35% 40% at 10% 90%, rgba(220,227,240,0.55) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <span className="font-mono-mini text-[#94A0B8]">
              <span className="inline-block w-6 h-px bg-[#94A0B8] mr-3 align-middle" />
              {eyebrow}
            </span>
            <h2 className="mt-4 font-display text-[40px] lg:text-[60px] leading-[1.02] tracking-[-0.03em] text-[#1F2A48]">
              {title.split("consultations.")[0]}
              <span className="text-[#0F6E4A]">consultations.</span>
            </h2>
            <p className="mt-6 text-[17px] lg:text-[18px] leading-relaxed text-[#5B6B8C] max-w-xl">
              {lead}
            </p>

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
                  <div className="mt-1.5 font-mono-mini text-[#94A0B8]">{o.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 btn-navy rounded-full pl-6 pr-2 py-2"
              >
                <span className="text-[15px] font-medium">Get your firm site</span>
                <span className="w-9 h-9 rounded-full bg-white text-[#1F2A48] grid place-items-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>
              <a
                href="#law-firms-features"
                className="inline-flex items-center gap-2 text-[#1F2A48] text-[15px] link-underline"
              >
                What&apos;s inside
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <ConsultCard sample={sample} />
          </div>
        </div>

        <div id="law-firms-features" className="mt-20 lg:mt-28">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E4E8F0] border border-[#E4E8F0] rounded-2xl overflow-hidden">
            {features.map((f) => {
              const Icon = iconFor[f.key] || Play;
              const isPrivacy = f.key === "privacy";
              return (
                <div
                  key={f.key}
                  className={`p-7 transition-colors ${
                    isPrivacy
                      ? "bg-[#1F2A48] text-white hover:bg-[#16213A]"
                      : "bg-white hover:bg-[#F4F6FA]"
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
                  <h3 className={`mt-5 font-display text-2xl ${isPrivacy ? "text-white" : "text-[#1F2A48]"}`}>
                    {f.title}
                  </h3>
                  <p className={`mt-2 text-[14px] leading-relaxed ${isPrivacy ? "text-[#C5CDE0]" : "text-[#5B6B8C]"}`}>
                    {f.body}
                  </p>
                </div>
              );
            })}
          </div>

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

export default LawFirms;
