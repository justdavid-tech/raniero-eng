// src/data/services/civilEngineering.js
//
// DATA FILE FOR: Civil Engineering
// Duplicate this file to create additional services and modify content accordingly.
// ─────────────────────────────────────────────────────────────────────────────

export const civilEngineeringData = {

  // ── Brand accent color for this service ──────────────────────────────────
  accent: '#1E40AF',

  // ── HERO ─────────────────────────────────────────────────────────────────
  hero: {
    title:    'Civil Engineering',
    category: 'Engineering Services',
    headline: 'Design Strong.\nBuild Smart.\nDeliver Sustainably.',
    subtitle: 'We provide comprehensive civil engineering solutions — from planning and structural design to construction supervision and infrastructure development.',
    image:    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=80&auto=format&fit=crop',
    stats: [
      { value: '150+', label: 'Projects Delivered' },
      { value: '7+',   label: 'Years Experience' },
      { value: '100%', label: 'Standards Compliant' },
    ],
  },

  // ── OVERVIEW ──────────────────────────────────────────────────────────────
  overview: {
    image:      'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=900&q=80&auto=format&fit=crop',
    statValue:  'Infrastructure',
    statLabel:  'Development',
    heading:    'What is Civil\nEngineering at Raniero?',
    paragraphs: [
      'At Raniero Engineering, <strong style="color:#0A1F44;font-weight:600">civil engineering is about creating durable, safe, and efficient infrastructure systems</strong> that support communities and industries.',
      'We handle everything from structural design and site development to roads, drainage systems, foundations, and large-scale infrastructure projects.',
      'Our approach combines <strong style="color:#0A1F44;font-weight:600">technical precision, regulatory compliance, and sustainable construction practices</strong> to ensure long-term performance and reliability.',
    ],
    highlights: [
      'Structural design & analysis',
      'Road & highway construction',
      'Drainage & water systems',
      'Foundation & site development',
      'Construction supervision & quality control',
    ],
  },

  // ── DELIVERABLES ──────────────────────────────────────────────────────────
  deliverables: {
    heading: 'What\'s Included',
    subtext: 'Our civil engineering services cover the full lifecycle of infrastructure development.',
    items: [
      {
        title: 'Site Investigation & Surveying',
        description: 'Comprehensive land surveys and soil investigations to inform safe and effective design.',
        icon: <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>,
      },
      {
        title: 'Structural Design & Analysis',
        description: 'Engineering calculations and detailed structural drawings for safe load-bearing systems.',
        icon: <><rect x="3" y="3" width="18" height="18" rx="2"/></>,
      },
      {
        title: 'Road & Drainage Design',
        description: 'Planning and design of transportation routes and efficient stormwater management systems.',
        icon: <><line x1="3" y1="12" x2="21" y2="12"/></>,
      },
      {
        title: 'Foundation Engineering',
        description: 'Design and supervision of foundation systems tailored to soil conditions and structural requirements.',
        icon: <><path d="M3 12h18"/><path d="M12 3v18"/></>,
      },
      {
        title: 'Construction Supervision',
        description: 'On-site monitoring to ensure quality control, safety compliance, and adherence to design specifications.',
        icon: <><polyline points="3 17 9 11 13 15 21 7"/></>,
      },
      {
        title: 'Material Testing & Quality Assurance',
        description: 'Testing of construction materials to ensure strength, durability, and compliance with standards.',
        icon: <><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/></>,
      },
      {
        title: 'Infrastructure Project Management',
        description: 'Coordinated planning and management of civil works from start to completion.',
        icon: <><circle cx="9" cy="7" r="4"/><path d="M5.5 21a6.5 6.5 0 0113 0"/></>,
      },
      {
        title: 'As-Built Documentation',
        description: 'Final documentation reflecting completed works for future maintenance and compliance records.',
        icon: <><rect x="4" y="3" width="16" height="18" rx="2"/></>,
      },
    ],
  },

  // ── PROCESS ───────────────────────────────────────────────────────────────
  process: {
    heading: 'Our Civil\nEngineering Process',
    subtext: 'A structured 6-phase methodology ensuring quality, safety, and efficiency.',
    quote:   '"Strong infrastructure begins with strong engineering."',
    steps: [
      {
        title: 'Project Consultation & Site Assessment',
        description: 'Understanding project goals, environmental factors, and regulatory requirements.',
        tag: 'Phase 1',
      },
      {
        title: 'Feasibility Study & Planning',
        description: 'Conducting technical and economic feasibility studies before design development.',
        tag: 'Phase 2',
      },
      {
        title: 'Engineering Design & Approval',
        description: 'Preparing detailed civil and structural designs for client and regulatory approval.',
        tag: 'Phase 3',
      },
      {
        title: 'Procurement & Mobilisation',
        description: 'Coordinating materials, contractors, and equipment for site execution.',
        tag: 'Phase 4',
      },
      {
        title: 'Construction & Supervision',
        description: 'Overseeing construction activities to ensure safety and quality standards are met.',
        tag: 'Phase 5',
      },
      {
        title: 'Inspection & Project Handover',
        description: 'Final inspection, testing, and delivery of completed infrastructure projects.',
        tag: 'Phase 6',
      },
    ],
  },

  // ── BENEFITS ──────────────────────────────────────────────────────────────
  benefits: {
    heading: 'Key Benefits of\nChoosing Raniero',
    subtext: 'Our civil engineering expertise ensures safe, durable, and high-performance infrastructure.',
    items: [
      {
        title: 'Structural Integrity',
        description: 'Engineered solutions designed for strength, safety, and long-term durability.',
        icon: <><circle cx="12" cy="12" r="10"/></>,
      },
      {
        title: 'Regulatory Compliance',
        description: 'All projects align with national construction standards and safety regulations.',
        icon: <><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/></>,
      },
      {
        title: 'Sustainable Solutions',
        description: 'Environmentally responsible designs that reduce long-term operational impact.',
        icon: <><line x1="12" y1="1" x2="12" y2="23"/></>,
      },
      {
        title: 'Efficient Project Delivery',
        description: 'Structured planning ensures projects are completed on schedule and within scope.',
        icon: <><path d="M3 12h18"/></>,
      },
      {
        title: 'Quality Assurance',
        description: 'Strict monitoring and material testing guarantee high construction standards.',
        icon: <><path d="M12 3v18"/></>,
      },
      {
        title: 'Long-Term Value',
        description: 'Infrastructure designed to serve communities and industries for decades.',
        icon: <><polyline points="3 17 9 11 13 15 21 7"/></>,
      },
    ],
  },

  // ── CTA ───────────────────────────────────────────────────────────────────
  cta: {
    heading:    'Build Strong Foundations for the Future',
    subtext:    'Partner with Raniero Engineering for reliable, compliant, and sustainable civil engineering solutions.',
    primaryBtn: 'Start Your Civil Project',
    whatsapp:   '2348000000000',
  },
};