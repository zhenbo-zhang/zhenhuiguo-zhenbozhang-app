import React, { Component } from 'react';
import ResetSimulationComponent from '../component/resetSimulation';
import GridContainer from '../container/GridContainer';
import LiveCellsCountComponent from '../component/liveCellsCount';
import StartOrPauseSimulationContainer from '../container/StartOrPauseSimulationContainer';
import { setSimulationStatus, updateHeatmapStatus } from '../actions/action';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeatmapComponent from '../component/heatmap';

class GameComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <LiveCellsCountComponent
                    counter={this.props.counter}></LiveCellsCountComponent>
                <GridContainer
                    simulationStatus={
                        this.props.simulationStatus
                    }></GridContainer>
                <StartOrPauseSimulationContainer
                    simulationStatus={this.props.simulationStatus}
                    reverseSimulationStatus={
                        this.props.reverseSimulationStatus
                    }></StartOrPauseSimulationContainer>
                <ResetSimulationComponent
                    pauseSimulation={
                        this.props.pauseSimulation
                    }></ResetSimulationComponent>
                <HeatmapComponent
                    simulationStatus={this.props.simulationStatus}
                    shouldUseHeatmap={this.props.shouldUseHeatmap}
                    updateHeatmapConfig={
                        this.props.updateHeatmapStatus
                    }></HeatmapComponent>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        simulationStatus: state.status,
        shouldUseHeatmap: state.heatmap,
        counter: state.counter,
    };
};

const mapDispatchToProps = dispatch => ({
    reverseSimulationStatus: isRunning =>
        dispatch(setSimulationStatus(!isRunning)),
    updateHeatmapStatus: () => dispatch(updateHeatmapStatus()),
    pauseSimulation: () => dispatch(setSimulationStatus(false)),
});

GameComponent.propTypes = {
    simulationStatus: PropTypes.bool.isRequired,
    reverseSimulationStatus: PropTypes.func.isRequired,
    shouldUseHeatmap: PropTypes.bool.isRequired,
    updateHeatmapStatus: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
    pauseSimulation: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameComponent);
