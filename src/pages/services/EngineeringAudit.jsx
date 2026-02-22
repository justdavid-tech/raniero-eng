import ServicePage from './ServicePage';
import { EngineeringAuditData } from '../../data/services/engineeringAudit.jsx';
import Navbar from '../../components/navbar.jsx';
import Footer from '../../components/footer.jsx';


export default function EngineeringAudit() {
  return (
    <>
      <Navbar />
      <ServicePage data={EngineeringAuditData} />
      <Footer />
    </>
  );
}