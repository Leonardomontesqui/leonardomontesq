import React from "react";
import ExperienceCard from "./molecules/ExperienceCard";

export default function Projects() {
  return (
    <div className="flex items-center gap-2">
      <h1 className="text-base font-medium -rotate-90 w-fit h-fit">Projects</h1>
      <ExperienceCard
        image_url={"/PhysNovaLaptop.gif"}
        alt={"PhysNova Mobile"}
        to={"cd"}
        tags={[]}
        title={"May 2024 - Present"}
        type={"Education Software"}
      />
      <ExperienceCard
        image_url={"/CompleteAssembly.gif"}
        alt={"Lunar Rover"}
        to={"sd"}
        tags={[]}
        title={"Jan 2024 - April 2024"}
        type={"CAD Model"}
      />
      <ExperienceCard
        image_url={"/CasebyCase.gif"}
        alt={"."}
        to={"sd"}
        tags={[]}
        title={"Feb 2024"}
        type={"UI/UX"}
      />
    </div>
  );
}
