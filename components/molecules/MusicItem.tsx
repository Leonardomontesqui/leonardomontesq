import {
  BoomBox,
  CassetteTape,
  Drum,
  Guitar,
  MicVocal,
  SquareArrowOutUpRight,
} from "lucide-react";
import React from "react";

const MusicItem = ({
  text,
  type,
  link,
}: {
  text: string;
  type: "hiphop" | "salsa" | "bachata" | "r&b" | "pop";
  link: string;
}) => {
  const renderIcon = () => {
    switch (type) {
      case "hiphop":
        return (
          <BoomBox
            size={14}
            color="#c5c5c5"
            strokeWidth={2}
            className="underline"
          />
        );
      case "salsa":
        return (
          <Drum
            size={14}
            color="#c5c5c5"
            strokeWidth={2}
            className="underline"
          />
        );
      case "bachata":
        return (
          <Guitar
            size={14}
            color="#c5c5c5"
            strokeWidth={2}
            className="underline"
          />
        );
      case "pop":
        return (
          <MicVocal
            size={14}
            color="#c5c5c5"
            strokeWidth={2}
            className="underline"
          />
        );
      case "r&b":
        return (
          <CassetteTape
            size={14}
            color="#c5c5c5"
            strokeWidth={2}
            className="underline"
          />
        );
      default:
        return (
          <SquareArrowOutUpRight
            size={14}
            color="#c5c5c5"
            strokeWidth={2}
            className="underline"
          />
        );
    }
  };

  return (
    <a
      className="flex items-center gap-1.5 w-fit underline hover:text-[#c5c5c5]"
      href={link}
      target="_blank"
    >
      {renderIcon()}
      <p className="text-sm">{text}</p>
    </a>
  );
};

export default MusicItem;
