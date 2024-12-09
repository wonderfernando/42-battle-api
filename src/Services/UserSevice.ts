import { prismaClient } from "../utils/primsaClient"

export class UserService{
    constructor () {}
    
    public login = async ({username, image, name}: {username:string,image:string, name:string }) => {
      const userExists = await this.verifyUser({username})
      if (!userExists) {
        const user = await prismaClient.user.create({
            data: {
                Username: username,
                image: image,
                name: name
            }
        })
        return user
      }
      return userExists
    }

    public verifyUser = async ({username}: {username:string}) => {
       const user = await prismaClient.user.findUnique({
           where: {
            Username: username
           }
       })
       if (user) 
            return user
        return null
    }
}