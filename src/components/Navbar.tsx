import { LinkScroll } from "./Links";
import { Menu } from "lucide-react";

const Navbar = () => {
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
    {
      to: "gallery",
      text: "Galeria",
    },
  ];

  return (
    <nav className="max-w-[84rem] px-4 py-2 flex gap-4 mx-auto items-center justify-between">
      <h1 className="text-4xl text-[#8bd8f8b3] ">
        <a href="#home" data-nav="home" title="Ir para Home">
          ea{" "}
          <span className="hidden text-sm text-zinc-200 sm:inline">
            Eldorado Automóveis
          </span>
        </a>
      </h1>
      <div className="hidden gap-4 md:flex">
        {links.map((e, index) => {
          return <LinkScroll key={index} to={e.to} text={e.text} />;
        })}
      </div>
      <div className="flex items-center md:hidden">
        <Menu size={36} />
      </div>
    </nav>
  );
};

export default Navbar;
