import React from "react";

import Image from "next/image";

const ExperienceCard = ({
  image_url,
  alt,
  to,
  tags,
  date,
  title,
  description,
}: {
  image_url: string;
  alt: string;
  to: string;
  tags: string[];
  date: string;
  title: string;
  description: string;
}) => {
  const Tag = ({ tag }: { tag: string }) => {
    return (
      <div className="flex items-center justify-center py-[6px] px-[12px] bg-white/10 rounded-full select-none text-[80%]">
        <p className="font-semibold [text-shadow:_0_0_5px_rgb(255_255_255_/_50%)] whitespace-nowrap">
          {tag}
        </p>
      </div>
    );
  };

  return (
    <a
      className="active:scale-[103%] break-inside-avoid h-fit flex flex-col cursor-pointer transition-all duration-300 hover:shadow-xl"
      href={to}
      target="_blank"
    >
      <div className="relative rounded-t-md overflow-none">
        <img
          src={image_url}
          alt={alt}
          className="rounded-t-md object-fill  hover:brightness-[0.8] transition-all duration-300 h-44 w-auto"
        />
        <div className="w-full flex justify-between items-center pt-4 p-3 rounded-t-md overflow-none absolute left-0 bottom-0 text-[15px]">
          <p className="z-50 text-[#efefef] text-xs">{date}</p>
          <div className="w-full h-full absolute left-0 bottom-0 bg-gradient-to-b from-black/0 to-black/50 rounded-t-md" />
        </div>
      </div>

      <div className="flex flex-col pl-2 bg-[#232323] hover:bg-[#292929] rounded-b-md transition-all p-2">
        <p className="select-none text-sm "> {title}</p>
        <p className="text-xs text-[#c5c5c5]"> {description}</p>
      </div>
    </a>
  );
};

export default ExperienceCard;
