import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-root">
      <style>{`
        .footer-root {
          background-color: #0A1F44;
          color: #ffffff;
          padding: 80px 24px 40px;
          font-family: 'Barlow', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .footer-container {
          max-w: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 48px;
          position: relative;
          z-index: 1;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .footer-logo {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 28px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: -0.02em;
          color: #ffffff;
          text-decoration: none;
        }

        .footer-logo span {
          color: #F59E0B;
        }

        .footer-description {
          color: rgba(255, 255, 255, 0.7);
          font-size: 15px;
          line-height: 1.6;
          max-width: 320px;
        }

        .footer-socials {
          display: flex;
          gap: 16px;
        }

        .social-link {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .social-link:hover {
          background: #F59E0B;
          color: #0A1F44;
          transform: translateY(-3px);
          border-color: #F59E0B;
        }

        .footer-heading {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 24px;
          color: #F59E0B;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-link {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 15px;
          transition: color 0.2s ease;
          display: inline-block;
        }

        .footer-link:hover {
          color: #ffffff;
          padding-left: 4px;
        }

        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-item {
          display: flex;
          gap: 12px;
          font-size: 15px;
          color: rgba(255, 255, 255, 0.7);
        }

        .contact-icon {
          color: #F59E0B;
          flex-shrink: 0;
        }

        .footer-bottom {
          max-width: 1280px;
          margin: 60px auto 0;
          padding-top: 32px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
          position: relative;
          z-index: 1;
        }

        .copyright {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
        }

        .legal-links {
          display: flex;
          gap: 24px;
        }

        .legal-link {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          transition: color 0.2s;
        }

        .legal-link:hover {
          color: #ffffff;
        }

        .footer-accent {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(245, 158, 11, 0.05) 0%, transparent 70%);
          bottom: -250px;
          right: -100px;
          pointer-events: none;
        }

        @media (max-width: 640px) {
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>

      <div className="footer-accent" />

      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Raniero<span>.</span>
          </Link>
          <p className="footer-description">
            Leading engineering solutions provider delivering excellence in project management, facility management, and industry-specific training.
          </p>
          <div className="footer-socials">
            <a href="#" className="social-link" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-1 2-1.7 3c1.2 0 2.4.5 3.3 1.3-.8.7-1.7 1.2-2.7 1.5.3 4-2.2 8-7.5 8-2.6 0-5.1-.7-7.2-2.1.3 0 .6.1.9.1 2.1 0 4.1-.7 5.7-2-2-.1-3.7-1.3-4.3-3.1.3 0 .6.1.9.1.4 0 .8-.1 1.2-.2-2.1-.4-3.7-2.3-3.7-4.5 0 0 .6.3 1.3.3-1.3-.8-2.1-2.2-2.1-3.8 0-.8.2-1.6.6-2.2 2.2 2.7 5.5 4.5 9.2 4.7-.1-.3-.1-.7-.1-1 0-2.4 2-4.4 4.4-4.4 1.2 0 2.3.5 3.2 1.3.9-.2 1.8-.6 2.6-1.1-.3.9-.9 1.6-1.7 2.1z"/></svg>
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-links">
            <li><Link to="/services/project-management" className="footer-link">Project Management</Link></li>
            <li><Link to="/services/engineering-design" className="footer-link">Engineering Design</Link></li>
            <li><Link to="/services/facility-management" className="footer-link">Facility Management</Link></li>
            <li><Link to="/services/cost-engineering" className="footer-link">Cost Engineering</Link></li>
            <li><Link to="/services/training-process-consulting" className="footer-link">Training & Process Consulting</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-heading">Company</h4>
          <ul className="footer-links">
            <li><Link to="/about" className="footer-link">About Us</Link></li>
            <li><Link to="/projects" className="footer-link">Our Projects</Link></li>
            <li><Link to="/insights" className="footer-link">Insights</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-heading">Contact Us</h4>
          <div className="footer-contact">
            <div className="contact-item">
              <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>123 Engineering Way, Abuja, Nigeria</span>
            </div>
            <div className="contact-item">
              <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>+234 815 259 8520</span>
            </div>
            <div className="contact-item">
              <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span>hello@raniero.engineering</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          © {currentYear} Raniero Engineering. All rights reserved.
        </p>
        <div className="legal-links">
          <Link to="/privacy" className="legal-link">Privacy Policy</Link>
          <Link to="/terms" className="legal-link">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
