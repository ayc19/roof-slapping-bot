import React, { Component } from 'react';
import roofSlap from './roof_slap.jpg';
import './App.css';
import * as axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      slapText: '',
    }
  }

  onSubmit = async () => {
    let config = {
      headers: {'Access-Control-Allow-Origin': '*'}
    }
    const res = await axios.get(`https://roof-slapping-bot.herokuapp.com/word/${this.state.text}`, config )

    let newText; 
    if (!!res.data.text) {
      newText = res.data.text;
    } else {
      newText = 'Sorry no results. Input a new noun.'
    }
    this.setState({slapText: newText});

  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Roof Slapping Bot</h2>
          <div className="searchDiv">
            <input className="searchBar" onChange={this.onChange} type="text" name="text" autoComplete="off" placeholder="Type in a noun..."></input>
            <button onClick={this.onSubmit} className="btn">search</button>
          </div>
          <p className="slapText">{this.state.slapText}</p>
          <img src={roofSlap} className="App-logo" alt="logo" />
          <p className="footerText">Inspired by <a href="https://twitter.com/roofslappingbot?lang=en">roof slapping twitter bot</a></p>
        </header>
      </div>
    );
  }
}

export default App;
