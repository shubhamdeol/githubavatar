import { SET_FOLLOWERS_DETAILS, SET_FOLLOWING_DETAILS, SET_USER_DETAILS } from './actionTypes';
import axios from 'axios';


export const onFetchUserInfoInit = ( userLogin ) => {
    return dispatch => {
        axios.get("https://api.github.com/users/"+ userLogin)
            .then(res => {
                console.log(res);
                dispatch(setUserDetails(res.data))
            }).catch( err => console.log(err));
    }
}

export const setUserDetails = userDetails => {
    return {
        type: SET_USER_DETAILS,
        userDetails: userDetails
    }
}