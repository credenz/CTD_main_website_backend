import React from 'react'

import Logo from "../../images/Logo.png"
import Ieee from "../../images/ieee.png"
import Credenz from "../../images/about/credenz.jpg"
import Ping from "../../images/about/ping.jpg"
import {motion} from 'framer-motion';
const About = () => {
  return (
    <>
    <div className="bg">
    <motion.div 
     initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.3,duration:1}}
    className="container about">
        <div className="about-ctd text-center" >
            {/* <h1>CTD</h1> */}
            <img src={Logo} alt="" />
            <div className="content">
            <p id='content'>
            <strong> Credenz Tech Dayz </strong>is an intra-college annual techfest organized by the PICT IEEE Student Branch where the brightest minds of PICT compete in technical as well as non-technical events. Participants get a chance to test their logical aptitute and problem solving skills in events like like National Computing Contest and Reverse Coding. The Network Treasure Hunt is an online cryptic hunt that challenges you to use every tool at your disposal and piece together every bit of the puzzle. Inquisitive is a mind-boggling test to question your wits and test your general knowledge. This is a chance for the students to go beyond the traditional spheres of academics and make the most of their potential.
            </p>
            </div>
        </div>
        <div className="aboutus ">
            <h1 className='text-center text-glow'>ABOUT US</h1>
            <div className="ieee">
            <div className="image-ab">

             <div className="l-1">
                    <div>
                    <img className='abimg' src={Ieee} alt="" /></div>
                    </div>
                    <div className="r-1">
                    <div>
                    <h2>Institute of Electrical and Electronics Engineering</h2>
                  <p>The Institute of Electrical and Electronics Engineering (IEEE) is an international organization, which has been the nexus for propagating scientific expertise among people all over the globe. IEEE continues to attract students, faculty and professionals from various fields all around the world and is committed to incorporate diversity in thoughts which is essential for scientific development. IEEE currently has Student Branches at thousands of universities and colleges in hundreds of countries throughout the world.</p>
                    </div>
                    
                    </div>
                    
                    
                   
                    </div>

                    <div className="image-ab">
                    <div className="l-2">
                    <div>
                    <h2>PICT IEEE Student Branch (PISB)</h2>
                    <p>PISB was established in the year 1998 with the aim of inculcating the sense of technical awareness amongst its student members. PISB endeavers to escalate the knowledge and trends in the diverse field of technologies amongst its members. PISB upholds two major events every year, Credenz and Credenz Tech Dayz with the first one being conducted in the even semester and the second one in the odd semester. PISB is also marked by its Women in Engineering (WIE) chapter, an initiative for impowerment of women in the technical domain. PISB has been awarded the Best Student Branch of IEEE in Pune section.</p>
                    </div>
                    
                    </div>
                    
                    
                    <div className="r-2">
                    <div>
                    <img src={Credenz} alt="" /></div>
                    </div>
                    </div>

                    <div className="image-ab">
                    <div className="l-3">
                    <div>
                    <img src={Ping} alt="" /></div>
                    </div>
                    <div className="r-3">
                    <div>
                    <h2>PICT IEEE NEWSLETTER GROUP (P.I.N.G.)</h2>
                    <p>P.I.N.G. (PICT IEEE Newsletter Group) is the official technical magazine of PISB. P.I.N.G. serves as a platform for individuals to portray their technical ingenuity. It highlights articles on cutting-edge technologies from technocrats all around the globe including students, industrialists and faculty members. P.I.N.G. serves as a platform for individuals to portray their technical ingenuity. It highlights articles on cutting-edge technologies from technocrats all around the globe including students, industrialists and faculty members. It also features interviews of distinguished personalities in various technical domains.</p>
                    </div>
                    
                    </div>
                    
                    
                    
                    </div>
                
            </div>
        </div>
    </motion.div>
    </div>
    </>
    
  )
}

export default About