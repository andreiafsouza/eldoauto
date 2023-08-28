import { useState } from "react";
import { ChevronDown } from "lucide-react";

const ServiceCard = ({ title, description }: ServiceCard) => {
  const [showContent, setShowContent] = useState(false);

  const handleShowContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div
      className={`overflow-hidden opacity-90 transition-colors hover:opacity-100 text-left border-[1px] border-transparent hover:border-sky-300 rounded-2xl ${
        showContent ? "bg-slate-800 bg-opacity-50" : ""
      }`}
    >
      <div className="p-4">
        <h2 className="text-xl text-sky-300">
          <button
            title={`Saiba mais sobre ${title}`}
            onClick={handleShowContent}
            className="pb-2 w-full flex items-center justify-between border-b-[1px]"
            aria-expanded={showContent}
            aria-controls={`service-content`}
          >
            {title}
            <ChevronDown
              className={
                showContent
                  ? "transition-transform duration-500 rotate-180"
                  : "transition-transform duration-500"
              }
            />
          </button>
        </h2>
        <div
          className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 aria-hidden:grid-rows-[0fr]"
          aria-labelledby={title}
          aria-hidden={!showContent}
          id={title}
        >
          <div className="overflow-hidden pt-2">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
