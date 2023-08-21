import { ComponentProps } from "react";
import { ChevronRight } from "lucide-react";

type LinkProps = ComponentProps<"a"> & {
  variant?: "btn" | "link";
};

const LinkScroll = ({ variant, ...props }: LinkProps) => {
  return (
    <a
      className={
        variant && variant === "btn"
          ? " bg-black bg-opacity-30 hover:bg-opacity-5 opacity-90 hover:opacity-100 focus-visible:opacity-100 transition-colors rounded-3xl py-3 px-5 shadow-lg flex items-center justify-center w-fit text-center border-[1px] border-transparent hover:border-sky-300 hover:text-sky-300 md:whitespace-nowrap"
          : "text-base drop-shadow-lg opacity-90 hover:opacity-100 focus-visible:opacity-100"
      }
      {...props}
    >
      {props.children}
      {variant === "btn" && <ChevronRight />}
    </a>
  );
};

export default LinkScroll;
