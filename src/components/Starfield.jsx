// Starfield.jsx
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

export function Starfield() {
  const ref = useRef();

  // Prepare 1000 stars with position + inward velocity
  const stars = useMemo(() => {
    const data = [];
    for (let i = 0; i < 1000; i++) {
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50
      );
      data.push({
        position: pos,
        velocity: pos.clone().normalize().multiplyScalar(-0.02),
      });
    }
    return data;
  }, []);

  const positions = useMemo(() => new Float32Array(stars.length * 3), [stars]);
  const alphas = useMemo(() => new Float32Array(stars.length), [stars]);

  useFrame(() => {
    stars.forEach((star, i) => {
      star.position.add(star.velocity);

      const dist = star.position.length();

      // Reset star if it reaches too close
      if (dist < 0.5) {
        star.position.set(
          (Math.random() - 0.5) * 50,
          (Math.random() - 0.5) * 50,
          (Math.random() - 0.5) * 50
        );
        star.velocity = star.position.clone().normalize().multiplyScalar(-0.05);
      }

      positions[i * 3] = star.position.x;
      positions[i * 3 + 1] = star.position.y;
      positions[i * 3 + 2] = star.position.z;

      // Opacity decreases as star approaches center
      alphas[i] = THREE.MathUtils.clamp(dist / 50, 0, 1);
    });

    ref.current.geometry.attributes.position.needsUpdate = true;
    ref.current.geometry.attributes.alpha.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-alpha"
          count={alphas.length}
          array={alphas}
          itemSize={1}
        />
      </bufferGeometry>

      <PointMaterial
        transparent
        color="white"
        size={0.025}        // 🌟 SMALL star size
        sizeAttenuation
        depthWrite={false}
        opacity={1}
      />
    </points>
  );
}
