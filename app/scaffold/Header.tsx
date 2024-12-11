"use client";
import Button from "@/components/elements/Button";
import Container from "@/components/elements/Container";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else setIsScrolled(false);
    };
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
              <Link href="#" className="w-full inline-block h-full">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="w-full inline-block h-full">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="w-full inline-block h-full">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" className="w-full inline-block h-full">
                Projects
              </Link>
            </li>
          </ul>
          <Button>Contact Us</Button>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
