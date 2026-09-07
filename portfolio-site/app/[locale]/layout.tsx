import type { Metadata } from "next";
import type { ReactNode } from 'react';
import { Inter, Josefin_Sans } from 'next/font/google'
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from 'next-intl/server';
import PageFrame from "./pageFrame";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paulina Almada | Fullstack Dev",
  description: "Portfolio site for Paulina Almada",
  alternates: {
    canonical: "/",
    languages: {
      "es-MX": "/es",
      "en-US": "/en",
      "x-default": "/",
    },
  },
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${josefin.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider>
          <PageFrame>{children}</PageFrame>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
