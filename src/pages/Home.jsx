import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <HowItWorks />
      <Pricing />
    </>
  );
};

export default Home;
