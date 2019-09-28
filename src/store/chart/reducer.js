import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

const initialState = Immutable({
    weekly: {},
    monthly: {}
})

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.CHART_FETCHED:
            if (Object.keys(action.chart).includes('weekly')) {
                return state.merge({
                    weekly: action.chart.weekly,
                })
            } else {
                return state.merge({
                    monthly: action.chart.monthly,
                })
            }
        default:
            return state;
    }
}


export function getWeeklyChart(state) {
    return state.chart.weekly;
}

export function getMonthlyChart(state) {
    return state.chart.monthly;
}