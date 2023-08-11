import Home from "./components/Home";
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
    <div style={{ position: "relative" }}>
      <Navbar />
      <main>
        <Home />

        <section className="h-screen w-full bg-blue" id="services">
          {/* Services content */}
        </section>

        <section
          style={{ height: "100vh", width: "100%", background: "green" }}
          id="insurance"
        >
          {/* Insurance content */}
        </section>

        <section
          style={{ height: "100vh", width: "100%", background: "yellow" }}
          id="about"
        >
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
    </div>
  );
}

export default App;
