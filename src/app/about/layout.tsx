import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos — Victor Roué",
  description:
    "Étudiant en 3ème année de BUT Informatique à l'IUT de Lannion, alternant DevOps chez Orange. Parcours, expériences et compétences.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
