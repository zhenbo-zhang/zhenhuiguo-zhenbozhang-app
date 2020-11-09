import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setGraph, setValue } from '../actions/action';
import GridComponent from '../component/grid';

class GridContainer extends Component {
    constructor(props) {
        super(props);
        this.initializeGrid = this.initializeGrid.bind(this);
        this.updateGrid = this.updateGrid.bind(this);
        this.calculateNextIterationCellStatus = this.calculateNextIterationCellStatus.bind(
            this
        );

        let graph = this.initializeGrid();
        this.state = {
            graph: graph,
        };
        this.directions = [
            [1, 0],
            [1, 1],
            [0, 1],
            [-1, 1],
            [-1, 0],
            [-1, -1],
            [0, -1],
            [1, -1],
        ];
    }

    render() {
        let cellWidth = this.getCellWidth();
        let cellHeight = this.getCellHeight();
        let status = this.props.simulationStatus;
        return (
            <div className="container">
                <GridComponent
                    graph={this.state.graph}
                    cellHeight={cellHeight}
                    cellWidth={cellWidth}
                    simulationStatus={status}
                    shouldUseHeatmap={
                        this.props.shouldUseHeatmap
                    }></GridComponent>
            </div>
        );
    }

    initializeGrid() {
        const array = new Array(this.props.rows);
        const percentage = 0.05;
        let count = 0;
        for (let i = 0; i < this.props.rows; i++) {
            array[i] = new Array(this.props.columns);
            for (let j = 0; j < this.props.columns; j++) {
                const tmp = Math.random() < percentage;
                array[i][j] = {
                    isAlive: tmp,
                    freshness: tmp ? 10 : 0,
                };
                count += tmp ? 1 : 0;
            }
        }
        this.props.setGraph(array);
        this.props.setValue(count);
        return array;
    }

    updateGrid() {
        if (this.props.simulationStatus) {
            let nextGraph = new Array(this.props.rows);
            let currentGraph = this.state.graph;
            let count = 0;
            for (let i = 0; i < this.props.rows; i++) {
                nextGraph[i] = new Array(this.props.columns);
                for (let j = 0; j < this.props.columns; j++) {
                    nextGraph[i][j] = this.calculateNextIterationCellStatus(
                        i,
                        j,
                        currentGraph,
                        this.props.rows,
                        this.props.columns
                    );
                    if (nextGraph[i][j].isAlive) {
                        count++;
                    }
                }
            }
            this.props.setValue(count);
            this.props.setGraph(nextGraph);
            this.setState({
                graph: nextGraph,
            });
        }
    }

    calculateNextIterationCellStatus(
        rowIndex,
        columnIndex,
        graph,
        rows,
        columns
    ) {
        let livingNeighborCount = 0;
        for (let i = 0; i < this.directions.length; i++) {
            let [x, y] = this.directions[i];
            let nextX = x + rowIndex;
            let nextY = y + columnIndex;
            if (
                nextX >= 0 &&
                nextX < rows &&
                nextY >= 0 &&
                nextY < columns &&
                graph[nextX][nextY].isAlive
            ) {
                livingNeighborCount++;
            }
        }
        let isCellNextSimulationAlive;
        let freshness = graph[rowIndex][columnIndex].freshness;
        if (graph[rowIndex][columnIndex].isAlive) {
            isCellNextSimulationAlive =
                livingNeighborCount === 2 || livingNeighborCount === 3;
        } else {
            isCellNextSimulationAlive = livingNeighborCount == 3;
        }
        if (isCellNextSimulationAlive) {
            freshness = 10;
        } else {
            freshness = Math.max(0, freshness - 1);
        }
        return { isAlive: isCellNextSimulationAlive, freshness: freshness };
    }

    componentDidMount() {
        this.interval = setInterval(this.updateGrid, this.props.frequency);
    }

    getCellWidth() {
        let maxWidth = 600;
        return Math.floor(maxWidth / this.props.columns);
    }

    getCellHeight() {
        let maxHeight = 600;
        return Math.floor(maxHeight / this.props.rows);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
}

const mapStateToProps = state => {
    return {
        rows: state.rows,
        columns: state.columns,
        graph: state.graph,
        frequency: state.frequency,
        shouldUseHeatmap: state.heatmap,
    };
};

const mapDispatchToProps = dispatch => ({
    setValue: value => {
        dispatch(setValue(value));
    },
    setGraph: graph => {
        dispatch(setGraph(graph));
    },
});

GridContainer.propTypes = {
    rows: PropTypes.number.isRequired,
    columns: PropTypes.number.isRequired,
    graph: PropTypes.array.isRequired,
    setValue: PropTypes.func.isRequired,
    setGraph: PropTypes.func.isRequired,
    simulationStatus: PropTypes.bool.isRequired,
    frequency: PropTypes.number.isRequired,
    shouldUseHeatmap: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(GridContainer);
