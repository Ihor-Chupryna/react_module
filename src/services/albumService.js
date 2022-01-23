import {axiosInstance} from "./axiosService";

export const albumsService = {
    getAlbumsUser: (id) => axiosInstance.get(`/users/${id}/albums`).then(value => value.data),
    getPhotos: (id) => axiosInstance.get(`/albums/${id}/photos`).then(value => value.data)
}