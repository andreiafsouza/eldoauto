import React from "react";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="relative flex flex-col items-center max-w-[256px] py-4 px-5 rounded-2xl shadow-[2px_5px_5px_rgba(36,36,36,0.25)] text-zinc-300 border-[rgba(36,36,36,0.25)] border-[0.1rem] hover:scale-[1.02] transition-all cursor-pointer hover:bg-[#1E5E8D1A]">
      <div className="w-[60%] h-[45%] pt-2 flex justify-start rounded-full bg-gradient-to-r from-[#00315340] to-[#2c689c1a] shadow-[2px_5px_5px_rgba(36,36,36,0.25)]">
        {icon}
      </div>

      <h1 className="text-xl py-2 whitespace-nowrap">{title}</h1>

      <div className="text-left">{description}</div>
    </div>
  );
};

export default ServiceCard;
