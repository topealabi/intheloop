import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

export default class Landing extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="landing">
                <img className="logo" src={logo} />
                <Link to="/search">
                    <h1 className="title">In The Loop</h1>
                </Link>
            </div>
        );
    }
}
