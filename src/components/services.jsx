const services = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <path d="M14 17.5h7M17.5 14v7" />
      </svg>
    ),
    title: "Project Management",
    short: "End-to-end project oversight — scope, schedule, budget, and stakeholder coordination — ensuring seamless delivery from initiation to closeout.",
    href: "/project-management",
    accent: "#F59E0B",
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Corporate Engineering Training",
    short: "Structured, industry-aligned training programs that sharpen your engineering team's capabilities and accelerate organisational performance.",
    href: "/corporate-training",
    accent: "#F59E0B",
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Facility   Management",
    short: "Comprehensive facility operations, maintenance, and home movement services — keeping your assets performing at peak efficiency.",
    href: "/facility-management",
    accent: "#F59E0B",
  },
  {
    id: 4,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" />
        <path d="M15.54 8.46a5 5 0 010 7.07M8.46 8.46a5 5 0 000 7.07" />
      </svg>
    ),
    title: "Design & Execution",
    short: "Rigorous engineering design paired with disciplined on-site execution — translating blueprints into world-class infrastructure.",
    href: "/design-execution",
    accent: "#F59E0B",
  },
  {
    id: 5,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 5v3h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: "Logistics Services",
    short: "Strategic operation and logistics planning that optimises resource flow, reduces cost, and keeps complex engineering projects on schedule.",
    href: "/logistics-services",
    accent: "#F59E0B",
  },
  {
    id: 6,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Process Establishment",
    short: "Designing and implementing robust operational processes and procedures tailored to your industry's regulatory and performance requirements.",
    href: "/process-establishment",
    accent: "#F59E0B",
  },
  {
    id: 7,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    title: "Engineering Project Audit",
    short: "Independent technical audits that verify compliance, identify risk, and validate that your engineering projects meet quality and safety benchmarks.",
    href: "/engineering-audit",
    accent: "#F59E0B",
  },
  {
    id: 8,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: "Cost Engineering & Asset Valuation",
    short: "Accurate cost estimation, budget control, and engineering asset valuation to protect your investment and maximise long-term project value.",
    href: "/cost-engineering",
    accent: "#F59E0B",
  },
];

