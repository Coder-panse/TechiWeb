import React from "react";
import { useState, useRef, useEffect } from "react";
import SpotlightCard from "../Component/SpotlightCard";
import { MdArrowOutward } from "react-icons/md";
import { motion, useInView } from "framer-motion";

const Service = () => {

  
  const ref = useRef(null);
  const isInView = useInView(ref, {
     once: true ,
    margin:"40% 0px"
    });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <div className=" bg-black px-[8%] md:px-[14%] pt-10 pb-12 md:pt-16 md:pb-20">
      <div className=" ">
        <h1 className="text-white text-4xl md:text-6xl font-semibold pt-10 md:pt-16 pb-4">
          Our Services
        </h1>
        <p className="text-gray-400 mt-5 text-md md:text-lg font-medium ">
          Delivering excellence across web, app, and custom software
          development.
        </p>
        {/* <div className="flex gap-8 mt-8 text-white items-center">
          <p className="text-lg ">Learn More</p>
          <span className="w-20 h-20 rounded-full border border-white flex justify-center items-center bg-transparent text-white hover:bg-white hover:text-black transition-colors duration-300">
            <MdArrowOutward size={28} />
          </span>
        </div> */}
      </div>

      <div className="flex justify-center gap-8 flex-wrap mt-16 text-white text-center">
        <motion.div
          ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0 }}
        >
          <SpotlightCard
            className="custom-spotlight-card text-white w-[300px] h-[200px]"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <h1 className="text-xl font-semibold"> Web Development</h1>
            <br />
            <span className="text-md md:text-lg">
              Custom websites to grow your brand and business.
            </span>
          </SpotlightCard>
        </motion.div>

        <motion.div
           ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SpotlightCard
            className="custom-spotlight-card  w-[300px] h-[200px]"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <h1 className="text-xl font-semibold"> Mobile/App Development</h1>
            <br />
            Innovative mobile apps to boost engagement and growth.
          </SpotlightCard>
        </motion.div>

        <motion.div
           ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SpotlightCard
            className="custom-spotlight-card  w-[300px] h-[200px]"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <h1 className="text-xl font-semibold">Digital Marketing & SEO</h1>
            <br />
            Improve visibility and rankings with smart SEO strategies.
          </SpotlightCard>
        </motion.div>

        <motion.div
         ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.6 }}
        
        >

          <SpotlightCard
          className="custom-spotlight-card w-[300px] h-[200px]"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <h1 className="text-xl font-semibold">Software & SaaS Development</h1>
          <br />
          Robust software and SaaS solutions tailored for growth.
        </SpotlightCard>
        </motion.div>

       <motion.div
        ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.8 }}
       >

         <SpotlightCard
          className="custom-spotlight-card w-[300px] h-[200px]"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <h1 className="text-xl font-semibold">
            IT Consulting & Cloud Solutions
          </h1>
          <br />
          Expert IT guidance and scalable cloud-based solutions.
        </SpotlightCard>
       </motion.div>

        <motion.div 
         ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 1 }}
        >
          <SpotlightCard
          className="custom-spotlight-card w-[300px] h-[200px]"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <h1 className="text-xl font-semibold">E-Commerce Solutions</h1>
          <br />
          End-to-end e-commerce platforms for seamless online selling.
        </SpotlightCard>
        </motion.div>

        <motion.div
         ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 1.2 }}
        >
          <SpotlightCard
          className="custom-spotlight-card w-[300px] h-[200px]"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <h1 className="text-xl font-semibold">AI & Automation Services</h1>
          <br />
          Smart AI solutions to streamline tasks and boost efficiency.
        </SpotlightCard>
        </motion.div>

       <motion.div
       ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 1.4 }}
       >
         <SpotlightCard
          className="custom-spotlight-card w-[300px] h-[200px]"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <h1 className="text-xl font-semibold">UI/UX Design</h1>
          <br />
          Intuitive UI/UX designs for seamless user experiences.
        </SpotlightCard>
       </motion.div>
      </div>
    </div>
  );
};

export default Service;
