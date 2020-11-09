import * as actions from '../actionTypes';

const heatmapReducer = (state = false, action) => {
    switch (action.type) {
        case actions.UPDATE_HEATMAP_STATUS:
            return !state;
        default:
            return state;
    }
};

export default heatmapReducer;
