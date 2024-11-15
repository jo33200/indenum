import ContactForm from "../../components/common/ContactForm";
import ContactInfo from "../../components/common/ContactInfo";

const Contact = () => {
  return (
    <div className="flex h-auto lg:min-h-screen w-full flex-col items-center justify-center gap-10 lg:flex-row lg:justify-around xl:w-2/3 xl:justify-between">
      <section className="mt-5 w-full">
        <ContactInfo />
      </section>
      <section className="mt-5 w-full">
        <ContactForm />
      </section>
    </div>
  );
};

export default Contact;
