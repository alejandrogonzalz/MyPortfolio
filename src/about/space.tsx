import { Canvas } from "@react-three/fiber";
import { useState } from "react";

export const Space = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
    </Canvas>
  );
};
