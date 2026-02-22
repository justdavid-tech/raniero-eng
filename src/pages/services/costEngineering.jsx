import ServicePage from './ServicePage';
import { costEngineeringData } from '../../data/services/costEngineering.jsx';
import Navbar from '../../components/navbar.jsx';
import Footer from '../../components/footer.jsx';

export default function CostEngineering() {
  return (
    <>
      <Navbar />
      <ServicePage data={costEngineeringData} />
      <Footer />
    </>
  );
}