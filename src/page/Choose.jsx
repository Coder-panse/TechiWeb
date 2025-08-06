import React from "react";
import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const Choose = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <div className="mx-[8%] mb-16 py-12 md:mx-[14%] md:py-16">
      <motion.div
      >
        <div className="mb-10">
        <p className="text-xl font-medium text-center py-2 w-48 border border-[#D9D9D9] rounded-lg ">
          Why Choose Us?
        </p>
        <h1 className="text-3xl md:text-6xl font-bold py-4 md:py-8">
          As a Brand and <br />
          Strategic Company
        </h1>
      </div>
      </motion.div>

      <div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <div className="flex flex-col md:flex-row justify-between md:items-center border-[#39383869] border-t-[1px] py-[35px]">
            <div className="text-2xl md:text-3xl font-semibold ">
              EXPERT TEAM
            </div>
            <div className="text-md md:text-xl text-gray-600">
              Our developers and designers bring years of hands-on experience.
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row justify-between md:items-center border-[#39383869] border-t-[1px] py-[35px]">
            <div className="text-2xl md:text-3xl font-semibold  ">
              END-TO-END SOLUTION
            </div>
            <div className=" text-md md:text-xl text-gray-600">
              From idea to launch – we handle it all.
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between md:items-center border-[#39383869] border-t-[1px] py-[35px]">
            <div className="text-2xl md:text-3xl font-semibold  ">
              ON-TIME DELIVERY
            </div>
            <div className="text-md md:text-xl text-gray-600">
              Your time matters. We ensure timely delivery with clear
              communication.
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between md:items-center border-[#39383869] border-t-[1px] py-[35px]">
            <div className="text-2xl md:text-3xl font-semibold ">
              PROVEN TRACK RECORD
            </div>
            <div className="text-md md:text-xl text-gray-600">
              From startups to growing businesses, our portfolio speaks for
              itself.
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Choose;
