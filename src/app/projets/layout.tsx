import type { Metadata } from "next";

const description =
  "Projets professionnels et universitaires de Victor Roué : automatisation 5G chez Orange, développement web full-stack, projets SAÉ BUT Informatique.";

export const metadata: Metadata = {
  title: "Projets",
  description,
  alternates: { canonical: "/projets" },
  openGraph: {
    title: "Projets — Victor Roué",
    description,
    url: "/projets",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projets — Victor Roué",
    description,
  },
};

export default function ProjetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
