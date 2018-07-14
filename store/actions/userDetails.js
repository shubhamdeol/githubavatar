import { SET_FOLLOWERS_DETAILS, SET_FOLLOWING_DETAILS, SET_USER_DETAILS } from './actionTypes';
import axios from 'axios';


export const onFetchUserInfoInit = ( userLogin ) => {
    return dispatch => {
        axios.get("https://api.github.com/users/"+ userLogin)
            .then(res => {
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

const setFollowersDetails = followersDetail => {
    return {
        type: SET_FOLLOWERS_DETAILS,
        followersDetail: followersDetail
    }
}

export const onFetchFollowingsInit = follwing_url => {
    return dispatch => {
        const following = follwing_url.slice(0,follwing_url.length-13)
        axios.get(following).then( res => {
            dispatch(setFollowersDetails(res.data))
        }).catch( err => console.log(err))
    }
}

const setFollowingDetails = (followingsDetail) => {
    return {
        type: SET_FOLLOWING_DETAILS,
        followingsDetail: followingsDetail
    }
}

export const onFetchFollowersInit = followers => {
    return dispatch => {
        console.log(followers);
        axios.get(followers).then( res => {
            dispatch(setFollowingDetails(res.data))
        }).catch( err => console.log(err))
    }
}