import React, { Component } from 'react';
import "../styles/Friend.css";

export default class Friend extends Component {


    render() {
        return (
            <img className="img-fluid friend" 
            id={"friend"+this.props.id}
            src={this.props.src} 
            alt={this.props.alt}
            onClick={() => {this.props.handleClick(this.props.id)} }
            />
        )


    }
}