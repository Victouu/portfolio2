"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ne pas afficher sur mobile/tablette
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    // Afficher les curseurs
    cursor.style.opacity = "1";
    ring.style.opacity = "0.5";

    let ringX = 0;
    let ringY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const onMouseMove = (e: MouseEvent) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
      cursor.style.transform = `translate(${cursorX - 8}px, ${cursorY - 8}px)`;
    };

    // Animation fluide pour le ring
    const animateRing = () => {
      ringX += (cursorX - ringX) * 0.12;
      ringY += (cursorY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
      requestAnimationFrame(animateRing);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer";

      if (isClickable) {
        cursor.style.width = "40px";
        cursor.style.height = "40px";
        cursor.style.marginLeft = "-12px";
        cursor.style.marginTop = "-12px";
        cursor.style.opacity = "0.5";
      } else {
        cursor.style.width = "16px";
        cursor.style.height = "16px";
        cursor.style.marginLeft = "0";
        cursor.style.marginTop = "0";
        cursor.style.opacity = "1";
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    animateRing();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  return (
    <>
      {/* Curseur principal */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-white mix-blend-difference pointer-events-none z-[9999] transition-[width,height,margin,opacity] duration-200"
        style={{ opacity: 0 }}
      />

      {/* Ring qui suit */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-orange-500 dark:border-orange-400 pointer-events-none z-[9998]"
        style={{ opacity: 0 }}
      />

      {/* Cacher le curseur natif */}
      <style jsx global>{`
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
};
