import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PERSONAL_INFO } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.title}`,
  description: PERSONAL_INFO.tagline,
  keywords: ["AI Engineer", "Machine Learning", "Artificial Intelligence", "Software Engineer", "Portfolio"],
  authors: [{ name: PERSONAL_INFO.name }],
  openGraph: {
    title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.title}`,
    description: PERSONAL_INFO.tagline,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.title}`,
    description: PERSONAL_INFO.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
