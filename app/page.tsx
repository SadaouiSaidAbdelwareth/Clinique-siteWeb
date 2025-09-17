import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Partners } from "./components/Partner";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import Statistic from "./components/Statistic";
import Team from "./components/Team";

export default function Home() {
  return (
   <div>
    <Hero/>
    <About/>
    <Services/>
    <Statistic/>
    <Team/>
    <Reviews/>
    <Partners/>
    <Footer/>

   </div>
  );
}
