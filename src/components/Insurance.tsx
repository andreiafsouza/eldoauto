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
    <section className="py-10 lg:py-20 w-full bg-blue" id="insurance">
      <div className="section px-4 max-w-[84rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="text-center lg:text-left">
          <h1 className="font-semibold text-4xl md:text-6xl text-sky-300">
            Seguradoras
          </h1>
          <h2 className="text-lg md:text-xl pt-4">
            As principais seguradoras do país são nossas credenciadas.
          </h2>

          <div
            className={`overflow-hidden opacity-90 transition-colors hover:opacity-100 text-left hover:bg-slate-800 rounded-2xl ${
              showContent ? "bg-slate-800" : ""
            }`}
          >
            <div className="p-4">
              <h2 className="text-xl text-sky-300">
                <button
                  title={`Saiba mais sobre Seguradoras`}
                  onClick={handleShowContent}
                  className="pb-2 flex items-center justify-between opacity-90 hover:opacity-100 leading-relaxed border-b-[1px]"
                  aria-expanded={showContent}
                  aria-controls={`service-content`}
                >
                  {"Por que devo utilizar os serviços de uma Seguradora?"}
                  <ChevronDown
                    className={
                      showContent
                        ? "transition-transform duration-500 rotate-180"
                        : "transition-transform duration-500"
                    }
                  />
                </button>
              </h2>
              <div
                className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 aria-hidden:grid-rows-[0fr]"
                aria-labelledby={"Seguradoras"}
                aria-hidden={!showContent}
                id={"Seguradoras"}
              >
                <div className="overflow-hidden pt-2">
                  <p>
                    Contar com uma seguradora pode trazer tranquilidade em
                    momentos de imprevistos. Danos ao veículo podem ocorrer a
                    qualquer momento, e contar com estas empresas garante que as
                    despesas de reparo sejam cobertas, evitando gastos
                    financeiros inesperados. Além disso, uma seguradora
                    respeitável oferece um processo de sinistro eficiente e
                    suporte profissional, agilizando os procedimentos e
                    reduzindo o estresse durante momentos já desafiadores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5">
          {insuranceList.map((e, index) => {
            return <InsuranceCard key={index} name={e.name} link={e.link} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Insurance;
