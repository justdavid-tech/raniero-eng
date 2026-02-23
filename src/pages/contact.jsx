// src/pages/ContactPage.jsx
// ─────────────────────────────────────────────────────────────────────────────
// EMAILJS SETUP (free — no backend needed):
//   1. Go to https://emailjs.com → create free account
//   2. Add Email Service (Gmail, Outlook, etc.) → copy SERVICE_ID
//   3. Create Email Template → copy TEMPLATE_ID
//      Template variables to use: {{from_name}}, {{from_email}}, {{phone}},
//      {{service}}, {{message}}
//   4. Go to Account → copy PUBLIC_KEY
//   5. Run: npm install @emailjs/browser
//   6. Replace the three placeholders below with your real IDs
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';

// ── Contact details — replace with real info ──────────────────────────────────
const CONTACT_INFO = {
  phone:    ['+234 815 259 8520', '+234 803 825 8927', '+234 909 156 4695'],
  whatsapp: '2348152598520',   // international format, no + or spaces
  email:    'ranieroengineering@gmail.com',
  address:  'Plot 12, Engineering Close, GRA Phase 2, Abuja, Nigeria.',
  mapSrc:   'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.78244406018!2d7.367466896072045!3d9.024416365005285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1771845484392!5m2!1sen!2sng',
  socials: [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/raniero-engineering',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/ranieroengineering',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/ranieroengineering',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      name: 'X / Twitter',
      href: 'https://twitter.com/ranieroeng',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ],
};

const SERVICES = [
  'Project Management',
  'Corporate Engineering Training',
  'Facility Management / Home Movement',
  'Design & Execution of Engineering Projects',
  'Operation & Logistics Services',
  'Process & Procedure Establishment',
  'Engineering Project Audit',
  'Cost Engineering / Asset Valuation',
  'General Enquiry',
];

// ── Input component ────────────────────────────────────────────────────────────
function Field({ label, error, children }) {
  return (
    <div className="cp-field">
      <label className="cp-label">{label}</label>
      {children}
      {error && <span className="cp-error">{error}</span>}
    </div>
  );
}

