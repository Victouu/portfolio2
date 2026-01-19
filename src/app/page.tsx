"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import imgProfil from "../app/photo/111.jpg";

import Head from "./components/head";
import { TextGenerateEffect } from "./components/text-reveal";

const words = `Victor Roué`;

export default function Home() {
  const { theme, resolvedTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    setIsDarkTheme(resolvedTheme === "dark");
  }, [resolvedTheme]);

  return (
    <div className="flex min-h-screen w-screen flex-col items-center">
      <div className="flex min-h-screen w-[90%] max-w-[90%] flex-col md:max-w-7xl">
        <Head />
        <div className="flex w-full flex-1 items-center justify-center">
          <div className="flex w-full flex-col items-center space-y-8 md:space-y-12 z-10">
            {/* Photo de profil */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-blue-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
              <Image
                src={imgProfil}
                alt="Victor Roué - DevOps Developer"
                width={250}
                height={250}
                className="relative rounded-full h-44 w-44 md:w-56 md:h-56 object-cover border-4 border-white dark:border-slate-800 shadow-xl"
              />
            </div>

            {/* Titre principal */}
            <div className="text-center space-y-4">
              <h2 className="text-lg md:text-xl font-light uppercase tracking-[0.3em] text-orange-600 dark:text-orange-400">
                DevOps Developer & Network Automation
              </h2>
              <TextGenerateEffect words={words} />
            </div>

            {/* Badge entreprise */}
            <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-100 to-blue-100 dark:from-slate-800 dark:to-slate-700 rounded-full border border-orange-200 dark:border-slate-600">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">
                Alternant chez Orange | 3ème année BUT Informatique
              </span>
            </div>

            {/* Description */}
            <p className="text-center text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
              Passionné par l&apos;automatisation des infrastructures et les
              réseaux 5G. Je combine le développement logiciel et
              l&apos;administration système pour fiabiliser les déploiements.
            </p>

            {/* Boutons CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/projets"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
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
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-slate-300 dark:border-slate-600 hover:border-orange-500 dark:hover:border-orange-400 text-gray-700 dark:text-gray-300 font-semibold rounded-lg transition-all duration-300 hover:-translate-y-1"
              >
                Me contacter
              </a>
            </div>

            {/* Tags compétences clés */}
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              {["Python", "Bash", "Docker", "CI/CD", "Linux", "5G"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-700"
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
