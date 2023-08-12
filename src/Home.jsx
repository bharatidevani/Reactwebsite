import React from 'react'
import web from '../src/imges/r223.jpg'
import { NavLink } from 'react-router-dom'
import Common from './Common'


const Home = () => {
  return (
    <>
        <Common name='Grow your Bussiness now' 
                imgsrc={web}
                visit='/service' 
                btnname='Start Now' />
    </>
  )
}

export default Home
