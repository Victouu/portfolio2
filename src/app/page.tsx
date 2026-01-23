"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import imgProfil from "../app/photo/111.jpg";

import Head from "./components/head";
import { TextGenerateEffect } from "./components/text-reveal";
import {
  AnimatedSection,
  GlassCard,
  HoverCard,
  StaggerContainer,
  StaggerItem,
} from "./components/animations";

const words = `Victor Roué`;

export default function Home() {
  const { theme, resolvedTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsDarkTheme(resolvedTheme === "dark");
  }, [resolvedTheme]);

  // Animation GSAP pour l'effet glow de la photo
  useEffect(() => {
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        scale: 1.1,
        opacity: 0.4,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);

  return (
    <div className="flex min-h-screen w-screen flex-col items-center">
      <div className="flex min-h-screen w-[90%] max-w-[90%] flex-col md:max-w-7xl">
        <Head />
        <div className="flex w-full flex-1 items-center justify-center">
          <div className="flex w-full flex-col items-center space-y-8 md:space-y-12 z-10">
            {/* Photo de profil avec animation */}
            <AnimatedSection delay={0.2}>
              <div ref={profileRef} className="relative">
                <div
                  ref={glowRef}
                  className="absolute inset-0 bg-gradient-to-r from-orange-400 to-blue-500 rounded-full blur-xl opacity-30"
                ></div>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={imgProfil}
                    alt="Victor Roué - DevOps Developer"
                    width={250}
                    height={250}
                    className="relative rounded-full h-44 w-44 md:w-56 md:h-56 object-cover border-4 border-white/80 dark:border-slate-800/80 shadow-2xl backdrop-blur-sm"
                  />
                </motion.div>
              </div>
            </AnimatedSection>

            {/* Titre principal */}
            <AnimatedSection delay={0.4} className="text-center space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg md:text-xl font-light uppercase tracking-[0.3em] text-orange-600 dark:text-orange-400"
              >
                Étudiant en informatique
              </motion.h2>
              <TextGenerateEffect words={words} />
            </AnimatedSection>

            {/* Badge entreprise avec glassmorphism */}
            <AnimatedSection delay={0.6}>
              <GlassCard className="flex items-center gap-3 px-6 py-3 rounded-full">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></span>
                <span className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">
                  Alternant chez Orange | 3ème année BUT Informatique
                </span>
              </GlassCard>
            </AnimatedSection>

            {/* Description avec glassmorphism */}
            <AnimatedSection delay={0.7}>
              <GlassCard className="p-6 rounded-2xl max-w-2xl">
                <p className="text-center text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Curieux de nature, j&apos;aime comprendre comment les choses
                  fonctionnent et les améliorer.
                </p>
              </GlassCard>
            </AnimatedSection>

            {/* Boutons CTA avec animations */}
            <AnimatedSection
              delay={0.8}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <HoverCard>
                <a
                  href="/projets"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
                >
                  Voir mes projets
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </HoverCard>
              <HoverCard>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-600/50 hover:border-orange-500 dark:hover:border-orange-400 text-gray-700 dark:text-gray-300 font-semibold rounded-xl transition-all duration-300"
                >
                  Me contacter
                </a>
              </HoverCard>
            </AnimatedSection>

            {/* Tags compétences clés avec stagger animation */}
            <AnimatedSection delay={0.9} className="pt-4">
              <StaggerContainer className="flex flex-wrap justify-center gap-3">
                {["Python", "Bash", "Docker", "CI/CD", "Linux", "5G"].map(
                  (skill) => (
                    <StaggerItem key={skill}>
                      <motion.span
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-4 py-2 text-sm bg-white/60 dark:bg-slate-800/60 backdrop-blur-lg text-slate-700 dark:text-slate-300 rounded-full border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-shadow cursor-default"
                      >
                        {skill}
                      </motion.span>
                    </StaggerItem>
                  ),
                )}
              </StaggerContainer>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
