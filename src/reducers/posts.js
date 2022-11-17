import { CREATE_POST, FETCH_ALL_POSTS, LIKE_POST, FETCH_MY_POSTS, FETCH_ALL_LIKED_POST,NUMBER_lIKES } from "../reduxConstants/postsConstants";

export default (posts = [], action) => {
    switch (action.type) {
        case CREATE_POST:
            return { ...posts, createPost: [action.payload] };
        case FETCH_ALL_POSTS:
            return {...posts, allPosts: action.payload};
        case FETCH_MY_POSTS:
            return { ...posts, allMyPosts: action.payload };
        case FETCH_ALL_LIKED_POST:
            return { ...posts, allLikePosts: action.payload };
        case LIKE_POST:
            return { ...posts, likePosts: [action.payload] };
        case NUMBER_lIKES:
            return { ...posts, numberOfLikes: action.payload };
        default:
            return posts;
    }
};
