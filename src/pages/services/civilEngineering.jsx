import ServicePage from './ServicePage';
import { civilEngineeringData } from '../../data/services/civilEngineering.jsx';
import Navbar from '../../components/navbar.jsx';
import Footer from '../../components/footer.jsx';

import { Helmet } from "react-helmet-async";

<Helmet>
  <title>Civil Engineering Services | Raniero Engineering Nigeria</title>

  <meta
    name="description"
    content="Raniero Engineering provides professional civil engineering services including infrastructure development, structural engineering, construction support, and project execution across Nigeria."
  />

  <meta
    name="keywords"
    content="civil engineering services Nigeria, infrastructure development Nigeria, structural engineering services, construction engineering company Nigeria, Raniero Engineering civil engineering"
  />

  <meta name="author" content="Raniero Engineering" />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Civil Engineering Services | Raniero Engineering"
  />

  <meta
    property="og:description"
    content="Expert civil engineering services for infrastructure, construction, and structural projects delivered by Raniero Engineering."
  />

  <meta property="og:type" content="website" />

  <meta
    property="og:url"
    content="https://raniero.com.ng/services/civil-engineering"
  />

  <meta
    property="og:image"
    content="https://raniero.com.ng/images/og-image.png"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />

  <meta
    name="twitter:title"
    content="Civil Engineering Services | Raniero Engineering Nigeria"
  />

  <meta
    name="twitter:description"
    content="Professional civil engineering services including infrastructure development, structural engineering, and construction solutions."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://raniero.com.ng/services/civil-engineering"
  />
</Helmet>

export default function CivilEngineering() {
  return (
    <>
      <Navbar />
      <ServicePage data={civilEngineeringData} />
      <Footer />
    </>
  );
}