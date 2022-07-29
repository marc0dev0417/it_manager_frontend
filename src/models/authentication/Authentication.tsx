type Auth = {
    token: string,
    expired_date: string
}

type User = {
    id?: string,
    email: string,
    username: string,
    password: string
}

export type {Auth, User} 