import React from "react";
import ExperienceCard from "./molecules/ExperienceCard";

export default function Projects() {
  return (
    <div className="flex items-center gap-2">
      <h1 className="text-base font-medium -rotate-90 w-fit h-fit text-[#c5c5c5]">
        Projects
      </h1>
      <section className="overflow-x flex items-center gap-2">
        <ExperienceCard
          image_url={"/PhysNovaLaptop.gif"}
          alt={"PhysNova Mobile"}
          to={"cd"}
          tags={[]}
          date={"05.2024 - Now"}
          title={"PhysNova"}
          description={"IB Education Software"}
        />
        <ExperienceCard
          image_url={"/CompleteAssembly.gif"}
          alt={"Lunar Rover"}
          to={"sd"}
          tags={[]}
          date={"01.24 - 04.24"}
          title={"Lunar Rover"}
          description={"Prototype for the CSA"}
        />
        <ExperienceCard
          image_url={"/CasebyCase.gif"}
          alt={"."}
          to={"sd"}
          tags={[]}
          date={"02.24"}
          title={"CasebyCase"}
          description={"UI/UX"}
        />
      </section>
    </div>
  );
}
