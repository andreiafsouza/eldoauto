import { useState } from "react";
import {
  HammerIcon,
  PaintIcon,
  WrenchIcon,
  AlignCarIcon,
  BalanceCarIcon,
} from "./Icons";
import { ServiceCard } from "./Cards";
import repair from "../assets/repair.png";

const Services = () => {
  const serviceList: ServiceCard[] = [
    {
      title: "Lanternagem",
      description:
        "Nossos profissionais altamente qualificados utilizam técnicas de reparo e modelagem para corrigir deformações e danos na estrutura do veículo, garantindo sua integridade e segurança.",
      icon: <HammerIcon />,
      image: repair,
    },
    {
      title: "Pintura",
      description:
        "Através de um processo meticuloso, aplicamos camadas de tinta de alta qualidade para proteger a superfície do veículo contra corrosão e proporcionar um acabamento estético duradouro.",
      icon: <PaintIcon />,
      image: "../../assets/repair.png",
    },
    {
      title: "Mecânica Leve",
      description:
        "Nossa equipe realiza diagnósticos precisos e executa uma variedade de procedimentos de manutenção, desde troca de óleo até substituição de peças, visando a otimização do desempenho e confiabilidade do veículo.",
      icon: <WrenchIcon />,
      image: "../../assets/repair.png",
    },
    {
      title: "Alinhamento",
      description:
        "Ajustamos as configurações da suspensão e direção para garantir que as rodas estejam alinhadas de acordo com as especificações do fabricante, proporcionando estabilidade, controle e desgaste uniforme dos pneus.",
      icon: <AlignCarIcon />,
      image: "../../assets/repair.png",
    },
    {
      title: "Balanceamento",
      description:
        "O nosso time elimina as irregularidades de peso que podem causar vibrações indesejadas, proporcionando uma condução suave, melhor aderência e prolongamento da vida útil dos componentes.",
      icon: <BalanceCarIcon />,
      image: "../../assets/repair.png",
    },
  ];

  return (
    <section className="py-8 lg:py-16 w-full bg-sky-950" id="services">
      <div className="section max-w-[84rem] px-4 mx-auto flex flex-col justify-center">
        <div>
          <h1 className="text-4xl md:text-6xl text-sky-300 drop-shadow-text text-center">
            Serviços
          </h1>
          <h2 className="md:text-xl text-center pt-4 pb-5 italic">
            Conheça mais sobre os serviços que oferecemos.
          </h2>
        </div>

        <div className="grid gap-[var(--size-fluid-2)]">
          {serviceList.map((e, index) => {
            return (
              <ServiceCard
                key={index}
                title={e.title}
                description={e.description}
                image={e.image}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
