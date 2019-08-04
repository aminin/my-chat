import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware  from 'redux-saga'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import chat from './reducers'
import setupSocket from './sockets';
import handleNewMessage from './sagas'
import username from './utils/username'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    chat,
    applyMiddleware(sagaMiddleware)
);

const socket = setupSocket(store.dispatch, username);

console.log(username);

sagaMiddleware.run(handleNewMessage, {socket, username});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
