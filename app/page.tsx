'use client';

import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Experience from './Experience';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP);
}

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Experience />
      </Canvas>
    </div>
  );
}
