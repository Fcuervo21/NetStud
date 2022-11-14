import { CREATE_POST, FETCH_ALL_POSTS, LIKE_POST } from "../reduxConstants/postsConstants";

export default (posts = [], action) => {
	switch (action.type) {
		case CREATE_POST:
			return {...posts, createPost: [action.payload]};
		case FETCH_ALL_POSTS:
			return action.payload;
		case LIKE_POST:
			return {likePosts: [action.payload]};
		default:
			return posts;
	}
};
