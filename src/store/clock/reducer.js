import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

initialState = Immutable({
    time: "00:00",
    plusOverall: 0,
    minusOverall: 0
})

export default function reduce(state = initialState, action = {}) {
    switch(action.type) {
        case types.CLOCK_FETCHED:
            return state.merge({
                time: action.time,
                plusOverall: action.plusOverall,
                minusOverall: action.minusOverall
            })
        default:
            return state;
    }
}


export function getClock(state) {
    return {
        time: state.clock.time,
        plusOverall: state.clock.plusOverall,
        minusOverall: state.clock.minusOverall
    }
}