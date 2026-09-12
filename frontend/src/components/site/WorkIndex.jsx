import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { workProjects } from "../../mock";

const Eyebrow = ({ children }) => (
  <div className="font-mono-mini text-[#94A0B8]">
    <span className="inline-block w-6 h-px bg-[#94A0B8] mr-3 align-middle" />
    {children}
  </div>
);

const WorkIndex = () => {
  useEffect(() => {
    const prevTitle = document.title;
    const desc = document.querySelector('meta[name="description"]');
    const prevDesc = desc?.getAttribute("content");
    document.title = "Our Work — Case Studies | NovuCore";
    if (desc) {
      desc.setAttribute(
        "content",
        "Selected NovuCore case studies — custom websites for premium professional-services businesses.",
      );
    }
    return () => {
      document.title = prevTitle;
      if (desc && prevDesc != null) desc.setAttribute("content", prevDesc);
    };
  }, []);

  return (
    <section className="relative pt-[120px] pb-24 lg:pb-36 overflow-hidden bg-white">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(45% 55% at 92% -8%, rgba(168,181,207,0.55) 0%, transparent 55%), radial-gradient(35% 40% at -5% 100%, rgba(247,228,206,0.55) 0%, transparent 60%), linear-gradient(180deg, #EEF2FA 0%, #FFFFFF 60%)",
        }}
      />

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-14 lg:mb-20">
          <div className="lg:col-span-8">
            <Eyebrow>Our work</Eyebrow>
            <h1 className="mt-4 font-display text-[44px] sm:text-[68px] lg:text-[96px] leading-[0.96] tracking-[-0.04em] text-[#1F2A48]">
              Selected
              <span className="text-[#A56A0F]"> case studies.</span>
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="text-[16px] lg:text-[17px] leading-relaxed text-[#5B6B8C]">
              A small studio, a short list of clients. Each project is a study
              in matching a digital experience to the value of the business
              behind it.
            </p>
          </div>
        </div>

        <div className="space-y-10 lg:space-y-14">
          {workProjects.map((p, i) => (
            <ProjectRow key={p.slug} project={p} align={i % 2 === 0 ? "left" : "right"} />
          ))}
        </div>

        <div className="mt-24 lg:mt-32 rounded-3xl bg-[#1F2A48] text-white p-10 lg:p-16 relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(60% 50% at 90% 0%, rgba(168,181,207,0.20) 0%, transparent 60%), radial-gradient(45% 40% at 0% 100%, rgba(220,227,240,0.12) 0%, transparent 60%)",
            }}
          />
          <div className="relative grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-display text-[36px] lg:text-[60px] leading-[1.02] tracking-[-0.04em]">
                Have a project of your own?
              </h2>
              <p className="mt-4 text-[#C5CDE0] max-w-2xl">
                Every engagement is scoped, priced and delivered as a fixed
                project — no hourly surprises.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <a
                href="/#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-white text-[#1F2A48] pl-6 pr-2 py-2"
              >
                <span className="text-[15px] font-medium">Start a project</span>
                <span className="w-9 h-9 rounded-full bg-[#1F2A48] text-white grid place-items-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectRow = ({ project, align = "left" }) => (
  <Link
    to={project.href}
    className="group block rounded-3xl border border-[#E4E8F0] bg-white overflow-hidden hover:border-[#A8B5CF] hover:shadow-[0_30px_80px_-30px_rgba(31,42,72,0.30)] transition-all duration-500"
  >
    <div className={`grid lg:grid-cols-12 items-stretch ${align === "right" ? "lg:[direction:rtl]" : ""}`}>
      <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto lg:min-h-[440px] overflow-hidden [direction:ltr]">
        <img
          src={project.image}
          alt={`${project.client} — project preview`}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
          loading="lazy"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(11,18,32,0) 40%, rgba(11,18,32,0.55) 100%)" }}
        />
        <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1.5 font-mono-mini text-[#1F2A48]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1F2A48]" />
          Case study · {project.year}
        </div>
      </div>
      <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between gap-8 [direction:ltr]">
        <div>
          <div className="font-mono-mini text-[#94A0B8]">{project.industry}</div>
          <h3 className="mt-3 font-display text-[28px] lg:text-[40px] leading-[1.05] tracking-[-0.03em] text-[#1F2A48]">
            {project.client}
          </h3>
          <p className="mt-4 text-[#5B6B8C] leading-relaxed">{project.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.services.map((s) => (
              <span
                key={s}
                className="inline-block rounded-full border border-[#E4E8F0] bg-[#F4F6FA] px-2.5 py-1 text-[11px] font-mono-mini text-[#5B6B8C]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between text-[#1F2A48]">
          <span className="font-mono-mini text-[#94A0B8]">{project.location}</span>
          <span className="inline-flex items-center gap-2 text-[15px] font-medium">
            Read case study
            <span className="w-9 h-9 rounded-full border border-[#E4E8F0] grid place-items-center group-hover:bg-[#1F2A48] group-hover:text-white group-hover:border-[#1F2A48] transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </span>
        </div>
      </div>
    </div>
  </Link>
);

export default WorkIndex;
