// import "./Registration.css";
import axios from "axios";
import { FaUser, FaLock, FaUserSecret, FaPhoneAlt, FaGoogle } from 'react-icons/fa';
import { MdEmail, MdDriveFileRenameOutline } from 'react-icons/md'
import {Link, useNavigate, Navigate} from "react-router-dom";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";


export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setfirst_name] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [student_id, setstudent_id] = useState("");
  const [confirm_password, setconfirm_password] = useState("");
  const [error, setError] = useState("");
  const navigate  = useNavigate();

  const containerRef = useRef(null);
  const [isClicked,setClicked] = useState(true) ;

  const sign_up_btn = () => containerRef.current.classList.add("sign-up-mode");
  const sign_in_btn = () => containerRef.current.classList.remove("sign-up-mode");
  const sign_up_btn2 = () => containerRef.current.classList.add("sign-up-mode2");
  const sign_in_btn2 = () => containerRef.current.classList.remove("sign-up-mode2");

  const login = async (event)=>{
    try {
       event.preventDefault();
    } catch (error) {
      console.log(error)
    }
   
    
    var data = JSON.stringify({
      username, password
    });
    
    var config = {
      method: 'post',
      url: 'https://admin.ctd.pictieee.in/auth/token/login/',
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
      toast.success("User logged in!");
      navigate('/');
    })
    .catch(function (error) {
      toast.error("Invalid Credentials!");
      console.log(error);
    });
    
  }

  const sendResetLink = async (event) => {
    event.preventDefault();
    let data = {email}
    var config = {
      method: 'post',
      url: 'https://admin.ctd.pictieee.in/auth/users/reset_password/',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      toast.info("Reset link sent on your mail.")
      navigate('/');
    })
    .catch(function (error) {
      toast.error("Unable to send reset link.")
      console.log(error);
    });
  }

  const handleSubmit = async (event)=>{
    event.preventDefault();
    
    var data = JSON.stringify({
      username, email, first_name, student_id, password, phone
    });

    var config = {
    method: 'post',
    url: 'https://admin.ctd.pictieee.in/users/',
    headers: { 
     'Content-Type': 'application/json'
    },
    data : data
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      console.log(typeof response.data.email);
      console.log(typeof response.data.username);
      if (typeof response.data.email === typeof []){
        toast.error("Email already exists!");
      }
      else if (typeof response.data.username === typeof []){
        toast.error("Username already exists!");
      }
      else {
        toast.success("User Registration successful!")
        login()};
    })
    .catch(function (error) {
      console.log()
    });
  }

  return (
    <div className="bg">
    <div className="login">
    <div className="container" ref={containerRef}>
      <div className="signin-signup">
        <form action="" className="sign-in-form" onSubmit={isClicked ?  login : sendResetLink}>
          <h2 className="title">{isClicked ? "Sign in" : "Reset Password"}</h2>

          {/* email  */}
          <div className="input-field" style={{display : (isClicked ? "none" : "flex")}}>
            <FaUser className="i" />
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            required/>
          </div>

          {/* username  */}
          <div className="input-field" style={{display : (isClicked ? "flex" : "none")}} >
            <FaUser className="i" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          
          <div className="input-field" style={{display : (isClicked ? "flex" : "none")}}>
            <FaLock className="i" />
            <input type="password" placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}  required/>
          </div>

          
          {/* <div className="input-field" style={{display : (isClicked ? "none" : "flex")}}>
            <FaLock className="i" />
            <input type="password" placeholder="Confirm Password" 
             value={confirm_password}
             onChange={(e) => setconfirm_password(e.target.value)}/>
          </div> */}

          <input type="submit" value={isClicked ? "Login" : "Send Link"} className="btn"required />

          <p className="recover-text">
            {isClicked ? "Forgot" : "Have"} password?{" "}
            <a href="#" onClick={() => setClicked(!isClicked)}>
              {isClicked ? "Reset password" : "Sign in"}
            </a>
          </p>

          <p className="account-text">
            Don't have an account?{" "}
            <a href="#" id="sign-up-btn2" onClick={sign_up_btn2}>
              Sign up
            </a>
            <br/>
            {isClicked ? "Forgot" : "Have"} password?{" "}
            <a href="#" onClick={() => setClicked(!isClicked)}>{isClicked ? "Set Password" : "Sign in"}</a>
          </p>

          {/* <p className="social-text">Or Sign in with social platform</p>
          <div className="social-media">
            <a href="#" className="social-icon">
              <FaGoogle className="i"/>
            </a>
          </div> */}
 
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
              required
            />
          </div>

          {/* email */}
          <div className="input-field">
            <MdEmail className="i -scale" />
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
              required/>
          </div>

          {/* full name */}
          <div className="input-field">
            < MdDriveFileRenameOutline className="i --scale" />
            <input type="text" placeholder="Full name" 
            value={first_name}
            onChange={(e) => setfirst_name(e.target.value)} required></input>
          </div>

          {/* phone */}
          <div className="input-field">
            <FaPhoneAlt className="i" />
            <input type="text" placeholder="Phone number" 
            pattern="^\d{10}$" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)} required></input>
          </div>

          {/* id */}
          <div className="input-field">
            <FaUserSecret className="i -scale" />
            <input type="text" placeholder="PICT registration ID" 
            value={student_id}
            onChange={(e) => setstudent_id(e.target.value)}
            pattern="\(E2K|C2K|I2K)\d{8}$"
            required></input>
          </div>

          {/* password */}
          <div className="input-field">
            <FaLock className="i" />
            <input type="password" placeholder="Password" 
             value={password}
             onChange={(e) => setPassword(e.target.value)} required/>
          </div>

          {/* submit */}
          <input type="submit" value="Sign up" className="btn" required/>

          <p className="account-text">
            Already have an account?{" "}
            <a href="#" id="sign-in-btn2" onClick={sign_in_btn2}>
              Sign in
            </a>
          </p>

        </form>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Already registered?</h3>
            <p>
              Sign in to register for the events.
            </p>
            <button className="btn" id="sign-in-btn" onClick={sign_in_btn}>Sign in</button>
          </div>
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Haven't registered yet?</h3>
            <p>
            Register now to participate in Credenz Tech Days 2022! 
            </p>
            <button className="btn" id="sign-up-btn" onClick={sign_up_btn}> Sign up </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}