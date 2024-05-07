"use client";
import React from "react";
import DarkLightIcon from "../icons/mode";
import HamburgerIcon from "../icons/menu";
import ExitIcon from "../icons/exit";
import { useContexto } from "../../../context/useContext";
import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const NavBar = () => {
  const { menuHamburguesa, handleMenuHamburguesa, theme, setTheme } =
    useContexto();
  const [clickMode, setClickMode] = useState(true);
  const [clickLenguage, setClickLanguage] = useState(true);
  const [clickCurriculums, setClickCurriculums] = useState(true);

  const t = useTranslations();

  const handleClickMode = () => {
    setClickMode(!clickMode);
  };

  const handleClickLanguage = () => {
    setClickLanguage(!clickLenguage);
  };

  const handleClickCurriculums = () => {
    setClickCurriculums(!clickCurriculums);
  };

  return (
    <header className="w-screen h-12 bg-white  fixed z-50 dark:bg-slate-800 dark:text-white shadow-md">
      <div className="flex justify-center">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="hidden md:block hover:text-emerald-600 dark:hover:text-sky-600"
        >
          <div className="flex gap-2 mt-3">
            <DarkLightIcon />
            <span className="tracking-wider text-sm font-semibold">
              LIGHT / DARK
            </span>
          </div>
        </button>
      </div>
      <div className="flex mt-4 mr-4 justify-end">
        <button className="block md:hidden mr-6" onClick={handleMenuHamburguesa}>
          {menuHamburguesa ? <ExitIcon /> : <HamburgerIcon />}
        </button>
      </div>
      {menuHamburguesa && (
        <div className="bg-white text-slate-950 w-1/2 h-screen absolute right-0 top-12 dark:bg-slate-800 dark:text-white md:hidden">
          <ul className="flex flex-col gap-2 items-end m-4 mr-10">
            <button
              onClick={handleClickMode}
              className="text-xl transition-transform duration-300 transform  hover:-translate-x-1"
            >
              {t("mode")}
            </button>
            {clickMode && (
              <div className="flex gap-2 flex-col items-end">
                <button onClick={() => setTheme("dark")} className="text-s hover:-translate-x-1 transition-transform duration-300 transform">
                  DARK
                </button>
                <button onClick={() => setTheme("light")} className="text-sm hover:-translate-x-1 transition-transform duration-300 transform">
                  LIGHT
                </button>
              </div>
            )}
            <button
              onClick={handleClickLanguage}
              className="text-xl transition-transform duration-300 transform  hover:-translate-x-1 "
            >
              {t("lenguaje")}
            </button>
            {clickLenguage && (
              <div className="flex gap-2 flex-col items-end">
                <Link className="text-sm hover:-translate-x-1 transition-transform duration-300 transform" href={"/en"}>
                  {t("ingles")}
                </Link>
                <Link className="text-sm hover:-translate-x-1 transition-transform duration-300 transform" href={"/es"}>
                  {t("español")}
                </Link>
                <Link className="text-sm hover:-translate-x-1 transition-transform duration-300 transform" href={"/it"}>
                  {t("italiano")}
                </Link>
              </div>
            )}
            <button
              onClick={handleClickCurriculums}
              className="text-xl transition-transform duration-300 transform  hover:-translate-x-1"
            >
              CURRICULUMS
            </button>
            {clickCurriculums && (
              <div className="flex gap-2 flex-col items-end">
                <Link
                  className="text-sm hover:-translate-x-1 transition-transform duration-300 transform"
                  href={"/pdf/Cv_Mozetich_Cristian_EN.pdf"}
                  target="_blank"
                >
                  {t("ingles")}
                </Link>
                <Link
                  className="text-sm hover:-translate-x-1 transition-transform duration-300 transform"
                  href={"/pdf/Cv_Mozetich_Cristian.pdf"}
                  target="_blank"
                >
                  {t("español")}
                </Link>
                <Link
                  className="text-sm hover:-translate-x-1 transition-transform duration-300 transform"
                  href={"/pdf/Cv_Mozetich_Cristian_IT.pdf"}
                  target="_blank"
                >
                  {t("italiano")}
                </Link>
              </div>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
