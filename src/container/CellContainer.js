import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { decrement, increment, updateCell } from '../actions/action';
import { connect } from 'react-redux';

class CellContainer extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.generateStyle = this.generateStyle.bind(this);
        this.isAlive = undefined;
        this.freshness = undefined;
    }

    render() {
        let style = this.generateStyle();
        return <div style={style} onClick={this.handleClick}></div>;
    }

    generateStyle() {
        if (this.props.simulationStatus) {
            this.isAlive = this.props.isAlive;
            this.freshness = this.props.freshness;
            return {
                backgroundColor: !this.props.shouldUseHeatmap
                    ? this.props.isAlive
                        ? 'black'
                        : 'white'
                    : this.generateBackgroundColor(),
                width: this.props.cellWidth,
                height: this.props.cellHeight,
                border: 'solid grey 1px',
            };
        } else {
            if (this.isAlive === undefined) {
                this.isAlive = this.props.isAlive;
                this.freshness = this.props.freshness;
            }
            return {
                backgroundColor: !this.props.shouldUseHeatmap
                    ? this.isAlive
                        ? 'black'
                        : 'white'
                    : this.generateBackgroundColor(),
                width: this.props.cellWidth,
                height: this.props.cellHeight,
                border: 'solid grey 1px',
            };
        }
    }

    handleClick() {
        if (!this.props.simulationStatus) {
            if (this.isAlive === undefined) {
                this.isAlive = this.props.isAlive;
                this.freshness = this.props.freshness;
            }
            if (this.isAlive) {
                this.props.decrement();
            } else {
                this.props.increment();
            }
            let tmp = !this.isAlive;
            this.isAlive = tmp;
            this.freshness = tmp ? 10 : 0;
            this.props.updateCell(this.props.rowIndex, this.props.columnIndex, {
                isAlive: tmp,
                freshness: tmp ? 10 : 0,
            });
            this.forceUpdate();
        }
    }

    generateBackgroundColor() {
        return this.mapFreshnessToColor(this.freshness);
    }

    mapFreshnessToColor(freshness) {
        const value = Math.floor((255 * (10 - freshness)) / 10);
        return `rgb(${value}, ${value}, ${value})`;
    }
}

const mapDispatchToProps = dispatch => ({
    increment: () => {
        dispatch(increment());
    },
    decrement: () => {
        dispatch(decrement());
    },
    updateCell: (rowIndex, columnIndex, value) => {
        dispatch(updateCell(rowIndex, columnIndex, value));
    },
});

CellContainer.propTypes = {
    isAlive: PropTypes.bool.isRequired,
    freshness: PropTypes.number.isRequired,
    cellWidth: PropTypes.number.isRequired,
    cellHeight: PropTypes.number.isRequired,
    decrement: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired,
    simulationStatus: PropTypes.bool.isRequired,
    rowIndex: PropTypes.number.isRequired,
    columnIndex: PropTypes.number.isRequired,
    updateCell: PropTypes.func.isRequired,
    shouldUseHeatmap: PropTypes.bool.isRequired,
};

export default connect(null, mapDispatchToProps)(CellContainer);
