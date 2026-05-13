"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

interface AvatarProps {
    mousePosition: { x: number, y: number };
}

export default function Avatar({ mousePosition }: AvatarProps) {
    const groupRef = useRef<THREE.Group>(null);
    const headRef = useRef<THREE.Mesh>(null);

    useFrame(() => {
        if (groupRef.current) {
            const targetY = mousePosition.x * 0.6;
            const targetX = mousePosition.y * 0.3;
            groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.1;
            if (headRef.current) {
                headRef.current.rotation.x += (targetX - headRef.current.rotation.x) * 0.1;
            }
        }
    });

    return (
        <group ref={groupRef} position={[0, -1.2, 0]} scale={0.9}>
            {/* Body */}
            <mesh castShadow receiveShadow position={[0, -0.4, 0]}>
                <boxGeometry args={[0.9, 1.2, 0.6]} />
                <meshStandardMaterial color="#2A2D34" metalness={0.7} roughness={0.3} emissive="#001010" />
            </mesh>
            {/* Head (faceless) */}
            <mesh ref={headRef} position={[0, 0.6, 0]} castShadow>
                <icosahedronGeometry args={[0.55, 0]} />
                <meshStandardMaterial color="#3A3F48" metalness={0.4} roughness={0.2} emissive="#004444" emissiveIntensity={0.3} />
            </mesh>
            {/* Cyan visor */}
            <mesh position={[0, 0.55, 0.56]}>
                <boxGeometry args={[0.9, 0.08, 0.05]} />
                <meshStandardMaterial color="#00F0FF" emissive="#00F0FF" emissiveIntensity={0.8} />
            </mesh>
            {/* Arms */}
            <mesh position={[-0.65, -0.1, 0]}>
                <capsuleGeometry args={[0.18, 0.7, 4, 8]} />
                <meshStandardMaterial color="#2A2D34" metalness={0.5} />
            </mesh>
            <mesh position={[0.65, -0.1, 0]}>
                <capsuleGeometry args={[0.18, 0.7, 4, 8]} />
                <meshStandardMaterial color="#2A2D34" metalness={0.5} />
            </mesh>
            {/* Legs */}
            <mesh position={[-0.3, -0.95, 0]}>
                <cylinderGeometry args={[0.2, 0.2, 0.8, 6]} />
                <meshStandardMaterial color="#1E2228" />
            </mesh>
            <mesh position={[0.3, -0.95, 0]}>
                <cylinderGeometry args={[0.2, 0.2, 0.8, 6]} />
                <meshStandardMaterial color="#1E2228" />
            </mesh>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                <group />
            </Float>
        </group>
    );
}