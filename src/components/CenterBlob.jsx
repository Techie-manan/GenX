// CenterBlobParticles.jsx
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function CenterBlob() {
  const refOuter = useRef();
  const refInner = useRef();

  // Create particle positions for a ring shape
  const createRing = (radius, count, yOffset = 0) => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const x = radius * Math.cos(angle);
      const y = yOffset;
      const z = radius * Math.sin(angle);
      positions.set([x, y, z], i * 3);
    }
    return positions;
  };

  const outerRing = useMemo(() => createRing(1.2, 300, 0.1), []);
  const innerRing = useMemo(() => createRing(0.6, 200, -0.1), []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (refOuter.current) {
      refOuter.current.rotation.y = t * 0.2;
      refOuter.current.rotation.x = Math.sin(t * 0.1) * 0.1;
    }
    if (refInner.current) {
      refInner.current.rotation.y = -t * 0.25;
    }
  });

  return (
    <>
      <points ref={refOuter}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={outerRing}
            count={outerRing.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          color="lavender"
          transparent
          opacity={0.8}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      <points ref={refInner}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={innerRing}
            count={innerRing.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.02}
          color="lavender"
          transparent
          opacity={0.6}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </>
  );
}
