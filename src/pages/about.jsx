// src/pages/AboutPage.jsx
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

// Core Values data ──────────────────────────────────────────────────────────
const coreValues = [
  {
    id: 1,
    value: "Reliability",
    description: "We deliver dependable solutions that meet commitments, timelines, and performance expectations without compromise",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    accent: "#F59E0B",
  },
  {
    id: 2,
    value: "Accountability",
    description: "We take full responsibility for our actions, decisions, and project outcomes, ensuring transparency and trust.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8M12 8l4 4-4 4" />
      </svg>
    ),
    accent: "#F59E0B",
  },
  {
    id: 3,
    value: "Innovation",
    description: "We embrace forward-thinking engineering practices and continuous improvement to provide efficient and modern solutions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    accent: "#F59E0B",
  },
  {
    id: 4,
    value: "Integrity",
    description: "We uphold the highest ethical standards in all our business dealings and professional engagements.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    accent: "#F59E0B",
  },
  {
    id: 5,
    value: "Excellence",
    description: "We are committed to quality, precision, and superior workmanship in every project we undertake.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      </svg>
    ),
    accent: "#F59E0B",
  },
  {
    id: 6,
    value: "Respect",
    description: "We value our clients, partners, employees, and communities, fostering collaboration and mutual trust.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    accent: "#F59E0B",
  },
  {
    id: 7,
    value: "Ownership",
    description: "We approach every project with dedication and pride, treating our clients’ challenges as our own.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    accent: "#F59E0B",
  },
];

// ── Timeline ──────────────────────────────────────────────────────────────────
// const timeline = [
//   { 
//     year: "2019", 
//     title: "Company Founded", 
//     desc: "Raniero Engineering Nig. Limited was established with a vision to deliver reliable, innovative, and client-focused engineering solutions across Nigeria." 
//   },
//   { 
//     year: "2020", 
//     title: "First Major Projects", 
//     desc: "Successfully delivered our first facility management and project management engagements for corporate clients, building a reputation for quality and timely execution." 
//   },
//   { 
//     year: "2021", 
//     title: "Service Expansion", 
//     desc: "Expanded our portfolio to include engineering project audits, cost engineering, and asset valuation services — strengthening our technical depth." 
//   },
//   { 
//     year: "2022", 
//     title: "Industrial Growth", 
//     desc: "Entered the oil & gas and manufacturing sectors, providing process establishment, logistics management, and multidisciplinary engineering support." 
//   },
//   { 
//     year: "2023", 
//     title: "Corporate Training Launch", 
//     desc: "Launched our Corporate Engineering Management Training Programme, equipping professionals and organisations with practical engineering and leadership expertise." 
//   },
//   { 
//     year: "2024", 
//     title: "Operational Strengthening", 
//     desc: "Enhanced internal systems, quality control processes, and compliance frameworks to improve efficiency, transparency, and project delivery standards." 
//   },
//   { 
//     year: "2025", 
//     title: "Regional Expansion", 
//     desc: "Expanded operations beyond core markets, building strategic partnerships and increasing presence across multiple regions in Nigeria and West Africa." 
//   },
//   { 
//     year: "2026", 
//     title: "Global Positioning", 
//     desc: "Positioned Raniero Engineering as a globally competitive engineering solutions provider through innovation, strategic collaborations, and international project engagements." 
//   },
// ];
// I don't think I'll be needing this at the moment though "StandBy"

