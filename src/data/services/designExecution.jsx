// src/data/services/designExecution.js
// 
// DATA FILE FOR: Design Execution
// Duplicate this file to create additional services and modify content accordingly.
// ─────────────────────────────────────────────────────────────────────────────

export const designExecutionData = {

  // ── Brand accent color for this service ──────────────────────────────────
  accent: '#2563EB',

  // ── HERO ─────────────────────────────────────────────────────────────────
  hero: {
    title:    'Design Execution',
    category: 'Engineering Services',
    headline: 'From Concept.\nTo Constructible Reality.',
    subtitle: 'We transform engineering concepts into fully detailed, build-ready designs — ensuring technical precision, regulatory compliance, and seamless project integration.',
    image:    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1800&q=80&auto=format&fit=crop',
    stats: [
      { value: '180+', label: 'Designs Delivered' },
      { value: '6+',   label: 'Years Experience' },
      { value: '100%', label: 'Standards Compliant' },
    ],
  },

  // ── OVERVIEW ──────────────────────────────────────────────────────────────
  overview: {
    image:      'https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?w=900&q=80&auto=format&fit=crop',
    statValue:  'Build-Ready',
    statLabel:  'Deliverables',
    heading:    'What is Design\nExecution at Raniero?',
    paragraphs: [
      'At Raniero Engineering, <strong style="color:#0A1F44;font-weight:600">design execution means converting ideas into technically sound, implementation-ready solutions</strong>. We bridge the gap between concept development and on-site construction.',
      'Our multidisciplinary team develops detailed engineering drawings, technical specifications, and coordinated documentation that ensure clarity for contractors, regulators, and project stakeholders.',
      'Every design is created with <strong style="color:#0A1F44;font-weight:600">precision, safety, efficiency, and regulatory compliance</strong> in mind — reducing rework, delays, and cost overruns during execution.',
    ],
    highlights: [
      'Concept-to-detail design development',
      'Multidisciplinary engineering coordination',
      'Technical drawings & specifications',
      'Regulatory and standards compliance',
      'Construction-ready documentation',
    ],
  },

  // ── DELIVERABLES ──────────────────────────────────────────────────────────
  deliverables: {
    heading: 'What\'s Included',
    subtext: 'Our design execution service delivers complete, coordinated, and implementation-ready engineering packages.',
    items: [
      {
        title: 'Concept Development & Refinement',
        description: 'Translation of client requirements and preliminary ideas into structured engineering concepts.',
        icon: <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>,
      },
      {
        title: 'Detailed Engineering Drawings',
        description: 'Production of technical drawings including plans, elevations, sections, and system schematics.',
        icon: <><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/></>,
      },
      {
        title: 'Technical Specifications',
        description: 'Comprehensive documentation defining materials, standards, tolerances, and installation requirements.',
        icon: <><rect x="4" y="3" width="16" height="18" rx="2"/><line x1="8" y1="7" x2="16" y2="7"/></>,
      },
      {
        title: 'Multidisciplinary Coordination',
        description: 'Integration of structural, mechanical, electrical, and civil components to avoid design conflicts.',
        icon: <><path d="M3 12h18"/><path d="M12 3v18"/></>,
      },
      {
        title: 'Design Compliance Review',
        description: 'Verification that all design outputs align with Nigerian regulatory requirements and international standards.',
        icon: <><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/></>,
      },
      {
        title: 'Bill of Quantities (BOQ)',
        description: 'Preparation of structured material and cost breakdowns to support procurement and budgeting.',
        icon: <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></>,
      },
      {
        title: 'Construction Support',
        description: 'Technical clarification, site coordination, and design adjustments during construction.',
        icon: <><circle cx="9" cy="7" r="4"/><path d="M5.5 21a6.5 6.5 0 0113 0"/></>,
      },
      {
        title: 'As-Built Documentation',
        description: 'Final documentation reflecting actual construction conditions for long-term operational reference.',
        icon: <><polyline points="3 17 9 11 13 15 21 7"/></>,
      },
    ],
  },

  // ── PROCESS ───────────────────────────────────────────────────────────────
  process: {
    heading: 'Our Design\nExecution Process',
    subtext: 'A disciplined 6-phase methodology ensuring precision, coordination, and constructibility.',
    quote:   '"Strong execution begins with strong design."',
    steps: [
      {
        title: 'Client Brief & Requirement Analysis',
        description: 'We gather functional, technical, and regulatory requirements to define design objectives.',
        tag: 'Phase 1',
      },
      {
        title: 'Conceptual Design Development',
        description: 'Creation of preliminary layouts and engineering concepts for client validation.',
        tag: 'Phase 2',
      },
      {
        title: 'Detailed Design Engineering',
        description: 'Production of coordinated technical drawings, calculations, and specifications.',
        tag: 'Phase 3',
      },
      {
        title: 'Compliance & Review',
        description: 'Internal technical review and regulatory compliance verification before approval.',
        tag: 'Phase 4',
      },
      {
        title: 'Documentation & Issuance',
        description: 'Release of final approved drawings and documentation for construction.',
        tag: 'Phase 5',
      },
      {
        title: 'Construction Phase Support',
        description: 'Ongoing technical guidance and updates to ensure proper design implementation.',
        tag: 'Phase 6',
      },
    ],
  },

  // ── BENEFITS ──────────────────────────────────────────────────────────────
  benefits: {
    heading: 'Key Benefits of\nChoosing Raniero',
    subtext: 'Our design execution service ensures technical accuracy, compliance, and buildability.',
    items: [
      {
        title: 'Reduced Rework',
        description: 'Coordinated and precise designs minimise costly on-site corrections.',
        icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
      },
      {
        title: 'Regulatory Confidence',
        description: 'All designs are aligned with Nigerian standards and industry requirements.',
        icon: <><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/></>,
      },
      {
        title: 'Cost Predictability',
        description: 'Accurate specifications and BOQs improve budgeting accuracy and procurement planning.',
        icon: <><line x1="12" y1="1" x2="12" y2="23"/></>,
      },
      {
        title: 'Improved Constructibility',
        description: 'Designs are developed with real-world site conditions and contractor usability in mind.',
        icon: <><path d="M3 12h18"/></>,
      },
      {
        title: 'Multidisciplinary Integration',
        description: 'All engineering disciplines work in alignment, preventing system conflicts.',
        icon: <><path d="M12 3v18"/></>,
      },
      {
        title: 'Long-Term Documentation Value',
        description: 'As-built records provide future maintenance and upgrade guidance.',
        icon: <><polyline points="3 17 9 11 13 15 21 7"/></>,
      },
    ],
  },

  // ── CTA ───────────────────────────────────────────────────────────────────
  cta: {
    heading:    'Bring Your Engineering Concepts to Life',
    subtext:    'Partner with us for structured, compliant, and execution-ready engineering design solutions.',
    primaryBtn: 'Start Your Design Project',
    whatsapp:   '2348000000000',
  },
};