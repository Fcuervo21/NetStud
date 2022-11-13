import { CREATE_POST, FETCH_ALL_POSTS, LIKE_POST } from "../reduxConstants/postsConstants";

export default (state = [], action) => {
	switch (action.type) {
		case CREATE_POST:
			return {...state, createPost: [action.payload]};
		case FETCH_ALL_POSTS:
			return {...state, fetchAllPosts: [action.payload]};
		case LIKE_POST:
			return {likePosts: [action.payload]};
		default:
			return state;
	}
};
