"use client";

import { BaseModalProps } from "@/components/elements/ModalWrapper";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import type { FC } from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";
import { Keyboard, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface LightBoxProps {
  images: string[];
}

const LightBox: FC<LightBoxProps & BaseModalProps> = ({
  isOpen,
  setIsOpen,
  images,
}) => {
  useEffect(() => {
    document.body.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    });
    // eslint-disable-next-line
  }, []);

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  return isOpen
    ? createPortal(
        <>
          <div
            className="top-0 left-0 h-full w-full fixed bg-black/45 z-[900]"
            onClick={() => setIsOpen(false)}
          />
          <AnimatePresence>
            <motion.div
              initial={{ y: "-50%", x: "50%", opacity: 0 }} // Slide in from the right
              animate={{ y: "-50%", x: "-50%", opacity: 1 }} // Slide into view
              exit={{ y: "-50%", x: "0%", opacity: 0 }} // Slide out to the left
              transition={{
                duration: 0.3,
                type: "spring",
                mass: 0.6,
              }}
              className="rounded-xl overflow-hidden z-[990] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95%] md:w-3/5"
            >
              <>
                <div className={`flex justify-end gap-3 p-3 text-white `}>
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className="text-white rounded-full hover:bg-white/30 p-1"
                  >
                    <FiX size={20} />
                  </button>
                </div>

                <div className="py-3 px-6  text-white ">
                  <>
                    <Swiper
                      style={
                        {
                          "--swiper-navigation-color": "#fff",
                          "--swiper-pagination-color": "#fff",
                        } as any
                      }
                      spaceBetween={10}
                      navigation={true}
                      thumbs={{
                        swiper:
                          thumbsSwiper && !thumbsSwiper.destroyed
                            ? thumbsSwiper
                            : null,
                      }}
                      modules={[Keyboard, Navigation, Thumbs]}
                      className="mySwiper2"
                    >
                      {images.map((each, index) => (
                        <SwiperSlide key={index}>
                          <Image
                            src={each}
                            alt="image"
                            height={500}
                            width={1000}
                            className="!h-[300px] md:!h-[500px] w-[700px] object-cover"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    <Swiper
                      onSwiper={setThumbsSwiper as any}
                      spaceBetween={10}
                      slidesPerView={5}
                      freeMode={true}
                      watchSlidesProgress={true}
                      modules={[Keyboard, Navigation, Thumbs]}
                      className="mySwiper"
                    >
                      {images.map((each, index) => (
                        <SwiperSlide key={index}>
                          <Image
                            src={each}
                            alt="image"
                            className="!h-[50px] md:!h-[80px] w-[100px] object-cover"
                            height={100}
                            width={100}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </>
                </div>
              </>
            </motion.div>
          </AnimatePresence>
        </>,
        document?.body
      )
    : null;
};
export default LightBox;
