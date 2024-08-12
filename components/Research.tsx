import React from "react";
import ExperienceCard from "./molecules/ExperienceCard";

export default function Research() {
  return (
    <div className="flex items-center gap-2">
      <h1 className="text-base font-medium -rotate-90 w-fit h-fit text-[#c5c5c5]">
        Research
      </h1>
      <ExperienceCard
        image_url={"/EECover.png"}
        alt={"EE"}
        to={"/Kby180__EE____FINAL_OFFICIAL_VERSION_compressed.pdf"}
        tags={[]}
        date={"03.22 - 12.22"}
        title={"AC Induction Motors"}
        description={"EE Physics"}
      />
      <ExperienceCard
        image_url={"/PhysIACover.png"}
        alt={""}
        to={"cd"}
        tags={[]}
        date={"03.22 - 12.22"}
        title={"Rail Guns (Spanish)"}
        description={"IA Physics"}
      />
    </div>
  );
}
