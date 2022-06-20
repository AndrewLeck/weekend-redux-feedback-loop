import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import {Provider} from 'react-redux';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';


// const feedBackList = (state = [], action) => {
//     switch(action.type){
//         case 'SET_FEEDBACK' :
//             return  action.payload
//     }
//     return state
// }

const feeling = (state = [], action) => {
    switch(action.type){
        case 'ADD_FEELING' :
            return action.payload;
        case 'RESET_DATA':
            return []
    }
    return state
}
const understanding = (state = [], action) => {
    switch(action.type){
        case 'ADD_UNDERSTANDING' :
            return action.payload;
        case 'RESET_DATA':
                return []

    }
    return state
}
const support = (state = [], action) => {
    switch(action.type){
        case 'ADD_SUPPORT' :
            return action.payload;
        case 'RESET_DATA':
                return []
    }
    return state
}
const comments = (state = [], action) => {
    switch(action.type){
        case 'ADD_COMMENT' :
            return action.payload;
        case 'RESET_DATA':
            return []
    }
    return state
}


const feedBackStore = createStore(
    combineReducers({
        feeling,
        understanding,
        support,
        comments
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={feedBackStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
