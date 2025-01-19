import BreadCrumbs from "@/components/elements/Breadcrumbs";
import Container from "@/components/elements/Container";
import Title from "@/components/elements/Title";
import Image from "next/image";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <BreadCrumbs
        title="Our Services"
        links={[{ label: "Services", href: "/services" }]}
      />
      <Container className="text-foreground">
        {" "}
        <h3 className="font-bold text-xl text-center my-10">
          Explore our professional services
        </h3>
        <div className="space-y-12">
          <div className="flex gap-4 flex-col lg:flex-row items-center">
            <Image
              src="/media/project-planning.jpg"
              alt="service"
              className="object-cover flex-1 w-full"
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
                  <strong className="font-bold">Tailored Concepts:</strong>
                  We work closely with you to understand your vision and
                  translate it into bespoke designs.
                </li>
                <li>
                  <strong className="font-bold">Material Selection:</strong>
                  From textures to color palettes, we source premium materials
                  that bring your dream space to life.
                </li>
                <li>
                  <strong className="font-bold">Innovative Designs:</strong>
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
              src="/media/interior-design.jpg"
              alt="service"
              className="object-cover flex-1 w-full"
              width={400}
              height={400}
            />
          </div>
          <div className="flex gap-4 flex-col lg:flex-row items-center">
            <Image
              src="/media/budget-planning.jpg"
              alt="service"
              className="object-cover flex-1 w-full"
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
                  <strong className="font-bold">Transparent Estimates:</strong>
                  We provide detailed cost breakdowns so you know exactly where
                  your investment is going.
                </li>
                <li>
                  <strong className="font-bold">Cost Optimization:</strong>
                  Leveraging industry connections, we secure the best materials
                  and services at competitive rates.
                </li>
                <li>
                  <strong className="font-bold">Financial Oversight:</strong>
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
        </div>
      </Container>
    </>
  );
}
