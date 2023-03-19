"use client";
import {useRef} from "react";
import { MdContactMail, MdLocationOn } from "react-icons/md";
import InputItem from "./InputItem";
import ContactItem from "./ContactItem";
//Email
import emailjs from "@emailjs/browser";
//SweetAlert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

/**
 * Component for the contact form
 * @returns {JSX.Element} Contact form component.
 */
const Form = (): JSX.Element => {
  const formRef = useRef<HTMLFormElement>(null);
  //SweetAlert
  const MySwal = withReactContent(Swal);

  /**
   * Method to send the email with EmailJS.
   * @param {React.FormEvent<HTMLFormElement>} event - Form event.
   */
  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = await emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        event.currentTarget,
        process.env.NEXT_PUBLIC_PUBLIC_KEY as string
      )
      .catch(async (error) => {
        await MySwal.fire({
          position: "top-end",
          title: "<strong>Message not sent!</strong>",
          html: "<i>Error sending.</i>",
          icon: "error",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    if (email) {
      await MySwal.fire({
        position: "top-end",
        title: "<strong>Message sent!</strong>",
        html: "<i>I'll answer you quickly.</i>",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      formRef.current?.reset();
    }

  };

  return (
    <div className="py-8 px-2 mid:py-18 mid:px-18 md:py-20 md:px-20 prevent-select">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="">
          <form ref={formRef} onSubmit={sendEmail} className="w-full">
            <InputItem id="name" title="Enter your name" />
            <InputItem id="email" title="Enter your email" type="email" />
            <InputItem id="subject" title="Enter your subject" />
            <div className="mt-8 relative w-full">
              <label
                className="absolute left-5 -top-5 inline-block bg-background-dark-color py-0 px-2 text-[inherit]"
                htmlFor="message"
              >
                Enter your message
              </label>
              <textarea
                id="message"
                name="message"
                cols={30}
                rows={7}
                className="resize-none bg-transparent border-[1px] border-border-color outline-none text-[inherit] w-full py-3 px-4"
              ></textarea>
            </div>
            <div className="mt-8 relative w-full mb-12 md:mb-">
              <button
                className="w-full bg-primary-color py-3 px-10 cursor-pointer inline-block text-[inherit]
                uppercase relative transition-all duration-[0.4s] ease-in-out
                after:content-[''] after:absolute after:top-0 after:left-0 after:w-0 after:h-1 after:bottom-0 after:opacity-70 after:transition-all after:duration-[0.4s] after:ease-in-out
                hover:after:w-full hover:after:bg-white
                "
                type="submit"
              >
                Send Email
              </button>
            </div>
          </form>
        </div>
        <div className="grid grid-cols-1 w-full md:w-3/4 gap-3">
          <ContactItem
            title={"Email"}
            Icon={MdContactMail}
            text1="miguelangelde15@gmail.com"
            text2=""
          />
          <ContactItem
            title="Location"
            Icon={MdLocationOn}
            text1="Delicias"
            text2="Chihuahua"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
