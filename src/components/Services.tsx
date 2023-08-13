import { Hammer } from "lucide-react";
import { ServiceCard } from "./Cards";

const Services = () => {
  return (
    <section className="h-screen w-full bg-blue" id="services">
      <div className="max-w-[84rem] px-4 mx-auto">
        <ServiceCard
          title="Lanternagem"
          description=" A lanternagem consiste em desamassar uma parte da lataria que esteja
        afetada por danos ou impactos."
          icon={<Hammer />}
        />
      </div>
    </section>
  );
};

export default Services;
