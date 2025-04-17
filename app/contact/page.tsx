import ContactForm from "@/components/contact/ContactForm";
import BreadCrumbs from "@/components/elements/Breadcrumbs";
import Container from "@/components/elements/Container";
import Link from "next/link";
import { FiMail, FiPhone } from "react-icons/fi";
import { GrMapLocation } from "react-icons/gr";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with AV Constructions today. We're here to discuss your building needs, provide expert advice, and help bring your construction project to life.",
};

export default function ContactPage() {
  return (
    <>
      <BreadCrumbs
        title="Contact Us"
        links={[{ label: "Contact", href: "/contact" }]}
      />
      <Container className="text-foreground space-y-14">
        <div className="space-y-4">
          <h2 className="h3 text-primary text-4xl font-bold">
            Send us a message
          </h2>
          <p>
            Have a project in mind? Let&apos;s talk — we&apos;d love to hear
            from you.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="space-y-4 w-full md:flex-grow">
            <ContactForm />
          </div>
          <div className="w-full md:w-2/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d985.0663502957254!2d7.504900587676614!3d9.039537446740717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0beced85da1f%3A0x8c4f7fa102315c49!2s13%20Onitsha%20Cres%2C%20Area%2C%2011%20900242%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1744845633074!5m2!1sen!2sng"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[450px] w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] text-foreground gap-5  mx-auto">
          <Link
            href="tel:+2348060036398"
            target="_blank"
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
            href="mailto:info@avconstructionsltd.com"
            className="group  hover:text-white hover:bg-primary p-5 flex gap-3 items-center shadow hover:drop-shadow-2xl traisiton-all duration-700"
          >
            <span className="text-primary group-hover:text-inherit">
              <FiMail size={50} />
            </span>
            <div className="space-y-3">
              <span className="block text-2xl text-primary group-hover:text-inherit font-bold">
                Email
              </span>
              <span>info@avconstructionsltd.com</span>
            </div>
          </Link>
          <Link
            href="https://maps.app.goo.gl/1pkFbAnkQSc5of6T6"
            target="_blank"
            className="group  hover:text-white hover:bg-primary p-5 flex gap-3 items-center shadow hover:drop-shadow-2xl traisiton-all duration-700"
          >
            <span className="text-primary group-hover:text-inherit">
              <GrMapLocation size={50} />
            </span>
            <div className="space-y-3">
              <span className="block text-2xl text-primary group-hover:text-inherit font-bold">
                Address
              </span>
              <span>13 Onitsha Crescent Garki Area 11 Abuja.</span>
            </div>
          </Link>
        </div>
      </Container>
    </>
  );
}
