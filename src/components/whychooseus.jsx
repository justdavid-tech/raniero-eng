const pillars = [
  {
    id: 1,
    keyword: "Integrity",
    headline: "We Do What\nWe Say",
    description:
      "Every commitment we make is a promise we keep. Our operations are built on transparency, honesty, and accountability from the first consultation to final project handover.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    color: "#F59E0B",
  },
  {
    id: 2,
    keyword: "Simplicity",
    headline: "Complex Problems,\nClear Solutions",
    description:
      "We cut through technical complexity to deliver straightforward, elegant engineering solutions. No jargon, no bloat, just efficient, well-communicated results your team can act on.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8" />
        <path d="M12 8l4 4-4 4" />
      </svg>
    ),
    color: "#F59E0B",
  },
  {
    id: 3,
    keyword: "Value",
    headline: "Maximum Return\non Investment",
    description:
      "We treat every naira spent as our own. Our flexible, budget-conscious approach ensures clients receive world-class engineering outcomes without unnecessary cost overruns.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    color: "#F59E0B",
  },
  {
    id: 4,
    keyword: "Team",
    headline: "Driven by\nReal Professionals",
    description:
      "Our multidisciplinary team brings deep industry expertise across project management, design, auditing, and logistics professionally trained and results-oriented at every level.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    color: "#F59E0B",
  },
];

