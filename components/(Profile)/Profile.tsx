import React from "react";
import NameTag from "./NameTag";
import AboutMe from "./AboutMe";

export default function Profile() {
  return (
    <div className="flex flex-col h-full w-full max-w-[592px] gap-4 items-center">
      <NameTag />
      <AboutMe />
    </div>
  );
}
