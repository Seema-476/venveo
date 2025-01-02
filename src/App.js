import './App.css';
import BackToTop from './common/BackToTop';
import ActualResults from './components/ActualResults';
import DigitalMarketing from './components/DigitalMarketing';
import Features from './components/Features';
import Footer from './components/Footer';
import Goals from './components/Goals';
import GrowthPartner from './components/GrowthPartners';
import Hero from './components/Hero';
import LearnFrom from './components/LearnFrom';
import MarketingCards from './components/MarketingCards';
import OutSmart from './components/OutSmart';
import SatisfiedClients from './components/SatisfiedClients';

function App() {
  return (
    <>
      <>
        <Hero />
        <Features />
        <SatisfiedClients />
        <DigitalMarketing />
        <OutSmart />
        <GrowthPartner />
        <ActualResults />
        <LearnFrom />
        <MarketingCards />
        <Goals />
        <Footer />
      </>
      <BackToTop /></>
  );
}

export default App;
