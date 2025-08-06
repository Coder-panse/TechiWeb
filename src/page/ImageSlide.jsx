import React from 'react'
import Marquee from "react-fast-marquee";

const ImageSlide = () => {
  return (

    <div className='h-52 w-[100vw] flex justify-between'>
        <Marquee speed={50}>
            <div >
            <img className='w-20' src="/mavylogo.jpeg" alt="" />
        </div>
        <div>
            <img className='w-20' src="/mavylogo.jpeg" alt="" />
        </div>
        <div >
            <img className='w-20' src="/mavylogo.jpeg" alt="" />
        </div>
        <div >
            <img className='w-20' src="/mavylogo.jpeg" alt="" />
        </div>
        <div> 
            <img className='w-20' src="/mavylogo.jpeg" alt="" />
        </div>
        <div>
            <img className='w-20' src="/mavylogo.jpeg" alt="" />
        </div>
        </Marquee>
    </div>
  )
}

export default ImageSlide