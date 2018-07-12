import { HANDLE_SEARCH } from '../actions/actionTypes'

const initialState = {
    users: "",
    searchResults: ""
}

const reducer = ( state = initialState , action ) => {
    switch( action.type ) {
        case HANDLE_SEARCH:
        return {
            ...state,//and override or add more properties s
        }
        
        default:
            return state;

    }
};

export default reducer;