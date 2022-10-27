import React from 'react'
import Ctd from "../../images/ctd.png"
import Ctdcopy from "../../images/ctdCopy.png"
import User from "../../images/user.png"

const Dashboard = () => {
  return (
    <>
        <div className="bg ">
         <div className="dashboard">

            <figure class="snip1336">
  <img src={Ctdcopy} alt="sample87" />
  <figcaption>
    {/* <img src={User}
     class="profile" /> */}

    <h2>User Name<span>user@gmail.com</span></h2>

    <p>91234567789</p>
     
     

    <p>Registered Events </p>
    
    <div className="selected-events">
    <ul>
      <li>NTH</li>
      <li>NTH</li>
      <li>NTH</li>
      <li>NTH</li>
    </ul>
    </div>
    {/* <a href="#" class="follow">Follow</a>
    <a href="#" class="info">More Info</a> */}
  </figcaption>
</figure>
</div>
            
        </div>
    </>
  )
}

export default Dashboard