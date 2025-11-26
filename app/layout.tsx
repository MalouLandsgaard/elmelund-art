import type { Metadata } from "next";
import { Azeret_Mono, Geist, Lora } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const azeretMono = Azeret_Mono({
  variable: "--font-azeret-mono",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "Elmelund Art",
  description: "Elmelund Art is a portfoliowebsite by Jeanette Elmelund",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${azeretMono.variable} ${lora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
