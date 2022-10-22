import React, { useState } from 'react'
import Img1 from "../../images/contact/1.jpg"
import Img2 from "../../images/team/yash.jpg"
import Img3 from "../../images/team/tanmay.jpg"
import Img4 from "../../images/team/shreyas.jpg"



const Team = () => {
  const [team, setTeam]=useState([
    {
      image:Img2,
      name:"Yash Mali",
      link:"https://stackoverflow.com/questions/72528941/how-to-implement-react-icon-properly-with-usestate-hook",
      id:1
    },

  

    {
      image:Img4,
      name:"Shreyas",
      link:"https://www.linkedin.com/in/shreyaschandolkar",
      id:3
    },

    {
      image:Img1,
      name:"Cartoon",
      link:"https://stackoverflow.com/questions/72528941/how-to-implement-react-icon-properly-with-usestate-hook",
      id:4
    },
    {
      image:Img1,
      name:"Cartoon",
      link:"https://stackoverflow.com/questions/72528941/how-to-implement-react-icon-properly-with-usestate-hook",
      id:4
    },
    
    {
      image:Img1,
      name:"Cartoon",
      link:"https://stackoverflow.com/questions/72528941/how-to-implement-react-icon-properly-with-usestate-hook",
      id:5
    },
 
    
  ])
  return (
    <>
        <div className="bg-t">
            <div className="container main-b">
            <div className="head-t text-center text-glow" style={{marginTop:"70px",fontSize:"60px"}}><h1>Team</h1></div>
            <div className="card-f">

            {team.map((member)=>(
              <div class="card-t">
  <div class="ds-top"></div>
  <div class="avatar-holder">
    <img src={member.image} alt="Albert Einstein"/>
  </div>
  <div class="name">
    <a href="" target="_blank">{member.name}</a>
    {/* <h6 title="Followers"><i class="fas fa-users"></i> <span class="followers">90</span></h6> */}
  </div>
  {/* <div class="button">
    
   <a href={member.link} target="_blank"><i class="fa-brands fa-linkedin fa-lg"> </i></a> 
  </div> */}
  <div class="wrapper">
  <ul>
    <li class="linkedin"><a href={member.link}><i class="fa-brands fa-linkedin  fa-2x" aria-hidden="true"></i></a></li>
 
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