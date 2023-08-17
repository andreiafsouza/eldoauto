import { ChevronLeft } from "lucide-react";
import { ComponentProps } from "react";

type CaretButtonProps = ComponentProps<"button">;

const CaretLeftBtn = ({ ...props }: CaretButtonProps) => {
  return (
    <button
      className="absolute ml-5 flex items-center justify-center w-12 h-12 bg-transparent rounded-xl text-gray cursor-pointer select-none shadow-[2px_4px_5px_rgba(0,0,0,0.4)] hover:text-accent-opacity transition-colors"
      {...props}
    >
      <ChevronLeft size={44} />
    </button>
  );
};

export default CaretLeftBtn;
