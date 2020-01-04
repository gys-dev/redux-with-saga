import {INCREASE, DECREASE, LOAD_API} from '../actions/type'

const initalState = 0;

export default function (state = initalState, action) {
    switch (action.type) {
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        case LOAD_API: {
            return action.payload;
        }
        default:
            return state;       
    }
}