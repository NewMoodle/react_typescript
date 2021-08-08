import {makeAutoObservable} from "mobx";
import axios from "axios";
import AuthService from "../services/auth.service";
import {Token} from "../domain/token";
import {API_URL} from "../http";
import {IError} from "../domain/error";

export default class AuthStore {
    _token = {} as Token
    _authenticated = false
    _loading = false
    _error = {} as IError

    constructor() {
        makeAutoObservable(this)
    }

    setToken(tokens: Token) {
        this._token = tokens
    }

    setAuthenticated(authenticated: boolean) {
        this._authenticated = authenticated
    }

    get authenticated() {
        return this._authenticated
    }

    setLoading(loading: boolean) {
        this._loading = loading
    }

    get loading() {
        return this._loading
    }

    setError(error: IError) {
        this._error = error
    }

    get error() {
        return this._error
    }

    async login(email: string, password: string) {
        try {
            this.setLoading(true)
            const res = await AuthService.login(email, password)
            localStorage.setItem("access_token", res.data.access_token)
            this.setAuthenticated(true)
            this.setToken(res.data)
        } catch (e) {
            this.setError({isError: true, message: e.response?.data?.message})
        } finally {
            this.setLoading(false)
        }
    }

    async logout() {
        try {
            this.setLoading(true)
            await AuthService.logout();
            localStorage.removeItem("access_token")
            this.setAuthenticated(false)
            this.setToken({} as Token)
        } catch (e) {
            console.log(e.response?.data?.message)
        } finally {
            this.setLoading(false)
        }
    }

    async checkAuth() {
        try {
            const res = await axios.get<Token>(`${API_URL}/v1/user/auth/refresh`, {withCredentials: true})
            localStorage.setItem("access_token", res.data.access_token)
            this.setAuthenticated(true)
            this.setToken(res.data)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }
}