import * as THREE from "three";

import classes from "./about.module.scss";
import { Canvas, useLoader, useThree, useFrame } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
import { useMemo, Suspense, useRef, useEffect } from "react";
import particleImg from "./point.png";

const Particles = () => {
  const particleTex = useLoader(THREE.TextureLoader, particleImg);
  const starBoxRef = useRef<THREE.Points>(null);
  const bufferRef = useRef<THREE.BufferAttribute>(null);

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

  useEffect(() => {
    console.log(starBoxRef.current);
  }, []);

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
    <Canvas className={classes.space_canvas}>
      <Suspense fallback={null}>
        {/* <OrbitControls enableZoom={false} /> */}
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

// const starBox = new Three.BufferGeometry();

// const vertices = {
//   positions: [] as number[],
//   accelerations: [] as number[],
//   velocities: [] as number[],
// };

// for (let i = 0; i < 18000; i++) {
//   vertices.positions.push(Math.random() * 600 - 300);

//   if (i % 3 === 0) {
//     vertices.accelerations.push(0);
//     vertices.velocities.push(0.2);
//   }

//   starBox.setAttribute(
//     "position",
//     new THREE.BufferAttribute(new Float32Array(vertices.positions, 3))
//   );

//   stars = new THREE.Points(starBox, starMaterial);
//   Scene.add(stars);
// }

// function animate () {
//   let velocities, accelerations, positions;
//   for (let i = 0; i< velocities.length; i++){
//     velocities[i / 3 + i % 3] += accelerations[i];
//     positions[i * 3 + 1]-+ velocities[i];

//     if (positions[i*3 + 1] < -200) {
//       positions[i*3 +1] = 400;
//       velocities[i/3 + i %3] = 0;
//     }
//   }

//   stars.rotation.y += 0.0002;
//   starBox.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positions,3)))
// }
