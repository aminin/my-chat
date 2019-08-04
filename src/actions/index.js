import * as types from '../constants/ActionTypes'

let nextMessageId = 0;
let nextUserId = 0;

export const addMessage = (message, author) => ({
    type: types.ADD_MESSAGE,
    id: nextMessageId++,
    message: message,
    author: author
});

export const addUser = (name) => ({
    type: types.ADD_USER,
    id: nextUserId++,
    name
});

// От другого пользователя
export const messageReceived = (message, author) => ({
    type: types.MESSAGE_RECEIVED,
    id: nextMessageId++,
    message: message,
    author: author
});

export const poulateUsersList = (users) => ({
    type: types.USERS_LIST,
    users
});
