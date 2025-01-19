import BreadCrumbs from "@/components/elements/Breadcrumbs";
import Container from "@/components/elements/Container";
import ProjectsSection from "@/components/projects/ProjectsSection";

export default function ProjectsPage() {
  return (
    <>
      <BreadCrumbs
        title="Our Projects"
        links={[{ label: "Projects", href: "/projects" }]}
      />
      <Container>
        <h3 className="font-bold text-2xl text-center text-foreground mb-5">
          Building Dreams, One Project at a Time
        </h3>
        <ProjectsSection />
      </Container>
    </>
  );
}