export default function WhyChooseUs() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=Barlow+Condensed:wght@600;700;800&display=swap');

        .wcu-root { font-family: 'Barlow', sans-serif; }
        .wcu-display { font-family: 'Barlow Condensed', sans-serif; }

        /* ── Section BG ── */
        .wcu-section {
          background-color: #0A1F44;
          background-image:
            radial-gradient(ellipse 80% 60% at 50% -10%, rgba(18,58,115,0.7) 0%, transparent 70%),
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: auto, 48px 48px, 48px 48px;
          position: relative;
          overflow: hidden;
        }

        /* large decorative ring */
        .wcu-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(245,158,11,0.07);
          pointer-events: none;
        }

        /* ── Pillar card ── */
        .wcu-card {
          position: relative;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(2px);
          overflow: hidden;
          transition: background 0.35s ease, border-color 0.35s ease, transform 0.35s ease;
        }
        .wcu-card:hover {
          background: rgba(255,255,255,0.06);
          transform: translateY(-8px);
        }

        /* glow blob on hover */
        .wcu-card-glow {
          position: absolute;
          top: -60px; left: -60px;
          width: 180px; height: 180px;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }
        .wcu-card:hover .wcu-card-glow { opacity: 0.18; }

        /* top accent line sweep */
        .wcu-card-bar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .wcu-card:hover .wcu-card-bar { transform: scaleX(1); }

        /* icon circle */
        .wcu-icon-ring {
          width: 64px; height: 64px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          position: relative;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .wcu-card:hover .wcu-icon-ring { transform: scale(1.08) rotate(-4deg); }
        .wcu-icon-ring svg { width: 28px; height: 28px; }

        /* outer dashed ring */
        .wcu-icon-ring::after {
          content: '';
          position: absolute; inset: -8px;
          border-radius: 50%;
          border: 1px dashed currentColor;
          opacity: 0.2;
          animation: spin 12s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* stat number */
        .wcu-stat {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, currentColor 0%, rgba(255,255,255,0.6) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* divider line */
        .wcu-h-rule {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
        }

        /* keyword tag */
        .wcu-tag {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 3px 10px;
          border-radius: 2px;
        }
        .wcu-tag::before {
          content: '';
          display: inline-block;
          width: 5px; height: 5px;
          border-radius: 50%;
          background: currentColor;
        }

        /* section label accent */
        .section-accent-line::before {
          content: '';
          display: inline-block;
          width: 36px; height: 3px;
          background: #F59E0B;
          border-radius: 2px;
          vertical-align: middle;
          margin-right: 12px;
        }

        /* bottom quote bar */
        .wcu-quote-bar {
          border-left: 3px solid #F59E0B;
          background: rgba(245,158,11,0.05);
        }

        /* CTA outline btn */
        .wcu-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: white;
          border: 1px solid rgba(255,255,255,0.25);
          padding: 12px 28px;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
          background: transparent;
        }
        .wcu-btn-outline:hover {
          background: rgba(255,255,255,0.07);
          border-color: rgba(255,255,255,0.5);
        }

        .wcu-btn-amber {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #07152E;
          background: #F59E0B;
          padding: 12px 28px;
          transition: background 0.2s;
        }
        .wcu-btn-amber:hover { background: #FBBF24; }

        /* counter row */
        .wcu-counter-row {
          border-top: 1px solid rgba(255,255,255,0.07);
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
      `}</style>

      <section id="why-us" className="wcu-root wcu-section py-24 px-4 sm:px-6 lg:px-8">

        {/* Decorative rings */}
        <div className="wcu-ring" style={{ width: 600, height: 600, top: -200, right: -200 }} />
        <div className="wcu-ring" style={{ width: 380, height: 380, top: -100, right: -80, borderColor: "rgba(245,158,11,0.05)" }} />
        <div className="wcu-ring" style={{ width: 300, height: 300, bottom: -100, left: -100, borderColor: "rgba(59,130,246,0.05)" }} />

        <div className="max-w-7xl mx-auto relative z-10">

          {/* ── HEADER ── */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div>
              <p className="section-accent-line wcu-display uppercase tracking-[0.2em] text-amber-400 font-600 mb-3" style={{ fontSize: "11px" }}>
                Why Choose Us
              </p>
              <h2
                className="wcu-display font-800 uppercase text-white leading-none"
                style={{ fontSize: "clamp(36px, 5vw, 60px)", letterSpacing: "-0.01em" }}
              >
                Built on Four
                <br />
                <span style={{ color: "#F59E0B" }}>Unshakeable</span> Pillars
              </h2>
            </div>
            <p
              className="text-blue-200/70 leading-relaxed max-w-sm"
              style={{ fontSize: "15px" }}
            >
              Since 2019, Raniero Engineering has been anchoring every engagement on a core philosophy that puts clients first and delivers results that speak for themselves.
            </p>
          </div>

          {/* ── FOUR PILLAR CARDS ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((p) => (
              <div key={p.id} className="wcu-card p-7 flex flex-col gap-5">
                {/* sweep bar */}
                <div className="wcu-card-bar" style={{ background: p.color }} />

                {/* glow blob */}
                <div className="wcu-card-glow" style={{ background: p.color }} />

                {/* Tag */}
                <span className="wcu-tag" style={{ color: p.color, background: `${p.color}14` }}>
                  {p.keyword}
                </span>

                {/* Icon */}
                <div className="wcu-icon-ring" style={{ background: `${p.color}18`, color: p.color }}>
                  {p.icon}
                </div>

                {/* Headline */}
                <h3
                  className="wcu-display font-700 uppercase text-white leading-tight"
                  style={{ fontSize: "18px", letterSpacing: "0.01em" }}
                >
                  {p.headline.split("\n").map((line, i) => (
                    <span key={i} style={{ display: "block" }}>{line}</span>
                  ))}
                </h3>

                {/* Description */}
                <p className="text-blue-100/55 leading-relaxed flex-1" style={{ fontSize: "13.5px" }}>
                  {p.description}
                </p>

                {/* Rule */}
                <div className="wcu-h-rule" />
              </div>
            ))}
          </div>

          {/* ── QUOTE + CTA ── */}
          <div className="mt-14 flex flex-col lg:flex-row items-center lg:items-stretch gap-6">
            {/* Quote */}
            <div className="wcu-quote-bar flex-1 px-7 py-6">
              <p
                className="wcu-display font-600 uppercase text-white/80 leading-snug"
                style={{ fontSize: "clamp(16px, 2vw, 22px)", letterSpacing: "0.01em" }}
              >
                "Our approach in doing business is anchored on integrity, simplicity and value for investment."
              </p>
              <p className="mt-3 text-amber-400/70 font-500" style={{ fontSize: "12px" }}>
                — Raniero Engineering Nig. Limited
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a href="/contact" className="wcu-btn-amber">
                Request Consultation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="/about" className="wcu-btn-outline">
                Learn About Us
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}