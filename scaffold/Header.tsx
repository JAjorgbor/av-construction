"use client";
import Button from "@/components/elements/Button";
import Container from "@/components/elements/Container";
import useMediaQuery from "@/hooks/useMediaQuery";
import { screens } from "@/libraries/screens";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else setIsScrolled(false);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={` ${
        isScrolled ? "bg-secondary" : "bg-transparent"
      } fixed w-full top-0 text-white z-30 transition-colors duration-500`}
    >
      <Container className="">
        <nav className="flex gap-3 justify-between">
          <span>Logo</span>
          <ul className="hidden md:flex items-center gap-4">
            <li>
              <Link
                href="/"
                className={`w-full inline-block h-full ${
                  pathname == "/" ? "font-bold text-primary" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`w-full inline-block h-full ${
                  pathname == "/about" ? "font-bold text-primary" : ""
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={`w-full inline-block h-full ${
                  pathname == "/services" ? "font-bold text-primary" : ""
                }`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={`w-full inline-block h-full ${
                  pathname == "/projects" ? "font-bold text-primary" : ""
                }`}
              >
                Projects
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-5">
            <Button href="/contact">Contact Us</Button>
            <MobileMenu />
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;

const MobileMenu = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isLargerScreen = useMediaQuery(screens.lg);
  useEffect(() => {
    setIsOpen(false);
    setHydrated(true);
  }, [pathname]);

  useEffect(() => {
    setIsOpen(false);
  }, [isLargerScreen]);

  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  // Menu items animation settings
  const menuVariants = {
    open: {
      opacity: 1,
      x: "-50%",
      display: "block",
      transition: {
        x: { delay: 0.2 },
        duration: 0.4,
        staggerChildren: 0.2,
        type: "spring",
        stiffness: 100,
      },
    },
    closed: {
      opacity: 0,
      x: "100%",
      display: "none",
      transition: {
        display: { delay: 0.2 },
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      x: 0,
    },
    closed: {
      opacity: 0,
      x: 300,
    },
  };

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="text-white hover:text-primary lg:hidden"
      >
        <button onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? <FiMenu size={25} /> : <FiX size={25} />}
        </button>
      </div>
      {hydrated &&
        createPortal(
          isOpen && (
            <>
              <div
                className="bg-slate-500/50 fixed w-full h-full top-0"
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={menuVariants}
                className={`fixed lg:hidden top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-h-max w-4/5 md:w-[400px] bg-secondary  p-6 rounded-2xl z-50`}
              >
                {/* Menu Items */}
                <motion.ul className="space-y-4">
                  <motion.li
                    variants={itemVariants}
                    className="text-white text-xl"
                  >
                    <Link className="hover:text-primary w-full" href="/">
                      Home
                    </Link>
                  </motion.li>
                  <motion.li
                    variants={itemVariants}
                    className="text-white text-xl"
                  >
                    <Link className="hover:text-primary w-full" href="/about">
                      About
                    </Link>
                  </motion.li>
                  <motion.li
                    variants={itemVariants}
                    className="text-white text-xl"
                  >
                    <Link className="hover:text-primary w-full" href="/resume">
                      Resume
                    </Link>
                  </motion.li>
                  <motion.li
                    variants={itemVariants}
                    className="text-white text-xl"
                  >
                    <Link
                      className="hover:text-primary w-full"
                      href="/projects"
                    >
                      Projects
                    </Link>
                  </motion.li>
                  <motion.li
                    variants={itemVariants}
                    className="text-white text-xl"
                  >
                    <Link className="hover:text-primary w-full" href="/contact">
                      Contact
                    </Link>
                  </motion.li>
                </motion.ul>
              </motion.div>
            </>
          ),
          document.body
        )}
    </>
  );
};
