type Auth = {
    token: string,
    token_expired: string
}

type User = {
    id?: string,
    email: string,
    username: string,
    password: string
}

export type {Auth, User} 