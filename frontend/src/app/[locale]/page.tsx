"use client";
import HomePage from "../components/homepage/HomePage";
import Proyects from "../components/proyects/Proyects";

import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
  return (
    <main className="flex flex-col items-center justify-center w-full">
      <HomePage />
      <div className="mt-24 mb-24">
        <h1 className="text-3xl font-bold text-center tracking-widest">
          {t("proyects")}
        </h1>
        <Proyects />
      </div>
    </main>
  );
}