export default function Services() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=Barlow+Condensed:wght@600;700;800&display=swap');

        .svc-root { font-family: 'Barlow', sans-serif; }
        .svc-display { font-family: 'Barlow Condensed', sans-serif; }

        /* Card */
        .svc-card {
          position: relative;
          background: #ffffff;
          border: 1px solid #E5E7EB;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          cursor: pointer;
        }
        .svc-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px rgba(10,31,68,0.12);
        }

        /* Accent top bar */
        .svc-card-bar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .svc-card:hover .svc-card-bar {
          transform: scaleX(1);
        }

        /* Icon wrapper */
        .svc-icon-wrap {
          width: 54px; height: 54px;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.3s ease;
        }
        .svc-icon-wrap svg {
          width: 26px; height: 26px;
          transition: stroke 0.3s ease, transform 0.3s ease;
        }
        .svc-card:hover .svc-icon-wrap svg {
          transform: scale(1.12);
        }

        /* Read more link */
        .svc-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #6B7280;
          transition: color 0.2s ease, gap 0.2s ease;
        }
        .svc-link:hover {
          gap: 9px;
        }

        /* Arrow svg in link */
        .svc-link-arrow {
          width: 14px; height: 14px;
          transition: transform 0.2s ease;
        }
        .svc-link:hover .svc-link-arrow {
          transform: translateX(3px);
        }

        /* Section heading underline accent */
        .section-accent-line {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .section-accent-line::before {
          content: '';
          display: inline-block;
          width: 36px; height: 3px;
          background: #F59E0B;
          border-radius: 2px;
        }

        /* Background grid pattern */
        .svc-section-bg {
          background-color: #F3F4F6;
          background-image:
            linear-gradient(rgba(10,31,68,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10,31,68,0.035) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        /* Number label on card */
        .svc-num {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 72px;
          font-weight: 800;
          line-height: 1;
          position: absolute;
          bottom: -12px; right: -6px;
          color: rgba(10,31,68,0.04);
          pointer-events: none;
          user-select: none;
          letter-spacing: -0.04em;
        }

        /* CTA banner */
        .svc-cta-banner {
          background: linear-gradient(105deg, #0A1F44 0%, #123A73 100%);
          position: relative;
          overflow: hidden;
        }
        .svc-cta-banner::after {
          content: '';
          position: absolute;
          top: -60px; right: -60px;
          width: 280px; height: 280px;
          border: 1px solid rgba(245,158,11,0.12);
          border-radius: 50%;
          pointer-events: none;
        }
        .svc-cta-banner::before {
          content: '';
          position: absolute;
          bottom: -40px; right: 60px;
          width: 180px; height: 180px;
          border: 1px solid rgba(245,158,11,0.08);
          border-radius: 50%;
          pointer-events: none;
        }

        .cta-pulse-btn {
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .cta-pulse-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.15);
          transform: translateX(-100%) skewX(-15deg);
          transition: transform 0.4s ease;
        }
        .cta-pulse-btn:hover::before {
          transform: translateX(120%) skewX(-15deg);
        }
      `}</style>

      <section id="services" className="svc-root svc-section-bg py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* ── SECTION HEADER ── */}
          <div className="mb-16">
            <div className="section-accent-line mb-3">
              <span
                className="svc-display uppercase tracking-[0.2em] font-600"
                style={{ fontSize: "11px", color: "#F59E0B" }}
              >
                What We Do
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <h2
                  className="svc-display font-800 uppercase text-[#0A1F44] leading-none"
                  style={{ fontSize: "clamp(36px, 5vw, 60px)", letterSpacing: "-0.01em" }}
                >
                  Engineering
                  <br />
                  <span style={{ color: "#4B5563" }}>Services</span>
                </h2>
              </div>
              <p
                className="text-[#6B7280] leading-relaxed max-w-md"
                style={{ fontSize: "15px" }}
              >
                We offer a comprehensive range of engineering management services — built on integrity, delivered with precision, and designed to maximise value for every client.
              </p>
            </div>

            {/* Divider */}
            <div className="mt-8 h-px bg-gradient-to-r from-[#E5E7EB] via-[#0A1F44]/10 to-transparent" />
          </div>

          {/* ── SERVICES GRID ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((svc, i) => (
              <div key={svc.id} className="svc-card group p-7 flex flex-col gap-5">
                {/* Accent top bar */}
                <div className="svc-card-bar" style={{ background: svc.accent }} />

                {/* Card number watermark */}
                <span className="svc-num">{String(i + 1).padStart(2, "0")}</span>

                {/* Icon */}
                <div
                  className="svc-icon-wrap"
                  style={{
                    background: `${svc.accent}15`,
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={svc.accent}
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: 26, height: 26 }}
                  >
                    {svc.icon.props.children}
                  </svg>
                </div>

                {/* Title */}
                <h3
                  className="svc-display font-700 text-[#0A1F44] uppercase leading-tight"
                  style={{ fontSize: "16px", letterSpacing: "0.01em" }}
                >
                  {svc.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[#6B7280] leading-relaxed flex-1"
                  style={{ fontSize: "13.5px" }}
                >
                  {svc.short}
                </p>

                {/* Divider */}
                <div className="h-px bg-[#E5E7EB]" />

                {/* Read More */}
                <a
                  href={svc.href}
                  className="svc-link"
                  style={{ color: svc.accent }}
                >
                  Read More
                  <svg
                    className="svc-link-arrow"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>

          {/* ── BOTTOM CTA BANNER ── */}
          <div className="svc-cta-banner mt-14 px-8 sm:px-12 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="relative z-10">
              <p
                className="svc-display font-700 uppercase text-white leading-tight"
                style={{ fontSize: "clamp(20px, 3vw, 30px)" }}
              >
                Not sure which service fits your needs?
              </p>
              <p className="text-blue-200 mt-1" style={{ fontSize: "14px" }}>
                Let our engineers assess your project and recommend the right approach.
              </p>
            </div>
            <a
              href="#contact"
              className="svc-display cta-pulse-btn relative z-10 bg-amber-500 hover:bg-amber-400 text-[#07152E] font-700 uppercase tracking-wider px-8 py-4 flex-shrink-0 transition-colors duration-200"
              style={{ fontSize: "13px", letterSpacing: "0.1em" }}
            >
              Request Consultation
              <svg
                style={{ width: 16, height: 16 }}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}