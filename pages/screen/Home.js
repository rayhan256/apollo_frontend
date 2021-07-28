import Navbar from "../components/Navbar";
import Hero from "../part/Hero";
import About from "../part/About";
import Values from "../part/Values";
import Counts from "../part/Counts";
import Services from "../part/Services";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <main id="main">
        <About />
        <Values />
        <Counts />
        <Services />
      </main>
    </div>
  );
}
