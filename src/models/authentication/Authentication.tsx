type Auth = {
    token: string,
    token_expired: Date | undefined,
    isLogged: boolean | null
}

type User = {
    id?: string,
    email: string,
    username: string,
    password: string
}

export type {Auth, User} 