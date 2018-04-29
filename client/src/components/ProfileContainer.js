import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import { Link } from 'react-router-dom';

export default class ProfileContainer extends Component {
    constructor() {
        super();
    }

    render() {
        console.log('this.props:', this.props);
        return (
            <div className="outer-disk">
                <div className="inner-disk">
                    <img className="profile-pic" src={this.props.imgURL} />
                </div>
            </div>
        );
    }
}

ProfileContainer.propTypes = {
    imgURL: PropTypes.string
};
