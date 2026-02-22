const sectors = [
  {
    id: 1,
    sector: "Oil & Gas",
    tagline: "Powering Energy Infrastructure",
    description:
      "We support upstream and downstream operations with rigorous engineering audits, cost valuation, process establishment, and logistics management — ensuring compliance, safety, and operational efficiency across critical energy assets.",
    services: ["Engineering Audit", "Cost Engineering", "Process Establishment", "Logistics Services"],
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900&q=80&auto=format&fit=crop",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v6M8 4l4-2 4 2" />
        <path d="M5 10h14l1 10H4L5 10z" />
        <path d="M9 10v10M15 10v10" />
        <path d="M4 15h16" />
      </svg>
    ),
    accent: "#F59E0B",
    stat: { value: "₦M+", label: "Assets Audited" },
  },
  {
    id: 2,
    sector: "Commercial Construction",
    tagline: "Building Lasting Structures",
    description:
      "From multi-storey complexes to commercial developments, we provide full project management and design-execution services — delivering on time, within budget, and to the highest structural standards.",
    services: ["Project Management", "Design & Execution", "Engineering Audit", "Cost Engineering"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80&auto=format&fit=crop",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="9" width="18" height="13" rx="1" />
        <path d="M3 9l9-7 9 7" />
        <rect x="9" y="14" width="6" height="8" />
        <path d="M9 14v8" />
      </svg>
    ),
    accent: "#F59E0B",
    stat: { value: "12+", label: "Project Types" },
  },
  {
    id: 3,
    sector: "Manufacturing & Industry",
    tagline: "Optimising Industrial Operations",
    description:
      "We help manufacturing facilities establish robust operational processes, safety procedures, and logistics frameworks — setting up greenfield plants and improving existing industrial operations for peak performance.",
    services: ["Process Establishment", "Facility Management", "Logistics Services", "Project Management"],
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80&auto=format&fit=crop",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20" />
        <path d="M6 20V10l6-6 6 6v10" />
        <rect x="9" y="14" width="6" height="6" />
        <path d="M2 10l4-4M22 10l-4-4" />
        <circle cx="12" cy="8" r="1.5" />
      </svg>
    ),
    accent: "#F59E0B",
    stat: { value: "5+", label: "Industries Served" },
  },
  {
    id: 4,
    sector: "Corporate & Facilities",
    tagline: "Smarter Workplaces, Better Outcomes",
    description:
      "We manage corporate facilities end-to-end from space audits and home movement coordination to maintenance systems and operational restructuring keeping your business environment running smoothly.",
    services: ["Facility Management", "Corporate Training", "Engineering Audit", "Cost Engineering"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80&auto=format&fit=crop",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    accent: "#F59E0B",
    stat: { value: "8K+", label: "sqm Managed" },
  },
];

