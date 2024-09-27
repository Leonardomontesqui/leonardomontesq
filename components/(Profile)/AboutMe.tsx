import { Link, SquareArrowOutUpRight } from "lucide-react";
import React from "react";
import MusicItem from "../molecules/MusicItem";
import ModalExperience from "../ui/ModalExperience";

export default function AboutMe() {
  return (
    <div className="flex flex-col w-full bg-[#121212] p-4 gap-2 rounded-2xl">
      <h1 className="text-base font-medium text-[#c5c5c5]">About me</h1>
      <p className="text-sm ">
        Hey, I&apos;m Leo! an aspiring software engineer born in Ilo Moquegua,
        Peru. I graduated from the IB program at 16, wrote cool research papers
        at that time related to my love for innovative electric machinery. But
        had limited opportunities for hands on experience. This took my passion
        of building to the digital world, where I find myself now.
      </p>
    </div>
  );
}
