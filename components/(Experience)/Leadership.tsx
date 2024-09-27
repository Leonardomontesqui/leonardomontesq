import React from "react";
import ExperienceCard from "../ui/ExperienceCard";

export default function Leadership() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-base font-medium  w-fit h-fit text-[#c5c5c5]">
        Leadership
      </h1>
      <section className="overflow-x-scroll overflow-y-hidden flex items-center gap-2 no-scrollbar">
        <ExperienceCard
          image_url={"/QMINDLogo.png"}
          alt={"QMIND Logo"}
          to={"https://qmind.ca/"}
          date={"03.2023 - Now"}
          title={"Director of ER"}
          description={"QMIND"}
        />
        <ExperienceCard
          image_url={"/CUCAILogo.png"}
          alt={"CUCAI Logo"}
          to={"https://www.cucai.ca/"}
          date={"03.2024 - Now"}
          title={"Director of Spons."}
          description={"CUCAI"}
        />
        <ExperienceCard
          image_url={"/Scinova_logo.png"}
          alt={"Founder"}
          to={""}
          date={"01.2023 - Now"}
          title={"Founder"}
          description={"IB Tutoring Company"}
        />
      </section>
    </div>
  );
}
