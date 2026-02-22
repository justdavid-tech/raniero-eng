import ServicePage from './ServicePage';
import { designExecutionData } from '../../data/services/designExecution.jsx';
import Navbar from '../../components/navbar.jsx';
import Footer from '../../components/footer.jsx';

export default function DesignExecution() {
  return (
    <>
      <Navbar />
      <ServicePage data={designExecutionData} />
      <Footer />
    </>
  );
}