import { useState } from "react";
import { InsuranceCard } from "./Cards";
import { ChevronUp, ChevronDown } from "lucide-react";
import { ExpandBtn } from "./Buttons";

const Insurance = () => {
  const [showContent, setShowContent] = useState(false);

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

  const handleShowContent = () => {
    setShowContent(!showContent);
  };

  return (
    <section className="py-10 lg:py-20 w-full bg-sky-950" id="insurance">
      <div className="section px-4 max-w-[84rem] mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        <div className="text-center md:col-span-2 lg:col-auto lg:col-start-2 lg:row-start-2 lg:row-span-3">
          <h1 className="font-semibold text-4xl lg:text-5xl xl:text-6xl text-sky-300">
            Seguradoras
          </h1>
          <h2 className="text-lg lg:text-xl py-4">
            As principais seguradoras do país são nossas credenciadas.
          </h2>

          <div
            className={`overflow-hidden opacity-90 transition-colors hover:opacity-100 border-[1px] border-transparent hover:border-sky-300 rounded-2xl ${
              showContent ? "bg-slate-800" : ""
            }`}
          >
            <div className="p-4">
              <h2 className="text-lg text-sky-300">
                <button
                  title={`Saiba mais sobre Seguradoras`}
                  onClick={handleShowContent}
                  className="w-full pb-2 flex items-center justify-between opacity-90 hover:opacity-100 leading-relaxed border-b-[1px]"
                  aria-expanded={showContent}
                  aria-controls={`service-content`}
                >
                  Por que devo utilizar os serviços de uma Seguradora?
                </button>
              </h2>
              <div
                className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 aria-hidden:grid-rows-[0fr]"
                aria-labelledby={"Seguradoras"}
                aria-hidden={!showContent}
                id={"Seguradoras"}
              >
                <div className="overflow-hidden pt-2 text-left">
                  <p>
                    Danos ao veículo podem ocorrer a qualquer momento e ter as
                    despesas de reparo cobertas por uma empresa séria faz toda a
                    diferença. Por isso é importante poder contar com uma
                    seguradora respeitável, que ofereça processos de sinistro
                    eficientes e suporte profissional, reduzindo o seu estresse
                    e seus gastos durante momentos desafiadores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {insuranceList.map((e, index) => {
          return <InsuranceCard key={index} name={e.name} link={e.link} />;
        })}
      </div>
    </section>
  );
};

export default Insurance;
