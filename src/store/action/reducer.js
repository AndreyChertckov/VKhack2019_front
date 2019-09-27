import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

initialState = Immutable({
    actions: []
})

export default function reduce(state = initialState, action = {}) {
    switch(action.type) {
        case types.ACTIONS_FETCHED:
            return state.merge({
                actions: action.actions
            })
        default:
            return state;
    }
}


export function getActions(state) {
    return {
        actions: state.action.actions
    }
}