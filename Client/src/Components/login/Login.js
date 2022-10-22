import React, { useRef, useState, useEffect }  from 'react'


const Login = () => {
    const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const containerRef = useRef(null);

  const userDetails = {
    userName: userName,
    email: email
  };

  useEffect(() => {
    const data = localStorage.getItem("userDetails");
    if (data) {
      const parseDataObject = JSON.parse(data);
      setUserName(parseDataObject.userName);
      setEmail(parseDataObject.email);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
  });

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
  return (
    <>
 <div className="bg">
 <div className="login">
 <div className="centerl">
 <div className="container " ref={containerRef}>
      <div className="signin-signup">
        <form action="" className="sign-in-form">
          <h2 className="title">Sign in</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" />
          </div>
          <input type="submit" value="Login" className="btn" />
          <p className="social-text">Or Sign in with social platform</p>
          {/* <div className="social-media">
            <a href="#" className="social-icon">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#" className="social-icon">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i class="fab fa-google"></i>
            </a>
            <a href="#" className="social-icon">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div> */}
          <p className="account-text">
            Don't have an account?{" "}
            <a href="#" id="sign-up-btn2" onClick={() => sign_up_btn2()}>
              Sign up
            </a>
          </p>
        </form>
        <form action="" class="sign-up-form">
          <h2 className="title">Sign up</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="input-field">
            <i className="fas fa-envelope"></i>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" />
          </div>
          <input type="submit" value="Sign up" className="btn" />
          {/* <p className="social-text">Or Sign in with social platform</p>
          <div className="social-media">
            <a href="#" className="social-icon">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="" className="social-icon">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="" className="social-icon">
              <i class="fab fa-google"></i>
            </a>
            <a href="" className="social-icon">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div> */}
          <p className="account-text">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              accusantium dolor, eos incidunt minima iure?
            </p>
            <button
              className="btn"
              id="sign-in-btn"
              onClick={() => sign_in_btn()}
            >
              Sign in
            </button>
          </div>
          <img src="signin.svg" alt="" className="image" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>New to CTD?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              accusantium dolor, eos incidunt minima iure?
            </p>
            <button
              className="btn"
              id="sign-up-btn"
              onClick={() => sign_up_btn()}
            >
              Sign up
            </button>
          </div>
          <img src="signup.svg" alt="" className="image" />
        </div>
      </div>
    </div>
 </div>
 </div>
 </div>
    </>
  )
}

export default Login