"use client";
import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Html } from "@react-three/drei";
import * as THREE from "three";

// ============================================
// YOUR COMPLETE SKILL SET – ORGANIZED & COLOR-CODED
// ============================================
const skills = [
  // 🟦 LANGUAGES
  { name: "Python", color: "#3776AB", category: "Languages", desc: "Scripting, automation, data processing, API development" },
  { name: "JavaScript", color: "#F7DF1E", category: "Languages", desc: "ES6+, async patterns, DOM manipulation, functional programming" },
  { name: "Java", color: "#f89820", category: "Languages", desc: "OOP, multithreading, collections, Spring ecosystem" },
  { name: "TypeScript", color: "#3178C6", category: "Languages", desc: "Static typing, interfaces, generics, type safety" },

  // 🎨 FRONTEND
  { name: "React.js", color: "#61DBFB", category: "Frontend", desc: "Hooks, context API, performance optimization, component architecture" },
  { name: "Next.js", color: "#000000", category: "Frontend", desc: "App Router, SSR, ISR, API routes, middleware" },
  { name: "HTML5", color: "#E34F26", category: "Frontend", desc: "Semantic markup, accessibility, SEO-friendly structure" },
  { name: "CSS3", color: "#1572B6", category: "Frontend", desc: "Flexbox, Grid, animations, responsive design" },
  { name: "Bootstrap", color: "#7952B3", category: "Frontend", desc: "Responsive grid, components, theming, customization" },
  { name: "TailwindCSS", color: "#06B6D4", category: "Frontend", desc: "Utility-first, custom configs, dark mode, responsive utilities" },

  // ⚙️ BACKEND & APIs
  { name: "Spring Boot", color: "#6DB33F", category: "Backend", desc: "REST APIs, security, JPA/Hibernate, microservices" },
  { name: "Node.js", color: "#339933", category: "Backend", desc: "Event-driven architecture, clustering, streams, npm" },
  { name: "Express.js", color: "#000000", category: "Backend", desc: "Middleware, routing, error handling, template engines" },
  { name: "RESTful APIs", color: "#FF6C37", category: "Backend", desc: "Design principles, versioning, authentication, documentation" },

  // 🗄️ DATABASES & DEVOPS
  { name: "MySQL", color: "#4479A1", category: "Database", desc: "Complex queries, indexing, stored procedures, normalization" },
  { name: "MongoDB", color: "#47A248", category: "Database", desc: "Aggregation pipeline, indexing, replication, sharding" },
  { name: "Docker", color: "#2496ED", category: "DevOps", desc: "Containerization, Docker Compose, multi-stage builds, volumes" },

  // 📊 DATA SCIENCE & ML (Basic)
  { name: "Pandas", color: "#150458", category: "Data Science", desc: "Data manipulation, cleaning, aggregation, time series" },
  { name: "NumPy", color: "#013243", category: "Data Science", desc: "Array operations, linear algebra, random generation, broadcasting" },
  { name: "Scikit-learn", color: "#F7931E", category: "Data Science", desc: "Classification, regression, clustering, preprocessing" },
  { name: "Regression", color: "#26A69A", category: "Data Science", desc: "Linear, logistic, polynomial, evaluation metrics" },

  // ☁️ TOOLS & CLOUD
  { name: "Git", color: "#F05032", category: "Tools", desc: "Branching, merging, rebasing, conflict resolution" },
  { name: "GitHub", color: "#181717", category: "Tools", desc: "Actions, CI/CD, issues, PRs, project management" },
  { name: "Jupyter", color: "#F37626", category: "Tools", desc: "Notebooks, data visualization, interactive computing" },
  { name: "AWS (Basic)", color: "#FF9900", category: "Cloud", desc: "EC2, S3, IAM, Lambda fundamentals" },
  { name: "Cloudinary", color: "#3448C5", category: "Cloud", desc: "Image optimization, video processing, CDN delivery" },
];

// Group skills by category for the tooltip display
const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    Languages: "#00F0FF",
    Frontend: "#61DBFB",
    Backend: "#6DB33F",
    Database: "#4479A1",
    DevOps: "#2496ED",
    "Data Science": "#9b59b6",
    Tools: "#F05032",
    Cloud: "#FF9900",
  };
  return colors[category] || "#A0AAB0";
};

