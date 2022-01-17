import {usersUrl} from "../configs/urls";
import {axiosService} from "./axiosService";

export const getUsers = () => axiosService.get(usersUrl).then(value => value.data);
