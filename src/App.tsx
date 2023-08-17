import Home from "./components/Home";
import Insurance from "./components/Insurance";
import Services from "./components/Services";
import "./styles/main.css";
import Navbar from "~/components/Navbar/Navbar";

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

        <section className="h-screen w-full bg-blue" id="about">
          {/* About content */}
        </section>

        <section
          style={{ height: "100vh", width: "100%", background: "purple" }}
          id="contact"
        >
          {/* Contact content */}
        </section>

        <section
          style={{ height: "100vh", width: "100%", background: "orange" }}
          id="gallery"
        >
          {/* Gallery content */}
        </section>
      </main>
    </>
  );
}

export default App;
