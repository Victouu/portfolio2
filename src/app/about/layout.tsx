import type { Metadata } from "next";

const description =
  "Étudiant en 3ème année de BUT Informatique à l'IUT de Lannion, alternant DevOps chez Orange. Parcours, expériences professionnelles et compétences techniques.";

export const metadata: Metadata = {
  title: "À propos",
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "À propos — Victor Roué",
    description,
    url: "/about",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "À propos — Victor Roué",
    description,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
