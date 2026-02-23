import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Services() {
const services = [
  {
    id: 'project-management',
    title: 'Project Management',
    slug: '/project-management',
    description: 'End-to-end project oversight ensuring delivery on time, within scope, and on budget through proven methodologies and rigorous planning.',
    image: '/images/projectmanagement.jpeg',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    )
  },
  {
    id: 'corporate-training',
    title: 'Corporate Training',
    slug: '/corporate-training',
    description: 'Specialized technical and professional training programs to enhance workforce capability, performance, and safety compliance across all levels.',
    image: '/images/corporatetraining.jpeg',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    )
  },
  {
    id: 'facility-management',
    title: 'Facility Management',
    slug: '/facility-management',
    description: 'Efficient operation and maintenance of physical assets to maximize lifecycle value, minimize downtime, and ensure regulatory compliance.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    )
  },
  {
    id: 'design-execution',
    title: 'Design & Execution',
    slug: '/design-execution',
    description: 'From concept to completion — innovative engineering design paired with precise execution for outstanding built environments and infrastructure.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80&auto=format&fit=crop',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    )
  },
  {
    id: 'logistics-services',
    title: 'Logistics Services',
    slug: '/logistics-services',
    description: 'Streamlined supply chain and logistics strategies that reduce cost, improve delivery speed, and ensure reliability across complex project operations.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80&auto=format&fit=crop',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    )
  },
  {
    id: 'process-establishment',
    title: 'Process Establishment',
    slug: '/process-establishment',
    description: 'Building scalable operational frameworks, workflows, and standard operating procedures that drive consistency, efficiency, and organizational growth.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/>
      </svg>
    )
  },
  {
    id: 'audit',
    title: 'Engineering Audit',
    slug: '/audit',
    description: 'Rigorous technical audits that identify risks, verify compliance, and surface actionable improvement pathways to safeguard project integrity.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&auto=format&fit=crop',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
      </svg>
    )
  },
  {
    id: 'cost-engineering',
    title: 'Cost Engineering',
    slug: '/cost-engineering',
    description: 'Precise cost estimation, value engineering, and financial control strategies to maximize project ROI and keep large-scale initiatives on budget.',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80&auto=format&fit=crop',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    )
  },
  {
    id: 'civil-engineering',
    title: 'Civil Engineering',
    slug: '/civil-engineering',
    description: 'Structural design, infrastructure planning, and site development solutions built for long-term durability, safety, and regulatory compliance.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format&fit=crop',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M2 20h20"/><path d="M6 20V10l6-6 6 6v10"/><path d="M10 20v-5h4v5"/>
      </svg>
    )
  },
  {
    id: 'mechanical-engineering',
    title: 'Mechanical Engineering',
    slug: '/mechanical-engineering',
    description: 'Mechanical systems design, analysis, and optimization — delivering performance, safety, and long-term efficiency for complex industrial applications.',
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80&auto=format&fit=crop',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M4.93 19.07l1.41-1.41M19.07 19.07l-1.41-1.41M12 2v2M12 20v2M2 12h2M20 12h2"/>
      </svg>
    )
  },
  {
    id: 'electrical-engineering',
    title: 'Electrical Engineering',
    slug: '/electrical-engineering',
    description: 'Power systems, electrical design, and smart installations engineered for reliability, energy efficiency, and the demands of modern industrial operations.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80&auto=format&fit=crop',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    )
  },
];

  return (
  <>
  {/* <style>
    {`
     .sec-section {
          background-color: #F3F4F6;
          background-image:
            linear-gradient(rgba(10,31,68,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10,31,68,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
          position: relative;
          overflow: hidden;
        }
    `}
  </style> */}
    <div className="bg-[#0A1F44] min-h-screen font-['Barlow'] overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F59E0B] opacity-[0.03] rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#3B82F6] opacity-[0.03] rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20">
            <span className="text-amber-500 font-['Barlow_Condensed'] font-bold text-sm tracking-[0.2em] uppercase">Engineering Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-['Barlow_Condensed'] font-extrabold text-white uppercase tracking-tighter leading-[0.9] mb-6">
            Our <span className="text-[#F59E0B]">Services</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed">
            Delivering innovative engineering solutions and strategic project management across global energy and infrastructure sectors.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group relative bg-[#07152E] border border-white/5 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-amber-500/30">
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply transition-opacity group-hover:opacity-20 z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 z-20 w-12 h-12 flex items-center justify-center bg-amber-500 text-[#07152E]">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-['Barlow_Condensed'] font-bold text-white uppercase tracking-tight mb-4 group-hover:text-amber-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <Link 
                  to={service.slug === '#' ? '/services' : `/services/${service.slug}`}
                  className={`inline-flex items-center gap-2 font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-widest ${service.slug === '#' ? 'text-slate-500 cursor-not-allowed' : 'text-amber-500 hover:text-amber-400'}`}
                >
                  {service.slug === '#' ? 'Coming Soon' : 'Explore Service'}
                  {service.slug !== '#' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform group-hover:translate-x-1">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  )}
                </Link>
              </div>

              {/* Decorative Accent */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-amber-500 transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-amber-500 to-amber-600 p-12 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl transition-transform group-hover:scale-125 duration-700"></div>
          
          <h2 className="text-4xl md:text-5xl font-['Barlow_Condensed'] font-extrabold text-[#07152E] uppercase tracking-tighter mb-6 relative z-10">
            Need a custom engineering solution?
          </h2>
          <p className="text-[#07152E]/80 text-lg font-medium mb-10 max-w-2xl mx-auto relative z-10">
            Our team of experts is ready to discuss your project requirements and help you achieve your technical objectives.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-10 py-4 bg-[#07152E] text-white font-['Barlow_Condensed'] font-bold uppercase tracking-widest hover:bg-slate-900 transition-colors relative z-10 box-shadow-xl"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}