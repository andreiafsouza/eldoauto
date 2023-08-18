import About from "./components/About";
import Home from "./components/Home";
import Insurance from "./components/Insurance";
import Services from "./components/Services";
import "./styles/main.css";
import Navbar from "~/components/Navbar";

function App() {
  function setNavHeight() {
    const nav = document.querySelector("nav") as HTMLElement | null;
    const root = document.querySelector(":root") as HTMLElement | null;

    if (nav && root) {
      root.style.setProperty("--navHeight", `${nav.clientHeight}px`);
    }
  }

  window.addEventListener("resize", setNavHeight);
  window.addEventListener("DOMContentLoaded", setNavHeight);

  return (
    <>
      <header className="sticky top-0 bg-blue z-[9999]">
        <Navbar />
      </header>

      <main>
        <Home />

        <Services />

        <Insurance />

        <About />

        <section className="w-full h-[800px]  bg-sky-950" id="contact">
          {/* Contact content */}
        </section>

        <section className="w-full h-[800px] bg-sky-950" id="gallery">
          {/* Gallery content */}
        </section>
      </main>
    </>
  );
}

export default App;
