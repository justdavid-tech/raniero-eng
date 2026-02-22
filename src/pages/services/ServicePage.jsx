// src/pages/services/ServicePage.jsx
// ─────────────────────────────────────────────────────────────────────────────
// REUSABLE SERVICE PAGE TEMPLATE
// To create a new service page:
//   1. Create a new data file e.g. src/data/services/facilityManagement.js
//   2. Export a serviceData object following the same shape as projectManagement.js
//   3. Import it into a thin wrapper page e.g. src/pages/services/FacilityManagement.jsx
//   4. Pass it as <ServicePage data={serviceData} />
//   5. Add the route in App.jsx
// ─────────────────────────────────────────────────────────────────────────────

import { Link } from 'react-router-dom';

export default function ServicePage({ data }) {
  const d = data;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;0,600;1,400&family=Barlow+Condensed:wght@600;700;800&display=swap');

        .sp-root    { font-family: 'Barlow', sans-serif; }
        .sp-display { font-family: 'Barlow Condensed', sans-serif; }

        /* ── HERO ── */
        .sp-hero {
          position: relative; overflow: hidden;
          display: flex; flex-direction: column; justify-content: flex-end;
        }
        .sp-hero-bg {
          position: absolute; inset: 0;
          background-size: cover; background-position: center;
          transition: transform 8s ease;
        }
        .sp-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            105deg,
            rgba(7,21,46,0.92) 0%,
            rgba(10,31,68,0.78) 50%,
            rgba(10,31,68,0.35) 100%
          );
        }
        .sp-hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }
        .sp-hero-ring {
          position: absolute; border-radius: 50%;
          border: 1px solid rgba(245,158,11,0.08);
          pointer-events: none;
        }

        /* breadcrumb */
        .sp-breadcrumb-link {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px; font-weight: 600; letter-spacing: 0.15em;
          text-transform: uppercase; text-decoration: none;
          color: rgba(255,255,255,0.4);
          transition: color 0.2s;
          display: inline-flex; align-items: center; gap: 6px;
        }
        .sp-breadcrumb-link:hover { color: #F59E0B; }

        /* hero label accent */
        .sp-hero-label::before {
          content: ''; display: inline-block;
          width: 32px; height: 2px; background: #F59E0B;
          border-radius: 1px; vertical-align: middle; margin-right: 10px;
        }

        /* ── SECTIONS ── */
        .sp-section-light {
          background-color: #F3F4F6;
          background-image:
            linear-gradient(rgba(10,31,68,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10,31,68,0.028) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .sp-section-white  { background: #ffffff; }
        .sp-section-dark {
          background: #0A1F44;
          background-image:
            radial-gradient(ellipse 70% 50% at 80% 50%, rgba(18,58,115,0.4) 0%, transparent 70%),
            linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px);
          background-size: auto, 48px 48px, 48px 48px;
          position: relative; overflow: hidden;
        }
        .sp-dark-ring {
          position: absolute; border-radius: 50%;
          border: 1px solid rgba(245,158,11,0.06);
          pointer-events: none;
        }

        /* section label */
        .sp-label::before {
          content: ''; display: inline-block;
          width: 32px; height: 3px; background: #F59E0B;
          border-radius: 2px; vertical-align: middle; margin-right: 10px;
        }
        .sp-label-dark { color: #F59E0B; }
        .sp-label-light { color: #F59E0B; }

        /* ── OVERVIEW ── */
        .sp-overview-img {
          position: relative; flex-shrink: 0; overflow: hidden;
        }
        .sp-overview-img img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform 0.6s ease;
        }
        .sp-overview-img:hover img { transform: scale(1.04); }
        .sp-overview-corner-tl {
          position: absolute; top: -12px; left: -12px;
          width: 60px; height: 60px;
          border-top: 3px solid #F59E0B; border-left: 3px solid #F59E0B;
          pointer-events: none;
        }
        .sp-overview-corner-br {
          position: absolute; bottom: -12px; right: -12px;
          width: 60px; height: 60px;
          border-bottom: 3px solid rgba(245,158,11,0.25);
          border-right: 3px solid rgba(245,158,11,0.25);
          pointer-events: none;
        }
        .sp-stat-pill {
          position: absolute; bottom: 20px; left: -18px;
          background: #F59E0B; color: #07152E;
          padding: 12px 18px;
          box-shadow: 0 10px 28px rgba(0,0,0,0.25);
          display: flex; flex-direction: column;
        }

        /* ── DELIVERABLES ── */
        .sp-deliverable-card {
          background: #fff; border: 1px solid #E5E7EB;
          padding: 24px; display: flex; flex-direction: column; gap: 12px;
          position: relative; overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .sp-deliverable-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(10,31,68,0.1);
        }
        .sp-deliverable-bar {
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.35s ease;
        }
        .sp-deliverable-card:hover .sp-deliverable-bar { transform: scaleX(1); }
        .sp-deliverable-icon {
          width: 48px; height: 48px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .sp-deliverable-icon svg { width: 22px; height: 22px; }

        /* ── PROCESS ── */
        .sp-process-step {
          display: flex; gap: 20px; position: relative;
        }
        .sp-process-left {
          display: flex; flex-direction: column; align-items: center;
          flex-shrink: 0; width: 56px;
        }
        .sp-process-num {
          width: 48px; height: 48px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 18px; font-weight: 800;
          flex-shrink: 0; z-index: 1;
          border: 2px solid;
          transition: background 0.25s, color 0.25s;
        }
        .sp-process-step:hover .sp-process-num {
          background: #F59E0B !important;
          color: #07152E !important;
          border-color: #F59E0B !important;
        }
        .sp-process-connector {
          width: 2px; flex: 1; margin-top: 6px;
          background: linear-gradient(180deg, rgba(245,158,11,0.35), rgba(245,158,11,0.05));
        }
        .sp-process-content {
          padding: 4px 0 32px; flex: 1;
        }
        .sp-process-step:last-child .sp-process-content { padding-bottom: 0; }

        /* ── BENEFITS ── */
        .sp-benefit-item {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 18px 20px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          transition: background 0.25s, transform 0.25s;
        }
        .sp-benefit-item:hover {
          background: rgba(255,255,255,0.07);
          transform: translateX(4px);
        }
        .sp-benefit-icon {
          width: 40px; height: 40px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; margin-top: 2px;
        }
        .sp-benefit-icon svg { width: 18px; height: 18px; }

        /* ── CTA BANNER ── */
        .sp-cta {
          background: linear-gradient(105deg, #0A1F44 0%, #123A73 100%);
          position: relative; overflow: hidden;
        }
        .sp-cta::after {
          content: '';
          position: absolute; top: -80px; right: -80px;
          width: 320px; height: 320px;
          border: 1px solid rgba(245,158,11,0.1);
          border-radius: 50%; pointer-events: none;
        }
        .sp-cta::before {
          content: '';
          position: absolute; bottom: -50px; left: 25%;
          width: 180px; height: 180px;
          border: 1px solid rgba(59,130,246,0.07);
          border-radius: 50%; pointer-events: none;
        }
        .sp-btn-amber {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase;
          color: #07152E; background: #F59E0B;
          padding: 14px 32px; text-decoration: none;
          position: relative; overflow: hidden;
          transition: background 0.2s;
        }
        .sp-btn-amber:hover { background: #FBBF24; }
        .sp-btn-amber::before {
          content: ''; position: absolute; inset: 0;
          background: rgba(255,255,255,0.18);
          transform: translateX(-100%) skewX(-15deg);
          transition: transform 0.4s ease;
        }
        .sp-btn-amber:hover::before { transform: translateX(130%) skewX(-15deg); }
        .sp-btn-outline {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase;
          color: white; border: 1px solid rgba(255,255,255,0.25);
          padding: 14px 32px; text-decoration: none;
          transition: background 0.2s, border-color 0.2s;
        }
        .sp-btn-outline:hover {
          background: rgba(255,255,255,0.07);
          border-color: rgba(255,255,255,0.5);
        }

        /* ── RELATED SERVICES ── */
        .sp-related-card {
          display: flex; align-items: center; gap: 14px;
          background: #fff; border: 1px solid #E5E7EB;
          padding: 18px 20px; text-decoration: none; color: inherit;
          transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
          position: relative; overflow: hidden;
        }
        .sp-related-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(10,31,68,0.09);
          border-color: #F59E0B;
        }
        .sp-related-icon {
          width: 44px; height: 44px; border-radius: 10px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
        }
        .sp-related-icon svg { width: 20px; height: 20px; }
        .sp-related-arrow {
          margin-left: auto; flex-shrink: 0;
          transition: transform 0.2s;
        }
        .sp-related-card:hover .sp-related-arrow { transform: translateX(4px); }

        /* misc */
        .sp-rule-light { height: 1px; background: linear-gradient(90deg,#E5E7EB,transparent); }
        .sp-rule-dark  { height: 1px; background: linear-gradient(90deg,rgba(255,255,255,0.08),transparent); }

        /* page fade in */
        @keyframes sp-fade { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        .sp-fade-1 { animation: sp-fade 0.5s 0.05s ease both; }
        .sp-fade-2 { animation: sp-fade 0.5s 0.15s ease both; }
        .sp-fade-3 { animation: sp-fade 0.5s 0.25s ease both; }
        .sp-fade-4 { animation: sp-fade 0.5s 0.35s ease both; }
      `}</style>

      <div className="sp-root" style={{ paddingTop: 70 }}>

        {/* ══════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════ */}
        <div className="sp-hero px-4 sm:px-6 lg:px-8"
          style={{ minHeight: 520, paddingTop: 80, paddingBottom: 72 }}>
          <div className="sp-hero-bg" style={{ backgroundImage: `url(${d.hero.image})` }} />
          <div className="sp-hero-overlay" />
          <div className="sp-hero-grid" />
          <div className="sp-hero-ring" style={{ width: 500, height: 500, top: -180, right: -180 }} />
          <div className="sp-hero-ring" style={{ width: 260, height: 260, bottom: -60, left: -80, borderColor: 'rgba(59,130,246,0.06)' }} />

          <div className="max-w-7xl mx-auto relative z-10 w-full">
            {/* breadcrumb */}
            <div className="sp-fade-1 flex items-center gap-2 mb-10">
              <Link to="/" className="sp-breadcrumb-link">
                <svg style={{ width:11,height:11 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                Home
              </Link>
              <span style={{ color:'rgba(255,255,255,0.2)',fontSize:12 }}>/</span>
              <Link to="/#services" className="sp-breadcrumb-link">Services</Link>
              <span style={{ color:'rgba(255,255,255,0.2)',fontSize:12 }}>/</span>
              <span className="sp-display uppercase tracking-[0.15em] font-600" style={{ fontSize:11, color:'#F59E0B' }}>
                {d.hero.title}
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
              <div className="max-w-2xl">
                {/* category tag */}
                <div className="sp-fade-1 mb-4">
                  <span className="sp-display uppercase font-700"
                    style={{ fontSize:10, letterSpacing:'0.2em', color: d.accent,
                      background:`${d.accent}18`, border:`1px solid ${d.accent}35`,
                      padding:'4px 12px', display:'inline-block' }}>
                    {d.hero.category}
                  </span>
                </div>
                <h1 className="sp-fade-2 sp-display font-800 uppercase text-white leading-none"
                  style={{ fontSize:'clamp(44px,6vw,80px)', letterSpacing:'-0.02em', marginBottom:20 }}>
                  {d.hero.headline.split('\n').map((line,i) => (
                    <span key={i} style={{ display:'block', color: i===1 ? '#F59E0B' : 'white' }}>{line}</span>
                  ))}
                </h1>
                <p className="sp-fade-3" style={{ color:'rgba(255,255,255,0.6)', fontSize:'clamp(14px,1.8vw,17px)', lineHeight:1.75, maxWidth:580 }}>
                  {d.hero.subtitle}
                </p>
              </div>

              {/* hero stats */}
              <div className="sp-fade-4 flex gap-px" style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.08)', flexShrink:0 }}>
                {d.hero.stats.map((s,i) => (
                  <div key={i} style={{ padding:'20px 24px', background:'rgba(7,21,46,0.6)', backdropFilter:'blur(4px)', textAlign:'center', minWidth:100 }}>
                    <p className="sp-display font-800 text-white" style={{ fontSize:28, lineHeight:1, letterSpacing:'-0.02em' }}>{s.value}</p>
                    <p className="sp-display uppercase font-600" style={{ fontSize:'8px', letterSpacing:'0.18em', color:'rgba(255,255,255,0.4)', marginTop:6 }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        {/* ══════════════════════════════════════════════
            OVERVIEW
        ══════════════════════════════════════════════ */}
        <div className="sp-section-light py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

              {/* image */}
              <div className="sp-overview-img w-full lg:w-[460px] flex-shrink-0" style={{ height:480 }}>
                <img src={d.overview.image} alt={d.hero.title} />
                <div className="sp-overview-corner-tl" />
                <div className="sp-overview-corner-br" />
                <div className="sp-stat-pill">
                  <span className="sp-display font-800 text-[#07152E]" style={{ fontSize:28, lineHeight:1 }}>{d.overview.statValue}</span>
                  <span className="sp-display font-700 uppercase text-[#07152E]" style={{ fontSize:'8px', letterSpacing:'0.2em', marginTop:4 }}>{d.overview.statLabel}</span>
                </div>
              </div>

              {/* text */}
              <div className="flex-1 flex flex-col gap-6">
                <p className="sp-label sp-label-light sp-display uppercase tracking-[0.2em] font-600" style={{ fontSize:'11px' }}>
                  Service Overview
                </p>
                <h2 className="sp-display font-800 uppercase text-[#0A1F44] leading-none" style={{ fontSize:'clamp(30px,4vw,48px)', letterSpacing:'-0.01em' }}>
                  {d.overview.heading}
                </h2>
                <div className="flex flex-col gap-4">
                  {d.overview.paragraphs.map((p,i) => (
                    <p key={i} style={{ color:'#4B5563', fontSize:'15px', lineHeight:1.8 }}
                      dangerouslySetInnerHTML={{ __html: p }} />
                  ))}
                </div>
                <div className="sp-rule-light" />
                {/* key highlights */}
                <div className="flex flex-col gap-3">
                  {d.overview.highlights.map((h,i) => (
                    <div key={i} style={{ display:'flex', alignItems:'center', gap:10 }}>
                      <span style={{ width:6, height:6, borderRadius:'50%', background: d.accent, flexShrink:0 }} />
                      <span style={{ fontSize:'14px', color:'#374151', fontWeight:500 }}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* ══════════════════════════════════════════════
            DELIVERABLES
        ══════════════════════════════════════════════ */}
        <div className="sp-section-white py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <p className="sp-label sp-label-light sp-display uppercase tracking-[0.2em] font-600 mb-3" style={{ fontSize:'11px' }}>
                What You Get
              </p>
              <h2 className="sp-display font-800 uppercase text-[#0A1F44] leading-none" style={{ fontSize:'clamp(30px,4vw,50px)', letterSpacing:'-0.01em' }}>
                {d.deliverables.heading}
              </h2>
              <p style={{ color:'#6B7280', fontSize:'15px', maxWidth:540, margin:'14px auto 0', lineHeight:1.7 }}>
                {d.deliverables.subtext}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {d.deliverables.items.map((item,i) => (
                <div key={i} className="sp-deliverable-card">
                  <div className="sp-deliverable-bar" style={{ background: d.accent }} />
                  <div className="sp-deliverable-icon" style={{ background:`${d.accent}15` }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke={d.accent} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ width:22,height:22 }}>
                      {item.icon}
                    </svg>
                  </div>
                  <h3 className="sp-display font-700 uppercase text-[#0A1F44]" style={{ fontSize:'16px' }}>{item.title}</h3>
                  <p style={{ fontSize:'13.5px', color:'#6B7280', lineHeight:1.7 }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* ══════════════════════════════════════════════
            PROCESS
        ══════════════════════════════════════════════ */}
        <div className="sp-section-dark py-24 px-4 sm:px-6 lg:px-8">
          <div className="sp-dark-ring" style={{ width:600,height:600,top:-200,right:-200 }} />
          <div className="sp-dark-ring" style={{ width:300,height:300,bottom:-80,left:-80,borderColor:'rgba(59,130,246,0.05)' }} />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row gap-16">

              {/* left heading */}
              <div className="lg:w-80 flex-shrink-0 flex flex-col gap-5">
                <p className="sp-label sp-label-dark sp-display uppercase tracking-[0.2em] font-600" style={{ fontSize:'11px' }}>
                  How We Work
                </p>
                <h2 className="sp-display font-800 uppercase text-white leading-none" style={{ fontSize:'clamp(30px,4vw,48px)', letterSpacing:'-0.01em' }}>
                  {d.process.heading}
                </h2>
                <p style={{ color:'rgba(255,255,255,0.5)', fontSize:'15px', lineHeight:1.75 }}>
                  {d.process.subtext}
                </p>
                <div className="sp-rule-dark" />
                <div style={{ padding:'20px', background:'rgba(245,158,11,0.08)', borderLeft:'3px solid #F59E0B' }}>
                  <p style={{ color:'rgba(255,255,255,0.7)', fontSize:'14px', lineHeight:1.7, fontStyle:'italic' }}>
                    {d.process.quote}
                  </p>
                </div>
              </div>

              {/* right steps */}
              <div className="flex-1">
                {d.process.steps.map((step,i) => (
                  <div key={i} className="sp-process-step">
                    <div className="sp-process-left">
                      <div className="sp-process-num"
                        style={{ background:'rgba(255,255,255,0.05)', color: d.accent, borderColor:`${d.accent}40` }}>
                        {String(i+1).padStart(2,'0')}
                      </div>
                      {i < d.process.steps.length - 1 && <div className="sp-process-connector" />}
                    </div>
                    <div className="sp-process-content">
                      <h3 className="sp-display font-700 uppercase text-white mb-2" style={{ fontSize:'17px' }}>
                        {step.title}
                      </h3>
                      <p style={{ color:'rgba(255,255,255,0.55)', fontSize:'14px', lineHeight:1.75 }}>
                        {step.description}
                      </p>
                      {step.tag && (
                        <span className="sp-display uppercase font-700" style={{ fontSize:'9px', letterSpacing:'0.18em',
                          color: d.accent, background:`${d.accent}15`, padding:'3px 10px', display:'inline-block', marginTop:10 }}>
                          {step.tag}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        {/* ══════════════════════════════════════════════
            BENEFITS
        ══════════════════════════════════════════════ */}
        <div className="sp-section-light py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-start">

              {/* left */}
              <div className="lg:w-96 flex-shrink-0 flex flex-col gap-5">
                <p className="sp-label sp-label-light sp-display uppercase tracking-[0.2em] font-600" style={{ fontSize:'11px' }}>
                  Why Raniero
                </p>
                <h2 className="sp-display font-800 uppercase text-[#0A1F44] leading-none" style={{ fontSize:'clamp(30px,4vw,48px)', letterSpacing:'-0.01em' }}>
                  {d.benefits.heading}
                </h2>
                <p style={{ color:'#6B7280', fontSize:'15px', lineHeight:1.75 }}>
                  {d.benefits.subtext}
                </p>
                <Link to="/contact" className="sp-btn-amber self-start">
                  Request a Consultation
                  <svg style={{ width:14,height:14 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>

              {/* right benefits list */}
              <div className="flex-1 flex flex-col gap-3">
                {d.benefits.items.map((b,i) => (
                  <div key={i} style={{
                    display:'flex', alignItems:'flex-start', gap:14,
                    padding:'18px 20px', background:'#fff', border:'1px solid #E5E7EB',
                    borderLeft:`3px solid ${i%2===0 ? d.accent : '#0A1F44'}`,
                    transition:'transform 0.25s, box-shadow 0.25s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform='translateX(6px)'; e.currentTarget.style.boxShadow='0 8px 24px rgba(10,31,68,0.08)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform='translateX(0)'; e.currentTarget.style.boxShadow='none'; }}>
                    <div style={{ width:38, height:38, borderRadius:8, background:`${d.accent}15`,
                      display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:2 }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke={d.accent} strokeWidth={1.5}
                        strokeLinecap="round" strokeLinejoin="round" style={{ width:18,height:18 }}>
                        {b.icon}
                      </svg>
                    </div>
                    <div>
                      <p className="sp-display font-700 uppercase text-[#0A1F44]" style={{ fontSize:'15px' }}>{b.title}</p>
                      <p style={{ fontSize:'13.5px', color:'#6B7280', lineHeight:1.7, marginTop:4 }}>{b.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        {/* ══════════════════════════════════════════════
            CTA
        ══════════════════════════════════════════════ */}
        <div className="sp-cta px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <p className="sp-display uppercase font-700 text-amber-400 mb-2" style={{ fontSize:'11px', letterSpacing:'0.2em' }}>
                Ready to Get Started?
              </p>
              <h2 className="sp-display font-800 uppercase text-white leading-tight" style={{ fontSize:'clamp(28px,4vw,46px)' }}>
                {d.cta.heading}
              </h2>
              <p style={{ color:'rgba(255,255,255,0.5)', fontSize:'15px', marginTop:12, lineHeight:1.7 }}>
                {d.cta.subtext}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link to="/contact" className="sp-btn-amber">
                {d.cta.primaryBtn}
                <svg style={{ width:14,height:14 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <a href={`https://wa.me/${d.cta.whatsapp}`} target="_blank" rel="noopener noreferrer" className="sp-btn-outline">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width:16,height:16 }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12.004 2C6.465 2 2 6.465 2 12.004c0 1.99.58 3.84 1.575 5.398L2 22l4.724-1.536A9.955 9.955 0 0012.004 22C17.543 22 17.535 22 22 12.004 22 6.465 17.543 2 12.004 2zm0 18.15a8.108 8.108 0 01-4.391-1.283l-.314-.187-3.253 1.058 1.074-3.16-.203-.324A8.113 8.113 0 013.85 12.004 8.154 8.154 0 0112.004 3.85a8.154 8.154 0 018.146 8.154 8.154 8.154 0 01-8.146 8.146z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
