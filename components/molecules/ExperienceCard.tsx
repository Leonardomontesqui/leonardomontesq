import React from "react";

import Image from "next/image";

const ExperienceCard = ({
  image_url,
  alt,
  to,
  tags,
  title,
  type,
}: {
  image_url: string;
  alt: string;
  to: string;
  tags: string[];
  title: string;
  type: string;
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
      {/* IMAGE */}
      <div className="relative rounded-md overflow-none">
        <Image
          src={image_url}
          width={200}
          height={100}
          alt={alt}
          unoptimized
          className="rounded-t-md object-fill  hover:brightness-[0.8] transition-all duration-300"
        />
        <div className="w-full flex justify-between items-center pt-4 p-3 rounded-t-md overflow-none absolute left-0 bottom-0 text-[15px]">
          <p className="z-50 text-[#efefef] text-xs">{title}</p>
          <div className="flex gap-2 z-50">
            {tags.map((tag, key) => (
              <Tag tag={tag} key={key} />
            ))}
          </div>
          <div className="w-full h-full absolute left-0 bottom-0 bg-gradient-to-b from-black/0 to-black/50 rounded-md" />
        </div>
      </div>
      {to.length ? (
        <div className="flex items-center justify-center h-8 bg-[#232323] hover:bg-[#292929] rounded-b-md transition-all">
          <p className="select-none text-sm ">View {type}</p>
        </div>
      ) : null}
    </a>
  );
};

export default ExperienceCard;
