"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function AboutSection() {
  return (
    <section
      id="about"
      className="container flex flex-col md:max-w-[64rem] md:py-12 lg:py-24"
    >
      <motion.div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-rows-[auto-1fr]">
        <div className="lg:pl-20 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 0, scale: 0.5 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/foto06.jpeg"
              alt="eles"
              width={1000}
              height={1000}
              quality="95"
              priority={true}
              className="aspect-square rounded-t-full bg-zinc-100 object-cover h-[490px] shadow-xl"
            />
          </motion.div>
        </div>
        <div className="lg:order-first lg:row-span-2 text-center md:text-start">
          <h1 className="font-serif font-medium text-3xl md:text-4xl lg:text-5xl">
            QUERIDOS AMIGOS E FAMILIARES
          </h1>
          <p className="mt-6 text-base text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
            ab, accusamus suscipit labore delectus a. Aut nihil nesciunt
            inventore natus dolorum officia eos aliquam! Ea odit modi
            consequatur cum nesciunt! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Sit, quasi. Officiis ab natus sapiente cupiditate,
            asperiores molestias quaerat reiciendis quia nemo unde, eum quo
            deserunt ex, earum aspernatur rem velit. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Nisi, ducimus nesciunt provident culpa
            neque possimus qui rem doloribus illo perferendis itaque voluptas
            sed adipisci ad quod iure aliquam non eaque!
          </p>
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <Image
              src={"/montain.png"}
              width={1000}
              height={200}
              alt=""
              className="md:w-[800] sm:w-max-[20rem] flex items-center justify-center"
            />
          </motion.div>
          <div className="mt-6 flex justify-center md:justify-start gap-6"></div>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutSection;
