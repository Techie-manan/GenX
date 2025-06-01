import HeroScene from "./components/HeroScene";
import CenterBlob from "./components/CenterBlob";
import Home from "./components/home";
import './App.css';

function App() {
  return (
    <>
    <div className="relative w-full h-full bg-black overflow-hidden">
      <HeroScene />
      <CenterBlob />
          <Home/>
    </div>

    </>
  );
}
export default App;