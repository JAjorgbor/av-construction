import Container from "@/components/elements/Container";
import Link from "next/link";
import { type FC } from "react";
import { FiChevronRight, FiHome } from "react-icons/fi";

interface BreadCrumbsProps {
  links: { label: string; href?: string }[];
  title: string;
}

const BreadCrumbs: FC<BreadCrumbsProps> = ({ title, links }) => {
  return (
    <div className="h-[350px] bg-[url(https://dummyimage.com/800x200)] bg-cover bg-center relative flex items-center ">
      <div className="absolute inset-0 w-full h-full z-0 bg-black/30" />
      <Container className="space-y-3 z-10  w-full text-white">
        <h1 className="text-3xl font-bold">{title}</h1>
        <div className="flex items-center gap-1">
          <Link href="/" className="hover:text-primary">
            <FiHome size={20} />
          </Link>
          {links.map((each, index) => (
            <span className="flex gap-1 items-center" key={index}>
              <FiChevronRight size={20} />
              <Link href={each.href || "#"} className="hover:text-primary">
                {each.label}
              </Link>
            </span>
          ))}
        </div>
      </Container>
    </div>
  );
};
export default BreadCrumbs;
