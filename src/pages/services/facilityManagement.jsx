import ServicePage from './ServicePage';
import { facilityManagementData } from '../../data/services/facilityManagement.jsx';
import Navbar from '../../components/navbar.jsx';
import Footer from '../../components/footer.jsx';

export default function FacilityManagement() {
  return (
    <>
      <Navbar />
      <ServicePage data={facilityManagementData} />
      <Footer />
    </>
  );
}