import { useState } from "react";
import { InsuranceCard } from "./Cards";
import { ChevronUp, ChevronDown } from "lucide-react";
import "./insurance-style.css";

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
    <section className="w-full bg-sky-950" id="insurance">
      <div className="px-4 max-w-[84rem] py-12 mx-auto flex flex-col justify-center lg:flex-row lg:justify-between lg:gap-2">
        <div className="lg:flex-[0.3] xl:flex-[0.45]">
          <h1 className="text-3xl font-bold text-accent-500 drop-shadow-md text-center md:text-4xl lg:text-left">
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
          <button
            onClick={handleShowText}
            className="mx-auto lg:mx-0 mb-4 flex md:mb-2 opacity-70 hover:opacity-100 transition-opacity select-none"
          >
            {showText ? "Esconder" : "Continuar lendo"}
            {showText ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 flex-wrap md:flex-row lg:flex-[0.7] xl:flex-[0.55] lg:justify-evenly">
          {insuranceList.map((e, index) => {
            return <InsuranceCard key={index} name={e.name} link={e.link} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Insurance;
