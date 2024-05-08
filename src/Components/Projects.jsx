import React from "react";
import { CodeBracketIcon, LinkIcon } from "@heroicons/react/24/solid";
import { projects } from "../data";

const Projects = () => {
  return (
    <>
      <section id="projects" className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto lg:px-40">
          <div className="flex flex-col w-full mb-20 text-center">
            <CodeBracketIcon className="mx-auto inline-block w-10 mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              Applications I have built
            </h1>
          </div>
          <div className="gap-4 -m-4">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex my-16 mx-10 flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                    <img alt="Recién llegado vs 5 años en Nueva Zelanda" className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105" loading="lazy" src={project.image} />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:max-w-lg">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap mt-2">
                    <ul className="flex flex-row mb-2 gap-x-2">

                      {project.tags.map((tag) => (
                        <li className="flex gap-x-2 rounded-full text-xs bg-[#003159] text-white py-2 px-2" key={tag.tagicon}>
                          <img src={tag.tagicon} className="size-4 rounded" />
                          <span>
                            {tag.tagname}
                          </span>
                        </li>
                      )
                      )}


                    </ul>
                    <div className="mt-2 text-gray-700 dark:text-gray-400">
                      {project.description}
                    </div>
                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                      <a
                        href={project.link}
                        role="link"
                        className="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
                      >
                        <CodeBracketIcon className="size-4" />
                        Code
                      </a>
                      <a
                        href={project.link}
                        role="link"
                        className="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
                      >
                        <LinkIcon className="size-4" />
                        Preview
                      </a>
                    </footer>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
