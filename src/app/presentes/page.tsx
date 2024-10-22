"use client";

import { FocusCards } from "@/components/ui/focus-cards";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const presentes = [
  {
    title: "Jogo de toalhas de banho 5 peças",
    src: "https://karsten.vtexassets.com/arquivos/ids/178284-600-600/3729975_01.jpg",
    price: 129.9,
  },
  {
    title: "Jogo de toalhas de banho 5 peças",
    src: "https://karsten.vtexassets.com/arquivos/ids/178284-600-600/3729975_01.jpg",
    price: 129.9,
  },
  {
    title: "Aparelho de jantar (20 peças)",
    src: "https://m.media-amazon.com/images/I/41ojdLADLvL._AC_SX679_.jpg",
    price: 299.99,
  },
  {
    title: "Aparelho de jantar (20 peças)",
    src: "https://m.media-amazon.com/images/I/61kPOs8qAdL.__AC_SX300_SY300_QL70_ML2_.jpg",
    price: 449.99,
  },
  {
    title: "Conjunto de 6 copos Crystal Bohemia",
    src: "https://m.media-amazon.com/images/I/51rWlVO5HHL._AC_SX679_.jpg",
    price: 195,
  },
  {
    title: "Conjunto 6 canecas em porcelana Oxford",
    src: "https://images.tcdn.com.br/img/img_prod/1180967/cj_6_canecas_260ml_em_porcelana_ryo_maresia_oxford_22491_1_7477a9e07359a963bbe25800a663ee9f.jpg",
    price: 119.89,
  },
  {
    title: "Conjunto de taças de crystal para vinho - 6 peças",
    src: "https://images.tcdn.com.br/img/img_prod/361962/conjunto_de_tacas_de_cristal_para_vinho_branco_6_pecas_oxford_10175_1_80319e2901c65318079226c6dc833dc4.jpg",
    price: 159.9,
  },
  {
    title: "Jogo de facas 6 peças",
    src: "https://m.media-amazon.com/images/I/613OJ4m2REL.__AC_SX300_SY300_QL70_ML2_.jpg",
    price: 179.9,
  },
  {
    title: "Faqueiro de Aço Inox - 30 peças",
    src: "https://m.media-amazon.com/images/I/61kxl0hf-RL._AC_SL1500_.jpg",
    price: 322.99,
  },
  {
    title: "Conjunto de 6 copos Crysta",
    src: "https://m.media-amazon.com/images/I/51rWlVO5HHL._AC_SX679_.jpg",
    price: 195,
  },
  {
    title: "Kit de Tábuas de corte",
    src: "https://http2.mlstatic.com/D_NQ_NP_810174-MLU78138806746_082024-O.webp",
    price: 168,
  },
  {
    title: "Jogo de panelas 8 peças Ceramic Life Smart Pluss Vanilla",
    src: "https://m.media-amazon.com/images/I/5131vjv1suL.__AC_SX300_SY300_QL70_ML2_.jpg",
    price: 789.9,
  },
  {
    title: "Jogo de lençol King Size 300 fios 100% algodão",
    src: "https://karsten.vtexassets.com/arquivos/ids/195363-600-600/3966519_01.jpg?v=638459528779930000",
    price: 499.99,
  },
  {
    title: "Jogo de lençol King Size 4 peças",
    src: "https://images.yampi.me/assets/stores/lindacasa/uploads/images/jogo-de-lencol-king-size-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-fendi-635021dd1d2cd-medium.jpg",
    price: 239.99,
  },
  {
    title: "Aspirador de pó vertical com fio",
    src: "https://m.media-amazon.com/images/I/31KedS5l8NL.__AC_SX300_SY300_QL70_ML2_.jpg",
    price: 224,
  },
  {
    title: "Máquina de café",
    src: "https://m.media-amazon.com/images/I/51nCR9Yx1yL._AC_SX679_.jpg",
    price: 409,
  },
  {
    title: "Conjunto de refratários",
    src: "https://m.media-amazon.com/images/I/71EsB8tl9dL._AC_SX679_.jpg",
    price: 139.9,
  },
  {
    title: "Conjunto de assadeiras antiaderente",
    src: "https://m.media-amazon.com/images/I/31nhIQoSQqL._AC_.jpg",
    price: 126.99,
  },
  {
    title: "Jogo de assadeira cerâmica branca",
    src: "https://m.media-amazon.com/images/I/51UGBVIg3DL._AC_SX679_.jpg",
    price: 329.99,
  },
  {
    title: "Panela Wok com tampa 5,5L",
    src: "https://http2.mlstatic.com/D_NQ_NP_868865-MLU72719938708_112023-O.webp",
    price: 267.99,
  },
  {
    title: "Torradeira elétrica",
    src: "https://m.media-amazon.com/images/I/51IRloWQneL._AC_SX679_.jpg",
    price: 143.99,
  },
  {
    title: "Frigobar",
    src: "https://m.media-amazon.com/images/I/517Rw1FY0KL.__AC_SY445_SX342_QL70_ML2_.jpg",
    price: 759.0,
  },
  {
    title: "Lava louças",
    src: "https://brastemp.vtexassets.com/arquivos/ids/228747/lava-loucas-brastemp-blf08bs-frontal-2.jpg?v=637946147173170000",
    price: 2213.0,
  },
  {
    title: "Panela de pressão",
    src: "https://m.media-amazon.com/images/I/51an2cOFEdL._AC_SX679_.jpg",
    price: 233.0,
  },
  {
    title: "Bebedouro Aqua",
    src: "https://m.media-amazon.com/images/I/51eCGAT1e6L._AC_SX679_.jpg",
    price: 306.91,
  },
  {
    title: "Mixer 3 em 1",
    src: "https://m.media-amazon.com/images/I/51N-Nxg43ML._AC_SX679_.jpg",
    price: 155.97,
  },
  {
    title: "Aparelho de jantar e chá",
    src: "https://m.media-amazon.com/images/I/51HjUseflNS._AC_SX679_.jpg",
    price: 589.7,
  },
  {
    title: "Conjunto de 6 xícaras",
    src: "https://m.media-amazon.com/images/I/51YOILH9IuL._AC_SL1000_.jpg",
    price: 179.1,
  },
  {
    title: "Porta condimentos giratório",
    src: "https://goianita.vteximg.com.br/arquivos/ids/161402-1000-1000/3417325863_2SZ.jpg?v=637656785892230000",
    price: 144.8,
  },
  {
    title: "Kit 10 potes de vidro retangular",
    src: "https://m.media-amazon.com/images/I/61APcshc2WL._AC_SL1000_.jpg",
    price: 219.99,
  },
  {
    title: "Potes Herméticos com tampa de bambu",
    src: "https://m.media-amazon.com/images/I/61caPiaI40L._AC_SL1000_.jpg",
    price: 129.99,
  },
  {
    title: "Ferro de passar roupa",
    src: "https://m.media-amazon.com/images/I/61vIbF0Gg3L._AC_SX679_.jpg",
    price: 125.99,
  },
  {
    title: "Kit 4 peças de travesseiro",
    src: "https://m.media-amazon.com/images/I/81OxUPYM5HL._AC_SL1500_.jpg",
    price: 159.99,
  },
  {
    title: "Aparelho de jantar 30 peças",
    src: "https://m.media-amazon.com/images/I/61XhQ2QCcNL._AC_SX679_.jpg",
    price: 729.99,
  },
  {
    title: "Kit mesa posta",
    src: "https://m.media-amazon.com/images/I/610qTQAfRNL._AC_SX679_.jpg",
    price: 190.0,
  },
  {
    title: "Frigideira antiaderente",
    src: "https://m.media-amazon.com/images/I/71ULKUbhfUL.__AC_SY300_SX300_QL70_ML2_.jpg",
    price: 174.38,
  },
  {
    title: "Mesa sala de jantar",
    src: "https://images.homify.com/v1442345204/p/photo/image/910507/_JBF0637.jpg",
    price: 2599.0,
  },
  {
    title: "Faqueiro de aço inox",
    src: "https://m.media-amazon.com/images/I/41vlL8bovlL.__AC_SX300_SY300_QL70_ML2_.jpg",
    price: 449.0,
  },
  {
    title: "Escorredor de louça inox",
    src: "https://m.media-amazon.com/images/I/71RL7J9tfnL.__AC_SX300_SY300_QL70_ML2_.jpg",
    price: 249.9,
  },
  {
    title: "Geladeira Frost Free Brastemp Duplex",
    src: "https://m.media-amazon.com/images/I/317DDhSXx2L._AC_SX679_.jpg",
    price: 3239.0,
  },
  {
    title: "Máquina de lavar frontal 11kg",
    src: "https://m.media-amazon.com/images/I/51ZzYM6wY3L.__AC_SY445_SX342_QL70_ML2_.jpg",
    price: 2849.0,
  },
  {
    title: "Fogão 5 bocas",
    src: "https://brastemp.vtexassets.com/arquivos/ids/230335-500-500?v=637980678748900000&width=500&height=500&aspect=true",
    price: 2203.0,
  },
  {
    title: "Sofá cama retrátil",
    src: "https://product-hub-prd.madeiramadeira.com.br/865912/images/7218c508-b132-4adb-9583-82f10cbc8f2bdlinhocru1695062617200zoom.jpg?width=700&canvas=1:1&bg-color=FFF",
    price: 2769.0,
  },
  {
    title: "Kit dois travesseiros",
    src: "https://m.media-amazon.com/images/I/51MfxXy4MnL._AC_SX679_.jpg",
    price: 129.99,
  },
  {
    title: "Fritadeira em óleo",
    src: "https://m.media-amazon.com/images/I/41YPv7L7B9L.__AC_SY300_SX300_QL70_ML2_.jpg",
    price: 429.99,
  },
  {
    title: "Kit lavabo 6 peças",
    src: "https://http2.mlstatic.com/D_NQ_NP_631808-MLB71214553658_082023-O.webp",
    price: 251.99,
  },
  {
    title: "Jogo de Edredom toque de plumas",
    src: "https://http2.mlstatic.com/D_NQ_NP_834901-MLU78498869250_082024-O.webp",
    price: 369.9,
  },
  {
    title: "Conjunto de sobremesa 7 peças",
    src: "https://m.media-amazon.com/images/I/51IQNxYpKqL._AC_SX679_.jpg",
    price: 119.99,
  },
  {
    title: "Multiprocessador",
    src: "https://m.media-amazon.com/images/I/71XXkZapbKL._AC_SX679_.jpg",
    price: 477.93,
  },
  {
    title: "Ar condicionado Split",
    src: "https://m.media-amazon.com/images/I/31M3hPInuSL._AC_SX679_.jpg",
    price: 2399.0,
  },
  {
    title: "Panela de pressão elétrica",
    src: "https://http2.mlstatic.com/D_NQ_NP_635369-MLB44870275473_022021-O.webp",
    price: 493,
  },
  {
    title: "Omeleteira",
    src: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSOb28AZwzlXBJlBL1BssJ3z5MoyLO8qmLzYb7WUm9ouU4uc36_1jiDUurPd7V0cSMp1_Za8tWZM6ZGltqBBLsWnOmk0IFsRrlwBo6yESHxnGyUDNUhfwAOpsuQASj3SNJZLux7xA&usqp=CAc",
    price: 169.9,
  },
  {
    title: "Sanduicheira",
    src: "https://m.media-amazon.com/images/I/511Bqbpr12L.__AC_SX300_SY300_QL70_ML2_.jpg",
    price: 189.9,
  },
  {
    title: "Pipoqueira",
    src: "https://m.media-amazon.com/images/I/51xaTxH5mtL.__AC_SX300_SY300_QL70_ML2_.jpg",
    price: 127.99,
  },
  {
    title: "Um dia de hospedagem na lua de mel",
    src: "https://triplover.com.br/wp-content/uploads/2020/09/Pousada-Fogo-Eterno.jpg",
    price: 1000,
  },
  {
    title: "Um vale presente para a noiva na lua de mel",
    src: "https://acdn.mitiendanube.com/stores/002/060/155/products/60cdee74-445d-4507-974e-f34ed4e6ac42-d3f4b6e3d05ed2296d17056846529732-1024-1024.webp",
    price: 500,
  },
  {
    title: "Um jantar romântico para os noivos",
    src: "https://cdnm.westwing.com.br/glossary/uploads/br/2015/01/27175014/jantar-romantico-iStock.jpg",
    price: 350,
  },
  {
    title: "Spa para os noivos na lua de mel",
    src: "https://www.constancezahn.com/wp-content/uploads/2023/03/015-lua-de-mel-teresa-perez-tours-5-refugios-perfeitos-para-uma-lua-de-mel-de-bem-estar-anantara-spa-tivoli-avenida-liberdade-lisboa.jpeg",
    price: 350,
  },
  {
    title: "Primeiro café da manhã dos noivos",
    src: "https://cdn0.casamentos.com.br/article-vendor/8604/original/1280/jpg/180715-0085-180719183357_13_178604-158699354392080.jpeg",
    price: 350,
  },
  {
    title: "Massagem para os noivos na lua de mel",
    src: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 350,
  },
];

