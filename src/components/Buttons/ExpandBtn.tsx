import { ChevronDown, ChevronUp } from "lucide-react";
import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  showText: boolean;
};

const ExpandBtn = ({ showText, ...props }: ButtonProps) => {
  return (
    <button
      className="self-start flex mt-2 opacity-70 hover:opacity-100 transition-all select-none"
      {...props}
    >
      {showText ? "Esconder" : "Continuar lendo"}
      {showText ? (
        <ChevronUp size={24} className="transition-all" />
      ) : (
        <ChevronDown size={24} className="transition-all" />
      )}
    </button>
  );
};

export default ExpandBtn;
