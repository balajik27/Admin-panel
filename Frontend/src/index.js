import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AllReducers } from './rootreducer';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk' 

const Store = createStore(AllReducers , applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={Store}>
        <App />
    </Provider>
);

//ctrl + shift + k to del line
 
