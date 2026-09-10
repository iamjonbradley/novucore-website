import React, { useEffect, useState, useCallback, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { navLinks, company } from "../../mock";

const isInternal = (href) => href?.startsWith("/") && !href.startsWith("//");

const NavItem = ({ item, onClick }) => {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);

  if (!item.children) {
    return isInternal(item.href) ? (
      <Link
        to={item.href}
        onClick={onClick}
        className="px-3.5 py-1.5 text-[13px] text-[#5B6B8C] hover:text-[#1F2A48] hover:bg-[#F4F6FA] rounded-full transition-colors"
      >
        {item.label}
      </Link>
    ) : (
      <a
        href={item.href}
        onClick={onClick}
        className="px-3.5 py-1.5 text-[13px] text-[#5B6B8C] hover:text-[#1F2A48] hover:bg-[#F4F6FA] rounded-full transition-colors"
      >
        {item.label}
      </a>
    );
  }

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 140);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        className="inline-flex items-center gap-1 px-3.5 py-1.5 text-[13px] text-[#5B6B8C] hover:text-[#1F2A48] hover:bg-[#F4F6FA] rounded-full transition-colors"
      >
        {item.label}
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="w-[300px] rounded-2xl border border-[#E4E8F0] bg-white shadow-[0_24px_60px_-24px_rgba(31,42,72,0.28)] p-2">
            {item.children.map((c) => (
              <Link
                key={c.href}
                to={c.href}
                onClick={() => {
                  setOpen(false);
                  onClick?.();
                }}
                className="group flex items-start gap-3 rounded-xl px-3 py-2.5 hover:bg-[#F4F6FA] transition-colors"
              >
                <span className="mt-0.5 w-2 h-2 rounded-full bg-[#1F2A48] shrink-0 opacity-70 group-hover:opacity-100" />
                <span className="min-w-0">
                  <span className="block text-[14px] font-medium text-[#1F2A48]">
                    {c.label}
                  </span>
                  <span className="block text-[12px] text-[#5B6B8C] mt-0.5">
                    {c.blurb}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 12);
  }, []);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  // Close the mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const homeHref = "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[backdrop-filter,background-color,border-color] duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-[#E4E8F0]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
        <Link to={homeHref} className="flex items-center group" aria-label={company.name}>
          <img
            src="/logo.png"
            alt={`${company.name} logo`}
            className="h-7 lg:h-8 w-auto select-none"
            draggable="false"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-1 rounded-full border border-[#E4E8F0] bg-white/70 backdrop-blur px-1.5 py-1.5 shadow-[0_1px_0_rgba(31,42,72,0.04)]">
          {navLinks.map((l) => (
            <NavItem key={l.label} item={l} />
          ))}
        </nav>

        <a
          href="/#contact"
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
            {navLinks.map((l) =>
              l.children ? (
                <div key={l.label} className="flex flex-col gap-3">
                  <span className="font-mono-mini text-[#94A0B8]">{l.label}</span>
                  {l.children.map((c) => (
                    <Link
                      key={c.href}
                      to={c.href}
                      onClick={() => setOpen(false)}
                      className="font-display text-2xl text-[#1F2A48]"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              ) : isInternal(l.href) ? (
                <Link
                  key={l.label}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl text-[#1F2A48]"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl text-[#1F2A48]"
                >
                  {l.label}
                </a>
              ),
            )}
            <a
              href="/#contact"
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
