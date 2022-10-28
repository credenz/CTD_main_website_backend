import React, { useState, useEffect } from "react";
// import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import Ncc from "../../images/ncc.png";
import Rc from "../../images/rc.png";
import dataw from "../../images/dataw.png"
//import Inqu from "../../images/inqu.png";
import Nth from "../../images/nth.png";
//import Modal from "./Modal";
//import styles from "./Modal.module.css";
import Tabs from "./Tabs";
import {motion} from 'framer-motion';
import axios from "axios";
import Loader from 'react-loaders';
import { ToastContainer, toast } from 'react-toastify';
import { isLogin } from "../utils/index";
import ReactTooltip from 'react-tooltip';

const Events = () => {

  useEffect(() => {
    fetchprofile();
    setstatus(isLogin());
  }, []);

 

  //const [isOpen, setIsOpen] = useState(false);
  const [popupcontent, setpopupcontent] = useState([]);
  const [popuptogle, setpopuptogle] = useState(false);
  const [styling, setstyling] = useState(null);
  const [eventArray, seteventArray] = useState([]);
  const [status, setstatus] = useState(false);
  const [userProfile,setUserProfile] = useState(null);

  const changecontent = (events) => {
    setpopupcontent([events]);
    setpopuptogle(!popuptogle);
    if (styling === null) {
      setstyling({ posiion: "fixed" });
    } else {
      setstyling(null);
    }
  };
  
  const [popupcontenti, setpopupcontenti] = useState([]);
  const [popuptoglei, setpopuptoglei] = useState(false);
  // const [styling, setstyling] = useState(null);
  const changecontenti = (events) => {
    setpopupcontenti([events]);
    setpopuptoglei(!popuptoglei);
 
  };

  const [events, setEvent] = useState([
    {
      image: Nth,
      heade: "National Treasure Hunt",
      //para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?lorem500",
      butto: "Details",
      butto2: "Register",
      butto3:"Registered",
      info: "Bored with the same regular class?\n Want to deep dive into the world of ciphers and puzzles?\n  NTH got you covered! Network Treasure Hunt is an online version of a treasure hunt but with more adventure and riddles!\n  Put on your thinking hats and join us in the event where LOGIC is all you can think of",
      rules1: "1: All the puzzles will be displayed on nth.credenz.in",
      rules2:
        "2: Each puzzle leads to a unique keyword. This keyword will take you to the next question.",
      rules3:
        "3: The Contest will show a real-time leaderboard for all players.",
      rules4:
        "4: After the contest is concluded, the first person on the leaderboard will be declared as the winner.",
      rules5:
        "5: It is a solo contest, hence any activity with teaming up is strictly restricted.",
      contact1: <a href="tel://+918983594252"  style = {{ textDecoration:"none", color:"white" }}>Harsh Bhat :  +91 89835 94252</a>,
      contact2: <a href="tel://+918208566035"  style = {{ textDecoration:"none", color:"white" }}>Devraj Shetake :  +91 82085 66305</a>,
      id: 4,
      name : "NTH",
    },
    {
      image: Ncc,
      heade: "National Computing Contest",
      // para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?lorem500",
      butto: "Details",
      butto2: "Register",
      butto3:"Registered",
      info: "The best algorithm is ten steps ahead of the second-best. So are you good enough to code the best one? National Computing Competition lets you test your coding skills with other coders. Sign Up to compete for the 'Overlord Coder' title and get a chance to experience real-world coding competition!",
      rules1:
        "1: Contest will contain 5-6 problems that need to be coded in Python, C++, or C.",
      rules2:
        " 2: It will be individual competition hence teaming up is strictly restricted.",
      rules3:
        "3: For the first correct submission of a question, you will receive the points currently available on that question.",
      rules4:
        "4: For each wrong submission before the correct submission, 10 points will be deducted. If the question was already solved before, no points will be deducted for that question.",
      rules5:
        "5: Plagiarism checks would be done after the contest.",
      rules6:
        "6: The person who submits the most correct solutions will be considered WINNER.",
        contact1: <a href="tel://+919822451588"  style = {{ textDecoration:"none", color:"white" }}>Jahan Chaware :  +91 98224 51588</a>,
        contact2: <a href="tel://+917620573556"  style = {{ textDecoration:"none", color:"white" }}>Ruturaj Patil :  +91 76205 73556</a>,
      id: 1,
      name : "NCC",
    },
    {
      image: Rc,
      heade: "Reverse Coding",
      // para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?lorem500",
      butto: "Details",
      butto2: "Register",

      butto3:"Registered",
      info: "Reverse Coding is a coding competition to analyze your problem solving ability with programming knowledge along with mathematical skills. Test your ability to decode the pattern through a decipher and code round in any of the languages - C, C++, Java and Python.",
      rules1:
        "1: Contest will contain 5-6 problems that need to be coded in Python, C++, or C.",
      rules2:
        " 2: It will be individual competition hence teaming up is strictly restricted.",
      rules3:
        "3: For the first correct submission of a question, you will receive the points currently available on that question.",
      rules4:
        "4: For each wrong submission before the correct submission, 10 points will be deducted. If the question was already solved before, no points will be deducted for that question.",
      rules5:
        "5: Plagiarism checks would be done after the contest.",
      rules6:
        "6: The person who submits the most correct solutions will be considered WINNER.",
      contact1: <a href="tel://+919822451588"  style = {{ textDecoration:"none", color:"white" }}>Jahan Chaware :  +91 98224 51588</a>,
      contact2: <a href="tel://+917620573556"  style = {{ textDecoration:"none", color:"white" }}>Ruturaj Patil :  +91 76205 73556</a>,
      id: 2,
      name : "RC"
    },
    {
      image: dataw,
      heade: "DataWiz",
      butto: "Details",
      butto2: "Register",

      butto3:"Registered",
      info: "Get ready to set off on a journey to the world of data science. DataWiz gives you an opportunity to test your machine learning and data analytics skills, work on datasets to analyse and make predictions using your models. Datawiz is a machine learning competition hosted on Kaggle.",
      rules1:
        "1: Each team of students may consist of a maximum of 3 participants. One account per participant",
      rules2:
        " 2: Signing In on Kaggle through Multiple accounts is prohibited.",
      rules3:
        "3: Submission Limits: You may submit a maximum of 10 entries per day. Final 2 submissions will be considered for judging.",
      rules4:
        "4: Privately sharing code or data outside of teams is not permitted. Results should be reproducible to be eligible for prizes.",
      contact1: <a href="tel://+919028093133"  style = {{ textDecoration:"none", color:"white" }}>Manas Sewatkar :  +91 90280 93133</a>,
      contact2: <a href="tel://+919370546447"  style = {{ textDecoration:"none", color:"white" }}>Aditya Medhe :  +91 93705 46447</a>,
      id: 3,
      name : "Datawiz"
    },
    // {
    //   image:Nth,
    //   heade:"Nth",
    //   para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?lorem500",
    //   button:"Read More",
    //   id:4
    // },
  ]);



  const placeOrder = (event) =>{
    setpopuptoglei(false);
    toast.success('Registration successful');

    const event_id = event.id
    var data = JSON.stringify({
      event_id
    });
    
    var config = {
      method: 'post',
      url: 'https://admin.ctd.pictieee.in/place_order/',
      headers: { 
        'Authorization': `Token ${localStorage.getItem("auth-token")}`, 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      fetchprofile();
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const fetchprofile = () => {
    var config = {
      method: 'get',
      url: 'https://admin.ctd.pictieee.in/account_detail/',
      headers: { 
        'Authorization': `Token ${localStorage.getItem("auth-token")}`
      }
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      return response.data
    })
    .then(function (data) {
      seteventArray(data.events);
      console.log(eventArray);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <>
      <div className="bg-event">
        <div className="head text-center">
          <h1 className="text-glow ">EVENTS</h1>
        </div>
        <div className="container">
          {/* <div>
        LUMINANCE
    </div> */}
          
          <div className="container-e" style={styling}>
            {events.map((event) => (
              <div className="card" key={event.id}>
                <div className="box">
                  <div className="content">
                    {/* <h2>03</h2> */}
                    <img style={{ height: "150px" }} src={event.image} alt="" />
                    <h3>{event.heade}</h3>
                   
                    
                    <div className="events-button">
                    <button onClick={() => changecontent(event)}>
                      {event.butto}
                    </button>
                  
                 
                    {/* {isOpen && <Modal setIsOpen={setIsOpen} />} */}

                    {/* {if not logged in} */}
                    {event.name !== "NTH" && !status && <div>
                     <Link to={`/login`} style={{border:"3px solid #50BFE6"}} onClick={()=>{
                      toast.info('Please log-in first!');
                     }}>
                      Register
                      </Link>
                    </div>}

                     {/* {logged in} */}
                    {event.name !== "NTH" && status && !eventArray.includes(event.name) && 
                    <div>
                    <button  style={{border:"3px solid #66FF66"}} onClick={() => changecontenti(event)}>
                      {event.butto2}
                    </button> 
                    </div> }
                  
                   {/* {If NTH} */}
                   {event.name === "NTH"  && !eventArray.includes(event.name) && 
                    <div>
                    <a href="https://nth.pictieee.in/register/" target={"_blank"}  style={{border:"3px solid #50BFE6"}} >
                      {event.butto2}
                    </a> 
                    </div> }
                   
                  {/* registered button */}

                    {eventArray.includes(event.name) && <button  style={{border:"3px solid #FD0E35"}} disabled>
                    {event.butto3}
                    </button>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {popuptogle && (
            <div className="pop_up_container" onClick={changecontent}>
              <div className="pop_up_body" onClick={(e) => e.stopPropagation()}>
                <div className="pop_up_header">
                  <button style={{backgroundColor : "transparent", color : "white", border : "0"}} onClick={changecontent}>x</button>
                </div>
                <div className="pop_up_content">
                  {popupcontent.map((pop) => {
                    return (
                      <div className="pop_up_card">
                        {/* <h1>{pop.heade}</h1>
                    <p>Details: {pop.info}</p>
                    <p>Rules: {pop.rules}</p>
                    <p>Contact: {pop.contact}</p>

                    <div> */}
                        <h1>{pop.heade}</h1>
                        <Tabs>
                          <div label="Details">{pop.info}</div>
                          <div label="Rules">
                            {pop.rules1} <br />
                            {pop.rules2}
                            <br />
                            {pop.rules3}
                            <br />
                            {pop.rules4}
                            <br />
                            {pop.rules5}
                            <br />
                          </div>
                          <div label="Contact">
                            {pop.contact1}
                            <br />
                            {pop.contact2}
                            <br />
                          </div>
                        </Tabs>
                        {/* </div> */}

                        <p></p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
          {popuptoglei && (
            <div
            
             className="pop_up_container2" onClick={changecontenti}>
              <div className="pop_up_body2" onClick={(e) => e.stopPropagation()}>
                <div className="pop_up_header2">
                  <button style={{backgroundColor : "transparent", color : "white", border : "0"}} onClick={changecontenti}>x</button>
                </div>
                <div className="pop_up_content2">
                  {popupcontenti.map((pop) => {
                    return (
                      <div className="pop_up_card2">
                        <p>Are you sure you want to register for {pop.heade}?</p>
                        <div className="pop_up_button">
                        {/* <button className="btn_cancel">Cancel</button> */}

      {/*-------------- backend work for confirmation to register -------------------------------*/}
                         <button className="btn_confirm"><a href="#" onClick={()=>placeOrder(pop)}>Confirm</a></button> 


                        </div> 
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Events;
