import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://santosh-doctor.vercel.app"),
  title: "Dr. Santosh Kulkarni | Gynecologist & Women's Health Specialist",
  description: "Trusted gynecologist providing compassionate, evidence-based care for pregnancy, fertility, PCOS, menopause, and advanced gynecological treatments in Mumbai.",
  keywords: [
    "gynecologist",
    "obstetrician",
    "PCOS treatment",
    "pregnancy care",
    "infertility specialist",
    "laparoscopic surgery",
    "women's health",
    "Dr. Santosh Kulkarni",
    "gynecologist clinic"
  ],
  openGraph: {
    title: "Dr. Santosh Kulkarni | Gynecologist & Women's Health Specialist",
    description: "Trusted gynecologist providing compassionate, evidence-based care for pregnancy, fertility, PCOS, menopause, and advanced gynecological treatments in Mumbai.",
    images: [
      {
        url: "/images/headshot_navy.jpeg",
        width: 768,
        height: 1284,
        alt: "Dr. Santosh Kulkarni - Gynecologist & Women's Health Specialist",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Santosh Kulkarni | Gynecologist & Women's Health Specialist",
    description: "Trusted gynecologist providing compassionate, evidence-based care for pregnancy, fertility, PCOS, menopause, and advanced gynecological treatments in Mumbai.",
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
      className={`${cormorant.variable} ${dmSans.variable} scroll-smooth`}
    >
      <body className="font-sans bg-bg text-text antialiased">
        {children}
      </body>
    </html>
  );
}
