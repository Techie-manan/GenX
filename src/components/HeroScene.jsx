import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import { CenterBlob } from "./CenterBlob.jsx";
import { Starfield } from "./starfield.jsx";


export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
    >
      <color attach="background" args={["#000000"]} />
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} />
      <Center>
        <CenterBlob />
      </Center>
      <Starfield />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
