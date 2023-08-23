import { LinkScroll } from "./Links";

const Home = () => {
  return (
    <section className="-mt-[3.5rem]" id="home">
      <div className="py-[14rem] px-4 bg-blue-900 bg-cover bg-no-repeat bg-[url(../assets/banner-04.jpg)]">
        <div className="container max-w-[84rem] mx-auto">
          <h1 className="text-5xl lg:text-8xl font-semibold text-sky-300 drop-shadow-text">
            Lanternagem
          </h1>
          <h1 className="text-5xl lg:text-8xl font-semibold text-sky-300 drop-shadow-text">
            <span className="font-bold text-sky-200">&</span> Pintura
          </h1>
          <h2 className="text-xl lg:text-2xl text-sky-200 py-1">
            Eficiência e dedicação para cuidar do seu veículo!
          </h2>
          <div className="py-4">
            <LinkScroll href="#contact" variant="btn">
              Faça um orçamento
            </LinkScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