// ── Info card ──────────────────────────────────────────────────────────────────
function InfoCard({ icon, label, value, href, accent = '#F59E0B' }) {
  const content = (
    <div className="cp-info-card">
      <div className="cp-info-icon" style={{ background: `${accent}15`, color: accent }}>
        {icon}
      </div>
      <div>
        <p className="cp-info-label">{label}</p>
        <p className="cp-info-value">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>{content}</a> : content;
}

// ── Main component ─────────────────────────────────────────────────────────────
export default function Contact() {
  const formRef = useRef();
  const [fields, setFields] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  // ── Validation ──────────────────────────────────────────────────────────────
  function validate() {
    const e = {};
    if (!fields.name.trim())                           e.name    = 'Please enter your full name.';
    if (!fields.email.trim())                          e.email   = 'Please enter your email address.';
    else if (!/\S+@\S+\.\S+/.test(fields.email))       e.email   = 'Please enter a valid email address.';
    if (!fields.service)                               e.service = 'Please select a service.';
    if (!fields.message.trim())                        e.message = 'Please tell us about your project.';
    else if (fields.message.trim().length < 20)        e.message = 'Please provide a bit more detail (at least 20 characters).';
    return e;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFields(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }));
  }

  // ── Submit ──────────────────────────────────────────────────────────────────
  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus('sending');
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFields({ name: '', email: '', phone: '', service: '', message: '' });
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
    <Navbar />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=Barlow+Condensed:wght@600;700;800&display=swap');

        .cp-root    { font-family: 'Barlow', sans-serif; }
        .cp-display { font-family: 'Barlow Condensed', sans-serif; }

        /* ── Hero ── */
        .cp-hero {
          background: #0A1F44;
          background-image:
            radial-gradient(ellipse 80% 60% at 50% -10%, rgba(18,58,115,0.8) 0%, transparent 65%),
            linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px);
          background-size: auto, 48px 48px, 48px 48px;
          position: relative; overflow: hidden;
        }
        .cp-hero-ring {
          position: absolute; border-radius: 50%;
          border: 1px solid rgba(245,158,11,0.07);
          pointer-events: none;
        }
        .cp-hero-label::before {
          content: ''; display: inline-block;
          width: 36px; height: 3px; background: #F59E0B;
          border-radius: 2px; vertical-align: middle; margin-right: 12px;
        }

        /* ── Main body ── */
        .cp-body {
          background-color: #F3F4F6;
          background-image:
            linear-gradient(rgba(10,31,68,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10,31,68,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        /* ── Form card ── */
        .cp-form-card {
          background: #ffffff;
          border: 1px solid #E5E7EB;
          padding: 44px;
          position: relative;
        }
        .cp-form-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #F59E0B, #0A1F44);
        }

        /* ── Fields ── */
        .cp-field  { display: flex; flex-direction: column; gap: 6px; }
        .cp-label  {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: 0.15em;
          text-transform: uppercase; color: #374151;
        }
        .cp-input, .cp-select, .cp-textarea {
          font-family: 'Barlow', sans-serif;
          font-size: 14px; color: #111827;
          background: #F9FAFB;
          border: 1px solid #E5E7EB;
          padding: 12px 16px;
          outline: none;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
          width: 100%;
        }
        .cp-input:focus, .cp-select:focus, .cp-textarea:focus {
          border-color: #0A1F44;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(10,31,68,0.06);
        }
        .cp-input.error, .cp-select.error, .cp-textarea.error {
          border-color: #EF4444;
          background: #FEF2F2;
        }
        .cp-input::placeholder, .cp-textarea::placeholder { color: #9CA3AF; }
        .cp-select { appearance: none; cursor: pointer; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280' strokeWidth='2'%3E%3Cpath strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 14px center; background-size: 16px; padding-right: 40px; }
        .cp-textarea { resize: vertical; min-height: 130px; }
        .cp-error { font-size: 12px; color: #EF4444; font-weight: 500; }

        /* ── Submit button ── */
        .cp-submit {
          display: flex; align-items: center; justify-content: center; gap: 10px;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
          color: #07152E; background: #F59E0B;
          border: none; cursor: pointer;
          padding: 16px 40px; width: 100%;
          position: relative; overflow: hidden;
          transition: background 0.2s;
        }
        .cp-submit:hover:not(:disabled) { background: #FBBF24; }
        .cp-submit:disabled { opacity: 0.7; cursor: not-allowed; }
        .cp-submit::before {
          content: ''; position: absolute; inset: 0;
          background: rgba(255,255,255,0.18);
          transform: translateX(-100%) skewX(-15deg);
          transition: transform 0.4s ease;
        }
        .cp-submit:hover:not(:disabled)::before { transform: translateX(130%) skewX(-15deg); }

        /* ── Success / Error banners ── */
        .cp-success {
          background: #ECFDF5; border: 1px solid #6EE7B7;
          padding: 20px 24px; display: flex; align-items: flex-start; gap: 12px;
        }
        .cp-error-banner {
          background: #FEF2F2; border: 1px solid #FCA5A5;
          padding: 20px 24px; display: flex; align-items: flex-start; gap: 12px;
        }

        /* ── Info cards ── */
        .cp-info-card {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 18px 20px; background: #fff;
          border: 1px solid #E5E7EB;
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .cp-info-card:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(10,31,68,0.08); }
        .cp-info-icon {
          width: 44px; height: 44px; border-radius: 10px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
        }
        .cp-info-icon svg { width: 20px; height: 20px; }
        .cp-info-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px; font-weight: 700; letter-spacing: 0.15em;
          text-transform: uppercase; color: #9CA3AF; margin-bottom: 4px;
        }
        .cp-info-value { font-size: 14px; font-weight: 500; color: #111827; line-height: 1.5; }

        /* ── WhatsApp button ── */
        .cp-whatsapp {
          display: flex; align-items: center; justify-content: center; gap: 10px;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
          color: white; background: #25D366; padding: 16px;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
        }
        .cp-whatsapp:hover { background: #20bf5b; transform: translateY(-2px); }

        /* ── Social links ── */
        .cp-social-btn {
          display: flex; align-items: center; justify-content: center;
          width: 44px; height: 44px;
          background: #F3F4F6; border: 1px solid #E5E7EB; color: #4B5563;
          text-decoration: none;
          transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s;
        }
        .cp-social-btn:hover {
          background: #0A1F44; color: white;
          border-color: #0A1F44; transform: translateY(-3px);
        }

        /* ── Map ── */
        .cp-map-wrap {
          position: relative; overflow: hidden;
          border: 1px solid #E5E7EB;
        }
        .cp-map-wrap iframe { display: block; width: 100%; border: none; }

        /* ── Sidebar ── */
        .cp-sidebar-section { display: flex; flex-direction: column; gap: 8px; }
        .cp-sidebar-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: 0.2em;
          text-transform: uppercase; color: #9CA3AF;
          margin-bottom: 4px;
        }

        /* ── Rule ── */
        .cp-rule { height: 1px; background: linear-gradient(90deg, #E5E7EB, transparent); }

        /* breadcrumb */
        .cp-breadcrumb {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px; font-weight: 600; letter-spacing: 0.15em;
          text-transform: uppercase; text-decoration: none;
          color: rgba(255,255,255,0.4); transition: color 0.2s;
        }
        .cp-breadcrumb:hover { color: #F59E0B; }

        /* spinner */
        @keyframes cp-spin { to { transform: rotate(360deg); } }
        .cp-spinner {
          width: 16px; height: 16px; border: 2px solid rgba(7,21,46,0.3);
          border-top-color: #07152E; border-radius: 50%;
          animation: cp-spin 0.7s linear infinite;
        }

        /* char counter */
        .cp-char-count { font-size: 11px; color: #9CA3AF; text-align: right; }
      `}</style>

      <div className="cp-root" style={{ paddingTop: 70 }}>

        {/* ── HERO ── */}
        <div className="cp-hero py-20 px-4 sm:px-6 lg:px-8">
          <div className="cp-hero-ring" style={{ width: 500, height: 500, top: -200, right: -180 }} />
          <div className="cp-hero-ring" style={{ width: 280, height: 280, bottom: -60, left: -80, borderColor: 'rgba(59,130,246,0.05)' }} />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex items-center gap-2 mb-8">
              <Link to="/" className="cp-breadcrumb">
                <svg style={{ width: 12, height: 12 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Home
              </Link>
              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 12 }}>/</span>
              <span className="cp-display uppercase tracking-[0.15em] font-600" style={{ fontSize: 11, color: '#F59E0B' }}>Contact</span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div>
                <p className="cp-hero-label cp-display uppercase tracking-[0.2em] text-amber-400 font-600 mb-3" style={{ fontSize: '11px' }}>
                  Get in Touch
                </p>
                <h1 className="cp-display font-800 uppercase text-white leading-none" style={{ fontSize: 'clamp(44px, 6vw, 80px)', letterSpacing: '-0.02em' }}>
                  Let's Start
                  <br /><span style={{ color: '#F59E0B' }}>a Conversation</span>
                </h1>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '16px', lineHeight: 1.7, maxWidth: 400 }}>
                Whether you have a project in mind, need a consultation, or simply want to learn more about our services, we'd love to hear from you.
              </p>
            </div>

            {/* Availability strip */}
            <div className="mt-12 flex flex-wrap items-center gap-6">
              {[
                { dot: '#10B981', text: 'Available Monday – Saturday' },
                { dot: '#F59E0B', text: 'Response within 24 hours' },
                { dot: '#3B82F6', text: 'Free initial consultation' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: item.dot, display: 'inline-block', flexShrink: 0 }} />
                  <span className="cp-display uppercase font-600" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.12em' }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* ── MAIN BODY ── */}
        <div className="cp-body py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-10">

              {/* ── LEFT: Form ── */}
              <div className="flex-1">
                <div className="cp-form-card">
                  <h2 className="cp-display font-800 uppercase text-[#0A1F44] mb-1" style={{ fontSize: '26px', letterSpacing: '-0.01em' }}>
                    Send Us a Message
                  </h2>
                  <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: 28 }}>
                    Fill in the form below and we'll get back to you within 24 hours.
                  </p>

                  {/* ── Success state ── */}
                  {status === 'success' && (
                    <div className="cp-success mb-6">
                      <svg style={{ width: 22, height: 22, color: '#10B981', flexShrink: 0, marginTop: 1 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      <div>
                        <p className="cp-display font-700 uppercase text-[#065F46]" style={{ fontSize: '15px' }}>Message Sent Successfully!</p>
                        <p style={{ fontSize: '13px', color: '#047857', marginTop: 3 }}>
                          Thank you for reaching out. A member of the Raniero Engineering team will be in touch within 24 hours.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* ── Error state ── */}
                  {status === 'error' && (
                    <div className="cp-error-banner mb-6">
                      <svg style={{ width: 20, height: 20, color: '#EF4444', flexShrink: 0, marginTop: 2 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
                      </svg>
                      <div>
                        <p className="cp-display font-700 uppercase text-[#991B1B]" style={{ fontSize: '14px' }}>Message Failed to Send</p>
                        <p style={{ fontSize: '13px', color: '#B91C1C', marginTop: 3 }}>
                          Something went wrong. Please try again, or reach us directly on WhatsApp or by email.
                        </p>
                      </div>
                    </div>
                  )}

                  <form ref={formRef} onSubmit={handleSubmit} noValidate>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

                      {/* Name + Email */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="grid-cols-2-responsive">
                        <Field label="Full Name *" error={errors.name}>
                          <input
                            className={`cp-input ${errors.name ? 'error' : ''}`}
                            type="text" name="from_name"
                            placeholder="e.g. Emeka Okonkwo"
                            value={fields.name}
                            onChange={handleChange}
                          />
                        </Field>
                        <Field label="Email Address *" error={errors.email}>
                          <input
                            className={`cp-input ${errors.email ? 'error' : ''}`}
                            type="email" name="from_email"
                            placeholder="emeka@gmail.com"
                            value={fields.email}
                            onChange={handleChange}
                          />
                        </Field>
                      </div>

                      {/* Phone + Service */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                        <Field label="Phone Number" error={errors.phone}>
                          <input
                            className="cp-input"
                            type="tel" name="phone"
                            placeholder="+234 800 000 0000"
                            value={fields.phone}
                            onChange={handleChange}
                          />
                        </Field>
                        <Field label="Service Interested In *" error={errors.service}>
                          <select
                            className={`cp-select ${errors.service ? 'error' : ''}`}
                            name="service"
                            value={fields.service}
                            onChange={handleChange}
                          >
                            <option value="">Select a service...</option>
                            {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </Field>
                      </div>

                      {/* Message */}
                      <Field label="Your Message *" error={errors.message}>
                        <textarea
                          className={`cp-textarea ${errors.message ? 'error' : ''}`}
                          name="message"
                          placeholder="Tell us about your project, location, timeline, and any specific requirements..."
                          value={fields.message}
                          onChange={handleChange}
                          maxLength={1000}
                        />
                        <span className="cp-char-count">{fields.message.length}/1000</span>
                      </Field>

                      {/* Consent */}
                      <p style={{ fontSize: '12px', color: '#9CA3AF', lineHeight: 1.6 }}>
                        By submitting this form, you agree to be contacted by Raniero Engineering regarding your enquiry. We respect your privacy and will never share your details with third parties.
                      </p>

                      {/* Submit */}
                      <button
                        type="submit"
                        className="cp-submit"
                        disabled={status === 'sending'}
                      >
                        {status === 'sending' ? (
                          <><div className="cp-spinner" /> Sending Message...</>
                        ) : (
                          <>
                            Send Message
                            <svg style={{ width: 16, height: 16 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                              <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                          </>
                        )}
                      </button>

                    </div>
                  </form>
                </div>
              </div>

              {/* ── RIGHT: Sidebar ── */}
              <div style={{ width: '100%', maxWidth: 360, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>

                {/* Contact details */}
                <div style={{ background: '#fff', border: '1px solid #E5E7EB', padding: '28px', display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                    <div style={{ width: 3, height: 20, background: '#F59E0B', borderRadius: 2 }} />
                    <p className="cp-display font-700 uppercase text-[#0A1F44]" style={{ fontSize: '15px', letterSpacing: '0.05em' }}>Contact Details</p>
                  </div>

                  {CONTACT_INFO.phone.map((num, i) => (
                    <InfoCard
                      key={num}
                      label={i === 0 ? 'Phone' : `Alternate Phone ${i}`}
                      value={num}
                      href={`tel:${num}`}
                      accent="#F59E0B"
                      icon={
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.12 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.08 6.08l1.38-.45-.01.01z" />
                        </svg>
                      }
                    />
                  ))}

                  <InfoCard
                    label="Email Address"
                    value={CONTACT_INFO.email}
                    href={`mailto:${CONTACT_INFO.email}`}
                    accent="#3B82F6"
                    icon={
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    }
                  />

                  <InfoCard
                    label="Office Address"
                    value={CONTACT_INFO.address}
                    accent="#10B981"
                    icon={
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    }
                  />
                </div>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hello%20Raniero%20Engineering%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cp-whatsapp"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 22, height: 22 }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12.004 2C6.465 2 2 6.465 2 12.004c0 1.99.58 3.84 1.575 5.398L2 22l4.724-1.536A9.955 9.955 0 0012.004 22C17.543 22 22 17.535 22 12.004 22 6.465 17.543 2 12.004 2zm0 18.15a8.108 8.108 0 01-4.391-1.283l-.314-.187-3.253 1.058 1.074-3.16-.203-.324A8.113 8.113 0 013.85 12.004 8.154 8.154 0 0112.004 3.85a8.154 8.154 0 018.146 8.154 8.154 8.154 0 01-8.146 8.146z" />
                  </svg>
                  Chat on WhatsApp
                </a>

                {/* Social Media */}
                <div style={{ background: '#fff', border: '1px solid #E5E7EB', padding: '24px' }}>
                  <p className="cp-sidebar-title">Follow Us</p>
                  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                    {CONTACT_INFO.socials.map(s => (
                      <a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cp-social-btn"
                        title={s.name}
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                  <p style={{ fontSize: '12px', color: '#9CA3AF', marginTop: 12 }}>
                    Stay updated with our latest projects, insights, and announcements.
                  </p>
                </div>

                {/* Office hours */}
                <div style={{ background: '#0A1F44', padding: '24px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', bottom: -40, right: -40, width: 130, height: 130, borderRadius: '50%', border: '1px solid rgba(245,158,11,0.1)', pointerEvents: 'none' }} />
                  <p className="cp-display font-700 uppercase text-amber-400" style={{ fontSize: '11px', letterSpacing: '0.18em', marginBottom: 14 }}>
                    Office Hours
                  </p>
                  {[
                    { day: 'Monday – Friday', hours: '8:00 AM – 6:00 PM' },
                    { day: 'Saturday',        hours: '9:00 AM – 2:00 PM' },
                    { day: 'Sunday',          hours: 'Closed' },
                  ].map((row, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                      <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>{row.day}</span>
                      <span className="cp-display font-600 uppercase" style={{ fontSize: '12px', color: row.hours === 'Closed' ? '#EF4444' : '#F59E0B', letterSpacing: '0.05em' }}>
                        {row.hours}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* ── MAP ── */}
            <div className="cp-map-wrap mt-10">
              <div style={{ padding: '16px 20px', background: '#fff', borderBottom: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', gap: 10 }}>
                <svg style={{ width: 16, height: 16, color: '#F59E0B' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <p className="cp-display font-700 uppercase text-[#0A1F44]" style={{ fontSize: '13px', letterSpacing: '0.08em' }}>
                  Our Location: Abuja, Nigeria
                </p>
              </div>
              <iframe
                src={CONTACT_INFO.mapSrc}
                height="380"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Raniero Engineering Office Location"
              />
            </div>

          </div>
        </div>

        {/* ── BOTTOM STRIP ── */}
        <div style={{ background: '#0A1F44', padding: '20px 24px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)' }}>
              Raniero Engineering Nig. Limited — Port Harcourt, Nigeria
            </p>
            <Link to="/" className="cp-breadcrumb">
              <svg style={{ width: 12, height: 12 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}