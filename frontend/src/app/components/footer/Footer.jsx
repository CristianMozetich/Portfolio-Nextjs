import React from "react";
import Skills from "../skills/Skills";
import Contact from "../contact/Contact";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations();
  return (
    <div className="bg-slate-300 dark:bg-slate-800 w-full h-full items-center flex flex-col">
      <Skills />
      <Contact />
    </div>
  );
};

export default Footer;
