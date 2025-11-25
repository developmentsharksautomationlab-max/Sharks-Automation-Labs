'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Physics, useBox, usePlane, BoxProps } from '@react-three/cannon';
import { Text, Environment, Sky, ContactShadows, Float } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

// --- TYPES ---
type BrickProps = {
  position: [number, number, number];
  onBreak: () => void;
  isExploded: boolean;
  cleanupActive: boolean;
  vehiclePos: THREE.Vector3; // Position to suck debris towards
};

// --- 1. REALISTIC BRICK (PHYSICS) ---
const Brick = ({ position, onBreak, isExploded, cleanupActive, vehiclePos }: BrickProps) => {
  const [ref, api] = useBox(() => ({
    mass: 5, // Heavy bricks
    position,
    args: [2, 1, 1],
    friction: 0.7,
    restitution: 0.1, // Bouncy nahi, concrete jesa
    sleepSpeedLimit: 1,
  }));

  const [clicked, setClicked] = useState(false);
  const [isDead, setIsDead] = useState(false); // For removing after cleanup
  const meshRef = useRef<THREE.Mesh>(null!);

  // Explosion Logic
  useEffect(() => {
    if (isExploded && !clicked) {
      // Random blast force
      api.wakeUp();
      api.applyImpulse(
        [(Math.random() - 0.5) * 50, (Math.random() - 0.5) * 50, Math.random() * -50],
        [0, 0, 0]
      );
      setClicked(true);
    }
  }, [isExploded, clicked, api]);

  // Cleanup / Vacuum Logic (Attract to vehicles)
  useFrame(() => {
    if (cleanupActive && meshRef.current && !isDead) {
      const currentPos = meshRef.current.position;
      const dist = currentPos.distanceTo(vehiclePos);
      
      if (dist < 5) {
        // Shrink and disappear if close to vehicle
        if (meshRef.current.scale.x > 0.1) {
          meshRef.current.scale.multiplyScalar(0.9);
        } else {
          setIsDead(true);
          api.position.set(0, -100, 0); // Move out of physics world
        }
      } else {
        // Move towards vehicle (Magnetic effect)
        const dir = new THREE.Vector3().subVectors(vehiclePos, currentPos).normalize();
        api.applyForce([dir.x * 20, dir.y * 20, dir.z * 20], [0, 0, 0]);
        api.wakeUp();
      }
    }
  });

  const handleClick = (e: any) => {
    e.stopPropagation();
    if (clicked || isExploded) return;
    
    setClicked(true);
    onBreak();
    
    // Click Effect: Push back hard
    api.wakeUp();
    api.applyImpulse([0, 5, -40], [0, 0, 0]);
    api.applyTorque([Math.random() * 10, Math.random() * 10, 0]);
  };

  if (isDead) return null;

  return (
    <mesh ref={ref as any} onClick={handleClick} castShadow receiveShadow>
      <boxGeometry args={[2, 1, 1]} />
      <meshStandardMaterial 
        color={clicked ? '#3a3a3a' : '#8B4513'} 
        roughness={0.9} // Concrete/Brick look
        metalness={0.1}
      />
    </mesh>
  );
};

// --- 2. THE FLOOR ---
const Floor = () => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], position: [0, -5, 0] }));
  return (
    <mesh ref={ref as any} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="#1a1a1a" roughness={1} />
    </mesh>
  );
};

