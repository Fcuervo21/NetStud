import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000' });

export const getPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);