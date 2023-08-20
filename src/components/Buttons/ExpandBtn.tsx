import { ChevronDown, ChevronUp } from "lucide-react";
import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  showText: boolean;
};

const ExpandBtn = ({ showText, ...props }: ButtonProps) => {
  return (
    <button
      className="self-start flex mt-2 text-accent-opacity hover:text-sky-300 transition-color select-none"
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
