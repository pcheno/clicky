import React, { Component } from 'react';
import Main from './components/Main';
import Header from './components/Header';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      topScore: 0,
      clicked: []
    }
  }
  itScored = (id) => {
    if (this.state.clicked.includes(id)) {
      this.setState({score:0});
      this.setState({clicked:[]})
    } else {
      this.setState({})
    }
  }



}
