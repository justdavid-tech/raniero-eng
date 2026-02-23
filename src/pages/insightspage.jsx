// src/pages/InsightsPage.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Full /insights page — lists ALL articles with category filter tabs.
// ─────────────────────────────────────────────────────────────────────────────
import Navbar from '../components/navbar';
import Footer from '../components/footer';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts, urlFor } from '../lib/sanity';

const CATEGORY_LABELS = {
  all:                    'All Articles',
  'project-management':   'Project Management',
  'engineering-insights': 'Engineering Insights',
  'facility-management':  'Facility Management',
  'industry-trends':      'Industry Trends',
  'cost-engineering':     'Cost Engineering',
  'training-development': 'Training & Development',
  'oil-gas':              'Oil & Gas',
  'company-news':         'Company News',
};

const CATEGORY_COLORS = {
  'project-management':   '#F59E0B',
  'engineering-insights': '#F59E0B',
  'facility-management':  '#F59E0B',
  'industry-trends':      '#F59E0B',
  'cost-engineering':     '#F59E0B',
  'training-development': '#F59E0B',
  'oil-gas':              '#F59E0B',
  'company-news':         '#F59E0B',
};

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

function ArticleCard({ post }) {
  const accent   = CATEGORY_COLORS[post.category] || '#F59E0B';
  const label    = CATEGORY_LABELS[post.category]  || post.category;
  const imageUrl = post.coverImage?.asset
    ? urlFor(post.coverImage).width(600).height(340).fit('crop').auto('format').url()
    : 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80&auto=format&fit=crop';

  return (   
    <Link to={`/insights/${post.slug.current}`} className="ip-card">
      <div className="ip-img-wrap">
        <img src={imageUrl} alt={post.coverImage?.alt || post.title} className="ip-img" />
        <div className="ip-img-overlay" />
        <span className="ip-cat-badge" style={{ borderColor: accent, color: accent }}>{label}</span>
      </div>
      <div className="ip-card-body">
        <div className="ip-meta-row">
          <span className="ip-meta-item">
            <svg style={{ width: 11, height: 11 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            {formatDate(post.publishedAt)}
          </span>
          <span className="ip-meta-dot" />
          <span className="ip-meta-item">
            <svg style={{ width: 11, height: 11 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
            {post.readTime} min read
          </span>
        </div>

        <h3 className="ip-title">{post.title}</h3>
        <p className="ip-excerpt">{post.excerpt}</p>
        <div className="ip-rule" />

        <div className="ip-footer">
          <div className="ip-author">
            {post.author?.photo?.asset ? (
              <img src={urlFor(post.author.photo).width(36).height(36).fit('crop').url()} alt={post.author.name} className="ip-avatar" />
            ) : (
              <div className="ip-avatar ip-avatar-fallback">{post.author?.name?.[0] ?? 'R'}</div>
            )}
            <div>
              <p className="ip-author-name">{post.author?.name ?? 'Raniero Engineering'}</p>
              <p className="ip-author-role">{post.author?.role ?? 'Engineering Team'}</p>
            </div>
          </div>
          <span className="ip-read-more" style={{ color: accent }}>
            Read Article
            <svg style={{ width: 12, height: 12 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

function SkeletonCard() {
  return (
    <div className="ip-card" style={{ pointerEvents: 'none' }}>
      <div style={{ height: 200, background: 'linear-gradient(90deg,#E5E7EB 25%,#F3F4F6 50%,#E5E7EB 75%)', backgroundSize: '200% 100%', animation: 'ip-shimmer 1.4s infinite' }} />
      <div style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ height: 11, width: '40%', background: '#E5E7EB', borderRadius: 4 }} />
        <div style={{ height: 18, width: '80%', background: '#E5E7EB', borderRadius: 4 }} />
        <div style={{ height: 13, width: '100%', background: '#F3F4F6', borderRadius: 4 }} />
        <div style={{ height: 13, width: '65%',  background: '#F3F4F6', borderRadius: 4 }} />
      </div>
    </div>
  );
}

export default function InsightsPage() {
  const [allPosts,    setAllPosts]    = useState([]);
  const [activeTab,   setActiveTab]   = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading,     setLoading]     = useState(true);
  const [error,       setError]       = useState(null);

  useEffect(() => {
    getAllPosts()
      .then(setAllPosts)
      .catch(() => setError('Could not load articles. Please try again later.'))
      .finally(() => setLoading(false));
  }, []);

  // Derive unique categories from fetched posts
  const categories = ['all', ...Array.from(new Set(allPosts.map(p => p.category).filter(Boolean)))];

  // Filter by active tab + search query
  const filtered = allPosts.filter(p => {
    const matchCat    = activeTab === 'all' || p.category === activeTab;
    const matchSearch = !searchQuery ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
    <Navbar />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=Barlow+Condensed:wght@600;700;800&display=swap');

        .ip-root    { font-family: 'Barlow', sans-serif; }
        .ip-display { font-family: 'Barlow Condensed', sans-serif; }

        /* ── Hero ── */
        .ip-hero {
          background: #0A1F44;
          background-image: radial-gradient(ellipse 70% 60% at 50% 100%, rgba(18,58,115,0.6) 0%, transparent 70%);
          position: relative; overflow: hidden;
        }
        .ip-hero-ring {
          position: absolute; border-radius: 50%;
          border: 1px solid rgba(245,158,11,0.07);
          pointer-events: none;
        }

        /* ── Filter tabs ── */
        .ip-tab {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
          padding: 8px 18px; border: 1px solid #E5E7EB; background: white;
          color: #6B7280; cursor: pointer; white-space: nowrap;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }
        .ip-tab:hover { background: #F3F4F6; color: #0A1F44; }
        .ip-tab.active { background: #0A1F44; color: white; border-color: #0A1F44; }

        /* ── Search box ── */
        .ip-search {
          display: flex; align-items: center; gap: 10px;
          background: white; border: 1px solid #E5E7EB;
          padding: 10px 16px; flex: 1; max-width: 320px;
          transition: border-color 0.2s;
        }
        .ip-search:focus-within { border-color: #0A1F44; }
        .ip-search input {
          flex: 1; border: none; outline: none; background: transparent;
          font-family: 'Barlow', sans-serif; font-size: 14px; color: #374151;
        }
        .ip-search input::placeholder { color: #9CA3AF; }

        /* ── Card ── */
        .ip-card {
          display: flex; flex-direction: column;
          background: white; border: 1px solid #E5E7EB;
          overflow: hidden; text-decoration: none; color: inherit;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .ip-card:hover { transform: translateY(-6px); box-shadow: 0 24px 48px rgba(10,31,68,0.1); }

        .ip-img-wrap { overflow: hidden; position: relative; height: 200px; flex-shrink: 0; }
        .ip-img      { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.55s ease; }
        .ip-card:hover .ip-img { transform: scale(1.05); }
        .ip-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(7,21,46,0.45) 100%);
        }
        .ip-cat-badge {
          position: absolute; bottom: 10px; left: 10px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 9px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase;
          background: rgba(7,21,46,0.72); backdrop-filter: blur(4px);
          border-left: 2px solid; padding: 3px 9px;
        }

        .ip-card-body { padding: 20px; display: flex; flex-direction: column; gap: 10px; flex: 1; }
        .ip-meta-row  { display: flex; align-items: center; gap: 7px; }
        .ip-meta-item { display: flex; align-items: center; gap: 4px; font-size: 11px; color: #9CA3AF; font-weight: 500; }
        .ip-meta-dot  { width: 3px; height: 3px; border-radius: 50%; background: #D1D5DB; }
        .ip-title {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          text-transform: uppercase; color: #0A1F44; line-height: 1.25;
          font-size: 16px; letter-spacing: 0.01em; transition: color 0.2s;
        }
        .ip-card:hover .ip-title { color: #F59E0B; }
        .ip-excerpt { font-size: 13px; color: #6B7280; line-height: 1.65; flex: 1; }
        .ip-rule    { height: 1px; background: linear-gradient(90deg, #E5E7EB, transparent); }

        .ip-footer      { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
        .ip-author      { display: flex; align-items: center; gap: 8px; }
        .ip-avatar      { width: 30px; height: 30px; border-radius: 50%; object-fit: cover; border: 2px solid #E5E7EB; flex-shrink: 0; }
        .ip-avatar-fallback {
          background: #0A1F44; color: white; display: flex; align-items: center; justify-content: center;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 13px;
        }
        .ip-author-name { font-size: 11px; font-weight: 600; color: #374151; }
        .ip-author-role { font-size: 10px; color: #9CA3AF; }
        .ip-read-more {
          display: inline-flex; align-items: center; gap: 4px;
          font-family: 'Barlow Condensed', sans-serif; font-size: 11px; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase; transition: gap 0.2s;
        }
        .ip-card:hover .ip-read-more { gap: 7px; }

        /* section label */
        .ip-label::before {
          content: ''; display: inline-block;
          width: 36px; height: 3px; background: #F59E0B; border-radius: 2px;
          vertical-align: middle; margin-right: 12px;
        }

        @keyframes ip-shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        /* results count */
        .ip-results-count {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; color: #9CA3AF;
        }
      `}</style>

      <div className="ip-root">

        {/* ── HERO ── */}
        <div className="ip-hero pt-28 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="ip-hero-ring" style={{ width: 500, height: 500, top: -200, right: -200 }} />
          <div className="ip-hero-ring" style={{ width: 280, height: 280, bottom: -60, left: -80, borderColor: 'rgba(59,130,246,0.05)' }} />

          <div className="max-w-7xl mx-auto relative z-10">
            <p className="ip-label ip-display uppercase tracking-[0.2em] text-amber-400 font-600 mb-3" style={{ fontSize: '11px' }}>
              Insights & Articles
            </p>
            <h1 className="ip-display font-800 uppercase text-white leading-none mb-4" style={{ fontSize: 'clamp(40px,6vw,72px)', letterSpacing: '-0.01em' }}>
              Engineering
              <br /><span style={{ color: '#F59E0B' }}>Knowledge Hub</span>
            </h1>
            <p className="text-blue-200/65 leading-relaxed max-w-xl" style={{ fontSize: '16px' }}>
              Practical insights, industry trends, project management advice, and engineering perspectives — written by the Raniero Engineering team.
            </p>
          </div>
        </div>

        {/* ── FILTER BAR ── */}
        <div style={{ background: '#fff', borderBottom: '1px solid #E5E7EB', position: 'sticky', top: 70, zIndex: 40 }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4 flex-wrap">
            {/* Tabs */}
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`ip-tab ${activeTab === cat ? 'active' : ''}`}
                >
                  {CATEGORY_LABELS[cat] || cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="ip-search">
              <svg style={{ width: 16, height: 16, color: '#9CA3AF', flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} style={{ color: '#9CA3AF', background: 'none', border: 'none', cursor: 'pointer', padding: 0, lineHeight: 1 }}>
                  <svg style={{ width: 14, height: 14 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ── ARTICLES GRID ── */}
        <div style={{ background: '#F3F4F6', backgroundImage: 'linear-gradient(rgba(10,31,68,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(10,31,68,0.03) 1px,transparent 1px)', backgroundSize: '48px 48px' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

            {/* results count */}
            {!loading && !error && (
              <p className="ip-results-count mb-8">
                {filtered.length} {filtered.length === 1 ? 'Article' : 'Articles'}
                {activeTab !== 'all' && ` in ${CATEGORY_LABELS[activeTab]}`}
                {searchQuery && ` matching "${searchQuery}"`}
              </p>
            )}

            {/* loading skeletons */}
            {loading && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
              </div>
            )}

            {/* error */}
            {error && (
              <div style={{ textAlign: 'center', padding: '80px 20px', color: '#6B7280' }}>
                <p className="ip-display font-700 uppercase text-[#0A1F44] mb-2" style={{ fontSize: '20px' }}>{error}</p>
              </div>
            )}

            {/* empty */}
            {!loading && !error && filtered.length === 0 && (
              <div style={{ textAlign: 'center', padding: '80px 20px', border: '1px dashed #E5E7EB', background: '#fff' }}>
                <p className="ip-display font-700 uppercase text-[#0A1F44] mb-2" style={{ fontSize: '22px' }}>
                  {allPosts.length === 0 ? 'Articles Coming Soon' : 'No articles found'}
                </p>
                <p style={{ color: '#9CA3AF', fontSize: '14px' }}>
                  {allPosts.length === 0
                    ? 'Our team is working on the first articles. Check back soon.'
                    : 'Try a different category or search term.'}
                </p>
              </div>
            )}

            {/* articles */}
            {!loading && !error && filtered.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map(post => <ArticleCard key={post._id} post={post} />)}
              </div>
            )}

          </div>
        </div>

        {/* ── BACK TO HOME ── */}
        <div style={{ background: '#0A1F44', padding: '40px 24px', textAlign: 'center' }}>
          <Link
            to="/"
            className="ip-display"
            style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'color 0.2s' }}
          >
            <svg style={{ width: 13, height: 13 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Homepage
          </Link>
        </div>

      </div>
      <Footer />
    </>
  );
}