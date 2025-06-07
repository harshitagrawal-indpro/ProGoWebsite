
import { Canvas } from '@react-three/fiber';
import { useRef, Suspense } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function AnimatedSphere({ position, color, speed }: { position: [number, number, number], color: string, speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 2) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.6}
        roughness={0.2}
        metalness={0.1}
      />
    </mesh>
  );
}

function FloatingCube({ position, color, speed }: { position: [number, number, number], color: string, speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.8;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed;
      meshRef.current.rotation.z = state.clock.elapsedTime * speed * 0.3;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * speed) * 0.8;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.8, 0.8, 0.8]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.4}
        roughness={0.1}
        metalness={0.6}
      />
    </mesh>
  );
}

function FloatingTorus({ position, color, speed }: { position: [number, number, number], color: string, speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed;
      meshRef.current.rotation.z = state.clock.elapsedTime * speed * 0.7;
      meshRef.current.position.z = position[2] + Math.sin(state.clock.elapsedTime * speed * 1.5) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[0.6, 0.2, 16, 32]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.5}
        roughness={0.3}
        metalness={0.4}
      />
    </mesh>
  );
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 150;
  
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    
    const color = new THREE.Color();
    color.setHSL(Math.random() * 0.3 + 0.5, 0.7, 0.6);
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.01;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.005;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} vertexColors transparent opacity={0.6} />
    </points>
  );
}

function WireframeSphere({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.01;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[3, 32, 32]} />
      <meshBasicMaterial
        color="#3b82f6"
        wireframe
        transparent
        opacity={0.1}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#8b5cf6" />
      <pointLight position={[0, 10, -10]} intensity={0.4} color="#06b6d4" />
      
      {/* Animated Spheres */}
      <AnimatedSphere position={[-4, 2, -5]} color="#3b82f6" speed={0.02} />
      <AnimatedSphere position={[4, -2, -8]} color="#8b5cf6" speed={0.015} />
      <AnimatedSphere position={[0, 4, -6]} color="#06b6d4" speed={0.025} />
      <AnimatedSphere position={[-6, -3, -4]} color="#ec4899" speed={0.018} />
      
      {/* Floating Cubes */}
      <FloatingCube position={[3, 3, -7]} color="#10b981" speed={0.012} />
      <FloatingCube position={[-5, -1, -6]} color="#f59e0b" speed={0.018} />
      <FloatingCube position={[2, -4, -5]} color="#ef4444" speed={0.015} />
      
      {/* Floating Torus */}
      <FloatingTorus position={[-3, 1, -9]} color="#6366f1" speed={0.01} />
      <FloatingTorus position={[5, -3, -7]} color="#8b5cf6" speed={0.014} />
      
      {/* Wireframe Sphere */}
      <WireframeSphere position={[0, 0, -12]} />
      
      {/* Particle Field */}
      <ParticleField />
    </>
  );
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
