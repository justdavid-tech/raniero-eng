import ServicePage from './ServicePage';
import { processEstablishmentData } from '../../data/services/processEstablishment.jsx';
import Navbar from '../../components/navbar.jsx';
import Footer from '../../components/footer.jsx';

export default function ProcessEstablishment() {
  return (
    <>
      <Navbar />
      <ServicePage data={processEstablishmentData} />
      <Footer />
    </>
  );
}