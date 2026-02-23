// src/data/services/mechanicalEngineering.js
//
// DATA FILE FOR: Mechanical Engineering
// Duplicate this file to create additional services and modify content accordingly.
// ─────────────────────────────────────────────────────────────────────────────

export const mechanicalEngineeringData = {

  // ── Brand accent color for this service ──────────────────────────────────
  accent: '#F59E0B',

  // ── HERO ─────────────────────────────────────────────────────────────────
  hero: {
    title:    'Mechanical Engineering',
    category: 'Engineering Services',
    headline: 'Design Efficiently.\nBuild Precisely.\nOperate Reliably.',
    subtitle: 'We deliver comprehensive mechanical engineering solutions from system design and fabrication to installation, testing, and maintenance support.',
    image:    '/images/mechanical.jpeg',
    stats: [
      { value: '15+', label: 'Projects Completed' },
      { value: '7+',   label: 'Years Experience' },
      { value: '96%', label: 'Safety Compliant' },
    ],
  },

  // ── OVERVIEW ──────────────────────────────────────────────────────────────
  overview: {
    image:      '/images/mechanical-two.jpeg',
    statValue:  'System',
    statLabel:  'Optimization',
    heading:    'What is Mechanical Engineering at Raniero?',
    paragraphs: [
      'At Raniero Engineering, <strong style="color:#0A1F44;font-weight:600">mechanical engineering focuses on the design, installation, and optimization of mechanical systems</strong> that power industrial and commercial operations.',
      'We provide solutions across HVAC systems, piping networks, rotating equipment, fabrication works, and industrial machinery.',
      'Our team integrates <strong style="color:#0A1F44;font-weight:600">technical precision, safety standards, and operational efficiency</strong> to ensure long-term performance and reliability.',
    ],
    highlights: [
      'HVAC system design & installation',
      'Industrial piping & fabrication',
      'Equipment installation & commissioning',
      'Plant maintenance & reliability support',
      'Mechanical system optimization',
    ],
  },

  // ── DELIVERABLES ──────────────────────────────────────────────────────────
  deliverables: {
    heading: 'What\'s Included',
    subtext: 'Our mechanical engineering services cover the full lifecycle of system design, execution, and support.',
    items: [
      {
        title: 'Mechanical System Design',
        description: 'Engineering design of HVAC, piping, and industrial mechanical systems.',
        icon: <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>,
      },
      {
        title: 'Fabrication & Assembly',
        description: 'Precision fabrication of structural and mechanical components.',
        icon: <><rect x="3" y="3" width="18" height="18" rx="2"/></>,
      },
      {
        title: 'Equipment Installation',
        description: 'Professional installation of mechanical equipment and machinery.',
        icon: <><line x1="3" y1="12" x2="21" y2="12"/></>,
      },
      {
        title: 'Piping Systems Implementation',
        description: 'Design and installation of process and utility piping systems.',
        icon: <><path d="M3 12h18"/><path d="M12 3v18"/></>,
      },
      {
        title: 'Testing & Commissioning',
        description: 'System performance verification and operational readiness testing.',
        icon: <><polyline points="3 17 9 11 13 15 21 7"/></>,
      },
      {
        title: 'Preventive Maintenance Planning',
        description: 'Development of maintenance schedules to reduce downtime and extend asset life.',
        icon: <><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/></>,
      },
      {
        title: 'System Optimization & Upgrades',
        description: 'Improvement of existing mechanical systems for higher efficiency and performance.',
        icon: <><circle cx="9" cy="7" r="4"/><path d="M5.5 21a6.5 6.5 0 0113 0"/></>,
      },
      {
        title: 'Technical Documentation',
        description: 'Preparation of detailed drawings, manuals, and as-built documentation.',
        icon: <><rect x="4" y="3" width="16" height="18" rx="2"/></>,
      },
    ],
  },

  // ── PROCESS ───────────────────────────────────────────────────────────────
  process: {
    heading: 'Our Mechanical\nEngineering Process',
    subtext: 'A structured 6-phase methodology ensuring efficiency, safety, and performance.',
    quote:   '"Reliable systems begin with precision engineering."',
    steps: [
      {
        title: 'Project Consultation & Requirement Analysis',
        description: 'Understanding operational needs, system capacity, and compliance requirements.',
        tag: 'Phase 1',
      },
      {
        title: 'Concept & Detailed Design',
        description: 'Development of mechanical layouts, calculations, and technical drawings.',
        tag: 'Phase 2',
      },
      {
        title: 'Procurement & Fabrication',
        description: 'Sourcing materials and fabricating mechanical components.',
        tag: 'Phase 3',
      },
      {
        title: 'Installation & Integration',
        description: 'On-site installation and system integration with existing infrastructure.',
        tag: 'Phase 4',
      },
      {
        title: 'Testing & Commissioning',
        description: 'Performance validation to ensure systems operate as designed.',
        tag: 'Phase 5',
      },
      {
        title: 'Maintenance & Support',
        description: 'Ongoing technical support and preventive maintenance services.',
        tag: 'Phase 6',
      },
    ],
  },

  // ── BENEFITS ──────────────────────────────────────────────────────────────
  benefits: {
    heading: 'Key Benefits of\nChoosing Raniero',
    subtext: 'Our mechanical engineering expertise ensures safe, efficient, and high-performance systems.',
    items: [
      {
        title: 'Operational Efficiency',
        description: 'Optimized systems that reduce energy consumption and improve output.',
        icon: <><circle cx="12" cy="12" r="10"/></>,
      },
      {
        title: 'Enhanced Reliability',
        description: 'Robust engineering that minimizes downtime and equipment failure.',
        icon: <><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/></>,
      },
      {
        title: 'Safety Compliance',
        description: 'All mechanical systems meet industry safety and regulatory standards.',
        icon: <><line x1="12" y1="1" x2="12" y2="23"/></>,
      },
      {
        title: 'Cost Efficiency',
        description: 'Smart engineering decisions that reduce long-term operational costs.',
        icon: <><path d="M3 12h18"/></>,
      },
      {
        title: 'Scalable Solutions',
        description: 'Systems designed to accommodate future expansion and upgrades.',
        icon: <><path d="M12 3v18"/></>,
      },
      {
        title: 'Long-Term Asset Value',
        description: 'Engineering solutions built for durability and sustained performance.',
        icon: <><polyline points="3 17 9 11 13 15 21 7"/></>,
      },
    ],
  },

  // ── CTA ───────────────────────────────────────────────────────────────────
  cta: {
    heading:    'Power Your Operations with Precision Engineering',
    subtext:    'Partner with Raniero Engineering for reliable, compliant, and performance-driven mechanical solutions.',
    primaryBtn: 'Start Your Mechanical Project',
    whatsapp:   '2348152598520',
  },
};