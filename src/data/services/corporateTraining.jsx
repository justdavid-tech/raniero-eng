// src/data/services/corporateTraining.js
//
// DATA FILE FOR: Corporate Training
// Duplicate this file to create additional services and modify content accordingly.
// ─────────────────────────────────────────────────────────────────────────────

export const corporateTrainingData = {

  // ── Brand accent color for this service ──────────────────────────────────
  accent: '#F43F5E',

  // ── HERO ─────────────────────────────────────────────────────────────────
  hero: {
    title:    'Corporate Training',
    category: 'Professional Services',
    headline: 'Empower Teams.\nEnhance Skills.',
    subtitle: 'We design and deliver targeted corporate training programs to upskill your workforce, boost productivity, and align your team with industry best practices.',
    image:    'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1800&q=80&auto=format&fit=crop',
    stats: [
      { value: '150+', label: 'Training Sessions Delivered' },
      { value: '500+', label: 'Employees Trained' },
      { value: '95%',  label: 'Client Satisfaction' },
    ],
  },

  // ── OVERVIEW ──────────────────────────────────────────────────────────────
  overview: {
    image:      'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=900&q=80&auto=format&fit=crop',
    statValue:  'Professional',
    statLabel:  'Development',
    heading:    'What is Corporate\nTraining at Raniero?',
    paragraphs: [
      'At Raniero, <strong style="color:#0A1F44;font-weight:600">corporate training programs are tailored to meet your organization’s strategic objectives</strong>. We focus on skills development, knowledge enhancement, and behavioral transformation.',
      'Our team works closely with your HR and management teams to identify skill gaps, design engaging learning experiences, and deliver results that drive performance.',
      'Each training session is designed to <strong style="color:#0A1F44;font-weight:600">maximize employee engagement, knowledge retention, and practical application</strong> in the workplace.',
    ],
    highlights: [
      'Customized training programs',
      'Skill gap analysis and solution design',
      'Interactive workshops and hands-on sessions',
      'Performance improvement and measurement',
      'Leadership and professional development',
    ],
  },

  // ── DELIVERABLES ──────────────────────────────────────────────────────────
  deliverables: {
    heading: 'What\'s Included',
    subtext: 'Our corporate training service includes comprehensive learning solutions for teams of any size.',
    items: [
      {
        title: 'Training Needs Analysis',
        description: 'Identifying skill gaps, learning objectives, and organizational goals.',
        icon: <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>,
      },
      {
        title: 'Customized Curriculum Design',
        description: 'Developing program content tailored to your team’s needs and industry standards.',
        icon: <><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/></>,
      },
      {
        title: 'Interactive Workshops',
        description: 'Hands-on training sessions to reinforce learning and practical application.',
        icon: <><rect x="4" y="3" width="16" height="18" rx="2"/><line x1="8" y1="7" x2="16" y2="7"/></>,
      },
      {
        title: 'E-Learning & Resource Materials',
        description: 'Provision of digital learning resources, manuals, and follow-up exercises.',
        icon: <><path d="M3 12h18"/><path d="M12 3v18"/></>,
      },
      {
        title: 'Assessment & Feedback',
        description: 'Pre- and post-training evaluations to measure knowledge gain and performance improvement.',
        icon: <><polyline points="3 17 9 11 13 15 21 7"/></>,
      },
      {
        title: 'Leadership Development',
        description: 'Programs focused on enhancing managerial and leadership capabilities.',
        icon: <><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/></>,
      },
      {
        title: 'Follow-up & Coaching',
        description: 'Post-training support to reinforce concepts and ensure long-term skill application.',
        icon: <><circle cx="9" cy="7" r="4"/><path d="M5.5 21a6.5 6.5 0 0113 0"/></>,
      },
      {
        title: 'Certification & Recognition',
        description: 'Formal acknowledgment of participants’ achievements and skills acquired.',
        icon: <><rect x="4" y="3" width="16" height="18" rx="2"/></>,
      },
    ],
  },

  // ── PROCESS ───────────────────────────────────────────────────────────────
  process: {
    heading: 'Our Corporate\nTraining Process',
    subtext: 'A structured 6-phase methodology to deliver impactful learning outcomes.',
    quote:   '"Empowering teams through learning and development."',
    steps: [
      {
        title: 'Needs Assessment & Consultation',
        description: 'Engage stakeholders to determine organizational goals and skills gaps.',
        tag: 'Phase 1',
      },
      {
        title: 'Curriculum Design & Planning',
        description: 'Develop customized content, learning paths, and schedules.',
        tag: 'Phase 2',
      },
      {
        title: 'Training Delivery',
        description: 'Conduct workshops, seminars, and hands-on sessions for employees.',
        tag: 'Phase 3',
      },
      {
        title: 'Evaluation & Feedback',
        description: 'Assess knowledge retention and participant engagement.',
        tag: 'Phase 4',
      },
      {
        title: 'Post-Training Support',
        description: 'Provide follow-up coaching, resources, and mentoring for practical application.',
        tag: 'Phase 5',
      },
      {
        title: 'Certification & Continuous Improvement',
        description: 'Issue certificates and gather insights to refine future programs.',
        tag: 'Phase 6',
      },
    ],
  },

  // ── BENEFITS ──────────────────────────────────────────────────────────────
  benefits: {
    heading: 'Key Benefits of\nChoosing Raniero',
    subtext: 'Our corporate training programs help organizations develop high-performing, skilled, and motivated teams.',
    items: [
      {
        title: 'Enhanced Skills',
        description: 'Employees gain relevant knowledge and practical skills for improved performance.',
        icon: <><circle cx="12" cy="12" r="10"/></>,
      },
      {
        title: 'Increased Productivity',
        description: 'Well-trained teams perform tasks efficiently and effectively.',
        icon: <><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/></>,
      },
      {
        title: 'Better Employee Engagement',
        description: 'Interactive learning fosters motivation and commitment.',
        icon: <><line x1="12" y1="1" x2="12" y2="23"/></>,
      },
      {
        title: 'Leadership Development',
        description: 'Future leaders are nurtured through targeted programs.',
        icon: <><path d="M3 12h18"/></>,
      },
      {
        title: 'Organizational Alignment',
        description: 'Training ensures teams are aligned with strategic objectives.',
        icon: <><path d="M12 3v18"/></>,
      },
      {
        title: 'Measurable Impact',
        description: 'Evaluations and assessments provide tangible results and insights.',
        icon: <><polyline points="3 17 9 11 13 15 21 7"/></>,
      },
    ],
  },

  // ── CTA ───────────────────────────────────────────────────────────────────
  cta: {
    heading:    'Empower Your Workforce Today',
    subtext:    'Partner with Raniero to upskill your team and enhance organizational performance.',
    primaryBtn: 'Schedule a Training Session',
    whatsapp:   '2348000000000',
  },
};