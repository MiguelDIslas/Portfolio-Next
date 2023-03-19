import Title from "@components/general/Title";
import Form from "@components/contact/Form";
/**
 * Component for the page of the contact
 * @returns {JSX.Element} The component ContactPage.
 */
const ContactPage = (): JSX.Element => {
  return (
    <div className="py-8 px-2 mid:py-18 mid:px-18 md:py-10 md:px-10">
      <Title title="Contact" />
      <Form />
    </div>
  );
};

export default ContactPage;
