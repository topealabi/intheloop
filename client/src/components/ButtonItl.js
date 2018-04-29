import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ButtonItl extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input
                className={this.props.htmlClass}
                type="button"
                name={this.props.htmlName}
                value={this.props.htmlValue}
            />
        );
    }
}

ButtonItl.propTypes = {
    htmlClass: PropTypes.string,
    htmlName: PropTypes.string,
    htmlValue: PropTypes.string
};
