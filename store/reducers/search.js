import { SET_SEARCH_RESULTS } from '../actions/actionTypes'

const initialState = {
    searchResults: ""
}

const reducer = ( state = initialState , action ) => {
    switch( action.type ) {
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