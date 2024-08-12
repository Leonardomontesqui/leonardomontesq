import React from "react";
import ExperienceCard from "./molecules/ExperienceCard";

export default function Leadership() {
  return (
    <div className="flex items-center">
      <h1 className="text-base font-medium -rotate-90 w-fit h-fit text-[#c5c5c5]">
        Leadership
      </h1>
      <section className="overflow-x flex items-center gap-2">
        <ExperienceCard
          image_url={"/QMINDLogo.png"}
          alt={"PhysNova Mobile"}
          to={"cd"}
          tags={[]}
          date={"03.2023 - Now"}
          title={"Director of ER"}
          description={"QMIND"}
        />
        <ExperienceCard
          image_url={"/CUCAILogo.png"}
          alt={"PhysNova Mobile"}
          to={"cd"}
          tags={[]}
          date={"03.2024 - Now"}
          title={"Director of Spons."}
          description={"CUCAI"}
        />
        <ExperienceCard
          image_url={"/Scinova_logo.png"}
          alt={"Founder"}
          to={"cd"}
          tags={[]}
          date={"01.2023 - Now"}
          title={"Founder"}
          description={"IB Tutoring Company"}
        />
      </section>
    </div>
  );
}
