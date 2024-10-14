"use client";

import Image from "next/image";
import { Footer } from "./footer";
import { motion } from "framer-motion";

function FinallySection() {
  return (
    <section
      id="contato"
      className="bg-slate-50 dark:bg-transparent container space-y-10 md:py-6 lg:py-12 "
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center text-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 0, scale: 0.5 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src="/DD-03.png"
            width={250}
            height={250}
            alt=""
            className="h-[10rem] w-[10rem] md:-mt-14 -mt-6 md:h-[20rem] md:w-[20rem]"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-2xl font-serif max-w-[85%] text-muted-foreground sm:text-3xl sm:leading-7 md:text-4xl  -mt-16"
        >
          CASAMENTO
          <p className="text-lg text-muted-foreground font-serif mt-7">
            Realizar-se às dezesseis horas do dia sete de dezembro de dois mil e
            vinte e quatro,
            <br /> no Matapuã Eventos, Estrada Matapuã, 1213 <br /> Mosqueiro -
            Aracaju - SE.
          </p>
        </motion.h1>
        <a
          href="#"
          className="bg-transparent mb-10 text-black px-12 py-3 border border-black border-opacity-10 rounded-lg hover:bg-[#C09155] hover:text-white hover:translate-y-[-5px] transition-all duration-300"
        >
          Confirme sua presença
        </a>
      </div>
      <Footer />
    </section>
  );
}

export default FinallySection;
