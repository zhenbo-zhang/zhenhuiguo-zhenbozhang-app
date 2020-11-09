import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StartOrPauseSimulationContainer extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div className="option-container">
                <div className="options">
                    <button className="button" onClick={this.handleClick}>
                        {this.props.simulationStatus
                            ? 'Stop Simulation'
                            : 'Start Simulation'}
                    </button>
                </div>
            </div>
        );
    }

    handleClick() {
        this.props.reverseSimulationStatus(this.props.simulationStatus);
    }
}

StartOrPauseSimulationContainer.propTypes = {
    simulationStatus: PropTypes.bool.isRequired,
    reverseSimulationStatus: PropTypes.func.isRequired,
};

export default StartOrPauseSimulationContainer;