// --- 3. CONSTRUCTION LOADER (Code Generated 3D Model) ---
const LoaderTruck = ({ position, rotation, isMoving, onArrive }: { position: [number, number, number], rotation: [number, number, number], isMoving: boolean, onArrive: () => void }) => {
  const group = useRef<THREE.Group>(null!);
  
  useFrame((state, delta) => {
    if (isMoving && group.current) {
      // Simple movement logic towards center
      const targetX = position[0] > 0 ? 8 : -8; // Stop position
      
      if (Math.abs(group.current.position.x - targetX) > 0.5) {
        const dir = position[0] > 0 ? -1 : 1;
        group.current.position.x += dir * 8 * delta; // Speed
      } else {
        onArrive(); // Truck has arrived
      }
    }
  });

  return (
    <group ref={group} position={position} rotation={rotation} scale={1.5}>
      {/* Body */}
      <mesh position={[0, 1, 0]} castShadow>
        <boxGeometry args={[3, 1.5, 2]} />
        <meshStandardMaterial color="#FFD700" roughness={0.5} metalness={0.6} />
      </mesh>
      {/* Cab */}
      <mesh position={[-0.5, 2, 0]}>
        <boxGeometry args={[1.5, 1.2, 1.8]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      {/* Wheels */}
      <mesh position={[-1, 0.5, 1.1]} rotation={[Math.PI/2, 0, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 0.5, 16]} />
        <meshStandardMaterial color="#111" />
      </mesh>
      <mesh position={[1, 0.5, 1.1]} rotation={[Math.PI/2, 0, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 0.5, 16]} />
        <meshStandardMaterial color="#111" />
      </mesh>
      <mesh position={[-1, 0.5, -1.1]} rotation={[Math.PI/2, 0, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 0.5, 16]} />
        <meshStandardMaterial color="#111" />
      </mesh>
      <mesh position={[1, 0.5, -1.1]} rotation={[Math.PI/2, 0, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 0.5, 16]} />
        <meshStandardMaterial color="#111" />
      </mesh>
      {/* Bucket/Dozer Blade */}
      <mesh position={[2, 0.5, 0]} rotation={[0, 0, -0.2]}>
        <boxGeometry args={[0.2, 1.5, 3]} />
        <meshStandardMaterial color="#444" metalness={0.8} />
      </mesh>
    </group>
  );
};

// --- 4. SCENE COMPONENT ---
const Scene = ({ setProgress, isExploded, setExploded }: { setProgress: any, isExploded: boolean, setExploded: any }) => {
  const [cleanupActive, setCleanupActive] = useState(false);

  // Wall generation
  const bricks = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 6; i++) { // Rows
      for (let j = 0; j < 8; j++) { // Cols
        arr.push({
          id: `${i}-${j}`,
          x: (j - 4) * 2.1,
          y: (i * 1.1) - 2,
          z: 0
        });
      }
    }
    return arr;
  }, []);

  const [brokenCount, setBrokenCount] = useState(0);

  const handleBreak = () => {
    if (isExploded) return;
    const newCount = brokenCount + 1;
    setBrokenCount(newCount);
    setProgress(newCount);
    
    if (newCount >= 5) {
      setTimeout(() => setExploded(true), 200); // Slight delay for drama
    }
  };

  // Positions where trucks will stop
  const leftTruckPos = new THREE.Vector3(-8, -5, 2);
  const rightTruckPos = new THREE.Vector3(8, -5, 2);

  return (
    <>
      {/* Lighting & Environment */}
      <Environment preset="sunset" />
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 20, 10]} intensity={2} castShadow shadow-mapSize={[1024, 1024]} />
      <Sky />
      <ContactShadows resolution={1024} scale={50} blur={1} opacity={0.5} far={10} color="#000000" />

      {/* Physics World */}
      <Physics gravity={[0, -15, 0]} allowSleep={false}>
        
        {bricks.map((b, i) => (
          <Brick 
            key={b.id} 
            position={[b.x, b.y, b.z]} 
            onBreak={handleBreak}
            isExploded={isExploded}
            cleanupActive={cleanupActive}
            // Split cleanup duty: Left bricks go to left truck, right to right
            vehiclePos={b.x < 0 ? leftTruckPos : rightTruckPos} 
          />
        ))}
        
        <Floor />
      </Physics>

      {/* Reveal Text */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <Text
          position={[0, 1, -8]}
          fontSize={isExploded ? 3 : 0}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
        >
          CONTACT US
          <meshStandardMaterial color="white" emissive="white" emissiveIntensity={0.5} />
        </Text>
      </Float>

      {/* Construction Vehicles (Appear after explosion) */}
      {isExploded && (
        <>
          {/* Left Truck */}
          <LoaderTruck 
            position={[-25, -5, 2]} 
            rotation={[0, Math.PI / 2, 0]} 
            isMoving={isExploded} 
            onArrive={() => setCleanupActive(true)}
          />
          {/* Right Truck */}
          <LoaderTruck 
            position={[25, -5, 2]} 
            rotation={[0, -Math.PI / 2, 0]} 
            isMoving={isExploded}
            onArrive={() => setCleanupActive(true)}
          />
        </>
      )}
    </>
  );
};

// --- 5. MAIN EXPORT ---
export default function ConstructionBanner() {
  const [progress, setProgress] = useState(0);
  const [isExploded, setIsExploded] = useState(false);

  return (
    <div className="relative w-full h-[80vh] bg-black overflow-hidden">
      
      {/* Instructions Overlay */}
      {!isExploded && (
        <div className="absolute top-10 left-0 right-0 z-10 flex flex-col items-center justify-center pointer-events-none">
          <motion.div 
            initial={{ y: -50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            className="bg-black/50 backdrop-blur-md p-4 rounded-2xl border border-white/10"
          >
            <h2 className="text-3xl font-black text-white tracking-widest">
              SECURITY WALL DETECTED
            </h2>
            <p className="text-yellow-400 text-center font-mono mt-2 text-xl">
              BREAK {Math.max(0, 5 - progress)} BLOCKS TO ENTER
            </p>
          </motion.div>
        </div>
      )}

      {/* 3D Canvas */}
      <Canvas shadows camera={{ position: [0, 2, 15], fov: 50 }}>
        <Scene 
          setProgress={setProgress} 
          isExploded={isExploded} 
          setExploded={setIsExploded}
        />
      </Canvas>
      
      {/* Bottom Status Bar */}
      <div className="absolute bottom-0 w-full p-2 bg-black/80 text-white font-mono text-xs flex justify-between z-20">
        <span>SYS.STATUS: {isExploded ? 'CRITICAL FAILURE' : 'SECURE'}</span>
        <span>RENDER: HYPER-REALISTIC</span>
        <span>PHYSICS: ACTIVE</span>
      </div>
    </div>
  );
}