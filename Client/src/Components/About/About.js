import React from 'react'
import Logo from "../../images/Logo.png"
import Ieee from "../../images/ieee.png"
const About = () => {
  return (
    <>
    <div className="bg">
    <div className="container about">
        <div className="about-ctd text-center" >
            {/* <h1>CTD</h1> */}
            <img src={Logo} alt="" />
            <div className="content">
            Credenz Tech Dayz is an intra-college annual techfest organized by the PICT IEEE Student Branch where the brightest minds of PICT compete in technical as well as non-technical events. Participants get a chance to test their logical aptitute and problem solving skills in events like like National Computing Contest and Reverse Coding. The Network Treasure Hunt is an online cryptic hunt that challenges you to use every tool at your disposal and piece together every bit of the puzzle. Inquisitive is a mind-boggling test to question your wits and test your general knowledge. This is a chance for the students to go beyond the traditional spheres of academics and make the most of their potential.
            </div>
        </div>
        <div className="aboutus ">
            <h1 className='text-center text-glow'>About Us</h1>
            <div className="ieee">
                <div className="image-ab">
                    <div className="l-1">
                    <img src={Ieee} alt="" /></div>
                    
                    <div className="r-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta error magni repellendus officiis quos voluptatem placeat dolorem eos, eligendi modi! Commodi totam itaque dolores odio voluptas harum magnam unde modi earum deserunt, placeat suscipit consectetur, quae sunt nihil, et neque optio sequi tenetur sit. Praesentium obcaecati maxime dolorem mollitia omnis?</div>
                    </div>

                    <div className="image-ab">
                    <div className="l-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aliquid culpa voluptatibus fuga, cupiditate animi repellendus tempora mollitia quisquam maiores odio magni! Delectus voluptatibus suscipit ab voluptas doloremque? Similique odit ullam quod nisi atque assumenda explicabo distinctio quas corporis eveniet consequuntur totam nemo magnam molestias, aspernatur tempora nostrum, tenetur fugiat quia natus, labore dolorem exercitationem. Adipisci mollitia eius ex neque minus fuga dolore veniam laudantium iure ullam, nihil ratione cumque! Ab nobis enim quam veritatis autem ducimus perspiciatis, accusantium tenetur rem necessitatibus dolorem excepturi culpa aliquam eum facilis iste est beatae illo. Veritatis dignissimos voluptas omnis saepe ullam sed nam?</div>
                    
                    
                    <div className="r-2"><img src={Ieee} alt="" /></div>
                    </div>

                    <div className="image-ab">
                    <div className="l-3">
                    <img src={Ieee} alt="" /></div>
                    
                    <div className="r-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta error magni repellendus officiis quos voluptatem placeat dolorem eos, eligendi modi! Commodi totam itaque dolores odio voluptas harum magnam unde modi earum deserunt, placeat suscipit consectetur, quae sunt nihil, et neque optio sequi tenetur sit. Praesentium obcaecati maxime dolorem mollitia omnis?</div>
                    </div>
                
            </div>
        </div>
    </div>
    </div>
    </>
    
  )
}

export default About