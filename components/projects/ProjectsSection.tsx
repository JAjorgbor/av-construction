"use client";
import LightBox from "@/components/elements/LightBox";
import ProjectCard from "@/components/projects/ProjectCard";
import Image from "next/image";
import { useState } from "react";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
      "/media/projects/completed-mansion-renovation/13.jpg",
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
      "/media/projects/outdoor-kitchen-and-store/9.jpg",
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
    title: "Completed 3 Bedroom In Baraks Road",
    location: "Asokoro, Abuja",
  },
  {
    images: [
      "/media/projects/dog-kennel/1.jpg",
      "/media/projects/dog-kennel/2.png",
      "/media/projects/dog-kennel/3.png",
      "/media/projects/dog-kennel/4.png",
      "/media/projects/dog-kennel/5.png",
      "/media/projects/dog-kennel/6.png",
    ],
    title: "Dog Kennel",
    location: "Abuja",
  },
  {
    images: [
      "/media/projects/proposed-duplex/1.jpg",
      "/media/projects/proposed-duplex/2.jpg",
      "/media/projects/proposed-duplex/3.jpg",
      "/media/projects/proposed-duplex/4.jpg",
      "/media/projects/proposed-duplex/5.jpg",
    ],
    title: "Proposed 5 Bedroom Duplex",
    location: "Abuja",
  },
];
const ProjectsSection = () => {
  const [selectedImages, setSelectedImages] = useState([""]);
  const [showLightBox, setShowLightBox] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
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
              setSelectedImages(each.images);
              setShowLightBox(true);
            }}
          />
        ))}
      </div>
      {/* <>
        <Swiper
          style={
            {
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            } as any
          }
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            {projectsData[0].images.map((each, index) => (
              <Image
                key={index}
                src={each}
                alt="image"
                height={500}
                width={10000}
              />
            ))}
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper as any}
          spaceBetween={10}
          slidesPerView={4}
          //   freeMode={true}
          watchSlidesProgress={true}
          modules={[Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            {projectsData[0].images.map((each, index) => (
              <Image
                key={index}
                src={each}
                alt="image"
                height={100}
                width={200}
              />
            ))}
          </SwiperSlide>
        </Swiper>
      </> */}
      {/* <ProjectPreviewModal
        isOpen={showPreviewProjectModal}
        setIsOpen={setShowLightBox}
        image={selectedImage as string}
      /> */}
      <LightBox
        images={selectedImages}
        isOpen={showLightBox}
        setIsOpen={setShowLightBox}
      />
    </>
  );
};

export default ProjectsSection;
