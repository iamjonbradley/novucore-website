import React from "react";
import { company, navLinks } from "../../mock";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white border-t border-[#E4E8F0]">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <a
              href="#top"
              className="inline-flex items-center"
              aria-label={company.name}
            >
              <img
                src="/logo.png"
                alt={`${company.name} logo`}
                className="h-8 lg:h-9 w-auto select-none"
                draggable="false"
              />
            </a>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[#5B6B8C]">
              {company.pitch} A small studio shipping considered, hand-coded
              websites and web&nbsp;apps for ambitious teams worldwide.
            </p>
            <div className="mt-6 font-mono-mini text-[#94A0B8]">
              {company.tagline}
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="font-mono-mini text-[#94A0B8] mb-4">Site</div>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[#1F2A48] link-underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-[#E4E8F0] flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-[12px] text-[#94A0B8]">
          <span>
            © {year} {company.name}. All rights reserved.
          </span>
          <span className="font-mono-mini">Hand-coded with care.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
