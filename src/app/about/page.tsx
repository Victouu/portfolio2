"use client";
import { motion } from "framer-motion";
//composants
import Image from "next/image";
//import photo
import cLogo from "../../../public/c.svg";
import dockerLogo from "../../../public/docker.svg";
import gitLogo from "../../../public/git.svg";
import javaLogo from "../../../public/java.svg";
import nextLogo from "../../../public/nextjs.svg";
import phpLogo from "../../../public/php.svg";
import postgreLogo from "../../../public/postgresql.svg";
import pythonLogo from "../../../public/python.svg";
import reactLogo from "../../../public/react.svg";
import typescriptLogo from "../../../public/typescript.svg";

import Head from "../components/head";
import {
  AnimatedSection,
  GlassCard,
  HoverCard,
} from "../components/animations";

// Données des expériences
const experiences = [
  {
    role: "DevOps Developer",
    company: "Orange",
    location: "Lannion",
    date: "Sept 2025 - Présent",
    description:
      "Automatisation des tests sur cœur de réseau 5G avec UERANSIM. Scripting système (Bash/Python), CI/CD et administration Linux.",
    type: "Alternance",
  },
  {
    role: "Développeur Web Fullstack",
    company: "Orange",
    location: "Lannion",
    date: "Avril 2025 - Juin 2025",
    description:
      "Développement d'un outil de gestion de campagnes de tests (React, Express, MySQL).",
    type: "Stage",
  },
];

// Compétences BUT Informatique
const competencesBUT = [
  {
    id: "C1",
    title: "Réaliser",
    description: "Concevoir, coder, tester et maintenir des applications",
    icon: "💻",
  },
  {
    id: "C2",
    title: "Optimiser",
    description: "Améliorer les performances et la qualité des programmes",
    icon: "⚡",
  },
  {
    id: "C3",
    title: "Administrer",
    description: "Installer, configurer et maintenir systèmes et réseaux",
    icon: "🖧",
  },
  {
    id: "C4",
    title: "Gérer",
    description: "Modéliser, stocker et exploiter des données",
    icon: "🗃️",
  },
  {
    id: "C5",
    title: "Conduire",
    description: "Organiser et piloter un projet informatique",
    icon: "📋",
  },
  {
    id: "C6",
    title: "Collaborer",
    description: "Travailler en équipe et communiquer efficacement",
    icon: "🤝",
  },
];

