import {INCREASE, DECREASE, SHOW_INDICATE, DISAPEAR_INDICATE, USER_FETCH_REQUEST, LOAD_API} from './type'

export const counterIncrease= () => ({type: INCREASE})
export const counterDecrease= () => ({type: DECREASE})
export const loadFromAPI = (couter) => ({type: LOAD_API, payload: couter})
export const fetchRequest = () => ({type: USER_FETCH_REQUEST})
export const setLoading = (status) => {
    return status == 1 ? {type: SHOW_INDICATE} : {type: DISAPEAR_INDICATE};
}



