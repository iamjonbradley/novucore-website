import React, { useEffect, useState, useCallback } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks, company } from "../../mock";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 12);
  }, []);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[backdrop-filter,background-color,border-color] duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-[#E4E8F0]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
        <a href="#top" className="flex items-center group" aria-label={company.name}>
          <img
            src="/logo.png"
            alt={`${company.name} logo`}
            className="h-7 lg:h-8 w-auto select-none"
            draggable="false"
          />
        </a>

        <nav className="hidden md:flex items-center gap-1 rounded-full border border-[#E4E8F0] bg-white/70 backdrop-blur px-1.5 py-1.5 shadow-[0_1px_0_rgba(31,42,72,0.04)]">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3.5 py-1.5 text-[13px] text-[#5B6B8C] hover:text-[#1F2A48] hover:bg-[#F4F6FA] rounded-full transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 btn-navy rounded-full px-4 py-2 text-[13px] font-medium"
        >
          Start a project <ArrowUpRight className="w-4 h-4" />
        </a>

        <button
          aria-label="Toggle menu"
          className="md:hidden w-10 h-10 grid place-items-center rounded-full border border-[#E4E8F0] text-[#1F2A48] bg-white"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-[#E4E8F0]">
          <div className="px-6 py-6 flex flex-col gap-5">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-[#1F2A48]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 btn-navy rounded-full px-5 py-3 text-sm font-medium"
            >
              Start a project <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
