import * as api from '../../services/api';
import * as actionTypes from './actionTypes'


export function fetchLogs() {
    return async (dispatch, getState) => {
        try {
            const logs = await api.getLogs();
            dispatch({type: actionTypes.LOGS_FETCHED, logs});
        } catch(error) {
            console.log(error)
        }
    };
}