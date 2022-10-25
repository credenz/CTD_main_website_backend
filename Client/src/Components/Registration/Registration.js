import axios from "axios";
import { FaUser, FaLock, FaUserSecret, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail, MdDriveFileRenameOutline } from 'react-icons/md'
import React, { useRef, useState, useEffect } from "react";
import {Link, useNavigate, Navigate} from "react-router-dom";
import {motion} from 'framer-motion';
import Requests from '../../apis/requests';

export default function Registration() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [student_id, setstudent_id] = useState("");
  const [error, setError] = useState("");
  const containerRef = useRef(null);

  function sign_up_btn() {
    containerRef.current.classList.add("sign-up-mode");
  }

  function sign_in_btn() {
    containerRef.current.classList.remove("sign-up-mode");
  }

  function sign_up_btn2() {
    containerRef.current.classList.add("sign-up-mode2");
  }

  function sign_in_btn2() {
    containerRef.current.classList.remove("sign-up-mode2");
  }

  const login = async (event)=>{
    event.preventDefault();

    var data = JSON.stringify({
      username, password
    });
    
    var config = {
      method: 'post',
      url: 'http://127.0.0.1:8000/auth/token/login/',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      if(response.data.auth_token !== undefined) localStorage.setItem("auth-token", response.data.auth_token)
      localStorage.setItem("username", username)
      console.log("login success")
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }


  const handleSubmit = async (event)=>{
    event.preventDefault();
    const data = JSON.stringify({username, email, first_name, student_id, password, phone})
    console.log(data);
    await Request.register(data)
    .then((data) =>{
      console.log("success")
      console.log(data)
    })
    .catch((err) =>{
      console.log(err);
    })

    // var axios = require('axios');
    // var data = JSON.stringify({
    //   username, email, first_name, student_id, password, phone
    // });

    // var config = {
    // method: 'post',
    // url: 'http://127.0.0.1:8000/users/',
    // headers: { 
    //  'Content-Type': 'application/json'
    // },
    // data : data
    // };

    // axios(config)
    // .then(function (response) {
    //   console.log(JSON.stringify(response.data));
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  }

  return (
    <div className="bg">
    <div className="login">
    <motion.div initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.3,duration:1}} className="container" ref={containerRef}>
      <div className="signin-signup">
        <form action="" className="sign-in-form" onSubmit={login}>
          <h2 className="title">Sign in</h2>

          {/* username */}
          <div className="input-field">
            <FaUser className="i" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* password */}
          <div className="input-field">
            <FaLock className="i" />
            <input type="password" placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
          </div>
          <input type="submit" value="Login" className="btn" />

          <p className="account-text">
            Don't have an account?{" "}
            <a href="#" id="sign-up-btn2" onClick={() => sign_up_btn2()}>
              Sign up
            </a>
          </p>
        </form>

        {/* sign up form  */}

        <form action="" class="sign-up-form -rescale" onSubmit={handleSubmit}>
          <h2 className="title">Sign up</h2>
          <div className="input-field">
            <FaUser className="i" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* email */}
          <div className="input-field">
            <MdEmail className="i -scale" />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
              pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
              
            />
          </div>

          {/* full name */}
          <div className="input-field">
            < MdDriveFileRenameOutline className="i --scale" />
            <input type="text" placeholder="Full name" 
            value={first_name}
            onChange={(e) => setfirst_name(e.target.value)} ></input>
          </div>

          {/* phone */}
          <div className="input-field">
            <FaPhoneAlt className="i" />
            <input type="text" placeholder="Phone number" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
             ></input>
          </div>

          {/* id */}
          <div className="input-field">
            <FaUserSecret className="i -scale" />
            <input type="text" placeholder="Id"
            value={student_id}
            onChange={(e) => setstudent_id(e.target.value)} ></input>
          </div>

          {/* password */}
          <div className="input-field">
            <FaLock className="i" />
            <input type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password" />
          </div>

          {/* submit */}
          <input type="submit" value="Sign up" className="btn" />


          <p className="account-text">
          {error === "" ? <></> : <p className='err'>{error}</p>}
            Already have an account?{" "}
            <a href="#" id="sign-in-btn2" onClick={() => sign_in_btn2()}>
              Sign in
            </a>
          </p>
        </form>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Member of CTD?</h3>
            <p>
              Great!!! you are a member now
              Come on board we are waiting for you ...
            </p>
            <button
              className="btn"
              id="sign-in-btn"
              onClick={() => sign_in_btn()}
            >
              Sign in
            </button>
          </div>
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>New to CTD?</h3>
            <p>
              Come join us on a wonderful journey on learning and collaborating to build new world!
              Let's go !!!
            </p>
            <button
              className="btn"
              id="sign-up-btn"
              onClick={() => sign_up_btn()}>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </motion.div>
    </div>
    </div>
  );
}
