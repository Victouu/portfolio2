"use client";
import { memo } from "react";

export const AnimatedBackground = memo(() => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient de base */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-[#0d1117] dark:via-[#161b22] dark:to-[#0d1117]" />

      {/* Blob 1 - Orange - Animation CSS */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-orange-400/30 to-orange-600/20 dark:from-orange-500/20 dark:to-orange-700/10 blur-[100px] animate-blob" />

      {/* Blob 2 - Bleu - Animation CSS */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-400/25 to-cyan-500/15 dark:from-blue-500/15 dark:to-cyan-600/10 blur-[80px] animate-blob animation-delay-2000" />

      {/* Blob 3 - Violet - Animation CSS */}
      <div className="absolute bottom-1/4 left-1/2 w-[350px] h-[350px] rounded-full bg-gradient-to-r from-purple-400/20 to-pink-500/15 dark:from-purple-500/10 dark:to-pink-600/5 blur-[90px] animate-blob animation-delay-4000" />

      {/* Grille subtle */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
});

AnimatedBackground.displayName = "AnimatedBackground";
