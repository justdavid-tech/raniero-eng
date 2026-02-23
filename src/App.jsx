import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Services from './pages/services'
import Projects from './pages/projects'
import Contact from './pages/contact'
import InsightsPage from './pages/insightspage'
import ArticlePage from './pages/articlepage'

// Sub pages
import ProjectManagement from './pages/services/projectManagement'
import CorporateTraining from './pages/services/corporateTraining'
import FacilityManagement from './pages/services/facilityManagement';
import DesignExecution    from './pages/services/designExecution';
import LogisticsServices  from './pages/services/logisticsServices';
import ProcessEstablishment from './pages/services/processEstablishment';
import EngineeringAudit   from './pages/services/EngineeringAudit';
import CostEngineering    from './pages/services/costEngineering';

import ScrollToTop from './components/ScrollToTop'
import ScrollToTopButton from './components/ScrollToTopButton'
function App() {
  return (
    <>
    <ScrollToTop />  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/insights" element={<InsightsPage />} />
      <Route path="/insights/:slug" element={<ArticlePage />} />

      {/* Sub pages */}
      <Route path="/services/project-management" element={<ProjectManagement />} />
      <Route path="/services/corporate-training"   element={<CorporateTraining />} />
      <Route path="/services/facility-management"  element={<FacilityManagement />} />
      <Route path="/services/design-execution"     element={<DesignExecution />} />
      <Route path="/services/logistics-services"   element={<LogisticsServices />} />
      <Route path="/services/process-establishment" element={<ProcessEstablishment />} />
      <Route path="/services/audit"    element={<EngineeringAudit />} />
      <Route path="/services/cost-engineering"     element={<CostEngineering />} />
    </Routes>
    <ScrollToTopButton />
    </>
  )
}

export default App
