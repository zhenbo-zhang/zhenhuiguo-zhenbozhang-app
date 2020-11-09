import * as actions from '../actionTypes';

const numRowsReducer = (state = 10, action) => {
    switch (action.type) {
        case actions.SET_NUM_ROWS:
            return action.payload;
        default:
            return state;
    }
};

export default numRowsReducer;
