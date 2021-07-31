export interface User {
    ID: number
    profile: Profile
    roles: Role[]
}

export interface Profile {
    username: string
    email: string
}

export interface Role {
    id: number
    name: string
}