import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import { Starfield } from "./Starfield.jsx";


export default function HeroScene() {
  return (
    <>
      <Canvas className="pointer-events-none"
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ position: "absolute", top: 0, left: 0, zIndex: -10 }}
      >
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} />

        <Starfield />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </>

  );
}
