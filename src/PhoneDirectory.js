import React, {Component} from 'react';
import ShowSubscribers from './ShowSubscribers';
import AddSubscriber from './AddSubscriber';

class PhoneDirectory extends Component {

    constructor() {
        super();
        this.state = {
            subscribersList: [
                {
                    id: 1,
                    name: 'Santhosh',
                    phone: '9597246630'
                },
                {
                    id: 2,
                    name: 'Sowmi',
                    phone: '9944709688'
                }
            ]
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

    render() {
        return(
            //<AddSubscriber addSubscriberHandler={this.addSubscriberHandler} />
            <ShowSubscribers subscribersList={this.state.subscribersList}/>
        );
    }
}

export default PhoneDirectory;