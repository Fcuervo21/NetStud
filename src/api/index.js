import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000' });

export const getPosts = () => API.get('/posts/post');
export const createPost = (newPost) => API.post('/posts', newPost);

export const signInApi = (formData) => API.post('/user/signin', formData);

export const signUpApi = (formData) => API.post('/user/signup', formData);