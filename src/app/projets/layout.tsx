import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projets — Victor Roué",
  description:
    "Projets professionnels et universitaires de Victor Roué : automatisation 5G chez Orange, développement web full-stack, SAÉ BUT Informatique.",
};

export default function ProjetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
