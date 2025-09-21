// LoadingScreen.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Premium cinematic loading screen
 * - 3D globe (wireframe + subtle glow)
 * - INPHRONE center with type animation + shimmer
 * - Social/opinion icons behave as progress bar
 * - Final zoom into globe when loading completes
 *
 * Responsive and self-contained.
 */

/* ----- Helper: 3D Globe Component ----- */
function Globe({ rotateSpeed = 0.01, pulse = 1 }: { rotateSpeed?: number; pulse?: number }) {
  const meshRef = useRef<THREE.Mesh | null>(null);
  const wireRef = useRef<THREE.Mesh | null>(null);
  useFrame((state, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += rotateSpeed * delta * 60;
    if (wireRef.current) wireRef.current.rotation.y -= (rotateSpeed * 0.5) * delta * 60;
  });

  return (
    <>
      {/* soft ambient + point light for cinematic shading */}
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color={"#9EE9FF"} />
      <pointLight position={[-5, -3, -3]} intensity={0.6} color={"#ffffff"} />

      {/* solid globe - dark surface with subtle emissive rim */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.0, 64, 64]} />
        <meshStandardMaterial
          color={"#0b1220"}
          metalness={0.3}
          roughness={0.5}
          emissive={"#052233"}
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* wireframe overlay for sci-fi globe visual */}
      <mesh ref={wireRef} scale={[1.02, 1.02, 1.02]}>
        <sphereGeometry args={[1.015, 48, 48]} />
        <meshBasicMaterial color={"#38bdf8"} wireframe={true} opacity={0.9} transparent />
      </mesh>

      {/* inner glow: an invisible larger sphere with additive blend-like effect using meshBasicMaterial */}
      <mesh scale={[1.3, 1.3, 1.3]}>
        <sphereGeometry args={[1.02, 32, 32]} />
        <meshBasicMaterial color={"#38bdf8"} transparent opacity={0.06} />
      </mesh>
    </>
  );
}

/* ----- Emoji / Icon set for loading bar (keeps simple & cross-platform) ----- */
/* You can swap these emoji strings with inline SVG logos later if you want brand-accurate icons */
const ICONS = ["📺", "🎬", "🎵", "📱", "💬", "👍", "👎", "❤️", "🔄", "📝", "⭐"];

type LoadingScreenProps = {
  onComplete?: () => void;
  simulateMs?: number; // total simulated loading ms
};

