import { SET_ALL_USERS } from './actionTypes';
import axios from 'axios';


export const onFetchUsersInit = () => {
    return dispatch => {
        axios.get("https://api.github.com/users")
            .then(res => {
                dispatch(setUserResults(res.data))
            }).catch( err => console.log(err));
    }
}

export const setUserResults = allUsers => {
    return {
        type: SET_ALL_USERS,
        allUsers: allUsers
    }
}