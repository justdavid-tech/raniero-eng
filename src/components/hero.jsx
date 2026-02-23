import { useState, useEffect, useCallback, useRef } from "react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80&auto=format&fit=crop",
    badge: "Phase 01 — Project Delivery",
    headline: "Engineering\nVisions Into\nReality",
    subtext:
      "From conceptualization to execution, we deliver precision-engineered solutions on time and within budget for every project, every time.",
    cta: { primary: "Request Consultation", secondary: "Our Projects" },
    stats: [
      { value: "120+", label: "Projects Delivered" },
      { value: "6+", label: "Years Experience" },
      { value: "100%", label: "Client Commitment" },
    ],
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&q=80&auto=format&fit=crop",
    badge: "Phase 02 — Expert Management",
    headline: "Managed With\nPrecision,\nBuilt to Last",
    subtext:
      "Our professionally driven team provides end-to-end engineering management from facility oversight to logistics and process establishment for industries.",
    cta: { primary: "Explore Services", secondary: "Meet Our Team" },
    stats: [
      { value: "12", label: "Core Services" },
      { value: "24/7", label: "Support Available" },
      { value: "99%", label: "On-Time Delivery" },
    ],
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80&auto=format&fit=crop",
    badge: "Phase 03 — Global Ambition",
    headline: "Your Trusted\nEngineering\nPartner",
    subtext:
      "Anchored on integrity, simplicity and value for investment, Raniero Engineering is strategically positioned to become a globally reliable engineering solution provider.",
    cta: { primary: "Get a Quote", secondary: "About Raniero" },
    stats: [
      { value: "3+", label: "Sectors Served" },
      { value: "₦M+", label: "Assets Valued" },
      { value: "EST.", label: "2019" },
    ],
  },
];

