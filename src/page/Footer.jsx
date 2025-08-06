// import React from "react";

// const Footer = () => {
//   return (
//     <div className="bg-black text-white">
//       <div className="mx-[10%] mt-[5%] py-[8%] flex gap-20 justify-between">
//         <div className="w-[20vw]">
//           <h1 className="text-xl font-medium mb-8 ">TECHIWEB</h1>
//           <p className="text-gray-400 font-medium">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rerum
//             alias ex harum possimus sit illo eius repellat sint eaque.
//           </p>
//         </div>

//         <div className="text-center w-[20vw]">
//             <p className="text-xl font-medium mb-8 ">Useful Links</p>
//             <p>Home</p>
//             <p>Project</p>
//             <p>Why Choose Us?</p>
//             <p>Apply</p>
//         </div>

//         <div className="w-[20vw]">
//             <p className="text-xl font-medium mb-8 ">Address</p>
//             <p>Pithampur</p>
//         </div>

//         <div className="w-[20vw]">
//             <h1 className="text-xl font-medium mb-8 ">Subscribe Us</h1>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ipsum maiores.</p>
//             <form action="">
//                 <div className="flex mt-6">
//                     <div><input type="email" placeholder="Enter EmailId" className="bg-white text-black outline-none rounded-md px-3 py-1" /></div>
//                     <div><input type="button" value="Subscribe Us" className="px-3 py-1 bg-blue-600 rounded-md font-medium cursor-pointer" /></div>
//                 </div>
//             </form>
//         </div>
//       </div>

//       <div className="text-center pb-[30px]">
//         <p>2025 @Techiweb.All Right Reserved </p>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="mx-6 md:mx-[10%] py-10 md:py-20 flex flex-col lg:flex-row gap-10 lg:gap-20">
        {/* Brand */}
        <div className="lg:w-[25%]">
          <h1 className="text-2xl font-semibold mb-4">TECHIWEB</h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rerum
            alias ex harum possimus sit illo eius repellat sint eaque.
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
          <p className="text-sm">Pithampur</p>
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
        <p>© 2025 Techiweb. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
