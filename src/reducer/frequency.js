import * as actions from '../actionTypes';

const frequencyReducer = (state = 1000, action) => {
    switch (action.type) {
        case actions.SET_FREQUENCY:
            return action.payload;
        default:
            return state;
    }
};

export default frequencyReducer;
