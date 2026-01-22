"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation GSAP pour les blobs
    const ctx = gsap.context(() => {
      // Blob 1 - mouvement fluide
      gsap.to(blob1Ref.current, {
        x: "random(-100, 100)",
        y: "random(-100, 100)",
        duration: 8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Blob 2 - mouvement différent
      gsap.to(blob2Ref.current, {
        x: "random(-150, 150)",
        y: "random(-80, 80)",
        duration: 10,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1,
      });

      // Blob 3 - mouvement plus lent
      gsap.to(blob3Ref.current, {
        x: "random(-80, 80)",
        y: "random(-120, 120)",
        duration: 12,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      {/* Gradient de base */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-[#0d1117] dark:via-[#161b22] dark:to-[#0d1117]" />

      {/* Blob 1 - Orange */}
      <motion.div
        ref={blob1Ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-orange-400/30 to-orange-600/20 dark:from-orange-500/20 dark:to-orange-700/10 blur-[100px]"
      />

      {/* Blob 2 - Bleu */}
      <motion.div
        ref={blob2Ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-400/25 to-cyan-500/15 dark:from-blue-500/15 dark:to-cyan-600/10 blur-[80px]"
      />

      {/* Blob 3 - Violet */}
      <motion.div
        ref={blob3Ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
        className="absolute bottom-1/4 left-1/2 w-[350px] h-[350px] rounded-full bg-gradient-to-r from-purple-400/20 to-pink-500/15 dark:from-purple-500/10 dark:to-pink-600/5 blur-[90px]"
      />

      {/* Grille subtle */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Overlay avec glassmorphism subtil */}
      <div className="absolute inset-0 backdrop-blur-[1px]" />
    </div>
  );
};
