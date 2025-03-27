"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const TestimonialsSection = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [parentWidth, setParentWidth] = useState(0);
  const [xPosition, setXPosition] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setParentWidth(containerRef.current.offsetWidth + 20);
    }
    const handleResize = () => {
      if (containerRef.current) {
        setParentWidth(containerRef.current.offsetWidth + 20);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setXPosition(carouselIndex * Number(parentWidth));
  }, [carouselIndex, parentWidth]);

  const content = [
    {
      name: "Mr. Temitope Shunobi  Co-founder and Executive Director of Sahara Group",
      comment: (
        <>
         I am impressed with Albert and his work in my house. He is young and knows what he is looking for in life, I recommend him.
        </>
      ),
    },
    {
      name: "Mr. Samson Ghani Kato: Sahara Group",
      comment: (
        <>
          Albert and his company are doing very well. I am very impressed by their work ethic and integrity. I highly recommend AV.

        </>
      ),
    },
    {
      name: "Mr. Seun: M.D Centurium",
      comment: (
        <>
           I recommend AV.

        </>
      ),
    },
    {
      name: "Pst. Engr. Opeyemi J",
      comment: (
        <>
         AV Construction is simply the best choice for construction. Full of young and talented individuals.
        </>
      ),
    },
    {
      name: "Emmanuel C. Vincent",
      comment: (
        <>
         OMO baba wuna too sabi. Highly recommended always.

        </>
      ),
    },
    {
      name: "Birma J. J",
      comment: (
        <>
       Wow, you guys have really gone so far in such a short time. I am very impressed and would surely recommend you my friend.


        </>
      ),
    },
     {
      name: "Mr.  Kenna: GreenVille LNG",
      comment: (
        <>
       Your work is sharp, topnotch and I love it.
        </>
      ),
    },
     {
      name: "Mr. Nabil: Greenville LNG",
      comment: (
        <>
     Thank you Mr. Albert and the entire team for a work well-done. I am very grateful.
        </>
      ),
    },
     {
      name: "Mr. Idris: M.D Aik concepts LTD",
      comment: (
        <>
     Superb and excellent work.
        </>
      ),
    },
    {
      name: "Mrs. Susuan Kunle",
      comment: (
        <>
    I am glad Mr. Samson recommended you and not someone else. I love the final output and would surely call you guys back.

        </>
      ),
    },
  ];

  return (
    <div className="">
      <div className="col-span-12 relative">
        <div className="pb-[40px] md:pb-0 overflow-hidden ">
          <motion.div
            className="flex gap-3 min-w-max p-10"
            animate={{
              x: -xPosition,
            }}
            transition={{ type: "tween" }}
          >
            {content.map((each, index) => (
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(event, info) => {
                  if (info.offset.x > 100 && carouselIndex !== 0) {
                    setCarouselIndex(carouselIndex - 1); // Swiped left
                  } else if (
                    info.offset.x < -100 &&
                    carouselIndex !== content.length - 1
                  ) {
                    setCarouselIndex(carouselIndex + 1); // Swiped right
                  }
                }}
                className="relative w-[80vw] sm:max-w-sm"
                ref={containerRef}
                // style={{ width: parentWidth }}
                key={index}
              >
                {/* shape and images */}
                <div className=" p-5 shadow-lg space-y-3">
                  <p className="font-bold text-2xl">Title</p>
                  <p className="text-foreground">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quisquam dolorem assumenda perspiciatis neque, ad quibusdam
                    est excepturi
                  </p>
                  <div className="flex gap-2 items-center">
                    <Image
                      className="rounded-full size-12"
                      src="https://dummyimage.com/100x100"
                      alt="testimonial"
                      width={100}
                      height={100}
                    />
                    <div className="space-y-1 text-sm">
                      <p className="font-bold">{each.name}</p>
                      <p className="text-primary">Company Name</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {/* If we need navigation buttons */}
          <div className="absolute bottom-0 md:-bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-x-3  md:block">
            <button
              type="button"
              onClick={() =>
                carouselIndex !== 0 ? setCarouselIndex(carouselIndex - 1) : null
              }
              className=" p-3 rounded-full bg-primary  text-white hover:bg-secondary top-auto bottom-[85px] left-[30px] "
            >
              <FaChevronLeft />
            </button>
            <button
              type="button"
              onClick={() =>
                carouselIndex !== content.length - 1
                  ? setCarouselIndex(carouselIndex + 1)
                  : null
              }
              className="p-3 rounded-full bg-primary  text-white hover:bg-secondary top-auto bottom-[85px] left-[85px]"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
