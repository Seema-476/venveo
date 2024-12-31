import './App.css';
import ActualResults from './components/ActualResults';
import DigitalMarketing from './components/DigitalMarketing';
import Features from './components/Features';
import Footer from './components/Footer';
import Goals from './components/Goals';
import GrowthPartner from './components/GrowthPartners';
import Hero from './components/Hero';
import LearnFrom from './components/LearnFrom';
import OutsMart from './components/OutsMart';
import SatisfiedClients from './components/StisfiedClients';

function App() {
  return (
    <>
      <Hero />
      <Features />
      <SatisfiedClients />
      <DigitalMarketing/>
      <OutsMart />
      <GrowthPartner />
      <ActualResults />
      <LearnFrom/>
      <Goals/>
      <Footer/>
    </>
  );
}

export default App;
