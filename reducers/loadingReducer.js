import {SHOW_INDICATE, DISAPEAR_INDICATE} from '../actions/type'

const init = 0;

const loadingReducer = (state = init, action) =>  {
    console.log("pre " + state, action);
    switch (action.type) {
        case SHOW_INDICATE: {
            console.log("forward " + state);
            return 1;
        }
        case DISAPEAR_INDICATE: {
            return 0;
        }
          
        default: 
            return init;
    }
} 

export default loadingReducer;