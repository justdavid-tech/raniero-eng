import ServicePage from './ServicePage';
import { processEstablishmentData } from '../../data/services/processEstablishment.jsx';
import Navbar from '../../components/navbar.jsx';
import Footer from '../../components/footer.jsx';

import { Helmet } from "react-helmet-async";

<Helmet>
  <title>Process Establishment Services | Raniero Engineering Nigeria</title>

  <meta
    name="description"
    content="Raniero Engineering provides process establishment services including operational system development, workflow optimization, and engineering process implementation for industrial and infrastructure projects."
  />

  <meta
    name="keywords"
    content="process establishment services Nigeria, engineering process development, industrial process setup, workflow optimization engineering, Raniero Engineering process services"
  />

  <meta name="author" content="Raniero Engineering" />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Process Establishment Services | Raniero Engineering"
  />

  <meta
    property="og:description"
    content="Professional engineering services focused on process establishment, operational workflow development, and industrial system optimization."
  />

  <meta property="og:type" content="website" />

  <meta
    property="og:url"
    content="https://raniero.com.ng/services/process-establishment"
  />

  <meta
    property="og:image"
    content="https://raniero.com.ng/images/og-image.png"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />

  <meta
    name="twitter:title"
    content="Process Establishment Services | Raniero Engineering Nigeria"
  />

  <meta
    name="twitter:description"
    content="Engineering process establishment and workflow optimization services for industrial and infrastructure projects."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://raniero.com.ng/services/process-establishment"
  />
</Helmet>

export default function ProcessEstablishment() {
  return (
    <>
      <Navbar />
      <ServicePage data={processEstablishmentData} />
      <Footer />
    </>
  );
}