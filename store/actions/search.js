import { SET_SEARCH_RESULTS} from './actionTypes';
import axios from 'axios';


export const onFetchSearchInit = (Text) => {
    return dispatch => {
        axios.get("https://api.github.com/search/users?q="+Text)
            .then(res => {
                dispatch(setSearchResults(res.data.items))
            }).catch( err => console.log(err));
    }
}

export const setSearchResults = searchcResults => {
    return {
        type: SET_SEARCH_RESULTS,
        searchResults: searchcResults
    }
}