import { InputItemProps } from "types/components/contact";

/**
 * Component to render a input item.
 * @param {InputItemProps} props - Props to pass to the component.
 * @returns {JSX.Element} Input item component.
 */
const InputItem = ({
  id,
  title,
  type = "text",
}: InputItemProps): JSX.Element => {
  return (
    <div className="mt-8 relative w-full">
      <label
        className="absolute left-5 -top-5 inline-block bg-background-dark-color py-0 px-2 text-[inherit]"
        htmlFor={id}
      >
        {title}
      </label>
      <input
        className="bg-transparent border-[1px] border-border-color outline-none text-[inherit] w-full py-3 px-4"
        type={type}
        id={id}
        name={id}
      />
    </div>
  );
};

export default InputItem;
