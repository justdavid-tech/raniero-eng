import ServicePage from './ServicePage';
import { corporateTrainingData } from '../../data/services/corporateTraining.jsx';
import Navbar from '../../components/navbar.jsx';
import Footer from '../../components/footer.jsx';

import { Helmet } from "react-helmet-async";

<Helmet>
  <title>Corporate Engineering Training | Raniero Engineering Nigeria</title>

  <meta
    name="description"
    content="Raniero Engineering offers corporate training programs focused on engineering skills development, technical capacity building, and workforce training for organizations across Nigeria."
  />

  <meta
    name="keywords"
    content="corporate engineering training Nigeria, engineering training programs, workforce technical training, engineering capacity development, Raniero Engineering training services"
  />

  <meta name="author" content="Raniero Engineering" />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Corporate Engineering Training | Raniero Engineering"
  />

  <meta
    property="og:description"
    content="Professional corporate training programs designed to build engineering expertise, technical skills, and workforce capacity."
  />

  <meta property="og:type" content="website" />

  <meta
    property="og:url"
    content="https://raniero.com.ng/services/corporate-training"
  />

  <meta
    property="og:image"
    content="https://raniero.com.ng/images/og-image.png"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />

  <meta
    name="twitter:title"
    content="Corporate Engineering Training | Raniero Engineering Nigeria"
  />

  <meta
    name="twitter:description"
    content="Engineering training programs and corporate capacity development services provided by Raniero Engineering."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://raniero.com.ng/services/corporate-training"
  />
</Helmet>
    
export default function CorporateTraining() {
  return (
    <>
      <Navbar />
      <ServicePage data={corporateTrainingData} />
      <Footer />
    </>
  );
}