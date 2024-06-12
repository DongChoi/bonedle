import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bonedle",
  description: "A fun way to practice your knowledge of bones!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-900 bg-skeletons bg-cover  bg-fixed">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
