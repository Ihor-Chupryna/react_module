import {userUrl} from "../configs/urls";
import {axiosService} from "./axiosService";

export const getUsers = () => axiosService.get(userUrl).then(value => value.data);
