import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

const initialState = Immutable({
    id: 0,
    text: '',
})

export default function reduce(state = initialState, action = {}) {
    switch(action.type) {
        case types.FACT_FETCHED:
            return state.merge({
                id: action.fact.id,
                text: action.fact.text
            })
        default:
            return state;
    }
}


export function getFact(state) {
    return {
        text: state.fact.text
    }
}