import { useState } from "react";
import { ExpandBtn } from "../Buttons";

const ServiceCard = ({ icon, title, description }: ServiceCard) => {
  const [showText, setShowText] = useState(false);

  const handleShowText = () => {
    setShowText(!showText);
  };

  return (
    <div className="relative flex flex-col items-center max-w-sm min-h-[336px] py-4 px-5 rounded-2xl bg-gradient-to-r from-[#00315340] to-[#2c689c1a] shadow-[2px_5px_5px_rgba(36,36,36,0.25)] hover:scale-[1.02] transition-all hover:bg-[#1E5E8D1A]">
      <div className="relative w-24 h-24">
        <div className="pt-2 flex justify-center items-center before:absolute before:top-0 before:left-2 before:w-[110%] before:h-[105%] before:rounded-full before:bg-gradient-to-r from-[#00315340] to-[#2c689c1a] before:shadow-[2px_5px_5px_rgba(36,36,36,0.25)]">
          {icon}
        </div>
      </div>

      <h1 className="text-xl pb-2 pt-4 whitespace-nowrap text-accent-500">
        {title}
      </h1>

      <div className={`box ${showText ? "open" : ""}`}>
        <p className={`preview-text text-left ${showText ? "show-text" : ""}`}>
          {description}
        </p>
      </div>

      <ExpandBtn onClick={handleShowText} showText={showText} />
    </div>
  );
};

export default ServiceCard;
