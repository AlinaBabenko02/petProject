import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE="SET_USER_PROFILE";
const SET_STATUS="SET_STATUS";

let initialState = {
    posts: [
        { id: 1, post: 'my post 1', likesCount: 10 },
        { id: 2, post: 'my post 2', likesCount: 20 },
        { id: 3, post: 'my post 3', likesCount: 35 },
        { id: 4, post: 'my post 4', likesCount: 15 }
    ],
    newPostText: 'space',
    profile: null,
    status:""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                post: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts:[...state.posts, newPost],
                newPostText : ''
            
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText : action.newText
            } ;
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getUserProfile = (userId) => (dispatch)=>{
    usersAPI.getProfile(userId)
        .then(responce =>{
            dispatch(setUserProfile(responce.data));
        });
 }

 export const getStatus = (userId) => (dispatch)=>{
    profileAPI.getStatus(userId)
        .then(responce =>{
            dispatch(setStatus(responce.data));
        });
 }

 export const updateStatus = (status) => (dispatch)=>{
    profileAPI.updateStatus(status)
        .then(responce =>{
            if(responce.data.resultCode===0) dispatch(setStatus(status));
        });
 }


export const updateNewPosTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;