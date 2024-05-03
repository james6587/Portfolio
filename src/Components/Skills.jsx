import React from "react";
import { CpuChipIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";
import { skills } from "../data";

const Skills = () => {
  return (
    <>
      <section id="skills">
        <div className="container px-5 py-10 mx-auto lg:px-40">
          <div className="text-center mb-20">
            <CpuChipIcon className="w-10 inline-block mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
              Skills and Technologies
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"></p>
          </div>
          <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 lg:w-full sm:mx-auto sm:mb-2 -mx-2">
            {skills.map((skill) => (
              <div key={skill.skill} className="p-2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  {/* <CheckBadgeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                   */}
                  <img
                    src={skill.image}
                    className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"
                    alt="icon"
                  />
                  <span className="title-font font-medium text-white">
                    {skill.skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
