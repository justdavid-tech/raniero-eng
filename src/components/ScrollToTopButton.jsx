import { useState, useEffect } from 'react';

export default function ScrollToTopButton() {
  const [visible,  setVisible]  = useState(false);
  const [hovered,  setHovered]  = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrollTop    = window.scrollY;
      const docHeight    = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled     = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setVisible(scrollTop > 400);
      setProgress(scrolled);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // SVG circle progress ring values
  const RADIUS        = 20;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
  const strokeDash    = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700&display=swap');

        .stt-btn {
          position: fixed;
          bottom: 32px;
          right: 32px;
          z-index: 999;
          width: 52px;
          height: 52px;
          cursor: pointer;
          border: none;
          background: transparent;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;

          /* appear / disappear */
          opacity: 0;
          transform: translateY(16px) scale(0.85);
          pointer-events: none;
          transition:
            opacity 0.35s cubic-bezier(0.4,0,0.2,1),
            transform 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .stt-btn.stt-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }

        /* inner circle fill */
        .stt-inner {
          position: absolute;
          inset: 6px;
          border-radius: 50%;
          background: #F59E0B;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease, transform 0.2s ease;
          box-shadow: 0 4px 16px rgba(245,158,11,0.45);
        }
        .stt-btn:hover .stt-inner {
          background: #FBBF24;
          transform: scale(1.08);
        }

        /* arrow icon */
        .stt-arrow {
          width: 16px;
          height: 16px;
          color: #07152E;
          transition: transform 0.25s ease;
        }
        .stt-btn:hover .stt-arrow {
          transform: translateY(-2px);
        }

        /* progress ring SVG */
        .stt-ring {
          position: absolute;
          inset: 0;
          transform: rotate(-90deg);
          border-radius: 50%;
        }

        /* track circle */
        .stt-ring-track {
          fill: none;
          stroke: rgba(245,158,11,0.18);
          stroke-width: 2.5;
        }

        /* progress circle */
        .stt-ring-progress {
          fill: none;
          stroke: #F59E0B;
          stroke-width: 2.5;
          stroke-linecap: round;
          transition: stroke-dashoffset 0.15s linear;
        }

        /* tooltip */
        .stt-tooltip {
          position: absolute;
          right: calc(100% + 10px);
          top: 50%;
          transform: translateY(-50%);
          background: #0A1F44;
          color: white;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 5px 10px;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        .stt-tooltip::after {
          content: '';
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          border: 5px solid transparent;
          border-left-color: #0A1F44;
        }
        .stt-btn:hover .stt-tooltip {
          opacity: 1;
        }

        /* mobile: smaller + lower */
        @media (max-width: 640px) {
          .stt-btn {
            bottom: 20px;
            right: 20px;
            width: 46px;
            height: 46px;
          }
        }
      `}</style>

      <button
        className={`stt-btn ${visible ? 'stt-visible' : ''}`}
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Scroll back to top"
        title="Back to top"
      >
        {/* Progress ring */}
        <svg className="stt-ring" viewBox="0 0 52 52" aria-hidden="true">
          <circle
            className="stt-ring-track"
            cx="26" cy="26"
            r={RADIUS}
          />
          <circle
            className="stt-ring-progress"
            cx="26" cy="26"
            r={RADIUS}
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={strokeDash}
          />
        </svg>

        {/* Inner amber circle + arrow */}
        <div className="stt-inner">
          <svg
            className="stt-arrow"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </div>

        {/* Tooltip */}
        <span className="stt-tooltip" aria-hidden="true">
          Back to Top
        </span>
      </button>
    </>
  );
}