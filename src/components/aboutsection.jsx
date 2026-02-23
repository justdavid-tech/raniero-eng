// src/components/AboutSection.jsx
import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;0,600;1,400&family=Barlow+Condensed:wght@600;700;800&display=swap');

        .abt-root    { font-family: 'Barlow', sans-serif; }
        .abt-display { font-family: 'Barlow Condensed', sans-serif; }

        /* ── Section ── */
        .abt-section {
          background-color: #0A1F44;
          background-image:
            radial-gradient(ellipse 60% 50% at 100% 50%, rgba(18,58,115,0.45) 0%, transparent 70%),
            linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px);
          background-size: auto, 48px 48px, 48px 48px;
          position: relative;
          overflow: hidden;
        }

        /* decorative rings */
        .abt-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(245,158,11,0.06);
          pointer-events: none;
        }

        /* ── Image block ── */
        .abt-img-wrap {
          position: relative;
          flex-shrink: 0;
        }
        .abt-img-main {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: brightness(0.88) contrast(1.05);
        }

        /* amber corner accent */
        .abt-img-corner {
          position: absolute;
          bottom: -16px;
          left: -16px;
          width: 80px;
          height: 80px;
          border-left: 3px solid #F59E0B;
          border-bottom: 3px solid #F59E0B;
          pointer-events: none;
        }
        .abt-img-corner-tr {
          position: absolute;
          top: -16px;
          right: -16px;
          width: 80px;
          height: 80px;
          border-right: 3px solid rgba(245,158,11,0.3);
          border-top: 3px solid rgba(245,158,11,0.3);
          pointer-events: none;
        }

        /* floating year badge */
        .abt-year-badge {
          position: absolute;
          top: 28px;
          left: -24px;
          background: #F59E0B;
          color: #07152E;
          padding: 14px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 12px 32px rgba(0,0,0,0.35);
          z-index: 2;
        }

        /* experience strip */
        .abt-exp-strip {
          position: absolute;
          bottom: 28px;
          right: -24px;
          background: rgba(7,21,46,0.85);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 14px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 2;
          min-width: 200px;
        }

        /* ── Text side ── */
        .abt-label::before {
          content: '';
          display: inline-block;
          width: 36px; height: 3px;
          background: #F59E0B;
          border-radius: 2px;
          vertical-align: middle;
          margin-right: 12px;
        }

        /* story text */
        .abt-story-text {
          color: rgba(255,255,255,0.6);
          line-height: 1.8;
          font-size: 15px;
        }
        .abt-story-text strong {
          color: rgba(255,255,255,0.9);
          font-weight: 600;
        }

        /* highlight pill */
        .abt-highlight {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px 18px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-left: 2px solid #F59E0B;
        }
        .abt-highlight-icon {
          width: 36px; height: 36px;
          border-radius: 8px;
          background: rgba(245,158,11,0.15);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .abt-highlight-icon svg { width: 18px; height: 18px; color: #F59E0B; }

        /* divider */
        .abt-rule {
          height: 1px;
          background: linear-gradient(90deg, rgba(245,158,11,0.3), transparent);
        }

        /* CTA buttons */
        .abt-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700; font-size: 13px;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: #07152E; background: #F59E0B;
          padding: 13px 30px; text-decoration: none;
          position: relative; overflow: hidden;
          transition: background 0.2s;
        }
        .abt-btn-primary:hover { background: #FBBF24; }
        .abt-btn-primary::before {
          content: '';
          position: absolute; inset: 0;
          background: rgba(255,255,255,0.18);
          transform: translateX(-100%) skewX(-15deg);
          transition: transform 0.4s ease;
        }
        .abt-btn-primary:hover::before { transform: translateX(130%) skewX(-15deg); }

        .abt-btn-outline {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700; font-size: 13px;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: white; border: 1px solid rgba(255,255,255,0.2);
          padding: 13px 30px; text-decoration: none;
          transition: background 0.2s, border-color 0.2s;
          background: transparent;
        }
        .abt-btn-outline:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.45);
        }

        /* image hover zoom */
        .abt-img-zoom-wrap { overflow: hidden; }
        .abt-img-main { transition: transform 0.6s ease; }
        .abt-img-zoom-wrap:hover .abt-img-main { transform: scale(1.04); }

        /* responsive: stack on mobile */
        @media (max-width: 1023px) {
          .abt-year-badge { left: 12px; top: 12px; }
          .abt-exp-strip  { right: 12px; bottom: 12px; min-width: 0; }
          .abt-img-corner, .abt-img-corner-tr { display: none; }
        }
      `}</style>

      <section id="about" className="abt-root abt-section py-24 px-4 sm:px-6 lg:px-8">

        {/* Decorative rings */}
        <div className="abt-ring" style={{ width: 600, height: 600, top: -200, left: -250 }} />
        <div className="abt-ring" style={{ width: 320, height: 320, bottom: -100, left: -80, borderColor: 'rgba(59,130,246,0.05)' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

            {/* ── LEFT: Text ── */}
            <div className="flex-1 flex flex-col gap-7 order-2 lg:order-1">

              {/* Label */}
              <p
                className="abt-label abt-display uppercase tracking-[0.2em] text-amber-400 font-600"
                style={{ fontSize: '11px' }}
              >
                About Us
              </p>

              {/* Headline */}
              <h2
                className="abt-display font-800 uppercase text-white leading-none"
                style={{ fontSize: 'clamp(36px, 5vw, 58px)', letterSpacing: '-0.01em' }}
              >
                Built on Trust,
                <br />
                <span style={{ color: '#F59E0B' }}>Driven</span> by Purpose
              </h2>

              {/* Story */}
              <div className="flex flex-col gap-4">
                <p className="abt-story-text">
                  <strong>Raniero Engineering Nig. Limited</strong> was established in <strong>2019</strong> with a clear mission to provide wide-ranging, efficient engineering solutions to clients who deserve better than average.
                </p>
                <p className="abt-story-text">
                  Strategically positioned in Nigeria, we've built our reputation on a simple but powerful idea: that great engineering is not just about technical excellence it's about <strong>flexibility, integrity, and genuine value for every naira invested.</strong>
                </p>
                <p className="abt-story-text">
                  From the first consultation through to project closeout, our professionally driven team walks with every client ensuring solutions are delivered <strong>on time, within budget, and to the highest standards.</strong>
                </p>
              </div>

              {/* Two highlights */}
              <div className="flex flex-col gap-3">
                <div className="abt-highlight">
                  <div className="abt-highlight-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <p className="abt-display font-700 uppercase text-white" style={{ fontSize: '14px' }}>
                      Anchored on Integrity
                    </p>
                    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: 3, lineHeight: 1.6 }}>
                      Every engagement is grounded in transparency, honest communication, and accountability from start to finish.
                    </p>
                  </div>
                </div>

                <div className="abt-highlight">
                  <div className="abt-highlight-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 12h8M12 8l4 4-4 4" />
                    </svg>
                  </div>
                  <div>
                    <p className="abt-display font-700 uppercase text-white" style={{ fontSize: '14px' }}>
                      Globally Ambitious
                    </p>
                    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: 3, lineHeight: 1.6 }}>
                      Our goal is to become one of the most reliable engineering solution providers not just in Nigeria, but globally.
                    </p>
                  </div>
                </div>
              </div>

              <div className="abt-rule" />

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <Link to="/about" className="abt-btn-primary">
                  Discover Our Full Story
                  <svg style={{ width: 14, height: 14 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <a href="/contact" className="abt-btn-outline">
                  Work With Us
                </a>
              </div>
            </div>

            {/* ── RIGHT: Image ── */}
            <div className="abt-img-wrap w-full lg:w-[480px] xl:w-[520px] order-1 lg:order-2 flex-shrink-0">

              {/* Year badge */}
              <div className="abt-year-badge">
                <span
                  className="abt-display font-800 text-[#07152E]"
                  style={{ fontSize: '32px', lineHeight: 1, letterSpacing: '-0.02em' }}
                >
                  2019
                </span>
                <span
                  className="abt-display font-700 uppercase text-[#07152E]"
                  style={{ fontSize: '9px', letterSpacing: '0.2em', marginTop: 2 }}
                >
                  Established
                </span>
              </div>

              {/* Main image */}
              <div
                className="abt-img-zoom-wrap"
                style={{ height: '520px', position: 'relative' }}
              >
                <img
                  src="/images/aboutsection.jpeg"
                  alt="Raniero Engineering — construction and project management"
                  className="abt-img-main"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {/* dark overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(135deg, rgba(7,21,46,0.3) 0%, transparent 60%)'
                }} />
              </div>

              {/* Corner accents */}
              <div className="abt-img-corner" />
              <div className="abt-img-corner-tr" />

              {/* Experience strip */}
              <div className="abt-exp-strip">
                <div style={{
                  width: 40, height: 40,
                  background: 'rgba(245,158,11,0.15)',
                  borderRadius: 8,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <svg style={{ width: 20, height: 20, color: '#F59E0B' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87" />
                    <path d="M16 3.13a4 4 0 010 7.75" />
                  </svg>
                </div>
                <div>
                  <p
                    className="abt-display font-800 text-white"
                    style={{ fontSize: '22px', lineHeight: 1, letterSpacing: '-0.01em' }}
                  >
                    6+ Years
                  </p>
                  <p
                    className="abt-display uppercase font-600"
                    style={{ fontSize: '9px', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.4)', marginTop: 3 }}
                  >
                    Engineering Excellence
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}