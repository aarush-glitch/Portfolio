
// Floating 3D icons animation placeholder
"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { useState } from 'react';
import { FaReact, FaNodeJs, FaPython, FaJava, FaAws, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiPostgresql } from 'react-icons/si';

const icons = [
  { icon: <FaReact color="#61DAFB" />, label: 'React' },
  { icon: <FaNodeJs color="#3C873A" />, label: 'Node.js' },
  { icon: <FaPython color="#3776AB" />, label: 'Python' },
  { icon: <SiJavascript color="#F7DF1E" />, label: 'JavaScript' },
  { icon: <FaAws color="#FF9900" />, label: 'AWS' },
  { icon: <FaDocker color="#2496ED" />, label: 'Docker' },
  { icon: <FaGitAlt color="#F05032" />, label: 'Git' },
  { icon: <SiPostgresql color="#336791" />, label: 'PostgreSQL' },
  { icon: <FaJava color="#007396" />, label: 'Java' },
];

function getSphereCoords(count: number, radius: number) {
  // Fibonacci sphere algorithm for even distribution
  const points = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;
    const x = Math.cos(theta) * radiusAtY;
    const z = Math.sin(theta) * radiusAtY;
    points.push([x * radius, y * radius, z * radius]);
  }
  return points;
}

export default function FloatingIcons({ radius = 250, grayscale = false }: { radius?: number, grayscale?: boolean }) {
  const [autoRotate, setAutoRotate] = useState(true);
  // Sphere radius in 3D units (scaled to px for Html)
  const iconPositions = getSphereCoords(icons.length, radius) as [number, number, number][];

  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 50 }} style={{ width: '100%', height: '100%' }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={0.7} />
      {icons.map((icon, i) => (
        <Html
          key={icon.label}
          position={iconPositions[i]}
          center
          style={{ pointerEvents: 'auto', userSelect: 'none', fontSize: 48, filter: grayscale ? 'grayscale(1)' : undefined }}
        >
          <div title={icon.label} className="drop-shadow-lg hover:scale-125 transition-transform duration-200">
            {icon.icon}
          </div>
        </Html>
      ))}
      <OrbitControls
        enableZoom={false}
        autoRotate={autoRotate}
        autoRotateSpeed={0.8}
        enablePan={false}
        onStart={() => setAutoRotate(false)}
        onEnd={() => setAutoRotate(true)}
      />
    </Canvas>
  );
}
