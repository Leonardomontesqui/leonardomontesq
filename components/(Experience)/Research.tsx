import React from "react";
import ExperienceCard from "../ui/ExperienceCard";

export default function Research() {
  return (
    <div className="flex flex-col  gap-2">
      <h1 className="text-base font-medium w-fit h-fit text-[#c5c5c5]">
        Research
      </h1>
      <section className="overflow-x-auto flex items-center gap-2 no-scrollbar">
        <ExperienceCard
          image_url={"/EECover.png"}
          alt={"EE"}
          to={"/PhysicsEE.pdf"}
          date={"03.22 - 12.22"}
          title={"AC Induction Motors"}
          description={"EE Physics"}
        />
        <ExperienceCard
          image_url={"/PhysIACover.png"}
          alt={""}
          to={"/PhysicsIA.pdf"}
          date={"03.22 - 12.22"}
          title={"Rail Guns (Spanish)"}
          description={"IA Physics"}
        />
      </section>
    </div>
  );
}
