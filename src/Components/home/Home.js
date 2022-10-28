import React, {useState, useEffect}from 'react'
import Logo from "../../images/Logo.png"
import sp from "../../images/sp.png"
import {motion} from 'framer-motion';
import { NavLink } from 'react-router-dom';
import Home1 from '../../Background/script';

const Home = () => {
  return (
    <Home1>
        <div>
    <motion.div 
     initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.3,duration:1}}
        className="container">
    <div id="home">
    
    
      <div className="right">
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit reiciendis accusamus reprehenderit, nisi omnis nihil ipsam hic soluta beatae quaerat quod natus sequi! Facere modi officia odio aperiam quasi ullam! */}
        <img className="spon"src={sp}  alt=""/><a href="https://peerlist.io/"></a>
        <img id='logo' src={Logo} alt="" />
      </div>
    </div>
    </motion.div>
    </div>
        </Home1>)

}

export default Home