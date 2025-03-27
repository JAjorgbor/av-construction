import ContactForm from "@/components/contact/ContactForm";
import BreadCrumbs from "@/components/elements/Breadcrumbs";
import Container from "@/components/elements/Container";
import Link from "next/link";
import { FiMail, FiPhone } from "react-icons/fi";
import { GrMapLocation } from "react-icons/gr";

export const metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <BreadCrumbs
        title="Contact Us"
        links={[{ label: "Contact", href: "/contact" }]}
      />
      <Container className="text-foreground space-y-10">
        <div>
          <div className="h3 text-primary text-4xl font-bold space-y-2">
            Send us a message
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className=" max-w-3xl space-y-4">
          <ContactForm />
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] text-foreground gap-5  mx-auto">
          <Link
            href="tel:2348060036398"
            className="group  hover:text-white hover:bg-primary p-5 flex gap-3 items-center shadow hover:drop-shadow-2xl traisiton-all duration-700"
          >
            <span className="text-primary group-hover:text-inherit">
              <FiPhone size={50} />
            </span>
            <div className="space-y-3">
              <span className="block text-2xl text-primary group-hover:text-inherit font-bold">
                Phone
              </span>
              <span>+234 806 003 6398</span>
            </div>
          </Link>
          <Link
            href="mailto:example@email.com"
            className="group  hover:text-white hover:bg-primary p-5 flex gap-3 items-center shadow hover:drop-shadow-2xl traisiton-all duration-700"
          >
            <span className="text-primary group-hover:text-inherit">
              <FiMail size={50} />
            </span>
            <div className="space-y-3">
              <span className="block text-2xl text-primary group-hover:text-inherit font-bold">
                Email
              </span>
              <span>example@email.com</span>
            </div>
          </Link>
          <Link
            href="#"
            className="group  hover:text-white hover:bg-primary p-5 flex gap-3 items-center shadow hover:drop-shadow-2xl traisiton-all duration-700"
          >
            <span className="text-primary group-hover:text-inherit">
              <GrMapLocation size={50} />
            </span>
            <div className="space-y-3">
              <span className="block text-2xl text-primary group-hover:text-inherit font-bold">
                Address
              </span>
              <span>Example Address</span>
            </div>
          </Link>
        </div>
      </Container>
    </>
  );
}
