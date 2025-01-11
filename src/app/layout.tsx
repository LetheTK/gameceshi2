import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import RootLayoutInner from './root-layout-inner'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Epic Game",
  description: "2025最火的游戏",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LanguageProvider>
          <RootLayoutInner inter={inter}>
            {children}
          </RootLayoutInner>
        </LanguageProvider>
      </body>
    </html>
  );
}
