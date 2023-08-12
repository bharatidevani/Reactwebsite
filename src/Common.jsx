import React from 'react'
import web from '../src/imges/r223.jpg'
import { NavLink } from 'react-router-dom'

const Common = (prop) => {
  return (
    <>
      <section id='header' className="d-flex align-items-center">
        <div className='container-fluid nav_bg'>
            <div className='row'>
             <div className='col-10 mx-auto'>
                <div className='row'>
                <div className='col-md-6 pt-5 pt-lg-0 order-lg-1 d-flex flex-column justify-content-center'>
                    <h1>{prop.name}</h1>
                    <h2 className='my-3'>
                        We are the team of talented developer
                    </h2>
                    <div className='mt-3'>
                        <NavLink to={prop.visit} className='btn_get_started'>{prop.btnname}</NavLink>
                    </div>
                </div>
                
                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                    <img src={prop.imgsrc} className='img-fluid animated' alt='img'/>

                </div>
                </div>
             </div>
            </div>
        </div>
        </section>
    </>
  )
}

export default Common