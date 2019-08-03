import * as types from '../constants/ActionTypes'

const users = (state = [], action) => {
    switch (action.type) {
        case types.USERS_LIST:
            state = action.users;
            return state;
        case types.ADD_USER:
            return state.concat([{
                name: action.name,
                id: action.id
            }]);
        default:
            return state;
    }
};

export default users;
