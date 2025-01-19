"use client";
import type { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";

export interface BaseModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
interface ModalWrapperProps {
  title?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
}

const ModalWrapper: FC<ModalWrapperProps & BaseModalProps> = ({
  isOpen,
  setIsOpen,
  title,
  children,
  footer,
}) => {
  useEffect(() => {
    document.body.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    });
    // eslint-disable-next-line
  }, []);

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
              className="bg-secondary rounded-xl overflow-hidden z-[990] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 md:w-3/5"
            >
              <>
                <div
                  className={`flex gap-3 p-3 text-white ${
                    title ? "border-b border-b-gray-100" : ""
                  }`}
                >
                  <div className="flex-grow">{title}</div>
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className="text-white rounded-full hover:bg-white/30 p-1"
                  >
                    <FiX />
                  </button>
                </div>
                <div className="py-3 px-6  text-white max-h-[80vh] overflow-y-auto">
                  {children}
                </div>
                {footer && (
                  <div className="flex gap-3 justify-end p-4 px-6">
                    {footer}
                  </div>
                )}
              </>
            </motion.div>
          </AnimatePresence>
        </>,
        document?.body
      )
    : null;
};
export default ModalWrapper;
