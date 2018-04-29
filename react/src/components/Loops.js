import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import faCamera from '@fortawesome/fontawesome-free-solid/faCamera';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';
import { Link } from 'react-router-dom';

export default class Loops extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="loops-container">
                <div className="navigation">
                    <Link to="/messages">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </Link>
                    <Link to="/messages">
                        <FontAwesomeIcon icon={faCamera} />
                    </Link>
                    <Link to="/messages">
                        <FontAwesomeIcon icon={faHeart} />
                    </Link>
                    <Link to="/messages">
                        <FontAwesomeIcon icon={faBars} />
                    </Link>
                </div>
                <div className="loops-heading">
                    <h1 className="title-loops">Game of Thrones Now</h1>
                </div>
                <div className="loops-members">
                    <h1 className="title">These are the members</h1>
                </div>
            </div>
        );
    }
}