export default function About() {
  return (
    <>
    <Navbar />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;0,600;1,400&family=Barlow+Condensed:wght@600;700;800&family=Lora:ital,wght@0,400;1,400&display=swap');

        .ap-root    { font-family: 'Barlow', sans-serif; }
        .ap-display { font-family: 'Barlow Condensed', sans-serif; }
        .ap-serif   { font-family: 'Lora', serif; }

        /* ─── HERO ─────────────────────────────────────── */
        .ap-hero {
          background: #0A1F44;
          background-image:
            radial-gradient(ellipse 80% 60% at 50% -10%, rgba(18,58,115,0.8) 0%, transparent 65%),
            linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px);
          background-size: auto, 48px 48px, 48px 48px;
          position: relative; overflow: hidden;
        }
        .ap-hero-ring {
          position: absolute; border-radius: 50%;
          border: 1px solid rgba(245,158,11,0.07);
          pointer-events: none;
        }
        .ap-hero-label::before {
          content: ''; display: inline-block;
          width: 36px; height: 3px; background: #F59E0B;
          border-radius: 2px; vertical-align: middle; margin-right: 12px;
        }
        .ap-breadcrumb {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px; font-weight: 600; letter-spacing: 0.15em;
          text-transform: uppercase; text-decoration: none;
          color: rgba(255,255,255,0.4);
          transition: color 0.2s;
        }
        .ap-breadcrumb:hover { color: #F59E0B; }

        /* ─── SECTION UTILITIES ────────────────────────── */
        .ap-section-light {
          background-color: #F3F4F6;
          background-image:
            linear-gradient(rgba(10,31,68,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10,31,68,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .ap-section-white { background: #ffffff; }
        .ap-section-dark {
          background: #0A1F44;
          background-image:
            radial-gradient(ellipse 70% 50% at 80% 50%, rgba(18,58,115,0.4) 0%, transparent 70%),
            linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px);
          background-size: auto, 48px 48px, 48px 48px;
          position: relative; overflow: hidden;
        }
        .ap-dark-ring {
          position: absolute; border-radius: 50%;
          border: 1px solid rgba(245,158,11,0.06);
          pointer-events: none;
        }

        .ap-label-light::before, .ap-label-dark::before {
          content: ''; display: inline-block;
          width: 36px; height: 3px; background: #F59E0B;
          border-radius: 2px; vertical-align: middle; margin-right: 12px;
        }

        /* ─── STORY SECTION ────────────────────────────── */
        .ap-story-img-wrap { position: relative; overflow: hidden; }
        .ap-story-img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform 0.6s ease;
        }
        .ap-story-img-wrap:hover .ap-story-img { transform: scale(1.04); }
        .ap-story-corner-tl {
          position: absolute; top: -14px; left: -14px;
          width: 70px; height: 70px;
          border-top: 3px solid #F59E0B;
          border-left: 3px solid #F59E0B;
          pointer-events: none;
        }
        .ap-story-corner-br {
          position: absolute; bottom: -14px; right: -14px;
          width: 70px; height: 70px;
          border-bottom: 3px solid rgba(245,158,11,0.3);
          border-right: 3px solid rgba(245,158,11,0.3);
          pointer-events: none;
        }
        .ap-story-year-badge {
          position: absolute; bottom: 24px; left: -20px;
          background: #F59E0B; color: #07152E;
          padding: 14px 18px;
          box-shadow: 0 12px 32px rgba(0,0,0,0.3);
          z-index: 2;
        }

        /* ─── MISSION / VISION ──────────────────────────── */
        .ap-mv-card {
          position: relative; overflow: hidden;
          padding: 40px; flex: 1;
          display: flex; flex-direction: column; gap: 16px;
        }
        .ap-mv-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 3px;
        }
        .ap-mv-icon {
          width: 56px; height: 56px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .ap-mv-icon svg { width: 26px; height: 26px; }

        /* ─── CORE VALUES ───────────────────────────────── */
        .ap-val-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 28px; position: relative; overflow: hidden;
          transition: background 0.3s, transform 0.3s, border-color 0.3s;
        }
        .ap-val-card:hover {
          background: rgba(255,255,255,0.07);
          transform: translateY(-6px);
        }
        .ap-val-card-bar {
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.35s ease;
        }
        .ap-val-card:hover .ap-val-card-bar { transform: scaleX(1); }
        .ap-val-icon {
          width: 48px; height: 48px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px;
        }
        .ap-val-icon svg { width: 22px; height: 22px; }

        /* ─── CEO SECTION ───────────────────────────────── */
        .ap-ceo-img-wrap { position: relative; flex-shrink: 0; }
        .ap-ceo-img {
          width: 100%; height: 100%; object-fit: cover; object-position: top;
          display: block; filter: grayscale(15%);
          transition: filter 0.4s ease;
        }
        .ap-ceo-img-wrap:hover .ap-ceo-img { filter: grayscale(0%); }
        .ap-ceo-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(7,21,46,0.2) 0%, transparent 60%);
        }
        .ap-ceo-name-badge {
          position: absolute; bottom: 0; left: 0; right: 0;
          background: linear-gradient(to top, rgba(7,21,46,0.92) 0%, transparent 100%);
          padding: 32px 24px 20px;
        }
        .ap-ceo-quote-mark {
          font-family: Georgia, serif;
          font-size: 100px; line-height: 0.6;
          color: rgba(245,158,11,0.3);
          display: block; margin-bottom: 16px;
        }

        /* ─── STATS ─────────────────────────────────────── */
        .ap-stat-card {
          background: #fff;
          border: 1px solid #E5E7EB;
          padding: 32px 24px;
          display: flex; flex-direction: column; align-items: center;
          text-align: center; position: relative; overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .ap-stat-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(10,31,68,0.1);
        }
        .ap-stat-card::after {
          content: '';
          position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #F59E0B, #0A1F44);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.35s ease;
        }
        .ap-stat-card:hover::after { transform: scaleX(1); }

        /* ─── TIMELINE ───────────────────────────────────── */
        .ap-timeline-item {
          display: flex; gap: 24px; position: relative;
        }
        .ap-timeline-line {
          display: flex; flex-direction: column; align-items: center;
          flex-shrink: 0;
        }
        .ap-timeline-dot {
          width: 14px; height: 14px; border-radius: 50%;
          background: #F59E0B; border: 2px solid #07152E;
          box-shadow: 0 0 0 3px rgba(245,158,11,0.2);
          flex-shrink: 0; z-index: 1;
          margin-top: 4px;
        }
        .ap-timeline-connector {
          width: 2px; flex: 1;
          background: linear-gradient(180deg, rgba(245,158,11,0.4), rgba(245,158,11,0.05));
          margin-top: 4px;
        }

        /* ─── CTA BANNER ─────────────────────────────────── */
        .ap-cta-banner {
          background: linear-gradient(105deg, #0A1F44 0%, #123A73 100%);
          position: relative; overflow: hidden;
        }
        .ap-cta-banner::after {
          content: '';
          position: absolute; top: -80px; right: -80px;
          width: 320px; height: 320px;
          border: 1px solid rgba(245,158,11,0.1);
          border-radius: 50%; pointer-events: none;
        }
        .ap-btn-amber {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase;
          color: #07152E; background: #F59E0B; padding: 14px 32px;
          text-decoration: none; position: relative; overflow: hidden;
          transition: background 0.2s;
        }
        .ap-btn-amber:hover { background: #FBBF24; }
        .ap-btn-amber::before {
          content: ''; position: absolute; inset: 0;
          background: rgba(255,255,255,0.18);
          transform: translateX(-100%) skewX(-15deg);
          transition: transform 0.4s ease;
        }
        .ap-btn-amber:hover::before { transform: translateX(130%) skewX(-15deg); }
        .ap-btn-white-outline {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase;
          color: white; border: 1px solid rgba(255,255,255,0.25);
          padding: 14px 32px; text-decoration: none;
          transition: background 0.2s, border-color 0.2s;
        }
        .ap-btn-white-outline:hover {
          background: rgba(255,255,255,0.07);
          border-color: rgba(255,255,255,0.5);
        }

        /* ─── MISC ───────────────────────────────────────── */
        .ap-rule-amber { height: 1px; background: linear-gradient(90deg, #F59E0B, transparent); }
        .ap-rule-light { height: 1px; background: linear-gradient(90deg, #E5E7EB, transparent); }
        .ap-rule-white { height: 1px; background: linear-gradient(90deg, rgba(255,255,255,0.1), transparent); }

        /* page enter animation */
        @keyframes ap-fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ap-fade-up { animation: ap-fade-up 0.6s ease forwards; }
        .ap-fade-up-1 { animation-delay: 0.05s; opacity: 0; }
        .ap-fade-up-2 { animation-delay: 0.15s; opacity: 0; }
        .ap-fade-up-3 { animation-delay: 0.25s; opacity: 0; }
        .ap-fade-up-4 { animation-delay: 0.35s; opacity: 0; }
      `}</style>

      <div className="ap-root" style={{ paddingTop: 70 }}>

        {/* ═══════════════════════════════════════════════════
            1. HERO
        ═══════════════════════════════════════════════════ */}
        <div className="ap-hero py-24 px-4 sm:px-6 lg:px-8">
          <div className="ap-hero-ring" style={{ width: 600, height: 600, top: -250, right: -200 }} />
          <div className="ap-hero-ring" style={{ width: 300, height: 300, bottom: -80, left: -100, borderColor: 'rgba(59,130,246,0.05)' }} />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Breadcrumb */}
            <div className="ap-fade-up ap-fade-up-1 flex items-center gap-2 mb-10">
              <Link to="/" className="ap-breadcrumb">
                <svg style={{ width: 12, height: 12 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Home
              </Link>
              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 12 }}>/</span>
              <span className="ap-display uppercase tracking-[0.15em] font-600" style={{ fontSize: 11, color: '#F59E0B' }}>About Us</span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
              <div>
                <p className="ap-hero-label ap-fade-up ap-fade-up-1 ap-display uppercase tracking-[0.2em] text-amber-400 font-600 mb-4" style={{ fontSize: '11px' }}>
                  Who We Are
                </p>
                <h1 className="ap-fade-up ap-fade-up-2 ap-display font-800 uppercase text-white leading-none" style={{ fontSize: 'clamp(48px, 7vw, 88px)', letterSpacing: '-0.02em' }}>
                  Engineering
                  <br />
                  <span style={{ color: '#F59E0B' }}>with Purpose</span>
                </h1>
              </div>
              <p className="ap-fade-up ap-fade-up-3 text-blue-200/60 leading-relaxed max-w-md" style={{ fontSize: '16px' }}>
                Since 2019, Raniero Engineering Nig. Limited has been strategically positioned to deliver wide-ranging, efficient engineering solutions anchored on integrity, driven by purpose.
              </p>
            </div>
          </div>
        </div>


        {/* ═══════════════════════════════════════════════════
            2. COMPANY STORY
        ═══════════════════════════════════════════════════ */}
        <div className="ap-section-light py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

              {/* Image */}
              <div className="w-full lg:w-[480px] flex-shrink-0 ap-story-img-wrap" style={{ height: 520 }}>
                <img
                  src="/images/growthstory.png"
                  alt="CEO of Raniero Engineering Nig Limited"
                  className="ap-story-img"
                />
                <div className="ap-story-corner-tl" />
                <div className="ap-story-corner-br" />
                <div className="ap-story-year-badge">
                  <span className="ap-display font-800 text-[#07152E]" style={{ fontSize: 36, lineHeight: 1 }}>2019</span>
                  <span className="ap-display font-700 uppercase text-[#07152E]" style={{ fontSize: 9, letterSpacing: '0.2em', marginTop: 4, display: 'block' }}>Founded</span>
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 flex flex-col gap-6">
                <p className="ap-label-light ap-display uppercase tracking-[0.2em] text-amber-500 font-600" style={{ fontSize: '11px' }}>
                  Our Story
                </p>
                <h2 className="ap-display font-800 uppercase text-[#0A1F44] leading-none" style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.01em' }}>
                  How Raniero
                  <br /><span style={{ color: '#4B5563' }}>Came to Be</span>
                </h2>

                <div className="flex flex-col gap-4" style={{ color: '#4B5563', fontSize: '15px', lineHeight: 1.8 }}>
                  <p>
                    <strong style={{ color: '#0A1F44', fontWeight: 600 }}>Raniero Engineering Nig. Limited was established in 2019</strong> with a clear and deliberate purpose to provide clients across Nigeria with access to wide-ranging, efficient, and professionally managed engineering solutions.
                  </p>
                  <p>
                    Founded at a time when the Nigerian engineering landscape demanded more accountability, more flexibility, and more genuine value from its service providers, Raniero set out to be different. Not just in what we deliver, but in <em style={{ color: '#0A1F44' }}>how</em> we deliver it.
                  </p>
                  <p>
                    Our approach has always been client-first. We recognised early that every client operates within unique constraints including different budgets, different timelines, different expectations. So we built an organisation that could flex to meet those constraints without compromising on quality or cutting corners.
                  </p>
                  <p>
                    Today, Raniero Engineering serves clients across commercial construction, oil and gas, manufacturing, and corporate facilities — providing services that span the full engineering lifecycle, from <strong style={{ color: '#0A1F44', fontWeight: 600 }}>conceptualization through design to execution and audit.</strong>
                  </p>
                </div>

                <div className="ap-rule-light" />

                {/* Timeline */}
                {/* <div className="flex flex-col gap-0">
                  {timeline.map((item, i) => (
                    <div key={i} className="ap-timeline-item pb-6">
                      <div className="ap-timeline-line">
                        <div className="ap-timeline-dot" />
                        {i < timeline.length - 1 && <div className="ap-timeline-connector" />}
                      </div>
                      <div style={{ paddingTop: 1 }}>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="ap-display font-700 text-amber-500 uppercase" style={{ fontSize: '13px', letterSpacing: '0.1em' }}>{item.year}</span>
                          <span className="ap-display font-700 uppercase text-[#0A1F44]" style={{ fontSize: '14px' }}>{item.title}</span>
                        </div>
                        <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: 1.65 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
        </div>


        {/* ═══════════════════════════════════════════════════
            3. MISSION & VISION
        ═══════════════════════════════════════════════════ */}
        <div className="ap-section-white py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <p className="ap-label-light ap-display uppercase tracking-[0.2em] text-amber-500 font-600 mb-3" style={{ fontSize: '11px' }}>
                Purpose & Direction
              </p>
              <h2 className="ap-display font-800 uppercase text-[#0A1F44] leading-none" style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.01em' }}>
                Mission & Vision
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">

              {/* Mission */}
              <div className="ap-mv-card flex-1" style={{ background: '#0A1F44' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: '#F59E0B' }} />
                <div className="ap-mv-icon" style={{ background: 'rgba(245,158,11,0.15)' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" style={{ width: 26, height: 26 }}>
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <span className="ap-display font-700 uppercase tracking-[0.15em] text-amber-400" style={{ fontSize: '11px' }}>Our Mission</span>
                <h3 className="ap-display font-800 uppercase text-white leading-tight" style={{ fontSize: 'clamp(22px, 3vw, 30px)' }}>
                  Delivering Solutions That Matter
                </h3>
                <div className="ap-rule-white" />
                <p className="ap-serif" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: 1.8, fontStyle: 'italic' }}>
                  "To provide clients with wide-ranging, efficient engineering solutions delivered with flexibility, within budget, and on time by a professionally driven team that puts integrity above all else."
                </p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: 1.7, marginTop: 8 }}>
                  Every service we offer, every project we take on, and every relationship we build is guided by this mission. It is not a statement on a wall, it is the standard we hold ourselves to on every engagement.
                </p>
              </div>

              {/* Vision */}
              <div className="ap-mv-card flex-1" style={{ background: '#F3F4F6', border: '1px solid #E5E7EB' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: '#3B82F6' }} />
                <div className="ap-mv-icon" style={{ background: 'rgba(59,130,246,0.12)' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" style={{ width: 26, height: 26 }}>
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h4M18 12h4M12 2v4M12 18v4" />
                    <path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M19.07 4.93l-2.83 2.83M7.76 16.24l-2.83 2.83" />
                  </svg>
                </div>
                <span className="ap-display font-700 uppercase tracking-[0.15em] text-blue-500" style={{ fontSize: '11px' }}>Our Vision</span>
                <h3 className="ap-display font-800 uppercase text-[#0A1F44] leading-tight" style={{ fontSize: 'clamp(22px, 3vw, 30px)' }}>
                  A Global Engineering Presence
                </h3>
                <div className="ap-rule-light" />
                <p className="ap-serif" style={{ color: '#374151', fontSize: '16px', lineHeight: 1.8, fontStyle: 'italic' }}>
                  "To become one of the most reliable and respected engineering solution providers globally known not just for what we build, but for how we build it."
                </p>
                <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: 1.7, marginTop: 8 }}>
                  We are a Nigerian company with global ambitions. Our sights are set beyond our borders to a future where Raniero Engineering is synonymous with trust, excellence, and value in engineering circles worldwide.
                </p>
                {/* Globe visual */}
                <div style={{ marginTop: 'auto', paddingTop: 20, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  {['Nigeria', 'West Africa', 'Global'].map((region, i) => (
                    <span key={i} className="ap-display uppercase font-700" style={{
                      fontSize: '10px', letterSpacing: '0.15em',
                      padding: '4px 12px',
                      background: i === 0 ? 'rgba(59,130,246,0.15)' : i === 1 ? 'rgba(59,130,246,0.08)' : 'rgba(59,130,246,0.04)',
                      color: '#3B82F6', border: '1px solid rgba(59,130,246,0.2)',
                    }}>
                      {i === 2 ? ' ' : ''}{region}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* ═══════════════════════════════════════════════════
            4. CORE VALUES
        ═══════════════════════════════════════════════════ */}
        <div className="ap-section-dark py-24 px-4 sm:px-6 lg:px-8">
          <div className="ap-dark-ring" style={{ width: 600, height: 600, top: -200, right: -200 }} />
          <div className="ap-dark-ring" style={{ width: 300, height: 300, bottom: -80, left: -80, borderColor: 'rgba(59,130,246,0.05)' }} />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
              <div>
                <p className="ap-label-dark ap-display uppercase tracking-[0.2em] text-amber-400 font-600 mb-3" style={{ fontSize: '11px' }}>
                  What We Stand For
                </p>
                <h2 className="ap-display font-800 uppercase text-white leading-none" style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.01em' }}>
                  Our Core
                  <br /><span style={{ color: '#F59E0B' }}>Values</span>
                </h2>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '15px', lineHeight: 1.7, maxWidth: 400 }}>
                These values are not aspirational they are operational. They guide every decision, every interaction, and every deliverable we produce.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {coreValues.map((v) => (
                <div key={v.id} className="ap-val-card">
                  <div className="ap-val-card-bar" style={{ background: v.accent }} />
                  <div className="ap-val-icon" style={{ background: `${v.accent}18` }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke={v.accent} strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}>
                      {v.icon.props.children}
                    </svg>
                  </div>
                  <h3 className="ap-display font-700 uppercase text-white" style={{ fontSize: '18px', letterSpacing: '0.01em' }}>
                    {v.value}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13.5px', lineHeight: 1.7 }}>
                    {v.description}
                  </p>
                  <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', marginTop: 8 }} />
                  <div style={{ width: 28, height: 2, background: v.accent, borderRadius: 1, marginTop: 8 }} />
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* ═══════════════════════════════════════════════════
            5. CEO / LEADERSHIP
        ═══════════════════════════════════════════════════ */}
        <div className="ap-section-light py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <p className="ap-label-light ap-display uppercase tracking-[0.2em] text-amber-500 font-600 mb-3" style={{ fontSize: '11px' }}>
                Our Leadership
              </p>
              <h2 className="ap-display font-800 uppercase text-[#0A1F44] leading-none" style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.01em' }}>
                The Person
                <br /><span style={{ color: '#4B5563' }}>Behind the Vision</span>
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

              {/* CEO Image */}
              <div className="ap-ceo-img-wrap w-full lg:w-96 flex-shrink-0" style={{ height: 520, position: 'relative' }}>
                <img
                  src="/images/ceo.jpeg"
                  alt="CEO — Raniero Engineering"
                  className="ap-ceo-img"
                  style={{ width: '100%', height: '100%' }}
                />
                <div className="ap-ceo-overlay" />
                <div className="ap-ceo-name-badge">
                  <p className="ap-display font-800 uppercase text-white" style={{ fontSize: '20px', letterSpacing: '0.01em' }}>
                    CEO's Name
                  </p>
                  <p style={{ color: '#F59E0B', fontSize: '13px', fontWeight: 600, marginTop: 2 }}>
                    Chief Executive Officer
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', marginTop: 2 }}>
                    Raniero Engineering Nig. Limited
                  </p>
                </div>
                {/* amber corner */}
                <div style={{ position: 'absolute', top: -14, right: -14, width: 60, height: 60, borderTop: '3px solid #F59E0B', borderRight: '3px solid #F59E0B', pointerEvents: 'none' }} />
              </div>

              {/* CEO Content */}
              <div className="flex-1 flex flex-col gap-6">
                <span className="ap-ceo-quote-mark">"</span>
                <blockquote className="ap-serif" style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', color: '#0A1F44', lineHeight: 1.75, fontStyle: 'italic', marginTop: -24 }}>
                  Our approach in doing business is anchored on integrity, simplicity and value for investment. We don't just deliver projects, we build lasting partnerships with every client we serve.
                </blockquote>

                <div className="ap-rule-light" />

                <div className="flex flex-col gap-4" style={{ color: '#6B7280', fontSize: '15px', lineHeight: 1.8 }}>
                  <p>
                    With a deep passion for engineering excellence and a belief that Nigerian businesses deserve world-class technical support, our founder established Raniero Engineering to fill a critical gap in the market.
                  </p>
                  <p>
                    Under their leadership, the company has grown from a focused startup into a multi-discipline engineering firm serving clients across several industry sectors with an eye firmly fixed on the global stage.
                  </p>
                </div>

                {/* CEO credentials */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                  {[
                    { label: 'Founded', value: '2019' },
                    { label: 'Sector Experience', value: '7+ Yrs' },
                    { label: 'Disciplines', value: '8+ Areas' },
                  ].map((c, i) => (
                    <div key={i} style={{ padding: '16px', background: '#fff', border: '1px solid #E5E7EB', textAlign: 'center' }}>
                      <p className="ap-display font-800 text-[#0A1F44]" style={{ fontSize: '24px', letterSpacing: '-0.01em' }}>{c.value}</p>
                      <p className="ap-display uppercase font-600 text-[#9CA3AF]" style={{ fontSize: '9px', letterSpacing: '0.18em', marginTop: 4 }}>{c.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════
            7. BOTTOM CTA
        ═══════════════════════════════════════════════════ */}
        <div className="ap-cta-banner px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="ap-display font-800 uppercase text-white leading-tight" style={{ fontSize: 'clamp(24px, 3vw, 38px)' }}>
                Ready to Work With Us?
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '15px', marginTop: 8 }}>
                Let's discuss how Raniero Engineering can deliver the right solution for your project.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="ap-btn-amber">
                Request Consultation
                <svg style={{ width: 14, height: 14 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link to="/projects" className="ap-btn-white-outline">
                Explore our projects
              </Link>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}