import {postsUrs} from "../configs/urls";
import {axiosService} from "./axiosService";


export const post = (id) => axiosService.get(`${postsUrs}?userId=${id}`).then(value => value.data)