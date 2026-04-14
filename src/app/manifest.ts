import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Victor Roué — Portfolio",
    short_name: "Victor Roué",
    description:
      "Portfolio officiel de Victor Roué, développeur DevOps et alternant chez Orange à Lannion.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#f97316",
    lang: "fr-FR",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/profile.jpg",
        sizes: "800x800",
        type: "image/jpeg",
      },
    ],
  };
}
