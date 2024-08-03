import React from "react";
import ReactIcon from "../../icons/react";
import JsIcon from "../../icons/js";
import CssIcon from "../../icons/css";
import HtmlIcon from "../../icons/html";
import MongoDbIcon from "../../icons/mongodb";
import NodeJsIcon from "../../icons/nodejs";
import TailwindIcon from "../../icons/tailwind";
import NextJsIcon from "../../icons/nextjs";
import GitICon from "../../icons/git";
import TypescriptIcon from "../../icons/typescript";
const Skills = () => {
  return (
    <div className="flex flex-col items-center flex-wrap w-3/4">
      <div className="m-2 p-2 flex gap-2">
        <h1 className="text-2xl font-bold tracking-wider">TECH</h1>
        <h1 className="text-2xl tracking-wider text-green-500">STACK</h1>
      </div>
      <ul className="flex flex-wrap w-1/2 justify-center items-center">
        <li className="w-32 h-12 rounded-lg items-center gap-2 justify-center bg-slate-50 flex p-2 m-2 text-slate-800 hover:bg-emerald-100 shadow-md dark:hover:bg-sky-200">
          HTML
          <HtmlIcon />
        </li>
        <li className="w-32 h-12 rounded-lg items-center gap-2 justify-center bg-slate-50 flex p-2 m-2 text-slate-800 hover:bg-emerald-100 shadow-md dark:hover:bg-sky-200">
          CSS3
          <CssIcon />
        </li>
        <li className="w-32 h-12 rounded-lg items-center gap-2 justify-center bg-slate-50 flex p-2 m-2 text-slate-800 hover:bg-emerald-100 shadow-md dark:hover:bg-sky-200">
          Javascript
          <JsIcon />
        </li>
        <li className="w-32 h-12 rounded-lg items-center gap-2 justify-center bg-slate-50 flex p-2 m-2 text-slate-800 hover:bg-emerald-100 shadow-md dark:hover:bg-sky-200">
          Typescript
          <TypescriptIcon />
        </li>
        <li className="w-32 h-12 rounded-lg items-center justify-center gap-2 bg-slate-50 flex p-2 m-2 text-slate-800 hover:bg-emerald-100 shadow-md dark:hover:bg-sky-200">
          React.js
          <ReactIcon />
        </li>
        <li className="w-32 h-12 rounded-lg items-center gap-2 justify-center bg-slate-50 flex p-2 m-2 text-slate-800 hover:bg-emerald-100 shadow-md dark:hover:bg-sky-200">
          Next.js
          <NextJsIcon />
        </li>
        <li className="w-32 h-12 rounded-lg items-center gap-2 justify-center bg-slate-50 flex p-2 m-2 text-slate-800 hover:bg-emerald-100 shadow-md dark:hover:bg-sky-200">
          Tailwind
          <TailwindIcon />
        </li>
        <li className="w-32 h-12 rounded-lg items-center gap-2 justify-center bg-slate-50 flex p-2 m-2 text-slate-800 hover:bg-emerald-100 shadow-md dark:hover:bg-sky-200">
          MongoDB
          <MongoDbIcon />
        </li>
        <li className="w-32 h-12 rounded-lg items-center gap-2 justify-center bg-slate-50 flex p-2 m-2 text-slate-800 hover:bg-emerald-100 shadow-md dark:hover:bg-sky-200">
          Node.js
          <NodeJsIcon />
        </li>
        <li className="w-32 h-12 rounded-lg items-center gap-2 justify-center bg-slate-50 flex p-2 m-2 text-slate-800 hover:bg-emerald-100 shadow-md dark:hover:bg-sky-200">
          Git
          <GitICon />
        </li>
      </ul>
    </div>
  );
};

export default Skills;
