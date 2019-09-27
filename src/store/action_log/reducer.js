import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

const initialState = Immutable({
    logs: []
})

export default function reduce(state = initialState, action = {}) {
    switch(action.type) {
        case types.LOGS_FETCHED:
            return state.merge({
                logs: action.logs
            })
        default:
            return state;
    }
}


export function getLogs(state) {
    return {
        logs: state.action_log.logs,
    }
}