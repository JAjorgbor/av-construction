"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { Navigation } from "swiper/modules";

const TestimonialsSection = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const content = [
    {
      name: "Mr. Temitope Shunobi",
      comment: (
        <>
          I am impressed with Albert and his work in my house. He is young and
          knows what he is looking for in life, I recommend him.
        </>
      ),
      company: "Co-founder and Executive Director of Sahara Group",
    },
    {
      name: "Mr. Samson Ghani Kato",
      comment: (
        <>
          Albert and his company are doing very well. I am very impressed by
          their work ethic and integrity. I highly recommend AV.
        </>
      ),
      company: "Sahara Group",
    },
    {
      name: "Mr. Seun",
      comment: <>I recommend AV.</>,
      company: "M.D Centurium",
    },
    {
      name: "Pst. Engr. Opeyemi J",
      comment: (
        <>
          AV Constructions is simply the best choice for construction. Full of
          young and talented individuals.
        </>
      ),
    },
    {
      name: "Mr.  Kenna",
      comment: <>Your work is sharp, topnotch and I love it.</>,
      company: "GreenVille LNG",
    },
    {
      name: "Mr. Nabil",
      comment: (
        <>
          Thank you Mr. Albert and the entire team for a work well-done. I am
          very grateful.
        </>
      ),
      company: "Greenville LNG",
    },
    {
      name: "Mr. Idris",
      comment: <>Superb and excellent work.</>,
      company: "M.D Aik concepts LTD",
    },
    {
      name: "Emmanuel C. Vincent",
      comment: <>OMO baba wuna too sabi. Highly recommended always.</>,
    },
    {
      name: "Birma J. J",
      comment: (
        <>
          Wow, you guys have really gone so far in such a short time. I am very
          impressed and would surely recommend you my friend.
        </>
      ),
    },
    {
      name: "Mrs. Susuan Kunle",
      comment: (
        <>
          I am glad Mr. Samson recommended you and not someone else. I love the
          final output and would surely call you guys back.
        </>
      ),
    },
  ];

  return (
    <div className="">
      <div className="col-span-12 relative">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            720: {
              slidesPerView: 2,
            },
            1204: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
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
          {content.map((each, index) => (
            <SwiperSlide key={index}>
              <div className="h-80 md:h-64 !text-start w-full">
                <div className=" p-5 shadow-lg space-y-3 h-56 md:h-52 flex gap-3 flex-col">
                  <p className="text-foreground flex-grow">{each.comment}</p>
                  <div className="flex gap-2 items-center">
                    <span className="rounded-full text-white bg-secondary  grid items-center p-2">
                      <FiUser size={20} />
                    </span>
                    <div className="space-y-1 text-sm">
                      <p className="font-bold">{each.name}</p>
                      <p className="text-primary">{each.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* If we need navigation buttons */}
        <div className="absolute bottom-0 md:-bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-x-3  md:block z-40">
          <button
            type="button"
            ref={prevRef}
            className=" p-3 rounded-full bg-primary  text-white hover:bg-secondary top-auto bottom-[85px] left-[30px] disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <FaChevronLeft />
          </button>
          <button
            ref={nextRef}
            type="button"
            className="p-3 rounded-full bg-primary  text-white hover:bg-secondary top-auto bottom-[85px] left-[85px] disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
