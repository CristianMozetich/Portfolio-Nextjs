import React from "react";
import EmailIcon from "../icons/email";


const Contact = () => {
  return (
      <div className="flex flex-col items-center mt-8 p-6 w-3/4">
        <h1 className="text-2xl tracking-wider border-b border-green-500 font-bold">CONTÁCTAME</h1>
        <span className="p-3 tracking-wider text-xl text-center">
          Actualmente estoy en busqueda de nuevas oportunidades y propuestas de trabajo
        </span>
        <a
          href="mailto:cristianmozetich@gmail.com"
          target="_blank"
          className="bg-slate-300 h-12 w-36 rounded-lg text-gray-700 flex gap-2 justify-center items-center p-2 text-md hover:bg-emerald-100 tracking-widest font-bold cursor-pointer transition-transform duration-300 transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-sm hover:shadow-emerald-200 dark:hover:bg-sky-200 dark:hover:shadow-sky-200"
        >
          Email <EmailIcon />
        </a>
      </div>
  );
};

export default Contact;
