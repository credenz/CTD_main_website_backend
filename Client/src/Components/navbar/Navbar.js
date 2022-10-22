import React from "react";
import { NavLink } from "react-router-dom";
import pisb from "../../images/pisb.png"



const Navbar = () => {
  return (
    <>


  
      <nav className=" navbar navbar-expand-lg fixed-top navbar-light  " >
     
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



 
    </>
  )
}

export default Navbar;
