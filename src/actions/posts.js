import { CREATE_POST, FETCH_ALL_POSTS, LIKE_POST, FETCH_MY_POSTS, FETCH_ALL_LIKED_POST, NUMBER_lIKES } from "../reduxConstants/postsConstants";
import * as api from "../api/index.js";

export const getPosts = () => async (dispatch) =>{
    try {
        // Information about the request
        const { data } = await api.getPosts();
        dispatch({ type: FETCH_ALL_POSTS, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (newPost) => async (dispatch) =>{
    try {
        // Information about the request
        const { data } = await api.createPost(newPost);
        dispatch({ type: CREATE_POST, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const changeLike = (idPost) => async (dispatch) =>{
    try {
        // Information about the request
        const { data } = await api.likePost(idPost);
        dispatch({ type: LIKE_POST, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const getMyPosts = (myId) => async (dispatch) =>{
    try {
        // Information about the request
        const { data } = await api.getMyPosts(myId);
        dispatch({ type: FETCH_MY_POSTS, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const getMyLikedPost = (myId) => async (dispatch) =>{
    try {
        // Information about the request
        const { data } = await api.getAlllikedPost(myId);
        dispatch({ type: FETCH_ALL_LIKED_POST, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const numberOfLikesInUser = (myId) => async (dispatch) =>{
    try {
        // Information about the request
        const { data } = await api.numberOfLikesInUser(myId);
        dispatch({ type: NUMBER_lIKES, payload: data });
    } catch (error) {
        console.log(error);
    }
}