import ServicePage from './ServicePage';
import { costEngineeringData } from '../../data/services/costEngineering.jsx';
import Navbar from '../../components/navbar.jsx';
import Footer from '../../components/footer.jsx';

import { Helmet } from "react-helmet-async";

<Helmet>
  <title>Cost Engineering Services | Raniero Engineering Nigeria</title>

  <meta
    name="description"
    content="Raniero Engineering provides professional cost engineering services including project cost estimation, budgeting, cost control, and financial planning for construction and infrastructure projects across Nigeria."
  />

  <meta
    name="keywords"
    content="cost engineering Nigeria, project cost estimation services, construction cost management, infrastructure project budgeting, Raniero Engineering cost engineering"
  />

  <meta name="author" content="Raniero Engineering" />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Cost Engineering Services | Raniero Engineering"
  />

  <meta
    property="og:description"
    content="Expert cost engineering services including project budgeting, cost estimation, and financial planning for engineering and construction projects."
  />

  <meta property="og:type" content="website" />

  <meta
    property="og:url"
    content="https://raniero.com.ng/services/cost-engineering"
  />

  <meta
    property="og:image"
    content="https://raniero.com.ng/images/og-image.png"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />

  <meta
    name="twitter:title"
    content="Cost Engineering Services | Raniero Engineering Nigeria"
  />

  <meta
    name="twitter:description"
    content="Professional cost engineering solutions including project cost estimation, budgeting, and cost control for construction and infrastructure projects."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://raniero.com.ng/services/cost-engineering"
  />
</Helmet>

export default function CostEngineering() {
  return (
    <>
      <Navbar />
      <ServicePage data={costEngineeringData} />
      <Footer />
    </>
  );
}