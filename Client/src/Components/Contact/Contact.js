import React, { useState } from 'react'
import Img1 from "../../images/contact/1.jpg"
import Img2 from "../../images/contact/2.jpg"
import Img3 from "../../images/contact/3.jpg"
import Img4 from "../../images/contact/sanyog.jpg"
import Img5 from "../../images/contact/siddhi.jpg"
import Img6 from "../../images/contact/nidhi.jpg"

const Contact = () => {

    const[contacts, setContacts]= useState([
        
        {image:Img5, headc:"Siddhi", number:"924423947", id:2},
        {image:Img4, headc:"Sanyog", number:"924423947", id:1},
        {image:Img6, headc:"Nidhi", number:"924423947", id:3},
    ])
  return (
    <>
    <div className="bg-c">
  <div className="container ">
                
            <h1 className='text-glow' style={{marginTop:"70px"}}>Contact us</h1>

            <h2>We Are Here To Help</h2>

           {contacts.map((contact)=>(
            <div className="card" key={contact.id}>
                <div className="content">
                    <div className="imgBx">
                        <img src={contact.image} alt="Team 1" srcset=""/>
                    </div>
                    <div className="contentBx">
                        <h3>{contact.headc}
                        <br />
                        <span>{contact.number}</span>
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

        </div>
        </div>
    </>
   
  )
}

export default Contact