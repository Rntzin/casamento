"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import {
  FaHome,
  FaInfoCircle,
  FaPhone,
  FaShoppingCart,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaGift,
} from "react-icons/fa";

const items = [
  {
    title: "Home",
    icon: <FaHome />, // Ícone de casa
    href: "/",
  },
  {
    title: "Contato",
    icon: <FaWhatsapp />, // Ícone de telefone
    href: "/",
  },
  {
    title: "Presentes",
    icon: <FaGift />, // Ícone de carrinho de compras
    href: "/",
  },
  {
    title: "Localização",
    icon: <FaMapMarkerAlt />, // Ícone de marcador de localização
    href: "https://www.google.com/maps/place/Matapu%C3%A3+Eventos+e+Hospedagem/@-11.091297,-37.1513202,17z/data=!3m1!4b1!4m6!3m5!1s0x71aa5e30dac9713:0x5435735e40270c97!8m2!3d-11.091297!4d-37.1487453!16s%2Fg%2F11g_zlftnq?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D",
  },
];

export const Footer = () => {
  return (
    <div className="flex items-center justify-center w-full bg-transparent -mt-8 mb-8 ">
      <FloatingDock items={items} />
    </div>
  );
};
