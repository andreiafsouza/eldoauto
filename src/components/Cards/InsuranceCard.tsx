import { Car, ShieldCheck } from "lucide-react";
import { LinkExternal } from "../Links";

const InsuranceCard = ({ name, link }: InsuranceCard) => {
  return (
    <div className="flex-1 relative flex flex-col gap-4 items-center max-w-[320px] py-4 px-5 rounded-2xl bg-gradient-to-r from-[#00315340] to-[#2c689c1a] shadow-[2px_5px_5px_rgba(36,36,36,0.25)]">
      <div className="w-full flex gap-4 justify-center flex-wrap sm:flex-nowrap">
        <h2 className="flex items-center px-4 py-2 text-lg md:text-xl md:whitespace-nowrap text-accent-500 rounded-2xl bg-gradient-to-r from-[#00315340] to-[#2c689c1a] shadow-[2px_5px_5px_rgba(36,36,36,0.25)]">
          {name}
        </h2>

        <div className=" px-4 py-2 flex justify-center items-center rounded-full bg-gradient-to-r from-[#00315340] to-[#2c689c1a] shadow-[2px_5px_5px_rgba(36,36,36,0.25)]">
          <Car size={36} className="text-accent-500" strokeWidth={1} />
          <ShieldCheck size={32} className="text-accent-500" strokeWidth={1} />
        </div>
      </div>

      <LinkExternal
        text="Quer conhecer mais? Clique aqui."
        href={link}
        title={`Ir para ${name}`}
        target="_blank"
        variant="btn"
      />
    </div>
  );
};

export default InsuranceCard;
