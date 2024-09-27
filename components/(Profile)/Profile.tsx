import React from "react";
import NameTag from "./NameTag";
import AboutMe from "./AboutMe";
import { ExternalLink } from "lucide-react";

export default function Profile() {
  return (
    <div className="flex flex-col h-full w-full max-w-[592px] gap-4 items-center">
      <NameTag />
      <div className="flex w-full max-w-[592px] bg-[#121212] p-4 gap-4 rounded-2xl flex flex-col">
        <h1 className="text-base font-medium text-[#c5c5c5]">Featured</h1>
        <div className="flex flex-row gap-2 items-center">
          <img src="/UA2.png" className="h-[50px] rounded-2xl" />
          <div className="flex flex-col">
            <p className="text-sm flex flex-row items-center gap-1 hover:text-[#c5c5c5] underline underline-offset-2">
              How AI Enthusisasts are disrupting linear learning
            </p>
            <p className="text-xs text-[#c5c5c5]">By Olivia Grandy</p>
          </div>
        </div>
      </div>
      <AboutMe />
    </div>
  );
}
