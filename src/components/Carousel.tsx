import { useState, useEffect } from "react";
import firstBanner from "../assets/banner-04.jpg";
import secondBanner from "../assets/banner-05.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LinkScroll } from "./Links";

interface Slide {
  id: number;
  url: string;
  alt: string;
}

const Carousel = () => {
  const SliderData: Slide[] = [
    {
      id: 999,
      url: firstBanner,
      alt: "imagem da parte frontal de um carro esportivo em um fundo azul",
    },
    {
      id: 998,
      url: secondBanner,
      alt: "Três recortes de imagens de serviços sendo aplicados á um veículo: na primeira a manutenção do motor, na segunda o polimento do capô, e na terceira a píntura da lateral",
    },
  ];

  const [current, setCurrent] = useState<number>(0);
  const length: number = SliderData.length;
  const next: number = (current + 1) % length;
  const previous: number = (current - 1 + length) % length;

  const nextSlide = () => {
    setCurrent(next);
  };

  const previousSlide = () => {
    setCurrent(previous);
  };

  const moveDot = (index: number) => {
    setCurrent(index);
  };

  /* slider autoplay */
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative w-full h-full">
      <div className="absolute top-[52%] -mt-[3.5rem] w-full flex z-50">
        <div
          className="absolute ml-5 flex items-center justify-center w-12 h-12 bg-transparent rounded-xl text-gray cursor-pointer select-none shadow-[2px_4px_5px_rgba(0,0,0,0.4)]"
          onClick={previousSlide}
        >
          <ChevronLeft size={44} />
        </div>
        <div
          className="absolute right-0 mr-5 flex items-center justify-center w-12 h-12 bg-transparent rounded-xl text-gray cursor-pointer select-none shadow-[2px_4px_5px_rgba(0,0,0,0.4)]"
          onClick={nextSlide}
        >
          <ChevronRight size={44} />
        </div>
      </div>
      <div className="absolute w-full h-full">
        {SliderData.map((slide, index) => (
          <div key={index}>
            <div
              data-index={index === current && index === 0}
              className={
                index === current && index === 0
                  ? "flex justify-center md:block absolute w-full h-full top-0 left-1/2 -translate-x-1/2 max-w-[84rem] z-20"
                  : "hidden"
              }
            >
              <div className="absolute top-[20%] max-w-md px-4 py-8 flex items-end justify-end transition-all duration-100 ease-in-out">
                <h1 className="drop-shadow-[4px_4px_5px_rgba(0,0,0,0.5)] text-accent-opacity text-2xl md:text-3xl text-center">
                  Eficiência e dedicação para cuidar do seu veículo!
                </h1>
              </div>
            </div>
            <div
              className={
                index === current && index === 1
                  ? "absolute top-0 left-1/2 transform -translate-x-1/2 max-w-[84rem] w-full h-full z-40 flex justify-center"
                  : "hidden"
              }
            >
              <div className="px-4 absolute top-[20%] w-full flex flex-col justify-center gap-8 transition-all duration-0 ease-in-out">
                <h1 className="text-2xl md:text-4xl lg:text-5xl text-center drop-shadow-[4px_4px_5px_rgba(0,0,0,0.5)] text-accent-opacity">
                  Lanternagem, pintura e outros serviços para o seu veículo.
                </h1>
                <LinkScroll to="services" text="Serviços" variant="btn" />
              </div>
            </div>
            <div
              className={`absolute w-full h-full transition-all duration-300 ease-in-out ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
              key={slide.id}
            >
              {index === current && (
                <img
                  src={slide.url}
                  alt={slide.alt}
                  className=" absolute w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex z-50">
        {Array.from({ length: length }).map((_, index) => (
          <div
            key={index}
            onClick={() => moveDot(index)}
            className={`w-5 h-5 rounded-full border-[3px] border-[#f4f4f480] mx-1  ${
              index === current ? "bg-blue" : "bg-[#f4f4f480]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
