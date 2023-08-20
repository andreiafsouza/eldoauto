import { PrimaryBtn } from "./Buttons";

const Home = () => {
  return (
    <section className="-mt-[3.5rem]" id="home">
      <div className="py-[14rem] px-4 bg-blue-900 bg-cover bg-no-repeat bg-[url(../assets/banner-04.jpg)]">
        <div className="container max-w-[84rem] mx-auto px-4">
          <h1 className="text-5xl lg:text-8xl text-sky-300 drop-shadow-text">
            Lanternagem
          </h1>
          <h1 className="text-5xl lg:text-8xl text-sky-300 drop-shadow-text">
            <span className="font-bold text-sky-200">&</span> Pintura
          </h1>
          <h2 className="text-2xl text-sky-200">
            Eficiência e dedicação para cuidar do seu veículo!
          </h2>
          <div className="py-4">
            <PrimaryBtn>Faça um orçamento</PrimaryBtn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