function About() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center overflow-x-hidden">
      <h1 className="sr-only">
        À propos de Victor Roué — Étudiant en BUT Informatique, alternant DevOps
        chez Orange
      </h1>
      <div className="flex min-h-screen w-[90%] max-w-[90%] flex-col md:max-w-4xl lg:max-w-7xl">
        <Head />
        <div className="flex items-center pt-5">
          <div className="mb-10 flex w-full flex-col items-center space-y-6 text-sm md:space-y-11 md:pb-0 md:text-lg">
            {/* Section Me connaître */}
            <AnimatedSection delay={0.1}>
              <h2 className="w-full text-xs font-extralight uppercase tracking-widest md:text-xl text-tuscan text-left">
                Me connaitre
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <GlassCard className="p-6 rounded-2xl">
                <div className="flex flex-col space-y-4 leading-relaxed md:flex-row md:space-x-12 md:space-y-0">
                  <p className="w-full whitespace-pre-line text-lg">
                    J&apos;ai 20 ans et je suis diplômé d&apos;un BAC STI2D
                    option SIN. Actuellement en 3ème année de BUT Informatique à
                    l&apos;IUT de Lannion, je suis en alternance chez Orange en
                    tant que DevOps Developer.
                    <br />
                    <br />
                    Passionné par l&apos;automatisation des infrastructures et
                    les réseaux 5G, je combine développement logiciel et
                    administration système pour fiabiliser les déploiements.
                    <br />
                    <br />À côté de mes études, je suis passionné par la
                    musique, le sport, les jeux vidéos et le cinéma.
                  </p>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Section Expériences */}
            <AnimatedSection delay={0.3}>
              <h2 className="w-full text-xs font-extralight uppercase tracking-widest md:text-xl text-tuscan text-left pt-8">
                Expériences
              </h2>
            </AnimatedSection>
            <div className="w-full space-y-6">
              {experiences.map((exp, index) => (
                <AnimatedSection key={index} delay={0.4 + index * 0.1}>
                  <HoverCard>
                    <div className="relative pl-8 pb-6 border-l-2 border-slate-300/50 dark:border-slate-600/50 last:pb-0">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.5 + index * 0.1,
                          type: "spring",
                        }}
                        className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg shadow-orange-500/30"
                      />
                      <GlassCard className="p-4 rounded-xl ml-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <div>
                            <h3 className="text-lg font-semibold">
                              {exp.role}
                            </h3>
                            <p className="text-orange-600 dark:text-orange-400">
                              {exp.company} — {exp.location}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 mt-1 sm:mt-0">
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {exp.date}
                            </span>
                            <span className="px-2 py-1 text-xs rounded-full bg-orange-100/80 dark:bg-orange-900/50 text-orange-800 dark:text-orange-200 backdrop-blur-sm">
                              {exp.type}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                          {exp.description}
                        </p>
                      </GlassCard>
                    </div>
                  </HoverCard>
                </AnimatedSection>
              ))}
            </div>

            {/* Section Compétences BUT */}
            <AnimatedSection delay={0.5}>
              <h2 className="w-full text-xs font-extralight uppercase tracking-widest md:text-xl text-tuscan text-left pt-8">
                Compétences BUT Informatique
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.55}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
                {competencesBUT.map((comp, index) => (
                  <motion.div
                    key={comp.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group"
                  >
                    <GlassCard className="p-4 rounded-xl h-full flex flex-col items-center text-center hover:border-orange-500/50 transition-colors">
                      <span className="text-3xl mb-2">{comp.icon}</span>
                      <span className="text-xs text-orange-600 dark:text-orange-400 font-mono mb-1">
                        {comp.id}
                      </span>
                      <h3 className="font-semibold text-lg mb-1">
                        {comp.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {comp.description}
                      </p>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* Section Compétences Techniques */}
            <AnimatedSection delay={0.7}>
              <h2 className="w-full text-xs font-extralight uppercase tracking-widest md:text-xl text-tuscan text-left pt-8">
                Compétences techniques
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.8}>
              <GlassCard className="p-6 rounded-2xl mb-12 max-w-[58rem] scroll-mt-28">
                <ul className="flex flex-wrap justify-center gap-2 text-lg">
                  {[
                    { logo: pythonLogo, name: "Python" },
                    { logo: dockerLogo, name: "Docker" },
                    { logo: gitLogo, name: "Git" },
                    { name: "Bash", custom: true, icon: "$" },
                    { name: "CI/CD", custom: true, customBg: true },
                    {
                      name: "Réseaux",
                      custom: true,
                      customBg: true,
                      customLabel: "5G",
                    },
                    { logo: postgreLogo, name: "PostgreSQL" },
                    { logo: reactLogo, name: "React" },
                    { logo: nextLogo, name: "NextJS", rounded: true },
                    { logo: typescriptLogo, name: "TypeScript" },
                    { logo: phpLogo, name: "PHP" },
                    { logo: cLogo, name: "C" },
                    { logo: javaLogo, name: "Java" },
                  ].map((skill, index) => (
                    <motion.li
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.05 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="flex flex-col items-center px-4 py-3 cursor-default"
                    >
                      {skill.custom ? (
                        skill.customBg ? (
                          <div className="flex items-center justify-center w-[50px] h-[50px] bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow-lg shadow-orange-500/30">
                            <span className="text-white font-bold text-sm">
                              {skill.customLabel || skill.name}
                            </span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center w-[50px] h-[50px] bg-slate-700 dark:bg-slate-200 rounded-lg">
                            <span className="text-white dark:text-black font-mono text-xl">
                              {skill.icon}
                            </span>
                          </div>
                        )
                      ) : skill.rounded ? (
                        <div className="bg-slate-50 rounded-full">
                          <Image
                            src={skill.logo!}
                            alt={skill.name}
                            width={50}
                            height={50}
                          />
                        </div>
                      ) : (
                        <Image
                          src={skill.logo!}
                          alt={skill.name}
                          width={50}
                          height={50}
                        />
                      )}
                      <span className="mt-2">{skill.name}</span>
                    </motion.li>
                  ))}
                </ul>
              </GlassCard>
            </AnimatedSection>

            {/* Section Objectif */}
            <AnimatedSection delay={0.8}>
              <h2 className="w-full text-xs font-extralight uppercase tracking-widest md:text-xl text-tuscan text-left">
                Mon objectif
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.9} className="w-full mb-20">
              <GlassCard className="p-6 rounded-2xl">
                <div className="text-center space-y-3">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-lg"
                  >
                    <strong className="gradient-text">
                      Objectif post-diplôme :
                    </strong>{" "}
                    Insertion professionnelle
                  </motion.p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Je recherche un poste de{" "}
                    <strong className="text-orange-600 dark:text-orange-400">
                      DevOps Junior
                    </strong>{" "}
                    ou{" "}
                    <strong className="text-orange-600 dark:text-orange-400">
                      Intégrateur Système
                    </strong>{" "}
                    à partir de Septembre 2026.
                  </p>
                </div>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
