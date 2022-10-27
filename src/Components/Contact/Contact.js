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
  <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.3,duration:1}}
  className="container contact ">
                
            <h1 className='text-glow' style={{marginTop:"40px"}}>CONTACT US</h1>

         

           {contacts.map((contact)=>(
            <div 
              
          
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
            </div>
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

          
          <div className="map">
            <iframe
              title="PICT College map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4897.359063800666!2d73.84816687900963!3d18.457878057250266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac85230ba47%3A0x871eddd0a8a0a108!2sSCTR&#39;S%20Pune%20Institute%20of%20Computer%20Technology!5e0!3m2!1sen!2sin!4v1666807344884!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
       

           
        </motion.div>
        </div>
    </>
   
  )
}

export default Contact