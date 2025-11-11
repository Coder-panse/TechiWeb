import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="mx-6 md:mx-[10%] py-10 md:py-20 flex flex-col lg:flex-row gap-10 lg:gap-20">
        {/* Brand */}
        <div className="lg:w-[25%]">
          <div className="mb-4">
            <img className="w-14 md:w-22" src="techi.png" alt="" />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Techiweb is a full-service technology company delivering innovative
            websites, software, and digital solutions to help businesses grow in
            the digital era.
          </p>
        </div>

        {/* Useful Links */}
        <div className="lg:w-[20%]">
          <p className="text-xl font-medium mb-4">Useful Links</p>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Project</li>
            <li>Why Choose Us?</li>
            <li>Apply</li>
          </ul>
        </div>

        {/* Address */}
        <div className="lg:w-[20%]">
          <p className="text-xl font-medium mb-4">Address</p>
          <p className="text-sm">1771, HAL 2nd cross, Indiranagar, Bangalore</p>
        </div>

        {/* Subscribe */}
        <div className="lg:w-[30%]">
          <h1 className="text-xl font-medium mb-4">Subscribe Us</h1>
          <p className="text-sm text-gray-400">
            Stay updated with our latest news and offers.
          </p>
          <form className="mt-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter Email"
                className="bg-white text-black outline-none rounded-md px-3 py-2 w-full"
              />
              <input
                type="button"
                value="Subscribe"
                className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center py-4 border-t border-gray-700 text-sm text-gray-400">
        <p>© 2020 Techiweb. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
