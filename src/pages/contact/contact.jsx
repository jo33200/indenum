import ContactForm from "../../components/common/ContactForm";
import ContactInfo from "../../components/common/ContactInfo";

const Contact = () => {
  return (
    <section className="flex h-auto w-full flex-col items-center justify-center gap-10 lg:flex-row lg:items-start lg:justify-around xl:w-2/3 xl:justify-between">
      <article className="mt-5 w-full max-w-md">
        <ContactInfo />
      </article>
      <article className="mt-5 w-full max-w-md">
        <ContactForm />
      </article>
    </section>
  );
};

export default Contact;
