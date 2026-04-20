import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Header from "@/components/Header";
import SplashLoader from "@/components/SplashLoader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ANIP Performance - Pilotage Intelligent",
  description: "Landing page interactive présentant la solution PGI de l'ANIP pour optimiser la performance des agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>
        <SplashLoader />
        <Header />
        <div style={{
          position: 'fixed',
          bottom: '5vh',
          right: '5vw',
          opacity: 0.03,
          pointerEvents: 'none',
          zIndex: -1,
          transform: 'rotate(-15deg)'
        }}>
          <Image 
            src="/assets/ANIP-Logo-HD.png"
            alt="ANIP Watermark"
            width={400}
            height={400}
            priority
          />
        </div>
        <main className="scroll-container">
          {children}
        </main>
      </body>
    </html>
  );
}
