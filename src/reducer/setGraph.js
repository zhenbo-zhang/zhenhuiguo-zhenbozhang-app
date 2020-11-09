import * as actions from '../actionTypes';

const setGraphReducer = (state = [], action) => {
    switch (action.type) {
        case actions.SET_GRAPH:
            return action.payload;
        case actions.UPDATE_CELL:
            state[action.payload.rowIndex][action.payload.columnIndex] =
                action.payload.value;
            return state;
        default:
            return state;
    }
};

export default setGraphReducer;
