import * as action from '../actionTypes';

export const setNumRows = numRows => {
    return {
        type: action.SET_NUM_ROWS,
        payload: numRows,
    };
};

export const setNumColumns = numColumns => {
    return {
        type: action.SET_NUM_COLUMNS,
        payload: numColumns,
    };
};

export const setFrequency = frequency => {
    return {
        type: action.SET_FREQUENCY,
        payload: frequency,
    };
};

export const increment = () => {
    return {
        type: action.INCREMENT,
    };
};

export const decrement = () => {
    return {
        type: action.DECREMENT,
    };
};

export const setValue = value => {
    return {
        type: action.SET_VALUE,
        payload: value,
    };
};

export const setSimulationStatus = value => {
    return {
        type: action.SET_SIMULATION_STATUS,
        payload: value,
    };
};

export const setGraph = graph => {
    return {
        type: action.SET_GRAPH,
        payload: graph,
    };
};

export const updateCell = (rowIndex, columnIndex, value) => {
    return {
        type: action.UPDATE_CELL,
        payload: {
            rowIndex,
            columnIndex,
            value,
        },
    };
};

export const updateHeatmapStatus = () => {
    return {
        type: action.UPDATE_HEATMAP_STATUS,
    };
};
