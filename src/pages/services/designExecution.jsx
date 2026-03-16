import ServicePage from './ServicePage';
import { designExecutionData } from '../../data/services/designExecution.jsx';
import Navbar from '../../components/navbar.jsx';
import Footer from '../../components/footer.jsx';

import { Helmet } from "react-helmet-async";

<Helmet>
  <title>Engineering Design & Project Execution | Raniero Engineering Nigeria</title>

  <meta
    name="description"
    content="Raniero Engineering provides professional engineering design and project execution services, delivering innovative construction, infrastructure, and industrial engineering solutions across Nigeria."
  />

  <meta
    name="keywords"
    content="engineering design services Nigeria, project execution engineering, construction design and execution, infrastructure engineering design, Raniero Engineering services"
  />

  <meta name="author" content="Raniero Engineering" />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Engineering Design & Execution Services | Raniero Engineering"
  />

  <meta
    property="og:description"
    content="Professional engineering design and project execution services for infrastructure, construction, and industrial engineering projects."
  />

  <meta property="og:type" content="website" />

  <meta
    property="og:url"
    content="https://raniero.com.ng/services/design-execution"
  />

  <meta
    property="og:image"
    content="https://raniero.com.ng/images/og-image.png"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />

  <meta
    name="twitter:title"
    content="Engineering Design & Project Execution | Raniero Engineering"
  />

  <meta
    name="twitter:description"
    content="Expert engineering design and execution services delivered by Raniero Engineering for construction and infrastructure projects."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://raniero.com.ng/services/design-execution"
  />
</Helmet>

export default function DesignExecution() {
  return (
    <>
      <Navbar />
      <ServicePage data={designExecutionData} />
      <Footer />
    </>
  );
}