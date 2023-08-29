import { Phone, Mail } from "lucide-react";
import { Loader } from "@googlemaps/js-api-loader";
import { useEffect } from "react";
import { WhatsIcon } from "./Icons";

const Contact = () => {
  const initialPosition = { lat: -19.92422617157198, lng: -44.073141347230525 };
  const apiKey = import.meta.env.VITE_REACT_APP_MAPS_API_KEY;
  const zoom = 19;

  const loader = new Loader({
    id: "__googleMapsScriptId",
    apiKey: apiKey,
    version: "weekly",
    libraries: ["places", "marker"],
  });

  const mapOptions = {
    center: initialPosition,
    zoom: zoom,
    mapId: "69f8d0e70578bf1",
  };

  useEffect(() => {
    const mapElement = document.getElementById("map") as HTMLElement;
    loader
      .importLibrary("maps")
      .then(async ({ Map }) => {
        const map = new Map(mapElement, mapOptions);
        const { AdvancedMarkerElement } = await loader.importLibrary("marker");
        new AdvancedMarkerElement({ map, position: mapOptions.center });
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <section className="py-10 lg:py-20 w-full" id="contact">
      <div className="section px-4 max-w-[84rem] mx-auto">
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-14">
          <div id="map" className="w-full h-[34rem] lg:h-full rounded-xl" />

          <div className="row-start-1 lg:col-start-2">
            <h1 className="font-semibold text-5xl lg:text-6xl text-sky-300 text-center lg:text-left">
              Contato
            </h1>
            <h2 className="text-center lg:text-left text-lg md:text-xl pt-3 pb-4">
              Entre em contato para mais informações ou para agendar um
              orçamento.
            </h2>

            <div className="grid gap-4 grid-cols-1 xl:grid-cols-2">
              <div className="flex flex-col gap-4">
                <a
                  className="text-center bg-gradient-to-r from-[#00315340] to-[#2c689c1a] shadow-[2px_5px_5px_rgba(36,36,36,0.25)] transition-colors border-[1px] border-transparent hover:border-sky-300 hover:text-sky-300 hover:bg-opacity-5 opacity-90 hover:opacity-100 w-full py-7 px-11 text-sky-300 rounded-2xl "
                  title="Mandar mensagem para Eldorado Automóveis"
                  href="https://wa.me/553133512202"
                >
                  <WhatsIcon className="fill-sky-300 mx-auto" />
                  WhatsApp
                </a>
                <a
                  className="text-center bg-gradient-to-r from-[#00315340] to-[#2c689c1a] shadow-[2px_5px_5px_rgba(36,36,36,0.25)] transition-colors border-[1px] border-transparent hover:border-sky-300 hover:text-sky-300 hover:bg-opacity-5 opacity-90 hover:opacity-100 w-full py-7 px-11 text-sky-300 rounded-2xl "
                  title="Ligar para 3351-2202"
                  href="tel:+553133512202"
                >
                  <Phone size={48} className="mx-auto" />
                  Ligar
                </a>
                <a
                  className="text-center bg-gradient-to-r from-[#00315340] to-[#2c689c1a] shadow-[2px_5px_5px_rgba(36,36,36,0.25)] transition-colors border-[1px] border-transparent hover:border-sky-300 hover:text-sky-300 hover:bg-opacity-5 opacity-90 hover:opacity-100 w-full py-7 px-11 text-sky-300 rounded-2xl "
                  title="Enviar email para eldoauto@gmail.com"
                  href="mailto:fsouza.andreia@gmail.com"
                >
                  <Mail size={48} className="mx-auto" />
                  E-mail
                </a>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex justify-center md:justify-normal w-full text-center lg:text-left text-sm lg:text-lg bg-gradient-to-r from-[#00315340] to-[#2c689c1a] shadow-[2px_5px_5px_rgba(36,36,36,0.25)] rounded-2xl">
                  <p className="p-4 flex-1 md:flex-none bg-white bg-opacity-10 font-semibold drop-shadow-text rounded-2xl">
                    Telefone
                  </p>
                  <p className="p-4 flex-1 md:flex-none">(31) 3351-2202</p>
                </div>
                <div className="flex justify-center md:justify-normal w-full text-center lg:text-left text-sm lg:text-lg bg-gradient-to-r from-[#00315340] to-[#2c689c1a] shadow-[2px_5px_5px_rgba(36,36,36,0.25)] rounded-2xl">
                  <p className="p-4 flex-1 md:flex-none bg-white bg-opacity-10 font-semibold drop-shadow-text rounded-2xl">
                    Email
                  </p>
                  <p className="p-4 flex-1 md:flex-none">eldoauto@gmail.com</p>
                </div>

                <div className="flex w-full text-center text-sm lg:text-lg bg-gradient-to-r from-[#00315340] to-[#2c689c1a] shadow-[2px_5px_5px_rgba(36,36,36,0.25)] rounded-2xl">
                  <p className="p-4">
                    Av. João César de Oliveira, 5555 - Beatriz, Contagem - MG.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
