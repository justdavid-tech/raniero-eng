import ServicePage from './ServicePage';
import { corporateTrainingData } from '../../data/services/corporateTraining.jsx';
import Navbar from '../../components/navbar.jsx';
import Footer from '../../components/footer.jsx';
    
export default function CorporateTraining() {
  return (
    <>
      <Navbar />
      <ServicePage data={corporateTrainingData} />
      <Footer />
    </>
  );
}