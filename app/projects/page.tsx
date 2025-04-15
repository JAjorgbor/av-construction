import BreadCrumbs from "@/components/elements/Breadcrumbs";
import Container from "@/components/elements/Container";
import ProjectsSection from "@/components/projects/ProjectsSection";

export const metadata = { title: "Projects" };

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
