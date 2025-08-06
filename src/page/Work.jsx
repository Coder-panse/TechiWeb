import React from "react";
import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";


const Work = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true,margin:"40% 0px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);
  return (
    <div>
      <div className="mx-[8%] md:mx-[14%] my-20">
        <motion.div
        
        >

          <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h1 className="text-blue-700 text-lg md:text-2xl font-bold">Our Project</h1>
            <p className="text-lg md:text-2xl font-bold py-2">
              Each project is a unique peice of development
            </p>
          </div>

          <div>
            <Link to="/work">
            <button className="px-8 py-2 rounded-full border bg-black font-medium text-white cursor-pointer">
              {" "}
              Explore More
            </button>
            </Link>
          </div>
        </div>
        </motion.div>

        {/* project */}
        <div>
          <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0 }}
          >
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
              <p className="text-gray-700 text-md md:text-lg font-medium">
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
          </motion.div>

          <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex flex-col-reverse md:flex-row mt-24 md:mt-32 mb-16 md:mx-5 justify-center gap-10 md:gap-20">
            <div className="text-center w-full md:w-[30vw]">
              <h1 className="text-2xl font-bold mb-5">Golding LLC</h1>
              <p className="text-gray-700 text-md md:text-lg font-medium">
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
          </motion.div>
        </div>
      </div>

      
    </div>
  );
};

export default Work;
