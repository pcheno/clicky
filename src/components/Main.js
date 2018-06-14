import React, { Component } from 'react';
import Friend from "./Friend";
import friendArray from "../friendArray.json";
import "../styles/Main.css";

console.log(friendArray);

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mix: false
    }
  }

  mixFriends = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}



  handleClick = (id) => {
    this.props.itScored(id);
    this.setState({mix: true});
    this.mixFriends(friendArray)
  }

render() {
  return (
    <div className="main"> 
    <div className="container-fluid middle">
      <div className="jumbotron">Clicks on Morty's friends, but only once </div>
      <div className="container-fluid friend-box"> 
      {friendArray.map(image =>
          <Friend
            src = {image.src}
            alt = {image.name}
            id = {image.id}
            key = {image.id}
            
            handleClick= {this.handleClick}
            />)}
      </div>
    </div>
    </div>
  )
}

}