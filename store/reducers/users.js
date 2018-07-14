import { SET_ALL_USERS, SET_FOLLOWERS_DETAILS, SET_FOLLOWING_DETAILS, SET_SEARCH_RESULTS } from '../actions/actionTypes';

const initialState = {
    users: "",
    searchResults: "",
    follow: ""
}

const reducer = ( state = initialState, action ) => {
    switch(action.type) {
        case SET_ALL_USERS: 
        return {
            ...state,
            users: [...action.allUsers]
        }
        case SET_FOLLOWERS_DETAILS: 
        return {
            ...state,
            users: [...action.followersDetail],
            follow: [...action.followersDetail]
        }
        case SET_FOLLOWING_DETAILS:
        return {
            ...state,
            users: [...action.followingsDetail],
            follow: [...action.followingsDetail]
        }

            case SET_SEARCH_RESULTS:
            return {
                ...state,//and override or add more properties s
                searchResults: [...action.searchResults]
            }
            
        default: 
        return state;
    }
};

export default reducer;