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
];

const PresentesPage = () => {
  // Estado para controlar o número de presentes visíveis
  const [visibleCount, setVisibleCount] = useState(6);

  // Função para revelar mais 6 presentes
  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

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
      {/* Exibir apenas os presentes visíveis */}
      <FocusCards cards={presentes.slice(0, visibleCount)} />
      <div className="text-center pb-10">
        {/* Mostrar o botão 'Ver mais' apenas se ainda houver mais presentes a exibir */}
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
