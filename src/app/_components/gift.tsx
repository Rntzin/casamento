"use client";

import { FocusCards } from "@/components/ui/focus-cards";

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
    <div className="mt-10 bg-slate-50" id="presente">
      <h1 className="text-center text-4xl text-muted-foreground font-semibold font-serif py-10">
        SUGESTÕES DE PRESENTES
      </h1>
      <FocusCards cards={cards}></FocusCards>
    </div>
  );
};
