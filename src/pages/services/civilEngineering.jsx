import ServicePage from './ServicePage';
import { civilEngineeringData } from '../../data/services/civilEngineering.jsx';
import Navbar from '../../components/navbar.jsx';
import Footer from '../../components/footer.jsx';

export default function CivilEngineering() {
  return (
    <>
      <Navbar />
      <ServicePage data={civilEngineeringData} />
      <Footer />
    </>
  );
}