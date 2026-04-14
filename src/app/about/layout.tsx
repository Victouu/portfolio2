import type { Metadata } from "next";

const description =
  "Étudiant en 3ème année de BUT Informatique à l'IUT de Lannion, alternant DevOps chez Orange. Parcours, expériences professionnelles et compétences techniques.";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://victor-roue.vercel.app";

export const metadata: Metadata = {
  title: "À propos de Victor Roué",
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

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteUrl}/about#profilepage`,
  url: `${siteUrl}/about`,
  name: "À propos de Victor Roué",
  description,
  inLanguage: "fr-FR",
  mainEntity: {
    "@id": `${siteUrl}/#person`,
  },
  isPartOf: {
    "@id": `${siteUrl}/#website`,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
      />
      {children}
    </>
  );
}
