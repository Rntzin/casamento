import Image from "next/image";

function AboutSection() {
  return (
    <section
      id="about"
      className="container flex flex-col md:max-w-[64rem] md:py-12 lg:py-24"
    >
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-rows-[auto-1fr]">
        <div className="lg:pl-20 flex justify-center">
          <div className="max-w-xs px-2.5 lg:max-w-none ">
            <Image
              src="/foto06.jpeg"
              alt="eles"
              width={1000}
              height={1000}
              quality="95"
              priority={true}
              className="aspect-square rounded-t-full bg-zinc-100 object-cover h-[490px] shadow-xl"
            />
          </div>
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
          <div className="mt-6 flex justify-center md:justify-start gap-6"></div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
