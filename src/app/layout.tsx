import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

import { artist } from "@/data/artist";

import "./globals.css";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(artist.url),

  title: {
    default: artist.name,
    template: `%s | ${artist.name}`,
  },

  description: artist.description,

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${robotoMono.variable} h-full antialiased`}>
      <body className="relative min-h-full flex flex-col bg-[#050505]">
        <div
          className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat grayscale"
          style={{
            backgroundImage: "url('/images/background.webp')",
          }}
          aria-hidden="true"
        />

        <div className="fixed inset-0 -z-10 bg-black/30" aria-hidden="true" />

        {children}
      </body>
    </html>
  );
}
