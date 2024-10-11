"use client";
import { ImagesSlider } from "@/components/ui/images-slider";
const images = [
  "/foto01.jpeg",
  "/foto04.jpeg",
  "/foto05.jpeg",
  "/foto02-recortada.jpeg",
  "/foto03-recortada.jpeg",
];

function IntroSection() {
  return (
    <div className="flex flex-col items-center gap-2 justify-center" id="intro">
      <ImagesSlider
        className="relative py-80 md:py-72 lg:max-h-[60rem] md:max-h-[40rem] mb-10"
        images={images}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center z-50">
          <h1 className="text-6xl sm:text-7xl md:text-8xl text-white text-center font-heading">
            Dayara e Daniel
          </h1>
        </div>
      </ImagesSlider>
    </div>
  );
}

export default IntroSection;
