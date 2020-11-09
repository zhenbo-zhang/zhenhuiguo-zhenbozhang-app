import * as actions from '../actionTypes';

const simulationStatusReducer = (state = false, action) => {
    switch (action.type) {
        case actions.SET_SIMULATION_STATUS:
            return action.payload;
        default:
            return state;
    }
};

export default simulationStatusReducer;
