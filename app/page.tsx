import Button from "@/components/elements/Button";
import Container from "@/components/elements/Container";
import Title from "@/components/elements/Title";
import ServiceCard from "@/components/home/ServiceCard";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import Image from "next/image";
import { PiBlueprint } from "react-icons/pi";

export default function Home() {
  return (
    <>
      <section className="min-h-[50vh] bg-cover bg-center bg-[url(https://dummyimage.com/800x500)]  text-white py-20 relative z-0">
        <div className="h-full w-full bg-gradient-to-r from-black from-30% via-black/80 via-70%  to-black/30 absolute top-0 left-0 -z-10" />
        <Container className="z-20">
          <div className="md:w-1/2 space-y-5">
            <Title>Welcome</Title>
            <h1 className="text-4xl lg:text-7xl font-bold">
              We Take Your Dream Home & Make It Real
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius,
              saepe? Accusamus incidunt, eius veniam temporibus molestiae ipsum.
              Suscipit, non voluptate fuga molestias quidem quae labore?
            </p>
            <div className="flex gap-3">
              <Button href="/contact">Contact Us</Button>
              <Button variant="ghost">Learn More</Button>
            </div>
          </div>
        </Container>
      </section>
      <Container className="grid md:grid-cols-2 lg:grid-cols-3 my-16 gap-5 items-center">
        <Image
          src="https://dummyimage.com/800x600"
          alt="image"
          width={800}
          height={600}
          className="lg:col-span-2"
        />
        <div className="space-y-5">
          <Title>About Us</Title>
          <h2 className="text-3xl lg:text-5xl font-bold">
            Making Your vision come true at the basics
          </h2>
          <p className="text-foreground">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim,
            repellendus? Rem animi velit, dolore nemo corporis accusantium
            fugiat molestiae eius, eos veniam ratione architecto assumenda.
          </p>
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
          <Button>More About Us</Button>
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur incidunt est, molestias molestiae at rem placeat
              provident quae nobis, quis possimus nesciunt neque magni
              recusandae, eum reprehenderit et repellendus deleniti pariatur
              aliquid voluptas expedita veritatis. Fuga quasi odit sequi
              consectetur!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
          <ServiceCard icon={<PiBlueprint />} title="Project Planning">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            consequatur voluptas sapiente. Saepe debitis illo, placeat
            exercitationem sequi quam neque!
          </ServiceCard>
          <ServiceCard icon={<PiBlueprint />} title="Interior Design">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            consequatur voluptas sapiente. Saepe debitis illo, placeat
            exercitationem sequi quam neque!
          </ServiceCard>
          <ServiceCard icon={<PiBlueprint />} title="Budget Planning">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            consequatur voluptas sapiente. Saepe debitis illo, placeat
            exercitationem sequi quam neque!
          </ServiceCard>
        </div>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              veritatis consequatur hic ipsam tenetur, eum deserunt, numquam
              inventore, ipsum impedit id quas ex incidunt optio.
            </p>
          </div>
          <div className="overflow-x-auto md:scrollbar-hide">
            <div className="flex gap-4 min-w-max py-4">
              <div>
                <Image
                  className="object-cover w-[200px]"
                  src="https://dummyimage.com/200x300"
                  alt="project"
                  width={200}
                  height={500}
                />
              </div>
              <div>
                <Image
                  className="object-cover w-full"
                  src="https://dummyimage.com/200x300"
                  alt="project"
                  width={200}
                  height={500}
                />
              </div>
              <div>
                <Image
                  className="object-cover w-full"
                  src="https://dummyimage.com/200x300"
                  alt="project"
                  width={200}
                  height={500}
                />
              </div>
              <div>
                <Image
                  className="object-cover w-full"
                  src="https://dummyimage.com/200x300"
                  alt="project"
                  width={200}
                  height={500}
                />
              </div>
              <div>
                <Image
                  className="object-cover w-full"
                  src="https://dummyimage.com/200x300"
                  alt="project"
                  width={200}
                  height={500}
                />
              </div>
              <div>
                <Image
                  className="object-cover w-full"
                  src="https://dummyimage.com/200x300"
                  alt="project"
                  width={200}
                  height={500}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container className="my-10">
        <div className="space-y-5">
          <h2 className="text-3xl font-bold">Testionials</h2>
          <TestimonialsSection />
        </div>
      </Container>
    </>
  );
}
