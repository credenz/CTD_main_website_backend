import React, { useState, useEffect } from "react";
import Ctd from "../../images/ctd.png"
import Ctdcopy from "../../images/ctdCopy.png"
import User from "../../images/user.png"
import Events from "../Events/Events";
import axios from "axios";
import {motion} from 'framer-motion';

const Dashboard = () => {
  useEffect(() => {
    fetchprofile();
  }, []);


  const [username, setUsername] = useState("");
  const [first_name, setfirst_name] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [events, setevents] = useState([]);


  const fetchprofile = () => {
    console.log("fetch")
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
      setUsername(response.data.username);
      setfirst_name(response.data.name);
      setEmail(response.data.email);
      setPhone(response.data.phone);
      setevents(response.data.events);
      console.log(events);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

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
    <h2>{username}<span>{email}</span></h2>

    <p>{phone}</p>
    </div>
     
     <div className="selected-center">
    <p>Registered Events </p>
    
    <div className="selected-events">
    <ul>
     {events.length === 0 && <li>No events registered yet!</li>}

    {events.map((event) => (
              <li>{event}</li>
            ))}
      {/* <li>{events}</li> */}
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