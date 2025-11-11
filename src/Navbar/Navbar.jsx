import React, { useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-scroll"; // import Link from react-scroll

// import { userData } from "../context/UserContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location=useLocation()

  return (
    <nav className="absolute top-0 left-0 w-[90vw] z-10 mt-8">
      <div className="flex justify-between items-center ml-[40px] md:ml-[80px]">
        <div>
          <img className="w-14 md:w-22" src="techi.png" alt="" />
        </div>

        <div className="font-medium hidden md:block">
          <ul className="flex gap-12 text-lg text-white">
            <li>
              <NavLink to="/">Home</NavLink>

              {/*  className={({isActive})=>isActive? `text-orange-500`:""}  inside navlink */}
            </li>
            <li>
              <NavLink to="/work">Work</NavLink>
            </li>

            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <Link
                to="service" // must match the Element name
                smooth={true} // enable smooth scroll
                duration={600} // animation duration
                offset={-80}
                className="cursor-pointer"
                
              >
                {
                  location.pathname==="/"?"Service":""
                }
              </Link>
            </li>

             
          </ul>
        </div>

        <div className="flex gap-4 sm:gap-8">
          {/* <Link to='/cart'><IoMdCart style={{ fontSize: "25px" }} /></Link> */}
          <NavLink
            to="/apply"
            className="px-4 py-1  md:px-5 flex items-center gap-2 md:py-2 rounded-full bg-blue-600 text-white font-medium"
          >
            Apply <FaArrowUpRightFromSquare />
          </NavLink>
          <div>
            <button onClick={() => setIsOpen(!isOpen)}>
              <RiMenu3Fill className="md:hidden text-[25px] text-white" />
            </button>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ x: "100%" }} // Start from the right
        animate={{ x: isOpen ? 0 : "100%" }} // Slide in when open, slide out when closed
        transition={{ stiffness: 100, damping: 15 }} //type:"spring", before stiffness
        className="fixed top-0 right-0 h-full w-2/3 bg-gray-800 text-white z-20 text-lg py-10 shadow-lg md:hidden"
      >
        <div className="w-full flex justify-end pr-10 sm:pr-20">
          <button onClick={() => setIsOpen(!isOpen)}>
            <IoCloseSharp className="  md:hidden text-[25px]" />
          </button>
        </div>

        <div className="flex flex-col items-center mt-10">
          <ul className="space-y-6">
            <li className="cursor-pointer hover:text-gray-300">
              <NavLink to="/" onClick={() => setIsOpen(!isOpen)}>
                Home
              </NavLink>
            </li>
            <li className="cursor-pointer hover:text-gray-300">
              <NavLink to="/work" onClick={() => setIsOpen(!isOpen)}>
                Work
              </NavLink>
            </li>
            <li className="cursor-pointer hover:text-gray-300">
              <NavLink to="#" onClick={() => setIsOpen(!isOpen)}>
                Service
              </NavLink>
            </li>
          </ul>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
