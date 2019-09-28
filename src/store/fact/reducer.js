import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

const initialState = Immutable({
    id: 0,
    description: '',
})

export default function reduce(state = initialState, action = {}) {
    switch(action.type) {
        case types.FACT_FETCHED:
            return state.merge({
                id: action.fact.id,
                description: action.fact.description
            })
        default:
            return state;
    }
}


export function getFact(state) {
    return {
        description: state.fact.description
    }
}