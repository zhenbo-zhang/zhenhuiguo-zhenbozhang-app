import * as actions from '../actionTypes';

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case actions.INCREMENT:
            return state + 1;
        case actions.DECREMENT:
            return state - 1;
        case actions.SET_VALUE:
            return action.payload;
        default:
            return state;
    }
};

export default counterReducer;
