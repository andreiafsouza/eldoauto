import useSmoothScroll from "~/hooks/useSmoothScroll";

const Navbar = () => {
  useSmoothScroll();
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 1000 }}>
      <nav>
        <a href="#" data-nav="home">
          Home
        </a>
        <a href="#" data-nav="services">
          Services
        </a>
        <a href="#" data-nav="insurance">
          Insurance
        </a>
        <a href="#" data-nav="about">
          About
        </a>
        <a href="#" data-nav="contact">
          Contact
        </a>
        <a href="#" data-nav="gallery">
          Gallery
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
