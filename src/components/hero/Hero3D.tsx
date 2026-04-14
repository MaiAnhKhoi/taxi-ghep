"use client";

import React, { Suspense, useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, Html, ContactShadows, PerspectiveCamera } from "@react-three/drei";
import { CarModel, CarModelFallback } from "@/components/hero/CarModel";

function SimpleParticles({ enabled }: { enabled: boolean }) {
  const points = useMemo(() => {
    const count = 80;
    const arr: Array<{ x: number; y: number; z: number; s: number }> = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        x: (Math.random() - 0.5) * 10,
        y: Math.random() * 3 + 0.5,
        z: (Math.random() - 0.5) * 6,
        s: Math.random() * 0.03 + 0.01,
      });
    }
    return arr;
  }, []);

  if (!enabled) return null;
  return (
    <group>
      {points.map((p, idx) => (
        <mesh key={idx} position={[p.x, p.y, p.z]}>
          <sphereGeometry args={[p.s, 10, 10]} />
          <meshBasicMaterial color="#93c5fd" transparent opacity={0.25} />
        </mesh>
      ))}
    </group>
  );
}

class ModelErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

export default function Hero3D() {
  const [lite, setLite] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia?.("(max-width: 768px)")?.matches ?? false;
    const saveData = (navigator as any).connection?.saveData === true;
    const cores = navigator.hardwareConcurrency ?? 4;
    setLite(isMobile || saveData || cores <= 4);
  }, []);

  const shadows = !lite;
  const particles = !lite;
  const env = !lite;

  return (
    <div className="absolute inset-0 z-[5]">
      <Canvas
        shadows={shadows}
        dpr={lite ? 1 : [1, 1.6]}
        gl={{ antialias: !lite, powerPreference: "high-performance", alpha: true }}
      >
        {/* Transparent canvas so video background shows through */}
        <fog attach="fog" args={["#0b1f5c", 8, 18]} />

        <PerspectiveCamera makeDefault fov={40} position={[2.8, 1.25, 3.6]} rotation={[0, 0.18, 0]} />

        <ambientLight intensity={0.25} />
        <directionalLight
          position={[6, 6, 4]}
          intensity={1.15}
          color="#ffffff"
          castShadow={shadows}
          shadow-mapSize-width={shadows ? 1024 : 256}
          shadow-mapSize-height={shadows ? 1024 : 256}
        />
        <pointLight position={[-3, 1.2, -2]} intensity={0.3} color="#1e40af" />
        <pointLight position={[0.8, 0.8, 3]} intensity={0.25} color="#f97316" />

        <Suspense
          fallback={
            <Html center className="text-sm text-white/70">
              Đang tải 3D…
            </Html>
          }
        >
          <Float speed={0.7} rotationIntensity={0.4} floatIntensity={0.35}>
            <ModelErrorBoundary fallback={<CarModelFallback />}>
              <CarModel url={process.env.NEXT_PUBLIC_CAR_MODEL_URL || "/models/car.glb"} />
            </ModelErrorBoundary>
          </Float>

          <ContactShadows
            opacity={0.55}
            scale={8}
            blur={2.4}
            far={8}
            resolution={lite ? 256 : 512}
            color="#000000"
            position={[0, -0.75, 0]}
          />

          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.8, 0]} receiveShadow>
            <planeGeometry args={[60, 60]} />
            <meshStandardMaterial color="#0a163d" metalness={0.05} roughness={0.95} />
          </mesh>

          <SimpleParticles enabled={particles} />
          {env ? <Environment preset="city" /> : null}
        </Suspense>
      </Canvas>
    </div>
  );
}

