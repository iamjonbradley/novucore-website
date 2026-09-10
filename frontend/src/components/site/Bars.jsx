import React from "react";
import {
  ArrowUpRight,
  Calendar,
  Ticket,
  ListMusic,
  Image as ImageIcon,
  Music2,
  Mail,
  Send,
  ShieldCheck,
  Instagram,
  Music,
  Play,
} from "lucide-react";
import { bars } from "../../mock";

const iconFor = {
  calendar: Calendar,
  tickets: Ticket,
  menu: ListMusic,
  gallery: ImageIcon,
  socials: Music2,
  mailer: Mail,
  booking: Send,
  privacy: ShieldCheck,
};

const socialIconFor = {
  Instagram: Instagram,
  Spotify: Music,
  TikTok: Music2,
};

const ShowCard = ({ sample }) => (
  <div className="relative w-full max-w-[440px] mx-auto lg:mx-0">
    <div
      aria-hidden
      className="absolute -inset-8 -z-10 blur-3xl opacity-70"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, rgba(247,228,206,0.55) 0%, rgba(247,228,206,0) 70%)",
      }}
    />

    <div className="rounded-2xl border border-[#E4E8F0] bg-white shadow-[0_30px_80px_-30px_rgba(31,42,72,0.30),0_8px_20px_-12px_rgba(31,42,72,0.10)] overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 bg-[#1F2A48] text-white">
        <div className="font-mono-mini tracking-[0.2em] text-[#A8B5CF]">
          {sample.kind} · Upcoming
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-2.5 py-1 text-[11px]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFCB47]" />
          {sample.status}
        </span>
      </div>

      {/* Poster block */}
      <div className="relative px-6 pt-6 pb-4">
        <div
          aria-hidden
          className="absolute inset-x-6 top-6 h-32 rounded-xl -z-10"
          style={{
            background:
              "linear-gradient(135deg, #1F2A48 0%, #3B4D7A 60%, #C7A96A 100%)",
            opacity: 0.9,
          }}
        />
        <div className="relative h-32 rounded-xl overflow-hidden flex items-end p-4">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "14px 14px",
            }}
          />
          <div className="relative text-white">
            <div className="font-display text-[26px] leading-[1] tracking-[-0.02em]">
              {sample.band}
            </div>
            <div className="mt-1 text-[13px] text-[#E7DDC4]">{sample.support}</div>
          </div>
        </div>
      </div>

      {/* Event details */}
      <div className="px-6 pb-5 space-y-1.5">
        <div className="flex items-center gap-2 text-[13px] text-[#1F2A48]">
          <Calendar className="w-3.5 h-3.5 text-[#5B6B8C]" />
          <span className="font-medium">{sample.date}</span>
          <span className="text-[#94A0B8]">· {sample.doors}</span>
        </div>
        <div className="text-[13px] text-[#5B6B8C]">{sample.venue}</div>
        <div className="text-[13px] text-[#5B6B8C]">{sample.price}</div>
      </div>

      <div className="px-6 pb-6">
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            className="group inline-flex items-center gap-3 btn-navy rounded-full pl-5 pr-2 py-2"
          >
            <span className="text-[14px] font-medium">Get tickets</span>
            <span className="w-8 h-8 rounded-full bg-white text-[#1F2A48] grid place-items-center group-hover:rotate-45 transition-transform">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#F4F6FA] border border-[#E4E8F0] px-3 py-2 text-[13px] text-[#1F2A48]"
          >
            <Play className="w-3.5 h-3.5" /> Preview
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {sample.socials.map((s) => {
            const Icon = socialIconFor[s.label] || Music2;
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

const Bars = () => {
  const { eyebrow, title, lead, features, outcomes, sample, promise } = bars;

  return (
    <section id="bars" className="relative py-24 lg:py-36 bg-[#F4F6FA] overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(45% 45% at 12% 20%, rgba(247,228,206,0.55) 0%, transparent 60%), radial-gradient(35% 40% at 90% 90%, rgba(214,200,231,0.35) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6 lg:order-2">
            <ShowCard sample={sample} />
          </div>

          <div className="lg:col-span-6 lg:order-1">
            <span className="font-mono-mini text-[#94A0B8]">
              <span className="inline-block w-6 h-px bg-[#94A0B8] mr-3 align-middle" />
              {eyebrow}
            </span>
            <h2 className="mt-4 font-display text-[40px] lg:text-[64px] leading-[1.02] tracking-[-0.03em] text-[#1F2A48]">
              {title.split("pack the room.")[0]}
              <span className="text-[#5B6B8C]">pack the room.</span>
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
                <span className="text-[15px] font-medium">Build your venue site</span>
                <span className="w-9 h-9 rounded-full bg-white text-[#1F2A48] grid place-items-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>
              <a
                href="#bars-features"
                className="inline-flex items-center gap-2 text-[#1F2A48] text-[15px] link-underline"
              >
                What&apos;s inside
              </a>
            </div>
          </div>
        </div>

        <div id="bars-features" className="mt-20 lg:mt-28">
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

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl border border-[#E4E8F0] bg-white px-6 py-5">
            <span className="inline-flex w-10 h-10 rounded-full bg-[#F4F6FA] border border-[#E4E8F0] items-center justify-center text-[#1F2A48] shrink-0">
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

export default Bars;
