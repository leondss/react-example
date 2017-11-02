export const ActionTypes = {
    ADD_USER: 'ADD_USER',
    UPDATE_USER: 'UPDATE_USER',
    REMOVE_USER: 'REMOVE_USER',
    LIST_USER: 'LIST_USER',
};

export function addUser(user) {
    return {type: ActionTypes.ADD_USER, user};
}

export function updateUser(user) {
    return {type: ActionTypes.UPDATE_USER, user};
}

export function removeUser(id) {
    return {type: ActionTypes.REMOVE_USER, id};
}

export function listUser() {
    return {type: ActionTypes.LIST_USER};
}