import { LinkScroll } from "./Links";

const Hero = () => {
  return (
    <section className="-mt-[3.5rem] " id="home">
      <div className="diagonal py-[14rem] bg-blue bg-cover bg-no-repeat bg-[url(../assets/banner-04.jpg)]">
        <div className="px-4 w-min max-w-[84rem] mx-auto sm:w-full">
          <h1 className="font-['Inter'] text-4xl xs:text-5xl lg:text-8xl font-semibold text-sky-300 drop-shadow-text">
            Lanternagem
          </h1>
          <h1 className="font-['Inter'] text-4xl xs:text-5xl lg:text-8xl font-semibold text-sky-300 drop-shadow-text">
            & Pintura
          </h1>
          <h2 className="text-xl lg:text-2xl text-sky-200 pt-2">
            Eficiência e dedicação para cuidar do seu veículo!
          </h2>
          <div className="py-4 w-fit">
            <LinkScroll href="#contact" variant="btn">
              Faça um orçamento
            </LinkScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
