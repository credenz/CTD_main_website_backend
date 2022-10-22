import React from 'react'
import Navbar from "./Components/navbar/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import './index.css';
import Home from "./Components/home/Home"
import About from './Components/About/About';
import Events from './Components/Events/Events';
import Team from './Components/Team/Team';
import Contact from './Components/Contact/Contact';
import Footer from './Components/footer/Footer';
import Login from './Components/login/Login';


import { Routes,Route } from "react-router-dom";
const App = () => {
  return (
    <>
 
    <Navbar/>
    <Routes>
   <Route exact path="/" element={<Home/> } />
   <Route exact path="/about" element={ <About/> } />
   <Route exact path="/events" element={ <Events/> } />
   <Route exact path="/contacts" element={ <Contact/> } />
   <Route exact path="/team" element={ <Team/> } />
   <Route exact path="/login" element={ <Login/> } />
  </Routes>
  <Footer/>
 
    </>
   
  )
}


export default App;
