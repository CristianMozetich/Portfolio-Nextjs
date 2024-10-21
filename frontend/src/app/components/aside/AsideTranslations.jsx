import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const AsideTranslations = () => {
  const t = useTranslations();

  return (
    <>
      <div className="flex flex-col m-4 items-start gap-4">
        <Link href="en" className="tracking-widest text-sm hover:scale-105 hover:text-emerald-600 dark:hover:text-sky-600 hover:translate-x-1 transition-transform duration-300 font-semibold">
          {t("ingles")}
        </Link>
        <Link href="es" className="tracking-widest text-sm hover:scale-105 hover:text-emerald-600 dark:hover:text-sky-600 hover:translate-x-1 transition-transform duration-300 font-semibold">
          {t("español")}
        </Link>
        <Link href="it" className="tracking-widest text-sm hover:scale-105 hover:text-emerald-600 dark:hover:text-sky-600 hover:translate-x-1 transition-transform duration-300 font-semibold">
          {t("italiano")}
        </Link>
      </div>
      <div className="border-l ml-12 border-solid border-slate-950 h-64 dark:border-sky-500"></div>
    </>
  );
};

export default AsideTranslations;
