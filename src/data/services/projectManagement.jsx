// src/data/services/projectManagement.js
// ─────────────────────────────────────────────────────────────────────────────
// DATA FILE FOR: Project Management
// To create another service page, duplicate this file, rename it,
// swap out all the content below, and import it into a new wrapper page.
// ─────────────────────────────────────────────────────────────────────────────

export const projectManagementData = {

  // ── Brand accent color for this service ──────────────────────────────────
  accent: '#F59E0B',

  // ── HERO ─────────────────────────────────────────────────────────────────
  hero: {
    title:    'Project Management',
    category: 'Engineering Services',
    headline: 'Delivering Projects\nOn Time. On Budget.',
    subtitle: 'End-to-end project management services that take your engineering initiative from first concept to successful completion with full transparency at every stage.',
    image:    '/images/projectmanagement.jpeg',
    stats: [
      { value: '20+', label: 'Projects Managed' },
      { value: '6+',   label: 'Years Experience' },
      { value: '100%', label: 'Client Commitment' },
    ],
  },

  // ── OVERVIEW ──────────────────────────────────────────────────────────────
  overview: {
    image:      '/images/projectmanagement-two.jpeg',
    statValue:  'A–Z',
    statLabel:  'Full Lifecycle',
    heading:    'What is Project Management at Raniero?',
    paragraphs: [
      'At Raniero Engineering, <strong style="color:#0A1F44;font-weight:600">project management is not just coordination</strong> it is disciplined leadership applied to every phase of your engineering initiative. We take ownership of scope, schedule, cost, quality, risk, and stakeholder communication so you can focus on running your business.',
      'From the moment we are engaged, our team works to understand your project\'s unique objectives, constraints, and success criteria. We then build a tailored management framework that keeps every workstream aligned, every milestone tracked, and every decision documented.',
      'Whether you are executing a <strong style="color:#0A1F44;font-weight:600">small facility upgrade or a large-scale infrastructure project</strong>, our project management approach scales to match your needs without unnecessary overhead.',
    ],
    highlights: [
      'Full lifecycle management from initiation to closeout',
      'Budget control and cost reporting at every stage',
      'Risk identification, mitigation, and monitoring',
      'Stakeholder communication and reporting',
      'On-site and remote management capability',
    ],
  },

  // ── DELIVERABLES ──────────────────────────────────────────────────────────
  deliverables: {
    heading: 'What\'s Included',
    subtext: 'Every project management engagement includes these core deliverables — tailored to your project scope and complexity.',
    items: [
      {
        title: 'Project Charter & Scope Definition',
        description: 'A clearly documented project charter defining objectives, scope boundaries, assumptions, constraints, and success criteria agreed upon by all stakeholders.',
        icon: <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>,
      },
      {
        title: 'Work Breakdown Structure (WBS)',
        description: 'A detailed decomposition of all project deliverables into manageable work packages forming the foundation of your schedule and cost estimates.',
        icon: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 17.5h7M17.5 14v7"/></>,
      },
      {
        title: 'Master Project Schedule',
        description: 'A fully resourced schedule with critical path analysis, milestone tracking, and float management reviewed and updated throughout the project lifecycle.',
        icon: <><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></>,
      },
      {
        title: 'Budget & Cost Control Plan',
        description: 'Baseline budgeting, cost tracking, variance analysis, and earned value reporting to keep your project financially on track at every stage.',
        icon: <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></>,
      },
      {
        title: 'Risk Register & Mitigation Plan',
        description: 'A live risk register identifying potential threats and opportunities, with assigned owners, probability ratings, and proactive mitigation strategies.',
        icon: <><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></>,
      },
      {
        title: 'Progress Reports & Stakeholder Updates',
        description: 'Regular written progress reports, executive dashboards, and stakeholder meetings ensuring complete visibility at every level of your organisation.',
        icon: <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>,
      }
    ],
  },

  // ── PROCESS ───────────────────────────────────────────────────────────────
  process: {
    heading: 'Our Project\nManagement Process',
    subtext: 'A proven 6-phase approach built on industry best practices — adapted to the specific demands of each client and project.',
    quote:   '"Our flexibility in approach and rigidity in standards is what sets our project management apart."',
    steps: [
      {
        title: 'Initiation & Scoping',
        description: 'We meet with all key stakeholders to understand project objectives, constraints, and success criteria. We define scope boundaries, identify initial risks, and produce a Project Charter for sign-off.',
        tag: 'Week 1–2',
      },
      {
        title: 'Planning & Scheduling',
        description: 'We develop the WBS, master schedule, budget baseline, risk register, and communication plan. Every team member and contractor understands their role before work begins.',
        tag: 'Week 2–4',
      },
      {
        title: 'Procurement & Mobilisation',
        description: 'We manage vendor selection, contract negotiation, and contractor onboarding. Resources are mobilised in alignment with the project schedule to avoid costly delays.',
        tag: 'Week 3–5',
      },
      {
        title: 'Execution & Monitoring',
        description: 'We oversee day-to-day project activities, track progress against the baseline, manage change requests, and issue regular status reports to all stakeholders.',
        tag: 'Ongoing',
      },
      {
        title: 'Quality Control & Inspection',
        description: 'At each milestone, we conduct quality inspections, review deliverables against specifications, and manage any non-conformances before they escalate.',
        tag: 'Milestone-based',
      },
      {
        title: 'Closeout & Handover',
        description: 'We complete final documentation, obtain client acceptance, archive project records, capture lessons learned, and produce the handover dossier.',
        tag: 'Final Phase',
      },
    ],
  },

  // ── BENEFITS ──────────────────────────────────────────────────────────────
  benefits: {
    heading: 'Key Benefits of\nChoosing Raniero',
    subtext: 'Here is what clients consistently report after working with our project management team.',
    items: [
      {
        title: 'On-Time Delivery',
        description: 'Our scheduling discipline and proactive issue resolution means your project hits its milestones not just the final deadline.',
        icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
      },
      {
        title: 'Budget Protection',
        description: 'Rigorous cost control and early change management means fewer surprises. We protect your budget from scope creep and unplanned expenditure.',
        icon: <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></>,
      },
      {
        title: 'Single Point of Accountability',
        description: 'You have one team to call. We coordinate all contractors, vendors, and workstreams so you never have to chase multiple parties for answers.',
        icon: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></>,
      },
      {
        title: 'Complete Transparency',
        description: 'No surprises. You receive regular written reports, real-time access to key project data, and honest communication at every stage.',
        icon: <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>,
      },
      {
        title: 'Risk-Aware Execution',
        description: 'We identify and plan for risks before they become problems reducing the likelihood of costly delays, rework, or safety incidents.',
        icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></>,
      },
      {
        title: 'Locally Grounded, Globally Minded',
        description: 'We understand the Nigerian project environment deeply regulatory requirements, contractor landscape, logistics challenges while applying global standards.',
        icon: <><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></>,
      },
    ],
  },

  // ── CTA ───────────────────────────────────────────────────────────────────
  cta: {
    heading:    'Let\'s Manage Your Next Project Together',
    subtext:    'Tell us about your project and we\'ll schedule a free initial consultation to discuss how we can help you deliver it successfully.',
    primaryBtn: 'Request Consultation',
    whatsapp:   '2348152598520',
  },
};