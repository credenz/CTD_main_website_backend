import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Ncc from "../../images/ncc.png"
import Rc from "../../images/rc.png";
//import Inqu from "../../images/inqu.png";
import Nth from "../../images/nth.png";
//import Modal from "./Modal";
//import styles from "./Modal.module.css";
import Tabs from "./Tabs";
import {motion} from 'framer-motion';

const Events = () => {
  //const [isOpen, setIsOpen] = useState(false);
  const [popupcontent, setpopupcontent]=useState([]);
  const [popuptogle,setpopuptogle]=useState(false);
  const [styling, setstyling]=useState(null);
  const changecontent=(events)=>{
     setpopupcontent([events]);
     setpopuptogle(!popuptogle);
     if(styling===null){
      setstyling ( {posiion:'fixed'})
    }else{setstyling(null)};
  };
  
  const [events ,setEvent] = useState([
    {
      image:Nth, 
      heade:"National Treasure Hunt", 
      //para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?lorem500",
      butto:"Details",
      butto2:"Register",
      info:`Bored with the same regular classes?\n 
      Want to deep dive into the world of ciphers and puzzles?\n 
      NTH got you covered! Network Treasure Hunt is an online version of a treasure hunt but with more adventure and riddles!\n 
      Put on your thinking hats and join us in the event where LOGIC is all you can think of`,
      rules:`1: All the puzzles will be displayed on nth.credenz.in \n
       2: Each puzzle leads to a unique keyword. This keyword will take you to the next question.\n 
       3: The Contest will show a real-time leaderboard for all players.\n 
       4: After the contest is concluded, the first person on the leaderboard will be declared as the winner.\n 
       5: It is a solo contest, hence any activity with teaming up is strictly restricted.`,
      contact:`ABC : +91 1234 
      DEF : +91 1234`,
      id:1
    },
    {
      image:Ncc, 
      heade:"National Computing Contest", 
     // para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?lorem500",
      butto:"Details",
      butto2:"Register",
      info:"The best algorithm is ten steps ahead of the second-best. So are you good enough to code the best one? National Computing Competition lets you test your coding skills with other coders. Sign Up to compete for the 'Overlord Coder' title and get a chance to experience real-world coding competition!",
      rules:"1: The contest will contain 5-6 problems that need to be coded in C/C++/Python.\n 2: It will be individual competition hence teaming up is strictly restricted.\n 3: Marking scheme - Junior (+100, -0), Senior (+100, -50) (First value in brackets indicate marks for correct submission and second value in brackets indicate marks for wrong submission \n 4: The person who submits the most correct solutions will be considered WINNER.",
      contact:"ABC : +91 1234 \n DEF : +91 1234",
      id:2
    },
    {
      image:Rc, 
      heade:"Reverse Coding", 
     // para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?lorem500",
     butto:"Details",
     butto2:"Register",
     info:"Reverse Coding is a coding competition to analyze your problem solving ability with programming knowledge along with mathematical skills. Test your ability to decode the pattern through a decipher and code round in any of the languages - C, C++, Java and Python.",
     rules:"1: The contest will contain 5-6 problems that need to be coded in C/C++/Python.\n 2: It will be individual competition hence teaming up is strictly restricted.\n 3: Marking scheme - Junior (+100, -0), Senior (+100, -50) (First value in brackets indicate marks for correct submission and second value in brackets indicate marks for wrong submission)\n 4: The person who submits the most correct solutions will be considered WINNER.",
     contact:"ABC : +91 1234 \n DEF : +91 1234",
      id:3
    },
    // {
    //   image:Nth, 
    //   heade:"Nth", 
    //   para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?lorem500",
    //   button:"Read More",
    //   id:4
    // },
    
  ])
  const placeOrder = (event) =>{
    const event_id = event.id

    var data = JSON.stringify({
      event_id
    });
    
    var config = {
      method: 'post',
      url: 'http://127.0.0.1:8000/place_order/',
      headers: { 
        'Authorization': `Token ${localStorage.getItem("auth-token")}`, 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    <>
    <div className="bg-event">
    <div className="head text-center">
            <h1 className='text-glow'>EVENTS</h1>
        </div>
    <div className="container">
        
        {/* <div>
        LUMINANCE
    </div> */}

        <div className="container-e" style={styling}>

        {events.map((event)=>(
          <div className="card" key={event.id} >
            <div className="box">
              <div className="content">
           {/* <h2>03</h2> */}
            <img style={{height:"150px"}} src={event.image} alt="" />
            <h4>{event.heade}</h4>
              <button onClick={()=>changecontent(event)}>
               {event.butto}
              </button>
      {/* {isOpen && <Modal setIsOpen={setIsOpen} />} */}
            <a href="#"onClick={()=>placeOrder(event)}>{event.butto2}</a>
      
      </div>
    </div>
  </div>
 
           ))}
          </div>
          {popuptogle&&<div className="pop_up_container" onClick={changecontent}>
            <motion.div 
             initial={{y:"-200%"}}
            animate={{y:0}}
            transition={{ type:'tween', stiffness:10}}
             className="pop_up_body" onClick={(e)=>e.stopPropagation()}>
            <div className="pop_up_header">
              <button onClick={changecontent}>x</button>
            </div>
            <div className='pop_up_content'>
              {popupcontent.map((pop)=>{
                return(
                  <div className="pop_up_card">

                    {/* <h1>{pop.heade}</h1>
                    <p>Details: {pop.info}</p>
                    <p>Rules: {pop.rules}</p>
                    <p>Contact: {pop.contact}</p>

                    <div> */}
      <h1>{pop.heade}</h1>
      <Tabs>
        <div  label="Details" >
          {pop.info}
        </div>
        <div  label="Rules">
          {pop.rules}
        </div>
        <div label="Contact">
          {pop.contact}
        </div>
      </Tabs>
    {/* </div> */}
                    
                    <p></p>
                  </div>
              
                )
              })}
            </div>
            </motion.div>
        </div>}
        </div>
        </div>
</>
    
  )
}

export default Events