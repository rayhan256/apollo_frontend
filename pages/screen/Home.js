import Navbar from "../components/Navbar";
import Hero from "../part/Hero";
import About from "../part/About";
import Values from "../part/Values";
// import Counts from "../part/Counts";
import Services from "../part/Services";
import Pricing from "../part/Pricing";
import Portfolios from "../part/Portfolios";
import Teams from "../part/Teams";
import Contact from "../part/Contact";
import Footer from "../part/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <main id="main">
        <About />
        <Values />
        {/* <Counts /> */}
        <Services />
        <Pricing />
        <Portfolios />
        <Teams />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
