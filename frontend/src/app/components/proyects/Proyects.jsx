import React from "react";
import Image from "next/image";
import Link from "../../icons/link";
import GithubIcon from "../../icons/github";
import { useTranslations } from "next-intl";

const Proyects = () => {
  const t = useTranslations();

  const proyectos = [
    {
      titulo: t("proyectos.reciclame.title"),
      img: "/img/reciclame-min.png",
      link: "https://s13-16-t-java-next-frontend.vercel.app/",
      descripcion: t("proyectos.reciclame.description"),
      tecnologias: "Next.js - React.js - Tailwind - Vercel",
      repositorio: "https://github.com/No-Country/s13-16-t-java-next",
    },
    {
      titulo: t("proyectos.educar.title"),
      img: "/img/Educar-min.png",
      link: "https://educ-ar-frontend.vercel.app/",
      descripcion: t("proyectos.educar.description"),
      tecnologias: "Next.js - NextUI - Tailwind - Vercel",
      repositorio: "https://github.com/No-Country/c15-40-t-java-react",
    },
    {
      titulo: t("proyectos.simple_link.title"),
      img: "/img/simple-link.png",
      link: "https://simple-url-sable.vercel.app/",
      descripcion: t("proyectos.simple_link.description"),
      tecnologias: "Next.js - Node.js - Express - MongoDB - Tailwind - Vercel",
      repositorio: "https://github.com/CristianMozetich/Url-Shortener",
    },
    {
      titulo: t("proyectos.music_store.title"),
      img: "/img/musica-min.png",
      link: "https://house-of-music.netlify.app/",
      descripcion: t("proyectos.music_store.description"),
      tecnologias: "Html - Css - JavaScript - Bootstrap",
      repositorio: "https://github.com/CristianMozetich/House-Of-Music",
    },
  ];

  return (
    <>
      {proyectos.map((data) => {
        return (
          <article
            key={data.titulo}
            className="flex flex-wrap justify-center items-center m-6 p-4"
          >
            {/* Imagen del proyecto */}
            <a href={data.link} target="_blank">
              <Image
                src={data.img}
                alt="profile"
                width={600}
                height={600}
                className="rounded-xl shadow-md"
              />
            </a>
            {/* Descripción y título ocupando la otra mitad */}
            <div className="flex flex-col pl-4 max-w-96 justify-center dark:bg-slate-800 border rounded-md dark:border-slate-900 bg-white z-10 shadow-md">
              <a
                className="flex gap-2 p-2 hover:text-emerald-600 dark:hover:text-sky-600 transition-transform duration-300 transform  hover:translate-x-1"
                href={data.link}
                target="_blank"
              >
                <Link />
                <h3 className="text-2xl tracking-wider font-bold p-2">
                  {data.titulo}
                </h3>
              </a>
              <span className="tracking-wider p-2">{data.descripcion}</span>
              <div className="flex justify-between items-center mt-6 p-2">
                <span className="text-xs tracking-wider p-2">
                  {data.tecnologias}
                </span>
                <a
                  href={data.repositorio}
                  className="dark:hover:text-sky-600 hover:text-emerald-600 pr-4"
                  target="_blank"
                >
                  <GithubIcon />
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Proyects;
