import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducer';

const saveState = state => {
    try {
        const serializedState = JSON.stringify(state);
        window.sessionStorage.setItem('app_state', serializedState);
    } catch (error) {
        return undefined;
    }
};

const loadState = () => {
    try {
        const serializedState = window.sessionStorage.getItem('app_state');
        if (!serializedState) return undefined;
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

const oldState = loadState();

const store = createStore(
    rootReducer,
    oldState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    saveState(store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
