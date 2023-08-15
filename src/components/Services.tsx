import { ServiceCard } from "./Cards";
import {
  HammerIcon,
  PaintIcon,
  WrenchIcon,
  AlignCarIcon,
  BalanceCarIcon,
} from "./Icons";

const Services = () => {
  const serviceList: ServiceCard[] = [
    {
      title: "Lanternagem",
      description:
        "Nossos profissionais altamente qualificados utilizam técnicas de reparo e modelagem para corrigir deformações e danos na estrutura do veículo, garantindo sua integridade e segurança.",
      icon: <HammerIcon />,
    },
    {
      title: "Pintura",
      description:
        "Através de um processo meticuloso, aplicamos camadas de tinta de alta qualidade para proteger a superfície do veículo contra corrosão e proporcionar um acabamento estético duradouro.",
      icon: <PaintIcon />,
    },
    {
      title: "Mecânica Leve",
      description:
        "Nossa equipe realiza diagnósticos precisos e executa uma variedade de procedimentos de manutenção, desde troca de óleo até substituição de peças, visando a otimização do desempenho e confiabilidade do veículo.",
      icon: <WrenchIcon />,
    },
    {
      title: "Alinhamento",
      description:
        "Ajustamos as configurações da suspensão e direção para garantir que as rodas estejam alinhadas de acordo com as especificações do fabricante, proporcionando estabilidade, controle e desgaste uniforme dos pneus.",
      icon: <AlignCarIcon />,
    },
    {
      title: "Balanceamento",
      description:
        "O nosso time elimina as irregularidades de peso que podem causar vibrações indesejadas, proporcionando uma condução suave, melhor aderência e prolongamento da vida útil dos componentes.",
      icon: <BalanceCarIcon />,
    },
  ];

  return (
    <section className="w-full bg-sky-950" id="services">
      <div className="max-w-[84rem] p-4 mx-auto flex flex-col justify-center">
        <h1 className="text-2xl md:text-4xl text-center">Serviços</h1>
        <h2 className="md:text-xl text-center py-6 italic">
          Conheça mais sobre os serviços que oferecemos.
        </h2>
        <div className="flex flex-col items-center justify-center gap-4 flex-wrap md:flex-row">
          {serviceList.map((e, index) => {
            return (
              <ServiceCard
                key={index}
                title={e.title}
                description={e.description}
                icon={e.icon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
