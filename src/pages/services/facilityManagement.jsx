import ServicePage from './ServicePage';
import { facilityManagementData } from '../../data/services/facilityManagement.jsx';
import Navbar from '../../components/navbar.jsx';
import Footer from '../../components/footer.jsx';

import { Helmet } from "react-helmet-async";

<Helmet>
  <title>Facility & Logistics Services | Raniero Engineering Nigeria</title>

  <meta
    name="description"
    content="Raniero Engineering provides facility and logistics services supporting engineering, construction, and infrastructure projects with efficient operational coordination and resource management."
  />

  <meta
    name="keywords"
    content="facility logistics services Nigeria, engineering logistics support, construction logistics management, infrastructure facility services, Raniero Engineering logistics"
  />

  <meta name="author" content="Raniero Engineering" />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Facility & Logistics Services | Raniero Engineering"
  />

  <meta
    property="og:description"
    content="Professional facility and logistics services supporting engineering operations, construction projects, and infrastructure development."
  />

  <meta property="og:type" content="website" />

  <meta
    property="og:url"
    content="https://raniero.com.ng/services/facility-logistics"
  />

  <meta
    property="og:image"
    content="https://raniero.com.ng/images/og-image.png"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />

  <meta
    name="twitter:title"
    content="Facility & Logistics Services | Raniero Engineering Nigeria"
  />

  <meta
    name="twitter:description"
    content="Efficient facility management and logistics services designed to support engineering and infrastructure projects."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://raniero.com.ng/services/facility-logistics"
  />
</Helmet>

export default function FacilityManagement() {
  return (
    <>
      <Navbar />
      <ServicePage data={facilityManagementData} />
      <Footer />
    </>
  );
}