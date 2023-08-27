import { useEffect, useState, useRef } from "react";
import { LinkScroll } from "./Links";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [openMenu, setOpenMenu] = useState(false);
  const menu = useRef<HTMLUListElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
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

  const handleMenuButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) => link.to);
      for (const section of sections) {
        const element = document.getElementById(section) as HTMLElement | null;
        if (element && window.scrollY >= element.offsetTop - 60) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [links]);

  const handleClickOutsideMenu = (event: MouseEvent) => {
    if (
      menu.current &&
      !menu.current.contains(event.target as Node) &&
      !menuButton.current?.contains(event.target as Node)
    ) {
      setOpenMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideMenu);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, []);

  return (
    <header className="sticky top-0 bg-blue z-[9999]">
      <div className="header-container max-w-[84rem] px-4 py-2 flex gap-4 mx-auto items-center justify-between">
        <h1 className="text-4xl text-sky-300">
          <a href="#home" data-nav="home" title="Ir para Home">
            ea
            <span className="hidden px-2 text-lg text-zinc-200 sm:inline">
              Eldorado Automóveis
            </span>
          </a>
        </h1>

        <nav className="">
          <button
            className="flex items-center md:hidden transition-colors"
            ref={menuButton}
            id="menu"
            aria-controls="primary-navigation"
            aria-expanded={openMenu}
            onClick={handleMenuButton}
          >
            <Menu size={36} />
          </button>
          <ul
            //@ts-ignore
            onClick={handleMenuButton}
            className="nav-list"
            id="primary-navigation"
            aria-expanded={openMenu}
            ref={menu}
          >
            {links.map((e, index) => {
              return (
                <li
                  key={index}
                  className={e.to === activeSection ? "active" : ""}
                >
                  <LinkScroll
                    href={`#${e.to}`}
                    //@ts-ignore
                    onClick={handleMenuButton}
                  >
                    {e.text}
                  </LinkScroll>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
