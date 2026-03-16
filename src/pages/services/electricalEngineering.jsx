import ServicePage from './ServicePage';
import { electricalEngineeringData } from '../../data/services/electricalEngineering.jsx';
import Navbar from '../../components/navbar.jsx';
import Footer from '../../components/footer.jsx';

import { Helmet } from "react-helmet-async";

<Helmet>
  <title>Electrical Engineering Services | Raniero Engineering Nigeria</title>

  <meta
    name="description"
    content="Raniero Engineering provides professional electrical engineering services including power distribution, lighting systems, control systems, and electrical infrastructure development across Nigeria."
  />

  <meta
    name="keywords"
    content="electrical engineering services Nigeria, power distribution systems, lighting engineering, control systems engineering, electrical infrastructure development, Raniero Engineering electrical engineering"
  />

  <meta name="author" content="Raniero Engineering" />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Electrical Engineering Services | Raniero Engineering"
  />

  <meta
    property="og:description"
    content="Expert electrical engineering services for power distribution, lighting systems, and control systems delivered by Raniero Engineering."
  />

  <meta property="og:type" content="website" />

  <meta
    property="og:url"
    content="https://raniero.com.ng/services/electrical-engineering"
  />

  <meta
    property="og:image"
    content="https://raniero.com.ng/images/og-image.png"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />

  <meta
    name="twitter:title"
    content="Electrical Engineering Services | Raniero Engineering Nigeria"
  />

  <meta
    name="twitter:description"
    content="Professional electrical engineering services including power distribution, lighting systems, and control systems engineering."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://raniero.com.ng/services/electrical-engineering"
  />
</Helmet>

export default function ElectricalEngineering() {
  return (
    <>
      <Navbar />
      <ServicePage data={electricalEngineeringData} />
      <Footer />
    </>
  );
}