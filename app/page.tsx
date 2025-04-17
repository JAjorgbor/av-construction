"use client";
import AboutStats from "@/components/about/AboutStats";
import TopClients from "@/components/about/TopClients";
import Button from "@/components/elements/Button";
import Container from "@/components/elements/Container";
import Title from "@/components/elements/Title";
import ServiceCard from "@/components/home/ServiceCard";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import { projectsData } from "@/components/projects/ProjectsSection";
import Image from "next/image";
import { Fragment } from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import { IoBarChartOutline } from "react-icons/io5";
import { LuBuilding2, LuFileAxis3D } from "react-icons/lu";
import { MdOutlineDesignServices } from "react-icons/md";

const recentProjects = [
  "/media/projects/proposed-duplex/1.jpg",
  "/media/projects/proposed-duplex/2.jpg",
  "/media/projects/proposed-duplex/3.jpg",
  "/media/projects/proposed-guest-halet-and-bq-in-abuja/1.jpg",
  "/media/projects/proposed-guest-halet-and-bq-in-abuja/2.jpg",
  "/media/projects/proposed-guest-halet-and-bq-in-abuja/3.jpg",
];

export default function Home() {
  return (
    <>
      <section className="min-h-[50vh] bg-cover bg-center bg-[url(/media/hero-image.jpg)]  text-white py-20 relative z-0">
        <div className="h-full w-full bg-black/20  to-transparent absolute top-0 left-0 -z-10" />
        <Container className="z-20">
          <div className="md:w-1/2 space-y-5">
            <Title>Welcome</Title>
            <h1 className="text-4xl lg:text-7xl font-bold">
              We Take Your Dream Home & Make It Real
            </h1>
            <p>
              At AV Constructions, we turn your vision into reality. From
              concept to completion, we build with precision, passion, and
              purpose. Trust us to craft spaces that inspire and endure.
            </p>
            <div className="flex gap-3">
              <Button href="/contact">Contact Us</Button>
              <Button href="/services" variant="ghost">
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </section>
      <Container className="grid md:grid-cols-2 lg:grid-cols-3 my-16 gap-5 items-center">
        <Image
          src="/media/home-image-1.jpg"
          alt="image"
          width={800}
          height={600}
          className="lg:col-span-2 object-cover"
        />
        <div className="space-y-5">
          <Title>About Us</Title>
          <h2 className="text-3xl lg:text-5xl font-bold">
            Making Your vision come true at the basics
          </h2>
          <p className="text-foreground">
            Building more than homes, we create legacies. At AV Constructions,
            we transform ideas into extraordinary spaces, blending craftsmanship
            with innovation to bring your dream to life.
          </p>
          <AboutStats />
          <Button href="/about">More About Us</Button>
        </div>
      </Container>
      <Container className="space-y-10">
        <div className="space-y-5">
          <Title>All Services</Title>
          <div className="grid md:grid-cols-2 gap-5">
            <h3 className="text-3xl md:text-5xl font-bold uppercase">
              We Provide You A Future
            </h3>

            <p className="text-foreground">
              At AV Constructions, we believe every project is more than just
              bricks and mortar—it&apos;s a step toward creating a brighter
              future. Our mission is to craft spaces that not only stand the
              test of time but also inspire growth, foster connections, and
              improve lives. Whether it&apos;s a dream home, a commercial
              masterpiece, or a transformative community project, we bring your
              vision to life with precision, innovation, and unwavering
              commitment. Let us build the future you&apos;ve always
              imagined—one foundation at a time.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
          <ServiceCard
            icon={<AiOutlineFundProjectionScreen />}
            title="Project Planning"
          >
            At AV Constructions, we lay the groundwork for success with
            meticulous project planning. From initial concepts to actionable
            strategies, we ensure every detail aligns with your vision. Our
            expertise guarantees seamless execution, delivering results that
            exceed expectations every step of the way.
          </ServiceCard>
          <ServiceCard
            icon={<MdOutlineDesignServices />}
            title="Interior Design"
          >
            Transform your space into a masterpiece with AV Constructions. Our
            interior design services blend creativity, functionality, and
            elegance to create environments that reflect your style and elevate
            your everyday living.
          </ServiceCard>
          <ServiceCard icon={<IoBarChartOutline />} title="Budget Planning">
            At AV Constructions, we turn dreams into reality without breaking
            the bank. Our budget planning services ensure your project stays on
            track financially while maintaining the highest standards of quality
            and efficiency. Let us help you build smart and stress-free.
          </ServiceCard>
          <ServiceCard icon={<FaTools />} title="Renovations & Remodeling">
            At AV Constructions, we specialize in transforming existing spaces
            into modern, functional, and aesthetically pleasing environments.
            Whether it&rsquo;s a home, office, or commercial space, our
            renovation and remodeling services breathe new life into every
            corner. From structural upgrades to layout reconfigurations and
            high-end finishes, we ensure every detail aligns with your vision,
            budget, and lifestyle.
          </ServiceCard>
          <ServiceCard icon={<LuFileAxis3D />} title="3D Designs">
            We bring ideas to life through detailed architectural designs and
            immersive 3D renderings. Our design team works closely with you to
            create concepts that are both beautiful and buildable. With our 3D
            visualizations, you can explore your space before construction even
            begins—making decisions easier and outcomes more predictable.
          </ServiceCard>
          <ServiceCard
            icon={<LuBuilding2 />}
            title="Fresh Constructions and Development"
          >
            AV constructions handles projects from the ground up. Whether
            you&rsquo;re building a residential property, commercial facility,
            or multi-unit development, we manage every stage of construction
            with precision and professionalism. From site preparation to the
            final build, our experienced team ensures quality, compliance, and
            timely delivery—turning your vision into a tangible, lasting
            structure.
          </ServiceCard>
        </div>
        <Container>
          <TopClients />
        </Container>
      </Container>
      <div className="bg-secondary my-10 relative py-16">
        <div className="polygon bg-white h-12 w-56 transform rotate-180 absolute -top-1 left-0" />
        <div className="polygon bg-white h-12 w-56  absolute -bottom-1 right-0" />
        <Container className="relative space-y-5 text-white ">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex-1">
              <h2 className="text-3xl font-bold">Our Latest Projects</h2>
            </div>
            <p className="flex-1">
              Explore the craftsmanship and innovation behind AV
              Constructions&apos;s recent achievements. From stunning
              residential spaces to cutting-edge commercial builds, our latest
              projects showcase our commitment to excellence and our passion for
              bringing visions to life.
            </p>
          </div>
          <div className="overflow-x-auto md:scrollbar-hide">
            <div className="flex gap-4 min-w-max py-4">
              {recentProjects?.map((each, index) => (
                <div key={index}>
                  <Image
                    className="object-cover w-[500px] h-[300px]"
                    src={each}
                    alt="project"
                    width={500}
                    height={300}
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <Container className="my-10">
        <div className="space-y-5">
          <h2 className="text-3xl font-bold">Testimonials</h2>
          <TestimonialsSection />
        </div>
      </Container>
    </>
  );
}
