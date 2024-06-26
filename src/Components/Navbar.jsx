import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <>
      <header className="bg-gray-800 md:sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="title-font font-medium text-white mb-4 md:mb-0">
            <a href="#about" className="ml-3 text-xl">
              James Vargas
            </a>
          </div>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <a
              href="#projects"
              className="mr-5 hover:text-white duration-700 ease-in-out"
            >
              Previous Projects and Works
            </a>
            <a
              href="#skills"
              className="mr-5 hover:text-white duration-700 ease-in-out"
            >
              Skills and Technologies
            </a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 duration-700 ease-in-out rounded text-base mt-4 md:mt-0"
          >
            Hire me!
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </a>
        </div>
      </header>
    </>
  );
};

export default Navbar;
