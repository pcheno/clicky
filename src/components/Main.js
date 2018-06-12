import React, { Component } from 'react';
import Friend from "/.Friend";
import friendArray from "../friendArray.json";
import "../styles/Main.css";

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mix: false
    }
  }

  mixFriends = (array) => {
    const aL = array.length;
    for (let i=0; i < aL; i++) {
      let x = Math.floor(Math.random() * aL);
      let xxx = array[i];
      array[i] = array[x];
      array[x] = xxx;
    }
  }

  itClicked = (id) => {
    this.props.itScored(id);
    this.setState({mix: true});
    this.mixFriends(friendArray)
  }

render() {
  return (
    <div> 
      <div className="jumbotron">Clicks on Morty's friends, but only once </div>
      <div className="container friend-box"> {friendArray.map(image =>
          <Friend
            id = {image.id}
            key = {image.id}
            alt = {image.name}
            src = {image.src}
            itClicked = {this.itClicked}
            />
      )}
      </div>
    </div>
  )
}

}