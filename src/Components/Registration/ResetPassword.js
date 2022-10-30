// import "./Registration.css";
import { FaUser, FaLock, FaUserSecret, FaPhoneAlt, FaGoogle } from 'react-icons/fa';
import { MdEmail, MdDriveFileRenameOutline } from 'react-icons/md'
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios';
import {Link, useNavigate, Navigate} from "react-router-dom";
import { logout } from '../utils';


export default function App() {

  const [pass1,setPass1] = useState("");
  const [pass2,setPass2] = useState("");

  const containerRef = useRef(null);
  const [isClicked,setClicked] = useState(true) ;

  const sign_up_btn = () => containerRef.current.classList.add("sign-up-mode");
  const sign_in_btn = () => containerRef.current.classList.remove("sign-up-mode");
  const sign_up_btn2 = () => containerRef.current.classList.add("sign-up-mode2");
  const sign_in_btn2 = () => containerRef.current.classList.remove("sign-up-mode2");

  const navigate = useNavigate();

  const handlePasswordReset = async (event) => {
    event.preventDefault();
    if(pass1 !== pass2){
        toast.error("Passwords don't match!");
        return;
    }
    let url = window.location.href;
    // console.log(url.split("/?"))
    let urlTokens = url.split("/?")
    if(urlTokens.length !== 3){
      toast.error("Invalid Reset Link!");
      return;
    }

    let uid = urlTokens[1];
    let token = urlTokens[2];
    token = token[token.length -1] === '/' ? token.slice(0,token.length-1) : token;
    // console.log(token);

    var data = JSON.stringify({
      uid, token, new_password : pass1
    });
    // console.log(data);
    // console.log(localStorage.getItem("auth-token"), "auth token")
    var config = {
      method: 'post',
      url: 'https://admin.ctd.pictieee.in/auth/users/reset_password_confirm/',
      headers: { 
        // 'Authorization': `Token ${localStorage.getItem("auth-token")}`, 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      // console.log(JSON.stringify(response.data));
      logout();
      toast.success("Password was reset.")
      navigate('/login')
    })
    .catch(function (error) {
      // console.log(error);
      toast.error("Unable to reset password at the moment.")
      navigate('/')
    });
    
    
  }

  return (
    <div className="bg">
    <div className="login">
    <div className="container" ref={containerRef}>
      <div className="signin-signup">
        <form action="" className="sign-in-form" onSubmit={handlePasswordReset}>
          <h2 className="title">{"Reset Password"}</h2>

          {/* username */}
          {/* <div className="input-field">
            <FaUser className="i" />
            <input
              type="email"
              placeholder="Enter your email."
            />
          </div> */}

          {/* password */}
          <div className="input-field">
            <FaLock className="i" />
            <input 
            type="password" 
            placeholder="New Password" 
            value={pass1}
            onChange={(e) => setPass1(e.target.value)}
            />
          </div>

          {/* Confirm Password */}
          <div className="input-field" >
            <FaLock className="i" />
            <input 
            type="password" 
            placeholder="Confirm Password" 
            value={pass2}
            onChange={(e) => setPass2(e.target.value)}
            />
          </div>

          <input type="submit" value={"Reset"} className="btn" />

          {/* <p className="recover-text">
            {isClicked ? "Forgot" : "Have"} password?{" "}
            <a href="#" onClick={() => setClicked(!isClicked)}>
              {isClicked ? "Set password" : "Sign in"}
            </a>
          </p> */}

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
          </div>
  */}
        </form>

        {/* sign up form  */}

        <form action="" class="sign-up-form -rescale">
          <h2 className="title">Sign up</h2>

          <div className="input-field">
            <FaUser className="i" />
            <input
              type="text"
              placeholder="Username"
            />
          </div>

          {/* email */}
          <div className="input-field">
            <MdEmail className="i -scale" />
            <input
              type="text"
              placeholder="Email"
              pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
            />
          </div>

          {/* full name */}
          <div className="input-field">
            < MdDriveFileRenameOutline className="i --scale" />
            <input type="text" placeholder="Full name" ></input>
          </div>

          {/* phone */}
          <div className="input-field">
            <FaPhoneAlt className="i" />
            <input type="text" placeholder="Phone number" pattern="/(7|8|9)\d{9}/" ></input>
          </div>

          {/* id */}
          <div className="input-field">
            <FaUserSecret className="i -scale" />
            <input type="text" placeholder="Id" ></input>
          </div>

          {/* password */}
          <div className="input-field">
            <FaLock className="i" />
            <input type="password" placeholder="Password" />
          </div>

          {/* submit */}
          <input type="submit" value="Sign up" className="btn" />

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
            <h3>Member of CTD?</h3>
            <p>
              Great!!! you are a member now
              Come on board we are waiting for you ...
            </p>
            <button className="btn" id="sign-in-btn" onClick={sign_in_btn}>Sign in</button>
          </div>
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Know your credentials?</h3>
            <p>
              Log in now to register for our events!
            </p>
            <Link className="btn" id="sign-up-btn" to="/login"> Sign in </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}