import * as actions from '../actionTypes';

const numColumnsReducer = (state = 10, action) => {
    switch (action.type) {
        case actions.SET_NUM_COLUMNS:
            return action.payload;
        default:
            return state;
    }
};

export default numColumnsReducer;
