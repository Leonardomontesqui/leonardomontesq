import { Link, SquareArrowOutUpRight } from "lucide-react";
import React from "react";
import MusicItem from "./molecules/MusicItem";

export default function AboutMe() {
  return (
    <div className="flex flex-col w-full bg-[#121212] p-4 gap-2 rounded-2xl">
      <h1 className="text-base font-medium text-[#c5c5c5]">About me</h1>
      <p className="text-sm ">
        Hey, I{`&apos`}m Leo! an aspiring software engineer born in Ilo
        Moquegua, Peru. I Graduated from the IB program at 16, wrote cool
        research papers at that time related to my love for innovative electric
        machinery. But felt limited in my learning as there were no facilities
        in Lima where a student could get hands on experience. This took my
        passion of building to the digital world, where I find myself now.
      </p>
      <h1 className="text-base font-medium text-[#c5c5c5]">5 songs</h1>
      <ol className="gap-1">
        <MusicItem
          text={"Boranda - Sonora Ponceña"}
          link={"https://www.youtube.com/watch?v=0ykUIOdmkj8"}
          type={"salsa"}
        />
        <MusicItem
          text={"Lil Baby Crush - Jordan Ward"}
          link={"https://www.youtube.com/watch?v=Sk0-6lSiBf8"}
          type={"r&b"}
        />
        <MusicItem
          text={"Rosas - La Oreja de Van Goh"}
          link={"https://www.youtube.com/watch?v=enup62u1LEk"}
          type={"pop"}
        />
        <MusicItem
          text={"Nueve y Quince - Aventura"}
          link={"https://www.youtube.com/watch?v=YxwjoBYmlHQ"}
          type={"bachata"}
        />
        <MusicItem
          text={"You Got Me - The Roots"}
          link={"https://www.youtube.com/watch?v=IKc4QLiCG8c"}
          type={"hiphop"}
        />
      </ol>
    </div>
  );
}
