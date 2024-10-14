"use client";

import { FocusCards } from "@/components/ui/focus-cards";
import Image from "next/image";

const cards = [
  {
    title: "Presente",
    src: "/DD-03.png",
  },
  {
    title: "Presente",
    src: "/DD-03.png",
  },
  {
    title: "Presente",
    src: "/DD-03.png",
  },
  {
    title: "Presente",
    src: "/DD-03.png",
  },
  {
    title: "Presente",
    src: "/DD-03.png",
  },
  {
    title: "Presente",
    src: "/DD-03.png",
  },
];

export const Gift = () => {
  return (
    <div className="relative bg-slate-50" id="presente">
      <h1 className="text-center text-4xl text-muted-foreground font-semibold font-serif py-10">
        SUGESTÕES DE PRESENTES
      </h1>
      <Image
        src="/flowers.png"
        alt="Montanha"
        width={150}
        height={100}
        className="absolute z-10 md:w-[15rem] lg:w-[20rem] blur-sm top-14 left-full transform -translate-x-1/2"
      />
      <FocusCards cards={cards}></FocusCards>
    </div>
  );
};
