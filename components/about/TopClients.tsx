import Title from "@/components/elements/Title";
import { section } from "framer-motion/client";
import Image from "next/image";
import React from "react";

const content = [
  {
    name: "Comfort Agba Foundation",
    src: "/media/top-clients/Comfort Agba Foundation.png",
  },
  { name: "Greenville LNG", src: "/media/top-clients/Greenville_LNG.png" },
  { name: "Lenzo Homes", src: "/media/top-clients/Lenzo Homes.jpeg" },
  { name: "Sahara Group", src: "/media/top-clients/sahara-group.jpg" },
  { name: "Up Flat", src: "/media/top-clients/up flat.jpg" },
];

const TopClients = () => {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <Title>Top Clients</Title>
        <h3 className="text-3xl md:text-4xl md:w-1/2 font-bold">
          Trusted by Leading Brands and Visionary Homeowners.
        </h3>
      </div>
      <div className="my-12 flex flex-wrap gap-6 justify-center">
        {content.map((each, index) => (
          <div className="space-y-3 text-center" key={index}>
            <Image
              src={each.src}
              alt={each.name}
              width={400}
              height={300}
              className="w-[120px] h-[100px] md:w-[200px] object-cover md:h-[150px]"
            />
            <p>{each.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopClients;
