import React from "react";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="relative bg-black bg-opacity-10 flex flex-col items-center max-w-xs py-4 px-5 rounded-2xl shadow-[2px_5px_5px_rgba(0,0,0,0.25)] text-zinc-300">
      <div>{icon}</div>
      <div>
        <h1>{title}</h1>
      </div>
      <div>{description}</div>
    </div>
  );
};

export default ServiceCard;
