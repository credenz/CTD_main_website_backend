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
import Registration from './Components/Registration/Registration'; 
import ResetPassword from './Components/Registration/ResetPassword'; 
import Dashboard from './Components/dashboard/Dashboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home1 from './Background/script';


import { Routes,Route } from "react-router-dom";
const App = () => {
  return (
    <>

    <Navbar/>
    <ToastContainer
     position="top-right"
      autoClose={3000}
      // hideProgressBar={false}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      draggable
      // pauseOnHover
      theme = "dark"
      style={{fontSize:'15px'}}    
      />
    <Routes>
   <Route exact path="/" element={<Home/> } />
   <Route exact path="/about" element={ <About/> } />
   <Route exact path="/events" element={ <Events/> } />
   <Route exact path="/contacts" element={ <Contact/> } />
   <Route exact path="/team" element={ <Team/> } />
   <Route exact path="/login" element={ <Registration/> } />
   <Route exact path="/dashboard" element={ <Dashboard/> } />
   <Route exact path="/reset_password_confirm/" element={ <ResetPassword/> } />
  </Routes>
  <Footer/>
 
    </>
   
  )
}


export default App;
