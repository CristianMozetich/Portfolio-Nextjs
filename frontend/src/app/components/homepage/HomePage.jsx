import React from "react";
import Image from "next/image";
import GithubIcon from "../../icons/github";
import LinkedInIcon from "../../icons/linkedin";
import EmailIcon from "../../icons/email";
import FileIcon from "../../icons/file";
import { useTranslations } from "next-intl";

const HomePage = () => {
  const t = useTranslations();
  const idioma = t("curriculum");

  const getCurriculumFileName = () => {
    console.log("curriculum:", idioma);
    switch (idioma) {
      case "ES":
        return "Cv_Mozetich_Cristian.pdf";
      case "IT":
        return "Cv_Mozetich_Cristian_IT.pdf";
      default:
        "EN";
        return "Cv_Mozetich_Cristian_EN.pdf";
    }
  };
  return (
    <article className="md:flex mt-24 justify-center flex-wrap p-2 m-4 w-3/4 items-center">
      <div className="md:w-1/2 flex flex-col items-center">
        <h1 className="text-5xl text-center p-2 tracking-widest font-extrabold">
          {t("title")} <span>&#x1F44B;</span>
        </h1>
        <span className="p-2 text-center w-2/3 tracking-widest font-semibold">
          {t("soy")} <mark className="bg-slate-300">{t("mark")}</mark>{" "}
          {t("description")}
        </span>
        <div className="flex gap-4 flex-wrap justify-center w-4/5 p-4">
          <a
            href="https://github.com/CristianMozetich"
            target="_blank"
            className="bg-slate-300 h-12 w-36 rounded-lg text-gray-700 flex gap-2 justify-center items-center p-2 text-md hover:bg-emerald-100 tracking-widest font-bold cursor-pointer transition-transform duration-300 transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-sm hover:shadow-emerald-200 dark:hover:bg-sky-200 dark:hover:shadow-sky-200 shadow-md"
          >
            Git Hub <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/cristian-mozetich-135086256/"
            target="_blank"
            className="bg-slate-300 h-12 w-36 rounded-lg text-gray-700 flex gap-2 justify-center items-center p-2 text-md hover:bg-emerald-100 tracking-widest font-bold cursor-pointer transition-transform duration-300 transform hover:-translate-y-1 hover:-translate-x-1 shadow-md hover:shadow-sm hover:shadow-emerald-200 dark:hover:bg-sky-200 dark:hover:shadow-sky-200"
          >
            LinkedIn <LinkedInIcon />
          </a>
          <a
            href="mailto:cristianmozetich@gmail.com"
            target="_blank"
            className="bg-slate-300 h-12 w-36 rounded-lg text-gray-700 flex gap-2 justify-center items-center p-2 text-md hover:bg-emerald-100 tracking-widest font-bold cursor-pointer transition-transform duration-300 transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-sm hover:shadow-emerald-200 dark:hover:bg-sky-200 dark:hover:shadow-sky-200 shadow-md"
          >
            Email <EmailIcon />
          </a>
          <div className="w-4/3 gap-4 md:flex-wrap md:flex justify-center">
            <a
              href={`/pdf/${getCurriculumFileName()}`}
              target="_blank"
              className="bg-slate-300 h-12 w-36 rounded-lg text-gray-700 flex gap-2 justify-center items-center p-2 text-md hover:bg-emerald-100 tracking-widest font-bold cursor-pointer transition-transform duration-300 transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-sm hover:shadow-emerald-200 dark:hover:bg-sky-200 dark:hover:shadow-sky-200 shadow-md"
            >
              Curriculum <FileIcon />
            </a>
          </div>
        </div>
      </div>
      <picture className="flex justify-center md:w-1/2">
        <Image
          src="/img/oso-min.jpg"
          alt="profile"
          width={400}
          height={400}
          className="rounded-xl"
        />
      </picture>
    </article>
  );
};

export default HomePage;
