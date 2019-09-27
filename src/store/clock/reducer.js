import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

initialState = Immutable({
    time: "00:00",
    dailyMinus: 0,
    dailyPlus: 0
})

export default function reduce(state = initialState, action = {}) {
    switch(action.type) {
        case types.CLOCK_FETCHED:
            return state.merge({
                time: action.time,
                dailyPlus: action.dailyPlus,
                dailyMinus: action.dailyMinus
            })
        default:
            return state;
    }
}


export function getClock(state) {
    return {
        time: state.clock.time,
        dailyPlus: state.clock.dailyPlus,
        dailyMinus: state.clock.dailyMinus
    }
}