import Navbar from '../components/navbar'
import Footer from '../components/footer'

function Projects() {
    return (
        <div className="bg-[#0A1F44] min-h-screen font-['Barlow'] overflow-x-hidden">
            <Navbar />
            
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                        <span className="text-amber-500 font-['Barlow_Condensed'] font-bold text-sm tracking-[0.2em] uppercase">Showcasing Excellence</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-['Barlow_Condensed'] font-extrabold text-white uppercase tracking-tighter leading-[0.9] mb-6">
                        Our <span className="text-[#F59E0B]">Projects</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed mb-12">
                        A portfolio of our engineering achievements, precision-managed deliveries, and industrial solutions across the globe.
                    </p>

                    <div className="mt-20 py-24 border border-white/5 bg-white/5 backdrop-blur-sm">
                        <h2 className="text-3xl font-['Barlow_Condensed'] font-bold text-white uppercase mb-4">Portfolio Coming Soon</h2>
                        <p className="text-slate-400 max-w-lg mx-auto">
                            We are currently documenting our latest project deliveries. Check back soon to explore our engineering impact in detail.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Projects