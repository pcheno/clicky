import React, { Component } from 'react';
import Navbar from "./Navbar";
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

export default class Header extends Component {


render() {
  return (<header className="header"> <Navbar score={this.props.score}  topScore={this.props.topScore}/> </header>)
}

}





