import {axiosInstance} from "./axiosService";

export const userService = {
    getAll: () => axiosInstance.get('/users').then(value => value.data),
    getUser: (id) => axiosInstance.get(`/users/${id}`).then(value => value.data)
}