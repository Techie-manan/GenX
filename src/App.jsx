import HeroScene from "./components/HeroScene";
import CenterBlob from "./components/CenterBlob";

function App() {
  return (
    <div>
      <HeroScene />
      <CenterBlob />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white">
        <h1 className="text-4xl font-bold">Your Hackathon Name</h1>
      </div>
    </div>
  );
}
export default App;