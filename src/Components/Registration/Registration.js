// import "./Registration.css";
import { FaUser, FaLock, FaUserSecret, FaPhoneAlt, FaGoogle } from 'react-icons/fa';
import { MdEmail, MdDriveFileRenameOutline } from 'react-icons/md'
import React, { useRef, useState } from "react";


export default function App() {

  const containerRef = useRef(null);
  const [isClicked,setClicked] = useState(true) ;

  const sign_up_btn = () => containerRef.current.classList.add("sign-up-mode");
  const sign_in_btn = () => containerRef.current.classList.remove("sign-up-mode");
  const sign_up_btn2 = () => containerRef.current.classList.add("sign-up-mode2");
  const sign_in_btn2 = () => containerRef.current.classList.remove("sign-up-mode2");

  return (
    <div className="bg">
    <div className="login">
    <div className="container" ref={containerRef}>
      <div className="signin-signup">
        <form action="" className="sign-in-form">
          <h2 className="title">{isClicked ? "Sign in" : "Set Password"}</h2>

          {/* username */}
          <div className="input-field">
            <FaUser className="i" />
            <input
              type="text"
              placeholder="Username"
            />
          </div>

          {/* password */}
          <div className="input-field">
            <FaLock className="i" />
            <input type="password" placeholder="Password" />
          </div>

          {/* Confirm Password */}
          <div className="input-field" style={{display : (isClicked ? "none" : "flex")}}>
            <FaLock className="i" />
            <input type="password" placeholder="Confirm Password" />
          </div>

          <input type="submit" value={isClicked ? "Login" : "Set Password"} className="btn" />

          <p className="recover-text">
            {isClicked ? "Forgot" : "Have"} password?{" "}
            <a href="#" onClick={() => setClicked(!isClicked)}>
              {isClicked ? "Set password" : "Sign in"}
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

          <p className="social-text">Or Sign in with social platform</p>
          <div className="social-media">
            <a href="#" className="social-icon">
              <FaGoogle className="i"/>
            </a>
          </div>
 
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
            <input type="text" placeholder="Phone number" pattern="^\d{10}$" ></input>
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
            <h3>New to CTD?</h3>
            <p>
              Come join us on a wonderful journey on learning and collaborating to build new world!
              Let's go !!!
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
