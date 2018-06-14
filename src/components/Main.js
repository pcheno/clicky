import React, { Component } from 'react';
import Friend from "./Friend";
import friendArray from "../friendArray.json";
import "../styles/Main.css";

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