// src/data/services/electricalEngineering.js
//
// DATA FILE FOR: Electrical Engineering
// Duplicate this file to create additional services and modify content accordingly.
// ─────────────────────────────────────────────────────────────────────────────

export const electricalEngineeringData = {

  // ── Brand accent color for this service ──────────────────────────────────
  accent: '#F59E0B',

  // ── HERO ─────────────────────────────────────────────────────────────────
  hero: {
    title:    'Electrical Engineering',
    category: 'Engineering Services',
    headline: 'Power Smartly.\nDesign Safely.\nOperate Efficiently.',
    subtitle: 'We provide end-to-end electrical engineering solutions — from system design and installation to testing, commissioning, and long-term maintenance.',
    image:    'https://images.unsplash.com/photo-1581092919536-1c2b5d1d5f6e?w=1800&q=80&auto=format&fit=crop',
    stats: [
      { value: '180+', label: 'Projects Completed' },
      { value: '7+',   label: 'Years Experience' },
      { value: '100%', label: 'Safety Compliant' },
    ],
  },

  // ── OVERVIEW ──────────────────────────────────────────────────────────────
  overview: {
    image:      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=900&q=80&auto=format&fit=crop',
    statValue:  'Power',
    statLabel:  'Reliability',
    heading:    'What is Electrical\nEngineering at Raniero?',
    paragraphs: [
      'At Raniero Engineering, <strong style="color:#0A1F44;font-weight:600">electrical engineering focuses on the design, installation, and optimization of safe and efficient power systems</strong> for industrial, commercial, and infrastructure projects.',
      'We deliver solutions covering power distribution, control systems, industrial automation, renewable integration, and energy management.',
      'Our team ensures every system meets <strong style="color:#0A1F44;font-weight:600">regulatory standards, operational efficiency targets, and long-term reliability requirements</strong>.',
    ],
    highlights: [
      'Power distribution system design',
      'Switchgear & panel installation',
      'Industrial automation & control systems',
      'Renewable energy integration',
      'Electrical maintenance & troubleshooting',
    ],
  },

  // ── DELIVERABLES ──────────────────────────────────────────────────────────
  deliverables: {
    heading: 'What\'s Included',
    subtext: 'Our electrical engineering services cover the complete lifecycle of power and control systems.',
    items: [
      {
        title: 'Electrical System Design',
        description: 'Detailed design of LV/MV power distribution and electrical layouts.',
        icon: <><circle cx="12" cy="12" r="10"/><path d="M13 2L3 14h9l-1 8 10-12h-9z"/></>,
      },
      {
        title: 'Panel & Switchgear Installation',
        description: 'Installation of distribution boards, switchgear, and protection systems.',
        icon: <><rect x="3" y="3" width="18" height="18" rx="2"/></>,
      },
      {
        title: 'Industrial Wiring & Cabling',
        description: 'Structured cabling and industrial electrical wiring solutions.',
        icon: <><path d="M4 12h16"/><path d="M12 4v16"/></>,
      },
      {
        title: 'Automation & Control Systems',
        description: 'PLC integration, motor controls, and smart control systems.',
        icon: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a7.97 7.97 0 000-6"/></>,
      },
      {
        title: 'Testing & Commissioning',
        description: 'Verification of system safety, load performance, and protection settings.',
        icon: <><polyline points="3 17 9 11 13 15 21 7"/></>,
      },
      {
        title: 'Energy Audits & Optimization',
        description: 'Assessment and optimization of energy usage for cost efficiency.',
        icon: <><path d="M12 2v20"/><path d="M2 12h20"/></>,
      },
      {
        title: 'Preventive Maintenance',
        description: 'Routine inspection and maintenance to prevent system failures.',
        icon: <><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/></>,
      },
      {
        title: 'Technical Documentation',
        description: 'Preparation of electrical drawings, load schedules, and as-built documentation.',
        icon: <><rect x="4" y="3" width="16" height="18" rx="2"/></>,
      },
    ],
  },

  // ── PROCESS ───────────────────────────────────────────────────────────────
  process: {
    heading: 'Our Electrical\nEngineering Process',
    subtext: 'A structured 6-phase methodology ensuring safety, compliance, and performance.',
    quote:   '"Reliable power begins with intelligent design."',
    steps: [
      {
        title: 'Requirement Analysis & Site Survey',
        description: 'Assessment of power demand, infrastructure, and compliance requirements.',
        tag: 'Phase 1',
      },
      {
        title: 'System Design & Load Calculation',
        description: 'Development of electrical schematics and load distribution plans.',
        tag: 'Phase 2',
      },
      {
        title: 'Procurement & Material Selection',
        description: 'Selection of certified electrical components and equipment.',
        tag: 'Phase 3',
      },
      {
        title: 'Installation & Integration',
        description: 'Professional installation and integration with existing systems.',
        tag: 'Phase 4',
      },
      {
        title: 'Testing & Commissioning',
        description: 'Comprehensive testing to ensure operational safety and efficiency.',
        tag: 'Phase 5',
      },
      {
        title: 'Maintenance & Technical Support',
        description: 'Ongoing monitoring and preventive maintenance services.',
        tag: 'Phase 6',
      },
    ],
  },

  // ── BENEFITS ──────────────────────────────────────────────────────────────
  benefits: {
    heading: 'Key Benefits of\nChoosing Raniero',
    subtext: 'Our electrical expertise ensures safe, reliable, and energy-efficient operations.',
    items: [
      {
        title: 'Enhanced Safety',
        description: 'Systems designed and installed according to strict safety standards.',
        icon: <><line x1="12" y1="1" x2="12" y2="23"/></>,
      },
      {
        title: 'Energy Efficiency',
        description: 'Optimized power systems that reduce energy waste and costs.',
        icon: <><path d="M3 12h18"/></>,
      },
      {
        title: 'Operational Reliability',
        description: 'Stable and dependable power supply for continuous operations.',
        icon: <><circle cx="12" cy="12" r="10"/></>,
      },
      {
        title: 'Regulatory Compliance',
        description: 'Full adherence to industry and national electrical standards.',
        icon: <><polyline points="3 17 9 11 13 15 21 7"/></>,
      },
      {
        title: 'Scalable Infrastructure',
        description: 'Electrical systems built to accommodate future expansion.',
        icon: <><path d="M12 3v18"/></>,
      },
      {
        title: 'Reduced Downtime',
        description: 'Preventive strategies that minimize electrical faults and outages.',
        icon: <><path d="M5 12h14"/></>,
      },
    ],
  },

  // ── CTA ───────────────────────────────────────────────────────────────────
  cta: {
    heading:    'Power Your Projects with Confidence',
    subtext:    'Partner with Raniero Engineering for safe, efficient, and future-ready electrical solutions.',
    primaryBtn: 'Start Your Electrical Project',
    whatsapp:   '2348000000000',
  },
};