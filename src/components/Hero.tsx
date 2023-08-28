import { LinkScroll } from "./Links";

const Hero = () => {
  return (
    <section className="-mt-[3.5rem]" id="home">
      <div className="py-[14rem] px-4 bg-blue bg-cover bg-no-repeat bg-[url(../assets/banner-04.jpg)] bg-blend-lighten">
        <div className="container max-w-[84rem] mx-auto">
          <h1 className="font-['Inter'] text-5xl lg:text-8xl font-semibold text-sky-300 drop-shadow-text">
            Lanternagem
          </h1>
          <h1 className="font-['Inter'] text-5xl lg:text-8xl font-semibold text-sky-300 drop-shadow-text">
            <span className="text-sky-950  relative after:bg-sky-300 after:absolute after:h-[78%] after:w-full after:z-[-1] after:opacity-90 after:rounded-tr-2xl after:rounded-bl-2xl after:left-0 after:top-[11%]">{`& Pintura`}</span>
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
