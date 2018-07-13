import { SET_ALL_USERS } from '../actions/actionTypes';

const initialState = {
    users: ""
}

const reducer = ( state = initialState, action ) => {
    switch(action.type) {
        case SET_ALL_USERS: 
        return {
            ...state,
            users: [...action.allUsers]
        }
        default: 
        return state;
    }
};

export default reducer;