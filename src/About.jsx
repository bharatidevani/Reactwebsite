import React from 'react'
import Common from './Common'
import web from '../src/imges/1.jpg'


const About = () => {
  return (
    <>
      <Common name='Contact now' 
                imgsrc={web}
                visit='/service' 
                btnname='contact Now'/>
    </>
  )
}

export default About
