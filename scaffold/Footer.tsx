import Button from "@/components/elements/Button";
import Image from "next/image";
import Container from "@/components/elements/Container";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { FiFacebook, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <div className="bg-secondary mt-10 relative py-12 text-white">
        <div className="polygon bg-white h-12 w-56  absolute -bottom-1 right-0" />
        <Container>
          <div className="flex flex-col gap-5 md:flex-row">
            <div className="flex-1 space-y-3">
              <h3 className="font-bold text-4xl">
                Do you have a building project in mind?
              </h3>
              <p>
                AV-Construction is here to help make your plans a reality.
                Whether you&apos;re considering a new home, a renovation, or a
                commercial build, reach out to AV-Construction. Share your ideas
                with us, and we&apos;ll work with you to bring them to life with
                care and precision.
              </p>
            </div>
            <div className="flex-1 flex gap-3 items-center md:justify-end">
              <Button variant="ghost" className="!text-white">
                Get a Quote
              </Button>
              <Button>Call Us</Button>
            </div>
          </div>
        </Container>
      </div>
      <footer className="py-6">
        <Container className="flex flex-col md:flex-row gap-8 justify-between md:items-center">
          <Link href="/">
            <Image alt="logo" width={100} height={70} src="/media/logo.png" />
          </Link>
          <ul className="flex flex-col md:flex-row md:items-center gap-4">
            <li>
              <Link
                href="/"
                className="w-full hover:text-primary inline-block h-full"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="w-full hover:text-primary inline-block h-full"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="w-full hover:text-primary inline-block h-full"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="w-full hover:text-primary inline-block h-full"
              >
                Projects
              </Link>
            </li>
          </ul>
          <div className="flex gap-3">
            <Link
              className="p-3 transition-all duration-500 rounded-none hover:bg-secondary border border-primary hover:text-primary hover:rounded-full bg-primary text-white"
              href="#"
            >
              <FiFacebook size={20} />
            </Link>
            <Link
              className="p-3 transition-all duration-500 rounded-none hover:bg-secondary border border-primary hover:text-primary hover:rounded-full bg-primary text-white"
              href="#"
            >
              <FiInstagram size={20} />
            </Link>
            <Link
              className="p-3 transition-all duration-500 rounded-none hover:bg-secondary border border-primary hover:text-primary hover:rounded-full bg-primary text-white"
              href="#"
            >
              <FaWhatsapp size={20} />
            </Link>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
