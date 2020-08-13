import React, { Component } from 'react';
import Navbar from "./Navbar";
import "../styles/Header.css";


export default class Header extends Component {

// rendering the header containing only the navbar with the scores
  render() {
     return (<header className="header"> <Navbar score={this.props.score}  topScore={this.props.topScore}/> </header>)
  }

}