export default function LoadingScreen({ onComplete = () => {}, simulateMs = 4200 }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);
  const letters = "INPHRONE".split("");

  // Simulate progress: we increment smoothly to 100 over simulateMs
  useEffect(() => {
    const start = performance.now();
    let raf = 0;

    const tick = (t: number) => {
      const elapsed = t - start;
      const pct = Math.min(100, Math.round((elapsed / simulateMs) * 100));
      setProgress(pct);
      if (pct >= 100) {
        setTimeout(() => {
          // trigger final finished animation
          setFinished(true);
          // let parent know after a short moment for app transition
          setTimeout(() => onComplete(), 900);
        }, 350);
        cancelAnimationFrame(raf);
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [simulateMs, onComplete]);

  // Shimmer key frame control for text
  const shimmerStyle = { backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0.05) 100%)" };

  return (
    <AnimatePresence>
      {/* Entire screen hides when finished */}
      {!finished && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white px-4"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.9 } }}
        >
          {/* subtle starfield/particles */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 35 }).map((_, i) => {
              const size = Math.random() * 2 + 1;
              const left = Math.random() * 100;
              const top = Math.random() * 100;
              const delay = Math.random() * 5;
              return (
                <div
                  key={i}
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                    animationDelay: `${delay}s`,
                    background: "rgba(56,189,248,0.18)",
                    boxShadow: "0 0 8px rgba(56,189,248,0.12)",
                  }}
                  className="absolute rounded-full animate-floating"
                />
              );
            })}
          </div>

          {/* center column: text, globe, icons */}
          <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-3xl">
            {/* Title / subtitle group (not fixed) */}
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white/70 text-sm md:text-base tracking-wider"
              >
                Welcome to
              </motion.div>

              {/* INPHRONE with globe in the middle */}
              <motion.h1
                className="flex items-center justify-center gap-2 flex-wrap md:flex-nowrap"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.18 }}
                style={{ letterSpacing: "-0.02em" }}
              >
                {letters.map((ch, i) => {
                  // place globe at O index (third from right in INPHRONE -> index of 'O')
                  if (ch === "O") {
                    return (
                      <span key={i} className="relative inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24">
                        {/* Canvas globe (responsive) */}
                        <div className="w-14 h-14 md:w-20 md:h-20 rounded-full overflow-hidden" style={{ filter: "drop-shadow(0 0 18px rgba(56,189,248,0.25))" }}>
                          <Canvas
                            camera={{ position: [0, 0, 3], fov: 40 }}
                            style={{ width: "100%", height: "100%", display: "block" }}
                          >
                            <GlobeScene progress={progress} />
                          </Canvas>
                        </div>

                        {/* subtle ring & halo around the canvas globe */}
                        <motion.span
                          className="absolute rounded-full pointer-events-none"
                          style={{
                            width: 64,
                            height: 64,
                            borderRadius: "9999px",
                            boxShadow: "0 0 30px rgba(56,189,248,0.18)",
                          }}
                          animate={{ scale: [1, 1.06, 1] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                      </span>
                    );
                  }

                  // Regular letters
                  return (
                    <motion.span
                      key={i}
                      className="text-4xl md:text-6xl font-extrabold text-white leading-none"
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.08 }}
                    >
                      {ch}
                    </motion.span>
                  );
                })}
              </motion.h1>

              {/* Taglines */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }}>
                <div className="mt-3 text-sm md:text-lg font-medium text-white/75 flex gap-2 justify-center">
                  <motion.span initial={{ x: -8, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.1 }}>
                    The Tomorrow.
                  </motion.span>
                  <motion.span initial={{ x: 8, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.3 }}>
                    The Future.
                  </motion.span>
                </div>
              </motion.div>
            </div>

            {/* cinematic separator line */}
            <motion.div
              className="w-40 md:w-80 h-[1px] bg-white/6 rounded-full"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            />

            {/* Icon "progress" row */}
            <div className="w-full flex justify-center">
              <div className="flex gap-3 md:gap-6 items-center px-3 md:px-6 py-2 bg-transparent rounded-lg">
                {ICONS.map((ic, index) => {
                  const threshold = Math.round(((index + 1) / ICONS.length) * 100);
                  const active = progress >= threshold;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-center justify-center"
                      initial={{ opacity: 0.35, scale: 0.8 }}
                      animate={{
                        opacity: active ? 1 : 0.35,
                        scale: active ? [1.05, 0.98, 1] : 0.85,
                        filter: active ? "drop-shadow(0 6px 18px rgba(56,189,248,0.22))" : "none",
                        color: active ? "#38bdf8" : "#6b7280",
                      }}
                      transition={{ ease: "easeOut", duration: 0.45, delay: index * 0.02 }}
                      style={{ fontSize: index < 6 ? (window.innerWidth < 640 ? 22 : 28) : (window.innerWidth < 640 ? 18 : 22) }}
                    >
                      <span aria-hidden style={{ display: "inline-block" }}>
                        {ic}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* progress numeric + micro copy */}
            <div className="mt-3 flex flex-col items-center">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}>
                <div className="text-xs md:text-sm text-white/60">
                  {progress < 30 && "Initializing platform..."}
                  {progress >= 30 && progress < 60 && "Loading experiences..."}
                  {progress >= 60 && progress < 90 && "Connecting communities..."}
                  {progress >= 90 && "Almost ready!"}
                </div>
              </motion.div>

              <div className="mt-1 text-white font-semibold tracking-widest">
                <motion.span key={progress} initial={{ y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.25 }}>
                  {progress}%
                </motion.span>
              </div>
            </div>
          </div>

          {/* final zoom pulse - triggered just after progress hits 100% */}
          {progress >= 100 && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.9, 0], scale: [1, 1.1, 1.6] }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              style={{ background: "radial-gradient(circle, rgba(56,189,248,0.12), rgba(0,0,0,0))" }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ----- Sub-scene wrapper for the Canvas used inside globe slot ----- */
function GlobeScene({ progress }: { progress: number }) {
  // optionally change globe rotation/pulse based on progress
  const group = useRef<THREE.Group | null>(null);

  useFrame((state, delta) => {
    if (group.current) {
      // subtle rotation
      group.current.rotation.y += 0.004;
      // slight breathing with progress influence
      const p = 1 + (Math.sin(state.clock.elapsedTime * 0.8) * 0.02) + (progress / 100) * 0.02;
      group.current.scale.set(p, p, p);
    }
  });

  return (
    <group ref={group}>
      <Globe rotateSpeed={0.02} pulse={1 + progress / 500} />
    </group>
  );
}

/* ----- Extra styles (Tailwind + plain CSS). Add these to globals.css (or a CSS module) ----- */

/**
Add these rules to your global stylesheet (globals.css).
If using Tailwind, put the keyframes in your tailwind config or inline CSS.
*/

/* Copy & paste into globals.css or a stylesheet loaded globally: */

/*

@keyframes floating {
  0% { transform: translateY(0px); opacity: 0.6; }
  50% { transform: translateY(-8px); opacity: 1; }
  100% { transform: translateY(0px); opacity: 0.6; }
}

.animate-floating {
  animation: floating 6s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .animate-floating { animation: none; }
}

*/