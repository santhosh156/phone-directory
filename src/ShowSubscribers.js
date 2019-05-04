import React, { Component } from 'react';
import Header from './Header';
import './ShowSubscribers.css'

class ShowSubscribers extends Component {
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
            this.props.subscribersList.map(sub => {
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

export default ShowSubscribers;
