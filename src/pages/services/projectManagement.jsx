// src/pages/services/ProjectManagement.jsx
// ─────────────────────────────────────────────────────────────────────────────
// This is the actual page component registered in your router.
// It simply imports the data and passes it to the reusable ServicePage template.
//
// ROUTE: <Route path="/services/project-management" element={<ProjectManagement />} />
// ─────────────────────────────────────────────────────────────────────────────

import ServicePage from './ServicePage';
import { projectManagementData } from '../../data/services/projectManagement.jsx';
import Navbar from '../../components/navbar.jsx';
import Footer from '../../components/footer.jsx';

export default function ProjectManagement() {
  return (
    <>
      <Navbar />
      <ServicePage data={projectManagementData} />
      <Footer />
    </>
  );
}