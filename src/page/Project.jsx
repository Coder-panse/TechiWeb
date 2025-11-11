import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Project = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" bg-gray-900">
      <div className="mx-[14%] pt-[200px] pb-[80px] text-white">
        <h1 className="text-3xl md:text-5xl font-semibold">Our Projects</h1>
        <p className="py-4">
          Explore some of our featured projects that showcase our expertise,
          innovation, <br /> and commitment to delivering impactful digital
          solutions.
        </p>

        <div>
          {/* project 1 */}
          <div className="flex flex-col md:flex-row my-12 md:my-16 md:mx-5 justify-center gap-10 md:gap-20">
            <div className="w-full h-[150px] md:w-[50vw] md:h-[40vh]">
              <img
                className="h-full w-full  rounded-xl"
                src="/mavy.png"
                alt=""
              />
            </div>
            <div className="text-center w-full md:w-[30vw]">
              <h1 className="text-2xl font-bold mb-5">MavyScrubs</h1>
              <p className="text-gray-500 text-md md:text-lg font-medium">
                MavyScrub is an e-commerce platform designed to sell
                high-quality medical scrubs and uniforms, catering specifically
                to healthcare professionals.
              </p>

              <div className="flex gap-10 justify-center mt-4">
                <button className="px-8 py-2 rounded-full font-medium border cursor-pointer">
                  React.js
                </button>
                <button className="px-8 py-2 rounded-full font-medium border cursor-pointer">
                  Node.js
                </button>
              </div>
              <div>
               <Link to='https://mavyscrubs.com/'>
                <button className="mt-4 bg-blue-600 text-white cursor-pointer px-8 py-2 rounded-full font-medium">
                  Live Demo
                </button>
               </Link>
              </div>
            </div>
          </div>

          {/* project 2 */}
          <div className="flex flex-col-reverse md:flex-row mt-24 md:mt-32 pb-16 md:mx-5 justify-center gap-10 md:gap-20">
            <div className="text-center w-full md:w-[30vw]">
              <h1 className="text-2xl font-bold mb-5">Golding LLC</h1>
              <p className="text-gray-500 text-md md:text-lg font-medium">
                Golding LLC combines industry expertise with innovative
                solutions to help clients achieve their goals with confidence
                and clarity.
              </p>
              <div className="flex gap-10 justify-center mt-4">
                <button className="px-8 py-2 rounded-full font-medium border cursor-pointer">
                  React.js
                </button>
                <button className="px-8 py-2 rounded-full font-medium border cursor-pointer">
                  Node.js
                </button>
              </div>
              <div>
               <Link to='https://goldingllc.net/'>
                <button className="mt-4 bg-blue-600 text-white cursor-pointer px-8 py-2 rounded-full font-medium">
                  Live Demo
                </button>
               </Link>
              </div>
            </div>

            <div className="w-full h-[150px] md:w-[50vw] md:h-[40vh]">
              <img
                className="h-full w-full  rounded-xl"
                src="/Golding.png"
                alt=""
              />
            </div>
          </div>

          {/* project 3 */}

          <div className="flex flex-col md:flex-row my-12 md:my-16 md:mx-5 justify-center gap-10 md:gap-20">
            <div className="w-full h-[150px] md:w-[50vw] md:h-[40vh]">
              <img
                className="h-full w-full  rounded-xl"
                src="/atlas.png"
                alt=""
              />
            </div>
            <div className="text-center w-full md:w-[30vw]">
              <h1 className="text-2xl font-bold mb-5">Atlas</h1>
              <p className="text-gray-500 text-md md:text-lg font-medium">
                Atlas is a professional portfolio website crafted to represent
                brands, showcase services, and establish a strong online
                presence for businesses and individuals.
              </p>

              <div className="flex gap-10 justify-center mt-4">
                <button className="px-8 py-2 rounded-full font-medium border cursor-pointer">
                  Html & CSS
                </button>
                <button className="px-8 py-2 rounded-full font-medium border cursor-pointer">
                  PhP
                </button>
              </div>
              <div>
               <Link to='https://atlasintlgroup.com/'>
                <button className="mt-4 bg-blue-600 text-white cursor-pointer px-8 py-2 rounded-full font-medium">
                  Live Demo
                </button>
               </Link>
              </div>
            </div>
          </div>

          {/* project 4 */}

          <div className="flex flex-col-reverse md:flex-row mt-24 md:mt-32 pb-16 md:mx-5 justify-center gap-10 md:gap-20">
            <div className="text-center w-full md:w-[30vw]">
              <h1 className="text-2xl font-bold mb-5">Shree9nb Hotel</h1>
              <p className="text-gray-500 text-md md:text-lg font-medium">
                Shree9NB offers warm hospitality and modern comforts, creating
                memorable stays where guests can relax, unwind, and experience
                true luxury with ease and elegance.
              </p>
              <div className="flex gap-10 justify-center mt-4">
                <button className="px-8 py-2 rounded-full font-medium border cursor-pointer">
                  React.js
                </button>
                <button className="px-8 py-2 rounded-full font-medium border cursor-pointer">
                  Node.js
                </button>
              </div>
              <div>
               <Link to='https://shree9nbhotels.in/'>
                <button className="mt-4 bg-blue-600 text-white cursor-pointer px-8 py-2 rounded-full font-medium">
                  Live Demo
                </button>
               </Link>
              </div>
            </div>

            <div className="w-full h-[150px] md:w-[50vw] md:h-[40vh]">
              <img
                className="h-full w-full  rounded-xl"
                src="/shree9nb.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
