import React, { Component } from 'react';
import CellContainer from '../container/CellContainer';
import PropTypes from 'prop-types';

class GridComponent extends Component {
    render() {
        let cellWidth = this.props.cellWidth;
        let cellHeight = this.props.cellHeight;
        let status = this.props.simulationStatus;
        let shouldUseHeatmap = this.props.shouldUseHeatmap;
        return this.props.graph.map(function (row, rowIndex) {
            return (
                <div key={rowIndex} className="cell-container">
                    {row.map(function (cellStatus, columnIndex) {
                        return (
                            <CellContainer
                                key={(rowIndex, columnIndex)}
                                isAlive={cellStatus.isAlive}
                                freshness={cellStatus.freshness}
                                cellWidth={cellWidth}
                                cellHeight={cellHeight}
                                rowIndex={rowIndex}
                                columnIndex={columnIndex}
                                simulationStatus={status}
                                shouldUseHeatmap={
                                    shouldUseHeatmap
                                }></CellContainer>
                        );
                    })}
                </div>
            );
        });
    }
}

GridComponent.propTypes = {
    simulationStatus: PropTypes.bool.isRequired,
    graph: PropTypes.array.isRequired,
    cellWidth: PropTypes.number.isRequired,
    cellHeight: PropTypes.number.isRequired,
    shouldUseHeatmap: PropTypes.bool.isRequired,
};

export default GridComponent;
