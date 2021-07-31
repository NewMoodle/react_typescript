import {User} from "../domain/user";
import {makeAutoObservable, toJS} from "mobx";
import UserService from "../services/user.service";

export default class UserStore {
    _user = {} as User
    _admin = false

    constructor() {
        makeAutoObservable(this)
    }

    setUser(user: User) {
        this._user = user
    }

    get user() {
        return toJS(this._user)
    }

    setAdmin(admin: boolean) {
        this._admin = admin
    }

    get admin() {
        if (this.user.roles) {
            for (let role of this.user.roles) {
                if (role.name === "ADMIN")
                    this.setAdmin(true)
            }
        }
        return this._admin
    }

    async loadUser() {
        try {
            const res = await UserService.getUser()
            this.setUser(res.data)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    logout() {
        this.setUser({} as User)
        this.setAdmin(false)
    }
}