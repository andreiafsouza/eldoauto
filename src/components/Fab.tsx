import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const Fab = () => {
  const [showFab, setShowFab] = useState(false);

  const handleScroll = () => {
    const scrollThreshold = window.innerHeight * 0.8;
    if (window.scrollY > scrollThreshold) {
      setShowFab(true);
    } else {
      setShowFab(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      className={
        showFab
          ? "p-1 text-sky-300 bg-sky-950 bg-opacity-10 opacity-90 fixed bottom-2 right-2 lg:bottom-4 lg:right-4 z-50 rounded-full mix-blend-difference transition-opacity duration-500 hover:opacity-100 hover:bg-opacity-20"
          : "opacity-0"
      }
      href="#home"
      title="Ir para Home"
    >
      <ChevronUp size={48} className=" " />
    </a>
  );
};

export default Fab;
