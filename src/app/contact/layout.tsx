import type { Metadata } from "next";

const description =
  "Contactez Victor Roué pour une opportunité DevOps Junior ou Intégrateur Système à partir de Septembre 2026. Basé à Lannion, Bretagne.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Victor Roué",
    description,
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Victor Roué",
    description,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
