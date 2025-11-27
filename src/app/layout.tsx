import type { Metadata } from "next";
import { Outfit, Open_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Emnet Assefa, RDN | Autism Nutritionist",
  description: "Registered Dietitian Nutritionist specializing in Autism Nutrition. Helping families address picky eating, GI issues, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${openSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
