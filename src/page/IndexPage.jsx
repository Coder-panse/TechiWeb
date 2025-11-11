import React from 'react'
import Service from './Service'
import Work from './Work'
import Home from '../Home/Home'
import Choose from './Choose'
import ContactSection from '../Component/ContactSection'
import { Element } from 'react-scroll'

const IndexPage = () => {
  return (
    <div>
        <Home/>
        <Work/>
        {/* for scroll to services */}
        <Element name='service'>
           <Service/>
        </Element>
        <Choose/>
        <ContactSection/>
    </div>
  )
}

export default IndexPage