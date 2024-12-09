export interface IUser{
    id: number
    name: string
    username: string
    image: string
    created_at: string
}

export interface IUserCreate {
    name: string
    username: string
    image: string
}