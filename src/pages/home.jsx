import Hero from '../components/hero'
import Navbar from '../components/navbar'
import Services from '../components/services'
import AboutSection from '../components/aboutsection'
import WhyChooseUs from '../components/whychooseus'
import SectorsWeServe from '../components/sectorsweserve'
import Testimonials from '../components/testimonies'
import InsightsPreview from '../components/insightspreview'
import Footer from '../components/footer'

function Home() {
  return (
   <>
   <Navbar />
   <Hero />
   <Services />
   <AboutSection />
   <WhyChooseUs />
   <SectorsWeServe />
   <Testimonials />
   <InsightsPreview />
   <Footer />
   </>
  )
}

export default Home

