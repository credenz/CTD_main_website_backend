import React from 'react'
import Logo from "../../images/Logo.png"
import {motion} from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div className="bg">
    {/* <div id="stars"></div>
<div id="stars2"></div>
<div id="stars3"></div> */}

<div className='light x1'></div>
  <div className='light x2'></div>
  <div className='light x3'></div>
  <div className='light x4'></div>
  <div className='light x5'></div>
  <div className='light x6'></div>
  <div className='light x7'></div>
  <div className='light x8'></div>
  <div className='light x9'></div>
<motion.div 
 initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.3,duration:1}}
    className="container">
<div id="home">
  <div className="left" >
  <h2 >TO KNOW ABOUT EVENTS </h2>
    <p >Click Below</p>
    {/* <button> <a href="/events">Events</a> </button> */}
    <NavLink   to="/events" className="btn-flip" data-back="CHECK OUT" data-front="EVENTS"></NavLink>
  </div>
  <div className="right">
    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit reiciendis accusamus reprehenderit, nisi omnis nihil ipsam hic soluta beatae quaerat quod natus sequi! Facere modi officia odio aperiam quasi ullam! */}
    <img id='logo' src={Logo} alt="" />
  </div>
</div>
</motion.div>
</div>
    </>

  )

}

export default Home