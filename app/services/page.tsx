import BreadCrumbs from "@/components/elements/Breadcrumbs";
import Container from "@/components/elements/Container";
import Title from "@/components/elements/Title";
import Image from "next/image";

export const metadata = {
  title: "Services",
  description:
    "Discover our full range of construction services at AV Construction, including general contracting, design-build, project management, renovations, and civil engineering solutions.",
};

export default function ServicesPage() {
  return (
    <>
      <BreadCrumbs
        title="Our Services"
        links={[{ label: "Services", href: "/services" }]}
      />
      <Container className="text-foreground">
        {" "}
        <h3 className="font-bold text-3xl text-center my-8 capitalize">
          Explore our professional services
        </h3>
        <p className="my-5">
          AV Constructions LTD is a specialized construction company. Our
          services are targeted to meet with the clients&apos; expectations and
          requirements. Each project is treated as unique and adequate time is
          devoted to understanding clients&apos; need proffering solutions that
          are specific to projects. Our personnel are driven by the great desire
          to accomplish all projects within the time scheduled and to enhance
          profitability.
        </p>
        <div className="space-y-12">
          <div className="flex gap-4 flex-col lg:flex-row items-center">
            <Image
              src="/media/project-planning.jpg"
              alt="service"
              className="object-cover flex-1 w-full h-[350px]"
              width={400}
              height={400}
            />
            <div className="space-y-5 flex-1">
              <Title>Project Planning</Title>
              <p>
                A well-structured plan is the foundation of every successful
                project. At AV Construction, we specialize in comprehensive
                project planning that transforms your ideas into actionable
                steps.
              </p>
              <ul className="list-disc pl-5">
                <li>
                  <strong className="font-bold">Strategic Roadmaps:</strong> We
                  develop clear timelines, milestones, and deliverables to
                  ensure your project stays on track.
                </li>
                <li>
                  <strong className="font-bold">Risk Management:</strong> Our
                  proactive approach identifies potential challenges and
                  implements solutions before they arise.
                </li>
                <li>
                  <strong className="font-bold">Seamless Coordination:</strong>
                  We collaborate with architects, engineers, and other
                  stakeholders to ensure flawless execution from start to
                  finish.
                </li>
              </ul>
              <p>
                With our expertise, your construction project will move forward
                with confidence and clarity.
              </p>
            </div>
          </div>
          <div className="flex gap-4 flex-col lg:flex-row items-center">
            <div className="flex-1 space-y-5 order-2 lg:order-none">
              <Title>Interior Design</Title>
              <p>
                Create spaces that inspire and resonate with your personal
                style. Our interior design service combines functionality and
                aesthetics to craft environments that are as practical as they
                are beautiful.
              </p>
              <ul className="list-disc pl-5">
                <li>
                  <strong className="font-bold"> Tailored Concepts:</strong> We
                  work closely with you to understand your vision and translate
                  it into bespoke designs.
                </li>
                <li>
                  <strong className="font-bold"> Material Selection:</strong>{" "}
                  From textures to color palettes, we source premium materials
                  that bring your dream space to life.
                </li>
                <li>
                  <strong className="font-bold"> Innovative Designs:</strong>{" "}
                  Our team stays ahead of trends, ensuring your interiors are
                  timeless, modern, and optimized for comfort.
                </li>
              </ul>
              <p>
                At AV Construction, we don&apos;t just design interiors—we
                create experiences that make your space uniquely yours.
              </p>
            </div>

            <Image
              src="/media/projects/completed-mansion-renovation/3.jpg"
              alt="service"
              className="object-cover flex-1 w-full h-[350px]"
              width={400}
              height={400}
            />
          </div>
          <div className="flex gap-4 flex-col lg:flex-row items-center">
            <Image
              src="/media/budget-planning.jpg"
              alt="service"
              className="object-cover flex-1 w-full h-[350px]"
              width={400}
              height={400}
            />
            <div className="space-y-5 flex-1">
              <Title>Budget Planning</Title>
              <p>
                Achieving your dream project within your budget is not just a
                goal but our commitment. Our budget planning service ensures
                cost-effective solutions without compromising quality.
              </p>
              <ul className="list-disc pl-5">
                <li>
                  <strong className="font-bold">Transparent Estimates:</strong>{" "}
                  We provide detailed cost breakdowns so you know exactly where
                  your investment is going.
                </li>
                <li>
                  <strong className="font-bold">Cost Optimization:</strong>{" "}
                  Leveraging industry connections, we secure the best materials
                  and services at competitive rates.
                </li>
                <li>
                  <strong className="font-bold">Financial Oversight:</strong>{" "}
                  Throughout the project, we monitor expenses to keep the budget
                  aligned with your expectations.
                </li>
              </ul>
              <p>
                With AV Construction, you can build confidently, knowing every
                dollar is being maximized effectively.
              </p>
            </div>
          </div>

          <div className="flex gap-4 flex-col lg:flex-row items-center">
            <div className="flex-1 space-y-5 order-2 lg:order-none">
              <Title>Renovations & Remodeling</Title>
              <p>
                Transform your space with precision and personality. Our
                approach to renovations and remodeling prioritizes
                craftsmanship, clarity, and your complete
                satisfaction—delivering interiors that reflect not just style,
                but substance.
              </p>
              <ul className="list-disc pl-5">
                <li>
                  <strong className="font-bold"> Client-First Approach:</strong>
                  We begin with your lifestyle, not just your layout—ensuring
                  every decision reflects how you live, work, and unwind.
                </li>
                <li>
                  <strong className="font-bold">
                    {" "}
                    Quality-Centric Materials:
                  </strong>{" "}
                  We handpick durable, high-performance materials that look
                  stunning and stand the test of time.
                </li>
                <li>
                  <strong className="font-bold">
                    {" "}
                    Smart Design Solutions:
                  </strong>{" "}
                  Whether it&apos;s maximizing storage or enhancing natural
                  light, we apply intelligent, functional design that makes
                  every inch of your space work harder for you.
                </li>
              </ul>
              <p>
                While AV Constructions emphasizes aesthetic experiences, we
                focus on intentional transformation—where every renovation is
                rooted in functionality, comfort, and long-lasting value.
              </p>
            </div>

            <Image
              src="/media/projects/completed-mansion-renovation/13.jpg"
              alt="service"
              className="object-cover flex-1 w-full h-[350px]"
              width={400}
              height={400}
            />
          </div>
          <div className="flex gap-4 flex-col lg:flex-row items-center">
            <Image
              src="/media/projects/proposed-duplex/1.jpg"
              alt="service"
              className="object-cover flex-1 w-full h-[350px]"
              width={400}
              height={400}
            />
            <div className="space-y-5 flex-1">
              <Title>3D Modelling</Title>
              <p>
                Visualize your vision before it&apos;s built. Our 3D modeling
                service bridges imagination and implementation—providing
                detailed, interactive previews that guide confident design
                decisions and flawless execution.
              </p>
              <ul className="list-disc pl-5">
                <li>
                  <strong className="font-bold">Precision Visuals:</strong> Our
                  models are built to scale with meticulous accuracy, giving you
                  a true-to-life view of your project before a single nail is
                  driven.
                </li>
                <li>
                  <strong className="font-bold">Collaborative Editing:</strong>{" "}
                  Make real-time adjustments to layouts, materials, and lighting
                  with our team, ensuring your vision evolves exactly how you
                  imagined it.
                </li>
                <li>
                  <strong className="font-bold">Tech-Driven Efficiency:</strong>{" "}
                  We leverage cutting-edge tools and rendering software to
                  streamline approvals, minimize costly mistakes, and accelerate
                  project timelines.
                </li>
              </ul>
              <p>
                While AV Constructions focuses on crafting finished
                environments, we specialize in bringing ideas to life before
                construction begins—reducing guesswork and maximizing creative
                control.
              </p>
            </div>
          </div>
          <div className="flex gap-4 flex-col lg:flex-row items-center">
            <div className="flex-1 space-y-5 order-2 lg:order-none">
              <Title> Fresh Construction & Development</Title>
              <p>
                Build from the ground up with confidence. Our construction and
                development services blend strategic planning, modern
                engineering, and hands-on craftsmanship to deliver structures
                that are functional, sustainable, and future-ready.
              </p>
              <ul className="list-disc pl-5">
                <li>
                  <strong className="font-bold">End-to-End Execution:</strong>
                  From initial site analysis to final finishes, we manage every
                  phase of the build process—keeping you informed and in
                  control.
                </li>
                <li>
                  <strong className="font-bold"> Structural Excellence:</strong>{" "}
                  Our builds prioritize safety and durability, using quality
                  materials and industry-standard practices to ensure
                  long-lasting performance.
                </li>
                <li>
                  <strong className="font-bold"> Modern Development:</strong> We
                  integrate smart technology, eco-conscious designs, and
                  energy-efficient solutions to keep your property ahead of the
                  curve.
                </li>
              </ul>
              <p>
                Unlike AV Construction, which focuses primarily on interior
                transformation, we bring a holistic development approach—laying
                strong foundations for both residential and commercial success.
              </p>
            </div>

            <Image
              src="/media/projects/outdoor-kitchen-and-store/10.jpg"
              alt="service"
              className="object-cover flex-1 w-full h-[350px]"
              width={400}
              height={400}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
