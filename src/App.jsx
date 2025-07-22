import HeroScene from "./components/HeroScene";
import Home from "./components/home";
import Navbar from "./components/navbar";
import './App.css';
import About from "./components/about";
import Team from "./components/team";
import Sponsers from "./components/sponsers";
import Faq from "./components/faq";
import Contact from "./components/contact";
import Events from "./components/events";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <div className="w-full overflow-hidden">
        <Navbar />
        <div id='home' className="relative w-[100vw] h-[100vh] bg-black overflow-hidden">
          <HeroScene />
          <Home />
        </div>
        <About />
        <Events />
        <Team />
        <Sponsers />
        <Faq />
        <Contact />
         <Analytics />
      </div>
    </>
  );
}
export default App;