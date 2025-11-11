import React from "react";
import { useNavigate } from "react-router-dom";

const ContactSection = () => {

    const navigate=useNavigate()
  return (
    <div>
      <section className="bg-black py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
  <div className="flex flex-col lg:flex-row justify-between items-center text-white mx-[8%] gap-8">
    
    {/* Left Text Section */}
    <div className="text-3xl sm:text-4xl font-semibold text-center lg:text-left">
      Let's Create Something <br />
      <span className="bg-indigo-600 px-8 py-4 rounded-full mt-4 inline-block">
        Amazing Together
      </span>
    </div>

    {/* Right Button */}
    <button onClick={()=>{navigate("/contact");window.scrollTo({ top: 0, behavior: "smooth" });}} className="bg-white text-black text-lg sm:text-xl font-medium cursor-pointer rounded-full px-8 py-3 hover:bg-indigo-600 hover:text-white transition-all duration-300">
      Contact Us
    </button>
    
  </div>
</section>

    </div>
  );
};

export default ContactSection;
