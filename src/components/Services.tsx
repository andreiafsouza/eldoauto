import { HammerIcon } from "./Icons";
import { ServiceCard } from "./Cards";

const Services = () => {
  return (
    <section className="h-screen w-full bg-blue" id="services">
      <div className="max-w-[84rem] border p-4 mx-auto">
        <h1 className="text-2xl md:text-4xl text-center">Serviços</h1>
        <h2 className="md:text-xl text-center py-4">
          Conheça mais sobre os serviços que oferecemos.
        </h2>
        <ServiceCard
          title="Lanternagem"
          description=" A lanternagem consiste em desamassar uma parte da lataria que esteja
        afetada por danos ou impactos."
          icon={<HammerIcon />}
        />
      </div>
    </section>
  );
};

export default Services;
