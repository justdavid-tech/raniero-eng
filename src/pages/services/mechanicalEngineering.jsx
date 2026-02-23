import ServicePage from './ServicePage';
import { mechanicalEngineeringData } from '../../data/services/mechanicalEngineering.jsx';
import Navbar from '../../components/navbar.jsx';
import Footer from '../../components/footer.jsx';

export default function MechanicalEngineering() {
  return (
    <>
      <Navbar />
      <ServicePage data={mechanicalEngineeringData} />
      <Footer />
    </>
  );
}