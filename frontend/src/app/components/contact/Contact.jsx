import React from "react";
import EmailIcon from "../icons/email";
import { useTranslations } from "next-intl";
import Link from "next/link";


const Contact = () => {
  const t = useTranslations();

  return (
      <div className="flex flex-col items-center mt-8 p-6 w-3/4">
        <h1 className="text-2xl tracking-wider border-b border-green-500 font-bold">CONTÁCTAME</h1>
        <span className="p-3 tracking-wider text-lg text-center">
          {t("footer")}
        </span>
        <a
          href="mailto:cristianmozetich@gmail.com"
          target="_blank"
          className="bg-blue-500 hover:bg-blue-600 text-white h-12 w-36 rounded-lg dark:text-gray-700 flex gap-2 justify-center items-center p-2 text-md  tracking-widest cursor-pointer transition-transform duration-300 transform hover:translate-x-1 hover:shadow-sm  dark:hover:bg-slate-200  dark:bg-slate-300 "
        >
          Email <EmailIcon />
        </a>
        <span className="text-sm mt-10 p-5 text-center">
        {t("footer2")}
        <Link className="dark:text-green-500 text-emerald-600 text-lg m-2" target="_blank" href={"https://github.com/CristianMozetich"}>
          Cristian Mozetich
        </Link>
      </span>
      </div>
  );
};

export default Contact;
