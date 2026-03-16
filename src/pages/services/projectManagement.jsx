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

import { Helmet } from "react-helmet-async";

<Helmet>
  <title>Engineering Project Management | Raniero Engineering Nigeria</title>

  <meta
    name="description"
    content="Raniero Engineering provides professional project management services for engineering, construction, and infrastructure projects across Nigeria, ensuring efficient planning, coordination, and delivery."
  />

  <meta
    name="keywords"
    content="engineering project management Nigeria, construction project management, infrastructure project coordination, engineering consulting services, Raniero Engineering project management"
  />

  <meta name="author" content="Raniero Engineering" />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Engineering Project Management Services | Raniero Engineering"
  />

  <meta
    property="og:description"
    content="Expert project management services for engineering and construction projects, ensuring quality delivery, efficiency, and safety."
  />

  <meta property="og:type" content="website" />

  <meta
    property="og:url"
    content="https://raniero.com.ng/services/project-management"
  />

  <meta
    property="og:image"
    content="https://raniero.com.ng/images/og-image.png"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />

  <meta
    name="twitter:title"
    content="Engineering Project Management | Raniero Engineering"
  />

  <meta
    name="twitter:description"
    content="Professional project management for engineering, construction, and infrastructure projects delivered by Raniero Engineering."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://raniero.com.ng/services/project-management"
  />
</Helmet>

export default function ProjectManagement() {
  return (
    <>
      <Navbar />
      <ServicePage data={projectManagementData} />
      <Footer />
    </>
  );
}