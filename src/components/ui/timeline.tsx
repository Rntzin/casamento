"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineItem {
  time: string;
  description: string;
  icon: React.ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true }); // Detecta se a seção está na viewport

  return (
    <div className="relative space-y-16 -mt-8" ref={ref}>
      <motion.div
        className="absolute inset-0 left-8 w-px mb-10 mt-20 bg-slate-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }} // Suaviza a animação
      />

      {items.map((item, index) => (
        <motion.div
          key={index}
          className="flex items-start relative"
          initial={{ opacity: 0, y: 20 }} // Inicia invisível e um pouco abaixo
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }} // Revela o ícone e o sobe para a posição original
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: index * 0.1, // Atraso progressivo para cada ícone
          }}
        >
          <div className="flex-shrink-0 z-10 bg-white p-3 rounded-full border-2 border-slate-50">
            {item.icon}
          </div>

          <div className="ml-8">
            <h4 className="font-semibold text-lg">{item.time}</h4>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
