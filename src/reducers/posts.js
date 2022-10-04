import { CREATE_POST, FETCH_ALL_POSTS } from "../constants/postsActions";

export default (state = [], action) => {
	switch (action.type) {
		case CREATE_POST:
			return {...state, createPost: [action.payload]};
		case FETCH_ALL_POSTS:
			return {...state, fetchAllPosts: [action.payload]};
		default:
			return state;
	}
};
