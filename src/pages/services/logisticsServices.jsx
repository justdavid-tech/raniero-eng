import ServicePage from './ServicePage';
import { logisticsServicesData } from '../../data/services/logisticsServices.jsx';
import Navbar from '../../components/navbar.jsx';
import Footer from '../../components/footer.jsx';

export default function LogisticsServices() {
  return (
    <>
      <Navbar />
      <ServicePage data={logisticsServicesData} />
      <Footer />
    </>
  );
}