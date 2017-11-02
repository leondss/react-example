import {ActionTypes} from './actions';


export function userProcess(state, action) {
    if (action.type === ActionTypes.ADD_USER) {
        return [...state, action.user];
    } else if (ActionTypes.LIST_USER === action.type) {
        return state;
    }
    return state;
}