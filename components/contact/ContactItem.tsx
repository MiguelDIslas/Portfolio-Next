import { ContactItemProps } from "types/components/contact";

/**
 * Component to render a contact item.
 * @param {ContactItemProps} props - Props to pass to the component.
 * @returns {JSX.Element} Contact item component.
 */
const ContactItem = ({
  title,
  Icon,
  text1,
  text2,
}: ContactItemProps): JSX.Element => {
  return (
    <div className="w-full py-6 px-2 lg:px-8 bg-border-color flex items-center">
      <div className="p-6 text-4xl flex items-center justify-center mr-6">
        <Icon className="text-4xl" />
      </div>
      <div>
        <h6 className="text-sm text-white lg:text-xl pb-2">{title}</h6>
        <p className="text-xs lg:text-sm py-1 px-0">{text1}</p>
        <p className="text-xs lg:text-sm py-1 px-0">{text2}</p>
      </div>
    </div>
  );
};

export default ContactItem;
