import {axiosInstance} from "./axiosService";

export const commentsService = {
    getCommentsPost: (id) => axiosInstance.get(`/posts/${id}/comments`).then(value => value.data)
}