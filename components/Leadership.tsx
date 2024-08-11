import React from "react";
import ExperienceCard from "./molecules/ExperienceCard";

export default function Leadership() {
  return (
    <div className="flex items-center gap-2">
      <h1 className="text-base font-medium -rotate-90 w-fit h-fit">
        Leadership
      </h1>
      <ExperienceCard
        image_url={"/QMINDLogo.png"}
        alt={"PhysNova Mobile"}
        to={"cd"}
        tags={[]}
        title={"April 2024 - Present"}
        type={"Director of ER"}
      />
      <ExperienceCard
        image_url={"/CUCAILogo.png"}
        alt={"PhysNova Mobile"}
        to={"cd"}
        tags={[]}
        title={"April 2024 - Present"}
        type={"Director of ER"}
      />
    </div>
  );
}
