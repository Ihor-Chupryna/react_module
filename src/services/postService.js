import {axiosInstance} from "./axiosService";

export const postService = {
    getAll: () => axiosInstance.get('/posts').then(value => value.data),
    getPost: (id) => axiosInstance.get(`/posts/${id}`).then(value => value.data),
    getPostsUser: (id) => axiosInstance.get(`/users/${id}/posts`).then(value => value.data)
}