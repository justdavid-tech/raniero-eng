import ServicePage from './ServicePage';
import { mechanicalEngineeringData } from '../../data/services/mechanicalEngineering.jsx';
import Navbar from '../../components/navbar.jsx';
import Footer from '../../components/footer.jsx';

import { Helmet } from "react-helmet-async";

<Helmet>
  <title>Mechanical Engineering Services | Raniero Engineering Nigeria</title>

  <meta
    name="description"
    content="Raniero Engineering provides professional mechanical engineering services including equipment systems design, industrial mechanical solutions, installation, and maintenance for engineering and infrastructure projects across Nigeria."
  />

  <meta
    name="keywords"
    content="mechanical engineering services Nigeria, industrial mechanical engineering, mechanical systems engineering, engineering equipment installation, Raniero Engineering mechanical services"
  />

  <meta name="author" content="Raniero Engineering" />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Mechanical Engineering Services | Raniero Engineering"
  />

  <meta
    property="og:description"
    content="Expert mechanical engineering solutions including system design, installation, and industrial mechanical services for engineering projects."
  />

  <meta property="og:type" content="website" />

  <meta
    property="og:url"
    content="https://raniero.com.ng/services/mechanical-engineering"
  />

  <meta
    property="og:image"
    content="https://raniero.com.ng/images/og-image.png"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />

  <meta
    name="twitter:title"
    content="Mechanical Engineering Services | Raniero Engineering Nigeria"
  />

  <meta
    name="twitter:description"
    content="Professional mechanical engineering services including industrial mechanical systems, installation, and infrastructure engineering solutions."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://raniero.com.ng/services/mechanical-engineering"
  />
</Helmet>

export default function MechanicalEngineering() {
  return (
    <>
      <Navbar />
      <ServicePage data={mechanicalEngineeringData} />
      <Footer />
    </>
  );
}