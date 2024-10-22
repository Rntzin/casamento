"use client";

import { FocusCards } from "@/components/ui/focus-cards";
import Image from "next/image";
import Link from "next/link";

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
      <FocusCards cards={cards} />
      <div className="text-center pb-10">
        <Link
          className="bg-[#C09150] mb-10 text-white px-12 py-3 border border-black border-opacity-10 rounded-lg hover:bg-[#C09150] shadow-lg shadow-slate-300 hover:text-white hover:translate-y-[-5px] transition-all duration-300"
          href={"/presentes"}
        >
          Ver mais
        </Link>
      </div>
    </div>
  );
};
