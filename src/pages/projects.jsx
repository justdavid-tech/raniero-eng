import { useState } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import projectsData from '../data/projects.json'

/* ─────────────────────────────────────────
   Collect unique categories for filter tabs
───────────────────────────────────────── */
const ALL = 'All'
const categories = [ALL, ...new Set(projectsData.map((p) => p.category))]

/* ─────────────────────────────────────────
   ProjectCard
───────────────────────────────────────── */
function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={() => onClick(project)}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:border-amber-500/40 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(245,158,11,0.12)]"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-slate-800">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
        ) : null}
        {/* Fallback placeholder */}
        <div
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-900"
          style={{ display: project.image ? 'none' : 'flex' }}
        >
          <svg className="w-16 h-16 text-amber-500/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full bg-amber-500/90 text-xs font-bold text-white uppercase tracking-wide">
            {project.category}
          </span>
        </div>
        {/* Year badge */}
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 rounded-full bg-black/60 text-xs font-semibold text-slate-300">
            {project.year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-['Barlow_Condensed'] font-bold text-white uppercase tracking-wide group-hover:text-amber-400 transition-colors duration-300 mb-2">
          {project.title}
        </h3>

        <div className="flex items-center gap-1 text-slate-400 text-sm mb-4">
          <svg className="w-4 h-4 text-amber-500/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{project.location}</span>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-4">
          {project.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-5 flex items-center gap-2 text-amber-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
          <span>View Details</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────
   ProjectModal
───────────────────────────────────────── */
function ProjectModal({ project, onClose }) {
  if (!project) return null
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-amber-500/20 bg-[#0A1F44] shadow-[0_0_60px_rgba(245,158,11,0.15)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close btn */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-amber-500/30 transition-colors"
        >
          ✕
        </button>

        {/* Image */}
        <div className="relative h-64 bg-slate-800 rounded-t-2xl overflow-hidden">
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-900">
              <svg className="w-20 h-20 text-amber-500/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6">
            <span className="px-3 py-1 rounded-full bg-amber-500 text-xs font-bold text-white uppercase tracking-wide">
              {project.category}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h2 className="text-3xl font-['Barlow_Condensed'] font-extrabold text-white uppercase leading-tight">
              {project.title}
            </h2>
            <span className="shrink-0 mt-1 text-amber-500 font-bold text-lg">{project.year}</span>
          </div>

          <div className="flex items-center gap-1 text-slate-400 text-sm mb-6">
            <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{project.location}</span>
          </div>

          <p className="text-slate-300 leading-relaxed mb-8 text-base">{project.summary}</p>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-amber-500 uppercase tracking-widest mb-3">Key Highlights</h4>
              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0 text-amber-400 text-xs font-bold">
                      {i + 1}
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────
   Main Page
───────────────────────────────────────── */
function Projects() {
  const [activeCategory, setActiveCategory] = useState(ALL)
  const [selectedProject, setSelectedProject] = useState(null)

  const filtered = activeCategory === ALL
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory)

  return (
    <div className="bg-[#0A1F44] min-h-screen font-['Barlow'] overflow-x-hidden">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Glow blobs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20">
            <span className="text-amber-500 font-['Barlow_Condensed'] font-bold text-sm tracking-[0.2em] uppercase">
              Showcasing Excellence
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-['Barlow_Condensed'] font-extrabold text-white uppercase tracking-tighter leading-[0.9] mb-6">
            Our <span className="text-[#F59E0B]">Projects</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed">
            A portfolio of our engineering achievements, precision-managed deliveries, and industrial solutions across the globe.
          </p>
        </div>
      </section>

      {/* ── Filter Tabs ── */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  activeCategory === cat
                    ? 'bg-amber-500 border-amber-500 text-white shadow-[0_0_20px_rgba(245,158,11,0.4)]'
                    : 'border-white/15 text-slate-400 hover:border-amber-500/40 hover:text-amber-400 bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Project Grid ── */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="py-24 text-center border border-white/5 rounded-2xl bg-white/5">
              <p className="text-slate-400 text-lg">No projects found in this category yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />

      {/* ── Modal ── */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  )
}

export default Projects