import React from "react";
import Spline from "@splinetool/react-spline";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="container mx-auto flex px-10 md:py-20 py-4 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi, I'm James.
              <br className="hidden lg:inline-block" />
              love to build amazing apps.
            </h1>
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
                className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/james6587"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 md:w-1/2 w-full h-80">
            <Spline
              className="object-cover object-center rounded"
              scene="https://prod.spline.design/djnrN4gAxXFcYXGp/scene.splinecode"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
