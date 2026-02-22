// src/data/services/processEstablishment.js
// 
// DATA FILE FOR: Process Establishment
// Duplicate this file to create additional services and modify content accordingly.
// ─────────────────────────────────────────────────────────────────────────────

export const processEstablishmentData = {

  // ── Brand accent color for this service ──────────────────────────────────
  accent: '#0EA5E9',

  // ── HERO ─────────────────────────────────────────────────────────────────
  hero: {
    title:    'Process Establishment',
    category: 'Engineering Services',
    headline: 'Designing Efficient\nOperational Systems.',
    subtitle: 'We develop structured, scalable, and compliant operational processes that optimise performance, improve consistency, and drive sustainable growth.',
    image:    'https://images.unsplash.com/photo-1581092918484-8313e4f07e9d?w=1800&q=80&auto=format&fit=crop',
    stats: [
      { value: '150+', label: 'Processes Designed' },
      { value: '6+',   label: 'Years Experience' },
      { value: '100%', label: 'Operational Compliance' },
    ],
  },

  // ── OVERVIEW ──────────────────────────────────────────────────────────────
  overview: {
    image:      'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=900&q=80&auto=format&fit=crop',
    statValue:  'ISO',
    statLabel:  'Aligned Frameworks',
    heading:    'What is Process\nEstablishment at Raniero?',
    paragraphs: [
      'At Raniero Engineering, <strong style="color:#0A1F44;font-weight:600">process establishment means building the operational backbone of your organisation</strong>. We design structured workflows, documentation systems, and performance frameworks that ensure consistency, accountability, and efficiency.',
      'Whether launching a new facility, scaling operations, or restructuring an existing system, we analyse your workflows from end to end — identifying inefficiencies, risks, and improvement opportunities.',
      'Our team ensures every operational process is <strong style="color:#0A1F44;font-weight:600">clearly documented, measurable, and aligned with regulatory and industry standards</strong>, creating a stable foundation for sustainable growth.',
    ],
    highlights: [
      'Workflow mapping and optimisation',
      'Standard Operating Procedure (SOP) development',
      'Regulatory and compliance alignment',
      'Performance measurement frameworks',
      'Continuous improvement integration',
    ],
  },

  // ── DELIVERABLES ──────────────────────────────────────────────────────────
  deliverables: {
    heading: 'What\'s Included',
    subtext: 'Each process establishment engagement delivers a structured, documented, and scalable operational system.',
    items: [
      {
        title: 'Process Mapping & Analysis',
        description: 'Detailed mapping of existing or proposed workflows to identify gaps, bottlenecks, redundancies, and compliance risks.',
        icon: <path d="M3 3h18v6H3zM3 15h18v6H3zM9 9v6M15 9v6"/>,
      },
      {
        title: 'Standard Operating Procedures (SOPs)',
        description: 'Comprehensive, clearly written SOP documents outlining step-by-step procedures, responsibilities, and escalation paths.',
        icon: <><rect x="4" y="3" width="16" height="18" rx="2"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="16" y2="11"/></>,
      },
      {
        title: 'Roles & Responsibility Matrix',
        description: 'Defined accountability structure (RACI matrix) ensuring every task has a clear owner and reporting structure.',
        icon: <><circle cx="12" cy="7" r="4"/><path d="M5.5 21a6.5 6.5 0 0113 0"/></>,
      },
      {
        title: 'Process Flow Diagrams',
        description: 'Visual flowcharts and system diagrams illustrating operational sequences for clarity and training purposes.',
        icon: <><rect x="3" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><path d="M10 6h4M17 10v4"/></>,
      },
      {
        title: 'Compliance & Control Framework',
        description: 'Integrated control mechanisms and checkpoints aligned with regulatory requirements and industry best practices.',
        icon: <><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/></>,
      },
      {
        title: 'Performance Metrics & KPIs',
        description: 'Defined measurable indicators to track process effectiveness, efficiency, quality, and operational stability.',
        icon: <><line x1="6" y1="20" x2="6" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="18" y1="20" x2="18" y2="14"/></>,
      },
      {
        title: 'Training & Implementation Support',
        description: 'Workshops and onboarding sessions to ensure your team understands, adopts, and consistently applies the new processes.',
        icon: <><path d="M2 3h20v14H2z"/><path d="M8 21h8"/></>,
      },
      {
        title: 'Continuous Improvement Roadmap',
        description: 'Structured improvement plan including audit schedules, review cycles, and optimisation strategies for long-term excellence.',
        icon: <><polyline points="3 17 9 11 13 15 21 7"/><polyline points="14 7 21 7 21 14"/></>,
      },
    ],
  },

  // ── PROCESS ───────────────────────────────────────────────────────────────
  process: {
    heading: 'Our Process\nEstablishment Framework',
    subtext: 'A structured 6-phase methodology ensuring operational systems are efficient, scalable, and compliant.',
    quote:   '"Strong systems build strong organisations. We design processes that perform under pressure."',
    steps: [
      {
        title: 'Discovery & Operational Audit',
        description: 'We conduct stakeholder interviews, workflow observations, and documentation reviews to understand your current operational environment.',
        tag: 'Phase 1',
      },
      {
        title: 'Process Design & Mapping',
        description: 'We develop structured workflow maps, define inputs and outputs, and eliminate redundancies or inefficiencies.',
        tag: 'Phase 2',
      },
      {
        title: 'Documentation & SOP Development',
        description: 'We formalise all procedures into clear documentation aligned with industry and regulatory standards.',
        tag: 'Phase 3',
      },
      {
        title: 'Control & Compliance Integration',
        description: 'We embed quality checks, risk controls, and compliance checkpoints into every operational layer.',
        tag: 'Phase 4',
      },
      {
        title: 'Implementation & Training',
        description: 'We support rollout through staff training, system alignment, and pilot testing before full-scale deployment.',
        tag: 'Phase 5',
      },
      {
        title: 'Monitoring & Continuous Improvement',
        description: 'We establish review mechanisms and KPIs to ensure long-term performance optimisation and scalability.',
        tag: 'Phase 6',
      },
    ],
  },

  // ── BENEFITS ──────────────────────────────────────────────────────────────
  benefits: {
    heading: 'Key Benefits of\nChoosing Raniero',
    subtext: 'Here is what clients gain when their operational systems are professionally structured.',
    items: [
      {
        title: 'Operational Efficiency',
        description: 'Clearly defined workflows reduce delays, eliminate duplication, and improve turnaround time.',
        icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
      },
      {
        title: 'Regulatory Confidence',
        description: 'Processes are structured to align with Nigerian regulatory standards and international best practices.',
        icon: <><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/></>,
      },
      {
        title: 'Scalability',
        description: 'Structured systems allow your organisation to grow without operational breakdown or confusion.',
        icon: <><polyline points="3 17 9 11 13 15 21 7"/></>,
      },
      {
        title: 'Reduced Operational Risk',
        description: 'Control mechanisms and documented procedures minimise human error and compliance violations.',
        icon: <><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></>,
      },
      {
        title: 'Clear Accountability',
        description: 'Defined roles and reporting lines eliminate confusion and strengthen performance ownership.',
        icon: <><circle cx="12" cy="7" r="4"/></>,
      },
      {
        title: 'Sustainable Growth Foundation',
        description: 'Well-designed processes create a strong operational backbone that supports long-term expansion.',
        icon: <><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/></>,
      },
    ],
  },

  // ── CTA ───────────────────────────────────────────────────────────────────
  cta: {
    heading:    'Build Stronger Systems Today',
    subtext:    'Let’s design structured, scalable processes that power your organisation’s growth and operational excellence.',
    primaryBtn: 'Request Consultation',
    whatsapp:   '2348000000000',
  },
};