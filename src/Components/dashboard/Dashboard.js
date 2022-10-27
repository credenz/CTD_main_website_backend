import React from 'react'
import Ctd from "../../images/ctd.png"
import Ctdcopy from "../../images/ctdCopy.png"
import User from "../../images/user.png"
import {motion} from 'framer-motion';

const Dashboard = () => {
  return (
    <>
        <div className="bg ">
         <motion.div 
          initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.3,duration:0.7}}
         className="dashboard">

            <figure class="snip1336">
            <div className="imgctd">
  <img src={Ctdcopy} alt="sample87" />
  </div>
  <figcaption>
    {/* <img src={User}
     class="profile" /> */}
      <div className="details">
    <h2>User Name<span>user@gmail.com</span></h2>

    <p>91234567789</p>
    </div>
     
     <div className="selected-center">
    <p>Registered Events </p>
    
    <div className="selected-events">
    <ul>
      <li>NTH</li>
      <li>Datawiz</li>
      <li>NCC</li>
      <li>NTH</li>
    </ul>
    </div>
    </div>
    {/* <a href="#" class="follow">Follow</a>
    <a href="#" class="info">More Info</a> */}
  </figcaption>
</figure>
</motion.div>
            
        </div>
    </>
  )
}

export default Dashboard