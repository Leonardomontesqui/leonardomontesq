import React from "react";
import NameTag from "./NameTag";
import AboutMe from "./AboutMe";

export default function Profile() {
  return (
    <div className="flex flex-col h-full w-5/12 gap-4">
      <NameTag />
      <AboutMe />
    </div>
  );
}
