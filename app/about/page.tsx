import BreadCrumbs from "@/components/elements/Breadcrumbs";
import Container from "@/components/elements/Container";
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
      <Container className="space-y-5">
        <div className="flex flex-col items-center gap-3  text-center">
          <h3 className="text-center flex gap-3 flex-wrap justify-center items-end font-bold text-3xl text-primary">
            About{" "}
            <span className="text-5xl md:text-6xl bg-[url(/media/text-fill-image.jpg)] bg-center bg-clip-text text-transparent font-extrabold bg-cover">
              AV Construction
            </span>
          </h3>
          <p className="text-primary">Established since 2017</p>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          delectus fugiat distinctio, placeat maxime commodi? Minima accusantium
          esse voluptatibus consequatur, odit laboriosam asperiores facere ipsa
          consequuntur quasi, ullam maiores incidunt? Dolorem tenetur laboriosam
          saepe reprehenderit odio doloremque quod, ex obcaecati, cum esse
          soluta molestiae mollitia illo a repellat. Earum itaque aspernatur
          quaerat consequuntur fuga iste deserunt doloribus enim eligendi alias.
          Ipsa fugiat velit at soluta temporibus iure. Debitis, doloribus
          laboriosam. Harum fugiat voluptas error aut neque eius excepturi nisi?
          Sed praesentium temporibus totam porro exercitationem in odit cum,
          iusto omnis!
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minus,
          totam omnis corrupti neque rem rerum quasi, perferendis sunt natus
          doloribus, dicta veritatis. Maxime, hic! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Sequi facilis voluptates consequuntur
          saepe voluptatem nihil dolorem quibusdam, vitae earum autem?
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex-1 space-y-5">
            <div className=" space-y-3">
              <h3 className="text-2xl text-primary text-center">Mission</h3>
              <div className="flex gap-3 items-start">
                <span>
                  <GiTargetArrows className="text-primary" size={100} />
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem quaerat alias explicabo enim, optio, odio
                deleniti architecto perspiciatis atque quasi omnis, ipsum unde
                facilis! Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Libero, asperiores harum deleniti impedit dolorem sapiente
                quibusdam odit aut mollitia. Aliquid?
              </div>
            </div>
            <div className=" space-y-3">
              <h3 className="text-2xl text-primary text-center">Vision</h3>
              <div className="flex gap-3 items-start">
                <span>
                  <FiEye className="text-primary" size={100} />
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem quaerat alias explicabo enim, optio, odio
                deleniti architecto perspiciatis atque quasi omnis, ipsum unde
                facilis! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Vel doloremque dolorum, tempore non veniam neque.
                Repudiandae a mollitia ex ipsa.
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
      </Container>
    </>
  );
}