// Component for the background star field - FIXED: uses useEffect to generate stars
function StarField() {
  const starsRef = useRef<THREE.Points>(null);
  
  // Deterministic star positions - no Math.random() during render
  const starPositions = useMemo(() => {
    const positions = [];
    // Simple deterministic "random" function using sine/cosine patterns
    for (let i = 0; i < 800; i++) {
      // Use i-based deterministic values (always same for same i)
      const x = Math.sin(i * 12.9898) * 43758.5453;
      const y = Math.cos(i * 78.233) * 43758.5453;
      const z = Math.sin(i * 37.719) * 43758.5453;
      
      positions.push((x - Math.floor(x)) * 200 - 100);
      positions.push((y - Math.floor(y)) * 100 - 50);
      positions.push((z - Math.floor(z)) * 50 - 30);
    }
    return new Float32Array(positions);
  }, []);

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0005;
      starsRef.current.rotation.x += 0.0003;
    }
  });

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[starPositions, 3]}
          count={800}
          array={starPositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#00F0FF" size={0.08} transparent opacity={0.25} />
    </points>
  );
}

function SphereSkills() {
  const groupRef = useRef<THREE.Group>(null);
  const [selected, setSelected] = useState<{ name: string; desc: string; category: string } | null>(null);
  
  const radius = 3.2;
  const totalSkills = skills.length;
  
  // Generate positions using Fibonacci sphere algorithm - pure (no random)
  const positions = useMemo(() => {
    return skills.map((_, i) => {
      const phi = Math.acos(1 - 2 * (i + 0.5) / totalSkills);
      const theta = Math.PI * 2 * (i / totalSkills);
      return new THREE.Vector3(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );
    });
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
      groupRef.current.rotation.x += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central glow effect */}
      <pointLight position={[0, 0, 0]} intensity={0.5} color="#00F0FF" distance={8} />
      
      {skills.map((skill, idx) => (
        <Float key={idx} speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
          <mesh
            position={positions[idx]}
            onClick={(e) => {
              e.stopPropagation();
              setSelected({ name: skill.name, desc: skill.desc, category: skill.category });
              setTimeout(() => setSelected(null), 3000);
            }}
          >
            <sphereGeometry args={[0.38, 32, 32]} />
            <meshStandardMaterial
              color={skill.color}
              emissive={skill.color}
              emissiveIntensity={0.3}
              metalness={0.6}
              roughness={0.2}
            />
            {/* Glow ring */}
            <mesh scale={1.2}>
              <sphereGeometry args={[0.42, 16, 16]} />
              <meshStandardMaterial
                color={skill.color}
                transparent
                opacity={0.15}
                emissive={skill.color}
                emissiveIntensity={0.1}
              />
            </mesh>
            
            {/* Skill name label */}
            <Html center distanceFactor={8}>
              <div
                style={{
                  background: "rgba(10, 15, 15, 0.85)",
                  backdropFilter: "blur(4px)",
                  padding: "4px 10px",
                  borderRadius: "20px",
                  color: skill.color,
                  fontSize: "11px",
                  fontWeight: "bold",
                  fontFamily: "monospace",
                  border: `1px solid ${skill.color}`,
                  whiteSpace: "nowrap",
                  pointerEvents: "none",
                  letterSpacing: "0.5px",
                }}
              >
                {skill.name}
              </div>
            </Html>
          </mesh>
        </Float>
      ))}
      
      {/* Selected skill tooltip */}
      {selected && (
        <Html position={[0, -2.8, 0]} center>
          <div
            style={{
              background: "#0A0F0F",
              border: `2px solid ${getCategoryColor(selected.category)}`,
              borderRadius: "16px",
              padding: "12px 20px",
              maxWidth: "280px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "14px", color: getCategoryColor(selected.category), fontWeight: "bold", marginBottom: "4px" }}>
              [{selected.category}]
            </div>
            <div style={{ fontSize: "20px", color: "#00F0FF", fontWeight: "bold", marginBottom: "8px" }}>
              {selected.name}
            </div>
            <div style={{ fontSize: "12px", color: "#A0AAB0", lineHeight: 1.4 }}>
              {selected.desc}
            </div>
          </div>
        </Html>
      )}
    </group>
  );
}

export default function SkillCloud() {
  return (
    <div className="w-full h-[500px] relative">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-charcoal via-transparent to-transparent z-10 rounded-2xl" />
      
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        shadows
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-3, 2, 4]} color="#00F0FF" intensity={0.4} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          rotateSpeed={0.8}
          dampingFactor={0.05}
        />
        <SphereSkills />
        <StarField />
      </Canvas>
    </div>
  );
}