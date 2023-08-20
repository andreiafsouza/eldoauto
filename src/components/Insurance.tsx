import { useState } from "react";
import { InsuranceCard } from "./Cards";
import { ChevronUp, ChevronDown } from "lucide-react";
import { ExpandBtn } from "./Buttons";

const Insurance = () => {
  const [showText, setShowText] = useState(false);
  const insuranceList: InsuranceCard[] = [
    {
      name: "Allianz Seguros",
      link: "https://www.allianz.com.br/",
    },
    {
      name: "Azul Seguros",
      link: "https://www.azulseguros.com.br/",
    },
    {
      name: "Porto Seguro",
      link: "https://www.portoseguro.com.br/",
    },
    {
      name: "HDI Seguros",
      link: "https://www.hdiseguros.com.br/",
    },
    {
      name: "Itaú Seguros",
      link: "https://www.itau.com.br/seguros",
    },
    {
      name: "Liberty Seguros",
      link: "https://www.libertyseguros.com.br/Pages/home.aspx",
    },
  ];

  const handleShowText = () => {
    setShowText(!showText);
  };

  return (
    <section className="py-[4rem] w-full bg-sky-950" id="insurance">
      <div className="section px-4 max-w-[84rem] mx-auto flex flex-col justify-center lg:flex-row lg:justify-between lg:gap-2">
        <div className="lg:flex-[0.3] xl:flex-[0.45]">
          <h1 className="text-4xl md:text-6xl text-sky-300 drop-shadow-text text-center lg:text-left">
            Seguradoras
          </h1>
          <h2 className="md:text-xl text-center py-2 italic opacity-80 lg:text-left">
            As principais seguradoras do país são nossas credenciadas.
          </h2>

          <div className={`box ${showText ? "open" : ""}`}>
            <p
              className={`preview-text text-center text-sm lg:text-base mb-4 text-gray lg:text-left ${
                showText ? "show-text" : ""
              }`}
            >
              Contar com uma seguradora pode trazer tranquilidade em momentos de
              imprevistos. Danos ao veículo podem ocorrer a qualquer momento, e
              contar com estas empresas garante que as despesas de reparo sejam
              cobertas, evitando gastos financeiros inesperados. Além disso, uma
              seguradora respeitável oferece um processo de sinistro eficiente e
              suporte profissional, agilizando os procedimentos e reduzindo o
              estresse durante momentos já desafiadores.
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <ExpandBtn onClick={handleShowText} showText={showText} />
          </div>
        </div>

        <div className="pt-6 flex flex-col items-center justify-center gap-4 flex-wrap md:flex-row lg:flex-[0.7] xl:flex-[0.55] lg:justify-evenly">
          {insuranceList.map((e, index) => {
            return <InsuranceCard key={index} name={e.name} link={e.link} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Insurance;
