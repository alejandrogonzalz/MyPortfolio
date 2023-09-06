import * as THREE from "three";

import classes from "./about.module.scss";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMemo, Suspense, useRef, useEffect } from "react";
import particleImg from "./point.png";

// interface Star {
//   position: THREE.Vector3;
//   velocity: number;
//   acceleration: number;
// }

const Particles = () => {
  const particleTex = useLoader(THREE.TextureLoader, particleImg);
  const bufferRef = useRef<THREE.BufferAttribute>(null);

  const stars = useMemo(() => {
    const starCount = 6000;
    const starArray = new Float32Array(starCount * 3);
    const stars = [];

    for (let i = 0; i < starCount; i++) {
      const x = Math.random() * 500 - 300;
      const y = Math.random() * 500 - 300;
      const z = Math.random() * 500 - 300;

      const star = {
        position: new THREE.Vector3(x, y, z),
        velocity: new THREE.Vector3(0, 0, 0),
        acceleration: new THREE.Vector3(0, 0, 0.04),
      };

      star.position.toArray(starArray, i * 3);
      stars.push(star);
    }

    return { positions: starArray, stars: stars };
  }, []);

  useFrame(() => {
    if (!bufferRef.current) {
      return;
    }
    stars.stars.forEach((star) => {
      star.velocity.add(star.acceleration); // Update velocity by adding acceleration
      star.position.y -= star.velocity.y; // Update the y-coordinate of position using velocity.y

      if (star.position.y < -200) {
        star.position.y = 200;
        star.velocity.set(0, 0, 0); // Reset velocity to (0, 0, 0)
      }
    });
    bufferRef.current.needsUpdate = true;
  });

  useEffect(() => {
    console.log(bufferRef.current);
  }, []);

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={bufferRef}
          attach={"attributes-position"}
          array={stars.positions}
          count={stars.positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        map={particleTex}
        color={0x888888}
        size={0.3}
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
    <Canvas className={classes.space_canvas}>
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <Particles />
      </Suspense>
    </Canvas>
  );
};

// const SpaceComponents = () => {
//   return (
//     <>
//       <Particles />

//       <ambientLight intensity={0.1} />
//       <directionalLight color="red" position={[0, 0, 5]} />
//       <mesh>
//         <sphereGeometry args={[1.4, 1111, 1111]} />
//         <meshStandardMaterial />
//       </mesh>
//       <OrbitControls enableZoom={false} />
//     </>
//   );
// };
