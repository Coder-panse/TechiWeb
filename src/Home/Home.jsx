import React, { useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Navbar from "../Navbar/Navbar";

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
const Home = () => {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%,#020617 50%,${color})`;

  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);
  return (
    <div>
      <motion.section
        style={{ backgroundImage }}
        className=" min-h-screen overflow-hidden bg-gray-950  px-4 pt-10 text-gray-200"
      >
        {/* <Navbar />  */}

        <div className="h-screen w-full flex justify-center items-center flex-col gap-5 text-center">
          <p 
         
          className="text-4xl font-semibold md:text-5xl lg:text-6xl lg:font-bold">
            Innovate . Integrate . Dominate.
            
          </p>
          <p className="text-lg font-medium">
            Techiweb crafts smart, scalable digital solutions — websites, apps,
            and everything in between.
          </p>
          <motion.button
            style={{ border, boxShadow }}
            className="rounded-full px-4 py-2 transition-colors text-gray-200 cursor-pointer"
          >
            Know More
          </motion.button>
        </div>

        {/* Star effect */}
        <div className="absolute inset-0 z-0">
          <Canvas>
            <Stars radius={50} count={2500} factor={4} fade speed={2} />
          </Canvas>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
