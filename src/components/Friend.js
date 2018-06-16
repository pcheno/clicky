import React, { Component } from 'react';
import "../styles/Friend.css";

export default class Friend extends Component {

//render morty's friend and wait for onClick(handleClick passed in props)
    render() {
        return (
            <img className="img-fluid friend" 
            src={this.props.src} 
            alt={this.props.alt}
            onClick={() => {this.props.handleClick(this.props.id)} }
            />
        )
    }
}