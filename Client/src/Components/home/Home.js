import React from 'react'

import Logo from "../../images/Logo.png"
import {motion} from 'framer-motion';


const Home = () => {
  return (
    <>
    <div className="bg">
    <div id="stars"></div>
<div id="stars2"></div>
<div id="stars3"></div>
<div className="container">
<div id="home">
  <div className="left" >
  <h2 >TO KNOW ABOUT EVENTS </h2>
    <p >Click Below</p>
    {/* <button> <a href="/events">Events</a> </button> */}
    <a   href="/events" className="btn-flip" data-back="CHECK OUT" data-front="EVENTS"></a>
  </div>
  <motion.div className="right"
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.5,duration:1.5}}
  >
    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit reiciendis accusamus reprehenderit, nisi omnis nihil ipsam hic soluta beatae quaerat quod natus sequi! Facere modi officia odio aperiam quasi ullam! */}
    <img id='logo' src={Logo} alt="" />
  </motion.div>
</div>
</div>
</div>
    </>

  )

}

export default Home