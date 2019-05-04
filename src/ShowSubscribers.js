import React, { Component } from 'react';
import Header from './Header';
import './ShowSubscribers.css';
import {Link} from 'react-router-dom';

class ShowSubscribers extends Component {

  onDeleteClick = (subscriberId) => {
    this.props.deleteSubscriberHandler(subscriberId);
  }

  render() {
    return (
      <div>
        <Header heading="Phone Directory"/>
        <div className="component-body-container">
          <Link to='/add'>
            <button className="custom-btn add-btn">ADD</button>
          </Link>

          <div className="grid-container heading-container">
            <span className="name-heading">NAME </span>
            <span className="phone-heading">PHONE </span>
          </div>

          {
            this.props.subscribersList.map(sub => {
              return <div id={sub.id} className="grid-container">
                  <span className="grid-item">{sub.name}</span>
                  <span className="grid-item">{sub.phone}</span>
                  <button className="custom-btn del-btn" onClick={this.onDeleteClick.bind(this, sub.id)}>DELETE</button>
                </div>
            })
          }
        </div>
      </div>
    );
  }
}

export default ShowSubscribers;
