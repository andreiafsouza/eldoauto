import { Car, ShieldCheck } from "lucide-react";
import { LinkScroll } from "../Links";

const InsuranceCard = ({ name, link }: InsuranceCard) => {
  return (
    <div className="py-4 grid gap-2">
      <div className="text-sky-300 rounded-2xl bg-gradient-to-r from-[#00315340] to-[#2c689c1a] shadow-[2px_5px_5px_rgba(36,36,36,0.25)]">
        <h2 className="p-2 text-center text-lg md:text-xl md:whitespace-nowrap">
          {name}
        </h2>

        <div className="p-2 flex justify-center items-center">
          <Car size={36} className="text-sky-300" strokeWidth={1} />
          <ShieldCheck size={32} className="text-sky-300" strokeWidth={1} />
        </div>

        <LinkScroll
          href={link}
          title={`Ir para ${name}`}
          target="_blank"
          variant="btn"
        >
          {`Conheça mais`}
        </LinkScroll>
      </div>
    </div>
  );
};

export default InsuranceCard;
