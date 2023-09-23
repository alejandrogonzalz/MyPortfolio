import { TextureLoader, Points, BufferAttribute } from "three";

import { Canvas, useLoader, useThree, useFrame } from "@react-three/fiber";
import { useMemo, Suspense, useRef } from "react";
import particleImg from "./assets/point.png";

const Particles = () => {
  const particleTex = useLoader(TextureLoader, particleImg);
  const starBoxRef = useRef<Points>(null);
  const bufferRef = useRef<BufferAttribute>(null);

  const { camera } = useThree();

  camera.position.z = 1;
  camera.rotation.x = Math.PI / 2;

  const stars = useMemo(() => {
    const count = 9000;

    const positions: number[] = [];
    const accelerations: number[] = [];
    const velocities: number[] = [];

    for (let i = 0; i < count; i++) {
      positions.push(Math.random() * 600 - 300);

      if (i % 3 === 0) {
        accelerations.push(0);
        velocities.push(0.2);
      }
    }

    const buffer = new Float32Array(positions);
    return { positions: buffer, accelerations, velocities };
  }, []);

  useFrame(() => {
    let velocities = stars.velocities;
    let accelerations = stars.accelerations;
    let positions = bufferRef.current?.array;

    if (!positions) return;

    for (let i = 0; i < velocities.length; i++) {
      velocities[i / 3 + (i % 3)] += accelerations[i];
      positions[i * 3 + 1] -= velocities[i] * 5.3;

      if (positions[i * 3 + 1] < -200) {
        positions[i * 3 + 1] = 400;
        velocities[i / 3 + (i % 3)] = 0;
      }
    }
    if (bufferRef.current) {
      bufferRef.current.needsUpdate = true;
    }
  });

  return (
    <points ref={starBoxRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={bufferRef}
          attach={"attributes-position"}
          array={stars.positions} // Use new Float32Array to convert the array
          count={stars.positions.length / 3} // Set count to the length of the positions array
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        map={particleTex}
        color={0x888888}
        size={0.7}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  );
};

export const Space = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Particles />
      </Suspense>
    </Canvas>
  );
};
