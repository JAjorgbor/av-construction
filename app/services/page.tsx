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
          <div className="flex gap-4 flex-col md:flex-row items-center">
            <Image
              src="/media/project-planning.jpg"
              alt="service"
              className="object-cover flex-1"
              width={400}
              height={400}
            />
            <div className="space-y-5 flex-1">
              <Title>Project Planning</Title>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequuntur quae doloribus, vero eum tenetur repellendus quia
                veritatis laborum nam excepturi blanditiis veniam quam
                reiciendis labore? Totam, repellendus modi. Molestias,
                distinctio?
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                ex est eaque soluta ipsam voluptates iure sequi totam id
                dolores. Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Quae fugiat iure pariatur obcaecati beatae cum temporibus
                necessitatibus quo, commodi delectus!
              </p>
            </div>
          </div>
          <div className="flex gap-4 flex-col md:flex-row items-center">
            <div className="flex-1 space-y-5 order-2 md:order-none">
              <Title>Interior Design</Title>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequuntur quae doloribus, vero eum tenetur repellendus quia
                veritatis laborum nam excepturi blanditiis veniam quam
                reiciendis labore? Totam, repellendus modi. Molestias,
                distinctio?
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                ex est eaque soluta ipsam voluptates iure sequi totam id
                dolores. Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Quae fugiat iure pariatur obcaecati beatae cum temporibus
                necessitatibus quo, commodi delectus!
              </p>
            </div>

            <Image
              src="/media/interior-design.jpg"
              alt="service"
              className="object-cover flex-1"
              width={400}
              height={400}
            />
          </div>
          <div className="flex gap-4 flex-col md:flex-row items-center">
            <Image
              src="/media/budget-planning.jpg"
              alt="service"
              className="object-cover flex-1"
              width={400}
              height={400}
            />
            <div className="space-y-5 flex-1">
              <Title>Budget Planning</Title>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequuntur quae doloribus, vero eum tenetur repellendus quia
                veritatis laborum nam excepturi blanditiis veniam quam
                reiciendis labore? Totam, repellendus modi. Molestias,
                distinctio?
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                ex est eaque soluta ipsam voluptates iure sequi totam id
                dolores. Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Quae fugiat iure pariatur obcaecati beatae cum temporibus
                necessitatibus quo, commodi delectus!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
