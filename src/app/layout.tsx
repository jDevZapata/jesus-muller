import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CssBaseline } from "@mui/material";
import Header from "./components/header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <CssBaseline />
        <Header />
        {children}
      </body>
    </html>
  );
}
