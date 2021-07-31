import {AxiosResponse} from "axios";
import $api from "../http";
import {Token} from "../domain/token";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<Token>> {
        return $api.post<Token>("/v1/user/login", {email, password})
    }

    static async logout(): Promise<void> {
        return $api.post("v1/user/logout")
    }
}