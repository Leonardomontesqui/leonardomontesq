import { SquareArrowOutUpRight } from "lucide-react";
import React from "react";

export default function LinkedItem({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
  return (
    <a
      className="flex underline items-center gap-0.5 w-fit underline"
      href={link}
    >
      <p className="text-sm ">{text}</p>
      <SquareArrowOutUpRight
        size={14}
        color="#c5c5c5"
        strokeWidth={2}
        className="underline"
      />
    </a>
  );
}
