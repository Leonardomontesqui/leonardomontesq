import React from "react";
import Projects from "./Projects";
import Leadership from "./Leadership";
import Research from "./Research";

export default function Experience() {
  return (
    <div className=" w-full md:w-[592px] h-full flex flex-col bg-[#121212] p-4  rounded-2xl gap-4">
      <Projects />
      <Leadership />
      <Research />
    </div>
  );
}
