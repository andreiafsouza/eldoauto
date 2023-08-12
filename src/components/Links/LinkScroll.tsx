import useSmoothScroll from "~/hooks/useSmoothScroll";

type LinkProps = {
  to: string;
  text: string;
  variant?: "btn" | "link";
};

const LinkScroll = ({ to, text, variant }: LinkProps) => {
  const smoothScroll = useSmoothScroll();

  smoothScroll;

  return (
    <a
      className={
        variant && variant === "btn"
          ? "bg-black bg-opacity-20 hover:bg-opacity-10 transition-colors text-lg text-zinc-200 rounded-3xl whitespace-nowrap py-2 px-8 shadow-lg flex items-center justify-center w-fit mx-auto"
          : "text-base text-zinc-200 drop-shadow-lg"
      }
      href={`#${to}`}
      data-nav={to}
      title={`Ir para ${text}`}
    >
      {text}
    </a>
  );
};

export default LinkScroll;
