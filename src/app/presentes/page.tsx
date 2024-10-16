"use client";

import { FocusCards } from "@/components/ui/focus-cards";
import Image from "next/image";
import { useState } from "react";

const presentes = [
  { id: 1, title: "Presente 1", src: "/DD-03.png" },
  { id: 2, title: "Presente 2", src: "/DD-03.png" },
  { id: 3, title: "Presente 3", src: "/DD-03.png" },
  { id: 4, title: "Presente 4", src: "/DD-03.png" },
  { id: 5, title: "Presente 5", src: "/DD-03.png" },
  { id: 6, title: "Presente 6", src: "/DD-03.png" },
  { id: 7, title: "Presente 7", src: "/DD-03.png" },
  { id: 8, title: "Presente 8", src: "/DD-03.png" },
  { id: 9, title: "Presente 9", src: "/DD-03.png" },
  { id: 10, title: "Presente 10", src: "/DD-03.png" },
  { id: 11, title: "Presente 11", src: "/DD-03.png" },
  { id: 12, title: "Presente 12", src: "/DD-03.png" },
  { id: 13, title: "Presente 13", src: "/DD-03.png" },
  { id: 14, title: "Presente 14", src: "/DD-03.png" },
  { id: 15, title: "Presente 15", src: "/DD-03.png" },
  { id: 16, title: "Presente 16", src: "/DD-03.png" },
  { id: 17, title: "Presente 17", src: "/DD-03.png" },
  { id: 18, title: "Presente 18", src: "/DD-03.png" },
  { id: 19, title: "Presente 19", src: "/DD-03.png" },
  { id: 20, title: "Presente 20", src: "/DD-03.png" },
  { id: 21, title: "Presente 21", src: "/DD-03.png" },
  { id: 22, title: "Presente 22", src: "/DD-03.png" },
  { id: 23, title: "Presente 23", src: "/DD-03.png" },
  { id: 24, title: "Presente 24", src: "/DD-03.png" },
  { id: 25, title: "Presente 25", src: "/DD-03.png" },
  { id: 26, title: "Presente 26", src: "/DD-03.png" },
  { id: 27, title: "Presente 27", src: "/DD-03.png" },
  { id: 28, title: "Presente 28", src: "/DD-03.png" },
  { id: 29, title: "Presente 29", src: "/DD-03.png" },
  { id: 30, title: "Presente 30", src: "/DD-03.png" },
];

const PresentesPage = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  return (
    <div className="relative bg-slate-50 overflow-x-hidden " id="presente">
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
      <FocusCards cards={presentes.slice(0, visibleCount)} />
      <div className="text-center pb-10">
        {visibleCount < presentes.length && (
          <button
            onClick={showMore}
            className="bg-transparent mb-10 text-black px-8 py-3 border border-black border-opacity-10 rounded-lg hover:bg-[#C09155] hover:text-white hover:translate-y-[-5px] transition-all duration-300"
          >
            Ver mais
          </button>
        )}
      </div>
    </div>
  );
};

export default PresentesPage;
