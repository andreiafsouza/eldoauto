import { Car, ShieldCheck } from "lucide-react";
import { LinkScroll } from "../Links";

const InsuranceCard = ({ name, link }: InsuranceCard) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-full flex gap-4 justify-center flex-wrap sm:flex-nowrap">
        <h2 className="flex-1 text-center items-center px-4 py-2 text-lg md:text-xl md:whitespace-nowrap text-sky-300 rounded-2xl bg-gradient-to-r from-[#00315340] to-[#2c689c1a] shadow-[2px_5px_5px_rgba(36,36,36,0.25)]">
          {name}
        </h2>

        <div className="px-4 py-2 flex justify-center items-center rounded-full bg-gradient-to-r from-[#00315340] to-[#2c689c1a] shadow-[2px_5px_5px_rgba(36,36,36,0.25)]">
          <Car size={36} className="text-sky-300" strokeWidth={1} />
          <ShieldCheck size={32} className="text-sky-300" strokeWidth={1} />
        </div>
      </div>

      <LinkScroll
        href={link}
        title={`Ir para ${name}`}
        target="_blank"
        variant="btn"
      >
        {`Coonheça mais`}
      </LinkScroll>
    </div>
  );
};

export default InsuranceCard;
