import axios from "axios"
import {Token} from "../domain/token";

export const API_URL = "https://my-lms-moodle.herokuapp.com/api"

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("access_token")}`
    return config
})

$api.interceptors.response.use(config => {
    return config
}, async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true
        try {
            const res = await axios.get<Token>(`${API_URL}/v1/user/auth/refresh`, {withCredentials: true})
            localStorage.setItem("access_token", res.data.access_token)
            return $api.request(originalRequest)
        } catch (e) {
            console.log(e)
        }
    }
    throw error
})

export default $api