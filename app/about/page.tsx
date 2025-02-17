import BreadCrumbs from "@/components/elements/Breadcrumbs";
import Container from "@/components/elements/Container";
import Title from "@/components/elements/Title";
import Image from "next/image";
import { FiEye } from "react-icons/fi";
import { GiTargetArrows } from "react-icons/gi";

export default function AboutPage() {
  return (
    <>
      <BreadCrumbs
        title="About Us"
        links={[{ label: "About", href: "/about" }]}
      />
      <Container className="space-y-10">
        <div className="flex flex-col items-center gap-3  text-center">
          <h3 className="text-center flex gap-3 flex-wrap justify-center items-end font-bold text-3xl text-primary">
            About{" "}
            <span className="text-5xl md:text-6xl bg-[url(/media/text-fill-image.jpg)] bg-center bg-clip-text text-transparent font-extrabold bg-cover">
              AV Construction
            </span>
          </h3>
          <p className="text-primary">Established since 2019</p>
          <div className="flex gap-3 ">
            <div className="space-y-3">
              <span className="block text-5xl text-primary">888+</span>
              <span>Projects Completed</span>
            </div>
            <div className="space-y-3">
              <span className="block text-5xl text-primary">786+</span>
              <span>Projects Completed</span>
            </div>
          </div>
        </div>
        <div>
          <div className="grid md:grid-cols-3 gap-6">
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
              src="https://dummyimage.com/300x400"
              alt="CAC Preview"
              className="w-full"
              width={400}
              height={500}
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

        <div className="space-y-5 ">
          <Title className="justify-center">Meet The Team</Title>
          <div className="grid  md:grid-cols-4 lg:grid-cols-5 gap-4">
            <div className="md:col-span-2 md:row-span-2 space-y-3 text-center">
              <Image
                src="https://dummyimage.com/300x300"
                alt="ARC. ATHANASIUS MANJI ALBERT"
                className="w-full object-cover"
                width={300}
                height={300}
              />
              <div className="space-y-2">
                <p className="font-semibold text-lg">
                  ARC. ATHANASIUS MANJI ALBERT
                </p>
                <p className="text-primary">Managing Director/C.E.O</p>
              </div>
            </div>
            {Array(5)
              .fill(null)
              .map((each, index) => (
                <div className="space-y-3 text-center" key={index}>
                  <Image
                    src="https://dummyimage.com/200x200"
                    alt="ARC. ANDREW DURKWA ANDREW"
                    className="w-full object-cover"
                    width={200}
                    height={200}
                  />
                  <div className="space-y-2">
                    <p className="font-semibold text-lg">
                      ARC. ANDREW DURKWA ANDREW
                    </p>
                    <p className="text-primary">Senior Architect</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Container>
    </>
  );
}
