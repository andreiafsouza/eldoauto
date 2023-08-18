import React, { useState } from "react";
import { ExpandBtn } from "./Buttons";
import { Target, SearchCheck, Blocks } from "lucide-react";

type ValuesProps = {
  title: string;
  icon: React.ReactNode;
  description: string;
};

const About = () => {
  const [showText, setShowText] = useState(false);
  const valuesList: ValuesProps[] = [
    {
      title: "Valores",
      icon: <Blocks className="text-accent-500" strokeWidth={1} />,
      description:
        "Integridade, qualidade e compromisso são a base de nossa oficina, criando confiança e resultados excepcionais para cada cliente.",
    },
    {
      title: "Visão",
      icon: <SearchCheck className="text-accent-500" strokeWidth={1} />,
      description:
        "Ser a principal referência em serviços automotivos em Contagem, combinando inovação, excelência técnica e satisfação do cliente.",
    },
    {
      title: "Missão",
      icon: <Target className="text-accent-500" strokeWidth={1} />,
      description:
        "Reparar e personalizar veículos com maestria e habilidade, superando expectativas com soluções únicas para cada cliente.",
    },
  ];

  const handleShowText = () => {
    setShowText(!showText);
  };

  return (
    <section className="w-full bg-sky-950" id="about">
      <div className="max-w-[84rem] px-4  py-12 mx-auto flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl font-bold text-accent-500 drop-shadow-md text-center">
          Nossa História
        </h1>
        <h2 className="md:text-xl text-center pt-4 pb-5 italic">
          Com determinação e inteligência, seguimos entregando resultados de
          primeira linha desde 1989.
        </h2>

        <div className={`box ${showText ? "open" : ""}`}>
          <p
            className={`preview-text text-center text-sm lg:text-base mb-4 text-gray lg:text-left ${
              showText ? "show-text" : ""
            }`}
          >
            A história da nossa oficina é marcada por uma jornada inspiradora.
            Fundada por um casal visionário, José Coura e Sônia Coura, a empresa
            teve suas raízes firmemente estabelecidas no bairro Novo Eldorado. O
            casal, apaixonado por carros e com habilidades complementares em
            mecânica e gestão, decidiu unir forças para criar um espaço que
            pudesse não apenas reparar os danos mecânicos dos veículos, mas
            também elevar o seu padrão estético com um acabamento de alto nível
            em lanternagem e pintura. Com um modesto começo em um pequeno
            terreno, a dedicação incansável à excelência e a busca constante
            pela satisfação do cliente foram os motores que impulsionaram nosso
            crescimento.
          </p>
        </div>

        <div className="w-fit self-center">
          <ExpandBtn onClick={handleShowText} showText={showText} />
        </div>

        <div className="pt-6 flex flex-col justify-center flex-wrap lg:flex-row lg:flex-[0.7] xl:flex-[0.55] lg:justify-evenly [&>*]:border-l-2 lg:[&>*:first-child]:border-l-0  lg:[&>*:last-child]:border-l-2">
          {valuesList.map((e, index) => {
            return (
              <div
                key={index}
                className="mb-4 flex-1 flex flex-col gap-4 py-4 px-4 border-accent-opacity"
              >
                <div className="w-full flex gap-4 ">
                  <h2 className="flex items-center px-4 py-2 text-lg md:text-xl md:whitespace-nowrap text-accent-500 rounded-2xl bg-gradient-to-r from-[#00315340] to-[#2c689c1a] shadow-[2px_5px_5px_rgba(36,36,36,0.25)]">
                    {e.title}
                  </h2>

                  <div className="p-3 flex justify-center items-center rounded-2xl bg-gradient-to-r from-[#00315340] to-[#2c689c1a] shadow-[2px_5px_5px_rgba(36,36,36,0.25)]">
                    {e.icon}
                  </div>
                </div>

                <p className="text-sm text-accent-500">{e.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