const PresentesPage = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < presentes.length) {
          setVisibleCount((prevCount) => prevCount + 6);
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [visibleCount]);

  return (
    <div className="relative bg-slate overflow-x-hidden" id="presente">
      <h1 className="text-center text-4xl text-muted-foreground font-semibold font-serif py-10">
        SUGESTÕES DE <br /> PRESENTES
      </h1>
      <Link
        href="/"
        className="hidden md:flex absolute top-10 left-5 items-center p-2 bg-white rounded shadow hover:bg-gray-100 transition 
    md:h-[40px] md:w-[150px] 
    text-sm sm:text-base md:text-base"
      >
        <FaArrowLeft className="mr-2" />
        <span className="hidden md:inline">Página inicial</span>
        <span className="md:hidden">Início</span>
      </Link>

      <motion.div
        className="absolute top-14 right-0"
        initial={{ opacity: 0, translateX: 100 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/flowers.png"
          alt="Flores"
          width={150}
          height={100}
          className="md:w-[15rem] lg:w-[20rem] blur-sm"
        />
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-0"
        initial={{ opacity: 0, translateX: -100 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Image
          src="/flowers.png"
          alt="Flores"
          width={150}
          height={100}
          className="md:w-[15rem] lg:w-[20rem] blur-sm z-0"
        />
      </motion.div>
      <FocusCards cards={presentes.slice(0, visibleCount)} />
      <div className="flex justify-center mt-10 md:hidden">
        <Link
          href="/"
          className="flex items-center p-2 bg-white rounded shadow hover:bg-gray-100 transition 
      h-[40px] w-[80px] 
      text-sm sm:text-base"
        >
          <FaArrowLeft className="mr-2" />
          <span className="inline md:hidden">Início</span>
        </Link>
      </div>
      <div ref={observerRef} className="h-10"></div>
    </div>
  );
};

export default PresentesPage;
