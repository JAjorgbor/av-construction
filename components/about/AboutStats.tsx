"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";

const AboutStats = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="flex justify-center">
      <ul className="flex flex-wrap list-none">
        <li className="block">
          <span className="font-lora  text-5xl text-primary">
            {inView ? (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <CountUp start={0} end={10} />
                <span>+</span>
              </motion.span>
            ):0}
          </span>
          <p>Ongoing Projects</p>
        </li>
        <li className="block pl-[30px] sm:pl-[40px] md:pl-[60px]">
          <span className="font-lora  text-5xl text-primary">
            {inView ? (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <CountUp start={0} end={50} />
                <span>+</span>
              </motion.span>
            ) : (
              0
            )}
          </span>
          <p>Completed Projects</p>
        </li>
      </ul>
    </div>
  );
};

export default AboutStats;
