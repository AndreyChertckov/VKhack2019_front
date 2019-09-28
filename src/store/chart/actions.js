import * as api from '../../services/api';
import * as actionTypes from './actionTypes'


export function fetchChart(type='weekly') {
    return async (dispatch, getState) => {
        try {
            const chart_data = await api.getChart(type);
            let chart = {};
            chart[type] = chart_data;
            console.log(chart);
            dispatch({type: actionTypes.CHART_FETCHED, chart});
        } catch(error) {
            console.log(error)
        }
    };
}