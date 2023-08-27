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
    <footer className="bg-sky-950">
      <div className="py-10 bg-gradient-to-b from-transparent via-[#00000033] to-[#00000080]">
        <div className="px-4 max-w-[84rem] mx-auto grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-3">
          <ul className="nav-list flex flex-col items-center lg:items-start">
            {links.map((e, index) => {
              return (
                <li key={index} className="w-fit">
                  <LinkScroll href={`#${e.to}`}>{e.text}</LinkScroll>
                </li>
              );
            })}
          </ul>

          <p className="self-end text-center">{`© ${currentYear} Todos os direitos reservados.`}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
