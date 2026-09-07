import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export const metadata: Metadata = {
  title: "Jesús Müller | Frontend Senior",
  description: "Portfolio profesional de Jesús Müller, Frontend Senior especializado en React, Next.js y TypeScript.",
  keywords: ["Frontend Senior", "React", "Next.js", "TypeScript", "Frontend Developer", "Technical Lead"],
  authors: [{ name: "Jesús Müller" }],
  creator: "Jesús Müller",
  openGraph: {
    title: "Jesús Müller | Frontend Senior",
    description: "Experiencia construyendo aplicaciones empresariales con React, Next.js y TypeScript.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jesús Müller",
    jobTitle: "Frontend Senior",
    url: "https://www.linkedin.com/in/jesus-humberto-m%C3%BCller-zapata-38a9a72a6/",
    sameAs: [
      "https://www.linkedin.com/in/jesus-humberto-m%C3%BCller-zapata-38a9a72a6/",
      "https://github.com/jDevZapata/",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidad Argentina John F. Kennedy",
    },
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
