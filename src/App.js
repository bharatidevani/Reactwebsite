import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { Route,Routes } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Service from './Service'
import About from './About'
import Navbar from './Navbar'
import './index.scss';
import Footer from './Footer'

const App = () => {
  return (
   <>
    <Navbar />
   <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/contact' Component={Contact}/>
        <Route path='/about' Component={About}/>
        <Route path='/service' Component={Service}/>
   </Routes>
   <Footer/>
      
   </>
  )
}

export default App;