export default function SectorsWeServe() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=Barlow+Condensed:wght@600;700;800&display=swap');

        .sec-root { font-family: 'Barlow', sans-serif; }
        .sec-display { font-family: 'Barlow Condensed', sans-serif; }

        /* ── Section BG ── */
        .sec-section {
          background-color: #F3F4F6;
          background-image:
            linear-gradient(rgba(10,31,68,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10,31,68,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
          position: relative;
          overflow: hidden;
        }

        /* ── Card ── */
        .sec-card {
          position: relative;
          background: #ffffff;
          border: 1px solid #E5E7EB;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1),
                      box-shadow 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .sec-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 56px rgba(10,31,68,0.12);
        }

        /* image */
        .sec-img-wrap {
          overflow: hidden;
          position: relative;
          height: 220px;
          flex-shrink: 0;
        }
        .sec-img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.4,0,0.2,1);
        }
        .sec-card:hover .sec-img { transform: scale(1.07); }

        /* gradient overlay on image */
        .sec-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            180deg,
            rgba(7,21,46,0.15) 0%,
            rgba(7,21,46,0.65) 100%
          );
          transition: opacity 0.35s ease;
        }
        .sec-card:hover .sec-img-overlay { opacity: 0.85; }

        /* icon on image */
        .sec-img-icon {
          position: absolute;
          bottom: 16px; left: 16px;
          width: 52px; height: 52px;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255,255,255,0.2);
          transition: transform 0.3s ease;
        }
        .sec-card:hover .sec-img-icon { transform: scale(1.08) rotate(-4deg); }
        .sec-img-icon svg { width: 24px; height: 24px; }

        /* stat badge on image top-right */
        .sec-stat-badge {
          position: absolute;
          top: 14px; right: 14px;
          background: rgba(7,21,46,0.7);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 6px 12px;
          display: flex; flex-direction: column; align-items: center;
        }

        /* top color bar sweep */
        .sec-card-bar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.4,0,0.2,1);
          z-index: 2;
        }
        .sec-card:hover .sec-card-bar { transform: scaleX(1); }

        /* service chips */
        .sec-chip {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          font-weight: 500;
          color: #4B5563;
          background: #F3F4F6;
          border: 1px solid #E5E7EB;
          padding: 3px 9px;
        }
        .sec-chip::before {
          content: '';
          display: inline-block;
          width: 4px; height: 4px;
          border-radius: 50%;
          background: currentColor;
          opacity: 0.5;
          flex-shrink: 0;
        }

        /* tagline */
        .sec-tagline {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        /* Read more */
        .sec-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: gap 0.2s ease, color 0.2s ease;
        }
        .sec-link:hover { gap: 9px; }
        .sec-link-arrow {
          width: 13px; height: 13px;
          transition: transform 0.2s ease;
        }
        .sec-link:hover .sec-link-arrow { transform: translateX(3px); }

        /* divider */
        .sec-rule {
          height: 1px;
          background: linear-gradient(90deg, #E5E7EB, transparent);
        }

        /* section label */
        .sec-label-accent::before {
          content: '';
          display: inline-block;
          width: 36px; height: 3px;
          background: #F59E0B;
          border-radius: 2px;
          vertical-align: middle;
          margin-right: 12px;
        }

        /* CTA button */
        .sec-cta-btn {
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
          padding: 14px 32px;
          position: relative;
          overflow: hidden;
          transition: background 0.2s;
        }
        .sec-cta-btn:hover { background: #FBBF24; }
        .sec-cta-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: rgba(255,255,255,0.18);
          transform: translateX(-100%) skewX(-15deg);
          transition: transform 0.4s ease;
        }
        .sec-cta-btn:hover::before { transform: translateX(130%) skewX(-15deg); }

        .sec-outline-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #0A1F44;
          border: 1px solid #0A1F44;
          padding: 14px 32px;
          transition: background 0.2s, color 0.2s;
        }
        .sec-outline-btn:hover {
          background: #0A1F44;
          color: white;
        }

        /* bottom dark banner */
        .sec-banner {
          background: linear-gradient(105deg, #0A1F44 0%, #123A73 100%);
          position: relative;
          overflow: hidden;
        }
        .sec-banner::after {
          content: '';
          position: absolute;
          top: -80px; right: -80px;
          width: 320px; height: 320px;
          border: 1px solid rgba(245,158,11,0.1);
          border-radius: 50%;
          pointer-events: none;
        }
        .sec-banner::before {
          content: '';
          position: absolute;
          bottom: -50px; left: 30%;
          width: 200px; height: 200px;
          border: 1px solid rgba(59,130,246,0.07);
          border-radius: 50%;
          pointer-events: none;
        }

        /* number watermark */
        .sec-num {
          position: absolute;
          bottom: -16px; right: -8px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 90px;
          font-weight: 800;
          color: rgba(10,31,68,0.04);
          line-height: 1;
          pointer-events: none;
          user-select: none;
          letter-spacing: -0.04em;
        }
      `}</style>

      <section id="sectors" className="sec-root sec-section py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* ── HEADER ── */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div>
              <p
                className="sec-label-accent sec-display uppercase tracking-[0.2em] text-amber-500 font-600 mb-3"
                style={{ fontSize: "11px" }}
              >
                Sectors We Serve
              </p>
              <h2
                className="sec-display font-800 uppercase text-[#0A1F44] leading-none"
                style={{ fontSize: "clamp(36px, 5vw, 60px)", letterSpacing: "-0.01em" }}
              >
                Industries We
                <br />
                <span style={{ color: "#4B5563" }}>Engineer For</span>
              </h2>
            </div>
            <p
              className="text-[#6B7280] leading-relaxed max-w-md"
              style={{ fontSize: "15px" }}
            >
              Raniero Engineering brings focused expertise across four key sectors — delivering tailored engineering solutions that address the specific challenges and demands of each industry.
            </p>
          </div>

          {/* ── SECTOR CARDS GRID ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {sectors.map((s, i) => (
              <div key={s.id} className="sec-card">
                {/* top sweep bar */}
                <div className="sec-card-bar" style={{ background: s.accent }} />

                {/* number watermark */}
                <span className="sec-num">{String(i + 1).padStart(2, "0")}</span>

                {/* Image */}
                <div className="sec-img-wrap">
                  <img src={s.image} alt={s.sector} className="sec-img" />
                  <div className="sec-img-overlay" />

                  {/* icon badge */}
                  <div
                    className="sec-img-icon"
                    style={{ background: `${s.accent}25`, color: s.accent }}
                  >
                    {s.icon}
                  </div>

                  {/* stat badge */}
                  <div className="sec-stat-badge">
                    <span
                      className="sec-display font-800 text-white"
                      style={{ fontSize: "20px", letterSpacing: "-0.01em" }}
                    >
                      {s.stat.value}
                    </span>
                    <span
                      className="sec-display uppercase tracking-widest text-white/50 font-600"
                      style={{ fontSize: "7px" }}
                    >
                      {s.stat.label}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-4 flex-1">
                  {/* Tagline */}
                  <span className="sec-tagline" style={{ color: s.accent }}>
                    {s.tagline}
                  </span>

                  {/* Sector title */}
                  <h3
                    className="sec-display font-700 uppercase text-[#0A1F44] leading-tight"
                    style={{ fontSize: "19px" }}
                  >
                    {s.sector}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[#6B7280] leading-relaxed flex-1"
                    style={{ fontSize: "13.5px" }}
                  >
                    {s.description}
                  </p>

                  {/* Services chips */}
                  <div className="flex flex-wrap gap-2">
                    {s.services.map((svc) => (
                      <span key={svc} className="sec-chip">{svc}</span>
                    ))}
                  </div>

                  <div className="sec-rule" />

                  {/* Link */}
                  <a href="#contact" className="sec-link" style={{ color: s.accent }}>
                    Work With Us
                    <svg
                      className="sec-link-arrow"
                      viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth={2.5}
                      strokeLinecap="round" strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* ── BOTTOM DARK BANNER ── */}
          <div className="sec-banner mt-14 px-8 sm:px-14 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="relative z-10 max-w-xl">
              <p
                className="sec-display font-800 uppercase text-white leading-tight"
                style={{ fontSize: "clamp(20px, 3vw, 32px)" }}
              >
                Don't see your industry here?
              </p>
              <p className="text-blue-200/70 mt-2 leading-relaxed" style={{ fontSize: "14px" }}>
                Raniero Engineering is strategically positioned to deliver solutions across a wide range of sectors. Reach out — we'll assess your needs and craft the right engineering approach for you.
              </p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a href="#contact" className="sec-cta-btn">
                Request Consultation
                <svg style={{ width: 14, height: 14 }} viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#services" className="sec-display inline-flex items-center gap-2 font-700 uppercase text-white border border-white/25 hover:border-white/60 px-8 py-4 transition-colors"
                 style={{ fontSize: "13px", letterSpacing: "0.1em" }}>
                Our Services
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}