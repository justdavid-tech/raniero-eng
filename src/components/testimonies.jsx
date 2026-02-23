import { useState, useEffect, useRef, useCallback } from "react";

const testimonials = [
  {
    id: 1,
    name: "Emeka Okonkwo",
    role: "CEO",
    company: "Okonkwo & Partners Ltd",
    sector: "Commercial Construction",
    image: "/images/testimonies-1.jpeg",
    quote:
      "Raniero Engineering handled our commercial complex project from design to final handover with remarkable professionalism. They kept us informed at every stage, respected our budget, and delivered ahead of schedule. I would not hesitate to engage them again.",
    rating: 5,
  },
  {
    id: 2,
    name: "Adaeze Nwosu",
    role: "Head of Operations",
    company: "Meridian Facilities Group",
    sector: "Facility Management",
    image: "/images/testimonies-2.jpeg",
    quote:
      "Their facility management approach is thorough and systematic. The team audited our entire 8,000 sqm HQ, identified inefficiencies we had missed for years, and implemented a maintenance structure that has significantly reduced our operational costs.",
    rating: 5,
  },
  {
    id: 3,
    name: "Tunde Fashola",
    role: "Plant Director",
    company: "NorthStar Manufacturing",
    sector: "Industrial Setup",
    image: "/images/testimonies-3.jpeg",
    quote:
      "Setting up our manufacturing plant's operational processes was a complex undertaking. Raniero brought clarity, structure, and deep technical knowledge. What could have taken us 18 months, they helped us achieve in under 10 — compliantly and safely.",
    rating: 5,
  },
  {
    id: 4,
    name: "Chidinma Eze",
    role: "Finance Director",
    company: "Eze Energy Resources",
    sector: "Oil & Gas",
    image: "/images/testimonies-4.jpeg",
    quote:
      "The engineering asset valuation Raniero provided was precise, well-documented, and stood up to every regulatory requirement. Their cost engineering team clearly understands the oil and gas landscape in Nigeria. Exceptional value for money.",
    rating: 5,
  },
  {
    id: 5,
    name: "Babatunde Adeyemi",
    role: "Project Manager",
    company: "Adeyemi Infrastructure Group",
    sector: "Project Management",
    image: "/images/testimonies-5.jpeg",
    quote:
      "What sets Raniero apart is their integrity. There were no hidden costs, no vague timelines, and no surprises. They communicated clearly throughout our bridge infrastructure project and delivered exactly what was promised. A rare quality in this industry.",
    rating: 5,
  },
  {
    id: 6,
    name: "Ngozi Okafor",
    role: "Managing Director",
    company: "CrestLine Properties",
    sector: "Engineering AEmeka OkonkwoEmeka OkonkwoEmeka OkonkwoEmeka OkonkwoEmeka Okonkwoudit",
    image: "/images/testimonies-6.jpeg",
    quote:
      "Raniero conducted an independent audit of three of our real estate assets before acquisition. Their report was thorough, honest, and potentially saved us from a very costly mistake. That level of diligence is exactly what you want in an engineering partner.",
    rating: 5,
  },
];

