import Image from "next/image";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { RxDimensions } from "react-icons/rx";

const ProjectCard = ({
  title,
  location,
  squareFeet,
  bedroomCount,
  bathroomCount,
}: {
  title: string;
  location: string;
  squareFeet?: number | string;
  bedroomCount?: number;
  bathroomCount?: string | number;
}) => {
  return (
    <div className="overflow-hidden rounded-xl shadow-lg">
      <Image
        src="https://dummyimage.com/500x400"
        className="h-[200px] object-cover"
        alt={title}
        width={500}
        height={400}
      />
      <div className="p-5 space-y-3 h-[120px]">
        <h4 className="text-primary text-xl">{title}</h4>

        <div className="flex gap-5  text-foreground/70 ">
          <span className="flex items-center gap-1">
            <RxDimensions size={13} />
            {squareFeet}
          </span>
          ●
          <span className="flex items-center gap-1">
            <IoBedOutline size={13} />
            {bedroomCount}
          </span>
          ●
          <span className="flex items-center gap-1">
            <LuBath size={13} />
            {bathroomCount}
          </span>
        </div>
      </div>
      <div className="bg-foreground/15 flex text-primary items-center p-5 py-3">
        <CiLocationOn size={18} /> {location}
      </div>
    </div>
  );
};

export default ProjectCard;