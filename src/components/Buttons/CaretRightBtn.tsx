import { ChevronRight } from "lucide-react";
import { ComponentProps } from "react";

type CaretButtonProps = ComponentProps<"button">;

const CaretRightBtn = ({ ...props }: CaretButtonProps) => {
  return (
    <button
      className="absolute right-0 mr-5 flex items-center justify-center w-12 h-12 bg-transparent rounded-xl text-gray cursor-pointer select-none shadow-[2px_4px_5px_rgba(0,0,0,0.4)] hover:text-accent-opacity transition-colors"
      {...props}
    >
      <ChevronRight size={44} />
    </button>
  );
};

export default CaretRightBtn;
