import BreadCrumbs from "@/components/elements/Breadcrumbs";
import Container from "@/components/elements/Container";
import ProjectsSection from "@/components/projects/ProjectsSection";

export const metadata = {
  title: "Projects",
  description:
    "Explore AV Construction’s diverse project portfolio, featuring residential homes, commercial buildings, and industrial developments completed with precision and client satisfaction in mind.",
};

export default function ProjectsPage() {
  return (
    <>
      <BreadCrumbs
        title="Our Projects"
        links={[{ label: "Projects", href: "/projects" }]}
      />
      <Container>
        <h3 className="font-bold text-3xl text-center text-foreground mt-12 mb-16">
          Building Dreams, One Project at a Time
        </h3>
        <ProjectsSection />
      </Container>
    </>
  );
}
