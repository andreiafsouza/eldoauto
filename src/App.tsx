import { useEffect, useRef } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Insurance from "./components/Insurance";
import Services from "./components/Services";
import Navbar from "~/components/Navbar";
import Contact from "./components/Contact";
import "./styles/main.css";

function App() {
  const sectionRefs = useRef<NodeListOf<HTMLElement> | null>(null); // Ref to store section elements

  useEffect(() => {
    // Get all sections and store the ref
    sectionRefs.current = document.querySelectorAll(".section");
    //set nav height variable
    const navigation = document.querySelector("nav") as HTMLElement;
    const navigationHeight = navigation.offsetHeight;

    document.documentElement.style.setProperty(
      "--scroll-padding",
      navigationHeight + "px"
    );

    const sectionObserverCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade");
        } /* else {
          entry.target.classList.remove("fade");
        } */
      });
    };

    // Options for the Intersection Observer
    const sectionOptions: IntersectionObserverInit = {
      rootMargin: navigationHeight + "px",
    };

    // Create the Intersection Observer
    const sectionObserver = new IntersectionObserver(
      sectionObserverCallback,
      sectionOptions
    );

    // Observe each section
    if (sectionRefs.current) {
      sectionRefs.current.forEach((section) => {
        sectionObserver.observe(section);
      });
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (sectionRefs.current) {
        sectionRefs.current.forEach((section) => {
          sectionObserver.unobserve(section);
        });
      }
    };
  }, []);

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

        <Contact />

        <section className="w-full h-[800px] bg-sky-950" id="gallery">
          {/* Gallery content */}
        </section>
      </main>
    </>
  );
}

export default App;
