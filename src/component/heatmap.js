import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HeatmapComponent extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div className="option-container">
                <div className="options">
                    <button className="button" onClick={this.handleClick}>
                        {this.props.shouldUseHeatmap
                            ? 'Stop Using Heatmap'
                            : 'Start Using Heatmap'}
                    </button>
                </div>
            </div>
        );
    }

    handleClick() {
        if (!this.props.simulationStatus) {
            this.props.updateHeatmapConfig();
        }
    }
}

HeatmapComponent.propTypes = {
    shouldUseHeatmap: PropTypes.bool.isRequired,
    updateHeatmapConfig: PropTypes.func.isRequired,
    simulationStatus: PropTypes.bool.isRequired,
};

export default HeatmapComponent;
