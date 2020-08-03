import { Component } from 'react';
import Login from './Login';
import Signup from './Signup';
export default class Auth extends Component {
    constructor() {
        super();
        this.state = {
            login: true
        };

        this.onSwitch = this.onSwitch.bind(this);
    }

    onSwitch() {
        this.setState({
            login: !this.state.login
        })
    }

    render() {
        if (this.state.login) {
            return <Login onSwitch={this.onSwitch} />
        }
        else {
            return <Signup onSwitch={this.onSwitch} />
        }
    }
}