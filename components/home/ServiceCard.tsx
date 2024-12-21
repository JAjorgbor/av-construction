import type { FC, ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

const ServiceCard: FC<ServiceCardProps> = ({ icon, title, children }) => {
  return (
    <div className="p-6 space-y-5 transition-colors group hover:text-white shadow-lg hover:bg-primary duration-500">
      <span className="text-6xl text-primary group-hover:text-white">
        {icon}
      </span>
      <h3 className="text-2xl font-bold uppercase">{title}</h3>
      <p className="text-foreground group-hover:text-white">{children}</p>
    </div>
  );
};
export default ServiceCard;
