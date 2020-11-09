import { combineReducers } from '@reduxjs/toolkit';
import numColumnsReducer from './columns';
import counterReducer from './counter';
import frequencyReducer from './frequency';
import heatmapReducer from './heatmap';
import numRowsReducer from './rows';
import setGraphReducer from './setGraph';
import simulationStatusReducer from './simulationStatus';

const rootReducer = combineReducers({
    counter: counterReducer,
    frequency: frequencyReducer,
    rows: numRowsReducer,
    columns: numColumnsReducer,
    status: simulationStatusReducer,
    graph: setGraphReducer,
    heatmap: heatmapReducer,
});

export default rootReducer;
