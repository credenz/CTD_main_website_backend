import React, { useState } from 'react'
import {motion} from 'framer-motion';
import Img1 from "../../images/contact/1.jpg"
import Img2 from "../../images/contact/2.jpg"
import Img3 from "../../images/contact/3.jpg"
import Img4 from "../../images/contact/sanyog.jpg"
import Img5 from "../../images/contact/siddhi.jpg"
import Img6 from "../../images/contact/nidhi.jpg"
import { Col, Container, Row } from "react-bootstrap";

const Contact = () => {

    const[contacts, setContacts]= useState([
        
        {image:Img5, headc:"Siddhi Patil", number:<a href="tel://+917887371510"  style = {{ textDecoration:"none", color:"white" }}>+91 78873 71510</a>, id:2},
        {image:Img4, headc:"Sanyog Kalantri", number:<a href="tel://+917507034878"  style = {{ textDecoration:"none", color:"white" }}>+91 75070 34878</a>, id:1},
        {image:Img6, headc:"Nidhi Yadav", number:<a href="tel://+918767887493"  style = {{ textDecoration:"none", color:"white" }}>+91 87678 87493</a>, id:3},
    ])
  return (
    <>
    <div className="bg-c contact">
  <div className="container contact ">
                
            <h1 className='text-glow' style={{marginTop:"40px"}}>CONTACT US</h1>

         

           {contacts.map((contact)=>(
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.2,duration:0.3}}
            className="card" key={contact.id}>
                <div className="content">
                    <div className="imgBx">
                        <img srcSet={contact.image} alt="Team 1" />
                    </div>
                    <div className="contentBx">
                        <h3>{contact.headc}
                        <br />
                      
                        <span>Contact No- {contact.number} </span>
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
        <Container fluid className='container-lower-contactUs contact-map'>
        <Row style={{ margin: 0 }}>
          <Col
            data-aos='fade-up'
            data-aos-duration='1000'
            data-aos-delay='300'
            style={{
              height: "500px",
              backgroundColor: "inherit",
              padding: "0",
            }}
            className='d-flex justify-content-center'>
            <iframe
              title='googleMapsApi'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5761897254206!2d73.84864491471969!3d18.457542087445745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac85230ba47%3A0x871eddd0a8a0a108!2sSCTR&#39;S%20Pune%20Institute%20of%20Computer%20Technology!5e0!3m2!1sen!2sin!4v1604491302435!5m2!1sen!2sin'
              width='100%'
              height='100%'
              frameBorder='0'
              allowFullScreen=''
              aria-hidden='false'
              tabIndex='0'
              className='shadow-lg google-maps width'></iframe>{" "}
            {/* <Image src='https://source.unsplash.com/random/700x500' fluid /> */}
          </Col>
        </Row>
      </Container>
       
        </div>
    </>
   
  )
}

export default Contact