"use client";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectPreviewModal from "@/components/projects/ProjectPreviewModal";
import React, { useState } from "react";

export const projectsData = [
  {
    images: [
      "/media/projects/proposed-guest-halet-and-bq-in-abuja/1.jpg",
      "/media/projects/proposed-guest-halet-and-bq-in-abuja/2.jpg",
      "/media/projects/proposed-guest-halet-and-bq-in-abuja/3.jpg",
      "/media/projects/proposed-guest-halet-and-bq-in-abuja/4.jpg",
      "/media/projects/proposed-guest-halet-and-bq-in-abuja/5.jpg",
      "/media/projects/proposed-guest-halet-and-bq-in-abuja/6.jpg",
      "/media/projects/proposed-guest-halet-and-bq-in-abuja/7.jpg",
      "/media/projects/proposed-guest-halet-and-bq-in-abuja/8.jpg",
    ],
    title: "Proposed guest chalet and Boys Quaters",
    location: "Abuja",
  },
  {
    images: [
      "/media/projects/completed-mansion-renovation/1.jpg",
      "/media/projects/completed-mansion-renovation/2.jpg",
      "/media/projects/completed-mansion-renovation/3.jpg",
      "/media/projects/completed-mansion-renovation/4.jpg",
      "/media/projects/completed-mansion-renovation/5.jpg",
      "/media/projects/completed-mansion-renovation/6.jpg",
      "/media/projects/completed-mansion-renovation/7.jpg",
      "/media/projects/completed-mansion-renovation/8.jpg",
      "/media/projects/completed-mansion-renovation/9.jpg",
      "/media/projects/completed-mansion-renovation/10.jpg",
      "/media/projects/completed-mansion-renovation/11.jpg",
      "/media/projects/completed-mansion-renovation/12.jpg",
    ],
    title: "Masion Renovation and Decoration",
    location: "Asokoro, Abuja",
  },
  {
    images: [
      "/media/projects/proposed-3bedroom-bungalow/1.png",
      "/media/projects/proposed-3bedroom-bungalow/2.png",
      "/media/projects/proposed-3bedroom-bungalow/3.png",
      "/media/projects/proposed-3bedroom-bungalow/4.png",
      "/media/projects/proposed-3bedroom-bungalow/5.png",
      "/media/projects/proposed-3bedroom-bungalow/6.png",
      "/media/projects/proposed-3bedroom-bungalow/7.png",
      "/media/projects/proposed-3bedroom-bungalow/8.png",
      "/media/projects/proposed-3bedroom-bungalow/9.png",
      "/media/projects/proposed-3bedroom-bungalow/10.png",
      "/media/projects/proposed-3bedroom-bungalow/11.png",
      "/media/projects/proposed-3bedroom-bungalow/12.png",
      "/media/projects/proposed-3bedroom-bungalow/13.png",
    ],
    title: "Proposed 3 bedroom Bungalow",
    location: "Jimeta, Yola",
  },
  {
    images: [
      "/media/projects/outdoor-kitchen-and-store/1.jpg",
      "/media/projects/outdoor-kitchen-and-store/2.jpg",
      "/media/projects/outdoor-kitchen-and-store/3.jpg",
      "/media/projects/outdoor-kitchen-and-store/4.jpg",
      "/media/projects/outdoor-kitchen-and-store/5.jpg",
      "/media/projects/outdoor-kitchen-and-store/6.jpg",
      "/media/projects/outdoor-kitchen-and-store/7.jpg",
      "/media/projects/outdoor-kitchen-and-store/8.jpg",
    ],
    title: "Outdoor kitchen and Store",
    location: "Asokoro, Abuja",
  },
  {
    images: [
      "/media/projects/completed-3bedroom-in-baraks-road/1.jpg",
      "/media/projects/completed-3bedroom-in-baraks-road/2.jpg",
      "/media/projects/completed-3bedroom-in-baraks-road/3.jpg",
      "/media/projects/completed-3bedroom-in-baraks-road/4.jpg",
      "/media/projects/completed-3bedroom-in-baraks-road/5.jpg",
      "/media/projects/completed-3bedroom-in-baraks-road/6.jpg",
      "/media/projects/completed-3bedroom-in-baraks-road/7.jpg",
      "/media/projects/completed-3bedroom-in-baraks-road/8.jpg",
      "/media/projects/completed-3bedroom-in-baraks-road/9.jpg",
      "/media/projects/completed-3bedroom-in-baraks-road/10.jpg",
    ],
    title: "Outdoor kitchen and Store",
    location: "Asokoro, Abuja",
  },
  {
    images: [
      "/media/projects/dog-kennel/1.jpg",
      "/media/projects/dog-kennel/2.jpg",
    ],
    title: "Dog Kennel",
    location: "Abuja",
  },
];
const ProjectsSection = () => {
  const [showPreviewProjectModal, setShowPreviewProjectModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projectsData.map((each, index) => (
          <ProjectCard
            images={each.images}
            key={index}
            title={each.title}
            location={each.location}
            onClick={() => {
              // setSelectedImage(each.image);
              setShowPreviewProjectModal(true);
            }}
          />
        ))}
      </div>
      <ProjectPreviewModal
        isOpen={showPreviewProjectModal}
        setIsOpen={setShowPreviewProjectModal}
        image={selectedImage as string}
      />
    </>
  );
};

export default ProjectsSection;
