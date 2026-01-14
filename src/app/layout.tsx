import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/Header";

export const metadata: Metadata = {
  title: "Jesus Müller",
  description: "Página principal de información personal de Jesús Müller - Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
