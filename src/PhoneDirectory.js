import React, {Component} from 'react';
import ShowSubscribers from './ShowSubscribers';
import AddSubscriber from './AddSubscriber';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class PhoneDirectory extends Component {

    constructor() {
        super();
        this.state = {
            subscribersList: []
        }
    }

    addSubscriberHandler = (newSubscriber) => {

        if (this.state.subscribersList.length > 0) {
            newSubscriber.id = this.state.subscribersList[this.state.subscribersList.length - 1].id + 1;
        }
        else {
            newSubscriber.id = 1;
        }

        this.state.subscribersList.push(newSubscriber);
        this.setState(this.state.subscribersList);
        console.log(this.state.subscribersList);
    }

    deleteSubscriberHandler = (subscriberId) => {
        let subscribersList = this.state.subscribersList;
        let subscriberIndex = 0;

        subscribersList.forEach(function(subscriber, index) {
            if (subscriber.id === subscriberId) {
                subscriberIndex = index;
            }
        }, this);

        let newSubscibers = subscribersList;
        newSubscibers.splice(subscriberIndex, 1);
        this.setState({subscribers: newSubscibers});
    }

    render() {
        return(
            //<AddSubscriber addSubscriberHandler={this.addSubscriberHandler} />
            //<ShowSubscribers subscribersList={this.state.subscribersList}/>
            <Router>
                <div>
                    <Route exact path='/' render = {(prop) => <ShowSubscribers {...prop} subscribersList={this.state.subscribersList} deleteSubscriberHandler={this.deleteSubscriberHandler}/>}/>
                    <Route exact path='/add' render = {({history}, prop) => <AddSubscriber history={history} {...prop} addSubscriberHandler={this.addSubscriberHandler} />}/>
                </div>
            </Router>
        );
    }
}

export default PhoneDirectory;