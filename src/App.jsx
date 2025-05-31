import HeroScene from "./components/HeroScene";
import CenterBlob from "./components/CenterBlob";
import Home from "./components/home";

function App() {
  return (
    <>
    <div className="relative w-full h-full">
      <HeroScene />
      <CenterBlob />
      <Home/>
    </div>
    </>
  );
}
export default App;