import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Services() {
  const services = [
    {
      id: 'project-management',
      title: 'Project Management',
      slug: 'project-management',
      description: 'End-to-end project management from concept to completion, ensuring on-time and on-budget delivery.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=800&q=80&auto=format&fit=crop',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      )
    },
    {
      id: 'engineering-insights',
      title: 'Engineering Design',
      slug: '#',
      description: 'Comprehensive engineering solutions tailored to complex industrial requirements and standards.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80&auto=format&fit=crop',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      )
    },
    {
      id: 'facility-management',
      title: 'Facility Management',
      slug: '#',
      description: 'Efficient operation and maintenance of physical assets to maximize lifecycle value and uptime.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2959210?w=800&q=80&auto=format&fit=crop',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      )
    },
    {
      id: 'cost-engineering',
      title: 'Cost Engineering',
      slug: '#',
      description: 'Precise budget forecasting and cost control services for large-scale engineering initiatives.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&auto=format&fit=crop',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      )
    },
    {
      id: 'training-development',
      title: 'Professional Training',
      slug: '#',
      description: 'Specialized technical training programs to enhance workforce capability and safety compliance.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb28f74b0cd?w=800&q=80&auto=format&fit=crop',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
      )
    },
    {
      id: 'oil-gas',
      title: 'Oil & Gas Solutions',
      slug: '#',
      description: 'Consultancy and engineering services specifically designed for the upstream and midstream energy sectors.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80&auto=format&fit=crop',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M20 2c0 2-2 4-4 4s-4-2-4-4"/><path d="M12 2v20"/><path d="M2 12h20"/><path d="M16 14.5a2.5 2.5 0 0 0-5 0c0 4 5 4 5 8"/><path d="M8 14.5a2.5 2.5 0 0 1 5 0c0 4-5 4-5 8"/>
        </svg>
      )
    }
  ];

  return (
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
  );
}