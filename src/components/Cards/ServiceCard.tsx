import { useState } from "react";
import { ChevronDown } from "lucide-react";

const ServiceCard = ({ icon, title, description, image }: ServiceCard) => {
  const [showContent, setShowContent] = useState(false);

  const handleShowContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="overflow-hidden rounded-t-2xl">
      <div className="border">
        <img src={image} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="p-4 border">
        <h2 className="text-xl text-sky-300">
          <button
            onClick={handleShowContent}
            className="w-full flex items-center justify-between"
            aria-expanded={showContent}
            aria-controls="accordion1-content"
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
          className="accordion-content"
          role="region"
          aria-labelledby="panel1-title"
          aria-hidden={!showContent}
          id="panel1-content"
        >
          <div className="overflow-hidden">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
