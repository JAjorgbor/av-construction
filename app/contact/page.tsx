import ContactForm from "@/components/contact/ContactForm";
import BreadCrumbs from "@/components/elements/Breadcrumbs";
import Container from "@/components/elements/Container";

export const metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <BreadCrumbs
        title="Contact Us"
        links={[{ label: "Contact", href: "/contact" }]}
      />
      <Container className="text-foreground">
        <div className="mx-auto max-w-3xl space-y-4">
          <div>
            <div className="h3 text-primary text-4xl font-bold space-y-2">
              Send us a message
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
              adipisci odio non ipsum vel dolorum vero saepe qui? Magni vitae
              quod cumque corrupti accusantium ipsum aperiam alias. Asperiores,
              fugiat laboriosam.
            </p>
          </div>
          <ContactForm />
        </div>
      </Container>
    </>
  );
}
