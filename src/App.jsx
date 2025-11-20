import React, { useRef } from "react";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Work from "./page/Work";
import Studio from "./page/Studio";
import Service from "./page/Service";
import WhyChooseUs from "./page/Choose";
import Footer from "./page/Footer";
import Contact from "./page/Contact";
import IndexPage from "./page/IndexPage";
import Navbar from "./Navbar/Navbar";
import Project from "./page/Project";

import { Element } from "react-scroll";
import ContactForm from "./page/ContactForm";
// import ImageSlide from './page/ImageSlide'

const App = () => {
  const serviceRef = useRef(null);
  return (
    <>
    <ToastContainer position="top-center" theme="dark" />
      <Navbar />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/work" element={<Project />} />
        <Route path="/apply" element={<Contact />} />
        <Route path="/contact" element={<ContactForm/>}/>
      </Routes>
      <Footer />

    </>

    // <>

    // {/* <Home/> */}
    // {/* <ImageSlide/> */}
    // {/* <Work/>
    // <Service/>
    // <WhyChooseUs/>
    // <Footer/> */}
    // <Contact/>
    // </>
  );
};

export default App;
