import React, { Component } from 'react';
import Header from './Header';
import './App.css'

class App extends Component {
  render() {

    let subscribers = [
      {
        id: 1,
        name: "Santhosh",
        phone: "9597246630"
      },
      {
        id: 2,
        name: "Sowndarya",
        phone: "9944709688"
      },
      {
        id: 3,
        name: "Hasini",
        phone: "NA"
      }
    ];

    return (
      <div>
        <Header />
        <div class="component-body-container">
          <button className="custom-btn add-btn">ADD</button>

          <div className="grid-container heading-container">
            <span className="name-heading">NAME </span>
            <span className="phone-heading">PHONE </span>
          </div>

          {
            subscribers.map(sub => {
              return <div id={sub.id} className="grid-container">
                  <span className="grid-item">{sub.name}</span>
                  <span className="grid-item">{sub.phone}</span>
                  <button className="custom-btn del-btn">DELETE</button>
                </div>
            })
          }

        </div>

      </div>
    );
  }
}

export default App;
