"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Head from "../components/head";
import {
  AnimatedSection,
  GlassCard,
  HoverCard,
} from "../components/animations";

// Données des projets
const projets = [
  {
    title: "Automatisation Tests 5G",
    company: "Orange",
    type: "Alternance",
    date: "Sept 2025 - Présent",
    description:
      "Développement d'un framework d'automatisation des tests sur cœur de réseau 5G. Utilisation d'UERANSIM pour simuler des équipements utilisateurs et validation des scénarios de bout en bout.",
    tags: ["Python", "Bash", "UERANSIM", "Linux", "CI/CD", "Docker"],
    highlight: true,
  },
  {
    title: "Outil de Gestion de Campagnes de Tests",
    company: "Orange",
    type: "Stage",
    date: "Avril 2025 - Juin 2025",
    description:
      "Conception et développement d'une application web permettant de gérer les campagnes de tests internes. Interface utilisateur intuitive et API REST robuste.",
    tags: ["React", "Express", "MySQL", "Node.js", "REST API"],
    highlight: true,
  },
  {
    title: "TripEnArvor",
    company: "Projet Universitaire",
    type: "SAÉ",
    date: "2024 - 2025",
    description:
      "Plateforme SaaS de e-tourisme en Bretagne. Conception de l'architecture MVC, gestion de base de données et travail en méthode Agile avec une équipe de 5 développeurs.",
    tags: ["PostgreSQL", "PHP", "Git", "Gestion de Projet", "MVC"],
    highlight: false,
  },
  {
    title: "Portfolio Personnel",
    company: "Projet Personnel",
    type: "Web",
    date: "2024 - 2025",
    description:
      "Site portfolio responsive développé avec Next.js et Tailwind CSS. Déploiement automatisé et optimisation des performances.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    highlight: false,
  },
];

function Projets() {
  const { theme, resolvedTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    setIsDarkTheme(resolvedTheme === "dark");
  }, [resolvedTheme]);

  return (
    <div className="flex min-h-screen w-screen flex-col items-center">
      <div className="flex min-h-screen w-[90%] max-w-[90%] flex-col md:max-w-7xl">
        <Head />
        <div className="mb-20 flex w-full flex-col space-y-8 pt-5">
          {/* Titre de la page */}
          <AnimatedSection delay={0.1}>
            <h2 className="w-full text-xs font-extralight uppercase tracking-widest md:text-xl text-tuscan text-left">
              Projets
            </h2>
          </AnimatedSection>

          {/* Introduction */}
          <AnimatedSection delay={0.2}>
            <GlassCard className="p-6 rounded-2xl">
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
                Découvrez mes réalisations professionnelles et personnelles,
                principalement axées sur le DevOps, l&apos;automatisation et le
                développement web.
              </p>
            </GlassCard>
          </AnimatedSection>

          {/* Section Projets Professionnels */}
          <div className="space-y-6">
            <AnimatedSection delay={0.3}>
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <motion.span
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900/50 dark:to-orange-800/50 rounded-lg shadow-lg"
                >
                  <svg
                    className="w-5 h-5 text-orange-600 dark:text-orange-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </motion.span>
                Expériences Professionnelles
              </h3>
            </AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projets
                .filter((p) => p.highlight)
                .map((projet, index) => (
                  <AnimatedSection key={index} delay={0.4 + index * 0.1}>
                    <HoverCard>
                      <GlassCard className="rounded-2xl border-2 border-orange-400/30 dark:border-orange-500/30 overflow-hidden h-full">
                        <div className="p-6">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                            <div>
                              <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                                {projet.title}
                              </h4>
                              <p className="text-orange-600 dark:text-orange-400 font-medium">
                                {projet.company}
                              </p>
                            </div>
                            <div className="flex items-center gap-2 mt-2 sm:mt-0">
                              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-orange-100/80 dark:bg-orange-900/50 text-orange-800 dark:text-orange-200 backdrop-blur-sm">
                                {projet.type}
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                            {projet.date}
                          </p>
                          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                            {projet.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {projet.tags.map((tag, tagIndex) => (
                              <motion.span
                                key={tagIndex}
                                whileHover={{ scale: 1.05 }}
                                className="px-2 py-1 text-xs rounded-md bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-600/50"
                              >
                                {tag}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </GlassCard>
                    </HoverCard>
                  </AnimatedSection>
                ))}
            </div>
          </div>

          {/* Section Autres Projets */}
          <div className="space-y-6 pt-8">
            <AnimatedSection delay={0.5}>
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <motion.span
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 rounded-lg shadow-lg"
                >
                  <svg
                    className="w-5 h-5 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </motion.span>
                Autres Projets
              </h3>
            </AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projets
                .filter((p) => !p.highlight)
                .map((projet, index) => (
                  <AnimatedSection key={index} delay={0.6 + index * 0.1}>
                    <HoverCard>
                      <GlassCard className="rounded-2xl border border-blue-200/30 dark:border-blue-500/20 overflow-hidden h-full">
                        <div className="p-6">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                            <div>
                              <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                                {projet.title}
                              </h4>
                              <p className="text-blue-600 dark:text-blue-400 font-medium">
                                {projet.company}
                              </p>
                            </div>
                            <div className="flex items-center gap-2 mt-2 sm:mt-0">
                              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100/80 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 backdrop-blur-sm">
                                {projet.type}
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                            {projet.date}
                          </p>
                          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                            {projet.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {projet.tags.map((tag, tagIndex) => (
                              <motion.span
                                key={tagIndex}
                                whileHover={{ scale: 1.05 }}
                                className="px-2 py-1 text-xs rounded-md bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-600/50"
                              >
                                {tag}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </GlassCard>
                    </HoverCard>
                  </AnimatedSection>
                ))}
            </div>
          </div>

          {/* Section Call to Action */}
          <AnimatedSection delay={0.8} className="pt-8">
            <GlassCard className="p-8 rounded-2xl">
              <div className="text-center space-y-4">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="text-xl font-bold text-gray-900 dark:text-white"
                >
                  Disponible pour une embauche en Septembre 2026
                </motion.h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Je recherche un poste de{" "}
                  <strong className="text-orange-600 dark:text-orange-400">
                    DevOps Junior
                  </strong>{" "}
                  ou{" "}
                  <strong className="text-orange-600 dark:text-orange-400">
                    Intégrateur Système
                  </strong>{" "}
                  pour débuter ma carrière professionnelle.
                </p>
                <HoverCard>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
                  >
                    Me contacter
                    <svg
                      className="w-4 h-4"
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
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}

export default Projets;
