import { useEffect, useRef } from "react";
import About from "~/components/About";
import Hero from "~/components/Hero";
import Insurance from "~/components/Insurance";
import Services from "~/components/Services";
import Navbar from "~/components/Navbar";
import Contact from "~/components/Contact";
import "~/styles/main.css";
import Footer from "~/components/Footer";
import Fab from "~/components/Fab";

function Home() {
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

    //Remove animations while resizing window
    let resizeTimer: NodeJS.Timeout | undefined;

    const removeAnimationsOnResizong = () => {
      document.body.classList.add("resize-animation-stopper");
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
      }, 400);
    };
    window.addEventListener("resize", removeAnimationsOnResizong);

    return () => {
      //clean up resize event listener
      window.removeEventListener("resize", removeAnimationsOnResizong);
      // Clean up the observer when the component unmounts
      if (sectionRefs.current) {
        sectionRefs.current.forEach((section) => {
          sectionObserver.unobserve(section);
        });
      }
    };
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Services />

        <Insurance />

        <About />

        <Contact />

        <Fab />
      </main>

      <Footer />
    </>
  );
}

export default Home;
