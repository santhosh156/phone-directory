import React, { Component } from 'react';
import Header from './Header';
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <button className="addButton">ADD</button>
        <div className="details">
          <span className="name">NAME </span><span className="phone">PHONE </span>
        </div>
      </div>
    );
  }
}

export default App;
