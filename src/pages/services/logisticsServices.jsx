import ServicePage from './ServicePage';
import { logisticsServicesData } from '../../data/services/logisticsServices.jsx';
import Navbar from '../../components/navbar.jsx';
import Footer from '../../components/footer.jsx';

import { Helmet } from "react-helmet-async";

<Helmet>
  <title>Logistics Services | Raniero Engineering Nigeria</title>

  <meta
    name="description"
    content="Raniero Engineering provides professional logistics services supporting engineering, construction, and infrastructure projects with efficient transportation, supply chain coordination, and operational logistics."
  />

  <meta
    name="keywords"
    content="engineering logistics services Nigeria, construction logistics management, infrastructure logistics support, project transportation services, Raniero Engineering logistics"
  />

  <meta name="author" content="Raniero Engineering" />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Engineering Logistics Services | Raniero Engineering"
  />

  <meta
    property="og:description"
    content="Reliable logistics services supporting engineering and construction projects through efficient supply chain coordination and operational logistics."
  />

  <meta property="og:type" content="website" />

  <meta
    property="og:url"
    content="https://raniero.com.ng/services/logistics-services"
  />

  <meta
    property="og:image"
    content="https://raniero.com.ng/images/og-image.png"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />

  <meta
    name="twitter:title"
    content="Logistics Services | Raniero Engineering Nigeria"
  />

  <meta
    name="twitter:description"
    content="Professional logistics and supply chain support for engineering, construction, and infrastructure projects."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://raniero.com.ng/services/logistics-services"
  />
</Helmet>

export default function LogisticsServices() {
  return (
    <>
      <Navbar />
      <ServicePage data={logisticsServicesData} />
      <Footer />
    </>
  );
}