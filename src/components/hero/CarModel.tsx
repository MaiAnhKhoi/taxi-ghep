"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, Group } from "three";
import { useGLTF } from "@react-three/drei";

function PlaceholderCar() {
  const body = useRef<Mesh>(null);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (body.current) {
      body.current.rotation.y = t * 0.25;
      body.current.position.y = Math.sin(t * 1.2) * 0.03;
    }
  });

  return (
    <group>
      <mesh ref={body} castShadow>
        <boxGeometry args={[1.6, 0.5, 0.8]} />
        <meshStandardMaterial color="#f97316" metalness={0.25} roughness={0.25} />
      </mesh>
      <mesh position={[0, -0.35, 0]} receiveShadow>
        <boxGeometry args={[1.2, 0.2, 0.7]} />
        <meshStandardMaterial color="#2563eb" metalness={0.1} roughness={0.5} />
      </mesh>
    </group>
  );
}

export function CarModel({ url = "/models/car.glb" }: { url?: string }) {
  const group = useRef<Group>(null);
  const gltf = useGLTF(url);

  const scene = useMemo(() => gltf.scene.clone(true), [gltf.scene]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!group.current) return;
    group.current.rotation.y = t * 0.18;
    group.current.position.z = Math.sin(t * 0.6) * 0.12;
  });

  return (
    <group ref={group} scale={1.05} rotation={[0, Math.PI * 0.05, 0]}>
      <primitive object={scene} />
    </group>
  );
}

export function CarModelFallback() {
  return <PlaceholderCar />;
}

useGLTF.preload("/models/car.glb");

