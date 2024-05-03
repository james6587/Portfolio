import React, { useRef } from "react";
import Spline from "@splinetool/react-spline";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_dw8wb8j", "template_e9mu41n", form.current, {
        publicKey: "ADtMN2vSK5lCd4pdY",
      })
      .then(
        () => {
          {
            {
              alert("email sent");
              form.current.reset();
              /*console.log("SUCCESS!");*/
            }
          }
        },
        (error) => {
          {
            {
              /*console.log("FAILED...", error.text);*/
            }
          }
        }
      );
  };

  return (
    <>
      <section id="contact" className="relative">
        <div className="container mx-auto flex px-10 py-10 sm:pt-0 lg:flex-row lg:px-40 flex-col items-center">
          <div className="lg:w-1/2 md:w-1/2 w-full h-96 sm:block hidden">
            <Spline
              className="object-cover object-center rounded pb-4 cursor-grab"
              scene="https://prod.spline.design/xY5K69EWdqqPwTmH/scene.splinecode"
            />
          </div>
          <form
            name="contact"
            className="lg:w-1/2 md:w-full flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
            ref={form}
            onSubmit={sendEmail}
          >
            <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
              Contact me!
            </h2>
            <p className="leading-relaxed mb-5"></p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-400"
              >
                E-mail address
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 duration-700 ease-in-out rounded text-lg"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
