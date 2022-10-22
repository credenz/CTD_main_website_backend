import React, { useState } from 'react';
import Ncc from "../../images/ncc.png"
import Rc from "../../images/rc.png";
import Inqu from "../../images/inqu.png";
import Nth from "../../images/nth.png";
const Events = () => {
  const [events ,setEvent] = useState([
    {
      image:Nth, 
      heade:"Nth", 
      para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?lorem500",
      button:"Read More",
      
      id:1
    },
    {
      image:Nth, 
      heade:"Nth", 
      para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?lorem500",
      button:"Read More",
      id:2
    },
    {
      image:Nth, 
      heade:"Nth", 
      para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?lorem500",
      button:"Read More",
      id:3
    },
    {
      image:Nth, 
      heade:"Nth", 
      para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?lorem500",
      button:"Read More",
      id:4
    },
    
  ])
  return (
    <>
    <div className="bg-event">
    <div className="container">
        <div className="head text-center">
            <h1 className='text-glow'>EVENTS</h1>
        </div>
        {/* <div>
        LUMINANCE
    </div> */}

        <div className="container-e">

        {events.map((event)=>(
          <div className="card" key={event.id} >
            <div className="box">
              <div className="content">
           {/* <h2>03</h2> */}
            <img style={{height:"150px"}} src={event.image} alt="" />
            <h3>{event.heade}</h3>
              <p>{event.para}</p>
        <a href="#">{event.button}</a>
      
      </div>
    </div>
  </div>
 
           ))}
        </div>
        </div>
        </div>
</>
    
  )
}

export default Events