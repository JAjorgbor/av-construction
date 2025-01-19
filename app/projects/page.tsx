import BreadCrumbs from "@/components/elements/Breadcrumbs";
import Container from "@/components/elements/Container";
import ProjectCard from "@/components/projects/ProjectCard";

const dummyData = [
  {
    image: "/media/project-1.jpg",
    title: "3-Bedroom Apartment in Lekki Phase 1",
    location: "Lekki, Lagos",
    squareFeet: 1200,
    bedroomCount: 3,
    bathroomCount: 2,
  },
  {
    image: "/media/project-2.jpg",
    title: "Luxury Duplex in Banana Island",
    location: "Ikoyi, Lagos",
    squareFeet: "5000",
    bedroomCount: 5,
    bathroomCount: 6,
  },
  {
    image: "/media/project-3.jpg",
    title: "Affordable 2-Bedroom Flat in Kubwa",
    location: "Kubwa, Abuja",
    squareFeet: 800,
    bedroomCount: 2,
    bathroomCount: 2,
  },
  {
    image: "/media/project-4.jpg",
    title: "Modern Studio Apartment in Wuse 2",
    location: "Wuse 2, Abuja",
    squareFeet: 500,
    bathroomCount: 1,
  },
  {
    image: "/media/project-5.jpg",
    title: "4-Bedroom Detached House in GRA",
    location: "Port Harcourt, Rivers",
    squareFeet: "3500",
    bedroomCount: 4,
    bathroomCount: 3,
  },
  {
    image: "/media/project-6.jpg",
    title: "4-Bedroom Detached House in GRA",
    location: "Port Harcourt, Rivers",
    squareFeet: "3500",
    bedroomCount: 4,
    bathroomCount: 3,
  },
  {
    image: "/media/project-7.jpg",
    title: "4-Bedroom Detached House in GRA",
    location: "Port Harcourt, Rivers",
    squareFeet: "3500",
    bedroomCount: 4,
    bathroomCount: 3,
  },
  {
    image: "/media/project-8.jpg",
    title: "4-Bedroom Detached House in GRA",
    location: "Port Harcourt, Rivers",
    squareFeet: "3500",
    bedroomCount: 4,
    bathroomCount: 3,
  },
];

export default function ProjectsPage() {
  return (
    <>
      <BreadCrumbs
        title="Our Projects"
        links={[{ label: "Projects", href: "/projects" }]}
      />
      <Container>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {dummyData.map((each, index) => (
            <ProjectCard
              image={each.image}
              key={index}
              title={each.title}
              location={each.location}
              squareFeet={each.squareFeet}
              bedroomCount={each.bedroomCount}
              bathroomCount={each.bathroomCount}
            />
          ))}
        </div>
      </Container>
    </>
  );
}
