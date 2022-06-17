import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import {Provider} from 'react-redux';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';


const feedBackList = (state = [], action) => {
    switch(action.type){
        case 'SET_FEEDBACK' :
            return action.payload
    }
    return state
}

const feedBackStore = createStore(
    combineReducers({
        feedBackList
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={feedBackStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
