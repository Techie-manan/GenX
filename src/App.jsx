import HeroScene from "./components/HeroScene";
import CenterBlob from "./components/CenterBlob";
import Home from "./components/home";
import Navbar from "./components/navbar";
import './App.css';
import About from "./components/about";

function App() {
  return (
    <>
      <div className="w-full overflow-hidden">
        <Navbar />
        <div className="relative w-[100vw] h-[100vh] bg-black overflow-hidden -z-10">
          <HeroScene />
          {/* <CenterBlob /> */}
          <Home />
        </div>
        <About />
      </div>
    </>
  );
}
export default App;