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
    <div className="bg-c contact">
  <div className="container contact ">
                
            <h1 className='text-glow' style={{marginTop:"40px"}}>CONTACT US</h1>

         

           {contacts.map((contact)=>(
            <motion.div 
              initial={{scale:0}}
            animate={{scale:1}}
            transition={{delay:0.3,duration:1}}
            whileHover={{scale:1.1}}
            className="card" key={contact.id}>
                <div className="content">
                    <div className="imgBx">
                        <img srcSet={contact.image} alt="Team 1" />
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

{/*         
            <iframe srcSet="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3462.7767542984584!2d73.84997668230555!3d18.45736744951612!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac85230ba47%3A0x871eddd0a8a0a108!2sSCTR&#39;S%20Pune%20Institute%20of%20Computer%20Technology!5e0!3m2!1sen!2sin!4v1666801940071!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

           
        </div>
        </div>
    </>
   
  )
}

export default Contact