import { gql } from '@apollo/client';
import client from '../client';
import { Component } from 'react';



export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    async onSubmit(event) {
        console.log('button clicked ', this.state);
        const response = await client
            .mutate({
                mutation: gql`mutation Signup{
                signup(
                    email: "${this.state.email}",
                    password: "${this.state.password}",
                    name: "${this.state.name}"
                ){
                email,
                name,
                }
            }`
            });
        console.log('response : ', response);
        alert('Signup Success');
        this.props.onSwitch();

    }

    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    handleConfirmPasswordChange(e) {
        this.setState({ confirmPassword: e.target.value });
    }

    render() {
        return (
            <div className="card" >
                <h2>Signup</h2>
                <p>Name</p>
                <input type="text" value={this.state.name} onChange={this.handleNameChange}></input>
                <p>Email</p>
                <input type="email" value={this.state.email} onChange={this.handleEmailChange}></input>
                <p>Password</p>
                <input type="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
                <p>Confirm Password</p>
                <input type="password" value={this.state.confirmPassword} onChange={this.handleConfirmPasswordChange}></input>
                <br />
                <button onClick={this.onSubmit}>Submit</button>
                <p>Already have an account?<br />
                    <a onClick={this.props.onSwitch}>Login</a>
                </p>
            </div>
        )
    }

}