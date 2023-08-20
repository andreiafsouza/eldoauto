import { ComponentProps } from "react";
import { ChevronRight } from "lucide-react";

type ButtonProps = ComponentProps<"button"> & {
  children: React.ReactNode;
};

const PrimaryBtn = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className={
        "bg-black bg-opacity-30 hover:bg-opacity-5 opacity-90 hover:opacity-100 focus-visible:opacity-100 transition-colors rounded-3xl py-3 px-5 shadow-lg flex items-center justify-center w-fit text-center border-[1px] border-transparent hover:border-sky-300 hover:text-sky-300 md:whitespace-nowrap"
      }
      {...props}
    >
      {children}
      <ChevronRight />
    </button>
  );
};

export default PrimaryBtn;
