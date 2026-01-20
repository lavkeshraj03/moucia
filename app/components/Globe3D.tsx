"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useState } from "react";

function GlobeMesh() {
  const texture = useTexture("/textures/earth-dark.jpg");

  return (
    <Sphere args={[1.05, 64, 64]}>
      <meshStandardMaterial
        map={texture}
        roughness={0.9}
        metalness={0.05}
        emissive={new THREE.Color("#C9A24D")}
        emissiveIntensity={0.05}
      />
    </Sphere>
  );
}

export default function Globe3D() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Delay Canvas by one frame → prevents white flash
    requestAnimationFrame(() => setReady(true));
  }, []);

  return (
    <div className="bg-black w-[360px] h-[360px] md:w-[420px] md:h-[420px] relative">
      {/* Hard black fallback */}
      {!ready && <div className="absolute inset-0 bg-black" />}

      {ready && (
        <Canvas
          camera={{ position: [0, 0, 3.6], fov: 45 }}
          gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
          onCreated={({ gl }) => {
            gl.setClearColor("#000000", 1);
          }}
        >
          <ambientLight intensity={0.55} />
          <directionalLight position={[4, 4, 6]} intensity={0.6} />

          <GlobeMesh />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.15}
          />
        </Canvas>
      )}
    </div>
  );
}