const AUTOPLAY_INTERVAL = 6000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [direction, setDirection] = useState("next");
  const [animating, setAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);
  const progressRef = useRef(null);
  const startTimeRef = useRef(null);

  const goTo = useCallback(
    (index, dir = "next") => {
      if (animating || index === current) return;
      setDirection(dir);
      setPrev(current);
      setAnimating(true);
      setCurrent(index);
      setProgress(0);
      startTimeRef.current = Date.now();
      setTimeout(() => {
        setPrev(null);
        setAnimating(false);
      }, 900);
    },
    [animating, current]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, "next");
  }, [current, goTo]);

  const prev_ = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, "prev");
  }, [current, goTo]);

  // Autoplay
  useEffect(() => {
    timerRef.current = setTimeout(next, AUTOPLAY_INTERVAL);
    startTimeRef.current = Date.now();
    return () => clearTimeout(timerRef.current);
  }, [current, next]);

  // Progress bar animation
  useEffect(() => {
    startTimeRef.current = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min((elapsed / AUTOPLAY_INTERVAL) * 100, 100);
      setProgress(pct);
      if (pct < 100) progressRef.current = requestAnimationFrame(tick);
    };
    progressRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(progressRef.current);
  }, [current]);

  const slide = slides[current];
  const prevSlide = prev !== null ? slides[prev] : null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=Barlow+Condensed:wght@500;600;700;800&display=swap');

        .hero-root {
          font-family: 'Barlow', sans-serif;
        }
        .hero-display {
          font-family: 'Barlow Condensed', sans-serif;
        }

        /* Slide image transitions */
        .slide-bg {
          position: absolute; inset: 0;
          background-size: cover;
          background-position: center;
          transition: none;
        }
        .slide-bg-enter-next {
          animation: slideInRight 0.9s cubic-bezier(0.77,0,0.18,1) forwards;
        }
        .slide-bg-enter-prev {
          animation: slideInLeft 0.9s cubic-bezier(0.77,0,0.18,1) forwards;
        }
        .slide-bg-exit-next {
          animation: slideOutLeft 0.9s cubic-bezier(0.77,0,0.18,1) forwards;
        }
        .slide-bg-exit-prev {
          animation: slideOutRight 0.9s cubic-bezier(0.77,0,0.18,1) forwards;
        }

        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to   { transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to   { transform: translateX(0); }
        }
        @keyframes slideOutLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-100%); }
        }
        @keyframes slideOutRight {
          from { transform: translateX(0); }
          to   { transform: translateX(100%); }
        }

        /* Ken Burns zoom */
        .kenburns {
          animation: kenBurns 7s ease-out forwards;
        }
        @keyframes kenBurns {
          from { transform: scale(1); }
          to   { transform: scale(1.07); }
        }

        /* Text stagger animations */
        .text-reveal {
          animation: textReveal 0.7s cubic-bezier(0.22,1,0.36,1) both;
        }
        @keyframes textReveal {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .badge-reveal { animation-delay: 0.1s; }
        .headline-reveal { animation-delay: 0.25s; }
        .sub-reveal { animation-delay: 0.4s; }
        .cta-reveal { animation-delay: 0.55s; }
        .stats-reveal { animation-delay: 0.65s; }

        /* Diagonal overlay shape */
        .diagonal-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            rgba(7,21,46,0.92) 0%,
            rgba(10,31,68,0.80) 45%,
            rgba(10,31,68,0.15) 70%,
            transparent 100%
          );
        }

        /* Arrow buttons */
        .arrow-btn {
          width: 48px; height: 48px;
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(10,31,68,0.5);
          backdrop-filter: blur(6px);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, transform 0.15s;
          color: white;
        }
        .arrow-btn:hover {
          background: rgba(245,158,11,0.85);
          border-color: #F59E0B;
          transform: scale(1.08);
        }

        /* Dot indicator */
        .dot {
          position: relative;
          height: 3px;
          border-radius: 2px;
          background: rgba(255,255,255,0.25);
          cursor: pointer;
          overflow: hidden;
          transition: width 0.3s ease;
        }
        .dot-active { background: rgba(255,255,255,0.3); }
        .dot-fill {
          position: absolute;
          top: 0; left: 0; height: 100%;
          background: #F59E0B;
          border-radius: 2px;
          transition: none;
        }

        /* Stat separator */
        .stat-sep {
          width: 1px;
          height: 36px;
          background: rgba(255,255,255,0.15);
        }

        /* Noise texture overlay */
        .noise-overlay {
          position: absolute; inset: 0;
          opacity: 0.035;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 200px;
          pointer-events: none;
        }

        /* Slide counter */
        .slide-counter {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          letter-spacing: 0.15em;
          color: rgba(255,255,255,0.45);
        }

        /* Bottom bar geometric accent */
        .geo-accent {
          position: absolute;
          bottom: 0; right: 0;
          width: 340px; height: 340px;
          border: 1px solid rgba(245,158,11,0.08);
          border-radius: 50%;
          transform: translate(40%, 55%);
          pointer-events: none;
        }
        .geo-accent-2 {
          position: absolute;
          bottom: 0; right: 0;
          width: 220px; height: 220px;
          border: 1px solid rgba(245,158,11,0.12);
          border-radius: 50%;
          transform: translate(35%, 50%);
          pointer-events: none;
        }

        @media (max-width: 640px) {
          .diagonal-overlay {
            background: linear-gradient(
              180deg,
              rgba(7,21,46,0.85) 0%,
              rgba(10,31,68,0.75) 100%
            );
          }
        }
      `}</style>

      <section
        className="hero-root relative w-full overflow-hidden"
        style={{ height: "100svh", minHeight: "600px", maxHeight: "980px", paddingTop: "70px" }}
      >
        {/* ── BACKGROUND SLIDES ── */}

        {/* Previous slide (exiting) */}
        {prevSlide && (
          <div
            className={`slide-bg ${
              direction === "next" ? "slide-bg-exit-next" : "slide-bg-exit-prev"
            }`}
            style={{ backgroundImage: `url(${prevSlide.image})` }}
          />
        )}

        {/* Current slide (entering) */}
        <div
          key={current}
          className={`slide-bg ${
            animating
              ? direction === "next"
                ? "slide-bg-enter-next"
                : "slide-bg-enter-prev"
              : ""
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {/* Ken Burns inner layer */}
          <div
            className="kenburns absolute inset-0"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

        {/* Overlays */}
        <div className="diagonal-overlay" />
        <div className="noise-overlay" />

        {/* Geometric accents */}
        <div className="geo-accent" />
        <div className="geo-accent-2" />

        {/* Bottom blue gradient */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "180px",
            background:
              "linear-gradient(to top, rgba(7,21,46,0.7) 0%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        {/* ── CONTENT ── */}
        <div className="relative z-10 h-full flex flex-col justify-between px-6 sm:px-10 lg:px-20 py-10 max-w-7xl mx-auto w-full">

          {/* Main content area */}
          <div className="flex-1 flex flex-col justify-center max-w-3xl">

            {/* Badge */}
            <div
              key={`badge-${current}`}
              className="text-reveal badge-reveal inline-flex items-center gap-2.5 mb-6"
            >
              <span
                style={{
                  display: "inline-block",
                  width: "28px",
                  height: "2px",
                  background: "#F59E0B",
                  borderRadius: "1px",
                }}
              />
              <span
                className="hero-display uppercase tracking-[0.2em] text-amber-400 font-600"
                style={{ fontSize: "11px" }}
              >
                {slide.badge}
              </span>
            </div>

            {/* Headline */}
            <h1
              key={`headline-${current}`}
              className="text-reveal headline-reveal hero-display text-white font-800 uppercase leading-none mb-6"
              style={{ fontSize: "clamp(48px, 8vw, 96px)", letterSpacing: "-0.01em" }}
            >
              {slide.headline.split("\n").map((line, i) => (
                <span key={i} style={{ display: "block" }}>
                  {i === 1 ? (
                    <span style={{ color: "#F59E0B" }}>{line}</span>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h1>

            {/* Subtext */}
            <p
              key={`sub-${current}`}
              className="text-reveal sub-reveal text-gray-300 font-400 leading-relaxed mb-8 max-w-xl"
              style={{ fontSize: "clamp(14px, 1.8vw, 17px)" }}
            >
              {slide.subtext}
            </p>

            {/* CTA Buttons */}
            <div
              key={`cta-${current}`}
              className="text-reveal cta-reveal flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                className="hero-display uppercase tracking-wider font-700 text-[#07152E] bg-amber-500 hover:bg-amber-400 px-7 py-3.5 transition-colors duration-200"
                style={{ fontSize: "13px", letterSpacing: "0.1em" }}
              >
                {slide.cta.primary}
              </a>
              <a
                href="#services"
                className="hero-display uppercase tracking-wider font-600 text-white border border-white/30 hover:border-amber-400 hover:text-amber-400 px-7 py-3.5 transition-colors duration-200"
                style={{ fontSize: "13px", letterSpacing: "0.1em", background: "rgba(255,255,255,0.05)" }}
              >
                {slide.cta.secondary}
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>

          {/* ── BOTTOM BAR: Stats + Controls ── */}
          <div className="flex items-end justify-between gap-6 flex-wrap">

            {/* Stats */}
            <div
              key={`stats-${current}`}
              className="text-reveal stats-reveal flex items-center gap-6 sm:gap-8"
            >
              {slide.stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-6 sm:gap-8">
                  <div>
                    <div
                      className="hero-display text-white font-700 leading-none"
                      style={{ fontSize: "clamp(22px, 4vw, 34px)" }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-gray-400 font-500 uppercase tracking-widest mt-1"
                      style={{ fontSize: "9px" }}
                    >
                      {stat.label}
                    </div>
                  </div>
                  {i < slide.stats.length - 1 && <div className="stat-sep" />}
                </div>
              ))}
            </div>

            {/* Controls */}
            <div className="flex flex-col items-end gap-4">

              {/* Slide counter */}
              <div className="slide-counter">
                {String(current + 1).padStart(2, "0")} /{" "}
                {String(slides.length).padStart(2, "0")}
              </div>

              {/* Dot progress indicators */}
              <div className="flex items-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i, i > current ? "next" : "prev")}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`dot ${i === current ? "dot-active" : ""}`}
                    style={{ width: i === current ? "48px" : "20px" }}
                  >
                    {i === current && (
                      <div
                        className="dot-fill"
                        style={{ width: `${progress}%` }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Arrow buttons */}
              <div className="flex items-center gap-2">
                <button onClick={prev_} className="arrow-btn" aria-label="Previous slide">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button onClick={next} className="arrow-btn" aria-label="Next slide">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right-side vertical label */}
        <div
          className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 z-10 items-center gap-2"
          style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
        >
          <span
            className="hero-display text-white/20 uppercase tracking-[0.3em] font-600"
            style={{ fontSize: "10px" }}
          >
            Scroll to explore
          </span>
          <span
            style={{
              display: "inline-block",
              width: "1px",
              height: "40px",
              background: "rgba(245,158,11,0.3)",
            }}
          />
        </div>
      </section>
    </>
  );
}