import AboutStats from "@/components/about/AboutStats";
import TopClients from "@/components/about/TopClients";
import BreadCrumbs from "@/components/elements/Breadcrumbs";
import Container from "@/components/elements/Container";
import Title from "@/components/elements/Title";
import Image from "next/image";
import Link from "next/link";
import { FiEye, FiMail } from "react-icons/fi";
import { GiTargetArrows } from "react-icons/gi";

export const metadata = {
  title: "About",
  description:
    "Learn more about AV Constructions — a trusted construction company with years of experience in delivering high-quality projects, driven by professionalism, transparency, and a passion for building excellence.",
};

export default function AboutPage() {
  return (
    <>
      <BreadCrumbs
        title="About Us"
        links={[{ label: "About", href: "/about" }]}
      />
      <Container className="space-y-16 text-foreground">
        <div className="flex flex-col items-center gap-3  text-center">
          <h3 className="text-center flex gap-3 flex-wrap justify-center items-end font-bold text-3xl text-primary">
            About{" "}
            <span className="text-5xl md:text-6xl bg-[url(/media/text-fill-image.jpg)] bg-center bg-clip-text text-transparent font-extrabold bg-cover">
              AV Constructions
            </span>
          </h3>
          <p className="text-primary">Established since 2019</p>
          <AboutStats />
        </div>
        <div>
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <Image
              src="/media/about-image-1.jpg"
              alt="CAC Preview"
              className="block sm:hidden w-full h-[500px] object-cover"
              width={600}
              height={600}
            />
            <div className="md:col-span-2 space-y-5">
              <p>
                <span className="text-primary font-semibold">
                  Athanasius Ventures{" "}
                </span>
                Constructions LTD is a passionate and professional architecture
                and construction firm dedicated to pushing the boundaries of
                modern design. We believe in the power of innovative structures
                to shape and elevate our communities. This company profile will
                delve deeper into our mission to provide state-of-the-art
                solutions for both contractors and investors seeking to make a
                lasting impact
              </p>
              <div className="space-y-3">
                <Title>Our Office</Title>
                Our operations are facilitated by work friendly and the use of
                latest software&apos;s and technological innovations. Our
                offices are well equipped for executing out all aspects of
                Architectural design, drafting, desk studies and preparation of
                reports.
              </div>
              <div className="space-y-3">
                <Title>Our Firm</Title>
                AV Constructions LTD is a dynamic construction company which was
                started in 2019, established in 2021 and duly registered in 2024
                by Arc. Athanasius Manji Albert a qualified architect with a
                wide range of valuable experience gained over a long period.{" "}
                <br /> The company has grown from strength to strength through
                the execution and successful completion of landmark projects.
              </div>
            </div>
            <Image
              src="/media/about-image-1.jpg"
              alt="CAC Preview"
              className="hidden sm:block w-full h-[500px] object-cover"
              width={600}
              height={600}
            />
          </div>
          <br />
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex-1 space-y-5">
            <div className=" space-y-3">
              <h3 className="text-2xl text-primary text-center">Mission</h3>
              <div className="flex gap-3 items-start">
                <span>
                  <GiTargetArrows className="text-primary" size={100} />
                </span>
                Our mission is to provide technically sound Construction
                Services to sustain a leadership position in the construction
                practice by creating delight to humanity through the provision
                of required quality services. AV Constructions LTD is an equal
                opportunity company committed to improving the society and the
                life of our employees. We offer opportunities to all
                professionals to express themselves through appropriate
                training, capacity building and creativity
              </div>
            </div>
            <div className=" space-y-3">
              <h3 className="text-2xl text-primary text-center">Vision</h3>
              <div className="flex gap-3 items-start">
                <span>
                  <FiEye className="text-primary" size={100} />
                </span>
                Our vision is to be one of the best construction company in
                Nigeria and diaspora, contributing to the development of the
                construction sector and the built environment through the
                utilization of highly trained and qualified professionals and
                state-of-art equipment and facilities.
              </div>
            </div>
          </div>
          <div className="flex-1 -order-1 md:order-none">
            <Image
              src="/media/about-image.jpg"
              alt="about image"
              width={600}
              height={400}
              className="object-cover w-full"
            />
          </div>
        </div>

        <TopClients />

        <div className="space-y-5 ">
          <Title>Meet The Team</Title>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="space-y-3 bg-white drop-shadow-xl">
              <Image
                src="/media/ceo.jpg"
                alt="ARC. ATHANASIUS MANJI ALBERT"
                className="w-full object-cover h-[350px]"
                width={800}
                height={800}
              />
              <div className="space-y-2 flex flex-col flex-grow divide-y">
                <div className="p-3 flex-grow">
                  <p className="font-semibold text-lg">
                    ARC. ATHANASIUS MANJI ALBERT
                  </p>
                  <p className="text-primary">Founder and M.D</p>
                </div>
                <p className="p-3 flex justify-center h-12">
                  {/* <span className="font-semibold">Contact: </span> */}
                  <Link
                    target="_blank"
                    href={"mailto:md@avconstructions.com"}
                    aria-label="message md@avconstructions.com"
                    className="text-primary hover:underline"
                  >
                    <FiMail size={25} />
                  </Link>
                </p>
              </div>
            </div>
            <div className="space-y-3 flex flex-col drop-shadow-xl bg-white">
              <Image
                src="/media/alvari.jpg"
                alt="ARC. ANDREW DURKWA ANDREW"
                className="w-full object-cover object-center h-[350px]"
                width={200}
                height={200}
              />
              <div className="space-y-2 flex flex-col flex-grow divide-y">
                <div className="p-3 flex-grow">
                  <p className="font-semibold text-lg">
                    Athanasius Manji Alvari
                  </p>
                  <p className="text-primary">Q.S</p>
                </div>
                <p className="p-3 flex justify-center h-12">
                  {/* <span className="font-semibold">Contact: </span> */}
                  <Link
                    target="_blank"
                    href={"mailto:qs_athanasius@avconstructionsltd.com"}
                    aria-label="qs_athanasimessage us@avconstructionsltd.com"
                    className="text-primary hover:underline"
                  >
                    <FiMail size={25} />
                  </Link>
                </p>
              </div>
            </div>
            <div className="space-y-3  drop-shadow-xl bg-white flex flex-col">
              <Image
                src="/media/benezar.jpg"
                alt="Benezar K. Athanasius"
                className="w-full object-cover object-center h-[350px]"
                width={200}
                height={200}
              />
              <div className="space-y-2 flex flex-col flex-grow divide-y">
                <div className="p-3 flex-grow">
                  <p className="font-semibold text-lg">Benezar K. Athanasius</p>
                  <p className="text-primary">Human Resource Manager</p>
                </div>
                <p className="p-3 flex justify-center h-12">
                  {/* <span className="font-semibold">Contact: </span> */}
                  <Link
                    target="_blank"
                    href={"mailto:hr@avconstructionsltd.com"}
                    aria-label="message hr@avconstructionsltd.com"
                    className="text-primary hover:underline"
                  >
                    <FiMail size={25} />
                  </Link>
                </p>
              </div>
            </div>
            <div className="space-y-3  drop-shadow-xl bg-white">
              <Image
                src="/media/cloudia.jpg"
                alt="Benezar K. Athanasius"
                className="w-full object-cover object-center h-[350px]"
                width={200}
                height={200}
              />
              <div className="space-y-2 flex flex-col flex-grow divide-y">
                <div className="p-3 flex-grow">
                  <p className="font-semibold text-lg">Cloudia Beltran</p>
                  <p className="text-primary">
                    HoD Marketing & Social Media Management
                  </p>
                </div>
                <p className="p-3 flex justify-center h-12">
                  {/* <span className="font-semibold">Contact: </span> */}
                  <Link
                    target="_blank"
                    href={"mailto:marketing@constructionsltd.com "}
                    aria-label="marketimessage ng@constructionsltd.com "
                    className="text-primary hover:underline"
                  >
                    <FiMail size={25} />
                  </Link>
                </p>
              </div>
            </div>
             


             <div className="space-y-3 bg-white drop-shadow-xl">
              <Image
                src="/media/emoseh.jpg"
                alt="ARC. EMOSEN T. MBWARA"
                className="w-full object-cover h-[350px]"
                width={800}
                height={800}
              />
              <div className="space-y-2 flex flex-col flex-grow divide-y">
                <div className="p-3 flex-grow">
                  <p className="font-semibold text-lg">
                    ARC. EMOSEN T. MBWARA
                  </p>
                  <p className="text-primary">Senior Architect</p>
                </div>
                <p className="p-3 flex justify-center h-12">
                  {/* <span className="font-semibold">Contact: </span> */}
                  <Link
                    target="_blank"
                    href={"mailto:info@avconstructions.com"}
                    aria-label="message info@avconstructions.com"
                    className="text-primary hover:underline"
                  >
                    <FiMail size={25} />
                  </Link>
                </p>
              </div>
            </div>



             <div className="space-y-3 bg-white drop-shadow-xl">
              <Image
                src="/media/eng-yusuf-m-yusuf.png"
                alt="ENG. YUSUF M. YUSUF"
                className="w-full object-cover h-[350px]"
                width={800}
                height={800}
              />
              <div className="space-y-2 flex flex-col flex-grow divide-y">
                <div className="p-3 flex-grow">
                  <p className="font-semibold text-lg">
                    ENG. YUSUF M. YUSUF
                  </p>
                  <p className="text-primary">Senior Engineer</p>
                </div>
                <p className="p-3 flex justify-center h-12">
                  {/* <span className="font-semibold">Contact: </span> */}
                  <Link
                    target="_blank"
                    href={"mailto:info@avconstructionsltd.com"}
                    aria-label="message info@avconstructionsltd.com.com"
                    className="text-primary hover:underline"
                  >
                    <FiMail size={25} />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
