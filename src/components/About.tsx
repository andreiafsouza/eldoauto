import React, { useState } from "react";
import { Target, SearchCheck, Blocks, ChevronDown } from "lucide-react";

type ValuesProps = {
  title: string;
  icon: React.ReactNode;
  description: string;
};

const About = () => {
  const [showContent, setShowContent] = useState(false);
  const valuesList: ValuesProps[] = [
    {
      title: "Valores",
      icon: <Blocks className="text-sky-300" strokeWidth={1} />,
      description:
        "Integridade, qualidade e compromisso são a base de nossa oficina, criando confiança e resultados excepcionais para cada cliente.",
    },
    {
      title: "Visão",
      icon: <SearchCheck className="text-sky-300" strokeWidth={1} />,
      description:
        "Ser a principal referência em serviços automotivos em Contagem, combinando inovação, excelência técnica e satisfação do cliente.",
    },
    {
      title: "Missão",
      icon: <Target className="text-sky-300" strokeWidth={1} />,
      description:
        "Reparar e personalizar veículos com maestria e habilidade, superando expectativas com soluções únicas para cada cliente.",
    },
  ];

  const handleShowContent = () => {
    setShowContent(!showContent);
  };

  return (
    <section className="py-10 lg:py-20 w-full bg-sky-950" id="about">
      <div className="section max-w-[84rem] px-4 mx-auto grid grid-cols-1  gap-4 lg:grid-cols-2  lg:gap-12">
        <div className="text-center lg:text-right">
          <h1 className="font-semibold text-4xl lg:text-6xl text-sky-300">
            Nossa História
          </h1>
          <h2 className="text-lg md:text-xl py-4">
            Com determinação e inteligência, seguimos entregando resultados de
            primeira linha desde 1989.
          </h2>
        </div>
        <div
          className={`h-fit overflow-hidden opacity-90 transition-colors hover:opacity-100 border-[1px] border-transparent hover:border-sky-300 rounded-2xl ${
            showContent ? "bg-slate-800" : ""
          }`}
        >
          <div className="p-4">
            <h2 className="text-lg text-sky-300">
              <button
                title={`Conheça mais sobre nossa história`}
                onClick={handleShowContent}
                className="w-full pb-2 flex items-center justify-between opacity-90 hover:opacity-100 leading-relaxed border-b-[1px]"
                aria-expanded={showContent}
                aria-controls={`about-content`}
              >
                Conheça mais sobre nossa história
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
              aria-labelledby={"about"}
              aria-hidden={!showContent}
              id={"about"}
            >
              <div className="overflow-hidden pt-2 text-left">
                <p>
                  A trajetória da Eldorado Automóveis é marcada por momentos de
                  muita dedicação e inspiração. Fundada por um casal visionário,
                  José Coura e Sônia Coura, a empresa teve suas raízes
                  estabelecidas no bairro Novo Eldorado, onde começaram aos
                  poucos e de forma modesta a construir o que a empresa é hoje.
                  O casal, apaixonado por carros e com habilidades
                  complementares em mecânica e gestão, decidiu unir forças para
                  criar um espaço que pudesse não apenas reparar os danos
                  mecânicos dos veículos, mas também elevar o seu padrão
                  estético com um acabamento de alto nível em lanternagem e
                  pintura. A dedicação e a vontade de servir com excelência seus
                  clientes foram os motores que impulsionaram o crescimento da
                  Eldorado Automóveis Lanternagem & Pintura.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 pt-6 flex flex-col justify-center flex-wrap lg:flex-row lg:flex-[0.7] xl:flex-[0.55] lg:justify-evenly [&>*]:border-l-2 lg:[&>*:first-child]:border-l-0  lg:[&>*:last-child]:border-l-2">
          {valuesList.map((e, index) => {
            return (
              <div
                key={index}
                className="mb-4 flex-1 flex flex-col gap-4 py-4 px-4 border-accent-opacity"
              >
                <div className="w-full flex gap-4 ">
                  <h2 className="flex items-center px-4 py-2 text-lg md:text-xl md:whitespace-nowrap text-sky-300 rounded-2xl bg-gradient-to-r from-[#00315340] to-[#2c689c1a] shadow-[2px_5px_5px_rgba(36,36,36,0.25)]">
                    {e.title}
                  </h2>

                  <div className="p-3 flex justify-center items-center rounded-2xl bg-gradient-to-r from-[#00315340] to-[#2c689c1a] shadow-[2px_5px_5px_rgba(36,36,36,0.25)]">
                    {e.icon}
                  </div>
                </div>

                <p className="text-sm text-sky-300">{e.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
