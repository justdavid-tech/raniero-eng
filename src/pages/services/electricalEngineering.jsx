import ServicePage from './ServicePage';
import { electricalEngineeringData } from '../../data/services/electricalEngineering.jsx';
import Navbar from '../../components/navbar.jsx';
import Footer from '../../components/footer.jsx';

export default function ElectricalEngineering() {
  return (
    <>
      <Navbar />
      <ServicePage data={electricalEngineeringData} />
      <Footer />
    </>
  );
}