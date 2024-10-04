import { OrbitControls } from '@react-three/drei';
import React from 'react';

function Experience() {
  return (
    <>
      <OrbitControls makeDefault />
      <mesh>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial />
      </mesh>
    </>
  );
}

export default Experience;
