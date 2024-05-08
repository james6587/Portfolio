import React from "react";
import Spline from "@splinetool/react-spline";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="container mx-auto flex lg:px-40 px-10 md:py-10 py-4 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="flex gap-x-4">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hi, I'm James.
              </h1>
              <div className="flex items-center  mb-4 transition md:justify-center">
                <div className="flex items-center "> <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>
                  <div className="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap">
                    Available to work
                  </div>
                </span>
                </div>
              </div>
            </div>
            <p className="mb-8 leading-relaxed">
              I'm a Frontend developer, I work with programming languages like:
              Javascript, TypeScript, Python. Currently I have 2+ years of
              experience, I define myself as a responsible and self-taught
              person, I like to listen to music, read documentation about
              different technologies on the market.
            </p>
            <div className="flex justify-center">
              <a
                href="https://www.linkedin.com/in/jamesvargass/"
                className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 duration-700 ease-in-out rounded text-lg"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/james6587"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 duration-700 ease-in-out hover:text-white rounded text-lg"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="lg:w-2/5 md:w-1/2 w-full h-96 sm:block hidden">
            <Spline
              className="object-cover object-center rounded cursor-grab"
              scene="https://prod.spline.design/djnrN4gAxXFcYXGp/scene.splinecode"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
