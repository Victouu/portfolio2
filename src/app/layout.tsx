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
    default: "Victor Roué — Développeur DevOps & Étudiant BUT Informatique",
    template: "%s | Victor Roué",
  },
  description:
    "Portfolio de Victor Roué, étudiant en 3ème année de BUT Informatique à l'IUT de Lannion et alternant DevOps chez Orange. Automatisation 5G, CI/CD, Python, Docker, Linux.",
  keywords: [
    "Victor Roué",
    "portfolio",
    "DevOps",
    "alternant",
    "BUT Informatique",
    "IUT Lannion",
    "Orange",
    "Lannion",
    "Python",
    "Docker",
    "CI/CD",
    "Linux",
    "5G",
    "automatisation",
    "développeur",
    "étudiant informatique",
  ],
  authors: [{ name: "Victor Roué", url: siteUrl }],
  creator: "Victor Roué",
  publisher: "Victor Roué",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Victor Roué",
    title: "Victor Roué — Développeur DevOps & Étudiant BUT Informatique",
    description:
      "Portfolio de Victor Roué, alternant DevOps chez Orange à Lannion. Automatisation 5G, CI/CD, Python, Docker, Linux.",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Victor Roué — Portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Roué — Développeur DevOps",
    description:
      "Portfolio de Victor Roué, alternant DevOps chez Orange à Lannion.",
    images: ["/profile.jpg"],
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
  },
  category: "technology",
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
  name: "Victor Roué",
  givenName: "Victor",
  familyName: "Roué",
  jobTitle: "DevOps Developer (Alternant)",
  description:
    "Étudiant en 3ème année de BUT Informatique à l'IUT de Lannion, alternant DevOps chez Orange.",
  url: siteUrl,
  image: `${siteUrl}/profile.jpg`,
  worksFor: {
    "@type": "Organization",
    name: "Orange",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "IUT de Lannion",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lannion",
    addressRegion: "Bretagne",
    addressCountry: "FR",
  },
  knowsAbout: [
    "DevOps",
    "Automatisation 5G",
    "Python",
    "Bash",
    "Docker",
    "CI/CD",
    "Linux",
    "React",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
  ],
  sameAs: [
    "https://github.com/Victouu",
    "https://www.linkedin.com/in/victor-roue-0081222a6/",
  ],
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
