import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000' });

export const getPosts = () => API.get('/posts/post');
export const getMyPosts = (idUser) => API.post('/posts/myposts', idUser);
export const createPost = (newPost) => API.post('/posts/post', newPost);

export const likePost = (formData) => API.post('/posts/likePost', formData);
export const numberOfLikesInUser = (idUser) => API.post('/posts/howManyLikes', idUser);
export const getAlllikedPost = (idUser) => API.post('/posts/getAllLikedPosts', idUser);

export const signInApi = (formData) => API.post('/user/signin', formData);
export const signUpApi = (formData) => API.post('/user/signup', formData);