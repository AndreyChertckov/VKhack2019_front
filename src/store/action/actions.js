import * as api from '../../services/api';
import * as actionTypes from './actionTypes'


export function fetchActions() {
    return async (dispatch, getState) => {
        try {
            const actions = await api.getActions();
            dispatch({type: actionTypes.ACTIONS_FETCHED, actions});
        } catch(error) {
            console.log(error)
        }
    };
}