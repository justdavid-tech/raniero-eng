// src/pages/TermsOfService.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=Barlow+Condensed:wght@600;700;800&display=swap');

        .legal-root    { font-family: 'Barlow', sans-serif; color: #374151; line-height: 1.7; }
        .legal-display { font-family: 'Barlow Condensed', sans-serif; }

        .legal-hero {
          background: #0A1F44;
          padding: 80px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .legal-hero-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          text-transform: uppercase;
          color: white;
          font-size: clamp(32px, 5vw, 48px);
          max-width: 800px;
          margin: 0 auto;
          letter-spacing: -0.01em;
        }

        .legal-breadcrumb {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          text-decoration: none;
          color: rgba(255,255,255,0.4);
          margin-bottom: 24px;
          transition: color 0.2s;
        }
        .legal-breadcrumb:hover { color: #F59E0B; }

        .legal-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 64px 24px;
        }

        .legal-section { margin-bottom: 40px; }
        .legal-section h2 {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 20px;
          font-weight: 700;
          text-transform: uppercase;
          color: #0A1F44;
          margin-bottom: 16px;
          letter-spacing: 0.05em;
          border-left: 3px solid #F59E0B;
          padding-left: 12px;
        }
        .legal-section p { margin-bottom: 16px; }
        .legal-section ul { margin-bottom: 16px; padding-left: 20px; }
        .legal-section li { margin-bottom: 8px; }

        .last-updated {
          font-size: 12px;
          color: #9CA3AF;
          margin-top: 48px;
          text-align: center;
        }
      `}</style>

      <div className="legal-root" style={{ paddingTop: 70 }}>
        <header className="legal-hero">
          <div className="max-w-7xl mx-auto">
            <Link to="/" className="legal-breadcrumb">
              <svg style={{ width: 12, height: 12 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Home
            </Link>
            <h1 className="legal-hero-title">Terms of Service</h1>
          </div>
        </header>

        <main className="legal-content">
          <div className="legal-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you agree to comply with and be bound by the following Terms of Service. If you do not agree to these terms, please do not use this website.
            </p>
          </div>

          <div className="legal-section">
            <h2>2. Description of Service</h2>
            <p>
              Raniero Engineering Nig. Limited provides engineering consulting, project management, facility management, and technical training services. The content on this website is for informational purposes and to facilitate communication regarding these services.
            </p>
          </div>

          <div className="legal-section">
            <h2>3. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and images, is the property of Raniero Engineering Nig. Limited and is protected by intellectual property laws. Unauthorised use of any content is prohibited.
            </p>
          </div>

          <div className="legal-section">
            <h2>4. User Responsibilities</h2>
            <p>
              Users agree to use the website only for lawful purposes. You are prohibited from using the website to transmit any material that is defamatory, offensive, or otherwise violates the rights of others.
            </p>
          </div>

          <div className="legal-section">
            <h2>5. Limitation of Liability</h2>
            <p>
              Raniero Engineering Nig. Limited shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our website or services. While we strive for accuracy, we do not warrant that all content on the site is error-free.
            </p>
          </div>

          <div className="legal-section">
            <h2>6. Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the Federal Republic of Nigeria.
            </p>
          </div>

          <div className="legal-section">
            <h2>7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of the site signifies your acceptance of the revised terms.
            </p>
          </div>

          <p className="last-updated">Last Updated: March 16, 2026</p>
        </main>
      </div>
      <Footer />
    </>
  );
}
