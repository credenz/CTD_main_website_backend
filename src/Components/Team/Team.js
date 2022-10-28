import React, { useState } from 'react'

import Img1 from "../../images/team/haripriya.jpg"
import Img2 from "../../images/team/yash.jpg"
import Img3 from "../../images/team/sanket.jpg"
import Img4 from "../../images/team/shreyas.jpg"
import Img5 from "../../images/team/harsh.jpg"
import Img6 from "../../images/team/devraj.jpg"




const Team = () => {
  const [team, setTeam]=useState([
    {
      image:Img1,
      name:"Haripriya Kulkarni",
      link:"http://www.linkedin.com/in/haripriyakulkarni",
      id:1
    },

  

    {
      image:Img2,
      name:"Yash Mali",
      link:"https://www.linkedin.com/in/yash-mali-b8886a217",
      id:2
    },

    {
      image:Img3,
      name:"Sanket Telunagi",
      link:"https://www.linkedin.com/in/sanket-telunagi",
      id:3
    },
    {
      image:Img4,
      name:"Shreyas Chandolkar",
      link:"https://www.linkedin.com/in/shreyaschandolkar/",
      id:4
    },
    
    {
      image:Img5,
      name:"Harsh Bhat",
      link:"https://www.linkedin.com/in/harshbhat/",
      id:5
    },

    {
      image:Img6,
      name:"Devraj Shetake",
      link:"https://www.linkedin.com/in/devraj-shetake-439606206/",
      id:6
    },
 
    
  ])
  return (
    <>
        <div className="bg-t">
            <div className="container main-b">
            <div className="head-t text-center text-glow" ><h1>TEAM</h1></div>
            <div className="card-f">

            {team.map((member)=>(
              <div class="card-t" key={member.id}>
  <div class="ds-top"></div>
  <div class="avatar-holder">
    <img src={member.image} alt="sd"/>
  </div>
  <div class="name">
   
    <p style={{fontSize:"18px"}}>{member.name}</p>
    {/* <h6 title="Followers"><i class="fas fa-users"></i> <span class="followers">90</span></h6> */}
  </div>
  {/* <div class="button">
    
   <a href={member.link} target="_blank"><i class="fa-brands fa-linkedin fa-lg"> </i></a> 
  </div> */}
  <div class="wrapper">
  <ul>
    <li class="linkedin"><a href={member.link} target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin  fa-2x" aria-hidden="true"></i></a></li>
 
  </ul>
</div>
 </div>
  ))}
</div>

</div>
        </div>
    </>
  )
}

export default Team