import { CREATE_POST, FETCH_ALL_POSTS, LIKE_POST } from "../reduxConstants/postsConstants";
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