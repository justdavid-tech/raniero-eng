// src/pages/PrivacyPolicy.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function PrivacyPolicy() {
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
            <h1 className="legal-hero-title">Privacy Policy</h1>
          </div>
        </header>

        <main className="legal-content">
          <div className="legal-section">
            <h2>Introduction</h2>
            <p>
              At Raniero Engineering Nig. Limited, we respect your privacy and are committed to protecting the personal data we hold about you. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or interact with our services.
            </p>
          </div>

          <div className="legal-section">
            <h2>Information We Collect</h2>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Submit a contact form on our website.</li>
              <li>Request a consultation or quote.</li>
              <li>Subscribe to our insights or newsletters.</li>
              <li>Interact with us via phone, email, or social media.</li>
            </ul>
            <p>This information may include your name, email address, phone number, and any details regarding your engineering needs or project enquiries.</p>
          </div>

          <div className="legal-section">
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul>
              <li>To respond to your enquiries and provide requested services.</li>
              <li>To improve our website functionality and user experience.</li>
              <li>To send updates, insights, or service-related announcements (you can opt out at any time).</li>
              <li>To comply with legal and regulatory obligations.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>Data Security</h2>
            <p>
              We implement industry-standard technical and organisational measures to protect your personal data against unauthorised access, loss, or alteration. However, please note that no method of transmission over the internet is 100% secure.
            </p>
          </div>

          <div className="legal-section">
            <h2>Third-Party Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to outside parties except to trusted third parties who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.
            </p>
          </div>

          <div className="legal-section">
            <h2>Your Rights</h2>
            <p>
              You have the right to request access to the personal information we hold about you, to request corrections, or to ask for its deletion. Please contact us if you wish to exercise these rights.
            </p>
          </div>

          <div className="legal-section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <strong>Email:</strong> ranieroengineering@gmail.com
              <br />
              <strong>Address:</strong> Abuja, Nigeria.
            </p>
          </div>

          <p className="last-updated">Last Updated: March 16, 2026</p>
        </main>
      </div>
      <Footer />
    </>
  );
}
