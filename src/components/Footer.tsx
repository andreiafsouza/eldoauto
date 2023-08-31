import { LinkScroll } from "./Links";

const Footer = () => {
  const links = [
    {
      to: "home",
      text: "Home",
    },
    {
      to: "services",
      text: "Serviços",
    },
    {
      to: "insurance",
      text: "Seguradoras",
    },
    {
      to: "about",
      text: "Sobre",
    },
    {
      to: "contact",
      text: "Contato",
    },
  ];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient">
      <div className="py-10">
        <div className="px-4 max-w-[84rem] mx-auto grid md:grid-rows-2">
          <ul className="nav-list justify-center flex items-center">
            {links.map((e, index) => {
              return (
                <li key={index} className="w-fit">
                  <LinkScroll href={`#${e.to}`}>{e.text}</LinkScroll>
                </li>
              );
            })}
          </ul>

          <div className="relative pt-4 flex flex-col gap-4 justify-between text-center after:absolute after:w-[80%] after:h-[2px] after:bg-sky-300 after:top-0 after:left-[10%]">
            <p>Av. João César de Oliveira, 5555 - Beatriz, Contagem - MG.</p>
            <p>{`© ${currentYear} Todos os direitos reservados.`}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
