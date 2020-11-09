import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LiveCellsCountComponent extends Component {
    render() {
        return (
            <div className="container">
                <div className="option-container">
                    <h1 className="title">
                        Live Cells Count: {this.props.counter}
                    </h1>
                </div>
            </div>
        );
    }
}

LiveCellsCountComponent.propTypes = {
    counter: PropTypes.number.isRequired,
};

export default LiveCellsCountComponent;
