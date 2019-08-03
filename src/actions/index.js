import * as types from '../constants/ActionTypes'

let nextMessageId = 0;
let nextUserId = 0;

export const addMessage = (message, author) => ({
    type: types.ADD_MESSAGE,
    id: nextMessageId++,
    massage: message,
    author: author
});

export const addUser = (name) => ({
    types: types.ADD_USER,
    id: nextUserId++,
    name
});

// От другого пользователя
export const messageReceived = (message, author) => ({
    types: types.MESSAGE_RECEIVED,
    id: nextMessageId++,
    massage: message,
    author: author
});

export const poulateUsersList = (users) => ({
    types: types.USERS_LIST,
    users
});
