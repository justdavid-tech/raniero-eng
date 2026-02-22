// src/data/services/engineeringAudit.js
// 
// DATA FILE FOR: Engineering Audit
// Duplicate this file to create additional services and modify content accordingly.
// ─────────────────────────────────────────────────────────────────────────────

export const engineeringAuditData = {

  // ── Brand accent color for this service ──────────────────────────────────
  accent: '#DC2626',

  // ── HERO ─────────────────────────────────────────────────────────────────
  hero: {
    title:    'Engineering Audit',
    category: 'Engineering Services',
    headline: 'Evaluating Systems.\nEnsuring Compliance.',
    subtitle: 'Comprehensive engineering audits that assess performance, safety, compliance, and operational efficiency across industrial and commercial facilities.',
    image:    'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1800&q=80&auto=format&fit=crop',
    stats: [
      { value: '120+', label: 'Audits Conducted' },
      { value: '100%', label: 'Compliance Focused' },
      { value: '6+',   label: 'Years Experience' },
    ],
  },

  // ── OVERVIEW ──────────────────────────────────────────────────────────────
  overview: {
    image:      'https://images.unsplash.com/photo-1581091014534-8986c1c3d9a0?w=900&q=80&auto=format&fit=crop',
    statValue:  'Independent',
    statLabel:  'Assessment',
    heading:    'What is an Engineering\nAudit at Raniero?',
    paragraphs: [
      'At Raniero Engineering, <strong style="color:#0A1F44;font-weight:600">an engineering audit is a structured, independent evaluation</strong> of your technical systems, operational processes, and infrastructure integrity.',
      'We assess mechanical, electrical, structural, and operational components to identify inefficiencies, compliance gaps, safety risks, and performance shortfalls.',
      'Our audit framework ensures your facilities and systems align with <strong style="color:#0A1F44;font-weight:600">regulatory requirements, industry standards, and operational best practices</strong>, while providing actionable recommendations for improvement.',
    ],
    highlights: [
      'Technical systems inspection',
      'Regulatory compliance verification',
      'Risk identification and mitigation',
      'Performance and efficiency analysis',
      'Independent reporting & recommendations',
    ],
  },

  // ── DELIVERABLES ──────────────────────────────────────────────────────────
  deliverables: {
    heading: 'What\'s Included',
    subtext: 'Our engineering audits deliver structured insights and clear corrective recommendations.',
    items: [
      {
        title: 'Technical Systems Review',
        description: 'Comprehensive inspection of mechanical, electrical, plumbing, structural, and process systems.',
        icon: <><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></>,
      },
      {
        title: 'Compliance Gap Analysis',
        description: 'Assessment against Nigerian regulatory requirements and relevant international engineering standards.',
        icon: <><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/><line x1="9" y1="12" x2="15" y2="12"/></>,
      },
      {
        title: 'Risk & Safety Evaluation',
        description: 'Identification of operational hazards, structural vulnerabilities, and system weaknesses.',
        icon: <><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></>,
      },
      {
        title: 'Performance Efficiency Analysis',
        description: 'Evaluation of energy usage, system output, and operational efficiency metrics.',
        icon: <><line x1="6" y1="20" x2="6" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="18" y1="20" x2="18" y2="14"/></>,
      },
      {
        title: 'Documentation & Record Review',
        description: 'Examination of maintenance logs, operational records, compliance certificates, and asset registers.',
        icon: <><rect x="4" y="3" width="16" height="18" rx="2"/><line x1="8" y1="7" x2="16" y2="7"/></>,
      },
      {
        title: 'Corrective Action Plan',
        description: 'Structured recommendations prioritised by risk level, cost implication, and implementation timeline.',
        icon: <><polyline points="3 17 9 11 13 15 21 7"/></>,
      },
      {
        title: 'Executive Audit Report',
        description: 'Comprehensive report summarising findings, compliance status, risk areas, and recommended improvements.',
        icon: <><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/></>,
      },
      {
        title: 'Post-Audit Consultation',
        description: 'Advisory session to guide implementation of recommendations and corrective measures.',
        icon: <><circle cx="9" cy="7" r="4"/><path d="M5.5 21a6.5 6.5 0 0113 0"/></>,
      },
    ],
  },

  // ── PROCESS ───────────────────────────────────────────────────────────────
  process: {
    heading: 'Our Engineering\nAudit Process',
    subtext: 'A disciplined 6-phase audit methodology ensuring accuracy, objectivity, and actionable outcomes.',
    quote:   '"Independent evaluation today prevents costly failures tomorrow."',
    steps: [
      {
        title: 'Pre-Audit Planning',
        description: 'Define audit scope, objectives, standards, and documentation requirements in alignment with client expectations.',
        tag: 'Phase 1',
      },
      {
        title: 'Data Collection & Inspection',
        description: 'Conduct site inspections, technical testing, interviews, and documentation review.',
        tag: 'Phase 2',
      },
      {
        title: 'System Evaluation',
        description: 'Assess operational efficiency, structural integrity, and regulatory compliance.',
        tag: 'Phase 3',
      },
      {
        title: 'Risk & Gap Identification',
        description: 'Highlight non-compliance issues, inefficiencies, and high-risk areas requiring immediate attention.',
        tag: 'Phase 4',
      },
      {
        title: 'Reporting & Recommendations',
        description: 'Prepare a structured audit report with prioritised corrective actions.',
        tag: 'Phase 5',
      },
      {
        title: 'Follow-Up & Advisory Support',
        description: 'Provide guidance during implementation of corrective measures and system improvements.',
        tag: 'Phase 6',
      },
    ],
  },

  // ── BENEFITS ──────────────────────────────────────────────────────────────
  benefits: {
    heading: 'Key Benefits of\nChoosing Raniero',
    subtext: 'Our engineering audits deliver clarity, compliance, and operational confidence.',
    items: [
      {
        title: 'Improved Compliance',
        description: 'Ensure alignment with regulatory standards and reduce risk of penalties or shutdowns.',
        icon: <><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/></>,
      },
      {
        title: 'Risk Reduction',
        description: 'Early detection of system weaknesses prevents accidents and costly failures.',
        icon: <><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></>,
      },
      {
        title: 'Operational Efficiency',
        description: 'Identify inefficiencies and optimise system performance for long-term cost savings.',
        icon: <><polyline points="3 17 9 11 13 15 21 7"/></>,
      },
      {
        title: 'Objective Evaluation',
        description: 'Independent assessment ensures unbiased technical review and credible reporting.',
        icon: <><circle cx="12" cy="12" r="10"/></>,
      },
      {
        title: 'Strategic Decision Support',
        description: 'Clear audit insights help management prioritise investments and corrective actions.',
        icon: <><line x1="6" y1="20" x2="6" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/></>,
      },
      {
        title: 'Long-Term Asset Protection',
        description: 'Structured evaluation safeguards infrastructure integrity and extends asset lifespan.',
        icon: <><path d="M3 12h18"/></>,
      },
    ],
  },

  // ── CTA ───────────────────────────────────────────────────────────────────
  cta: {
    heading:    'Request a Professional Engineering Audit',
    subtext:    'Gain clarity, ensure compliance, and strengthen operational performance with our structured audit services.',
    primaryBtn: 'Schedule Audit Consultation',
    whatsapp:   '2348000000000',
  },
};
