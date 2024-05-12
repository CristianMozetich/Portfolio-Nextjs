import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import { NextIntlClientProvider, useMessages } from "next-intl";
import NavBar from "./components/navbar/NavBar";
import AsideTranslations from "./components/aside/AsideTranslations";
import Providers from "../providers/Providers";
import Footer from "./components/footer/Footer";
import "./globals.css";

const inter = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Cristian Mozetich",
  description: "Portfolio",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <NavBar />
            <div className="bottom-3 fixed hidden md:block">
              <AsideTranslations />
            </div>
            {children}
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
