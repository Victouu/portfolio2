"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
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

function About() {
  const { theme, resolvedTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    setIsDarkTheme(resolvedTheme === "dark");
  }, [resolvedTheme]);

  return (
    <div className="flex min-h-screen w-screen flex-col items-center">
      <div className="flex min-h-screen w-[90%] max-w-[90%] flex-col md:max-w-7xl">
        <Head />
        <div className="flex items-center pt-5">
          <div className="md:max-w-2/3 mb-20 flex w-full flex-col items-center space-y-4 text-sm md:space-y-11 md:pb-0 md:text-lg">
            {/* Section Me connaître */}
            <h2 className="w-full text-xs font-extralight uppercase tracking-widest md:text-xl text-tuscan text-left">
              Me connaitre
            </h2>
            <div className="flex flex-col space-y-4 leading-relaxed md:flex-row md:space-x-12 md:space-y-0">
              <p className="w-full whitespace-pre-line text-lg">
                J&apos;ai 20 ans et je suis diplômé d&apos;un BAC STI2D option
                SIN. Actuellement en 3ème année de BUT Informatique à l&apos;IUT
                de Lannion, je suis en alternance chez Orange en tant que DevOps
                Developer.
                <br />
                <br />
                Passionné par l&apos;automatisation des infrastructures et les
                réseaux 5G, je combine développement logiciel et administration
                système pour fiabiliser les déploiements.
                <br />
                <br />À côté de mes études, je suis passionné par la musique, le
                sport, les jeux vidéos et le cinéma.
              </p>
            </div>

            {/* Section Expériences */}
            <h2 className="w-full text-xs font-extralight uppercase tracking-widest md:text-xl text-tuscan text-left pt-8">
              Expériences
            </h2>
            <div className="w-full space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-6 border-l-2 border-slate-300 dark:border-slate-600 last:pb-0"
                >
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-orange-500 dark:bg-orange-400" />
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold">{exp.role}</h3>
                      <p className="text-orange-600 dark:text-orange-400">
                        {exp.company} — {exp.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-1 sm:mt-0">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {exp.date}
                      </span>
                      <span className="px-2 py-1 text-xs rounded-full bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Section Compétences */}
            <h2 className="w-full text-xs font-extralight uppercase tracking-widest md:text-xl text-tuscan text-left pt-8">
              Mes compétences
            </h2>
            <div className="mb-12 max-w-[58rem] scroll-mt-28 text-center">
              <ul className="flex flex-wrap justify-center gap-2 text-lg">
                <li className="flex flex-col items-center px-4 py-3 hover:scale-105 duration-100">
                  <Image src={pythonLogo} alt="python" width={50} height={50} />
                  <span className="mt-2">Python</span>
                </li>
                <li className="flex flex-col items-center px-4 py-3 hover:scale-105 duration-100">
                  <Image src={dockerLogo} alt="docker" width={50} height={50} />
                  <span className="mt-2">Docker</span>
                </li>
                <li className="flex flex-col items-center px-4 py-3 hover:scale-105 duration-100">
                  <Image src={gitLogo} alt="git" width={50} height={50} />
                  <span className="mt-2">Git</span>
                </li>
                <li className="flex flex-col items-center px-4 py-3 hover:scale-105 duration-100">
                  <div className="flex items-center justify-center w-[50px] h-[50px] bg-slate-700 dark:bg-slate-200 rounded-lg">
                    <span className="text-white dark:text-black font-mono text-xl">
                      $
                    </span>
                  </div>
                  <span className="mt-2">Bash</span>
                </li>
                <li className="flex flex-col items-center px-4 py-3 hover:scale-105 duration-100">
                  <div className="flex items-center justify-center w-[50px] h-[50px] bg-orange-500 rounded-lg">
                    <span className="text-white font-bold text-sm">CI/CD</span>
                  </div>
                  <span className="mt-2">CI/CD</span>
                </li>
                <li className="flex flex-col items-center px-4 py-3 hover:scale-105 duration-100">
                  <Image
                    src={postgreLogo}
                    alt="postgresql"
                    width={50}
                    height={50}
                  />
                  <span className="mt-2">PostgreSQL</span>
                </li>
                <li className="flex flex-col items-center px-4 py-3 hover:scale-105 duration-100">
                  <Image src={reactLogo} alt="react" width={50} height={50} />
                  <span className="mt-2">React</span>
                </li>
                <li className="flex flex-col items-center px-4 py-3 hover:scale-105 duration-100">
                  <div className="bg-slate-50 rounded-full">
                    <Image src={nextLogo} alt="next" width={50} height={50} />
                  </div>
                  <span className="mt-2">NextJS</span>
                </li>
                <li className="flex flex-col items-center px-4 py-3 hover:scale-105 duration-100">
                  <Image
                    src={typescriptLogo}
                    alt="typescript"
                    width={50}
                    height={50}
                  />
                  <span className="mt-2">TypeScript</span>
                </li>
                <li className="flex flex-col items-center px-4 py-3 hover:scale-105 duration-100">
                  <Image src={phpLogo} alt="php" width={50} height={50} />
                  <span className="mt-2">PHP</span>
                </li>
                <li className="flex flex-col items-center px-4 py-3 hover:scale-105 duration-100">
                  <Image src={cLogo} alt="c" width={50} height={50} />
                  <span className="mt-2">C</span>
                </li>
                <li className="flex flex-col items-center px-4 py-3 hover:scale-105 duration-100">
                  <Image src={javaLogo} alt="java" width={50} height={50} />
                  <span className="mt-2">Java</span>
                </li>
              </ul>
            </div>

            {/* Section Objectif */}
            <h2 className="w-full text-xs font-extralight uppercase tracking-widest md:text-xl text-tuscan text-left">
              Mon objectif
            </h2>
            <div className="w-full p-6 rounded-lg bg-gradient-to-r from-orange-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 border border-slate-200 dark:border-slate-600 mb-20">
              <div className="text-center space-y-3">
                <p className="text-lg">
                  <strong>Objectif post-diplôme :</strong> Insertion
                  professionnelle
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Je recherche un poste de <strong>DevOps Junior</strong> ou{" "}
                  <strong>Intégrateur Système</strong> à partir de Septembre
                  2026.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
