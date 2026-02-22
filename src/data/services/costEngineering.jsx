// src/data/services/costEngineering.js
//
// DATA FILE FOR: Cost Engineering
// Duplicate this file to create additional services and modify content accordingly.
// ─────────────────────────────────────────────────────────────────────────────

export const costEngineeringData = {

  // ── Brand accent color for this service ──────────────────────────────────
  accent: '#16A34A',

  // ── HERO ─────────────────────────────────────────────────────────────────
  hero: {
    title:    'Cost Engineering',
    category: 'Engineering Services',
    headline: 'Plan Smart.\nControl Costs.\nDeliver Profitably.',
    subtitle: 'We provide structured cost planning, financial control, and value optimization to ensure engineering projects remain within budget while maintaining quality and performance standards.',
    image:    'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1800&q=80&auto=format&fit=crop',
    stats: [
      { value: '200+', label: 'Estimates Prepared' },
      { value: '95%',  label: 'Budget Accuracy Rate' },
      { value: '100%', label: 'Financial Transparency' },
    ],
  },

  // ── OVERVIEW ──────────────────────────────────────────────────────────────
  overview: {
    image:      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80&auto=format&fit=crop',
    statValue:  'Financial',
    statLabel:  'Control',
    heading:    'What is Cost\nEngineering at Raniero?',
    paragraphs: [
      'At Raniero Engineering, <strong style="color:#0A1F44;font-weight:600">cost engineering ensures every project is financially structured from conception to completion</strong>. We develop accurate cost frameworks that guide budgeting, procurement, and execution.',
      'Our team performs detailed cost estimation, forecasting, and financial analysis to ensure transparency and prevent budget overruns.',
      'We combine <strong style="color:#0A1F44;font-weight:600">technical knowledge with financial discipline</strong> to deliver cost-efficient solutions without compromising engineering quality or compliance.',
    ],
    highlights: [
      'Detailed project cost estimation',
      'Structured budget development',
      'Cost monitoring & reporting',
      'Value engineering optimization',
      'Financial risk analysis',
    ],
  },

  // ── DELIVERABLES ──────────────────────────────────────────────────────────
  deliverables: {
    heading: 'What\'s Included',
    subtext: 'Our cost engineering service provides comprehensive financial planning and cost control solutions.',
    items: [
      {
        title: 'Preliminary Cost Estimation',
        description: 'Early-stage budget forecasting based on project scope and engineering requirements.',
        icon: <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>,
      },
      {
        title: 'Detailed Cost Breakdown',
        description: 'Itemized material, labor, equipment, and overhead cost analysis.',
        icon: <><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/></>,
      },
      {
        title: 'Bill of Quantities (BOQ)',
        description: 'Structured quantity take-offs supporting procurement and contractor pricing.',
        icon: <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></>,
      },
      {
        title: 'Budget Planning & Allocation',
        description: 'Development of phased project budgets aligned with timelines and deliverables.',
        icon: <><path d="M3 12h18"/><path d="M12 3v18"/></>,
      },
      {
        title: 'Cost Monitoring & Reporting',
        description: 'Ongoing financial tracking and variance analysis during project execution.',
        icon: <><polyline points="3 17 9 11 13 15 21 7"/></>,
      },
      {
        title: 'Value Engineering Review',
        description: 'Identification of cost-saving alternatives without affecting safety or performance.',
        icon: <><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/></>,
      },
      {
        title: 'Financial Risk Assessment',
        description: 'Evaluation of potential financial risks and mitigation strategies.',
        icon: <><circle cx="9" cy="7" r="4"/><path d="M5.5 21a6.5 6.5 0 0113 0"/></>,
      },
      {
        title: 'Final Cost Reporting',
        description: 'Comprehensive cost documentation for audit, evaluation, and future reference.',
        icon: <><rect x="4" y="3" width="16" height="18" rx="2"/></>,
      },
    ],
  },

  // ── PROCESS ───────────────────────────────────────────────────────────────
  process: {
    heading: 'Our Cost\nEngineering Process',
    subtext: 'A disciplined 6-phase approach ensuring financial clarity and cost control.',
    quote:   '"Every successful project begins with accurate cost planning."',
    steps: [
      {
        title: 'Scope Definition & Review',
        description: 'Understanding project requirements, specifications, and financial objectives.',
        tag: 'Phase 1',
      },
      {
        title: 'Preliminary Estimation',
        description: 'Preparation of initial cost projections based on available design data.',
        tag: 'Phase 2',
      },
      {
        title: 'Detailed Cost Analysis',
        description: 'Comprehensive breakdown of materials, labor, logistics, and indirect costs.',
        tag: 'Phase 3',
      },
      {
        title: 'Budget Approval & Baseline Setting',
        description: 'Establishing an approved financial baseline for cost monitoring.',
        tag: 'Phase 4',
      },
      {
        title: 'Cost Monitoring & Variance Control',
        description: 'Tracking actual expenses against the approved budget.',
        tag: 'Phase 5',
      },
      {
        title: 'Project Close-Out & Final Reporting',
        description: 'Preparation of final cost documentation and financial performance analysis.',
        tag: 'Phase 6',
      },
    ],
  },

  // ── BENEFITS ──────────────────────────────────────────────────────────────
  benefits: {
    heading: 'Key Benefits of\nChoosing Raniero',
    subtext: 'Our cost engineering service safeguards your investment and maximizes project value.',
    items: [
      {
        title: 'Budget Accuracy',
        description: 'Minimizes financial surprises through structured and realistic estimates.',
        icon: <><circle cx="12" cy="12" r="10"/></>,
      },
      {
        title: 'Cost Transparency',
        description: 'Clear financial reporting ensures stakeholder confidence.',
        icon: <><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/></>,
      },
      {
        title: 'Improved Profitability',
        description: 'Optimized cost planning increases overall project returns.',
        icon: <><line x1="12" y1="1" x2="12" y2="23"/></>,
      },
      {
        title: 'Reduced Financial Risk',
        description: 'Early identification of cost risks prevents overruns.',
        icon: <><path d="M3 12h18"/></>,
      },
      {
        title: 'Efficient Resource Allocation',
        description: 'Ensures funds are properly distributed across project phases.',
        icon: <><path d="M12 3v18"/></>,
      },
      {
        title: 'Strategic Decision Support',
        description: 'Provides data-driven insights for better financial planning.',
        icon: <><polyline points="3 17 9 11 13 15 21 7"/></>,
      },
    ],
  },

  // ── CTA ───────────────────────────────────────────────────────────────────
  cta: {
    heading:    'Take Control of Your Project Costs',
    subtext:    'Partner with us for accurate estimation, financial clarity, and optimized engineering value.',
    primaryBtn: 'Request a Cost Consultation',
    whatsapp:   '2348000000000',
  },
};