"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Head from "../components/head";

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
          <h2 className="w-full text-xs font-extralight uppercase tracking-widest md:text-xl text-tuscan text-left">
            Projets
          </h2>

          {/* Introduction */}
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            Découvrez mes réalisations professionnelles et personnelles,
            principalement axées sur le DevOps, l&apos;automatisation et le
            développement web.
          </p>

          {/* Section Projets Professionnels */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <span className="w-8 h-8 flex items-center justify-center bg-orange-100 dark:bg-orange-900 rounded-lg">
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
              </span>
              Expériences Professionnelles
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projets
                .filter((p) => p.highlight)
                .map((projet, index) => (
                  <div
                    key={index}
                    className="group rounded-xl border-2 border-orange-400 dark:border-orange-500 bg-gradient-to-br from-orange-50 to-white dark:from-slate-800 dark:to-slate-900 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                            {projet.title}
                          </h4>
                          <p className="text-orange-600 dark:text-orange-400 font-medium">
                            {projet.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 mt-2 sm:mt-0">
                          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200">
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
                          <span
                            key={tagIndex}
                            className="px-2 py-1 text-xs rounded-md bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Section Autres Projets */}
          <div className="space-y-6 pt-8">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <span className="w-8 h-8 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded-lg">
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
              </span>
              Autres Projets
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projets
                .filter((p) => !p.highlight)
                .map((projet, index) => (
                  <div
                    key={index}
                    className="group rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-md hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {projet.title}
                          </h4>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">
                            {projet.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 mt-2 sm:mt-0">
                          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
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
                          <span
                            key={tagIndex}
                            className="px-2 py-1 text-xs rounded-md bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Section Call to Action */}
          <div className="pt-8">
            <div className="w-full p-6 rounded-xl bg-gradient-to-r from-orange-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 border border-slate-200 dark:border-slate-600">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Disponible pour une embauche en Septembre 2026
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Je recherche un poste de <strong>DevOps Junior</strong> ou{" "}
                  <strong>Intégrateur Système</strong> pour débuter ma carrière
                  professionnelle.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projets;
