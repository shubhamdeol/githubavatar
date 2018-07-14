import { SET_USER_DETAILS, SET_FOLLOWERS_DETAILS, SET_FOLLOWING_DETAILS } from '../actions/actionTypes';

const initialState = {
    userDetails: ""
}

const reducer = ( state = initialState, action ) => {
    switch(action.type) {
        case SET_USER_DETAILS: 
        return {
            ...state,
            userDetails: {...action.userDetails}
        }
        
        default: 
        return state;
    }
};

export default reducer;