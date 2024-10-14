"use client";

import { FaHome, FaGift, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="bg-slate-50 text-muted-foreground py-4">
      <nav className="container mx-auto flex justify-around items-center">
        <Image
          src={"/DD-03.png"}
          alt=""
          width={100}
          height={100}
          className="flex justify-start left-12"
        />
        <Link href="#intro" className="flex flex-col items-center">
          <FaHome size={24} />
          <span className="text-sm mt-1">Intro</span>
        </Link>

        <Link href="#presente" className="flex flex-col items-center">
          <FaGift size={24} />
          <span className="text-sm mt-1">Presentes</span>
        </Link>

        <Link href="#localizacao" className="flex flex-col items-center">
          <FaMapMarkerAlt size={24} />
          <span className="text-sm mt-1">Localização</span>
        </Link>

        <Link href="#contato" className="flex flex-col items-center">
          <FaEnvelope size={24} />
          <span className="text-sm mt-1">Contato</span>
        </Link>
      </nav>
    </header>
  );
};
