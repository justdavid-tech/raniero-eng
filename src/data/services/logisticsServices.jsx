// src/data/services/logisticsServices.js
// 
// DATA FILE FOR: Logistics Services
// Duplicate this file to create additional services and modify content accordingly.
// ─────────────────────────────────────────────────────────────────────────────

export const logisticsServicesData = {

  // ── Brand accent color for this service ──────────────────────────────────
  accent: '#10B981',

  // ── HERO ─────────────────────────────────────────────────────────────────
  hero: {
    title:    'Logistics Services',
    category: 'Engineering Services',
    headline: 'Moving Materials.\nPowering Projects.',
    subtitle: 'Reliable, efficient, and secure logistics solutions tailored to engineering, construction, and industrial operations across Nigeria.',
    image:    'https://images.unsplash.com/photo-1494412574643-ffad3f7c0c5a?w=1800&q=80&auto=format&fit=crop',
    stats: [
      { value: '500+', label: 'Deliveries Completed' },
      { value: '24/7', label: 'Operational Support' },
      { value: '100%', label: 'Safety Commitment' },
    ],
  },

  // ── OVERVIEW ──────────────────────────────────────────────────────────────
  overview: {
    image:      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80&auto=format&fit=crop',
    statValue:  'Nationwide',
    statLabel:  'Coverage',
    heading:    'What Are Logistics\nServices at Raniero?',
    paragraphs: [
      'At Raniero Engineering, <strong style="color:#0A1F44;font-weight:600">logistics is more than transportation</strong> — it is strategic coordination of materials, equipment, and personnel to ensure uninterrupted project execution.',
      'We manage the movement, storage, handling, and tracking of engineering resources across sites, ensuring materials arrive safely, on time, and in optimal condition.',
      'From heavy equipment haulage to time-sensitive material delivery, our logistics solutions are <strong style="color:#0A1F44;font-weight:600">structured for efficiency, safety, and reliability</strong> in demanding industrial environments.',
    ],
    highlights: [
      'Material transportation & distribution',
      'Heavy equipment haulage',
      'Warehousing & storage solutions',
      'Inventory coordination & tracking',
      'On-site logistics planning',
    ],
  },

  // ── DELIVERABLES ──────────────────────────────────────────────────────────
  deliverables: {
    heading: 'What\'s Included',
    subtext: 'Our logistics engagements are structured to support seamless engineering and industrial operations.',
    items: [
      {
        title: 'Transportation Planning',
        description: 'Route optimisation, load scheduling, and fleet coordination designed to minimise delays and maximise cost-efficiency.',
        icon: <><path d="M3 16V6a2 2 0 012-2h10v12"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></>,
      },
      {
        title: 'Heavy Equipment Haulage',
        description: 'Safe transportation of construction machinery, generators, industrial equipment, and oversized cargo.',
        icon: <><rect x="1" y="11" width="15" height="5"/><circle cx="5" cy="18" r="2"/><circle cx="13" cy="18" r="2"/></>,
      },
      {
        title: 'Warehousing & Storage',
        description: 'Secure short-term and long-term storage facilities with inventory control and material protection systems.',
        icon: <><path d="M3 10l9-6 9 6v10H3z"/><path d="M9 22V12h6v10"/></>,
      },
      {
        title: 'Inventory Management',
        description: 'Real-time tracking of materials and equipment to ensure availability, reduce loss, and improve accountability.',
        icon: <><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/></>,
      },
      {
        title: 'Site Delivery Coordination',
        description: 'Precise scheduling and on-site handling coordination to prevent congestion and downtime during project execution.',
        icon: <><path d="M2 12h20"/><path d="M12 2v20"/></>,
      },
      {
        title: 'Customs & Regulatory Support',
        description: 'Assistance with documentation, regulatory compliance, and clearance procedures for imported equipment and materials.',
        icon: <><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/></>,
      },
      {
        title: 'Safety & Risk Management',
        description: 'Strict adherence to transport safety standards, cargo protection protocols, and risk mitigation procedures.',
        icon: <><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></>,
      },
      {
        title: 'Logistics Reporting & Tracking',
        description: 'Delivery reports, shipment tracking updates, and performance summaries for complete operational visibility.',
        icon: <><line x1="6" y1="20" x2="6" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="18" y1="20" x2="18" y2="14"/></>,
      },
    ],
  },

  // ── PROCESS ───────────────────────────────────────────────────────────────
  process: {
    heading: 'Our Logistics\nExecution Process',
    subtext: 'A structured 6-phase logistics framework designed for reliability, safety, and operational efficiency.',
    quote:   '"Efficient logistics is the backbone of every successful engineering project."',
    steps: [
      {
        title: 'Requirement Assessment',
        description: 'We evaluate cargo type, volume, handling requirements, timelines, and site conditions to determine the optimal logistics strategy.',
        tag: 'Phase 1',
      },
      {
        title: 'Route & Risk Planning',
        description: 'We analyse transport routes, regulatory checkpoints, and potential risks to minimise delays and disruptions.',
        tag: 'Phase 2',
      },
      {
        title: 'Resource Allocation',
        description: 'Fleet selection, equipment preparation, manpower assignment, and safety planning are finalised before dispatch.',
        tag: 'Phase 3',
      },
      {
        title: 'Transportation & Monitoring',
        description: 'Shipments are tracked in real time, with coordination between drivers, supervisors, and site managers.',
        tag: 'Phase 4',
      },
      {
        title: 'Delivery & Site Handling',
        description: 'Materials are delivered safely and positioned according to site requirements to avoid operational bottlenecks.',
        tag: 'Phase 5',
      },
      {
        title: 'Reporting & Performance Review',
        description: 'We provide delivery documentation, performance reports, and continuous improvement recommendations.',
        tag: 'Phase 6',
      },
    ],
  },

  // ── BENEFITS ──────────────────────────────────────────────────────────────
  benefits: {
    heading: 'Key Benefits of\nChoosing Raniero',
    subtext: 'Clients trust our logistics team for reliability, safety, and operational precision.',
    items: [
      {
        title: 'Timely Deliveries',
        description: 'Structured planning and route optimisation ensure materials arrive exactly when needed.',
        icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
      },
      {
        title: 'Reduced Downtime',
        description: 'Efficient coordination prevents project delays caused by late or mismanaged deliveries.',
        icon: <><path d="M3 12h18"/></>,
      },
      {
        title: 'Cargo Protection',
        description: 'Strict handling and safety procedures minimise damage, loss, and operational risk.',
        icon: <><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/></>,
      },
      {
        title: 'Operational Transparency',
        description: 'Clear reporting and shipment tracking provide full visibility at every stage.',
        icon: <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/></>,
      },
      {
        title: 'Scalable Support',
        description: 'Whether small deliveries or full-scale industrial mobilisation, our logistics system scales with your needs.',
        icon: <><polyline points="3 17 9 11 13 15 21 7"/></>,
      },
      {
        title: 'Local Expertise',
        description: 'Deep understanding of Nigerian transport infrastructure, regulations, and operational realities.',
        icon: <><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/></>,
      },
    ],
  },

  // ── CTA ───────────────────────────────────────────────────────────────────
  cta: {
    heading:    'Let’s Move Your Operations Forward',
    subtext:    'Partner with us for dependable logistics solutions that keep your engineering projects running smoothly.',
    primaryBtn: 'Request Logistics Support',
    whatsapp:   '2348000000000',
  },
};