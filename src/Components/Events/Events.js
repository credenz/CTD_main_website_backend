import React, { useState, useEffect } from "react";
import Ncc from "../../images/ncc.png";
import Rc from "../../images/rc.png";
//import Inqu from "../../images/inqu.png";
import Nth from "../../images/nth.png";
//import Modal from "./Modal";
//import styles from "./Modal.module.css";
import Tabs from "./Tabs";

const Events = () => {
  //const [isOpen, setIsOpen] = useState(false);
  const [popupcontent, setpopupcontent] = useState([]);
  const [popuptogle, setpopuptogle] = useState(false);
  const [styling, setstyling] = useState(null);
  const changecontent = (events) => {
    setpopupcontent([events]);
    setpopuptogle(!popuptogle);
    if (styling === null) {
      setstyling({ posiion: "fixed" });
    } else {
      setstyling(null);
    }
  };

  const [popupcontenti, setpopupcontenti] = useState([]);
  const [popuptoglei, setpopuptoglei] = useState(false);
  // const [styling, setstyling] = useState(null);
  const changecontenti = (events) => {
    setpopupcontenti([events]);
    setpopuptoglei(!popuptoglei);
    if (styling === null) {
      setstyling({ position: "fixed" });
    } else {
      setstyling(null);
    }
  };

  const [events, setEvent] = useState([
    {
      image: Nth,
      heade: "National Treasure Hunt",
      //para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?lorem500",
      butto: "Details",
      butto2: "Register",
      info: "Bored with the same regular class?\n Want to deep dive into the world of ciphers and puzzles?\n  NTH got you covered! Network Treasure Hunt is an online version of a treasure hunt but with more adventure and riddles!\n  Put on your thinking hats and join us in the event where LOGIC is all you can think of",
      rules1: "1: All the puzzles will be displayed on nth.credenz.in",
      rules2:
        "2: Each puzzle leads to a unique keyword. This keyword will take you to the next question.",
      rules3:
        "3: The Contest will show a real-time leaderboard for all players.",
      rules4:
        "4: After the contest is concluded, the first person on the leaderboard will be declared as the winner.",
      rules5:
        "5: It is a solo contest, hence any activity with teaming up is strictly restricted.",
      contact1: "ABC : +91 1234",
      contact2: "DEF : +91 1234",
      id: 1,
    },
    {
      image: Ncc,
      heade: "National Computing Contest",
      // para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?lorem500",
      butto: "Details",
      butto2: "Register",
      info: "The best algorithm is ten steps ahead of the second-best. So are you good enough to code the best one? National Computing Competition lets you test your coding skills with other coders. Sign Up to compete for the 'Overlord Coder' title and get a chance to experience real-world coding competition!",
      rules1:
        "1: The contest will contain 5-6 problems that need to be coded in C/C++/Python.",
      rules2:
        " 2: It will be individual competition hence teaming up is strictly restricted.",
      rules3:
        "3: Marking scheme - Junior (+100, -0), Senior (+100, -50) (First value in brackets indicate marks for correct submission and second value in brackets indicate marks for wrong submission",
      rules4:
        "4: The person who submits the most correct solutions will be considered WINNER.",
      contact1: "ABC : +91 1234",
      contact2: "DEF : +91 1234",
      id: 2,
    },
    {
      image: Rc,
      heade: "Reverse Coding",
      // para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?lorem500",
      butto: "Details",
      butto2: "Register",
      info: "Reverse Coding is a coding competition to analyze your problem solving ability with programming knowledge along with mathematical skills. Test your ability to decode the pattern through a decipher and code round in any of the languages - C, C++, Java and Python.",
      rules1:
        "1: The contest will contain 5-6 problems that need to be coded in C/C++/Python.",
      rules2:
        " 2: It will be individual competition hence teaming up is strictly restricted.",
      rules3:
        "3: Marking scheme - Junior (+100, -0), Senior (+100, -50) (First value in brackets indicate marks for correct submission and second value in brackets indicate marks for wrong submission",
      rules4:
        "4: The person who submits the most correct solutions will be considered WINNER.",
      contact1: "ABC : +91 1234",
      contact2: "DEF : +91 1234",
      id: 3,
    },
    // {
    //   image:Nth,
    //   heade:"Nth",
    //   para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?lorem500",
    //   button:"Read More",
    //   id:4
    // },
  ]);
  return (
    <>
      <div className="bg-event">
        <div className="head text-center">
          <h1 className="text-glow">EVENTS</h1>
        </div>
        <div className="container">
          {/* <div>
        LUMINANCE
    </div> */}

          <div className="container-e" style={styling}>
            {events.map((event) => (
              <div className="card" key={event.id}>
                <div className="box">
                  <div className="content">
                    {/* <h2>03</h2> */}
                    <img style={{ height: "150px" }} src={event.image} alt="" />
                    <h3>{event.heade}</h3>
                    <button onClick={() => changecontent(event)}>
                      {event.butto}
                    </button>
                    {/* {isOpen && <Modal setIsOpen={setIsOpen} />} */}
                    <button onClick={() => changecontenti(event)}>
                      {event.butto2}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {popuptogle && (
            <div className="pop_up_container" onClick={changecontent}>
              <div className="pop_up_body" onClick={(e) => e.stopPropagation()}>
                <div className="pop_up_header">
                  <button onClick={changecontent}>x</button>
                </div>
                <div className="pop_up_content">
                  {popupcontent.map((pop) => {
                    return (
                      <div className="pop_up_card">
                        {/* <h1>{pop.heade}</h1>
                    <p>Details: {pop.info}</p>
                    <p>Rules: {pop.rules}</p>
                    <p>Contact: {pop.contact}</p>

                    <div> */}
                        <h1>{pop.heade}</h1>
                        <Tabs>
                          <div label="Details">{pop.info}</div>
                          <div label="Rules">
                            {pop.rules1} <br />
                            {pop.rules2}
                            <br />
                            {pop.rules3}
                            <br />
                            {pop.rules4}
                            <br />
                            {pop.rules5}
                            <br />
                          </div>
                          <div label="Contact">
                            {pop.contact1}
                            <br />
                            {pop.contact2}
                            <br />
                          </div>
                        </Tabs>
                        {/* </div> */}

                        <p></p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
          {popuptoglei && (
            <div className="pop_up_container2" onClick={changecontenti}>
              <div className="pop_up_body2" onClick={(e) => e.stopPropagation()}>
                <div className="pop_up_header2">
                  <button onClick={changecontenti}>x</button>
                </div>
                <div className="pop_up_content2">
                  {popupcontenti.map((pop) => {
                    return (
                      <div className="pop_up_card2">
                        <p>Are you sure you want to register for {pop.heade}?</p>
                        <div className="pop_up_button">
                        <button className="btn_cancel">Cancel</button>
                         <button className="btn_confirm">Confirm</button>
                        </div> 
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Events;
