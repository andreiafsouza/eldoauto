const LinkScroll = ({ to, text, variant }: LinkScroll) => {
  return (
    <a
      className={
        variant && variant === "btn"
          ? "bg-black bg-opacity-20 opacity-90 hover:opacity-100 focus-visible:opacity-100 hover:bg-opacity-10 transition-colors text-lg rounded-3xl whitespace-nowrap py-2 px-8 shadow-lg flex items-center justify-center w-fit mx-auto"
          : "text-base drop-shadow-lg opacity-90 hover:opacity-100 focus-visible:opacity-100"
      }
      href={`#${to}`}
      title={`Ir para ${text}`}
    >
      {text}
    </a>
  );
};

export default LinkScroll;
