import React, { Component } from 'react';
import ButtonItl from './ButtonItl';
import ProfileContainer from './ProfileContainer';
import profileImage from '../img/profiles/1.jpg';
// import { Link } from 'react-router-dom';

export default class Signup extends Component {
    constructor() {
        super();
        this.state = {
            fname: '',
            lname: '',
            telephone: '',
            password: '',
            passwordConfirm: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        console.log(this.state[name]);
    }

    render() {
        return (
            <div className="signup">
                <div className="wave">
                    <ProfileContainer imgURL={profileImage} />
                </div>
                <h1 className="signup-form-name">Welcome Tope!</h1>
                <form className="signup-form">
                    <input
                        onChange={this.handleInputChange}
                        type="text"
                        name="fname"
                        value={this.state.fname}
                        placeholder="First name"
                    />
                    <input
                        onChange={this.handleInputChange}
                        type="text"
                        name="lname"
                        value={this.state.lname}
                        placeholder="Last name"
                    />
                    <input
                        onChange={this.handleInputChange}
                        type="tel"
                        name="telephone"
                        value={this.state.telephone}
                        placeholder="Mobile number"
                    />
                    <input
                        onChange={this.handleInputChange}
                        type="password"
                        name="password"
                        value={this.state.password}
                        placeholder="Password"
                    />
                    <input
                        onChange={this.handleInputChange}
                        type="password"
                        name="passwordConfirm"
                        value={this.state.passwordConfirm}
                        placeholder="Confirm password"
                    />
                    <ButtonItl htmlClass="signup-form-btn" htmlName="submit" htmlValue="Put me in the loop!" />
                </form>
            </div>
        );
    }
}
