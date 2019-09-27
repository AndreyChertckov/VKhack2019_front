import * as api from '../../services/api';
import * as actionTypes from './actionTypes'


export function fetchFact() {
    return async (dispatch, getState) => {
        try {
            const fact = await api.getFact();
            dispatch({type: actionTypes.FACT_FETCHED, fact});
        } catch(error) {
            console.log(error)
        }
    };
}