import * as api from '../../services/api';
import * as types from './actionTypes';

export function fetchClock() {
    return async (dispatch, getState) => {
        try {
            const clock = await api.getClock();
            dispatch({type: types.CLOCK_FETCHED, ...clock})
        } catch (error) {
            console.error(error)
        }
    }
}