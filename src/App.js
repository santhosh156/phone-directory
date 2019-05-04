import React, { Component } from 'react';
import Header from './Header';
import './App.css'

// let subscribers = [
    //   {
    //     id: 1,
    //     name: "Santhosh",
    //     phone: "9597246630"
    //   },
    //   {
    //     id: 2,
    //     name: "Sowndarya",
    //     phone: "9944709688"
    //   },
    //   {
    //     id: 3,
    //     name: "Hasini",
    //     phone: "NA"
    //   }
    // ];

class App extends Component {

  constructor() {
    super();
    this.state = {
      subscribersList: []
    }
  }

  render() {
    return (
      <div>
        <Header heading="Phone Directory"/>
        <div class="component-body-container">
          <button className="custom-btn add-btn">ADD</button>

          <div className="grid-container heading-container">
            <span className="name-heading">NAME </span>
            <span className="phone-heading">PHONE </span>
          </div>

          {
            this.state.subscribersList.map(sub => {
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
