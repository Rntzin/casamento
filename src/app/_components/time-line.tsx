"use client";

import {
  IconCake,
  IconConfetti,
  IconGift,
  IconGlass,
  IconHeart,
  IconMusic,
} from "@tabler/icons-react";
import Timeline from "@/components/ui/timeline";
import Image from "next/image";
import { motion } from "framer-motion";

const TimelineSection = () => {
  const timelineItems = [
    {
      time: "12:00 PM",
      description: "Início do Evento",
      icon: <IconConfetti className="text-[#C09155]" size={24} />,
    },
    {
      time: "12:30 PM",
      description: "Almoço",
      icon: <IconCake className="text-[#C09155]" size={24} />,
    },
    {
      time: "16:00",
      description: "Cerimônia de Casamento",
      icon: <IconHeart className="text-[#C09155]" size={24} />,
    },
    {
      time: "18:00",
      description: "Recepção e Coquetel",
      icon: <IconGlass className="text-[#C09155]" size={24} />,
    },
    {
      time: "20:00",
      description: "Jantar",
      icon: <IconCake className="text-[#C09155]" size={24} />,
    },
    {
      time: "21:00",
      description: "Entrega dos Presentes e Dança",
      icon: <IconGift className="text-[#C09155]" size={24} />,
    },
    {
      time: "22:00",
      description: "Encerramento",
      icon: <IconMusic className="text-[#C09155]" size={24} />,
    },
  ];

  return (
    <section className="py-12 flex flex-col items-center justify-center">
      <motion.h2 className="text-4xl text-muted-foreground font-semibold text-center mb-8 font-serif">
        AGENDA DO CASAMENTO
      </motion.h2>
      <Timeline items={timelineItems} />
      <Image
        src="/flower.png"
        alt="Montanha"
        width={150}
        height={100}
        className="absolute lg:w-[20rem] blur-sm lg:left-0 md:left-14 top-1500 left-0 transform -translate-x-1/2"
      />
    </section>
  );
};

export default TimelineSection;