function StarRating({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          style={{ width: 14, height: 14, fill: "#F59E0B", color: "#F59E0B" }}
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

const AUTOPLAY_MS = 5500;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [animDir, setAnimDir] = useState("next");
  const [sliding, setSliding] = useState(false);
  const timerRef = useRef(null);
  const total = testimonials.length;

  const goTo = useCallback(
    (index, dir = "next") => {
      if (sliding) return;
      setAnimDir(dir);
      setSliding(true);
      setTimeout(() => {
        setCurrent(index);
        setSliding(false);
      }, 380);
    },
    [sliding]
  );

  const next = useCallback(() => goTo((current + 1) % total, "next"), [current, goTo, total]);
  const prev = useCallback(() => goTo((current - 1 + total) % total, "prev"), [current, goTo, total]);

  useEffect(() => {
    timerRef.current = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(timerRef.current);
  }, [current, next]);

  const t = testimonials[current];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Barlow+Condensed:wght@600;700;800&display=swap');

        .tst-root { font-family: 'Barlow', sans-serif; }
        .tst-display { font-family: 'Barlow Condensed', sans-serif; }

        /* ── Section ── */
        .tst-section {
          background-color: #0A1F44;
          background-image:
            radial-gradient(ellipse 70% 50% at 20% 100%, rgba(18,58,115,0.5) 0%, transparent 70%),
            radial-gradient(ellipse 50% 40% at 80% 0%, rgba(245,158,11,0.05) 0%, transparent 60%);
          position: relative;
          overflow: hidden;
        }

        /* decorative quote mark */
        .tst-giant-quote {
          position: absolute;
          top: 40px; right: 60px;
          font-family: Georgia, serif;
          font-size: 320px;
          line-height: 1;
          color: rgba(255,255,255,0.025);
          pointer-events: none;
          user-select: none;
          letter-spacing: -0.05em;
        }

        /* decorative rings */
        .tst-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(245,158,11,0.06);
          pointer-events: none;
        }

        /* ── Featured card (center large card) ── */
        .tst-main-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(4px);
          position: relative;
          overflow: hidden;
          transition: opacity 0.38s ease, transform 0.38s ease;
        }
        .tst-main-card.sliding-next {
          animation: slideOutFade 0.38s ease forwards;
        }
        .tst-main-card.entering-next {
          animation: slideInFade 0.38s ease forwards;
        }
        @keyframes slideOutFade {
          to { opacity: 0; transform: translateX(-40px); }
        }
        @keyframes slideInFade {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        /* amber left border accent */
        .tst-main-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 3px; height: 100%;
          background: linear-gradient(180deg, #F59E0B 0%, transparent 100%);
        }

        /* ── Avatar ── */
        .tst-avatar {
          width: 72px; height: 72px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid rgba(245,158,11,0.4);
          flex-shrink: 0;
          display: block;
        }

        /* ── Thumbnail strip cards ── */
        .tst-thumb {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          cursor: pointer;
          transition: background 0.25s, border-color 0.25s, transform 0.25s;
          position: relative;
          overflow: hidden;
        }
        .tst-thumb:hover {
          background: rgba(255,255,255,0.08);
          transform: translateY(-3px);
        }
        .tst-thumb.active {
          background: rgba(245,158,11,0.1);
          border-color: rgba(245,158,11,0.35);
        }
        .tst-thumb-avatar {
          width: 40px; height: 40px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
          border: 2px solid rgba(255,255,255,0.1);
        }
        .tst-thumb.active .tst-thumb-avatar {
          border-color: rgba(245,158,11,0.5);
        }
        /* active indicator */
        .tst-thumb-bar {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: #F59E0B;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }
        .tst-thumb.active .tst-thumb-bar { transform: scaleX(1); }

        /* ── Arrow buttons ── */
        .tst-arrow {
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.05);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          color: white;
          transition: background 0.2s, border-color 0.2s, transform 0.15s;
          flex-shrink: 0;
        }
        .tst-arrow:hover {
          background: #F59E0B;
          border-color: #F59E0B;
          color: #07152E;
          transform: scale(1.08);
        }

        /* ── Dot indicators ── */
        .tst-dot {
          height: 3px;
          border-radius: 2px;
          background: rgba(255,255,255,0.2);
          cursor: pointer;
          transition: width 0.3s ease, background 0.3s ease;
        }
        .tst-dot.active {
          background: #F59E0B;
          width: 28px !important;
        }

        /* section label */
        .tst-label-accent::before {
          content: '';
          display: inline-block;
          width: 36px; height: 3px;
          background: #F59E0B;
          border-radius: 2px;
          vertical-align: middle;
          margin-right: 12px;
        }

        /* sector badge */
        .tst-sector-badge {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #F59E0B;
          background: rgba(245,158,11,0.12);
          padding: 3px 10px;
          border-radius: 2px;
          display: inline-block;
        }

        /* quote text */
        .tst-quote-text {
          font-style: italic;
          color: rgba(255,255,255,0.8);
          line-height: 1.75;
        }

        /* horizontal rule */
        .tst-rule {
          height: 1px;
          background: linear-gradient(90deg, rgba(245,158,11,0.3), transparent);
        }

        /* counter */
        .tst-counter {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          letter-spacing: 0.15em;
          color: rgba(255,255,255,0.35);
        }
      `}</style>

      <section id="testimonials" className="tst-root tst-section py-24 px-4 sm:px-6 lg:px-8">

        {/* Decorative elements */}
        <div className="tst-giant-quote">"</div>
        <div className="tst-ring" style={{ width: 500, height: 500, bottom: -180, right: -180 }} />
        <div className="tst-ring" style={{ width: 300, height: 300, bottom: -80, right: -60, borderColor: "rgba(59,130,246,0.05)" }} />

        <div className="max-w-7xl mx-auto relative z-10">

          {/* ── HEADER ── */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div>
              <p
                className="tst-label-accent tst-display uppercase tracking-[0.2em] text-amber-400 font-600 mb-3"
                style={{ fontSize: "11px" }}
              >
                Client Testimonials
              </p>
              <h2
                className="tst-display font-800 uppercase text-white leading-none"
                style={{ fontSize: "clamp(36px, 5vw, 60px)", letterSpacing: "-0.01em" }}
              >
                What Our
                <br />
                <span style={{ color: "#F59E0B" }}>Clients Say</span>
              </h2>
            </div>
            <p className="text-blue-200/60 leading-relaxed max-w-sm" style={{ fontSize: "15px" }}>
              The trust our clients place in us is the foundation of everything we build. Here's what they have to say about working with Raniero Engineering.
            </p>
          </div>

          {/* ── MAIN LAYOUT ── */}
          <div className="flex flex-col lg:flex-row gap-6">

            {/* ── LEFT: Featured testimonial card ── */}
            <div className="flex-1">
              <div
                className={`tst-main-card p-8 sm:p-10 h-full flex flex-col gap-7 ${sliding ? "sliding-next" : "entering-next"}`}
                key={current}
              >
                {/* Top row */}
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <span className="tst-sector-badge">{t.sector}</span>
                  <StarRating count={t.rating} />
                </div>

                {/* Quote */}
                <div className="relative flex-1">
                  {/* small decorative quote */}
                  <span
                    className="tst-display font-800 text-amber-500 absolute -top-3 -left-2"
                    style={{ fontSize: "56px", lineHeight: 1, opacity: 0.6 }}
                  >
                    "
                  </span>
                  <p
                    className="tst-quote-text pt-6"
                    style={{ fontSize: "clamp(15px, 1.8vw, 17px)" }}
                  >
                    {t.quote}
                  </p>
                </div>

                <div className="tst-rule" />

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="tst-avatar"
                  />
                  <div>
                    <p
                      className="tst-display font-700 uppercase text-white"
                      style={{ fontSize: "17px", letterSpacing: "0.01em" }}
                    >
                      {t.name}
                    </p>
                    <p className="text-amber-400/80 font-500" style={{ fontSize: "13px" }}>
                      {t.role}
                    </p>
                    <p className="text-white/35 font-400" style={{ fontSize: "12px" }}>
                      {t.company}
                    </p>
                  </div>

                  {/* Counter far right */}
                  <div className="ml-auto tst-counter">
                    {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                  </div>
                </div>

                {/* Dot indicators + arrows */}
                <div className="flex items-center justify-between gap-4">
                  {/* Dots */}
                  <div className="flex items-center gap-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => goTo(i, i > current ? "next" : "prev")}
                        className={`tst-dot ${i === current ? "active" : ""}`}
                        style={{ width: i === current ? "28px" : "10px" }}
                        aria-label={`Go to testimonial ${i + 1}`}
                      />
                    ))}
                  </div>

                  {/* Arrows */}
                  <div className="flex items-center gap-2">
                    <button onClick={prev} className="tst-arrow" aria-label="Previous">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button onClick={next} className="tst-arrow" aria-label="Next">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Thumbnail strip ── */}
            <div className="lg:w-72 xl:w-80 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {testimonials.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => goTo(i, i > current ? "next" : "prev")}
                  className={`tst-thumb flex-shrink-0 w-60 lg:w-full text-left p-4 flex items-center gap-3`}
                  style={i === current ? {} : {}}
                  data-active={i === current}
                >
                  {/* override via JS since Tailwind conditional is limited */}
                  <style>{`
                    button[data-active="true"].tst-thumb {
                      background: rgba(245,158,11,0.1);
                      border-color: rgba(245,158,11,0.35);
                    }
                    button[data-active="true"].tst-thumb .tst-thumb-avatar {
                      border-color: rgba(245,158,11,0.5);
                    }
                    button[data-active="true"].tst-thumb .tst-thumb-bar {
                      transform: scaleX(1);
                    }
                  `}</style>
                  <img src={item.image} alt={item.name} className="tst-thumb-avatar" />
                  <div className="flex-1 min-w-0">
                    <p
                      className="tst-display font-700 uppercase text-white truncate"
                      style={{ fontSize: "13px" }}
                    >
                      {item.name}
                    </p>
                    <p
                      className="text-white/45 truncate"
                      style={{ fontSize: "11px" }}
                    >
                      {item.role} · {item.company}
                    </p>
                    <p
                      className="mt-1 text-amber-400/70"
                      style={{ fontSize: "10px", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600 }}
                    >
                      {item.sector}
                    </p>
                  </div>
                  {i === current && (
                    <svg
                      style={{ width: 14, height: 14, color: "#F59E0B", flexShrink: 0 }}
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                  <div className="tst-thumb-bar" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}