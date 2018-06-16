import React, { Component } from 'react';
import "../styles/Navbar.css";

export default class Navbar extends Component {

// the scores are passed in and updated at change
  render() {
    return(
      <div>
        <nav>
          <div className="row">
            <div className="nav-item col-4"> <p className="navbar-brand my-auto">Clicky</p> </div>
            <div className="nav-item col-4 my-auto"> Get clicking! </div>
            <div className="nav-item col-4 my-auto"> Your score : {this.props.score} | High score : {this.props.topScore} </div>
          </div>
        </nav>
      </div>
    )
  }


}

