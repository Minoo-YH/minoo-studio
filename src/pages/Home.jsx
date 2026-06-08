import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Faq from "../components/Faq";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <HowItWorks />
      <Pricing />
      <Contact />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
