import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "GUVI × KEC | Empowering Future Tech Leaders",
  description: "A strategic partnership empowering students with industry-ready skills through cutting-edge courses, hands-on coding practice, and career opportunities.",
  keywords: ["GUVI", "KEC", "Kongu Engineering College", "Tech Education", "Coding", "Placements"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
