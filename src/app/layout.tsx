import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Provider } from "./providers";
//vercel
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnimatedBackground } from "./components/animated-background";
import { CustomCursor } from "./components/custom-cursor";
import { SmoothScroll } from "./components/smooth-scroll";

const space_Grotesk = Space_Grotesk({ subsets: ["latin"] });

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://victor-roue.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Victor Roué — Portfolio | Développeur DevOps, Alternant Orange, BUT Informatique Lannion",
    template: "%s | Victor Roué",
  },
  description:
    "Portfolio officiel de Victor Roué, étudiant en 3ème année de BUT Informatique à l'IUT de Lannion et alternant DevOps chez Orange. Automatisation 5G, CI/CD, Python, Docker, Linux. Disponible pour un poste DevOps Junior en Septembre 2026.",
  applicationName: "Portfolio Victor Roué",
  keywords: [
    "Victor Roué",
    "Victor Roue",
    "Roué Victor",
    "portfolio Victor Roué",
    "Victor Roué Orange",
    "Victor Roué DevOps",
    "Victor Roué IUT Lannion",
    "Victor Roué BUT Informatique",
    "Victor Roué alternance",
    "Victor Roué Lannion",
    "DevOps Junior Lannion",
    "alternant DevOps Orange",
    "BUT Informatique IUT Lannion",
    "développeur DevOps Bretagne",
    "portfolio développeur alternant",
    "automatisation 5G",
    "Python Docker CI/CD Linux",
  ],
  authors: [{ name: "Victor Roué", url: siteUrl }],
  creator: "Victor Roué",
  publisher: "Victor Roué",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Victor Roué — Portfolio",
    title:
      "Victor Roué — Développeur DevOps & Étudiant BUT Informatique (Alternant Orange)",
    description:
      "Portfolio officiel de Victor Roué, alternant DevOps chez Orange à Lannion. Automatisation 5G, CI/CD, Python, Docker, Linux.",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Victor Roué — Portrait officiel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Roué — Développeur DevOps",
    description:
      "Portfolio officiel de Victor Roué, alternant DevOps chez Orange à Lannion.",
    images: ["/profile.jpg"],
    creator: "@VictorRoue",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/profile.jpg",
  },
  category: "technology",
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Victor Roué",
  alternateName: ["Victor Roue", "Roué Victor", "Victouu"],
  givenName: "Victor",
  familyName: "Roué",
  gender: "Male",
  nationality: {
    "@type": "Country",
    name: "France",
  },
  jobTitle: "Développeur DevOps (Alternant)",
  description:
    "Étudiant en 3ème année de BUT Informatique à l'IUT de Lannion, alternant DevOps chez Orange. Spécialisé en automatisation 5G, CI/CD, Python, Docker et Linux.",
  url: siteUrl,
  image: {
    "@type": "ImageObject",
    url: `${siteUrl}/profile.jpg`,
    width: 800,
    height: 800,
  },
  email: "mailto:rouevictor@gmail.com",
  telephone: "+33-7-68-09-75-02",
  worksFor: {
    "@type": "Organization",
    name: "Orange",
    url: "https://www.orange.com",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "IUT de Lannion",
      url: "https://www.iut-lannion.univ-rennes.fr",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lannion",
        addressRegion: "Bretagne",
        addressCountry: "FR",
      },
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lannion",
    addressRegion: "Bretagne",
    postalCode: "22300",
    addressCountry: "FR",
  },
  homeLocation: {
    "@type": "Place",
    name: "Lannion, Bretagne, France",
  },
  knowsLanguage: ["fr-FR", "en-US"],
  knowsAbout: [
    "DevOps",
    "Automatisation 5G",
    "Python",
    "Bash",
    "Docker",
    "CI/CD",
    "Linux",
    "Git",
    "React",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Ansible",
    "Kubernetes",
  ],
  sameAs: [
    "https://github.com/Victouu",
    "https://www.linkedin.com/in/victor-roue-0081222a6/",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Victor Roué — Portfolio",
  alternateName: "Portfolio Victor Roué",
  description:
    "Portfolio officiel de Victor Roué, développeur DevOps et alternant chez Orange à Lannion.",
  inLanguage: "fr-FR",
  publisher: {
    "@id": `${siteUrl}/#person`,
  },
  author: {
    "@id": `${siteUrl}/#person`,
  },
  copyrightHolder: {
    "@id": `${siteUrl}/#person`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${space_Grotesk.className} bg-transparent`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Provider attribute="class" defaultTheme="light">
          <SmoothScroll>
            <CustomCursor />
            <AnimatedBackground />
            <main className="relative z-10 pb-28 lg:pb-0">
              {children}
              <SpeedInsights />
              <Analytics />
            </main>
          </SmoothScroll>
        </Provider>
      </body>
    </html>
  );
}
