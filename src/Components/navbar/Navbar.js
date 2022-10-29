import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import pisb from "../../images/pisb.png"
import { debounce } from "debounce";
import { isLogin, logout } from "../utils/index";
import {Link, useNavigate, Navigate} from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";


const Navbar = () => {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const navigate  = useNavigate();

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);

 const handleLogout = () =>{
  
  var config = {
    method: 'post',
    url: 'https://admin.ctd.pictieee.in/auth/token/logout/',
    headers: { 
      'Authorization':  `Token ${localStorage.getItem("auth-token")}`
    }
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
  logout();
  toast.success("User logged out successfully!")
  navigate('/');
 };

 if(isLogin()){
  return (
    <>


<div style={{ top: visible ? '0' : '-60px' }}>
      <nav className=" navbar  navbar-expand-lg navbar-light  " >
     
  <div className="container-fluid">
   <NavLink className="navbar-brand text-white link-wrapper nav-logo" to="/"><img src={pisb} alt="" /></NavLink>
    <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation "   >
      <span className="navbar-toggler-icon "   ></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-white">
        <li className="nav-item">
      <NavLink   className="nav-link text-white" to="/">Home</NavLink>
      </li>
        <li className="nav-item">
        <NavLink   className="nav-link text-white" to="/about">About</NavLink>
        </li>

        <li className="nav-item">
         <NavLink   className="nav-link text-white" to="/events">Events</NavLink>
        </li>

        <li className="nav-item">
         <NavLink  className="nav-link text-white" to="/contacts">Contact</NavLink>
        </li>

        <li className="nav-item">
         <NavLink  className="nav-link text-white" to="/" onClick={handleLogout}>Logout </NavLink>
        </li>

        <li className="nav-item ">
        <NavLink to="/dashboard"  rel="noreferrer"><i className="fa-solid fa-user user-icon"></i></NavLink>
        </li>
    
        
       </ul>
     
    </div>
  </div>
  
  
</nav>
</div>


 
    </>
  )
 }

 return (
  <>


<div style={{ top: visible ? '0' : '-60px' }}>
    <nav className=" navbar  navbar-expand-lg navbar-light  " >
   
<div className="container-fluid">
 <NavLink className="navbar-brand text-white link-wrapper nav-logo" to="/"><img src={pisb} alt="" /></NavLink>
  <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation "   >
    <span className="navbar-toggler-icon "   ></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-white">
      <li className="nav-item">
    <NavLink   className="nav-link text-white" to="/">Home</NavLink>
    </li>
      <li className="nav-item">
      <NavLink   className="nav-link text-white" to="/about">About</NavLink>
      </li>

      <li className="nav-item">
       <NavLink   className="nav-link text-white" to="/events">Events</NavLink>
      </li>

      <li className="nav-item">
       <NavLink  className="nav-link text-white" to="/contacts">Contact</NavLink>
      </li>

      <li className="nav-item">
       <NavLink  className="nav-link text-white" to="/login">Login </NavLink>
      </li>  
      
     </ul>
   
  </div>
</div>


</nav>
</div>



  </>
)
 
}

export default Navbar;