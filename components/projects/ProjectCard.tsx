"use client";
import Image from "next/image";
import { useRef } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { FiMaximize2 } from "react-icons/fi";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ProjectCard = ({
  title,
  onClick,
  location = "Location",
  squareFeet = 10,
  bedroomCount = 5,
  bathroomCount = 2,
  images,
}: {
  images: string[];
  title: string;
  location: string;
  squareFeet?: number | string;
  bedroomCount?: number;
  bathroomCount?: string | number;
  onClick: any;
}) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  return (
    <div
      className="overflow-hidden rounded-xl shadow-lg cursor-pointer"
      // onClick={onClick}
      tabIndex={-1}
    >
      <div className="relative">
        <Swiper
          // spaceBetween={30}
          pagination={{
            clickable: true,
            type: "fraction",
          }}
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // Swiper expects the navigation elements to exist before init
            // So we set them manually like this

            setTimeout(() => {
              if (
                prevRef.current &&
                nextRef.current &&
                swiper.params?.navigation
              ) {
                const navigationOptions = swiper.params.navigation as any;
                navigationOptions.prevEl = prevRef.current;
                navigationOptions.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            });
          }}
        >
          {images.map((each, index) => (
            <SwiperSlide key={index}>
              <Image
                src={each}
                className="h-[200px] object-cover"
                alt={title}
                width={500}
                height={400}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="p-1.5 hover:bg-secondary/30 rounded-full absolute top-2 right-2 text-white bg-primary/50 z-20">
          <FiMaximize2 size={15} />
        </button>
        <div className="absolute top-1/2 flex justify-between w-full  left-0 transform -translate-y-1/2  z-20 px-3">
          <button
            type="button"
            ref={prevRef}
            className=" p-1.5 rounded-full bg-primary  text-white hover:bg-secondary top-auto bottom-[85px] left-[30px] disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <FaChevronLeft size={15} />
          </button>
          <button
            ref={nextRef}
            type="button"
            className="p-1.5 rounded-full bg-primary  text-white hover:bg-secondary top-auto bottom-[85px] left-[85px] disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <FaChevronRight size={15} />
          </button>
        </div>
      </div>
      <div className="p-5 space-y-3 h-[90px]">
        <h4 className="text-primary text-xl">{title}</h4>
      </div>
      <div className="bg-foreground/15 flex text-primary items-center p-5 py-3">
        <CiLocationOn size={18} /> {location}
      </div>
    </div>
  );
};

export default ProjectCard;
