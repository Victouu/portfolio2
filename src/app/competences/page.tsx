"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import Head from "../components/head";

import dockerLogo from "../../../public/docker.svg";
import gitLogo from "../../../public/git.svg";
import postgreLogo from "../../../public/postgresql.svg";
import pythonLogo from "../../../public/python.svg";
import reactLogo from "../../../public/react.svg";

const competences = [
  {
    category: "DevOps & Système",
    iconType: "devops",
    skills: ["Linux", "Bash", "Docker", "CI/CD", "Git", "Ansible"],
    color: "orange",
  },
  {
    category: "Développement",
    iconType: "code",
    skills: ["Python", "TypeScript", "React", "Node.js", "PHP"],
    color: "blue",
  },
  {
    category: "Réseau & Télécom",
    iconType: "network",
    skills: ["5G Core", "UERANSIM", "TCP/IP", "DNS", "VPN"],
    color: "green",
  },
  {
    category: "Base de données",
    iconType: "database",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    color: "purple",
  },
];

const iconComponents: Record<string, JSX.Element> = {
  devops: (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
  code: (
    <svg
      className="w-6 h-6"
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
  ),
  network: (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
      />
    </svg>
  ),
  database: (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
      />
    </svg>
  ),
};

function Competences() {
  const { theme, resolvedTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    setIsDarkTheme(resolvedTheme === "dark");
  }, [resolvedTheme]);

  const getColorClasses = (color: string) => {
    const colors: Record<string, { border: string; bg: string; text: string }> =
      {
        orange: {
          border: "border-orange-400 dark:border-orange-500",
          bg: "bg-orange-50 dark:bg-orange-900/20",
          text: "text-orange-600 dark:text-orange-400",
        },
        blue: {
          border: "border-blue-400 dark:border-blue-500",
          bg: "bg-blue-50 dark:bg-blue-900/20",
          text: "text-blue-600 dark:text-blue-400",
        },
        green: {
          border: "border-green-400 dark:border-green-500",
          bg: "bg-green-50 dark:bg-green-900/20",
          text: "text-green-600 dark:text-green-400",
        },
        purple: {
          border: "border-purple-400 dark:border-purple-500",
          bg: "bg-purple-50 dark:bg-purple-900/20",
          text: "text-purple-600 dark:text-purple-400",
        },
      };
    return colors[color] || colors.blue;
  };

  return (
    <div className="flex min-h-screen w-screen flex-col items-center">
      <div className="flex min-h-screen w-[90%] max-w-[90%] flex-col md:max-w-7xl">
        <Head />
        <div className="mb-20 flex w-full flex-col space-y-8 pt-5">
          {/* Titre */}
          <h2 className="w-full text-xs font-extralight uppercase tracking-widest md:text-xl text-tuscan text-left">
            Compétences
          </h2>

          {/* Introduction */}
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            Mes compétences techniques acquises lors de ma formation et de mes
            expériences professionnelles chez Orange.
          </p>

          {/* Grille des compétences */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {competences.map((cat, index) => {
              const colorClasses = getColorClasses(cat.color);
              return (
                <div
                  key={index}
                  className={`p-6 rounded-xl border-2 ${colorClasses.border} ${colorClasses.bg} transition-all duration-300 hover:shadow-lg`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`p-2 rounded-lg ${colorClasses.bg} ${colorClasses.text}`}
                    >
                      {iconComponents[cat.iconType]}
                    </span>
                    <h3 className={`text-xl font-bold ${colorClasses.text}`}>
                      {cat.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1.5 text-sm bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 text-gray-700 dark:text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Compétences BUT Informatique */}
          <div className="pt-8">
            <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
              Compétences du BUT Informatique
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  id: "C1",
                  name: "Réaliser",
                  description: "Développer des applications informatiques",
                  level: 90,
                  color: "orange",
                },
                {
                  id: "C2",
                  name: "Optimiser",
                  description: "Appréhender et construire des algorithmes",
                  level: 85,
                  color: "blue",
                },
                {
                  id: "C3",
                  name: "Administrer",
                  description: "Installer et maintenir des infrastructures",
                  level: 95,
                  color: "green",
                },
                {
                  id: "C4",
                  name: "Gérer",
                  description: "Concevoir et exploiter des données",
                  level: 80,
                  color: "purple",
                },
                {
                  id: "C5",
                  name: "Conduire",
                  description: "Satisfaire les besoins des utilisateurs",
                  level: 85,
                  color: "pink",
                },
                {
                  id: "C6",
                  name: "Collaborer",
                  description: "Travailler dans une équipe informatique",
                  level: 90,
                  color: "cyan",
                },
              ].map((comp) => (
                <div
                  key={comp.id}
                  className="p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`w-10 h-10 flex items-center justify-center rounded-lg font-bold text-white ${
                        comp.color === "orange"
                          ? "bg-orange-500"
                          : comp.color === "blue"
                            ? "bg-blue-500"
                            : comp.color === "green"
                              ? "bg-green-500"
                              : comp.color === "purple"
                                ? "bg-purple-500"
                                : comp.color === "pink"
                                  ? "bg-pink-500"
                                  : "bg-cyan-500"
                      }`}
                    >
                      {comp.id}
                    </span>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        {comp.name}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {comp.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-500 dark:text-gray-400">
                        Niveau acquis
                      </span>
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {comp.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          comp.color === "orange"
                            ? "bg-orange-500"
                            : comp.color === "blue"
                              ? "bg-blue-500"
                              : comp.color === "green"
                                ? "bg-green-500"
                                : comp.color === "purple"
                                  ? "bg-purple-500"
                                  : comp.color === "pink"
                                    ? "bg-pink-500"
                                    : "bg-cyan-500"
                        }`}
                        style={{ width: `${comp.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Logos des technologies principales */}
          <div className="pt-8">
            <h3 className="text-lg font-semibold mb-6 text-center text-gray-600 dark:text-gray-400">
              Technologies maîtrisées
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform">
                <Image src={pythonLogo} alt="Python" width={60} height={60} />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Python
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform">
                <Image src={dockerLogo} alt="Docker" width={60} height={60} />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Docker
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform">
                <Image src={gitLogo} alt="Git" width={60} height={60} />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Git
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform">
                <div className="flex items-center justify-center w-[60px] h-[60px] bg-slate-700 dark:bg-slate-200 rounded-lg">
                  <span className="text-white dark:text-black font-mono text-2xl">
                    $
                  </span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Bash
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform">
                <Image src={reactLogo} alt="React" width={60} height={60} />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  React
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform">
                <Image
                  src={postgreLogo}
                  alt="PostgreSQL"
                  width={60}
                  height={60}
                />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  PostgreSQL
                </span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-8">
            <div className="w-full p-6 rounded-xl bg-gradient-to-r from-orange-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 border border-slate-200 dark:border-slate-600">
              <div className="text-center space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Découvrez mon parcours complet et mes expériences sur la page
                </p>
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
                >
                  À propos de moi
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Competences;
