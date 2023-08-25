import { Phone, Mail } from "lucide-react";
import { Loader } from "@googlemaps/js-api-loader";
import { useEffect } from "react";

const Contact = () => {
  const initialPosition = { lat: -19.92422617157198, lng: -44.073141347230525 };
  const markerPosition = { lat: -19.92422617157198, lng: -44.073141347230525 };
  const apiKey = import.meta.env.VITE_REACT_APP_MAPS_API_KEY;
  const zoom = 18;
  const placeId = "";

  const loader = new Loader({
    apiKey: apiKey,
    version: "weekly",
    libraries: ["places", "marker"],
  });
  const mapOptions = {
    center: initialPosition,
    zoom: zoom,
    markerPosition: markerPosition,
  };

  useEffect(() => {
    const map = document.getElementById("map") as HTMLElement;
    loader
      .importLibrary("maps")
      .then(({ Map }) => {
        new Map(map, mapOptions);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <section className="py-10 lg:py-20 w-full bg-sky-950" id="contact">
      <div className="section px-4 max-w-[84rem] mx-auto">
        <div>
          <h1 className="text-4xl md:text-6xl text-sky-300">Contato</h1>
          {/*  <h2 className="text-lg md:text-xl py-4">
            Av. João César de Oliveira, 5555 - Beatriz, Contagem - MG.
          </h2> */}
        </div>

        <div className="py-4 flex gap-4">
          <a
            className="bg-black bg-opacity-30 transition-colors border-[1px] border-transparent hover:border-sky-300 hover:text-sky-300 hover:bg-opacity-5 opacity-90 hover:opacity-100 w-fit py-10 px-11 text-sky-300 rounded-2xl "
            title="Ligar para 3351-2202"
            href="tel:+553133512202"
          >
            <Phone size={56} strokeWidth={1} />
          </a>
          <a
            className="bg-black bg-opacity-30 transition-colors border-[1px] border-transparent hover:border-sky-300 hover:text-sky-300 hover:bg-opacity-5 opacity-90 hover:opacity-100 w-fit py-10 px-11 text-sky-300 rounded-2xl "
            title="Enviar email para eldoauto@gmail.com"
            href="mailto:fsouza.andreia@gmail.com"
          >
            <Mail size={56} strokeWidth={1} />
          </a>
        </div>

        <div id="map" className="w-full h-96" />
      </div>
    </section>
  );
};

export default Contact;
