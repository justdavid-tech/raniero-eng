import ServicePage from './ServicePage';
import { engineeringAuditData } from '../../data/services/engineeringAudit.jsx';
import Navbar from '../../components/navbar.jsx';
import Footer from '../../components/footer.jsx';

import { Helmet } from "react-helmet-async";

<Helmet>
  <title>Engineering Audit Services | Raniero Engineering Nigeria</title>

  <meta
    name="description"
    content="Raniero Engineering provides professional engineering audit services including technical assessments, project evaluation, compliance verification, and risk analysis for engineering and infrastructure projects."
  />

  <meta
    name="keywords"
    content="engineering audit services Nigeria, technical project audit, engineering compliance assessment, infrastructure audit services, Raniero Engineering audit"
  />

  <meta name="author" content="Raniero Engineering" />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Engineering Audit Services | Raniero Engineering"
  />

  <meta
    property="og:description"
    content="Comprehensive engineering audit services including project evaluation, compliance verification, and technical performance analysis."
  />

  <meta property="og:type" content="website" />

  <meta
    property="og:url"
    content="https://raniero.com.ng/services/engineering-audit"
  />

  <meta
    property="og:image"
    content="https://raniero.com.ng/images/og-image.png"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />

  <meta
    name="twitter:title"
    content="Engineering Audit Services | Raniero Engineering Nigeria"
  />

  <meta
    name="twitter:description"
    content="Professional engineering audit and technical evaluation services for construction and infrastructure projects."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://raniero.com.ng/services/engineering-audit"
  />
</Helmet>


export default function EngineeringAudit() {
  return (
    <>
      <Navbar />
      <ServicePage data={engineeringAuditData} />
      <Footer />
    </>
  );
}