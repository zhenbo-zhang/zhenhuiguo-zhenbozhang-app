import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ResetSimulationComponent extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div className="option-container">
                <div className="options">
                    <button className="button" onClick={this.handleClick}>
                        Reset Simulation
                    </button>
                </div>
            </div>
        );
    }

    handleClick() {
        this.props.pauseSimulation();
        window.location.reload(false);
    }
}

ResetSimulationComponent.propTypes = {
    pauseSimulation: PropTypes.func.isRequired,
};

export default ResetSimulationComponent;
