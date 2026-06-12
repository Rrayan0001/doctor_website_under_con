import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dr-santosh.com"),
  title: "Dr. Santosh | Gynecologist & Women's Health Specialist",
  description: "Trusted gynecologist specialising in pregnancy care, PCOS, infertility, and laparoscopic surgery. View clinic location and check availability today.",
  keywords: [
    "gynecologist",
    "obstetrician",
    "PCOS treatment",
    "pregnancy care",
    "infertility specialist",
    "laparoscopic surgery",
    "women's health",
    "Dr. Santosh",
    "gynecologist clinic"
  ],
  openGraph: {
    title: "Dr. Santosh | Gynecologist & Women's Health Specialist",
    description: "Trusted gynecologist specialising in pregnancy care, PCOS, infertility, and laparoscopic surgery. View clinic location and check availability today.",
    images: [
      {
        url: "/images/headshot_navy.jpeg",
        width: 768,
        height: 1284,
        alt: "Dr. Santosh - Gynecologist & Women's Health Specialist",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Santosh | Gynecologist & Women's Health Specialist",
    description: "Trusted gynecologist specialising in pregnancy care, PCOS, infertility, and laparoscopic surgery. View clinic location and check availability today.",
    images: ["/images/headshot_navy.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="font-sans bg-white text-text-dark antialiased">
        {children}
      </body>
    </html>
  );
}
