import React from "react";
import ExperienceCard from "../ui/ExperienceCard";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Projects() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-base font-medium w-fit h-fit text-[#c5c5c5]">
        Projects
      </h1>
      <section className="overflow-x-scroll flex items-center gap-2 no-scrollbar">
        <ExperienceCard
          image_url={"/PhysNovaLaptop.gif"}
          alt={"PhysNova gameplay gif"}
          to={"https://physnova.vercel.app/"}
          date={"05.2024 - Now"}
          title={"PhysNova"}
          description={"IB Education Software"}
        />
        <ExperienceCard
          image_url={"/CompleteAssembly.gif"}
          alt={"Lunar Rover CAD"}
          to={
            "https://www.linkedin.com/posts/leo-mont_for-my-second-semester-of-university-i-activity-7191533287180279810-EyU3?utm_source=share&utm_medium=member_desktop"
          }
          date={"01.24 - 04.24"}
          title={"Lunar Rover"}
          description={"Physical Prototype"}
        />
        <ExperienceCard
          image_url={"/CasebyCase.gif"}
          alt={"CasebyCase UI"}
          to={
            "https://www.linkedin.com/posts/leo-mont_had-a-great-time-this-weekend-and-secured-activity-7162713000649441282-F5iU?utm_source=share&utm_medium=member_desktop"
          }
          date={"02.24"}
          title={"CasebyCase"}
          description={"UI/UX"}
        />
      </section>
    </div>
  );
}
