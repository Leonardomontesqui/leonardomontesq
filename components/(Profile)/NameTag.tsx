import React from "react";

import IconBar from "../molecules/IconBar";

export default function NameTag() {
  return (
    <div className="flex w-full bg-[#121212] p-4 gap-4 items-center rounded-2xl">
      <img
        src="/MeSurfingCropped.png"
        width={120}
        height={120}
        alt="Me surfing"
        className="rounded-full"
      />
      <section className="flex flex-col">
        <h1 className="text-3xl font-semibold">Leonardo Montes Quiliche</h1>
        <IconBar />
      </section>
    </div>
  );
}
