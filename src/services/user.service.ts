import {AxiosResponse} from "axios";
import {User} from "../domain/user";
import $api from "../http";

export default class UserService {
    static async getUser(): Promise<AxiosResponse<User>> {
        return $api.get<User>("/v1/user/profile")
    }
}