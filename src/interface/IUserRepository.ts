import {IUser} from "./IUser"

export interface IUserRepository {
    create: (name: string, username: string, image:string) => Promise<IUser>
    findByUserName: (name: string) => Promise<IUser | null>
    findById: (id: number) => Promise<IUser | null>
    delete: (id: number) => Promise<void>
    list: () => Promise<IUser[]>
}