import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads
const message = "Start Clicking!";
const score = 0;
const topScore = 0;

const Navbar = () => (
  <div>
    <div className="row navbar">

      <div className="nav-item col-4">
        <h1 >Clicky</h1>
      </div>
      <div className="nav-item col-4 my-auto">
            <h1>{message}</h1>
      </div>
      <div className="nav-item col-4 my-auto">
            <h2>  Your score : {score} | High Score : {topScore} </h2>
      </div>

    </div>
  </div>
);

export default Navbar;
