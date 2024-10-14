"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import { FaHome, FaMapMarkerAlt, FaWhatsapp, FaGift } from "react-icons/fa";

const items = [
  {
    title: "Home",
    icon: <FaHome />,
    content: <div>Bem-vindo à Home!</div>,
    href: "/",
  },
  {
    title: "Contato",
    icon: <FaWhatsapp />,
    content: <div>Entre em contato via WhatsApp!</div>,
    href: "/",
  },
  {
    title: "Presentes",
    icon: <FaGift />,
    content: <div>Veja os presentes disponíveis!</div>,
    href: "/",
  },
  {
    title: "Localização",
    icon: <FaMapMarkerAlt />,
    content: (
      <div>
        <a
          href="https://www.google.com/maps/place/Matapu%C3%A3+Eventos+e+Hospedagem/@-11.091297,-37.1513202,17z/data=!3m1!4b1!4m6!3m5!1s0x71aa5e30dac9713:0x5435735e40270c97!8m2!3d-11.091297!4d-37.1487453!16s%2Fg%2F11g_zlftnq?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          Clique aqui para ver a localização no Google Maps.
        </a>
      </div>
    ),
    href: "https://www.google.com/maps/place/Matapu%C3%A3+Eventos+e+Hospedagem/@-11.091297,-37.1513202,17z/data=!3m1!4b1!4m6!3m5!1s0x71aa5e30dac9713:0x5435735e40270c97!8m2!3d-11.091297!4d-37.1487453!16s%2Fg%2F11g_zlftnq?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D",
  },
];

export const Footer = () => {
  return (
    <div className="flex items-center justify-center w-full bg-transparent -mt-10 mb-8 ">
      <FloatingDock items={items} />
    </div>
  );
};
