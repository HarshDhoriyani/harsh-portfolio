"use client";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Stars } from "@react-three/drei";
import Avatar from "./Avatar";
import { useMousePosition } from "@/src/hooks/useMousePosition";
import { useScrollProgress } from "@/src/hooks/useScrollProgress";
import { useEffect, useState } from "react";
import { isMobileDevice } from "@/src/utils/mobileDetect";

export default function ThreeScene() {
  const mouse = useMousePosition();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobile(isMobileDevice());
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0.5, 6], fov: 50 }} shadows>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 5]} intensity={0.8} />
        <pointLight position={[-5, 3, 2]} color="#00F0FF" intensity={0.5} />
        <Stars radius={50} depth={50} count={800} factor={4} fade speed={0.5} />
        {!isMobile && <Avatar mousePosition={mouse} />}
        <ScrollControls pages={4} damping={0.2}>
          <group />
        </ScrollControls>
      </Canvas>
    </div>
  );
}