import { ComponentProps } from "react";

type LinkProps = ComponentProps<"a"> & {
  text: string;
  variant?: "btn" | "plain";
};

const LinkExternal = ({ text, variant, ...props }: LinkProps) => {
  return (
    <a
      className={
        variant && variant === "btn"
          ? "bg-black bg-opacity-20 hover:bg-opacity-5 opacity-90 hover:opacity-100 focus-visible:opacity-100 transition-colors text-sm rounded-3xl py-2 px-8 shadow-lg flex items-center justify-center w-fit mx-auto text-center border-[1px] border-transparent hover:border-sky-300 md:whitespace-nowrap"
          : "text-base drop-shadow-lg opacity-90 hover:opacity-100 focus-visible:opacity-100"
      }
      {...props}
    >
      {text}
    </a>
  );
};

export default LinkExternal;
