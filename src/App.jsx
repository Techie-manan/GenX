import HeroScene from "./components/HeroScene";
import CenterBlob from "./components/CenterBlob";
import Home from "./components/home";
import './App.css';

function App() {
  return (
    <>
    <div className="relative w-[100vw] h-[100vh] bg-black overflow-hidden -z-10">
      <HeroScene />
      <CenterBlob />
          <Home/>
    </div>

    </>
  );
}
export default App;