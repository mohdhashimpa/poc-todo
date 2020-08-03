import { Component } from "react";
import { gql } from '@apollo/client';
import client from '../client';
import Router from 'next/router'

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.onLogin = this.onLogin.bind(this);

    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    async onLogin() {
        console.log('button clicked ', this.state);
        const response = await client
            .mutate({
                mutation: gql`mutation Login{
                    login(email:"${this.state.email}", password: "${this.state.password}"){
                        token
                    }
                }`
            });
        console.log('response : ', response);
        if (!response.data.login) {
            alert('Invalid Credentials')
        } else {
            alert('Login Success')
            localStorage.setItem('token', response.data.login.token);
            Router.push("/todo", { shallow: true });

        }
    }

    render() {
        return (
            <div className="card" >
                <h2>Login</h2>
                <p>Email</p>
                <input type="email" value={this.state.email} onChange={this.handleEmailChange}></input>
                <p>Password</p>
                <input type="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
                <br />
                <br />
                <button onClick={this.onLogin}>Login</button>
                <p>Doesnt have an account?
                <br />
                    <a onClick={this.props.onSwitch}><b>Signup</b></a>
                </p>
            </div>
        )
    }
}