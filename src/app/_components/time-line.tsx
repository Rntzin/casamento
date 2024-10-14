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

const TimelineSection = () => {
  const timelineItems = [
    {
      time: "12:00 PM",
      description: "Início do Evento",
      icon: <IconConfetti className="text-[#C09155]" size={24} />, // Ícone de início com tema festivo
    },
    {
      time: "12:30 PM",
      description: "Almoço",
      icon: <IconCake className="text-[#C09155]" size={24} />, // Ícone de taça para representar o almoço
    },
    {
      time: "16:00",
      description: "Cerimônia de Casamento",
      icon: <IconHeart className="text-[#C09155]" size={24} />, // Ícone de coração para a cerimônia
    },
    {
      time: "18:00",
      description: "Recepção e Coquetel",
      icon: <IconGlass className="text-[#C09155]" size={24} />, // Ícone de coquetel para a recepção
    },
    {
      time: "20:00",
      description: "Jantar",
      icon: <IconCake className="text-[#C09155]" size={24} />, // Ícone de bolo para o jantar
    },
    {
      time: "21:00",
      description: "Entrega dos Presentes e Dança",
      icon: <IconGift className="text-[#C09155]" size={24} />, // Ícone de presente para a entrega
    },
    {
      time: "22:00",
      description: "Encerramento",
      icon: <IconMusic className="text-[#C09155]" size={24} />, // Ícone de música para o encerramento
    },
  ];

  return (
    <section className="py-12 flex flex-col items-center justify-center">
      <h2 className="text-4xl text-muted-foreground font-semibold text-center mb-8 font-serif">
        TIMELINE
      </h2>
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
