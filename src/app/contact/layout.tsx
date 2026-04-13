import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Victor Roué",
  description:
    "Contactez Victor Roué pour une opportunité DevOps Junior ou Intégrateur Système à partir de Septembre 2026.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
