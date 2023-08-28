import { ServiceCard } from "./Cards";
import paintImage from "../assets/ea.jpg";

const Services = () => {
  const serviceList: ServiceCard[] = [
    {
      title: "Lanternagem",
      description:
        "Nossos profissionais altamente qualificados utilizam técnicas de reparo e modelagem para corrigir deformações e danos na estrutura do veículo, garantindo sua integridade e segurança.",
    },
    {
      title: "Pintura",
      description:
        "Através de um processo meticuloso, aplicamos camadas de tinta de alta qualidade para proteger a superfície do veículo contra corrosão e proporcionar um acabamento estético duradouro.",
    },
    {
      title: "Mecânica Leve",
      description:
        "Realizamos diagnósticos precisos, executando uma variedade de procedimentos de manutenção, desde troca de óleo até substituição de peças, visando otimizar o desempenho e confiabilidade do veículo.",
    },
    {
      title: "Alinhamento",
      description:
        "Ajustamos as configurações da suspensão e direção para garantir que as rodas estejam alinhadas de acordo com as especificações do fabricante, proporcionando estabilidade, controle e desgaste uniforme dos pneus.",
    },
    {
      title: "Balanceamento",
      description:
        "O nosso time elimina as irregularidades de peso que podem causar vibrações indesejadas, proporcionando uma condução suave, melhor aderência e prolongamento da vida útil dos componentes.",
    },
  ];

  return (
    <section className="py-10 lg:py-20 w-full" id="services">
      <div className="section max-w-[84rem] px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
        <div className="text-center lg:text-right">
          <h1 className="pr-2 font-semibold text-4xl lg:text-6xl text-sky-300">
            Serviços
          </h1>
          <h2 className="pr-2 text-lg md:text-xl py-4">
            Conheça mais sobre os serviços que oferecemos selecionando-os
            abaixo.
          </h2>
          <div className="grid grid-cols-1 gap-2 rounded-2xl">
            {serviceList.map((e, index) => {
              return (
                <ServiceCard
                  key={index}
                  title={e.title}
                  description={e.description}
                />
              );
            })}
          </div>
        </div>

        <div className="bg-blue bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-900 to-blue">
          <img
            className="w-full h-full object-cover rounded-b-2xl mix-blend-hard-light"
            src={paintImage}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
