import { useState, useEffect } from "react";
import firstBanner from "../assets/banner-04.jpg";
import secondBanner from "../assets/banner-05.jpg";

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
      alt: "primeiro banner",
    },
    {
      id: 998,
      url: secondBanner,
      alt: "segundo banner",
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
      <div className="absolute top-[42%] w-full flex">
        <div className="caret-left" onClick={previousSlide}>
          {"<"}
        </div>
        <div className="caret-right" onClick={nextSlide}>
          {">"}
        </div>
      </div>
      <div className="image-wrapper">
        {SliderData.map((slide, index) => (
          <div key={index}>
            <div
              className={
                index === current && index === 0
                  ? "text-wrapper"
                  : "text-hidden"
              }
            >
              <div className="text-box">
                <h1>Eficiência e dedicação para cuidar do seu veículo!</h1>
              </div>
            </div>
            <div
              className={
                index === current && index === 1
                  ? "text-second-slide"
                  : "text-hidden"
              }
            >
              <div className="text-second">
                <h1>
                  Lanternagem, pintura e outros serviços para o seu veículo.
                </h1>
                <a href="#" data-nav="services">
                  Services
                </a>
              </div>
            </div>
            <div
              className={index === current ? "slide active" : "slide"}
              key={slide.id}
            >
              {index === current && (
                <img src={slide.url} alt={slide.alt} className="image" />
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="container-dots">
        {Array.from({ length: length }).map((_, index) => (
          <div
            key={index}
            onClick={() => moveDot(index)}
            className={index === current ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
