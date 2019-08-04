import { takeEvery } from 'redux-saga/effects'
import * as types from '../constants/ActionTypes'

const handleNewMessage = function* handleNewMessage({username, socket}) {
    yield takeEvery(types.ADD_MESSAGE, (action) => {
        action.author = username;
        socket.send(JSON.stringify(action));
    })
};

export default handleNewMessage;
