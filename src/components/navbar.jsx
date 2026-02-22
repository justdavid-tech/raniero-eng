import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const services = [
  { label: "Project Management", href: "/services/project-management" },
  { label: "Engineering Design & Execution", href: "/services/design-execution" },
  { label: "Facility & Logistics Management", href: "/services/facility-logistics" },
  { label: "Training & Process Consulting", href: "/services/project-managementg" },
  { label: "Engineering Project Audit", href: "/services/audit" },
  { label: "Cost Engineering & Asset Valuation", href: "/services/cost-engineering" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=Barlow+Condensed:wght@600;700&display=swap');

        .nav-root {
          font-family: 'Barlow', sans-serif;
        }
        .logo-font {
          font-family: 'Barlow Condensed', sans-serif;
        }

        /* Animated underline for nav links */
        .nav-link-underline {
          position: relative;
        }
        .nav-link-underline::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #F59E0B;
          transition: width 0.25s ease;
        }
        .nav-link-underline:hover::after {
          width: 100%;
        }

        /* Dropdown fade-in */
        .dropdown-enter {
          animation: dropFade 0.18s ease forwards;
        }
        @keyframes dropFade {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Mobile slide */
        .mobile-panel {
          transition: max-height 0.35s ease, opacity 0.3s ease;
        }

        /* Accent stripe on logo */
        .logo-stripe {
          display: inline-block;
          width: 4px;
          height: 32px;
          background: linear-gradient(180deg, #F59E0B, #D97706);
          border-radius: 2px;
          margin-right: 10px;
          flex-shrink: 0;
        }

        /* CTA button shimmer */
        .cta-btn {
          position: relative;
          overflow: hidden;
        }
        .cta-btn::before {
          content: '';
          position: absolute;
          top: 0; left: -75%;
          width: 50%;
          height: 100%;
          background: rgba(255,255,255,0.18);
          transform: skewX(-20deg);
          transition: left 0.45s ease;
        }
        .cta-btn:hover::before {
          left: 130%;
        }

        /* Hamburger bars */
        .bar {
          display: block;
          width: 22px;
          height: 2px;
          background: white;
          transition: transform 0.3s, opacity 0.3s;
          transform-origin: center;
        }
        .bar-open-1 { transform: rotate(45deg) translate(3px, 3px); }
        .bar-open-2 { opacity: 0; }
        .bar-open-3 { transform: rotate(-45deg) translate(3px, -3px); }
      `}</style>

      <nav
        className={`nav-root fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0A1F44] shadow-2xl shadow-black/30 py-0"
            : "bg-[#0A1F44]/95 backdrop-blur-sm py-0"
        }`}
      >
        {/* Top accent line */}
        <div className="h-[3px] bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-[70px]">

            {/* ── LOGO ── */}
            <Link to="/" className="flex items-center group flex-shrink-0">
              <span className="logo-stripe group-hover:scale-y-110 transition-transform duration-200" />
              <div className="logo-font flex flex-col leading-tight">
                <span className="text-white text-[18px] font-700 tracking-wider uppercase">
                  Raniero
                </span>
                <span className="text-amber-400 text-[10px] font-600 tracking-[0.2em] uppercase">
                  Engineering Nig. Ltd
                </span>
              </div>
            </Link>

            {/* ── DESKTOP NAV ── */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.label} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setDropdownOpen((p) => !p)}
                      className="nav-link-underline flex items-center gap-1 text-gray-200 hover:text-white text-[13.5px] font-500 tracking-wide px-3 py-2 transition-colors duration-150"
                    >
                      {link.label}
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {dropdownOpen && (
                      <div className="dropdown-enter absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-72 bg-[#07152E] border border-white/10 rounded-lg shadow-2xl shadow-black/50 overflow-hidden">
                        {/* dropdown header */}
                        <div className="px-4 py-2.5 border-b border-white/10 bg-[#0A1F44]">
                          <p className="text-amber-400 text-[10px] font-600 tracking-[0.2em] uppercase">
                            What We Offer
                          </p>
                        </div>
                        {services.map((s, i) => (
                          <a
                            key={i}
                            href={s.href}
                            onClick={() => setDropdownOpen(false)}
                            className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 text-[13px] font-400 tracking-wide transition-colors duration-100 border-b border-white/5 last:border-0 group"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 opacity-60 group-hover:opacity-100 flex-shrink-0 transition-opacity" />
                            {s.label}
                          </a>
                        ))}
                        <a
                          href="#services"
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center justify-center gap-2 px-4 py-3 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 hover:text-amber-300 text-[12px] font-600 tracking-[0.1em] uppercase transition-colors duration-150"
                        >
                          View All Services
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="nav-link-underline text-gray-200 hover:text-white text-[13.5px] font-500 tracking-wide px-3 py-2 transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                )
              )}

              {/* CTA */}
              <a
                href="/contact"
                className="cta-btn ml-4 bg-amber-500 hover:bg-amber-400 text-[#07152E] text-[13px] font-700 tracking-wider uppercase px-5 py-2.5 rounded-sm transition-colors duration-200"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.08em' }}
              >
                Request Consultation
              </a>
            </div>

            {/* ── HAMBURGER ── */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
              onClick={() => setMobileOpen((p) => !p)}
              aria-label="Toggle menu"
            >
              <span className={`bar ${mobileOpen ? "bar-open-1" : ""}`} />
              <span className={`bar ${mobileOpen ? "bar-open-2" : ""}`} />
              <span className={`bar ${mobileOpen ? "bar-open-3" : ""}`} />
            </button>
          </div>
        </div>

        {/* ── MOBILE PANEL ── */}
        <div
          className={`lg:hidden bg-[#07152E] border-t border-white/10 overflow-hidden transition-all duration-300 ${
            mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.label}>
                  <button
                    onClick={() => setMobileServicesOpen((p) => !p)}
                    className="w-full flex items-center justify-between text-gray-200 hover:text-white text-[15px] font-500 tracking-wide py-3 border-b border-white/5 transition-colors"
                  >
                    {link.label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-4 py-1 flex flex-col gap-0">
                      {services.map((s, i) => (
                        <a
                          key={i}
                          href={s.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-2 text-gray-400 hover:text-amber-400 text-[13.5px] py-2.5 border-b border-white/5 last:border-0 transition-colors"
                        >
                          <span className="w-1 h-1 rounded-full bg-amber-500 flex-shrink-0" />
                          {s.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-200 hover:text-white text-[15px] font-500 tracking-wide py-3 border-b border-white/5 transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}

            {/* Mobile CTA */}
            <a
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-3 bg-amber-500 hover:bg-amber-400 text-[#07152E] text-[14px] font-700 tracking-wider uppercase text-center py-3.5 rounded-sm transition-colors"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Request Consultation
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}