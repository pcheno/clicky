import React, { Component } from 'react';
import "../styles/Friend.css";

export default class Friend extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <img className="img-fluid friend" src={this.props.scr} alt={this.props.itClicked} />
        )


    }
}