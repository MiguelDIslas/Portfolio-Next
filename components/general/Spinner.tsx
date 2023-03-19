import Image from "next/image";

/**
 * Spinner component
 * @returns {JSX.Element} Spinner component
 */
const Spinner = (): JSX.Element => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden overflow-y-hidden">
      <Image
        width="1000"
        height="1000"
        src="/react.svg"
        className="logo react h-24 p-6 overflow-hidden"
        alt="React logo"
      />
    </div>
  );
};

export default Spinner;
