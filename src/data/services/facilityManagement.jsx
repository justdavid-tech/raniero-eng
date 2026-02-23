// src/data/services/facilityManagement.js
// 
// DATA FILE FOR: Facility Management
// Duplicate this file to create additional services and modify content accordingly.
// ─────────────────────────────────────────────────────────────────────────────

export const facilityManagementData = {

  // ── Brand accent color for this service ──────────────────────────────────
  accent: '#6366F1',

  // ── HERO ─────────────────────────────────────────────────────────────────
  hero: {
    title:    'Facility Management',
    category: 'Engineering Services',
    headline: 'Maintaining Assets.\nMaximising Performance.',
    subtitle: 'Comprehensive facility management solutions that ensure your buildings, infrastructure, and assets operate safely, efficiently, and sustainably.',
    image:    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1800&q=80&auto=format&fit=crop',
    stats: [
      { value: '100+', label: 'Facilities Managed' },
      { value: '24/7', label: 'Maintenance Support' },
      { value: '99%',  label: 'Operational Uptime' },
    ],
  },

  // ── OVERVIEW ──────────────────────────────────────────────────────────────
  overview: {
    image:      '/images/processestablishment.jpeg',
    statValue:  'Integrated',
    statLabel:  'Asset Care',
    heading:    'What is Facility\nManagement at Raniero?',
    paragraphs: [
      'At Raniero Engineering, <strong style="color:#0A1F44;font-weight:600">facility management means protecting and optimising your physical assets</strong> through structured maintenance, operational oversight, and performance monitoring.',
      'We manage commercial, industrial, and institutional facilities to ensure systems such as power, HVAC, plumbing, safety, and structural components operate at peak efficiency.',
      'Our approach combines preventive maintenance, rapid response support, and long-term asset planning — ensuring <strong style="color:#0A1F44;font-weight:600">reduced downtime, extended asset lifespan, and cost control</strong>.',
    ],
    highlights: [
      'Preventive and corrective maintenance',
      'Building systems management',
      'Asset lifecycle planning',
      'Health & safety compliance',
      'Energy efficiency optimisation',
    ],
  },

  // ── DELIVERABLES ──────────────────────────────────────────────────────────
  deliverables: {
    heading: 'What\'s Included',
    subtext: 'Our facility management services are structured to ensure operational continuity and long-term asset protection.',
    items: [
      {
        title: 'Preventive Maintenance Program',
        description: 'Scheduled inspections and servicing of mechanical, electrical, and structural systems to prevent unexpected failures.',
        icon: <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>,
      },
      {
        title: 'Corrective Maintenance & Repairs',
        description: 'Rapid response to breakdowns and system faults to restore operations quickly and safely.',
        icon: <><path d="M3 6h18"/><path d="M8 6v12"/><path d="M16 6v12"/></>,
      },
      {
        title: 'HVAC & Power Systems Management',
        description: 'Monitoring and servicing of air conditioning, ventilation, generators, and electrical distribution systems.',
        icon: <><rect x="3" y="4" width="18" height="12" rx="2"/><line x1="8" y1="20" x2="16" y2="20"/></>,
      },
      {
        title: 'Health, Safety & Compliance Audits',
        description: 'Routine inspections ensuring facilities comply with Nigerian regulatory and safety standards.',
        icon: <><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/></>,
      },
      {
        title: 'Asset Register & Lifecycle Tracking',
        description: 'Comprehensive documentation of facility assets including maintenance history and replacement planning.',
        icon: <><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/></>,
      },
      {
        title: 'Energy Management & Optimisation',
        description: 'Energy audits and optimisation strategies to reduce operational costs and environmental impact.',
        icon: <><circle cx="12" cy="12" r="10"/><path d="M12 2v20"/></>,
      },
      {
        title: 'Vendor & Contractor Coordination',
        description: 'Supervision of third-party service providers to ensure quality standards and service efficiency.',
        icon: <><circle cx="9" cy="7" r="4"/><path d="M5.5 21a6.5 6.5 0 0113 0"/></>,
      },
      {
        title: 'Facility Performance Reporting',
        description: 'Regular operational reports detailing maintenance activities, system performance, and improvement recommendations.',
        icon: <><line x1="6" y1="20" x2="6" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="18" y1="20" x2="18" y2="14"/></>,
      },
    ],
  },

  // ── PROCESS ───────────────────────────────────────────────────────────────
  process: {
    heading: 'Our Facility\nManagement Process',
    subtext: 'A structured 6-phase system designed to maintain asset performance and operational reliability.',
    quote:   '"Well-maintained facilities are the foundation of safe and productive operations."',
    steps: [
      {
        title: 'Facility Assessment',
        description: 'Comprehensive inspection of buildings, equipment, and systems to establish baseline condition and performance.',
        tag: 'Phase 1',
      },
      {
        title: 'Maintenance Planning',
        description: 'Development of preventive maintenance schedules aligned with manufacturer guidelines and operational needs.',
        tag: 'Phase 2',
      },
      {
        title: 'Resource Allocation',
        description: 'Assignment of skilled technicians, tools, and materials required to support ongoing maintenance activities.',
        tag: 'Phase 3',
      },
      {
        title: 'Execution & Monitoring',
        description: 'Implementation of maintenance tasks and real-time monitoring of system performance indicators.',
        tag: 'Phase 4',
      },
      {
        title: 'Compliance & Safety Review',
        description: 'Routine safety inspections and regulatory compliance checks to mitigate operational risks.',
        tag: 'Phase 5',
      },
      {
        title: 'Performance Evaluation & Optimisation',
        description: 'Review of maintenance effectiveness and introduction of efficiency improvements where necessary.',
        tag: 'Phase 6',
      },
    ],
  },

  // ── BENEFITS ──────────────────────────────────────────────────────────────
  benefits: {
    heading: 'Key Benefits of\nChoosing Raniero',
    subtext: 'Our facility management approach ensures reliability, safety, and long-term value.',
    items: [
      {
        title: 'Reduced Downtime',
        description: 'Preventive maintenance minimises unexpected breakdowns and operational interruptions.',
        icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
      },
      {
        title: 'Extended Asset Lifespan',
        description: 'Structured servicing protects equipment and infrastructure from premature failure.',
        icon: <><path d="M3 12h18"/></>,
      },
      {
        title: 'Cost Efficiency',
        description: 'Proactive maintenance reduces costly emergency repairs and replacement expenses.',
        icon: <><line x1="12" y1="1" x2="12" y2="23"/></>,
      },
      {
        title: 'Regulatory Compliance',
        description: 'Facilities remain aligned with safety and environmental standards in Nigeria.',
        icon: <><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/></>,
      },
      {
        title: 'Operational Reliability',
        description: 'Systems perform consistently, supporting uninterrupted productivity.',
        icon: <><circle cx="12" cy="12" r="10"/></>,
      },
      {
        title: 'Improved Workplace Safety',
        description: 'Properly maintained facilities create safer environments for staff and visitors.',
        icon: <><path d="M9 12l2 2 4-4"/></>,
      },
    ],
  },

  // ── CTA ───────────────────────────────────────────────────────────────────
  cta: {
    heading:    'Secure the Performance of Your Facilities',
    subtext:    'Partner with us for structured facility management solutions that protect your assets and ensure operational excellence.',
    primaryBtn: 'Request Facility Support',
    whatsapp:   '2348000000000',
  },
};