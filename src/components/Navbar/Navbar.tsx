import { useEffect, useState } from "react";
import { LinkScroll } from "../Links";
import { Menu } from "lucide-react";
import "./navbar-style.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
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

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav") as HTMLElement | null;
      const navHeight = nav ? nav.clientHeight : 0;

      const sections = links.map((link) => link.to);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isHomeSection = section === "home";
          const isFullyVisible =
            rect.top <= navHeight && rect.bottom > navHeight;
          console.log(
            "Section:",
            section,
            "Chegou na section?: ",
            rect.top <= navHeight,
            "Tá AINDA na section? ",
            rect.bottom > navHeight,
            "TOP: ",
            rect.top,
            "BOTTOM: ",
            rect.bottom
          );
          // For the "home" section, check if it's at the top of the page
          if (
            isHomeSection &&
            rect.top <= 0 &&
            rect.bottom > 56.79999923706055
          ) {
            setActiveSection("home");
          } else if (isFullyVisible && !isHomeSection) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [links]);

  return (
    <nav className="max-w-[84rem] px-4 py-2 flex gap-4 mx-auto items-center justify-between">
      <h1 className="text-4xl text-accent-500">
        <a href="#home" data-nav="home" title="Ir para Home">
          ea
          <span className="hidden px-2 text-sm text-zinc-200 sm:inline">
            Eldorado Automóveis
          </span>
        </a>
      </h1>
      <ul className="hidden md:flex">
        {links.map((e, index) => {
          return (
            <li key={index} className={e.to === activeSection ? "active" : ""}>
              <LinkScroll to={e.to} text={e.text} />
            </li>
          );
        })}
      </ul>
      <div className="flex items-center md:hidden">
        <Menu size={36} />
      </div>
    </nav>
  );
};

export default Navbar;
