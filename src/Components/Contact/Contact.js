import React, { useState } from 'react'
import {motion} from 'framer-motion';
import Img1 from "../../images/contact/1.jpg"
import Img2 from "../../images/contact/2.jpg"
import Img3 from "../../images/contact/3.jpg"
import Img4 from "../../images/contact/sanyog.jpg"
import Img5 from "../../images/contact/siddhi.jpg"
import Img6 from "../../images/contact/nidhi.jpg"

const Contact = () => {

    const[contacts, setContacts]= useState([
        
        {image:Img5, headc:"Siddhi Patil", number:"7887371510", id:2},
        {image:Img4, headc:"Sanyog Kalantri", number:"7507034878", id:1},
        {image:Img6, headc:"Nidhi Yadav", number:"8767887493", id:3},
    ])
  return (
    <>
    <div className="bg-c">
  <div className="container ">
                
            <h1 className='text-glow' style={{marginTop:"70px"}}>CONTACT US</h1>

            <motion.h2  initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.5,duration:2.0}}> <p>We Are Here To Help</p> </motion.h2>

           {contacts.map((contact)=>(
            <motion.div 
              initial={{scale:0}}
            animate={{scale:1}}
            transition={{delay:0.3,duration:1}}
            whileHover={{scale:1.1}}
            className="card" key={contact.id}>
                <div className="content">
                    <div className="imgBx">
                        <img src={contact.image} alt="Team 1" srcset=""/>
                    </div>
                    <div className="contentBx">
                        <h3>{contact.headc}
                        <br />
                      
                        <span>Contact No- {contact.number}</span>
                    </h3>
                    </div>
                </div>
            </motion.div>
           ))}
            {/* <!-- <ul class="sci">
                <li style="--i:1">
                    <a href="#">link</a>
                </li>
                <li style="--i:2">
                    <a href="#">icon</a>
                </li>
                <li style="--i:3">
                    <a href="#">icon</a>
                </li>
            </ul> --> */}

        </div>
        </div>
    </>
   
  )
}

export default Contact