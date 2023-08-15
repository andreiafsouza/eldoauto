import useSmoothScroll from "~/hooks/useSmoothScroll";

const LinkScroll = ({ to, text, variant }: Link) => {
  const smoothScroll = useSmoothScroll();

  smoothScroll;

  return (
    <a
      className={
        variant && variant === "btn"
          ? "bg-black bg-opacity-20 hover:bg-opacity-10 transition-colors text-lg rounded-3xl whitespace-nowrap py-2 px-8 shadow-lg flex items-center justify-center w-fit mx-auto"
          : "text-base drop-shadow-lg"
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
